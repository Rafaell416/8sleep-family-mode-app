import { LineChart } from 'react-native-chart-kit'
import { Dimensions } from 'react-native'
import Box from '@components/Box'
import Text from '@components/Text'
import colors from '@theme/colors'

interface TemperatureProps {

}

const chartWidth = Dimensions.get('window').width

const Temperature: React.FC<TemperatureProps> = ({ }) => {
  return (
    <Box width={'100%'} paddingHorizontal={'x-20'} marginBottom={'y-20'}>
      <Text variant={'title'}>Room and bed temperature</Text>
      <LineChart
        data={{
          labels: ['7pm', '9pm', '11pm', '1am', '3am', '5am'],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100
              ]
            },
            {
              data: [
                Math.random() * 50,
                Math.random() * 50,
                Math.random() * 50,
                Math.random() * 50,
                Math.random() * 50,
                Math.random() * 50
              ]
            }
          ]
        }}
        width={chartWidth}
        height={220}
        yAxisLabel='$'
        yAxisSuffix='k'
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: colors.background,
          backgroundGradientFrom: colors.background,
          backgroundGradientTo: colors.background,
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
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

export default Temperature