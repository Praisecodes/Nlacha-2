import { Text, Image } from "react-native";
import { OnboardingLayout } from "../../layouts";
import tw from 'twrnc';

const ScreenTwo = ({jumpTo}:any):JSX.Element => {
    const image = require('../../assets/images/onboarding/screen2.png');
    return (
        <OnboardingLayout section="two" jumpTo={jumpTo}>
            <Image source={image} style={[tw`w-[70%] rounded-full h-[31%]`]} />
            <Text style={[{fontFamily: 'Nunito'}, tw`text-xl text-[#1E0C4A] my-2`]}>
                Screen Two
            </Text>
        </OnboardingLayout>
    )
}

export default ScreenTwo;
