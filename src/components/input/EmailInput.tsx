import React, { Component } from "react";
import { View, Animated, StyleSheet, ViewStyle } from "react-native";
import TextInputMask from "react-native-text-input-mask";
import Colors from "../../styles/colors";

interface Props {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    containerStyle?: ViewStyle;
}

interface State {
    isFocused: boolean;
}
class EmailInput extends Component<Props, State> {
    animatedFocused: Animated.Value;

    constructor(props: Props) {
        super(props);
        this.animatedFocused = new Animated.Value(0);
        this.state = {
            isFocused: false
        };
    }

    handleFocus = () => this.setState({ isFocused: true });
    handleBlur = () => this.setState({ isFocused: false });

    componentDidUpdate() {
        Animated.timing(this.animatedFocused, {
            toValue: this.state.isFocused || this.props.value !== "" ? 1 : 0,
            duration: 200
        }).start();
    }

    render() {
        const { label, onChangeText, containerStyle, ...props } = this.props;
        const labelStyle = {
            position: "absolute",
            left: 24,
            top: this.animatedFocused.interpolate({
                inputRange: [0, 1],
                outputRange: [18, 10]
            }),
            fontSize: this.animatedFocused.interpolate({
                inputRange: [0, 1],
                outputRange: [15, 11]
            }),
            color: this.animatedFocused.interpolate({
                inputRange: [0, 1],
                outputRange: [
                    Colors.inputPlaceholderColor,
                    Colors.inputPlaceholderColor
                ]
            })
        };
        return (
            <View style={[styles.container, containerStyle]}>
                <Animated.Text style={labelStyle}>{label}</Animated.Text>
                <TextInputMask
                    {...props}
                    style={styles.textInput}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    onChangeText={(formatted: string, _?: string) => {
                        onChangeText(formatted);
                    }}
                    blurOnSubmit
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 18,
        backgroundColor: Colors.inputBackgroundColor,
        borderRadius: 8
    },
    textInput: {
        marginLeft: 24,
        height: 38,
        fontSize: 15,
        fontFamily: "Khula-Regular",
        color: Colors.inputTextColor
    }
});

export default EmailInput;
