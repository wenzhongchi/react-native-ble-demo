import React from "react";
import ProgressCircle from "react-native-progress-circle";
import { TouchableOpacity, Text, ViewStyle, View } from "react-native";
import Colors from "../../styles/colors";

interface Props {
    onPress: () => void;
    containerStyle?: ViewStyle;
    percentage: number;
}

const AttentionCard = (props: Props) => {
    const { onPress, containerStyle, percentage } = props;
    return (
        <View
            style={[
                {
                    borderColor: Colors.borderColor2,
                    borderWidth: 1,
                    flex: 1,
                    marginHorizontal: 10,
                    borderRadius: 8,
                    backgroundColor: Colors.white
                },
                containerStyle
            ]}
        >
            <TouchableOpacity style={{ flex: 1 }} onPress={onPress}>
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "flex-start"
                    }}
                >
                    <View
                        style={{
                            alignSelf: "center",
                            marginLeft: 16
                        }}
                    >
                        <ProgressCircle
                            percent={percentage}
                            radius={25}
                            borderWidth={3}
                            color={Colors.circleRedColor}
                            shadowColor={Colors.circleShadowColor}
                            bgColor="#fff"
                        >
                            <Text style={{ fontSize: 12, color: Colors.circleRedColor }}>
                                {`${percentage}%`}
                            </Text>
                        </ProgressCircle>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "column",
                            justifyContent: "center",
                            marginLeft: 15
                        }}
                    >
                        <Text
                            style={{
                                color: Colors.alertColorError,
                                fontFamily: "Khula-SemiBold",
                                fontSize: 14
                            }}
                        >
              NEEDS ATTENTION
                        </Text>
                        <Text
                            style={{
                                color: Colors.textColor6,
                                fontFamily: "Khula-Regular",
                                fontSize: 12
                            }}
                        >
              Some attention description
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default AttentionCard;
