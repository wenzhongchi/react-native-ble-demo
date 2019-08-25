import React from "react";
import { View, ViewStyle, Text } from "react-native";
import PlaidLogo from "../../assets/svg/plaid_logo";
import Colors from "../../styles/colors";

interface Props {
    containerStyle?: ViewStyle;
}

const PowerCard = (props: Props) => {
    const { containerStyle } = props;

    return (
        <View
            style={[
                { justifyContent: "center", flexDirection: "row" },
                containerStyle
            ]}
        >
            <Text
                style={{
                    color: Colors.textColor3,
                    fontSize: 15,
                    fontFamily: "Khula-Regular",
                    marginRight: 10
                }}
            >
        Powered by
            </Text>
            <PlaidLogo />
        </View>
    );
};

export default PowerCard;
