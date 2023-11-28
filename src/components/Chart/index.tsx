import { LineChart } from 'react-native-chart-kit'
import { Dimensions } from 'react-native'
import Box from '@components/Box'
import Text from '@components/Text'
import colors from '@theme/colors'

const chartWidth = Dimensions.get('window').width


interface ChartProps {
  title: string
  data: Array<number>
  labels: Array<string>
  color?: string
}

const Chart: React.FC<ChartProps> = ({ data, title, labels, color }) => {
  return (
    <Box width={'100%'} marginBottom={'y-20'} paddingHorizontal={'x-20'}>
      <Text variant={'title'} marginBottom={'y-10'}>{title}</Text>
      <LineChart
        data={{
          labels,
          datasets: [{ data }]
        }}
        width={chartWidth}
        height={220}
        yAxisSuffix=' °C'
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: colors.background,
          backgroundGradientFrom: colors.background,
          backgroundGradientTo: colors.background,
          decimalPlaces: 2,
          color: (opacity = 1) => color ? color : `rgba(255, 255, 255, ${opacity})`,
          labelColor: () => colors.white,
          propsForDots: {
            r: '2',
            strokeWidth: '1',
            stroke: colors.white,
          }
        }}
        withInnerLines={false}
        withOuterLines={false}
        bezier
      />
    </Box>
  )
}

export default Chart