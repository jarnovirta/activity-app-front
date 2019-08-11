/*
  Tiedot ja kuvan saa Get Authenticated Athlete avulla, DetailedAthlete objekti.
  Tähän sisään latest activities
*/

import * as React from 'react'
import IUser from '../../models/User'

class UserTest extends React.Component<IUser, any> {
  constructor(props: IUser) {
    super(props)
  }
  render() {
    return (
      <div>
        { this.props.username }
      </div>
    )
  }
}
export default UserTest