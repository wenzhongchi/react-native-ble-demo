import React from "react";
import { TouchableOpacity, Text, ViewStyle, View } from "react-native";
import numeral from "numeral";
import Colors from "../../styles/colors";
import UpIcon from "../../assets/svg/up_cash";
import DownIcon from "../../assets/svg/down_cash";
import Card from "./Card";

interface Props {
    onPress: () => void;
    containerStyle?: ViewStyle;
    balanceNumber: number | null | undefined;
    incomesNumber: number | null | undefined;
    expensesNumber: number | null | undefined;
}

const CashCard = (props: Props) => {
    const {
        onPress,
        containerStyle,
        balanceNumber,
        incomesNumber,
        expensesNumber
    } = props;
    return (
        <Card
            containerStyle={{ marginBottom: 20, opacity: 0.9, marginHorizontal: 10 }}
        >
            <TouchableOpacity style={[{ flex: 1 }, containerStyle]} onPress={onPress}>
                <View
                    style={{
                        flex: 1,
                        paddingHorizontal: 20,
                        paddingTop: 10,
                        flexDirection: "column",
                        justifyContent: "flex-start"
                    }}
                >
                    <Text
                        style={{
                            marginTop: 10,
                            color: Colors.textColor5,
                            fontSize: 12,
                            fontFamily: "Khula-Regular"
                        }}
                    >
            Available balance
                    </Text>
                    <View
                        style={{
                            marginTop: 5,
                            flexDirection: "row",
                            justifyContent: "flex-start"
                        }}
                    >
                        <Text
                            style={{
                                color: Colors.textColor5,
                                fontFamily: "Khula-Bold",
                                alignSelf: "center",
                                fontSize: 28
                            }}
                        >
                            {numeral(balanceNumber).format("$0,0.00")}
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "row",
                            marginTop: 10
                        }}
                    >
                        <View style={{ flex: 0.5 }}>
                            <Text
                                style={{
                                    color: Colors.textColor6,
                                    fontFamily: "Khula-Regular",
                                    fontSize: 12
                                }}
                            >
                Income
                            </Text>
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: "row"
                                }}
                            >
                                <Text
                                    style={{
                                        color: Colors.textColor5,
                                        fontFamily: "Khula-SemiBold",
                                        fontSize: 18
                                    }}
                                >
                                    {numeral(incomesNumber).format("$0,0.00")}
                                </Text>
                                <View style={{ marginTop: 8, marginLeft: 10 }}>
                                    <UpIcon />
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 0.5 }}>
                            <Text
                                style={{
                                    color: Colors.textColor6,
                                    fontFamily: "Khula-Regular",
                                    fontSize: 12
                                }}
                            >
                Expense
                            </Text>
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: "row"
                                }}
                            >
                                <Text
                                    style={{
                                        color: Colors.textColor5,
                                        fontFamily: "Khula-SemiBold",
                                        fontSize: 18
                                    }}
                                >
                                    {numeral(expensesNumber).format("$0,0.00")}
                                </Text>
                                <View style={{ marginTop: 8, marginLeft: 10 }}>
                                    <DownIcon />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </Card>
    );
};

export default CashCard;
