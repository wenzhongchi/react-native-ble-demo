import React from "react";
import { TouchableOpacity, Text, ViewStyle, View } from "react-native";
import Colors from "../../styles/colors";
import Card from "./Card";
import { UserProfile } from "../../types/types";
import UserAvatar from "../Image/UserAvatar";

interface Props {
    onPress: () => void;
    containerStyle?: ViewStyle;
    userProfile: UserProfile;
}

const ProfileCard = (props: Props) => {
    const { onPress, containerStyle, userProfile } = props;
    return (
        <Card
            containerStyle={{
                marginBottom: 20,
                marginHorizontal: 10,
                ...containerStyle
            }}
        >
            <UserAvatar
                containerStyle={{ marginTop: -50, alignSelf: "center" }}
                fullName={userProfile.fullName}
                profileImage={userProfile.profileImage}
                onPress={onPress}
            />
            <View
                style={{
                    marginTop: 5,
                    flexDirection: "column",
                    justifyContent: "flex-start"
                }}
            >
                <Text
                    style={{
                        color: Colors.textColor5,
                        fontFamily: "Khula-Bold",
                        alignSelf: "center",
                        fontSize: 24,
                        marginLeft: 16
                    }}
                >
                    {userProfile.fullName}
                </Text>
                <Text
                    style={{
                        color: Colors.textColor7,
                        fontFamily: "Khula-Regular",
                        alignSelf: "center",
                        fontSize: 13
                    }}
                >
                    {userProfile.email}
                </Text>
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
                >{`Edit Profile ->`}</Text>
            </TouchableOpacity>
        </Card>
    );
};

export default ProfileCard;
