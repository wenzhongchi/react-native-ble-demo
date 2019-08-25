import React, { Component } from "react";
import { WebView } from "react-native-webview";
import Modal from "react-native-modal";
import { View, TouchableOpacity } from "react-native";
import { objectToParams, paramsToObject } from "../../utils/DataUtil";
import { WebViewNavigationEvent } from "react-native-webview/lib/WebViewTypes";
import CloseButton from "../../assets/svg/close_button";
import Colors from "../../styles/colors";

const AUTHORIZATION_URL = "https://www.linkedin.com/oauth/v2/authorization";
const ACCESS_TOKEN_URL = "https://www.linkedin.com/oauth/v2/accessToken";
const USER_CANCEL_TYPES = ["user_cancelled_login", "user_cancelled_authorize"];

interface LinkedInFailError {
    type: string;
    message: string;
}

interface LinkedInSuccess {
    accessToken: string;
    expiresIn: string;
}

interface Props {
    onClose: () => void;
    onSuccess?: (result: LinkedInSuccess) => void;
    onFail?: (error: LinkedInFailError) => void;
    onCancel?: () => void;
    redirectUrl: string;
    clientId: string;
    state: string;
    scope: string[];
    clientSecret: string;
    isVisible: boolean;
}

class LinkedInModal extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    getAuthorizationUrl() {
        const { redirectUrl, clientId, state, scope } = this.props;

        let url =
      `${AUTHORIZATION_URL}?response_type=code&client_id=${clientId}&state=${state}&` +
      `redirect_uri=${encodeURIComponent(redirectUrl)}`;
        if (scope) {
            url = url + `&scope=${scope.join("%20")}`;
        }

        return url;
    }

    onLoadStart = (event: WebViewNavigationEvent) => {
        const { redirectUrl, state, onFail, onCancel } = this.props;

        const url = event.nativeEvent.url;

        if (url.startsWith(redirectUrl)) {
            const params = paramsToObject(url);

            if (params.state !== state) {
                if (onFail)
                    onFail({
                        type: "state_error",
                        message:
              "Attention, CSRF ATTACK!!! The state in response is not the same one in request!"
                    });

                return;
            }

            if (params.error) {
                if (USER_CANCEL_TYPES.indexOf(params.error) > -1) {
                    if (onCancel) onCancel();
                    return;
                }

                if (onFail)
                    onFail({
                        type: params.error,
                        message: params.error_description
                    });
                return;
            }

            if (!params.code) {
                if (onFail)
                    onFail({
                        type: "Unknown",
                        message: "I have no idea :(!"
                    });
                return;
            }

            this.requestToken(params.code);
        }
    };

    requestToken = (authorizationCode: string) => {
        const {
            redirectUrl,
            clientId,
            clientSecret,
            onSuccess,
            onFail
        } = this.props;

        const header = {
            "Content-Type": "application/x-www-form-urlencoded"
        };

        const parameters = {
            grant_type: "authorization_code",
            code: authorizationCode,
            redirect_uri: redirectUrl,
            client_id: clientId,
            client_secret: clientSecret
        };

        const requestOption = {
            method: "POST",
            headers: header,
            body: objectToParams(parameters)
        };

        fetch(ACCESS_TOKEN_URL, requestOption)
            .then(response => {
                response
                    .json()
                    .then(result => {
                        if (result.error) {
                            if (onFail)
                                onFail({
                                    type: result.error,
                                    message: result.error_description
                                });
                            return;
                        }
                        if (onSuccess)
                            onSuccess({
                                accessToken: result.access_token,
                                expiresIn: result.expires_in
                            });
                    })
                    .catch(() => {
                        if (onFail)
                            onFail({
                                type: "parse_access_token_response_error",
                                message: "Cannot parse access token response to json."
                            });
                    });
            })
            .catch(() => {
                if (onFail)
                    onFail({
                        type: "fetch_access_token_request_error",
                        message:
              "Cannot fetch access token request failed, might be network issue."
                    });
            });
    };

    render() {
        const { onClose, isVisible } = this.props;
        return (
            <Modal
                isVisible={isVisible}
                animationIn="slideInUp"
                style={{ margin: 0, flex: 1, justifyContent: "flex-end" }}
                useNativeDriver
                onBackdropPress={onClose}
            >
                <View
                    style={[
                        {
                            marginTop: 200,
                            flex: 1,
                            backgroundColor: Colors.white,
                            borderTopLeftRadius: 12,
                            borderTopRightRadius: 12,
                            overflow: "hidden"
                        }
                    ]}
                >
                    <View style={{ height: 40, backgroundColor: "white" }}>
                        <TouchableOpacity
                            onPress={onClose}
                            style={{ position: "absolute", right: 20, top: 20 }}
                        >
                            <CloseButton />
                        </TouchableOpacity>
                    </View>
                    <WebView
                        style={{ flex: 1 }}
                        source={{ uri: this.getAuthorizationUrl() }}
                        onLoadStart={this.onLoadStart}
                        domStorageEnabled={true}
                        javaScriptEnabled={true}
                    />
                </View>
            </Modal>
        );
    }
}

export default LinkedInModal;
