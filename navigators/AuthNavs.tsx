import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Signup } from "../screens/mainscreens/auth";

const Stack = createNativeStackNavigator();

const AuthNavs = (): JSX.Element => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false, animation:'slide_from_right'}}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AuthNavs;
