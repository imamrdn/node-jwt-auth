import React, { useState } from 'react'

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
        <div className="hero-body">
            <div className="container">
            <div className="columns is-centered">
                <div className="is-4-dekstop">
                    <form className="box">
                        <div className="field mt-5">
                            <label className="label">Name</label>
                            <div className="controls">
                                <input type="text" placeholder="name" className="input" value={name} onChange={(e) => setName(e.target.value)}/>
                            </div>
                        </div>
                        <div className="field mt-5">
                            <label className="label">Email</label>
                            <div className="controls">
                                <input type="text" placeholder="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                        </div>
                        <div className="field mt-5">
                            <label className="label">Password</label>
                            <div className="controls">
                                <input type="password" placeholder="********" className="input"value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                        </div>
                        <div className="field mt-5">
                            <label className="label">Confirm Password</label>
                            <div className="controls">
                                <input type="password" placeholder="********" className="input" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                            </div>
                        </div>
                        <div className="field mt-5">
                            <button className="button is-success is-fullwidth">Register</button>                        
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
        </section>
    )
}

export default Register
