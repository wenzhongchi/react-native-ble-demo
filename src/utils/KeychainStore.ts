import * as Keychain from "react-native-keychain";
import _ from "lodash";
import { StringObject } from "../types/types";

const KEYCHAIN_CONFIG = {
    accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED_THIS_DEVICE_ONLY
};

const getKeyChain = async (): Promise<StringObject> => {
    try {
        const credentials = await Keychain.getGenericPassword();
        if (typeof credentials === "boolean") return {};
        const result = JSON.parse(credentials.password);
        return result instanceof Object ? result : {};
    } catch (_) {
        return {};
    }
};

const KeychainStore = {
    getValue: async (key: string) => {
        const allValues = await getKeyChain();
        if (key === undefined) {
            return allValues;
        }
        if (typeof allValues === "object" && key in allValues) {
            const value = allValues[key];
            return value;
        }
        return undefined;
    },

    setValue: async (value: StringObject) => {
        try {
            const currentValues = await getKeyChain();
            await Keychain.setGenericPassword(
                "clever",
                JSON.stringify({
                    ...currentValues,
                    ...value
                }),
                KEYCHAIN_CONFIG
            );
        } catch (error) {
            if (__DEV__) console.debug("FAILED TO SET VALUE", value, error);
        }
    },

    removeAll: async () => {
        try {
            await Keychain.resetGenericPassword();
        } catch (error) {
            if (__DEV__) console.debug("FAILED RESET VALUE", error);
        }
    },

    removeKeys: async (keys: string[]) => {
        const allValues = await getKeyChain();
        try {
            const newValues = JSON.stringify(_.omit(allValues, keys));
            await Keychain.setGenericPassword("clever", newValues, KEYCHAIN_CONFIG);
        } catch (error) {
            if (__DEV__) console.debug("FAILED TO REMOVE", keys, error);
        }
    }
};

export default KeychainStore;
