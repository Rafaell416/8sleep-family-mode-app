import Box from '@components/Box'
import Text from '@components/Text'

interface ScoreProps {
  score: number
}

const Score: React.FC<ScoreProps> = ({ score }) => {
  return (
    <Box
      width={'100%'}
      borderColor={'warm'}
      alignItems={'center'}
      justifyContent={'center'}
      paddingHorizontal={'x-20'}
      paddingBottom={'y-16'}
    >
      <Box
        borderWidth={1}
        borderColor={'blue'}
        height={100}
        width={100}
        borderRadius={50}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Text variant={'title'}>{score}</Text>
        <Text variant={'body'} marginTop={'y-4'}> Sleep score</Text>
      </Box>
    </Box>
  )
}

export default Score