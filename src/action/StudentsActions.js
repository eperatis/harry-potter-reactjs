import axios from "axios";
import dispatcer from "../dispatcher/Dispatcher";
import * as actionConstants from "../dispatcher/StudentsActionConstants";

export const fetchStudents = () => {
    axios.get('/students').then((resp) => {
        dispatcer.dispatch({
            action: actionConstants.refresh,
            payload: resp.data
        });
    })
}