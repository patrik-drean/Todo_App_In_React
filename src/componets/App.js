import React from 'react';
import '../styles/App.css';
import Task from './Task';

const appStyle = {
    margin: "20px",
}

class App extends React.Component {

    render() {
        return (
            <div className="App" style={appStyle}>
                <Task />
                <Task />
                <Task />
            </div>
        );
    }
}

export default App;
