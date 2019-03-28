module.exports = () => {
  let activities = getActivityList('Ride')
  activities = activities.concat(getActivityList('Run'))
  activities = activities.concat(getActivityList('Swim'))
  return { "api/strava-activities": activities }
}
const getActivityList = (activityType) => {
  let activities = []
  let date = new Date()
  for (let i = 0; i < 30; i++) {
    activities.push({
      "name" : "Happy Friday",
      "distance" : Math.floor(Math.random() * 30000 * 10) / 10,
      "moving_time" : Math.floor(Math.random() * 2 * 60 * 60 * 10) / 10,
      "elapsed_time" : Math.floor(Math.random() * 2 * 60 * 60 * 10) / 10,
      "type" : activityType,
      "workout_type" : 2,
      "id" : 154504250376823,
      "start_date_local" : date.toISOString(),
      "average_speed" : Math.floor(Math.random() * 17 * 10) / 10,
      "max_speed" : Math.floor(Math.random() * 30 * 10) / 10,
      "kilojoules" : Math.floor(Math.random() * 1200 * 10) / 10,
      "description" : "Some run",
      "calories" : Math.floor(Math.random() * 10000 * 10) / 10,
    })
    date.setDate(date.getDate() - 1)
  }
  return activities
}