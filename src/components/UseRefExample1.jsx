import React, {useRef} from 'react'

function UseRefExample1() {
    const inputRef = useRef()
    const paraRef = useRef()
    // inputRef is the object of whatever DOM element it references. 
    // inputRef.current gives you the DOM element itself
    // inputRef.current.value gives you the value that DOM element holds
    // Every vanilla JS property that you could use can be used to manipulated
    // CHANGING A REFERENCE VALUE DOES NOT RERENDER THE COMPONENT
    
    const onSubmit = e => {
        e.preventDefault()
        console.log(inputRef.current.value)
        inputRef.current.value = 'Hello'
        inputRef.current.style.backgroundColor = 'red'
        paraRef.current.innerText = 'Goodbye'
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor='name'>Name</label>
                <input ref={inputRef} type='text' id='name' className='form-control mb-2' />
                <button type="submit" className='btn btn-primary'>Submit</button>
            </form>
            <p onClick={() => inputRef.current.focus()} ref={paraRef}>Hello</p>
        </div>
    )
}

export default UseRefExample1