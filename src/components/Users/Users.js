import React from "react";
import styles from "./users.module.css"
import axios from "axios";
import userPhoto from "./../../../src/Pictures/Images/user.jpg"

let Users = (props) => {

    let getUsers = () => {
        if(props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                debugger;
                props.setUsers(response.data.items);
                //     [{
                //     id: 1,
                //     photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT32B6kRnn-YYaHQ1PBibKZlH_3UFd-5Th-4w&usqp=CAU",
                //     followed: false,
                //     fullName: 'Dmitry',
                //     status: 'I am a boss',
                //     location: {city: 'Minsk', country: 'Belarus'}
                // },
                //     {id: 2, followed: true, fullName: 'Ivan', status: 'No problem', location: {city: 'Moscow', country: 'Russia'}},
                //     {
                //         id: 3,
                //         photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT32B6kRnn-YYaHQ1PBibKZlH_3UFd-5Th-4w&usqp=CAU",
                //         followed: false,
                //         fullName: 'Roma',
                //         status: 'You are a game',
                //         location: {city: 'Kiev', country: 'Ukraine'}
                //     },
                //     {
                //         id: 4,
                //         photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR14mXbg8nV2aaoAMs3BxYS3EoOK8wR6O8yZg&usqp=CAU",
                //         followed: true,
                //         fullName: 'Kamil',
                //         status: 'Send me a message',
                //         location: {city: 'Wroclaw', country: 'Poland'}
                //     },
                //     {
                //         id: 5,
                //         photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT32B6kRnn-YYaHQ1PBibKZlH_3UFd-5Th-4w&usqp=CAU",
                //         followed: false,
                //         fullName: 'Dorian',
                //         status: 'Music of the sun',
                //         location: {city: 'Bucharest', country: 'Romania'}
                //     }]
            })
        }
    }




    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.usersPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={ ()=>{props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={ ()=>{props.follow(u.id)}}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>
            )
        }
    </div>


}

export default Users;