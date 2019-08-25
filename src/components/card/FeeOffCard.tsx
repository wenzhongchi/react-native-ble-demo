import React from "react";
import { TouchableOpacity, Text, ViewStyle, View } from "react-native";
import Colors from "../../styles/colors";
import DownIcon from "../../assets/svg/down_cash";
import Card from "./Card";

interface Props {
    onPress: () => void;
    containerStyle?: ViewStyle;
    savedNumber: string;
    expenseNumber: string;
}

const FeeOffCard = (props: Props) => {
    const { onPress, containerStyle, savedNumber, expenseNumber } = props;
    return (
        <Card containerStyle={{ marginBottom: 20, marginHorizontal: 10 }}>
            <View
                style={[
                    {
                        flex: 1,
                        flexDirection: "column",
                        justifyContent: "flex-start"
                    },
                    containerStyle
                ]}
            >
                <View
                    style={{
                        marginTop: 20,
                        marginHorizontal: 20,
                        marginBottom: 20,
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}
                >
                    <Text
                        style={{
                            color: Colors.textColor5,
                            fontFamily: "Khula-SemiBold",
                            fontSize: 20
                        }}
                    >
            Fee Protection
                    </Text>
                    <View
                        style={{
                            width: 70,
                            height: 30,
                            borderColor: Colors.borderColor2,
                            borderRadius: 7,
                            borderWidth: 1
                        }}
                    >
                        <Text
                            style={{
                                color: Colors.textColor7,
                                fontFamily: "Khula-SemiBold",
                                fontSize: 14,
                                alignSelf: "center",
                                marginTop: 5
                            }}
                        >
              OFF
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        backgroundColor: Colors.borderColor2,
                        marginHorizontal: 20,
                        height: 1
                    }}
                />
                <View
                    style={{
                        marginTop: 20,
                        marginHorizontal: 20,
                        marginBottom: 20,
                        flexDirection: "column",
                        justifyContent: "space-between"
                    }}
                >
                    <Text
                        style={{
                            color: Colors.textColor6,
                            fontFamily: "Khula-Regular",
                            fontSize: 13,
                            alignSelf: "center",
                            marginTop: 5,
                            textAlign: "justify",
                            marginHorizontal: 5
                        }}
                    >
                        {`Managing cashflow gets annoying. We get it. Clever's Fee Avoidance provides relief by automatically covering unexpected and temporary cash shortfalls in your checking account. You do't lift a finder and save $`}
                    </Text>
                    <View
                        style={{
                            flexDirection: "row",
                            marginTop: 20
                        }}
                    >
                        <View style={{ flex: 0.5 }}>
                            <Text
                                style={{
                                    color: Colors.textColor5,
                                    fontFamily: "Khula-Regular",
                                    fontSize: 12
                                }}
                            >
                Fee Avoided
                            </Text>
                            <View
                                style={{
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
                                    {`$ ${savedNumber}`}
                                </Text>
                                <View style={{ marginTop: 8, marginLeft: 10 }}>
                                    <DownIcon />
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 0.5 }}>
                            <Text
                                style={{
                                    color: Colors.textColor5,
                                    fontFamily: "Khula-Regular",
                                    fontSize: 12
                                }}
                            >
                Fee Incurred
                            </Text>
                            <View
                                style={{
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
                                    {`$ ${expenseNumber}`}
                                </Text>
                                <View style={{ marginTop: 8, marginLeft: 10 }}>
                                    <DownIcon />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={onPress}
                    style={{
                        marginHorizontal: 20,
                        marginTop: 10,
                        backgroundColor: Colors.buttonColor2,
                        borderRadius: 8,
                        height: 40,
                        justifyContent: "center"
                    }}
                >
                    <Text
                        style={{
                            color: Colors.white,
                            fontFamily: "Khula-SemiBold",
                            fontSize: 12,
                            alignSelf: "center"
                        }}
                    >
            TURN ON FEE PROTECTION
                    </Text>
                </TouchableOpacity>
            </View>
        </Card>
    );
};

export default FeeOffCard;
