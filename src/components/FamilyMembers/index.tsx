import { useCallback, useState } from 'react'
import { Image, TouchableOpacity } from 'react-native'
import Box, { AnimatedBox } from '@components/Box'
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated'

interface FamilyMember {
  id: number
  name: string
  photo: string
}

interface SharedValues {
  [key: number]: Animated.SharedValue<number>
}

const family_members: FamilyMember[] = [
  { id: 1, name: 'Tony', photo: 'https://wellgroomedgentleman.com/wp-content/uploads/2023/10/Tony_Stark_Beard_with_Quiff_Hairstyle.width-800.jpg' },
  { id: 2, name: 'Bruce', photo: 'https://www.themarysue.com/wp-content/uploads/2021/10/Mark-Ruffalo-Bruce-Banner.jpeg' },
  { id: 3, name: 'Nat', photo: 'https://i.pinimg.com/1200x/d3/6e/3a/d36e3aadd0bac518e54283e062baeb0a.jpg' }
]

const FamilyMembers = () => {
  const [selected, setSelected] = useState<FamilyMember>(family_members[1])

  const opacities = family_members.reduce<SharedValues>((acc, member, index) => {
    acc[member.id] = useSharedValue(index === 1 ? 1 : 0.5)
    return acc
  }, {})

  const margins = family_members.reduce<SharedValues>((acc, member, index) => {
    acc[member.id] = useSharedValue(index === 1 ? 22 : 0)
    return acc
  }, {})

  const handlePressFamilyMember = useCallback((member: FamilyMember) => {
    setSelected(member)
    Object.keys(opacities).forEach((id) => {
      const numericId = parseInt(id)
      opacities[numericId].value = withTiming(member.id === numericId ? 1 : 0.5, { duration: 200 })
      margins[numericId].value = withTiming(member.id === numericId ? 22 : 0, { duration: 200 })
    })
  }, [])

  return (
    <Box
      width={'100%'}
      height={150}
      borderWidth={1}
      borderColor={'warm'}
      flexDirection={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      paddingHorizontal={'x-20'}
    >
      {family_members.map((member) => {
        const animatedStyle = useAnimatedStyle(() => {
          return {
            opacity: opacities[member.id].value,
            marginBottom: margins[member.id].value,
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
              borderColor={'white'}
              style={animatedStyle}
            >
              <Image source={{ uri: member?.photo }} style={{ height: '100%', width: '100%' }} />
            </AnimatedBox>
            <Box />
          </TouchableOpacity>
        )
      })}
    </Box>
  )
}

export default FamilyMembers