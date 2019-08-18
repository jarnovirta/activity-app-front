
export enum StravaActivityType {
  AlpineSki = 'AlpineSki', BackcountrySki = 'BackcountrySki',
  Canoeing = 'Canoeing', Crossfit = 'Crossfit',
  EBikeRide = 'EBikeRide', Elliptical = 'Elliptical',
  Golf = 'Golf', Handcycle = 'Handcycle', Hike = 'Hike',
  IceSkate = 'IceSkate', InlineSkate = 'InlineSkate',
  Kayaking = 'Kayaking', Kitesurf = 'Kitesurf',
  NordicSki = 'NordicSki', Ride = 'Ride',
  RockClimbing = 'RockClimbing', RollerSki = 'RollerSki',
  Rowing = 'Rowing', Run = 'Run', Sail = 'Sail',
  Skateboard = 'Skateboard', Snowboard = 'Snowboard', Snowshoe = 'Snowshoe',
  Soccer = 'Soccer', StairStepper = 'StairStepper',
  StandUpPaddling = 'StandUpPaddling', Surfing = 'Surfing',
  Swim = 'Swim', Velomobile = 'Velomobile', VirtualRide = 'VirtualRide',
  VirtualRun = 'VirtualRun', Walk = 'Walk', WeightTraining = 'WeightTraining',
  Wheelchair = 'Wheelchair', Windsurf = 'Windsurf', Workout = 'Workout',
  Yoga = 'Yoga'
}

type TStravaActivityType = typeof StravaActivityType

export default TStravaActivityType