'use client'

import { useState } from 'react'

function Card({ children }) {
  return (
    <div className="border rounded-md border-gray-600 p-4">
      {children}
    </div>
  )
}

export default function Home() {
  const [ isVisible, setIsVisible ] = useState(true)
  const name = "Singh";

  const handleClick = (e) => {
    setIsVisible(!isVisible)
  }

  return (
    <>
      <div className="p-20 space-y-4">
        <div>Hello, {name}</div>
        
        {isVisible && <><Card>This is being passed from the parent</Card>
        <Card>
          <div>This is JS!</div>
          <Card>Nested text!</Card>
        </Card>
        <Card />
        <Card />
        <Card /></>}

        <button onClick={ handleClick }>
          {isVisible ? 'Hide' : 'Show'}
        </button>
      </div>
    </>
  );
}
