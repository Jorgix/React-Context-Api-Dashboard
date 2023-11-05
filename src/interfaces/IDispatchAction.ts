import { AppContextActions } from "../enums/AppContextActions";

export interface IDDispatchAction{
    type: AppContextActions,
    payload?: any,
}