import React from "react";
import { TouchableOpacity, Text, ViewStyle, View } from "react-native";
import numeral from "numeral";
import Colors from "../../styles/colors";
import BankSignIcon from "../../assets/svg/bank_sign";
import Card from "./Card";

interface Props {
    onPress?: () => void;
    containerStyle?: ViewStyle;
    transactionName: string;
    transactionType: string;
    transactionAmount?: number;
}

const TransactionCard = (props: Props) => {
    const {
        onPress,
        containerStyle,
        transactionType,
        transactionAmount,
        transactionName
    } = props;
    return (
        <Card containerStyle={{ marginBottom: 10, marginHorizontal: 10 }}>
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
                            {transactionName}
                        </Text>

                        <Text
                            style={{
                                color: Colors.textColor3,
                                fontFamily: "Khula-Regular",
                                fontSize: 11
                            }}
                        >
                            {transactionType}
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
                        {numeral(transactionAmount).format("$0,0.00")}
                    </Text>
                </View>
            </TouchableOpacity>
        </Card>
    );
};

export default TransactionCard;
