import React from 'react';
import '../styles/App.css';
import TaskList from './TaskList';

const appStyle = {
    margin: "20px",
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                {taskId: 0, description: "Clean the car"},
                {taskId: 1, description: "Go shopping"},
                {taskId: 2, description: "Deliver a baby"},
            ],
        }
    }

    render() {
        return (
            <div className="App" style={appStyle}>
                <TaskList tasks={this.state.tasks} />
            </div>
        );
    }
}

export default App;
