import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Menu, Favourites, Cart, Profile } from "../screens/mainscreens/app";
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

const AppNavs = (): JSX.Element => {
    return (
        <NavigationContainer>
            <Tabs.Navigator screenOptions={{ tabBarShowLabel: false, }}>
                <Tabs.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: (({ focused }) => (<Feather name="home" color={`${(focused)?'#1E0C4A':'black'}`} size={24} />)),
                    }}
                />
                <Tabs.Screen
                    name="Menu"
                    component={Menu}
                    options={{
                        tabBarIcon: (({ focused }) => (<MaterialIcons name="menu-book" color={`${(focused)?'#1E0C4A':'black'}`} size={24} />)),
                    }}
                />
                <Tabs.Screen
                    name="Favourites"
                    component={Favourites}
                    options={{
                        tabBarIcon: (({ focused }) => (<Feather name="heart" color={`${(focused)?'#1E0C4A':'black'}`} size={24} />)),
                    }}
                />
                <Tabs.Screen
                    name="Cart"
                    component={Cart}
                    options={{
                        tabBarIcon: (({ focused }) => (<Ionicons name="ios-cart-outline" color={`${(focused)?'#1E0C4A':'black'}`} size={24} />)),
                    }}
                />
                <Tabs.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        tabBarIcon: (({ focused }) => (<Feather name="user" color={`${(focused)?'#1E0C4A':'black'}`} size={24} />)),
                    }}
                />
            </Tabs.Navigator>
        </NavigationContainer>
    )
}

export default AppNavs;
