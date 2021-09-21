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
import Button from '@mui/material/Button';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';

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

const Home: NextPage = () => {

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
    confirmAlert({
      title: 'Tem certeza de que deseja remover este produto?',
      buttons: [
        {
          label: 'Sim',
          onClick: () => alert('Click Yes' + _id)
        },
        {
          label: 'Não',
          onClick: () => close()
        }
      ]
    });
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

                <TableCell width="100" align="right"><Button onClick={() => update(product._id)}
                  variant="contained" size="large">Update</Button></TableCell>
                <TableCell width="100" align="right"><Button onClick={() => remove(product._id)}
                  variant="contained" color="warning"
                  size="large">Delete</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>      
    </>
  )
}

export default Home;
