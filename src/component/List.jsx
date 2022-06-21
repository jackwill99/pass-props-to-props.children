import React from "react";

function List(props) {
    const a = [1, 2, 3, 4, 5];
    const b = ["one", "two", "three", "four", "five"];
    return (
        <div>
            <h1>Looping start</h1>
            {a.map((i) => {
                // give props to children like that
                return props.children({ title: `${b[i - 1]} ${i}`, index: i });
            })}
        </div>
    );
}

export default List;
