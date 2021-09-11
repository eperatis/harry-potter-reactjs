import React from "react";

function StaffListItem({ name, actor }) {
    return (
        <span>
            {name} {actor}
        </span>
    );
}

export default StaffListItem;