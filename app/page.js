'use client'

function Card({ children }) {
  return (
    <div className="border rounded-md border-gray-600 p-4">
      {children}
    </div>
  )
}

export default function Home() {
  const name = "Singh";
  const handleClick = () => alert('Hello!')
  const handleDoubleClick = (e) => {
    console.log(e);
    alert('Hello!')
  }

  return (
    <>
      <div className="p-20 space-y-4">
        <div>Hello, {name}</div>
        <Card>This is being passed from the parent</Card>
        <Card>
          <div>This is JS!</div>
          <Card>Nested text!</Card>
        </Card>
        <Card />
        <Card />
        <Card />

        <div className="flex flex-col gap-4 items-start">
          <button onClick={ handleClick }>Click me!</button>
          <button onClick={ handleDoubleClick }>Double Click me!</button>
        </div>
      </div>
    </>
  );
}
