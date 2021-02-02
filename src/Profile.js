import React from "react"
import './assets/css/main.css';

function Profile({ user }){
    const {email, password, name } = user || {};

    return (
        <>
        <section className="wrapper alt">
            <h1 className="major special">Profile</h1>
            <p>
                <dt>Email</dt>
                <dt>{email}</dt>
                <dt>Password</dt>
                <dt>{password}</dt>
                <dt>Name</dt>
                <dt>{name}</dt>
            </p>
        </section>
        </>
    )
}

export default Profile