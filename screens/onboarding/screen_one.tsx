// import { View } from "react-native";
import tw from 'twrnc';
import { OnboardingLayout } from "../../layouts";
import { Image, Text, View } from 'react-native';

const Screen_one = ({jumpTo}:any):JSX.Element => {
    const image = require('../../assets/images/onboarding/screen1.png');
    return (
        <OnboardingLayout section='one' jumpTo={jumpTo}>
            <Image source={image} style={[tw`w-[70%] rounded-full h-[31%]`]} />
            <Text style={[{fontFamily: 'Nunito'}, tw`text-xl text-[#1E0C4A] my-2`]}>
                Screen One
            </Text>
        </OnboardingLayout>
    )
}

export default Screen_one
