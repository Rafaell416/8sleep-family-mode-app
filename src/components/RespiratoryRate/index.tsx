import Chart from '@components/Chart'
import dayjs from 'dayjs'

interface RespiratoryRateProps {
  respiratoryRate: Array<[string, number]>
}

type Acc = Array<number>
type Curr = Array<[string, number]>

const RespiratoryRate: React.FC<RespiratoryRateProps> = ({ respiratoryRate }) => {
  const respiratoryRateData = respiratoryRate?.reduce((accumulator: Acc, currentValue: Curr) => {
    accumulator?.push(currentValue[1])
    return accumulator
  }, [])


  const respiratoryRateDates = respiratoryRate?.reduce((accumulator: Acc, currentValue: Curr) => {
    accumulator.push(dayjs(currentValue[0]).format('H'))
    return accumulator
  }, [])


  return (
    <Chart
      title='Respiratory Rate'
      data={respiratoryRateData}
      labels={respiratoryRateDates}
      color='#E54E41'
      yAxisSuffix='bpm'
    />
  )
}

export default RespiratoryRate