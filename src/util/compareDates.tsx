const compareDates = (date1:Date, date2:Date):number => {
  let d1 = new Date(date1)
  d1.setHours(0, 0, 0, 0)
  let d2 = new Date(date2)
  d2.setHours(0, 0, 0, 0)
  return d1.getTime() - d2.getTime()
}
export default compareDates