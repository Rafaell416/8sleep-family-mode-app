import { SleepData } from './sleep_data'

export interface RawFamilyMember {
  id: number
  name: string
  photo: string
  datasource: string
}

export interface FamilyMember extends RawFamilyMember {
  data: SleepData
}