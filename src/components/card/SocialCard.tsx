import React, { ReactNode } from "react";
import { ViewStyle, View, Text } from "react-native";
import _ from "lodash";
import Colors from "../../styles/colors";
import BasicButton from "../button/BasicButton";
import FacebookLogo from "../../assets/svg/facebook";
import GoogleLogo from "../../assets/svg/google";
import InstagramLogo from "../../assets/svg/instagram";
import LinkedinLogo from "../../assets/svg/linkedin";
import { SocialAccount } from "../../types/types";

interface Props {
    onPress: () => void;
    containerStyle?: ViewStyle;
    platform: "facebook" | "linkedin" | "google" | "instagram";
    button?: ReactNode;
    socialAccounts: SocialAccount[];
}

export const SocialCard = (props: Props) => {
    const { containerStyle, platform, onPress, socialAccounts } = props;

    const connected = _.find(socialAccounts, socialAccount => {
        return socialAccount.platform === platform;
    });

    return (
        <View
            style={[
                {
                    height: 50,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginVertical: 5
                },
                containerStyle
            ]}
        >
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "center"
                }}
            >
                <View>
                    {platform === "facebook" && <FacebookLogo />}
                    {platform === "google" && <GoogleLogo />}
                    {platform === "instagram" && <InstagramLogo />}
                    {platform === "linkedin" && <LinkedinLogo />}
                </View>
                <Text
                    style={{
                        color: Colors.textColor5,
                        fontSize: 14,
                        fontFamily: "Khula-SemiBold",
                        marginTop: 4,
                        marginLeft: 10
                    }}
                >
                    {platform[0].toUpperCase() + platform.slice(1)}
                </Text>
            </View>
            <BasicButton
                mode={connected ? "secondary" : "primary"}
                textLabel={connected ? "CONNECTED" : "CONNECT"}
                onPress={connected ? () => {} : onPress}
                containerStyle={{ borderRadius: 8, width: 90 }}
                buttonHeight={35}
                fontSize={11}
            />
        </View>
    );
};
