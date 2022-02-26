import React from 'react'
import useFetch from '../hooks/useFetch'

function CustomHook1() {
    const res = useFetch('https://jsonplaceholder.typicode.com/posts', {})
    
    if(res.loading) {
        return <h3>Loading...</h3>
    }
    
    return (
        <div>
            {res.data.map((post) => (
                <h3 key={post.id}>{post.title}</h3>
            ))}
        </div>
    )
}

export default CustomHook1