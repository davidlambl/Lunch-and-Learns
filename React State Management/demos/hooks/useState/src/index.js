import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { newUser } from './api'

function Redirect () {
  return <h1>Dashboard</h1>
}

function Loading () {
  return <p>Loading...</p>
}

function Register() {
  const [username, setUsername] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')
  const [registered, setRegistered] = React.useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    setLoading(true)
    setError('')

    newUser({username, email, password})
      .then(() => {
        setLoading(false)
        setError('')
        setRegistered(true)
      }).catch((error) => {
        setLoading(false)
        setError(error)
      })
  }

  if (registered === true) {
    return <Redirect to='/dashboard' />
  }

  if (loading === true) {
    return <Loading />
  }

  return (
    <React.Fragment>
      {error && <p className='error'>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type='text'
          placeholder='username'
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type='password'
        />
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Register />, rootElement);
