// import { View } from "react-native";
import tw from 'twrnc';
import { OnboardingLayout } from "../../layouts";
import { Text, View } from 'react-native';

const Screen_one = ({jumpTo}:any):JSX.Element => {
    return (
        <OnboardingLayout section='one' jumpTo={jumpTo}>
            <Text>
                Screen One
            </Text>
        </OnboardingLayout>
    )
}

export default Screen_one
