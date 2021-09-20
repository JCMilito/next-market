import type { NextPage } from 'next';
import Router from 'next/router';
import Head from 'next/head';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

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

const update = (_id: string) => {
  Router.push({
    pathname: '/update',
    query: { _id: _id },
}) 
}

const register = () => {
  Router.push('register');
}

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>
      <Button onClick={(e) => register()} variant="contained">Novo Produto</Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Stock</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product._id}
                
              >
                <TableCell component="th" scope="row">
                  {product.name}
                </TableCell>
                <TableCell align="right">{product.price}</TableCell>
                <TableCell align="right">{product.stock}</TableCell>
                
                <TableCell width="10" align="right"><Button onClick={(e) => update(product._id)} variant="contained">Update</Button></TableCell>
                <TableCell width="10" align="right"><Button variant="contained" color="warning">Delete</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default Home;
