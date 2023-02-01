import React from 'react'

const Login = () => {
  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="is-4-dekstop">
                <form className="box">
                    <div className="field">
                        <label className="label">Email or Username</label>
                        <div className="controls">
                            <input type="text" placeholder="Username" className="input"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="controls">
                            <input type="password" placeholder="********" className="input"/>
                        </div>
                    </div>
                    <div className="field">
                        <button className="button is-success is-fullwidth">Login</button>                        
                    </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
