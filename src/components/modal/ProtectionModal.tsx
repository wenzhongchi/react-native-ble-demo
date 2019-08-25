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
import BasicButton from "../button/BasicButton";

interface Props {
    onClose?: () => void;
    onPress?: () => void;
    containerStyle?: ViewStyle;
    mode: "turnOn" | "turnOff";
    isVisible: boolean;
    textLabel: string | null;
}

const ProtectionModal = (props: Props) => {
    const {
        onClose,
        containerStyle,
        isVisible,
        textLabel,
        mode,
        onPress
    } = props;

    return (
        <Modal
            isVisible={isVisible}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            style={{ margin: 0, flex: 1, justifyContent: "flex-end" }}
            backdropColor="clear"
            onBackdropPress={onClose}
            useNativeDriver
            backdropTransitionOutTiming={0}
            hideModalContentWhileAnimating={true}
        >
            <SafeAreaView style={{ flex: 0 }}>
                <View
                    style={[
                        {
                            height: 200,
                            borderTopLeftRadius: 12,
                            borderTopRightRadius: 12,
                            overflow: "hidden",
                            backgroundColor: Colors.borderColor
                        },
                        containerStyle
                    ]}
                >
                    <View
                        style={{
                            flex: 1
                        }}
                    />
                    <Text
                        style={{
                            color: Colors.white,
                            fontSize: 15,
                            fontFamily: "Khula-Regular",
                            alignSelf: "center",
                            marginBottom: 7
                        }}
                    >
                        {textLabel}
                    </Text>
                    <BasicButton
                        mode={mode === "turnOn" ? "secondary" : "third"}
                        containerStyle={{
                            marginTop: 24,
                            marginBottom: 35,
                            marginHorizontal: 24
                        }}
                        textLabel={mode === "turnOn" ? "TURN ON" : "TURN OFF"}
                        onPress={onPress}
                    />
                </View>
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
            </SafeAreaView>
        </Modal>
    );
};

export default ProtectionModal;
