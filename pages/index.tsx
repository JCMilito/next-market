import { useState } from 'react';
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
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ProductController from '../controllers/ProductController';

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

const style: any = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Home: NextPage = () => {
  const [open, setOpen] = useState(false);
  const [_idProduct, set_IdProduct] = useState('');

  const register = () => {
    Router.push('register');
  }

  const update = (_id: string) => {
    Router.push({
      pathname: '/update',
      query: { _id: _id }
    })
  }

  const remove = (_id: string) => {
    set_IdProduct(_id);
    setOpen(true);
  }

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>
      <Button onClick={(e) => register()} variant="contained" size="large">Novo Produto</Button>
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
                <TableCell align="right">R${product.price.toFixed(2).replace('.', ',')}</TableCell>
                <TableCell align="right">{product.stock}</TableCell>

                <TableCell width="100" align="right"><Button onClick={(e) => update(product._id)}
                  variant="contained" size="large">Update</Button></TableCell>
                <TableCell width="100" align="right"><Button onClick={(e) => remove(product._id)}
                  variant="contained" color="warning"
                  size="large">Delete</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2>Tem certeza de que quer remover este produto?</h2>
          <div className="right">
            <Button onClick={(e) => ProductController.remove(_idProduct)}
              variant="contained" size="large">Confirm</Button>
            <Button onClick={(e) => setOpen(false)}
              variant="contained" size="large" color="warning">Cancel</Button>
          </div>
        </Box>
      </Modal>
    </>
  )
}

export default Home;
