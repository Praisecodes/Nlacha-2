import { Text, View, TextInput, TouchableWithoutFeedback, Image } from "react-native";
import { AuthLayout } from "../../../layouts";
import { Button } from "../../../components";
import tw from 'twrnc';

const Signup = ({ navigation }: any): JSX.Element => {
    const google = require('../../../assets/images/others/google_auth.png');
    const facebook = require('../../../assets/images/others/facebook_auth.png');

    return (
        <AuthLayout>
            <Text style={[tw`text-3xl py-2 text-[#1E0C4A]`, { fontFamily: 'Nunito-bold' }]}>
                Sign Up
            </Text>
            <View style={tw`my-5 w-[100%] relative`}>
                <View style={tw`my-2`}>
                    <Text style={[tw`px-1 text-base`, { fontFamily: 'Nunito-bold' }]}>First Name</Text>
                    <TextInput style={[{ fontFamily: 'Nunito' }, tw`bg-[#EAE8E8] px-3 py-2 rounded-md w-[100%]`]} />
                </View>

                <View style={tw`my-2`}>
                    <Text style={[tw`px-1 text-base`, { fontFamily: 'Nunito-bold' }]}>Username</Text>
                    <TextInput style={[{ fontFamily: 'Nunito' }, tw`bg-[#EAE8E8] px-3 py-2 rounded-md w-[100%]`]} />
                </View>

                <View style={tw`my-2`}>
                    <Text style={[tw`px-1 text-base`, { fontFamily: 'Nunito-bold' }]}>Email Address</Text>
                    <TextInput style={[{ fontFamily: 'Nunito' }, tw`bg-[#EAE8E8] px-3 py-2 rounded-md w-[100%]`]} />
                </View>

                <View style={tw`my-2`}>
                    <Text style={[tw`px-1 text-base`, { fontFamily: 'Nunito-bold' }]}>Create Password</Text>
                    <TextInput secureTextEntry={true} style={[{ fontFamily: 'Nunito' }, tw`bg-[#EAE8E8] px-3 py-2 rounded-md w-[100%]`]} />
                </View>
            </View>
            <Button disabled={true} onPress={() => { }}>
                <Text>Sign Up</Text>
            </Button>

            <View style={tw`w-[100%] my-3 flex items-center justify-center flex-row`}>
                <View style={tw`bg-[#0F0E0EBF] h-[1px] flex-1`}></View>
                <Text style={[{ fontFamily: 'Nunito-bold' }, tw`px-3`]}>OR</Text>
                <View style={tw`bg-[#0F0E0EBF] h-[1px] flex-1`}></View>
            </View>

            <View style={[tw`my-5 flex justify-center items-center`]}>
                <Text style={[{ fontFamily: 'Nunito-bold' }, tw``]}>
                    Sign Up Using
                </Text>
                <View style={[tw`flex flex-row my-2`]}>
                    <TouchableWithoutFeedback onPress={() => { alert('Signin with google') }}>
                        <Image source={google} style={[tw`w-7 py-2 h-7 mx-3`]} />
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => { alert('Signin with facebook') }}>
                        <Image source={facebook} style={[tw`w-7 py-2 h-7 mx-3`]} />
                    </TouchableWithoutFeedback>
                </View>

                <Text style={[{ fontFamily: 'Nunito' }, tw`my-2 text-sm text-[#1E1E1E]`]}>
                    Already have an account?{' '}
                    <TouchableWithoutFeedback onPress={() => { navigation.navigate('Login') }}>
                        <Text style={tw`text-[#FDC500]`}>Login</Text>
                    </TouchableWithoutFeedback>
                </Text>
            </View>
        </AuthLayout>
    )
}

export default Signup;
