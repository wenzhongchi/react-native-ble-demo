import React from "react";
import { TouchableOpacity, Text, ViewStyle, View } from "react-native";
import Colors from "../../styles/colors";
import { BankSubtype } from "../../types/types";
import BankSignIcon from "../../assets/svg/bank_sign";

interface Props {
    onPress: () => void;
    containerStyle?: ViewStyle;
    accountMask: string;
    institutionName: string;
    accountSubtype: BankSubtype;
    accountBalance?: number;
}

const BankRowCard = (props: Props) => {
    const {
        onPress,
        containerStyle,
        accountSubtype,
        accountBalance,
        accountMask,
        institutionName
    } = props;
    return (
        <TouchableOpacity style={[{ flex: 1 }, containerStyle]} onPress={onPress}>
            <View
                style={{
                    height: 60,
                    flexDirection: "row",
                    justifyContent: "flex-start"
                }}
            >
                <View
                    style={{
                        marginTop: 20,
                        marginLeft: 25
                    }}
                >
                    <BankSignIcon />
                </View>
                <View
                    style={{
                        flex: 1,
                        flexDirection: "column",
                        justifyContent: "center",
                        marginLeft: 16,
                        marginTop: 5
                    }}
                >
                    <Text
                        style={{
                            color: Colors.black,
                            fontFamily: "Khula-Regular",
                            fontSize: 13
                        }}
                    >
                        {institutionName}
                    </Text>

                    <Text
                        style={{
                            color: Colors.textColor3,
                            fontFamily: "Khula-Regular",
                            fontSize: 11
                        }}
                    >
                        {`${accountSubtype} ${accountMask}`}
                    </Text>
                </View>
                <Text
                    style={{
                        color: Colors.textColor6,
                        fontFamily: "Khula-Bold",
                        fontSize: 15,
                        alignSelf: "center",
                        marginRight: 30
                    }}
                >
                    {`$ ${accountBalance}`}
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

export default BankRowCard;
