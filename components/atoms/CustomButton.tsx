import { Text, Pressable } from 'react-native'

interface CustomButtonProps {
  text: string
  actionFunction: () => void
} 

const CustomButton = ({ text, actionFunction }: CustomButtonProps) => {
  return (
    <Pressable onPress={actionFunction} className=''>
      <Text>{ text }</Text>
    </Pressable>
  )
}

export default CustomButton
