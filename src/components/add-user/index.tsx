import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addUser } from '../../store/user/user-reducer'
import { FormGroup, FormControl, FormLabel,
  Button } from 'react-bootstrap'
import IUser from '../../models/User'
import { IProps, IInputChangeEvent } from './types'


const addUserComponent: React.SFC<IProps> = (props: IProps) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = () => {    
    const user: IUser = {
      firstName, lastName, username, password
    };
    (document.getElementById("addUserForm") as HTMLFormElement).reset()    
    props.addUser(user)    
  }

  const handleFirstNameChange = (event: IInputChangeEvent) => {
    setFirstName((event.currentTarget as any).value)
  }
  const handleLastNameChange = (event: IInputChangeEvent) => {
    setLastName((event.currentTarget as any).value)
  }
  const handleUsernameChange = (event: IInputChangeEvent) => {
    setUsername((event.currentTarget as any).value)
  }
  const handlePasswordChange = (event: IInputChangeEvent) => {
    setPassword((event.currentTarget as any).value)
  }
  return (
    <div>
      <form id="addUserForm">
      <FormGroup>
        <FormLabel>First name</FormLabel>
        <FormControl onChange={handleFirstNameChange} type="text"
          name="firstName" placeholder="Enter first name" />

        <FormLabel>Last name</FormLabel>
        <FormControl onChange={handleLastNameChange} type="text"
          name="lastName" placeholder="Enter last name" />

        <FormLabel>Username</FormLabel>
        <FormControl onChange={handleUsernameChange} type="text"
          name="username" placeholder="Enter username" />

        <FormLabel>Password</FormLabel>
        <FormControl onChange={handlePasswordChange} type="password"
          name="password" placeholder="Enter password" />

        <Button onClick={handleSubmit}>Submit</Button>
      </FormGroup>
      </form>
    </div>
  )
}

const mapDispatchersToProps = {
  addUser
}
export default connect(null, mapDispatchersToProps)(addUserComponent)
