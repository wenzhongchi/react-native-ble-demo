import React, { Component, Fragment, ReactNode } from "react";
import { AppState, AppStateStatus } from "react-native";
import { ThunkDispatch } from "redux-thunk";
import { connect } from "react-redux";
import { AnyAction } from "redux";
import { ReduxState, SettingState } from "../types/types";
import Config from "../config/config";

interface Props {
    children: ReactNode;
}

interface State {
    appState: AppStateStatus;
}

class AppStart extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            appState: AppState.currentState
        };
    }

    componentDidMount() {}

    componentWillUnmount() {
        AppState.removeEventListener("change", this.handleAppStateChange);
    }

    handleAppStateChange = (appState: AppStateStatus) => {};

    render() {
        const { children } = this.props;
        return <Fragment>{children}</Fragment>;
    }
}

const mapStateToProps = ({ setting }: { setting: SettingState }) => {
    return {};
};

const mapDispatchToProps = (
    dispatch: ThunkDispatch<ReduxState, any, AnyAction>
) => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppStart);
