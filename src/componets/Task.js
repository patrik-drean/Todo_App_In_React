import React from 'react';

const taskWrapperStyle = {
    backgroundColor: "yellow",
    height: "20px",
    width: "30%",
    margin: "0 auto",
    border: "1px orange solid",
}

class Task extends React.Component {

    render() {
        return (
            <div style={taskWrapperStyle}> </div>
        );
    }
}

export default Task;