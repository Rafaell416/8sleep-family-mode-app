interface TimeseriesEntry {
  tnt: Array<[string, number]>
  tempRoomC: Array<[string, number]>
  tempBedC: Array<[string, number]>
  respiratoryRate: Array<[string, number]>
  heartRate: Array<[string, number]>
}

export interface SleepStage {
  stage: 'awake' | 'light' | 'deep'
  duration: number
}

interface Interval {
  id: string
  ts: string
  stages: SleepStage[]
  score: number
  timeseries: TimeseriesEntry
}

export interface SleepData {
  intervals: Interval[]
}