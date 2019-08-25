import React from "react";
import { TouchableOpacity, Text, ViewStyle, View } from "react-native";
import Colors from "../../styles/colors";
import PlusIcon from "../../assets/svg/plus";

interface Props {
    onPress: () => void;
    containerStyle?: ViewStyle;
}

const AddAccountButton = (props: Props) => {
    const { onPress, containerStyle } = props;
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                {
                    flex: 1,
                    borderRadius: 8,
                    borderStyle: "dashed",
                    borderWidth: 1,
                    borderColor: Colors.textColor3,
                    justifyContent: "center",
                    height: 80
                },
                containerStyle
            ]}
        >
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
                <View
                    style={{
                        alignSelf: "center"
                    }}
                >
                    <PlusIcon />
                </View>
                <Text
                    style={{
                        marginLeft: 10,
                        color: Colors.textColor3,
                        alignSelf: "center",
                        fontFamily: "Khula-Regular",
                        fontSize: 12
                    }}
                >
          ADD BANK ACCOUNT
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default AddAccountButton;
