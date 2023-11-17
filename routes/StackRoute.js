import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import { Colours } from '../components/Colours'
import DetailsScreen from '../screens/DetailsScreen'

const Stack = createNativeStackNavigator()
const StackRoute = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    contentStyle: {
                        backgroundColor: Colours.primary
                    }
                }}
            />
            <Stack.Screen
                name='Details'
                component={DetailsScreen}
                options={{
                    contentStyle: {
                        backgroundColor: Colours.primary
                    }
                }}
            />
        </Stack.Navigator>
    )
}

export default StackRoute