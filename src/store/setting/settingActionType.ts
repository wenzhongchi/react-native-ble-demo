import { SettingData } from "../../types/types";

export const SET_SETTING = "SET_SETTING";
export const SET_SETTING_FAILURE = "SET_SETTING_FAILURE";
export const SET_SETTING_SUCCESS = "SET_SETTING_SUCCESS";

export interface SettingErrorPayload {
    settingError: string | null;
}

export interface SettingSuccessPayload {
    settingSuccess: string | null;
}

interface SetSettingAction {
    type: typeof SET_SETTING;
    payload: SettingData;
}

interface SetSettingFailureAction {
    type: typeof SET_SETTING_FAILURE;
    payload: SettingErrorPayload;
}

interface SetSettingSuccessAction {
    type: typeof SET_SETTING_SUCCESS;
    payload: SettingSuccessPayload;
}

export type SettingActionTypes =
  | SetSettingAction
  | SetSettingFailureAction
  | SetSettingSuccessAction;
