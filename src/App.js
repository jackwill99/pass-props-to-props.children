import logo from "./logo.svg";
import "./App.css";
import List from "./component/List";
import Item from "./component/Item";

function App() {
    return (
        <div className="App">
            {/* List is function composition */}
            <List>
                {/* takes props from List component and return give to the Item props */}
                {({ title, index }) => <Item title={title} index={index} />}
            </List>
        </div>
    );
}

export default App;
