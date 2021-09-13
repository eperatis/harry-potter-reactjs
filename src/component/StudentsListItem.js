import React from "react";

function StudentsListItem({ name, actor }) {
    return (
        <tr>
            <td>{name}</td>
            <td>{actor}</td>
        </tr>
    );
}

export default StudentsListItem;