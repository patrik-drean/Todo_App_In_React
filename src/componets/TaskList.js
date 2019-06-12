import React from 'react';
import Task from './Task';

class TaskList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            tasks: [
                {id: 0, description: "Clean the car"},
                {id: 1, description: "Go shopping"},
                {id: 2, description: "Deliver a baby"},
            ],
        }
    }

    render() {
        let deleteTask = (idToDelete) => {
            let updatedTasks = this.state.tasks.filter(function (task) {
                console.log(task.id, idToDelete);
                return task.id !== idToDelete;
            })

            this.setState({tasks: updatedTasks});
            console.log(updatedTasks);
        }

        let taskComponentList = this.state.tasks.map(task => 
                <Task 
                    {...task} 
                    key={task.id} 
                    deleteTask={deleteTask}
                />
            );

        return (
            taskComponentList
        );
    }
}

export default TaskList;