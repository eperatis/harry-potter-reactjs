import React from "react";

function StudentsListItem({ name, actor }) {
    return (
        <span>
            {name} {actor}
        </span>
    );
}

export default StudentsListItem;