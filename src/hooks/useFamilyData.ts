import { useEffect, useState } from 'react'
import { fetchAllFamilyData } from '../api/fetchAllFamilyData'
import { FamilyMember } from '../types/family_member'

export function useFamilyData() {
  const [loading, setLoading] = useState<boolean>(false)
  const [familyMembers, setFamilyMembers] = useState<FamilyMember[] | null>(null)
  const [selected, setSelected] = useState<FamilyMember | null>(null)
  const [selectedIndex, setSelectedIndex] = useState(1)

  useEffect(() => {
    setLoading(true)
    fetchAllFamilyData()
      .then((results) => {
        const validResults = results ? results.filter(item => item !== undefined) as FamilyMember[] : null
        setFamilyMembers(validResults)
        setSelected(validResults && validResults?.length > 1 ? validResults[1] : null)
        setLoading(false)
      })
      .catch((e) => {
        setLoading(false)
        console.warn(e)
      })
  }, [])

  useEffect(() => {
    setSelectedIndex(0)
  }, [selected])

  const intervals = selected?.data?.intervals?.length
  const tabs = new Array(intervals).fill('').map((e, i) => `Interval #${i + 1}`)

  const stages = selected?.data.intervals[selectedIndex]?.stages ?? []
  const score = selected?.data?.intervals[selectedIndex]?.score ?? 0
  const tntQty = selected?.data.intervals[selectedIndex]?.timeseries?.tnt?.length ?? 0
  const roomTemperature = selected?.data?.intervals[selectedIndex]?.timeseries?.tempRoomC ?? []
  const bedTemperature = selected?.data?.intervals[selectedIndex]?.timeseries?.tempBedC ?? []
  const respiratoryRate = selected?.data?.intervals[selectedIndex]?.timeseries?.respiratoryRate ?? []
  const heartRate = selected?.data?.intervals[selectedIndex]?.timeseries?.heartRate ?? []

  return {
    loading,
    familyMembers,
    selected,
    setSelected,
    selectedIndex,
    setSelectedIndex,
    tabs,
    stages,
    score,
    tntQty,
    roomTemperature,
    bedTemperature,
    respiratoryRate,
    heartRate,
  }
}
