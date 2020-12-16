import React, { FormEvent, useState } from 'react'

const API_DOMAIN = process.env.REACT_APP_API_DOMAIN

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const _handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const body = JSON.stringify({ username, password })
    const headers = { 'Content-Type': 'application/json' }
    fetch(API_DOMAIN+'/api/login', {
      method: 'POST',
      mode: 'cors',
      headers,
      body,
    }).then(res=>res.json())
    .then(res => {
      console.log(res)
    })
  }

  return (
    <div style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1>Login</h1>
      <form onSubmit={_handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            value={username} onChange={e=>setUsername(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" 
            value={password} onChange={e=>setPassword(e.target.value)} />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Recordar mi sesión</label>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">Entrar</button>
        </div>
      </form>
    </div>
  )
}

export default Login