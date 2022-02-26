import React, {useState, useCallback} from 'react'

function UseCallback() {
    const [tasks, setTasks] = useState([])

    const addTask = useCallback(() => {
        setTasks((prevState) => [...prevState, 'Some Tasks'])
    }, [setTasks])

    return (
        <div>
            <Button addTask={addTask} />
            {tasks.map((task, index) => (
                <p key={index}>{task}</p>    
            ))}
        </div>
    )
}

const Button = React.memo(({addTask}) => {
    console.log('Button Rendered')
    return <div>
        <button className='btn btn-secondary' onClick={addTask}>Add Task</button>
    </div>
})

export default UseCallback