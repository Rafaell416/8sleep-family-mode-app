import Box from '@components/Box'
import Text from '@components/Text'

interface TossesAndTurnsProps {

}

const TossesAndTurns: React.FC<TossesAndTurnsProps> = ({ }) => {
  return (
    <Box width={'100%'} borderWidth={1} borderColor={'warm'} paddingHorizontal={'x-20'} marginBottom={'y-10'}>
      <Text variant={'title'}>Tosses and turns</Text>

    </Box>
  )
}

export default TossesAndTurns