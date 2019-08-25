import React from "react";
import { UIActivityIndicator } from "react-native-indicators";
import { TouchableOpacity, Text, View, ViewStyle, Image } from "react-native";
import Colors from "../../styles/colors";

interface Props {
    onPress: () => void;
    profileImage: string | null;
    fullName: string | null;
    containerStyle?: ViewStyle;
    color?: string;
    showIndicator?: boolean;
}

const UserAvatar = (props: Props) => {
    const {
        onPress,
        fullName,
        profileImage,
        containerStyle,
        color,
        showIndicator
    } = props;

    const firstName =
    fullName &&
    fullName
        .split(" ")
        .slice(0, -1)
        .join(" ");
    const lastName =
    fullName &&
    fullName
        .split(" ")
        .slice(-1)
        .join(" ");
    const firstNameChar = firstName && firstName.charAt(0);
    const lastNameChar = lastName && lastName.charAt(0);

    const displayName = `${firstNameChar}${lastNameChar}`.toUpperCase();

    return (
        <TouchableOpacity
            style={[
                {
                    width: 90,
                    height: 90,
                    borderRadius: 45,
                    backgroundColor: color || Colors.white,
                    justifyContent: "center"
                },
                containerStyle
            ]}
            onPress={onPress}
        >
            {profileImage ? (
                <Image
                    style={{
                        backgroundColor: Colors.buttonColor3,
                        width: 80,
                        height: 80,
                        borderRadius: 40,
                        alignSelf: "center",
                        justifyContent: "center"
                    }}
                    source={{ uri: profileImage }}
                />
            ) : (
                <View
                    style={{
                        backgroundColor: Colors.buttonColor3,
                        width: 80,
                        height: 80,
                        borderRadius: 40,
                        alignSelf: "center",
                        justifyContent: "center"
                    }}
                >
                    <Text
                        style={{
                            color: Colors.inputPlaceholderColor,
                            fontFamily: "Khula-Bold",
                            alignSelf: "center",
                            fontSize: 28
                        }}
                    >
                        {displayName}
                    </Text>
                </View>
            )}
            {showIndicator && (
                <View
                    style={{
                        alignSelf: "center",
                        justifyContent: "center",
                        position: "absolute"
                    }}
                >
                    <UIActivityIndicator color="white" />
                </View>
            )}
        </TouchableOpacity>
    );
};

export default UserAvatar;
