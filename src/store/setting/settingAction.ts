import {
    SettingActionTypes,
    SET_SETTING,
    SET_SETTING_FAILURE,
    SET_SETTING_SUCCESS
} from "./settingActionType";
import { SettingData } from "../../types/types";

export const setSetting = (settingData: SettingData): SettingActionTypes => {
    return {
        type: SET_SETTING,
        payload: { ...settingData }
    };
};

export const setSettingFailure = (error: string | null): SettingActionTypes => {
    return {
        type: SET_SETTING_FAILURE,
        payload: { settingError: error }
    };
};

export const setSettingSuccess = (
    success: string | null
): SettingActionTypes => {
    return {
        type: SET_SETTING_SUCCESS,
        payload: { settingSuccess: success }
    };
};
