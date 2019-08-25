import React, { Component } from "react";
import {
    View,
    StyleSheet,
    ViewStyle,
    FlatList,
    Text,
    TouchableOpacity
} from "react-native";
import Colors from "../../styles/colors";

enum Months {
    oneMonth = "1 MONTH",
    twoMonth = " 2 MONTH",
    threeMonth = "3 MONTH",
    allMonth = "All MONTH"
}

interface Props {
    onSelect: (text: string) => void;
    containerStyle?: ViewStyle;
}

interface State {
    selectedDate: Months;
}
class DateSelect extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            selectedDate: Months.oneMonth
        };
    }

    handleSelect = (item: string) => {
        const { onSelect } = this.props;
        switch (item) {
            case Months.oneMonth:
                this.setState({ selectedDate: Months.oneMonth });
                break;
            case Months.twoMonth:
                this.setState({ selectedDate: Months.twoMonth });
                break;
            case Months.threeMonth:
                this.setState({ selectedDate: Months.threeMonth });
                break;
            case Months.allMonth:
                this.setState({ selectedDate: Months.allMonth });
                break;
        }
        onSelect(item);
    };

    renderItem = ({ item }: { item: string }) => {
        const { selectedDate } = this.state;
        const cellColor = item === selectedDate ? Colors.buttonColor : Colors.white;
        const textColor = item === selectedDate ? Colors.white : Colors.textColor3;
        const cellBorderWidth = item === selectedDate ? 0 : 1;
        return (
            <View
                style={{
                    flex: 1,
                    borderRadius: 20,
                    height: 40,
                    width: 100,
                    borderColor: Colors.borderColor2,
                    borderWidth: cellBorderWidth,
                    marginRight: 10,
                    justifyContent: "center",
                    backgroundColor: cellColor
                }}
            >
                <TouchableOpacity onPress={() => this.handleSelect(item)}>
                    <Text
                        style={{
                            alignSelf: "center",
                            color: textColor,
                            fontSize: 12,
                            fontFamily: "Khula-SemiBold"
                        }}
                    >
                        {item}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };

    keyExtractor = (item: string) => {
        return item;
    };

    render() {
        const { containerStyle } = this.props;
        const monthArray = [
            Months.oneMonth,
            Months.twoMonth,
            Months.threeMonth,
            Months.allMonth
        ];

        return (
            <View style={[styles.container, containerStyle]}>
                <FlatList
                    style={{ padding: 10 }}
                    horizontal={true}
                    data={monthArray}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 18
    }
});

export default DateSelect;
