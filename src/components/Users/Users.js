import React from "react";
import styles from "./users.module.css"

let Users = (props) => {

    if(props.users.length === 0) {
        props.setUsers([{
            id: 1,
            photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT32B6kRnn-YYaHQ1PBibKZlH_3UFd-5Th-4w&usqp=CAU",
            followed: false,
            fullName: 'Dmitry',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {id: 2, followed: true, fullName: 'Ivan', status: 'No problem', location: {city: 'Moscow', country: 'Russia'}},
        {
            id: 3,
            photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT32B6kRnn-YYaHQ1PBibKZlH_3UFd-5Th-4w&usqp=CAU",
            followed: false,
            fullName: 'Roma',
            status: 'You are a game',
            location: {city: 'Kiev', country: 'Ukraine'}
        },
        {
            id: 4,
            photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR14mXbg8nV2aaoAMs3BxYS3EoOK8wR6O8yZg&usqp=CAU",
            followed: true,
            fullName: 'Kamil',
            status: 'Send me a message',
            location: {city: 'Wroclaw', country: 'Poland'}
        },
        {
            id: 5,
            photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT32B6kRnn-YYaHQ1PBibKZlH_3UFd-5Th-4w&usqp=CAU",
            followed: false,
            fullName: 'Dorian',
            status: 'Music of the sun',
            location: {city: 'Bucharest', country: 'Romania'}
        }])
    }


    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.usersPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={ ()=>{props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={ ()=>{props.follow(u.id)}}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>
            )
        }
    </div>


}

export default Users;