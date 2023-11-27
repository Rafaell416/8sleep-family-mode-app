import Header from '@components/Header'
import Box from '@components/Box'
import FamilyMembers from '@components/FamilyMembers'
import SleepStages from '@components/SleepStages'
import TossesAndTurns from '@components/TossesAndTurns'


function FamilyMode() {
  return (
    <Box flex={1}>
      <Header title='Family Mode' />
      <FamilyMembers />
      <SleepStages />
      <TossesAndTurns />
    </Box>
  )
}

export default FamilyMode