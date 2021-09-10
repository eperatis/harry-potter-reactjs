import React from "react";
import { default as store } from '../store/StudentsStore';
import StudentsListItem from "./StudentsListItem";
import * as actions from '../action/StudentsActions';

class StudentsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { students: [] };
        this._updateState = this._updateState.bind(this);
    }

    componentDidMount() {
        actions.fetchStudents();
        store.addChangeListener(this._updateState);
    }

    componentWillUnmount() {
        store.removeChangeListener(this._updateState);
    }

    _updateState() {
        this.setState({ students: store._students });
    }

    render() {
        return (
            <div>
                {this.state.students.map(({ name, actor }, index) => {
                    return (
                        <StudentsListItem key={index} name={name} actor={actor} />
                    );
                })}
            </div>
        );
    }
}

export default StudentsList;