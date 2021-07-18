import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <h2>Home</h2>

                <div className = 'container'>
                    <div className = 'col-md-6'>
                        <h4><Link to = '/signup'>Sign Up</Link></h4>
                    </div>

                    <div className = 'col-md-6'>
                        <h4><Link to = '/login'>Log In</Link></h4>
                    </div>

                </div>
            </div>
        )
    }
}
