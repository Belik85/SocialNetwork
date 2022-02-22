import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../Pictures/Images/user.jpg";
import {NavLink} from "react-router-dom";
import axios from "axios";


let Users = (props) => {

    // let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize); было в классовой компоненте
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        {/*<button onClick={this.getUsers}>Get Users</button>*/}
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                    // return <span className={this.props.currentPage === p && styles.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p);
                                 // this.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {



            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to = {'/profile'}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.usersPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id)

                                axios.delete (`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                                    withCredentials: true,
                                    headers: {
                                       "API-KEY": "2158c1f0-b930-4df4-a5bc-507fb90d4c0a"
                                    }

                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id);

                                    }
                                    props.toggleFollowingProgress(false, u.id)
                                });




                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id)
                                axios.post (`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "2158c1f0-b930-4df4-a5bc-507fb90d4c0a"
                                    }

                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id);

                                    }
                                    props.toggleFollowingProgress(false, u.id)
                                });


                            }}>Follow</button>}
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
            </div>)
        }
    </div>

}

export default Users;