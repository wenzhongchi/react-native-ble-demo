import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import BackDelete from "../../assets/svg/back_delete";
import Colors from "../../styles/colors";

interface Props {
    onPress: (value: string) => void;
}

interface State {
    text: string;
}

class NumberKeyboard extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            text: ""
        };
    }

    render() {
        return (
            <View style={[styles.container]}>
                {this.renderRow([1, 2, 3])}
                {this.renderRow([4, 5, 6])}
                {this.renderRow([7, 8, 9])}
                <View style={[styles.row]}>
                    <View style={{ flex: 1 }} />
                    {this.renderButton(0)}
                    {this.renderBackspace()}
                </View>
            </View>
        );
    }

    renderBackspace() {
        return (
            <TouchableOpacity
                accessibilityLabel="backspace"
                style={styles.backspace}
                onPress={() => {
                    this.onPress("back");
                }}
            >
                <BackDelete />
            </TouchableOpacity>
        );
    }

    renderRow(numbersArray: number[]) {
        let cells = numbersArray.map(val => this.renderButton(val));
        return <View style={styles.row}>{cells}</View>;
    }

    renderButton(symbol: number) {
        return (
            <TouchableOpacity
                style={styles.cell}
                key={symbol}
                accessibilityLabel={symbol.toString()}
                onPress={() => {
                    this.onPress(symbol.toString());
                }}
            >
                <Text style={styles.number}>{symbol}</Text>
            </TouchableOpacity>
        );
    }

    onPress(val: string) {
        const { onPress } = this.props;
        onPress(val);
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 20,
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between"
    },
    row: {
        flexDirection: "row",
        marginTop: 15
    },
    number: {
        fontSize: 32,
        color: Colors.textColor1,
        textAlign: "center",
        fontFamily: "Khula-Regular"
    },
    backspace: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    cell: {
        flex: 1,
        justifyContent: "center"
    }
});

export default NumberKeyboard;
