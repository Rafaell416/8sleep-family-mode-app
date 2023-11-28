import Chart from '@components/Chart'
import dayjs from 'dayjs'

interface RoomTemperatureProps {
  tempRoomC: Array<[string, number]>
}

type Acc = Array<number>
type Curr = Array<[string, number]>

const RoomTemperature: React.FC<RoomTemperatureProps> = ({ tempRoomC }) => {
  const tempRoomData = tempRoomC?.reduce((accumulator: Acc, currentValue: Curr) => {
    accumulator?.push(currentValue[1])
    return accumulator
  }, [])


  const tempRoomDates = tempRoomC?.reduce((accumulator: Acc, currentValue: Curr) => {
    accumulator.push(dayjs(currentValue[0]).format('H'))
    return accumulator
  }, [])


  return (
    <Chart
      title='Room Temperature'
      data={tempRoomData}
      labels={tempRoomDates}
      color='#2819FD'
    />
  )
}

export default RoomTemperature