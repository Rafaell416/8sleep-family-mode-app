import Box from '@components/Box'
import Text from '@components/Text'
import { SleepStage } from 'src/types/sleep_data'


interface SleepStagesProps {
  stages: SleepStage[]
}

const STAGE_COLOR_MAP = {
  light: 'darkBlueOne',
  awake: 'darkBlueTwo',
  deep: 'darkBlueThree',
  out: 'darkBlueFour'
}

function groupAndSumStages(data: SleepStage[]): { stage: string; duration: number; color: string; percentage: number }[] {
  const groupedStages = data?.reduce((accumulator: { [stage: string]: number }, stage: SleepStage) => {
    const { stage: stageName, duration } = stage
    accumulator[stageName] = (accumulator[stageName] || 0) + duration
    return accumulator
  }, {})

  const totalDuration = groupedStages && Object.values(groupedStages).reduce((total, duration) => total + duration, 0)

  const result = groupedStages && Object.keys(groupedStages).map((stageName) => ({
    stage: stageName,
    duration: groupedStages[stageName],
    color: STAGE_COLOR_MAP[stageName],
    percentage: totalDuration ? (groupedStages[stageName] / totalDuration) * 100 : 0,
  }))

  return result || []
}

function secondsToFormattedHours(seconds: number): string {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const formattedHours = `${hours}:${minutes.toString().padStart(2, '0')}`
  return formattedHours
}

function capitalizeString(input: string): string {
  return input.charAt(0).toUpperCase() + input.slice(1)
}

const SleepStages: React.FC<SleepStagesProps> = ({ stages }) => {
  const groupedStages = groupAndSumStages(stages)

  return (
    <Box width={'100%'} paddingHorizontal={'x-20'} marginBottom={'y-20'}>
      <Text variant={'title'}>Sleep stages</Text>
      <Box width={'100%'} height={16} marginTop={'y-10'} flexDirection={'row'}>
        {groupedStages && groupedStages.map((stage) => (
          <Box width={`${stage.percentage}%`} backgroundColor={stage.color} height={'100%'} />
        ))}
      </Box>
      {groupedStages && groupedStages?.map((stage: { stage: string; duration: number, color: string }) => (
        <Box flexDirection={'row'} alignItems={'center'} marginTop={'y-10'}>
          <Box height={16} width={16} backgroundColor={stage.color} />
          <Text variant={'body'} color={'grayTwo'} marginLeft={'x-10'}>{secondsToFormattedHours(stage.duration) + 'h' + '  ' + capitalizeString(stage.stage)}</Text>
        </Box>
      ))}
    </Box>
  )
}

export default SleepStages