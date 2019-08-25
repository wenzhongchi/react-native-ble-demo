import React from "react";
import { TouchableOpacity, ViewStyle } from "react-native";
import BackArrow from "../../assets/svg/back_arrow";
import WhiteBackArrow from "../../assets/svg/back_arrow_white";

interface Props {
    onPress: () => void;
    containerStyle?: ViewStyle;
    color?: "black" | "white";
}

const BackButton = (props: Props) => {
    const { onPress, containerStyle, color } = props;

    return (
        <TouchableOpacity onPress={onPress} style={containerStyle}>
            {color === "black" ? <BackArrow /> : <WhiteBackArrow />}
        </TouchableOpacity>
    );
};

BackButton.defaultProps = {
    color: "black"
};

export default BackButton;
