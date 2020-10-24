import React from 'react';
import './App.css';
import Header from './components/Header'
import Navbar from  './components/Navbar'


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='content'>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl5AQBqvHdMx-rO3OLbHSUdyb_9HmL1Kfveg&usqp=CAU" />
                </div>
                    <div>
                          ava+description
                    </div>
                         <div>
                                My posts
                             <div>
                                 New post
                             </div>
                          <div>
                             <div>
                                 post 1
                             </div>

                             <div>
                                 post 2
                             </div>
                           </div>
                         </div>

            </div>

        </div>
    );
}

export default App;
