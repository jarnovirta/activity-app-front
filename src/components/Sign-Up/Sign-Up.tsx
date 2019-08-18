import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addNewUser } from '../../store/user/thunks'
import { FormGroup, FormControl, FormLabel,
  Button } from 'react-bootstrap'
import { INewUser } from '../../common-types/user'
import { IProps as ISignupProps, IInputChangeEvent } from './types'
import { withRouter } from 'react-router'

const Signup: React.SFC<ISignupProps> = (props: ISignupProps) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async () => {    
    const user: INewUser = {
      firstName, lastName, username, password
    };
    (document.getElementById('addUserForm') as HTMLFormElement).reset()
    await props.addUser(user)    
    props.history.push('/')
  }

  const handleFirstNameChange = (event: IInputChangeEvent) => {
    setFirstName((event.target as HTMLInputElement).value)
  }
  const handleLastNameChange = (event: IInputChangeEvent) => {
    setLastName((event.target as HTMLInputElement).value)
  }
  const handleUsernameChange = (event: IInputChangeEvent) => {
    setUsername((event.target as HTMLInputElement).value)
  }
  const handlePasswordChange = (event: IInputChangeEvent) => {
    setPassword((event.target as HTMLInputElement).value)
  }
  return (
    <div>
      <form id='addUserForm'>
      <h4>Sign Up</h4>
      <FormGroup>
        <FormLabel>First name</FormLabel>
        <FormControl onChange={handleFirstNameChange} type='text'
          name='firstName' placeholder='Enter first name' />

        <FormLabel>Last name</FormLabel>
        <FormControl onChange={handleLastNameChange} type='text'
          name='lastName' placeholder='Enter last name' />

        <FormLabel>Username</FormLabel>
        <FormControl onChange={handleUsernameChange} type='text'
          name='username' placeholder='Enter username' />

        <FormLabel>Password</FormLabel>
        <FormControl onChange={handlePasswordChange} type='password'
          name='password' placeholder='Enter password' />
        <Button onClick={handleSubmit}>Submit</Button>
      </FormGroup>
      </form>
    </div>
  )
}

const mapDispatchersToProps = {
  addUser: addNewUser
}
export default withRouter(connect(null, mapDispatchersToProps)(Signup))
