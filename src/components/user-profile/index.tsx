/*
  Tiedot ja kuvan saa Get Authenticated Athlete avulla, DetailedAthlete objekti.
  Tähän sisään latest activities
*/

import * as React from 'react'
import UserInterface from './UserInterface'

class UserTest extends React.Component<UserInterface, {}> {
  constructor(props: UserInterface) {
    super(props)
  }
  render() {
    return (
      <div>
        { this.props.name }
      </div>
    )
  }
}
export default UserTest