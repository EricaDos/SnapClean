import React, { Component } from "react";
import axios from 'axios';

export default class SignUp extends Component {

    handleSubmit = e => {
      e.preventDefault();
      // Our data that is being linked to our Schemas
      const data = {
        full_name: this.fullName,
        email: this.emaill,
        password: this.password
      };
      // axios url and post method being used to input data
      axios.post('http://localhost:5000/signup', data).then(
        res => {
          console.log(res)
        }

      ).catch(
        err => {
          console.log(err);
        }
      )
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" className="form-control" placeholder="Full name"
                      onChange={e => this.full_name = e.target.value}/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email"
                    onChange={e => this.email = e.target.value}/>

                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"
                    onChange={e => this.password = e.target.value}/>

                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    }
}
