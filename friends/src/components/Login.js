import React from 'react'
import axios from 'axios'

class Login extends React.Component {
    state = {
        signIn: {
            username: '',
            password: ''
        }
    }
    handleChange = evt => {
        this.setState({
            signIn: {
                ...this.state.signIn,
                [evt.target.name]: evt.target.value
            }
        })
    }
    login = evt => {
        evt.preventDefault()
        //console.log('clicked login') //Worked
        axios.post('http://localhost:5000/api/login', this.state.signIn)
            .then(res => {
                //console.log('AB: Login.js: login: res', res.data)
                localStorage.setItem('token', res.data.payload)
                this.props.history.push('/friends')
            })
            .catch(err => {
                console.log('AB:login.js: login.post: err.message', err.message)
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                        name='username'
                        type='text'
                        value={this.state.signIn.username}
                        onChange={this.handleChange}
                        placeholder='username here' />
                    <input
                        name='password'
                        type='text'
                        value={this.state.signIn.password}
                        onChange={this.handleChange}
                        placeholder='password here' />
                    <button>To The Friend's List</button>
                </form>
            </div>
        )
    }
}
export default Login