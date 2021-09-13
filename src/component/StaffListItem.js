import React from "react";

function StaffListItem({ name, actor }) {
    return (
        <tr>
            <td>{name}</td>
            <td>{actor}</td>
        </tr>
    );
}

export default StaffListItem;