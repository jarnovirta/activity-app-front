import React, { Props } from 'react'
import { connect } from 'react-redux'
import { addUser } from '../../store/user/user-reducer'

interface IProps {
  addUser: Function
}
const addUserComponent: React.SFC<IProps> = (props) => {
  return (
    <div>
      wtf
    </div>
  )
}

const mapDispatchersToProps = {
  addUser
}
export default connect(null, mapDispatchersToProps)(addUserComponent)