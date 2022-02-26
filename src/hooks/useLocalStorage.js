import {useState} from 'react'

function useLocalStorage(key, initialValue) {
    const [localStorageValue, setLSV] = useState(() => getLocalStorageValue(key, initialValue))

    const setValue = (value) => {
        // Check if the value to store is a function
        const valueToStore = value instanceof Function ? value(localStorageValue) : value
        
        // Set to the state
        setLSV(value)

        // Set to the local storage
        localStorage.setItem(key, JSON.stringify(valueToStore))
    }

    return [localStorageValue, setValue]
}

function getLocalStorageValue(key, initialValue) {
    const itemFromStorage = localStorage.getItem(key)
    return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue
}

export default useLocalStorage