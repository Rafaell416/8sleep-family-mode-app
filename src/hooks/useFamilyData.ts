import { useEffect, useState } from 'react'
import { fetchAllFamilyData } from '@api/fetchAllFamilyData'
import { FamilyMember } from 'src/types/family_member'

export function useFamilyData() {
  const [loading, setLoading] = useState<boolean>(true)
  const [familyMembers, setFamilyMembers] = useState<FamilyMember[] | null>(null)
  const [selected, setSelected] = useState<FamilyMember | null>(null)
  const [selectedIndex, setSelectedIndex] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const results = await fetchAllFamilyData()
        const validResults = results ? results.filter(item => item !== undefined) as FamilyMember[] : null
        setFamilyMembers(validResults)
        setSelected(validResults && validResults.length > 1 ? validResults[1] : null)
      } catch (error) {
        console.warn(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    setSelectedIndex(0)
  }, [selected])

  const intervals = selected?.data?.intervals
  const tabs = intervals ? intervals.map((_, i) => `Interval #${i + 1}`) : []
  const selectedInterval = intervals?.[selectedIndex]

  const stages = selectedInterval?.stages ?? []
  const score = selectedInterval?.score ?? 0
  const tntQty = selectedInterval?.timeseries?.tnt?.length ?? 0
  const roomTemperature = selectedInterval?.timeseries?.tempRoomC ?? []
  const bedTemperature = selectedInterval?.timeseries?.tempBedC ?? []
  const respiratoryRate = selectedInterval?.timeseries?.respiratoryRate ?? []
  const heartRate = selectedInterval?.timeseries?.heartRate ?? []

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
    heartRate
  }
}
