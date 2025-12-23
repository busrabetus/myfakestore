import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartDetail from '../screens/cart_detail';
import Carts from '../screens/cart_page';
import Login from '../screens/login_page';
import ProductDetail from '../screens/product_detail';
import Products from '../screens/product_page';
import Users from '../screens/user_page';

const Stack = createNativeStackNavigator();

export default function AppNavigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name='Login' options= {{headerShown: false}} component={Login} />
                <Stack.Screen name='Products' options= {{headerShown: false}} component={Products} />
                <Stack.Screen name='ProductDetail' options= {{headerShown: false}} component={ProductDetail} />
                <Stack.Screen name='Carts' options= {{headerShown: false}} component={Carts} />
                <Stack.Screen name='CartDetail' options= {{headerShown: false}} component={CartDetail} />
                <Stack.Screen name='Users' options= {{headerShown: false}} component={Users} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}