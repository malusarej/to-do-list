import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ToDoItem from './ToDoItem';
import AddToDo from './AddToDo';

const ToDoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const response = await axios.get('http://ec2-52-35-9-38.us-west-2.compute.amazonaws.com/api/todos/');
        setTodos(response.data);
    };

    const addToDo = async (todo) => {
        const response = await axios.post('http://ec2-52-35-9-38.us-west-2.compute.amazonaws.com/api/todos/', todo);
        setTodos([...todos, response.data]);
    };

    const updateToDo = async (id, updatedTodo) => {
        const response = await axios.put(`http://ec2-52-35-9-38.us-west-2.compute.amazonaws.com/api/todos/${id}/`, updatedTodo);
        setTodos(todos.map(todo => (todo.id === id ? response.data : todo)));
    };

    const deleteToDo = async (id) => {
        await axios.delete(`http://ec2-52-35-9-38.us-west-2.compute.amazonaws.com/api/todos/${id}/`);
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <AddToDo addToDo={addToDo} />
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Completed</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        <ToDoItem key={todo.id} todo={todo} updateToDo={updateToDo} deleteToDo={deleteToDo} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ToDoList;
