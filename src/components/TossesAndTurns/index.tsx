import Box from '@components/Box'
import Text from '@components/Text'
import colors from '@theme/colors'
import fontFamilies from '@theme/fontFamilies'

interface TossesAndTurnsProps {
  tntQty: number
}

const TossesAndTurns: React.FC<TossesAndTurnsProps> = ({ tntQty }) => {
  return (
    <Box width={'100%'} paddingHorizontal={'x-20'} marginBottom={'y-20'}>
      <Text variant={'title'}>Tosses and turns</Text>
      <Box
        flexDirection={'row'}
        alignItems={'center'}
        marginTop={'y-10'}
      >
        <Text
          style={{
            fontSize: 50,
            color: colors.white,
            fontFamily: fontFamilies.AktivGroteskLight,
            marginRight: 10
          }}
        >
          {tntQty}
        </Text>
        <Box flexDirection={'row'} flexWrap={'wrap'} maxWidth={110}>
          {Array(tntQty).fill(null).map((_) => <Box height={6} width={6} marginRight={'x-4'} marginBottom={'y-4'} backgroundColor={'white'} borderRadius={3} />)}
        </Box>
      </Box>
    </Box>
  )
}

export default TossesAndTurns