import React from "react";
import {
    ViewStyle,
    View,
    Text,
    TouchableOpacity,
    SafeAreaView
} from "react-native";
import Modal from "react-native-modal";

import Colors from "../../styles/colors";
import CloseAlert from "../../assets/svg/close_alert";

interface Props {
    onClose?: () => void;
    containerStyle?: ViewStyle;
    mode: "error" | "success";
    isVisible: boolean;
    textLabel: string | null;
}

const AlertModal = (props: Props) => {
    const { onClose, containerStyle, isVisible, textLabel, mode } = props;

    let textColor: Colors;
    let backgroundColor: Colors;

    if (mode === "error") {
        textColor = Colors.white;
        backgroundColor = Colors.alertColorError;
    } else {
        textColor = Colors.white;
        backgroundColor = Colors.alertColorSuccess;
    }

    return (
        <Modal
            isVisible={isVisible}
            animationIn="slideInDown"
            animationOut="slideOutUp"
            style={{ margin: 0, flex: 1, justifyContent: "flex-start" }}
            backdropColor="clear"
            onBackdropPress={onClose}
            useNativeDriver
            backdropTransitionOutTiming={0}
            hideModalContentWhileAnimating={true}
        >
            <SafeAreaView style={{ flex: 0, backgroundColor: backgroundColor }}>
                <View style={[{ height: 40 }, containerStyle]}>
                    <View
                        style={{
                            flex: 1
                        }}
                    />
                    <Text
                        style={{
                            color: textColor,
                            fontSize: 15,
                            fontFamily: "Khula-Regular",
                            alignSelf: "center",
                            marginBottom: 7
                        }}
                    >
                        {textLabel}
                    </Text>
                    <TouchableOpacity
                        style={{
                            height: 20,
                            width: 20,
                            position: "absolute",
                            right: 10,
                            top: 15
                        }}
                        onPress={onClose}
                    >
                        <CloseAlert />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </Modal>
    );
};

export default AlertModal;
