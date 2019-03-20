/*
  Tähän samalla tavalla kuin Stravan etusivulla on yhteenveto viikko (, kuukausi) ja vuosi.
  Ja joku valitsin jolla voi valita jonkin aktiviteeteista joille on suorituksia
*/
import React from 'react'
import { connect } from 'react-redux'
import StravaDetailedActivity from '../../models/StravaDetailedActivity'

interface IProps {
  activities: Array<StravaDetailedActivity>
}
const ActivitiesSummary: React.FunctionComponent<IProps> = (props: IProps) => {
  if (props.activities[0] != null) console.log(props.activities[1].name)
  return (
    <div>
      ACTIVITIES SUMMARY
      count = { props.activities.length }
    </div>
  )
}
const mapStateToProps = (state: any) => {
  return {
    activities: state.activities
  }
}
export default connect(mapStateToProps)(ActivitiesSummary)