import React, { Component } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import CodeFiled from "react-native-confirmation-code-field";
import Colors from "../../styles/colors";

interface Props {
    onFinish: (code: string) => void;
    containerStyle?: ViewStyle;
    error?: boolean;
}

class CodeInput extends Component<Props> {
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
        const { containerStyle } = this.props;

        return (
            <CodeFiled
                blurOnSubmit={false}
                variant="clear"
                codeLength={7}
                keyboardType="numeric"
                inputProps={{ returnKeyType: "done" }}
                cellProps={this.cellProps}
                containerProps={{ style: [styles.inputWrapStyle, containerStyle] }}
                onFulfill={this.onFinishEnter}
            />
        );
    }
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        width: 37,
        borderRadius: 3,
        color: Colors.black,
        backgroundColor: Colors.codeBackgroundColor
    },
    inputNotEmpty: {
        backgroundColor: Colors.codeBackgroundColor
    },
    inputWrapStyle: {
        marginLeft: 10,
        marginRight: 10,
        height: 50,
        marginTop: 30
    },
    inputError: {
        borderWidth: 1,
        borderColor: Colors.red
    }
});

export default CodeInput;
