import { TabView, SceneMap } from "react-native-tab-view";
import { Screen_one, ScreenTwo } from "../screens/onboarding";
import { useState } from "react";

const renderScene = SceneMap({
    first: Screen_one,
    second: ScreenTwo
});

const Onboarding = (): JSX.Element => {
    const [index, setIndex] = useState<number>(0);
    const [routes] = useState<any[]>([
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
    ]);

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            renderTabBar={()=>null}
        />
    )
}

export default Onboarding;
