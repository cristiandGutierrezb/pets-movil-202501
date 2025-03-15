import { useState, useEffect } from 'react';
import { Link } from 'expo-router'
import { View, Text, ScrollView, ActivityIndicator, FlatList } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router';

import SmallCard from '../components/molecules/SmallCard';
import { standardButton } from '../components/Tokens'
import { LoginIcon, ShoppingCartIcon, InfoIcon } from '../components/atoms/Icons'

import { GetProductsServiceDAO, ProductDAO } from '../interfaces/Marketplace';

import { getProducts } from '../lib/api_products';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Index = () => {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState<ProductDAO[]>([])

  useEffect(() => {
    validateToken()
    setIsLoading(true)
    getProducts()
    .then((infoService: GetProductsServiceDAO) => {
      setIsLoading(false)
      setProducts(infoService.data)
    })
    .catch((e) => console.log(e))
  }, [])

  const validateToken = async () => {
    const infoUser = await AsyncStorage.getItem('@infologin')
    const infoUserObj = JSON.parse(infoUser || '{}')
    if (infoUser && Object.entries(infoUserObj).length) {
      router.replace('/admin')
    }
  }

  return (
    <SafeAreaView className='bg-primary p-5'>
      <StatusBar style='light' />
      <View className='h-[60%] border-b-2 border-secondary'>
        <Link href='/marketplace' className='rounded-xl p-4 bg-slate-100 border'>
          <Text className='text-slate-400'>Busca tu producto</Text>
        </Link>
        {
          isLoading ? (
            <ActivityIndicator size={100} color={'white'} />
          ) : (
            <FlatList 
              data={products}
              renderItem={({item}) => <SmallCard key={item.id_product} product={item} />} 
              keyExtractor={item => `${item.id_product}`}
            />
          )
        }
      </View>
      <View className='h-[40%] flex flex-col items-center justify-center gap-5'>
        <View className='flex flex-row gap-5'> 
          <Link href='/marketplace' className='flex-1'>
            <View className={`flex-col ${standardButton} w-full`}>
              <ShoppingCartIcon size={40} color='#000' />
              <Text className='text-black text-xl'>
                Marketplace
              </Text>
            </View>
          </Link>
          <Link href='/recomendations' className='flex-1'>
            <View className={`flex-col ${standardButton} w-full`}>
              <InfoIcon size={40} color='#000' />
              <Text className='text-black text-xl'>
                Recomendation
              </Text>
            </View>
          </Link>
        </View>
        <Link href='/login' className='w-1/2'>
          <View className={`flex-col ${standardButton} w-full`}>
            <LoginIcon size={40} color='#000' />
            <Text className='text-black text-xl'>Auth</Text>
          </View>
        </Link>
      </View>
    </SafeAreaView>
  )
}

export default Index