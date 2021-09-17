import type { NextPage } from 'next';

const products = [
  {
    "_id": '1',
    "name": 'Máscara',
    "price": 0.1,
    "stock": 1000
  },
  {
    "_id": '2',
    "name": 'Vick',
    "price": 30,
    "stock": 100
  },
  {
    "_id": '3',
    "name": 'Dorflex',
    "price": 20,
    "stock": 500
  }
]

const Home: NextPage = () => {
  const m = products.map((product) => {
    <div><p>product.name</p></div>

  })

  return (
    <>
      asdfgh
      {m}
    </>
  )
}

export default Home;
