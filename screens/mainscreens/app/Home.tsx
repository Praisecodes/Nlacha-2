import { Image, ScrollView, Text, TouchableWithoutFeedback, View } from "react-native"
import { StatusBar } from "expo-status-bar";
import tw from 'twrnc';
import { useContext, useEffect, useRef, useState } from "react";
import { Get } from "../../../utils/request";
import { AppContext } from "../../../contexts";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const NoItems = (): JSX.Element => {
    return (
        <Text style={[{ fontFamily: 'Nunito-bold' }, tw`text-2xl text-[#00000044] py-5`]}>
            No Items Available!
        </Text>
    )
}

const DisplayItems = ({menuItems}:any):JSX.Element => {
    return(
        menuItems.map((menuItem:any)=>(
            <TouchableWithoutFeedback key={menuItem.id}>
                <View style={[tw`w-full py-2`]}>
                    <Image source={{uri: menuItem.image}} style={[tw`w-full h-10`]} />
                    <View style={[tw`flex flex-row w-full justify-between items-center`]}>
                        <View>
                            <Text style={[{fontFamily: 'Nunito-bold'}, tw`text-[#1E0C4A] text-base`]}>
                                {menuItem.meal}
                            </Text>
                            <Text style={[{fontFamily: 'Nunito'}, tw`text-sm`]}>
                                #{menuItem.price}
                            </Text>
                        </View>
                        <View style={[tw`flex flex-row items-center`]}>
                            <Ionicons name="ios-cart-outline" size={23} color={'#1E0C4A'} style={[tw`mx-1`]} />
                            <Feather name="heart" size={20} color={'#1E0C4A'} style={[tw`mx-2`]} />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        ))
    )
}

const Home = ({ navigation }: any): JSX.Element => {
    const [categories] = useState<any[]>([
        {
            id: 1,
            title: "Food",
            image: require('../../../assets/images/categories/all_cat.png'),
        },
        {
            id: 2,
            title: "Protein",
            image: require('../../../assets/images/categories/protein.png'),
            cat: "protein"
        },
        {
            id: 3,
            title: "Vegetables",
            image: require('../../../assets/images/categories/vegetables.png'),
            cat: "vegetables"
        },
        {
            id: 4,
            title: "Pastry",
            image: require('../../../assets/images/categories/pastry.png'),
            cat: "pastry"
        },
        {
            id: 5,
            title: "Cabohydrates",
            image: require('../../../assets/images/categories/cabohydrate.png'),
            cat: "cabohydrate"
        },
    ]);

    const [selected, setSelected] = useState<string>("Food");
    const { getToken, saveToken, menuItems, setMenuItems } = useContext(AppContext);
    const flashRef = useRef<any>();
    const [loading, setLoading] = useState<boolean>(false);

    const handleRequest = async (cat?: string): Promise<any> => {
        try {
            const data = await Get((selected == 'Food') ? 'getmenus' : `getmenus?cat=${cat}`, await getToken?.());
            if (!saveToken?.(data.token)) {
                console.error("Couldn't Save token");
                return;
            }
            console.log("Token saved");
            switch (data.status) {
                case 200:
                    setMenuItems(data.menus);
                    console.log(data.menus);
                    break;
                default:
                    flashRef.current.showMessage({
                        message: "Error!",
                        description: "An Error Occured While Getting List Of Items.",
                        type: 'danger',
                        duration: 6000,
                        statusBarHeight: 40
                    });
            }
        } catch (error) {
            console.error(error);
            flashRef.current.showMessage({
                message: "Error!",
                description: "An Error Occured While Getting List Of Items.",
                type: 'danger',
                duration: 6000,
                statusBarHeight: 40
            });
        }
    }

    const handleCategorySelection = async (title: string, cat?: string): Promise<any> => {
        setSelected(title);
        setLoading(true);
        await handleRequest(cat);
        setLoading(false);
    }

    const runOnStart = async ():Promise<void> => {
        setLoading(true);
        await handleRequest();
        setLoading(false);
    }

    useEffect(() => {
        runOnStart();
    }, []);

    return (
        <View style={tw`h-[100%] w-[100%] bg-[#fff]`}>
            <StatusBar style="inverted" />
            <FlashMessage ref={flashRef} />
            <ScrollView contentContainerStyle={tw`min-h-[100%] pb-5`}>
                <View style={[tw`min-h-[100%] relative`]}>
                    <View style={[tw`w-[100%] top-0 left-0 bg-[#FDC500] py-20 flex justify-center items-center`]}>
                        <Text style={[tw`text-xl text-[#1E0C4A]`, { fontFamily: 'Nunito-bold' }]}>
                            Home
                        </Text>
                    </View>
                    <View style={[tw`px-4`]}>
                        <Text style={[{ fontFamily: 'Nunito-bold' }, tw`text-xl py-3 text-[#1E0C4A]`]}>
                            Popular Categories
                        </Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={[tw`flex flex-row items-center`]}>
                                {categories.map((category) => (
                                    <TouchableWithoutFeedback key={category.id} onPress={() => { handleCategorySelection(category.title, (category.cat) ? category.cat : null) }}>
                                        <View style={[tw`flex ${(selected == category.title) ? 'border-b-2 border-b-[#FDC500]' : ''} items-center ${(category.id == 1) ? 'mx-0' : 'mx-3'}`]}>
                                            <Image source={category.image} style={[tw`rounded-full w-16 h-16`]} />

                                            <Text style={[{ fontFamily: 'Nunito' }, tw`py-1 text-[#1E0C4A]`]}>
                                                {category.title}
                                            </Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                ))}
                            </View>
                        </ScrollView>
                        <Text style={[{ fontFamily: 'Nunito-bold' }, tw`text-[#1E0C4A] text-xl py-3`]}>
                            Popular Choices
                        </Text>
                        <View>
                            {(loading) ?
                                <Text>Loading...</Text>
                                :
                                (menuItems?.length == 0) ? <NoItems /> : <DisplayItems menuItems={menuItems} />
                            }
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Home;
