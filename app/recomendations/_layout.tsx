import { Tabs } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react'

const LayoutRecomendations = () => {
  return (
    <Tabs>
      <Tabs.Screen 
        name='petsRecomendations'
        options={{
          title: 'Recomendaciones',
          tabBarIcon: () => (
            <AntDesign name="home" size={24} color="black" />
          )
        }}
      />
      <Tabs.Screen 
        name='sickPet'
        options={{
          title: 'Recomendaciones',
          tabBarIcon: () => (
            <AntDesign name="home" size={24} color="black" />
          )
        }}
      />
    </Tabs>
  )
}

export default LayoutRecomendations