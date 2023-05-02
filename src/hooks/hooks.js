import { useNavigation } from '@react-navigation/native'

export default function useHooks() {
  const navigation = useNavigation()

  const navigates = (route) => {
    navigation.navigate(route)
  }

  return {
      navigates
  }
}
