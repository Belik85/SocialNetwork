import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, BrowserRouter} from "react-router-dom";
import Users from "./components/Users/CommentedUsers";
import state from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";



const App = (props) => {


    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                {/*<Route exact path='/dialogs' component={Dialogs}/> */}
                {/*<Route exact path='/profile' component={Profile}/>*/}

                <Route exact path='/dialogs' render={() =>
                    <DialogsContainer
                        // store={props.store}
                        /*<Dialogs store={props.store}*/
                        // state={props.state.dialogsPage}

                    />}/>
                <Route exact path='/profile' render={() =>
                    <ProfileContainer
                        // store={props.store}
                        // profilePage={props.state.profilePage}
                        // addPost={props.addPost}
                        // dispatch={props.dispatch}
                        // updateNewPostText = {props.updateNewPostText}
                    />}/>

                <Route exact path='/users' render={() => <UsersContainer/>}/>


            </div>

        </div>

    );
}

export default App;
