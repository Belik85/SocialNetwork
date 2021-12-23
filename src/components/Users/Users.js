import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../Pictures/Images/user.jpg";


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
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>

        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.usersPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
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
                </div>
            )
        }
    </div>

}

export default Users