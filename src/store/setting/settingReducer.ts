import {
    SettingActionTypes,
    SET_SETTING,
    SET_SETTING_FAILURE,
    SET_SETTING_SUCCESS
} from "./settingActionType";
import Immutable from "seamless-immutable";
import { SettingState } from "../../types/types";

const INITIAL_STATE: Immutable.Immutable<SettingState> = Immutable({
    phone: "",
    settingError: null,
    settingSuccess: null
});

const userReducer = (state = INITIAL_STATE, action: SettingActionTypes) => {
    switch (action.type) {
        case SET_SETTING:
        case SET_SETTING_FAILURE:
        case SET_SETTING_SUCCESS:
            return state.merge(action.payload);

        default:
            return state;
    }
};

export default userReducer;
