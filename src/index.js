import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
// import StoreContext, {Provider} from "./StoreContext";
import {Provider} from "react-redux";


// let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            {/*<React.StrictMode>*/}
                {/*<App state={store.getState()}*/}
                <Provider store={store}>
                    <App
                        // state={state}
                        // dispatch={store.dispatch.bind(store)}
                        // updateNewPostText = {store.updateNewPostText.bind(store)}
                        //  store={store}
                    />
                </Provider>
            {/*</React.StrictMode>,*/}
        </BrowserRouter>,
        document.getElementById('root')
    );
// }

// rerenderEntireTree(store.getState());
// rerenderEntireTree();
//
// store.subscribe(() => {
//     // let state = store.getState();
//     rerenderEntireTree();
// });




