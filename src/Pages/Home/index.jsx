import { useEffect, useState } from 'react'
import { Card } from '../../Components/Card'

export function Home () {
  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then(data => {
        const newArray = data.slice(20)
        setItems(newArray)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <h1 className='text-3xl text-center p-4 font-bold underline'>
        Home
      </h1>
      <div className='mx-auto grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {items?.map(item => (<Card key={item.id} data={item} />))}
      </div>
    </>
  )
}
