import Box from '@components/Box'
import Text from '@components/Text'

interface SleepStagesProps {

}

const SleepStages: React.FC<SleepStagesProps> = ({ }) => {
  return (
    <Box width={'100%'} paddingHorizontal={'x-20'} marginBottom={'y-20'}>
      <Text variant={'title'}>Sleep stages</Text>
      <Box width={'100%'} height={16} marginTop={'y-10'} flexDirection={'row'}>
        <Box width={'50%'} backgroundColor={'darkBlueOne'} height={'100%'} />
        <Box width={'20%'} backgroundColor={'darkBlueTwo'} height={'100%'} />
        <Box width={'20%'} backgroundColor={'darkBlueThree'} height={'100%'} />
        <Box width={'10%'} backgroundColor={'darkBlueFour'} height={'100%'} />
      </Box>
      <Box flexDirection={'row'} alignItems={'center'} marginTop={'y-10'}>
        <Box height={16} width={16} backgroundColor={'darkBlueOne'} />
        <Text variant={'body'} color={'grayTwo'} marginLeft={'x-10'}>1400 Light</Text>
      </Box>
      <Box flexDirection={'row'} alignItems={'center'} marginTop={'y-10'}>
        <Box height={16} width={16} backgroundColor={'darkBlueTwo'} />
        <Text variant={'body'} color={'grayTwo'} marginLeft={'x-10'}>400 Awake</Text>
      </Box>
      <Box flexDirection={'row'} alignItems={'center'} marginTop={'y-10'}>
        <Box height={16} width={16} backgroundColor={'darkBlueThree'} />
        <Text variant={'body'} color={'grayTwo'} marginLeft={'x-10'}>300 Deep</Text>
      </Box>
      <Box flexDirection={'row'} alignItems={'center'} marginTop={'y-10'}>
        <Box height={16} width={16} backgroundColor={'darkBlueFour'} />
        <Text variant={'body'} color={'grayTwo'} marginLeft={'x-10'}>100 Out</Text>
      </Box>
    </Box>
  )
}

export default SleepStages