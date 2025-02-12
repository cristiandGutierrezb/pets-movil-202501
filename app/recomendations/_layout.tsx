import { Tabs } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react'

const LayoutRecomendations = () => {
  return (
    <Tabs>
      <Tabs.Screen 
        name='petsRecomendations'
        options={{
          title: '¿Que mascota?',
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          )
        }}
      />
      <Tabs.Screen 
        name='sickPet'
        options={{
          title: 'Mascotas enfermas',
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          )
        }}
      />
    </Tabs>
  )
}

export default LayoutRecomendations