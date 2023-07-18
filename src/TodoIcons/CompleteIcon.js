import React from "react";
import { TodoIcons } from './';

function CompleteIcon({completed, onComplete}) {
    return (
        <TodoIcons
            type="check"
            color={completed ? 'green' : 'gray'}
            onClick={onComplete}
        />
    )
}

export {CompleteIcon}