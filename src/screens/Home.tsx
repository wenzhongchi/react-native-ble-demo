import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    Image,
    SafeAreaView
} from "react-native";
import { ThunkDispatch } from "redux-thunk";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import _ from "lodash";
import { ReduxState, SettingState } from "../types/types";
import { StatusBarHeight } from "../utils/ScreenUtil";

interface Props {}

interface State {
    showProtection: boolean;
    showPlaid: boolean;
}
class Home extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            showProtection: false,
            showPlaid: false
        };
    }

    componentDidMount() {}

    render() {
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={{ marginTop: -StatusBarHeight }} />
            </SafeAreaView>
        );
    }
}

const mapStateToProps = ({ setting }: { setting: SettingState }) => {
    return {
        plaidConfig: setting.phone
    };
};

const mapDispatchToProps = (
    dispatch: ThunkDispatch<ReduxState, any, AnyAction>
) => {
    return {};
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
