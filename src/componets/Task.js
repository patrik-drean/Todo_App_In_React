import React from 'react';

const taskWrapperStyle = {
    backgroundColor: "#ffffce",
    height: "60px",
    width: "40%",
    margin: "10px auto",
    border: "4px solid #fcfcb0",
    fontFamily: "Georgia",
    fontSize: "15pt",
}

class Task extends React.Component {

    render() {
        return (
            <div style={taskWrapperStyle}>
                <p>Task {this.props.taskId}: {this.props.description}</p>
            </div>
        );
    }
}

export default Task;