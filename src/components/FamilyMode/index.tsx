import { useEffect, useState } from 'react'
import colors from '@theme/colors'
import Header from '@components/Header'
import Box from '@components/Box'
import Text from '@components/Text'
import FamilyMembers from '@components/FamilyMembers'
import SleepStages from '@components/SleepStages'
import TossesAndTurns from '@components/TossesAndTurns'
import RoomTemperature from '@components/RoomTemperature'
import BedTemperature from '@components/BedTemperature'
import Score from '@components/Score'
import RespiratoryRate from '@components/RespiratoryRate'
import HeartRate from '@components/HeartRate'
import { ScrollView, ActivityIndicator } from 'react-native'
import { fetchAllFamilyData } from '@api/fetchAllFamilyData'
import { FamilyMember } from 'src/types/family_member'
import SegmentedControl from '@react-native-segmented-control/segmented-control'

function FamilyMode() {
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

  const render = !loading && !!familyMembers && familyMembers.length > 0

  const intervals = selected?.data?.intervals?.length
  const tabs = new Array(intervals).fill('').map((e, i) => `Interval #${i + 1}`)

  const stages = selected?.data.intervals[selectedIndex]?.stages ?? []
  const score = selected?.data?.intervals[selectedIndex]?.score ?? 0
  const tntQty = selected?.data.intervals[selectedIndex]?.timeseries?.tnt?.length ?? 0
  const roomTemperature = selected?.data?.intervals[selectedIndex]?.timeseries?.tempRoomC ?? []
  const bedTemperature = selected?.data?.intervals[selectedIndex]?.timeseries?.tempBedC ?? []
  const respiratoryRate = selected?.data?.intervals[selectedIndex]?.timeseries?.respiratoryRate ?? []
  const heartRate = selected?.data?.intervals[selectedIndex]?.timeseries?.heartRate ?? []

  return (
    <>
      {loading && (
        <Box height={'100%'}>
          <Header title='Family Mode' />
          <Box flex={1} alignItems={'center'} justifyContent={'center'}>
            <ActivityIndicator size={'small'} color={'white'} />
            <Text variant={'body'} marginTop={'y-10'}>Loading data...</Text>
          </Box>
        </Box>
      )}
      <ScrollView>
        {render && (
          <Box flex={1}>
            <Header title='Family Mode' />
            <FamilyMembers
              familyMembers={familyMembers}
              selected={selected}
              setSelected={setSelected}
            />
            <Box width={'100%'} paddingHorizontal={'x-20'} marginBottom={'y-20'}>
              <SegmentedControl
                values={tabs}
                selectedIndex={selectedIndex}
                backgroundColor={colors.gray.one}
                onChange={(event) => {
                  setSelectedIndex(event.nativeEvent.selectedSegmentIndex)
                }}
              />
            </Box>
            <Score score={score} />
            <SleepStages stages={stages} />
            <TossesAndTurns tntQty={tntQty} />
            <RoomTemperature tempRoomC={roomTemperature} />
            <BedTemperature tempBedC={bedTemperature} />
            <RespiratoryRate respiratoryRate={respiratoryRate} />
            <HeartRate heartRate={heartRate} />
          </Box>
        )}
      </ScrollView>
    </>

  )
}

export default FamilyMode