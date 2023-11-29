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
import SegmentedControl from '@react-native-segmented-control/segmented-control'
import { useFamilyData } from '../../hooks/useFamilyData'
import colors from '@theme/colors'

function FamilyMode() {
  const {
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
  } = useFamilyData()

  const render = !loading && !!familyMembers && familyMembers.length > 0

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