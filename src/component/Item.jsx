import React from "react";

// Item takes props normally
function Item(props) {
    return (
        <div>
            This is title {props.title} and index is {props.index}
        </div>
    );
}

export default Item;
