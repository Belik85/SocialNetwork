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
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
        // return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`)

    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
        // return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`)
    },
    // getProfile(userId) {
    //     return instance.get(`profile/` + userId);
    //     // return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId);
    // },
    getProfile(userId) {
        console.warn("Obsolete method. Please profileApi object.")
        return profileAPI.getProfile(userId)

    },
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
        },
    getStatus(userId) {
        return instance.get(`status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`status/`, {status:status});
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


export const authAPI = {
    me() {
        return instance.get(`auth/me`
            // return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            )
    }
}


export const getUsers2 = (currentPage = 1, pageSize = 10) => {
    return instance.get(`follow?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        });
}