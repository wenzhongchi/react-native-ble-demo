import React from "react";
import { TouchableOpacity, Text, ViewStyle, View } from "react-native";
import Switch from "react-native-switch-pro";
import Colors from "../../styles/colors";
import ForwardArrowIcon from "../../assets/svg/forward_arrow";

interface Props {
    mode?: "arrow" | "switch";
    switchState?: boolean;
    onPress: () => void;
    containerStyle?: ViewStyle;
    title: string;
}

const SettingRowCard = (props: Props) => {
    const { mode, onPress, containerStyle, title, switchState } = props;
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
                <View
                    style={{
                        marginTop: mode === "switch" ? 9 : 12,
                        marginRight: 10
                    }}
                >
                    {mode === "switch" ? (
                        <Switch onSyncPress={() => onPress()} value={switchState} />
                    ) : (
                        <ForwardArrowIcon />
                    )}
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default SettingRowCard;
