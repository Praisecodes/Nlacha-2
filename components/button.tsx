import { Text, TouchableWithoutFeedback } from "react-native";
import tw from 'twrnc';

type Props = {
    children: JSX.Element;
    disabled: boolean;
    onPress: () => any;
    style?: any;
}

const Button = ({ children, disabled, onPress, style }: Props): JSX.Element => {
    return (
        <TouchableWithoutFeedback onPress={() => {
            if (disabled) return;
            onPress();
        }}>
            <Text style={style || [tw`w-[100%] bg-[#FDC500] py-4 my-7 text-[#1E0C4A] text-center text-base rounded-full`, {fontFamily: 'Nunito-bold'}]}>
                {children}
            </Text>
        </TouchableWithoutFeedback>
    )
}

export default Button;
