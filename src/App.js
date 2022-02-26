import React from 'react'

import UseRefExample1 from './components/UseRefExample1'
import UseRef2 from './components/UseRef2'
import UseRef3 from './components/UseRef3'
import UseMemo from './components/UseMemo'
import UseCallback from './components/UseCallback'

function App() {
  return (
    <div className="container mt-5">
      <UseRefExample1 />
      <UseRef2 />
      <UseRef3 />
      <UseMemo />
      <UseCallback />
    </div>
  )
}

export default App
