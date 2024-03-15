import React, { Component, SyntheticEvent } from "react";
import '../Login.css';

class Register extends Component {
    first_name = '';
    last_name = '';
    email = '';
    password = '';
    password_confirm = '';

    submit = (e: SyntheticEvent) => {
        e.preventDefault();

        console.log({
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password: this.password,
            password_confirm: this.password_confirm,
        });
    }

    render() {
        return (
            <main className="form-signin w-100 m-auto">
                <form onSubmit={this.submit}>
                    <h1 className="h3 mb-3 fw-normal">Please Register</h1>

                    <div className="form-floating">
                        <input className="form-control" id="floatingInput" placeholder="First Name"
                            required onChange={e => this.first_name = e.target.value} />
                        <label htmlFor="floatingInput">First Name</label>
                    </div>

                    <div className="form-floating">
                        <input className="form-control" id="floatingInput" placeholder="Last Name"
                            required onChange={e => this.last_name = e.target.value} />
                        <label htmlFor="floatingInput">Last Name</label>
                    </div>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                            required onChange={e => this.email = e.target.value} />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                            required onChange={e => this.password = e.target.value} />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                            required onChange={e => this.password_confirm = e.target.value} />
                        <label htmlFor="floatingPassword">Password Confirm</label>
                    </div>

                    <button className="btn btn-primary w-100 py-2" type="submit">Submit</button>
                    <p className="mt-5 mb-3 text-body-secondary">&copy; 2024</p>
                </form>
            </main>
        );
    }
}

export default Register;