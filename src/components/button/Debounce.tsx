import React from "react";
import { TouchableOpacity } from "react-native";
import { debounce } from "lodash";

interface Props {
    onPress: () => void;
}

const DebouncedButton: React.ClassType<Props, any, any> = (
    WrappedComponent: any
) => {
    class PreventDoubleClick extends React.PureComponent<Props> {
        debouncedOnPress = () => {
            this.props.onPress && this.props.onPress();
        };

        onPress = debounce(this.debouncedOnPress, 300, {
            leading: true,
            trailing: false
        });

        render() {
            return <WrappedComponent {...this.props} onPress={this.onPress} />;
        }
    }

    return PreventDoubleClick;
};

export default DebouncedButton;
