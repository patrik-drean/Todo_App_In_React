import React from 'react';
import '../styles/App.css';
import TaskList from './TaskList';
import Form from './Form';

const appStyle = {
    margin: "20px",
}

class App extends React.Component {

    render() {
        return (
            <div 
                className="App" 
                style={appStyle}
            >
                <TaskList />
                <Form />
            </div>
        );
    }
}

export default App;
