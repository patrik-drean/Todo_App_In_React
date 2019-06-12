import React from 'react';
import Task from './Task';

class TaskList extends React.Component {
 
    render() {
        return (
            this.props.tasks.map(task => <Task key={task.id} {...task} />)
        );
    }
}

export default TaskList;