import React from "react";
import { TodoIcons } from './'; 

function DeleteIcon({onDelete}) {
    return (
        <TodoIcons
            type="delete"
            color="gray"
            onClick={onDelete}
        />
    )
}

export {DeleteIcon}