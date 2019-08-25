import React, { ReactNode } from "react";
import { ViewStyle, View } from "react-native";
import Colors from "../../styles/colors";

interface Props {
    containerStyle?: ViewStyle;
    children: ReactNode;
}

const Card = (props: Props) => {
    const { containerStyle, children } = props;
    return (
        <View
            style={[
                {
                    flex: 1,
                    borderRadius: 8,
                    backgroundColor: Colors.white,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1
                    },
                    shadowOpacity: 0.1,
                    shadowRadius: 8,
                    elevation: 1
                },
                containerStyle
            ]}
        >
            {children}
        </View>
    );
};

export default Card;
