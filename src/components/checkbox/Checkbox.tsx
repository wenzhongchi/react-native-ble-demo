import React, { Component } from "react";
import { TouchableOpacity, ViewStyle } from "react-native";
import BoxChecked from "../../assets/svg/box_checked";
import BoxUnchecked from "../../assets/svg/box_unchecked";
import BoxError from "../../assets/svg/box_error";

interface Props {
    containerStyle?: ViewStyle;
    onChange: (checked: boolean) => void;
    error?: boolean;
}

interface State {
    checked: boolean;
}

class Checkbox extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            checked: false
        };
    }

    onPress = () => {
        const { checked } = this.state;
        const { onChange } = this.props;

        this.setState({ checked: !checked });
        onChange(!checked);
    };

    renderIcon = () => {
        const { error } = this.props;
        const { checked } = this.state;

        if (error) return <BoxError />;
        if (checked) return <BoxChecked />;
        return <BoxUnchecked />;
    };

    render() {
        const { containerStyle } = this.props;
        return (
            <TouchableOpacity onPress={this.onPress} style={[containerStyle]}>
                {this.renderIcon()}
            </TouchableOpacity>
        );
    }
}

export default Checkbox;
