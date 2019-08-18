import React, { useState } from 'react'
import { connect } from 'react-redux'
import { login } from '../../store/user/thunks'
import { FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap'
import { ILoginProps, IInputChangeEvent } from './types'
import { ILoginCredentials } from '../../common-types/user'
import { withRouter } from 'react-router'

const Login: React.SFC<ILoginProps> = (props: ILoginProps) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async () => {
    const creds: ILoginCredentials = {
      username, password
    };
    (document.getElementById('loginForm') as HTMLFormElement).reset()
    await props.login(creds)
    props.history.push('/')
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
      <form id='loginForm'>
        <FormGroup>
          <FormLabel>Username</FormLabel>
          <FormControl id='username' onChange={handleUsernameChange} type='text'
            name='username' placeholder='Enter username' />
          <FormLabel>Password</FormLabel>
          <FormControl onChange={handlePasswordChange} type='password'
            id='password' name='password' placeholder='Enter password' />
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
