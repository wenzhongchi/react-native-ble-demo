import React from "react";
import { TouchableOpacity, Text, ViewStyle, View } from "react-native";
import Colors from "../../styles/colors";
import Card from "./Card";

interface Props {
    onPress: () => void;
    containerStyle?: ViewStyle;
    textLabel: string;
}

const OptionCard = (props: Props) => {
    const { onPress, containerStyle, textLabel } = props;
    return (
        <Card
            containerStyle={{
                marginBottom: 20,
                marginHorizontal: 10,
                height: 74,
                flex: 0
            }}
        >
            <TouchableOpacity
                onPress={onPress}
                style={[
                    {
                        flex: 1,
                        borderRadius: 8,
                        justifyContent: "center"
                    },
                    containerStyle
                ]}
            >
                <View style={{ flex: 1, justifyContent: "center" }}>
                    <Text
                        style={{
                            marginLeft: 10,
                            color: Colors.textColor7,
                            alignSelf: "center",
                            fontFamily: "Khula-Regular",
                            fontSize: 22
                        }}
                    >
                        {textLabel}
                    </Text>
                </View>
            </TouchableOpacity>
        </Card>
    );
};

export default OptionCard;
