import React from 'react'

const Login = () => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Login</h2>
          <div className="card-actions">
            <h1>Username</h1>
            <input type="text" placeholder="" className="input input-neutral" />
            <h1>Password</h1>
            <input type="text" placeholder="" className="input input-neutral" />
            <button className="btn btn-primary bg-blue-600 items-center text-center card-body">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login