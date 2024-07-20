import React, { useState } from 'react';

const EditToDo = ({ todo, updateToDo, setIsEditing }) => {
    const [title, setTitle] = useState(todo.title);
    const [description, setDescription] = useState(todo.description);
    const [completed, setCompleted] = useState(todo.completed);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateToDo(todo.id, {
            title,
            description,
            completed
        });
        setIsEditing(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <label>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={(e) => setCompleted(e.target.checked)}
                />
                Completed
            </label>
            <button type="submit">Save</button>
        </form>
    );
};

export default EditToDo;
