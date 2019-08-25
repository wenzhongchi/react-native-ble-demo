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

const FeeOnCard = (props: Props) => {
    const { onPress, containerStyle, savedNumber, expenseNumber } = props;
    return (
        <Card containerStyle={{ marginHorizontal: 10 }}>
            <TouchableOpacity
                onPress={onPress}
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
                                color: Colors.textColor8,
                                fontFamily: "Khula-SemiBold",
                                fontSize: 14,
                                alignSelf: "center",
                                marginTop: 5
                            }}
                        >
              ON
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
                    <View
                        style={{
                            flexDirection: "row"
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
            </TouchableOpacity>
        </Card>
    );
};

export default FeeOnCard;
