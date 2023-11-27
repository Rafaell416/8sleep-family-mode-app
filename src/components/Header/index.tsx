import Box from '@components/Box'
import Text from '@components/Text'
import { SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar'

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <SafeAreaView>
      <StatusBar style='light' />
      <Box backgroundColor={'transparent'} width={'100%'} paddingHorizontal={'x-20'} paddingVertical={'x-10'}>
        <Text variant='bigtitle'>{title}</Text>
      </Box>
    </SafeAreaView>
  )
}

export default Header