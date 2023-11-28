import { useEffect, useState, useCallback } from 'react'
import Header from '@components/Header'
import Box from '@components/Box'
import Text from '@components/Text'
import FamilyMembers from '@components/FamilyMembers'
import SleepStages from '@components/SleepStages'
import TossesAndTurns from '@components/TossesAndTurns'
import RoomTemperature from '@components/RoomTemperature'
import BedTemperature from '@components/BedTemperature'
import { ScrollView, ActivityIndicator } from 'react-native'
import { fetchAllFamilyData } from '@api/fetchAllFamilyData'
import { FamilyMember } from 'src/types/family_member'


function FamilyMode() {
  const [loading, setLoading] = useState<boolean>(false)
  const [familyMembers, setFamilyMembers] = useState<FamilyMember[] | null>(null)
  const [selected, setSelected] = useState<FamilyMember | null>(null)

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

  // console.log('-----')
  // console.log({ selected })

  const render = !loading && !!familyMembers && familyMembers.length > 0

  const stages = selected?.data.intervals[0]?.stages
  const tntQty = selected?.data.intervals[0]?.timeseries?.tnt?.length
  const roomTemperature = selected?.data?.intervals[0]?.timeseries?.tempRoomC
  const bedTemperature = selected?.data?.intervals[0]?.timeseries?.tempBedC

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
            <SleepStages stages={stages} />
            <TossesAndTurns tntQty={tntQty} />
            <RoomTemperature tempRoomC={roomTemperature} />
            <BedTemperature tempBedC={bedTemperature} />
          </Box>
        )}
      </ScrollView>
    </>

  )
}

export default FamilyMode