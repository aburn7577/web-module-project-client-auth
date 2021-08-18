import React from 'react'

import { axiosWithAuth } from '../utilities/axiosWithAuth'

class NewFriend extends React.Component {
    state = {
        id: Date(),
        name: '',
        age: '',
        email: ''
    }
    handleChange = evt => {
        this.setState({
            ...this.state,
            [evt.target.name]: evt.target.value
        })
    }
    handleSubmit = evt => {
        evt.preventDefault()
        axiosWithAuth().post('/friends', this.state)
            .then(res => {
                this.props.history.push('/friends')
            })
            .catch(err => {
                console.log('error in NewFriend', err.message)
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        name='name'
                        type='text'
                        value={this.state.name}
                        onChange={this.handleChange}
                        placeholder='Name'
                    />
                    <input
                        name='age'
                        type='text'
                        value={this.state.age}
                        onChange={this.handleChange}
                        placeholder='Age'
                    />
                    <input
                        name='email'
                        type='text'
                        value={this.state.email}
                        onChange={this.handleChange}
                        placeholder='Email'
                    />
                    <button>Add New Friend</button>
                </form>
            </div>
        )
    }
}
export default NewFriend