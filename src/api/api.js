import axios from "axios";


// const baseUrl = `https://social-network.samuraijs.com/api/1.0/`;

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "2158c1f0-b930-4df4-a5bc-507fb90d4c0a"
    }
});


export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 10) => {
        return instance.get( `users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    follow(userId) {


    },
    unfollow(userId) {

    }
}

// export const getUsers = (currentPage = 1, pageSize = 10) => {
    // return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
    // return instance.get(baseUrl + `users?page=${currentPage}&count=${pageSize}`)
    // return instance.get( `users?page=${currentPage}&count=${pageSize}`)
    //     .then(response => {
    //          return response.data
    //       });

    // return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
    //     {
    //         withCredentials: true,
    //     })
// }



export const getUsers2 = (currentPage = 1, pageSize = 10) => {
    return instance.get( `follow?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        });
}