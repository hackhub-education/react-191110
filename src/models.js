import axios from 'axios'
import { baseUrl } from "./config"

export const user = {
    state: {
        profile: {}
    }, // initial state
    reducers: {
        // handle state changes with pure functions
        update(state, user) {
            return { ...state, ...user }
        },
        logout(state) {
            delete state.token
            return { ...state }
        }
    },
    effects: {
        async login(user) {
            axios.post(baseUrl + '/auth/login', user)
                .then(res => {
                    res.data.token && this.update({
                        token: res.data.token,
                        profile: res.data.profile
                    })
                })
        },
        async signup(user) {
            axios.post(baseUrl + '/auth/signup', user)
                .then(res => {
                    res.data.token && this.update({
                        token: res.data.token,
                        profile: res.data.profile
                    })
                })
        },
        async updateProfile(user) {
            axios.put(baseUrl + '/profile', user.profile, {
                headers: {
                    Authorization: 'Bearer ' + user.token
                }
            }).then(res => {
                this.update({ profile: res.data.profile })
                user.history.push('/profile')
            })
        }
    }
}

export const tweets = {
    state: [], // initial state
    reducers: {
        // handle state changes with pure functions
        add(state, tweet) {
            return [tweet, ...state]
        },
        remove(state, id) {
            return state.filter(tweet => tweet._id !== id);
        },
        feed(state, tweets) {
            return tweets
        }
    },
    effects: {
        async loadData() {
            let res = await fetch(baseUrl + '/tweet')
            let data = await res.json()
            this.feed(data.tweets)
        },
        async removeData(data) {
            axios.delete(baseUrl + '/tweet/' + data.id, {
                headers: {
                    Authorization: 'Bearer ' + data.token
                }
            }).then(res => {
                if (res.data.success) {
                    this.remove(data.id)
                } else {
                    console.log(res.data.error)
                }
            })
        },
        async addData(data) {
            axios.post(baseUrl + '/tweet', { ...data }, {
                headers: {
                    Authorization: 'Bearer ' + data.token
                }
            }).then(res => {
                console.log(res.data)
                this.add(res.data.tweet)
            })
        },
    }
}