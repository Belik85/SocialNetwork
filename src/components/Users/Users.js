import React from "react";
import userPhoto from "../../Pictures/Images/user.jpg";
import styles from "./users.module.css";
import axios from "axios";


class Users extends React.Component {


    // constructor(props) {
    //     super(props);
    //
    // }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    // getUsers = () => {
    //     if(this.props.users.length === 0) {
    //
    //         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
    //             this.props.setUsers(response.data.items);
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
    //         })
    //     }
    // }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }


        return <div>
            {/*<button onClick={this.getUsers}>Get Users</button>*/}

            <div>
                {pages.map(p => {
                  return <span className={this.props.currentPage === p && styles.selectedPage}
                               onClick={(e)=>{
                                   this.onPageChanged(p)}}>{p}</span>
                })}

                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
            </div>
            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.usersPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
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
}

export default Users