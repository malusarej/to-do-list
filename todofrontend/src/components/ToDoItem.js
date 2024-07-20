import React, { useState } from 'react';
import EditToDo from './EditToDo';

const ToDoItem = ({ todo, updateToDo, deleteToDo }) => {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <tr>
            <td>{todo.title}</td>
            <td>{todo.description}</td>
            <td>{todo.completed ? 'Yes' : 'No'}</td>
            <td>
                <button onClick={() => setIsEditing(true)}>Edit</button>
                <button onClick={() => deleteToDo(todo.id)}>Delete</button>
                {isEditing && (
                    <EditToDo todo={todo} updateToDo={updateToDo} setIsEditing={setIsEditing} />
                )}
            </td>
        </tr>
    );
};

export default ToDoItem;
