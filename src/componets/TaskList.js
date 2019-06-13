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
                return task.id !== idToDelete;
            });

            this.setState({tasks: updatedTasks});
        }

        let addTask = (taskDescription) => {
            let tasks = this.state.tasks;
            let newTask = {id: tasks.length, description: taskDescription};
            this.setState({tasks: tasks.append(newTask)});
        }

        // let editTask = (idToEdit) => {
        //     let updatedTasks = this.state.tasks.filter(function (task) {
        //         if (task.id !== idToEdit) {
                    
        //         }
        //     });

        //     this.setState({tasks: updatedTasks});
        // }
        

        let taskComponentList = this.state.tasks.map(task => 
                <Task 
                    {...task} 
                    key={task.id} 
                    deleteTask={deleteTask}
                    addTask={addTask}
                />
            );

        return (
            taskComponentList
        );
    }
}

export default TaskList;