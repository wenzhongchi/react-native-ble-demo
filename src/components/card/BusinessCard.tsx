import React from "react";
import { TouchableOpacity, Text, ViewStyle, View } from "react-native";
import Colors from "../../styles/colors";
import Card from "./Card";
import { BusinessProfile } from "../../types/types";

interface Props {
    onPress: () => void;
    containerStyle?: ViewStyle;
    businessProfile: BusinessProfile;
}

const BusinessCard = (props: Props) => {
    const { onPress, businessProfile } = props;
    return (
        <Card containerStyle={{ marginBottom: 20, marginHorizontal: 10 }}>
            <Text
                style={{
                    color: Colors.textColor6,
                    fontFamily: "Khula-SemiBold",
                    fontSize: 11,
                    marginTop: 20,
                    marginLeft: 20
                }}
            >
        Business Info
            </Text>
            <View
                style={{
                    backgroundColor: Colors.borderColor2,
                    marginHorizontal: 20,
                    height: 1,
                    marginTop: 10
                }}
            />
            <View
                style={{
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    marginTop: 20,
                    marginHorizontal: 20
                }}
            >
                <View style={{ marginBottom: 10 }}>
                    <Text
                        style={{
                            color: Colors.textColor6,
                            fontFamily: "Khula-SemiBold",
                            fontSize: 11
                        }}
                    >
            Business Name
                    </Text>
                    <Text
                        style={{
                            color: Colors.textColor5,
                            fontFamily: "Khula-SemiBold",
                            fontSize: 16
                        }}
                    >
                        {businessProfile.businessName || "--"}
                    </Text>
                </View>
                <View style={{ marginBottom: 10 }}>
                    <Text
                        style={{
                            color: Colors.textColor6,
                            fontFamily: "Khula-Regular",
                            fontSize: 12
                        }}
                    >
            Business Website
                    </Text>
                    <Text
                        style={{
                            color: Colors.textColor5,
                            fontFamily: "Khula-SemiBold",
                            fontSize: 16
                        }}
                    >
                        {businessProfile.businessWebsite || "--"}
                    </Text>
                </View>
                <View style={{ marginBottom: 10 }}>
                    <Text
                        style={{
                            color: Colors.textColor6,
                            fontFamily: "Khula-Regular",
                            fontSize: 12
                        }}
                    >
            Business Address
                    </Text>
                    <Text
                        style={{
                            color: Colors.textColor5,
                            fontFamily: "Khula-SemiBold",
                            fontSize: 16
                        }}
                    >
                        {businessProfile.businessAddress || "--"}
                    </Text>
                </View>
            </View>
            <View
                style={{
                    backgroundColor: Colors.borderColor2,
                    marginHorizontal: 20,
                    height: 1,
                    marginTop: 10
                }}
            />
            <TouchableOpacity>
                <Text
                    onPress={onPress}
                    style={{
                        color: Colors.buttonColor,
                        fontFamily: "Khula-SemiBold",
                        alignSelf: "center",
                        fontSize: 12,
                        marginTop: 15
                    }}
                >{`Edit Business ->`}</Text>
            </TouchableOpacity>
        </Card>
    );
};

export default BusinessCard;
