import React from "react";
import { default as store } from '../store/StaffStore';
import StaffListItem from './StaffListItem';
import * as actions from '../action/StaffActions';
import { Table } from 'react-bootstrap';

class StaffList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { staff: [] };
        this._updateState = this._updateState.bind(this);
    }

    componentDidMount() {
        actions.fetchStaff();
        store.addChangeListener(this._updateState);
    }

    componentWillUnmount() {
        store.removeChangeListener(this._updateState);
    }

    _updateState() {
        this.setState({ staff: store._staff });
    }
    render() {
        return (
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Character</th>
                        <th>Actor</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.staff.map(({ name, actor }, index) => {
                        return (
                            <StaffListItem key={index} name={name} actor={actor} />
                        );
                    })}
                </tbody>
            </Table>
        );
    }
}

export default StaffList;