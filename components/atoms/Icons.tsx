import AntDesign from '@expo/vector-icons/AntDesign';

interface IconProps {
  size?: number
  color?: string
}

export const LoginIcon = ({ size, color }: IconProps) => <AntDesign name="login" size={size ? size : 30} color={color ? color : 'black'} />

export const ShoppingCartIcon = ({ size, color }: IconProps) => <AntDesign name="shoppingcart" size={size ? size : 30} color={color ? color : 'black'} />

export const InfoIcon = ({ size, color }: IconProps) => <AntDesign name="infocirlceo" size={size ? size : 30} color={color ? color : 'black'} />

