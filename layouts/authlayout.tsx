import { ScrollView, View } from "react-native"
import tw from 'twrnc';
import { StatusBar } from "expo-status-bar";

const AuthLayout = ({ children }: any): JSX.Element => {
    return (
        <View style={tw`h-[100%] w-[100%]`}>
            <StatusBar style="auto" />
            <ScrollView contentContainerStyle={tw`min-h-[100%]`}>
                <View style={tw`min-h-[100%] py-6 px-4 flex justify-center relative`}>
                    {children}
                </View>
            </ScrollView>
        </View>
    )
}

export default AuthLayout
