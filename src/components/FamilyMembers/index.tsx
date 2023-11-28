import { useCallback } from 'react'
import { Image, TouchableOpacity } from 'react-native'
import Box, { AnimatedBox } from '@components/Box'
import Text from '@components/Text'
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { FamilyMember } from 'src/types/family_member'

interface FamilyMembersProps {
  familyMembers?: FamilyMember[] | null
  selected?: FamilyMember | null
  setSelected: (member: FamilyMember) => void
}

interface SharedValues {
  [key: number]: Animated.SharedValue<number>
}

const FamilyMembers: React.FC<FamilyMembersProps> = ({ selected, familyMembers, setSelected }) => {

  const opacities = familyMembers?.reduce<SharedValues>((acc, member, index) => {
    acc[member.id] = useSharedValue(index === 1 ? 1 : 0.3)
    return acc
  }, {})

  const margins = familyMembers?.reduce<SharedValues>((acc, member, index) => {
    acc[member.id] = useSharedValue(index === 1 ? 30 : 0)
    return acc
  }, {})

  const handlePressFamilyMember = useCallback((member: FamilyMember) => {
    setSelected(member)
    Object.keys(opacities).forEach((id) => {
      const numericId = parseInt(id)
      if (opacities) {
        opacities[numericId].value = withTiming(member.id === numericId ? 1 : 0.3, { duration: 200 })
      }
      if (margins) {
        margins[numericId].value = withTiming(member.id === numericId ? 30 : 0, { duration: 200 })
      }
    })
  }, [])

  return (
    <Box
      width={'100%'}
      height={150}
      flexDirection={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      paddingHorizontal={'x-20'}
    >
      {familyMembers?.map((member) => {
        const animatedStyle = useAnimatedStyle(() => {
          return {
            opacity: opacities?.[member.id].value,
            marginBottom: margins?.[member.id].value,
          };
        });


        return (
          <TouchableOpacity activeOpacity={0.8} onPress={() => handlePressFamilyMember(member)}>
            <AnimatedBox
              height={100}
              width={100}
              borderRadius={50}
              overflow={'hidden'}
              borderWidth={1}
              borderColor={'blue'}
              style={animatedStyle}
            >
              <Image source={{ uri: member?.photo }} style={{ height: '100%', width: '100%' }} />
              <Box width={'100%'} style={{ backgroundColor: 'rgba(107, 107, 107, 0.5)' }} position={'absolute'} bottom={0} alignItems={'center'} paddingVertical={'y-4'}>
                <Text variant={'body'}>{member.name}</Text>
              </Box>
            </AnimatedBox>
          </TouchableOpacity>
        )
      })}
    </Box>
  )
}

export default FamilyMembers  