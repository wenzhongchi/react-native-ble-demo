import React from "react";
import { TouchableOpacity, ViewStyle, View } from "react-native";
import AddBankIcon from "../../assets/svg/add_bank";
import Card from "./Card";

interface Props {
    onPress: () => void;
    containerStyle?: ViewStyle;
}

const AddAccountCard = (props: Props) => {
    const { onPress, containerStyle } = props;
    return (
        <View
            style={{
                marginTop: 10,
                ...containerStyle
            }}
        >
            <Card
                containerStyle={{
                    marginHorizontal: 10
                }}
            >
                <TouchableOpacity onPress={onPress} style={{ flex: 1 }}>
                    <View style={{ flex: 1, justifyContent: "center" }}>
                        <View
                            style={{
                                alignSelf: "center"
                            }}
                        >
                            <AddBankIcon />
                        </View>
                    </View>
                </TouchableOpacity>
            </Card>
        </View>
    );
};

export default AddAccountCard;
