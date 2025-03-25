// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import FormVigenere from './components/FormVigenere';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="grid grid-rows-1 grid-cols-1 md:grid-rows-1 md:grid-cols-3 gap-0 md:gap-8">
        <div className="mb-6">
          <h1 className="text-xs mb-8"><strong>READ</strong> or <strong>HIDE</strong> your messages</h1>
          <FormVigenere /> 
        </div>
        <div className="col-span-2">
          Result
        </div>
      </div>
    </>
  )
}

export default App
