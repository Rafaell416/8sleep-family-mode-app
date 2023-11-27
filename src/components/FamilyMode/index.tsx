import Header from '@components/Header'
import Box from '@components/Box'
import FamilyMembers from '@components/FamilyMembers'
import SleepStages from '@components/SleepStages'
import TossesAndTurns from '@components/TossesAndTurns'
import Temperature from '@components/Temperature'
import { ScrollView } from 'react-native'


function FamilyMode() {
  return (
    <ScrollView>
      <Box flex={1}>
        <Header title='Family Mode' />
        <FamilyMembers />
        <SleepStages />
        <TossesAndTurns />
        <Temperature />
      </Box>
    </ScrollView>
  )
}

export default FamilyMode