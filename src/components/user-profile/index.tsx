/*
  Tiedot ja kuvan saa Get Authenticated Athlete avulla, DetailedAthlete objekti.
  Tähän sisään latest activities
*/

import * as React from 'react'
import User from '../../models/User'

class UserTest extends React.Component<User, any> {
  constructor(props: User) {
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