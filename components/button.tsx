import { Text, TouchableWithoutFeedback } from "react-native";
import tw from 'twrnc';
import FlashMessage, { showMessage } from "react-native-flash-message";
import { useRef } from "react";

type Props = {
    children: JSX.Element;
    disabled: boolean;
    onPress: () => any;
    style?: any;
}

const Button = ({ children, disabled, onPress, style }: Props): JSX.Element => {
    const flashRef = useRef<any>();

    return (
        <>
            <FlashMessage ref={flashRef} />
            <TouchableWithoutFeedback onPress={() => {
                if (disabled) {
                    flashRef.current.showMessage({
                        message: "Disabled",
                        description: "Please fill out all required fields",
                        floating: true,
                        duration: 4000,
                        statusBarHeight: 40,
                        type: 'warning'
                    });
                    return;
                }
                onPress();
            }}>
                <Text style={style || [tw`w-[100%] bg-[#FDC500] py-4 my-7 text-[#1E0C4A] text-center text-base rounded-full`, { fontFamily: 'Nunito-bold' }]}>
                    {children}
                </Text>
            </TouchableWithoutFeedback>
        </>
    )
}

export default Button;
