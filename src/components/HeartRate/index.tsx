import Chart from '@components/Chart'
import dayjs from 'dayjs'

interface HeartRateProps {
  heartRate: Array<[string, number]>
}

type Acc = Array<number>
type Curr = Array<[string, number]>

const HeartRate: React.FC<HeartRateProps> = ({ heartRate }) => {
  const heartRateData = heartRate?.reduce((accumulator: Acc, currentValue: Curr) => {
    accumulator?.push(currentValue[1])
    return accumulator
  }, [])


  const heartRateDates = heartRate?.reduce((accumulator: Acc, currentValue: Curr) => {
    accumulator.push(dayjs(currentValue[0]).format('H'))
    return accumulator
  }, [])


  return (
    <Chart
      title='Heart Rate'
      data={heartRateData}
      labels={heartRateDates}
      yAxisSuffix='bpm'
    />
  )
}

export default HeartRate