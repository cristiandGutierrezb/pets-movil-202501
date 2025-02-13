import { SafeAreaView } from 'react-native-safe-area-context'
import LoginModule from '../../modules/auth/Login'

const LoginPage = () => {
  return (
    <SafeAreaView className='bg-slate-500 h-full'>
      <LoginModule />
    </SafeAreaView>
  )
}

export default LoginPage