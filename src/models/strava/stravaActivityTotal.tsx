export default interface StravaActivityTotal {
  count: number,          // The number of activities considered in this total
  distance: number,       // The total distance covered by the considered activities
  moving_time: number,    // The total moving time of the considered activities
  elapsed_time: number,   // The total elapsed time of the considered activities
  elevation_gain: number  // The total elevation gain of the considered activities

}