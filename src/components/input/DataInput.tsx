import React, { Component } from "react";
import { View, Text, StyleSheet, ViewStyle, TextInput } from "react-native";
import Colors from "../../styles/colors";

interface Props {
    label: string;
    value: string;
    placeholder?: string;
    onChangeText: (text: string) => void;
    containerStyle?: ViewStyle;
}

class DataInput extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        const {
            label,
            onChangeText,
            containerStyle,
            placeholder,
            value
        } = this.props;
        return (
            <View style={[styles.container, containerStyle]}>
                <Text style={styles.label}>{label}</Text>
                <TextInput
                    value={value}
                    placeholder={placeholder}
                    style={styles.textInput}
                    onChangeText={(text: string) => {
                        onChangeText(text);
                    }}
                />
                <View
                    style={{
                        backgroundColor: Colors.borderColor2,
                        height: 1,
                        marginTop: 1
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 20,
        paddingHorizontal: 20
    },
    label: {
        height: 20,
        fontSize: 15,
        fontFamily: "Khula-Bold",
        color: Colors.textColor1
    },
    textInput: {
        marginTop: 5,
        height: 38,
        fontSize: 13,
        fontFamily: "Khula-Regular",
        color: Colors.inputTextColor
    }
});

export default DataInput;
