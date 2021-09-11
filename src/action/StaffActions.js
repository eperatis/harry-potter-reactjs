import axios from "axios";
import dispatcher from "../dispatcher/Dispatcher";
import * as actionConstants from "../dispatcher/StaffActionConstants";

export const fetchStaff = () => {
    axios.get('/staff').then((resp) => {
        dispatcher.dispatch({
            action: actionConstants.refresh,
            payload: resp.data
        });
    })
}