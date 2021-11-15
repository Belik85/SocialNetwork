import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import {connect} from "react-redux";


const MyPostsContainer = (props) => {

    // let state = props.store.getState();
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    // let state = props.store.getState();
                    let state = store.getState();
                    let addPost = () => {
                        // props.store.dispatch(addPostActionCreator());
                        store.dispatch(addPostActionCreator());
                    }
                    let onPostChange = (text) => {
                        let action = updateNewPostTextActionCreator(text);
                        // props.store.dispatch(action);
                        store.dispatch(action);
                    }
                    return <MyPosts
                        updateNewPostText={onPostChange}
                        addPost={addPost}
                        posts={store.getState().profilePage.posts}
                        // posts={state.profilePage.posts}
                        newPostText={store.getState().profilePage.newPostText}
                        // newPostText={state.profilePage.newPostText}
                    />
                }}
        </StoreContext.Consumer>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText


    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;







