import React, { Props } from 'react'
import { connect } from 'react-redux'
import { addUser } from '../../store/user/user-reducer'
import { FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap'
import User from '../../models/User'

interface IProps {
  addUser: Function
}

const addUserHandler = (props:IProps) => (event: any) => {
  event.preventDefault()
  const user:User = {
    firstName: event.target.firstName.value,
    lastName: event.target.lastName.value,
    username: event.target.username.value,
    password: event.target.password.value 
  }
  console.log("clearing")
  event.target.firstName.value = ""
  event.target.lastName.value = ""
  event.target.username.value = ""
  event.target.password.value = ""

  props.addUser(user)
}
const addUserComponent: React.SFC<IProps> = (props:IProps) => {
  return (
    <div>
      <form onSubmit={addUserHandler(props)}>
        <FormGroup>
          <FormLabel>First name</FormLabel>
          <FormControl type="text" name="firstName" placeholder="Enter first name" />

          <FormLabel>Last name</FormLabel>
          <FormControl type="text" name="lastName" placeholder="Enter last name" />

          <FormLabel>Username</FormLabel>
          <FormControl type="text" name="username" placeholder="Enter username" />

          <FormLabel>Password</FormLabel>
          <FormControl type="password" name="password" />

          <Button type="submit">Login</Button>
        </FormGroup>
      </form>
    </div>
  )
}

const mapDispatchersToProps = {
  addUser
}
export default connect(null, mapDispatchersToProps)(addUserComponent)