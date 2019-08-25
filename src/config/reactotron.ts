import DeviceInfo from "react-native-device-info";
import Reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";
import Immutable from "seamless-immutable";

class ReactotronConfig {
    isLogEnable: boolean = false;

    constructor(options: any = {}) {
        this.isLogEnable = options.enableLog ? options.enableLog : false;
        this.configureReactotron();
    // this.connectConsoleToReactotron();
    }

    configureReactotron() {
        if (DeviceInfo.isEmulator()) {
            Reactotron.configure({
                name: "App"
            })
                .use(reactotronRedux({ onRestore: Immutable }))
                .useReactNative({})
                .connect();
        } else {
            Reactotron.configure({
                name: "App",
                host: "127.0.0.1"
            })
                .use(reactotronRedux({ onRestore: Immutable }))
                .useReactNative({})
                .connect();
        }

        if (Reactotron.clear) Reactotron.clear();
    }

    connectConsoleToReactotron() {
        console.info = this.info;
        console.log = this.log;
        console.warn = this.warn;
        console.error = this.error;
    }

    log(message: string, ...args: any[]) {
        if (!this.isLogEnable) return;
        Reactotron.display({
            name: "LOG",
            preview: message,
            value: { message, args }
        });
    }

    info(message: string, ...args: any[]) {
        if (!this.isLogEnable) return;
        Reactotron.display({
            name: "INFO",
            preview: message,
            value: { message, args }
        });
    }

    warn(message: string, ...args: any[]) {
        if (!this.isLogEnable) return;
        Reactotron.display({
            name: "WARN",
            preview: message,
            value: { message, args },
            important: true
        });
    }

    error(message: string, ...args: any[]) {
        if (!this.isLogEnable) return;
        Reactotron.display({
            name: "ERROR",
            preview: message,
            value: { message, args },
            important: true
        });
    }
}

export default ReactotronConfig;
