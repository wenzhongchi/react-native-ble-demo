import React, { Component, RefObject } from "react";
import { StyleSheet, ViewStyle } from "react-native";
import CodeField from "react-native-confirmation-code-field";
import Colors from "../../styles/colors";

interface Props {
    onFinish: (code: string) => void;
    containerStyle?: ViewStyle;
    error?: boolean;
    pinInputRef?: RefObject<any>;
}

class PinInput extends Component<Props> {
    cellProps = ({ hasValue }: { hasValue: boolean }) => {
        const { error } = this.props;

        if (hasValue) {
            return {
                style: [styles.input, styles.inputNotEmpty, error && styles.inputError]
            };
        }
        return {
            style: [styles.input, error && styles.inputError]
        };
    };

    onFinishEnter = (code: string) => {
        const { onFinish } = this.props;
        onFinish(code);
    };

    render() {
        const { containerStyle, pinInputRef } = this.props;

        return (
            <CodeField
                maskSymbol="●"
                ref={pinInputRef}
                blurOnSubmit={false}
                variant="clear"
                codeLength={4}
                keyboardType="numeric"
                inputPosition="full-width"
                inputProps={{ editable: false }}
                cellProps={this.cellProps}
                containerProps={{ style: [styles.inputWrapStyle, containerStyle] }}
                onFulfill={this.onFinishEnter}
            />
        );
    }
}

const styles = StyleSheet.create({
    input: {
        height: 65,
        width: 50,
        borderRadius: 3,
        color: Colors.black,
        backgroundColor: Colors.codeBackgroundColor
    },
    inputNotEmpty: {
        backgroundColor: Colors.codeBackgroundColor
    },
    inputWrapStyle: {
        marginLeft: 25,
        marginRight: 25,
        height: 65,
        marginTop: 30
    },
    inputError: {
        borderWidth: 1,
        borderColor: Colors.red
    }
});

export default PinInput;
