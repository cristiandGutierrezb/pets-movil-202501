import { Tabs } from 'expo-router'
import { LoginIcon } from '../../components/atoms/Icons'

const AuthLayout = () => {
  return (
    <Tabs screenOptions={{ 
      headerShown: false,
      tabBarActiveTintColor: '#ff9c01',
      tabBarInactiveTintColor: '#80181C',
      tabBarStyle: { backgroundColor: '#931E22' }
    }}>
      <Tabs.Screen 
        name='login' 
        options={{
          title: 'Login',
          tabBarIcon: ({ color }) => <LoginIcon color={color} size={24} />
        }}
      />
      <Tabs.Screen name='register' />
    </Tabs>
  )
}

export default AuthLayout