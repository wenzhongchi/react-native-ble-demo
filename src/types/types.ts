import { rootReducer } from '../store/store';

export interface Dictionary<T> {
    [Key: string]: T;
}

export interface StringObject<T = string> {
    [Key: string]: T;
}

export type Partial<T> = { [P in keyof T]?: T[P] };

export type TouchIdType = 'FaceID' | 'TouchID';

// redux state
export type ReduxState = ReturnType<typeof rootReducer>;

export interface SettingState {
    phone: string;
    settingError: string | null;
    settingSuccess: string | null;
}

export interface SettingData {
    phone: string;
}
