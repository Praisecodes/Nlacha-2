import { Text, View } from "react-native";
import { OnboardingLayout } from "../../layouts";

const ScreenTwo = ({jumpTo}:any):JSX.Element => {
    return (
        <OnboardingLayout section="two" jumpTo={jumpTo}>
            <Text>
                Screen Two
            </Text>
        </OnboardingLayout>
    )
}

export default ScreenTwo;
