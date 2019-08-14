import React, { useState } from 'react'
import { connect } from 'react-redux'
import { login } from '../../store/user/user-reducer'
import { FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap'
import { IProps, IInputChangeEvent } from './types'
import { ICredentials } from '../../models/Credentials'
import { withRouter } from 'react-router'

const Login: React.SFC<IProps> = (props: IProps) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  
  const handleSubmit = () => {
    const creds: ICredentials = {
      username, password
    };
    (document.getElementById("loginForm") as HTMLFormElement).reset()
    props.login(creds)
    props.history.push("/")
  }
  const handleUsernameChange = (event: IInputChangeEvent) => {
    setUsername((event.target as HTMLInputElement).value)
  }
  const handlePasswordChange = (event: IInputChangeEvent) => {
    setPassword((event.target as HTMLInputElement).value)
  }
  return (    
    <div>
      <h4>Login</h4>
      <form id="loginForm">
        <FormGroup>
          <FormLabel>Username</FormLabel>
          <FormControl id="username" onChange={handleUsernameChange} type="text"
            name="username" placeholder="Enter username" />

          <FormLabel>Password</FormLabel>
          <FormControl onChange={handlePasswordChange} type="password"
            id="password" name="password" placeholder="Enter password" />
          <Button onClick={handleSubmit}>Login</Button>
        </FormGroup>
      </form>
    </div>
  )
}

const mapDispatchersToProps = {
  login
}

export default withRouter(connect(null, mapDispatchersToProps)(Login))
