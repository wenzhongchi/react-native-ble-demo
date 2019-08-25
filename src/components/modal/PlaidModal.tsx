import React, { ReactNode } from "react";
import { ViewStyle, View } from "react-native";
import Modal from "react-native-modal";
import Colors from "../../styles/colors";

interface Props {
    onClose?: () => void;
    containerStyle?: ViewStyle;
    isVisible: boolean;
    children: ReactNode;
}

const PlaidModal = (props: Props) => {
    const { onClose, containerStyle, isVisible, children } = props;

    return (
        <Modal
            isVisible={isVisible}
            animationIn="slideInUp"
            style={{ margin: 0, flex: 1, justifyContent: "flex-end" }}
            onBackdropPress={onClose}
            useNativeDriver
            backdropTransitionOutTiming={0}
            hideModalContentWhileAnimating={true}
        >
            <View
                style={[
                    {
                        marginTop: 200,
                        flex: 1,
                        backgroundColor: Colors.white,
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12,
                        overflow: "hidden"
                    },
                    containerStyle
                ]}
            >
                {children}
            </View>
        </Modal>
    );
};

export default PlaidModal;
