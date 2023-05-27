import { View, Text, TouchableWithoutFeedback } from "react-native";
import tw from 'twrnc';
import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { AppContext } from "../contexts";

interface Props {
    children: any,
    section: string,
    jumpTo: any,
}

const OnboardingLayout = ({ children, section, jumpTo }: Props): JSX.Element => {
    const { setOpened, saveDevice } = useContext(AppContext);

    const handleGetStarted = () => {
        if(saveDevice?.()){
            setOpened(true);
            console.log('Something done')
        }
    }

    return (
        <View style={tw`h-[100%] bg-[#FFFFFF] relative flex justify-center items-center`}>
            <StatusBar style="auto" />
            <Text style={tw`py-10 w-[100%] text-xl absolute top-0 left-0 font-bold text-center text-[#1E0C4A] `}>
                Nlacha
            </Text>

            {children}

            <View style={tw`absolute py-5 bottom-0 flex px-7 justify-center w-[100%] items-center`}>
                <View style={tw`flex py-2 flex-row`}>
                    <View style={tw`p-1 mx-1 rounded-full ${(section == "one") ? 'bg-[#FDC500]' : 'bg-[#D9D8D8]'}`}></View>
                    <View style={tw`p-1 mx-1 rounded-full ${(section == "two") ? 'bg-[#FDC500]' : 'bg-[#D9D8D8]'}`}></View>
                </View>
                <TouchableWithoutFeedback onPress={() => {
                    if (section == "one") { jumpTo('second'); return; }
                    handleGetStarted();
                }}>
                    <Text style={tw`bg-[#FDC500] text-[#1E0C4A] w-[100%] my-2 py-3 text-center text-base rounded-full`}>
                        {(section == "one") ? 'Continue' : 'Get Started'}
                    </Text>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback>
                    <Text style={tw`bg-transparent border-2 border-[#FDC500] text-[#1E0C4A] w-[100%] my-2 py-3 text-center text-base rounded-full`}>
                        Sign In
                    </Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

export default OnboardingLayout;
