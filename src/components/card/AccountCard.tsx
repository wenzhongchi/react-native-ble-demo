import React from "react";
import { TouchableOpacity, Text, ViewStyle, View } from "react-native";
import Colors from "../../styles/colors";
import { BankSubtype } from "../../types/types";
import BankIcon from "../../assets/svg/bank";
import Card from "./Card";

interface Props {
    onPress: () => void;
    containerStyle?: ViewStyle;
    institutionName: string;
    accountSubtype: BankSubtype;
    accountNumber: string;
}

const AccountCard = (props: Props) => {
    const {
        onPress,
        containerStyle,
        accountSubtype,
        accountNumber,
        institutionName
    } = props;
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
                <TouchableOpacity
                    style={{ flex: 1, marginBottom: 20 }}
                    onPress={onPress}
                >
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "column",
                            justifyContent: "flex-start"
                        }}
                    >
                        <View
                            style={{
                                marginTop: 27,
                                marginLeft: 16
                            }}
                        >
                            <BankIcon />
                        </View>
                        <Text
                            style={{
                                color: Colors.textColor5,
                                fontFamily: "Khula-Bold",
                                fontSize: 14,
                                marginTop: 20,
                                marginLeft: 16
                            }}
                        >
                            {institutionName}
                        </Text>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                marginLeft: 16
                            }}
                        >
                            <Text
                                style={{
                                    color: Colors.textColor6,
                                    fontFamily: "Khula-Bold",
                                    fontSize: 12
                                }}
                            >
                                {accountSubtype}
                            </Text>
                            <Text
                                style={{
                                    color: Colors.textColor6,
                                    fontFamily: "Khula-Bold",
                                    fontSize: 12,
                                    marginLeft: 5
                                }}
                            >
                                {accountNumber}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </Card>
        </View>
    );
};

export default AccountCard;
