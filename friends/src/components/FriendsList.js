import React from 'react'

import { axiosWithAuth } from '../utilities/axiosWithAuth'


class FriendsList extends React.Component {
    state = {
        friends: []
    }

    componentDidMount() {
        this.getFriends()
    }
    getFriends = () => {
        axiosWithAuth().get('/friends')
            .then(res => {
                console.log('AB: FriendsList.js: getFriend', res)
                this.setState({
                    friends: res.data
                })
            })
            .catch(err => {
                console.log('error in FriendsList.js', err.message)
            })
    }

    render() {
        return (
            <div>
                <h2>Friends</h2>
                {this.state.friends.map((friend) => {
                    return (
                        <div>
                            <p>Name: {friend.name}</p>
                            <p>Age: {friend.age}</p>
                            <p>E-Mail: {friend.email}</p>
                        </div>)

                })}
            </div>
        )
    }
}



export default FriendsList
