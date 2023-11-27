import Header from '@components/Header'
import Box from '@components/Box'
import FamilyMembers from '@components/FamilyMembers'


function FamilyMode() {
  return (
    <Box flex={1}>
      <Header title='Family Mode' />
      <FamilyMembers />
    </Box>
  )
}

export default FamilyMode