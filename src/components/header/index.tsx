import { useState, KeyboardEvent } from "react";

interface HeaderPrototype {
    addNewTodo: (name: string) => void
}

const Header = (props: HeaderPrototype) => {
    const [task, setTask] = useState('')

    const keyUpHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        if (e.key !== "Enter") return
        if (!value) return alert("Task can't be empty")
        props.addNewTodo(value)
    }

    return <div className="todo-header">
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} onKeyUp={keyUpHandler} placeholder="Enter task name" />
    </div>
}

export default Header;