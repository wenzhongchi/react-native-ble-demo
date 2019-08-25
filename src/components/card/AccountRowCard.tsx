import React from "react";
import { TouchableOpacity, Text, ViewStyle, View } from "react-native";
import Colors from "../../styles/colors";

interface Props {
    onPress?: () => void;
    containerStyle?: ViewStyle;
    title: string;
    value: string;
    bottomLine?: boolean;
}

const AccountRowCard = (props: Props) => {
    const { onPress, containerStyle, title, value, bottomLine } = props;
    return (
        <TouchableOpacity
            style={[
                {
                    height: 40,
                    marginHorizontal: 20,
                    marginTop: 10
                },
                containerStyle
            ]}
            onPress={onPress}
        >
            <View
                style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}
            >
                <Text
                    style={{
                        color: Colors.textColor6,
                        fontFamily: "Khula-SemiBold",
                        alignSelf: "center",
                        fontSize: 14,
                        marginTop: 5
                    }}
                >
                    {title}
                </Text>
                <Text
                    style={{
                        color: Colors.textColor5,
                        fontFamily: "Khula-SemiBold",
                        alignSelf: "center",
                        fontSize: 14,
                        marginTop: 5
                    }}
                >
                    {value}
                </Text>
            </View>

            <View
                style={{
                    backgroundColor: Colors.borderColor2,
                    height: bottomLine ? 1 : 0,
                    marginTop: 10
                }}
            />
        </TouchableOpacity>
    );
};

AccountRowCard.defaultProps = {
    bottomLine: true
};

export default AccountRowCard;
