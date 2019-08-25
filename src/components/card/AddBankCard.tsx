import React from "react";
import { TouchableOpacity, ViewStyle, View, Text } from "react-native";
import PlusBankIcon from "../../assets/svg/plus_bank";
import Colors from "../../styles/colors";

interface Props {
    onPress: () => void;
    containerStyle?: ViewStyle;
}

const AddBankCard = (props: Props) => {
    const { onPress, containerStyle } = props;
    return (
        <TouchableOpacity onPress={onPress} style={[{ flex: 1 }, containerStyle]}>
            <View
                style={{
                    height: 50,
                    flexDirection: "row",
                    justifyContent: "flex-start"
                }}
            >
                <View
                    style={{
                        height: 30,
                        width: 30,
                        marginLeft: 20,
                        marginTop: 15
                    }}
                >
                    <PlusBankIcon />
                </View>
                <Text
                    style={{
                        color: Colors.textColor6,
                        fontFamily: "Khula-Regular",
                        fontSize: 14,
                        marginTop: 17,
                        marginLeft: 20
                    }}
                >
          Add another account
                </Text>
            </View>
            <View
                style={{
                    height: 1,
                    backgroundColor: Colors.borderColor2,
                    marginHorizontal: 10
                }}
            />
        </TouchableOpacity>
    );
};

export default AddBankCard;
