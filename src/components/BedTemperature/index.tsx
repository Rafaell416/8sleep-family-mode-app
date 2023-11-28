import Chart from '@components/Chart'
import dayjs from 'dayjs'

interface BedTemperatureProps {
  tempBedC: Array<[string, number]>
}

type Acc = Array<number>
type Curr = Array<[string, number]>

const BedTemperature: React.FC<BedTemperatureProps> = ({ tempBedC }) => {
  const bedTempData = tempBedC?.reduce((accumulator: Acc, currentValue: Curr) => {
    accumulator?.push(currentValue[1])
    return accumulator
  }, [])


  const tempBedDates = tempBedC?.reduce((accumulator: Acc, currentValue: Curr) => {
    accumulator.push(dayjs(currentValue[0]).format('h a'))
    return accumulator
  }, [])


  return (
    <Chart title='Bed Temperature' data={bedTempData} labels={tempBedDates} />
  )
}

export default BedTemperature