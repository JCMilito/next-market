import { useState } from 'react';
import type { NextPage } from 'next';
import Router from 'next/router';
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
      customUI: ({ onClose }) => {
        return (
          <div>
            <p>Tem certeza de que deseja remover este produto?</p>
            <div className="modalButtons">
              <Button onClick={() => {
                onClose();
              }} variant="contained">Sim</Button>
              <Button onClick={onClose} variant="contained" color="warning">Não</Button>
            </div>
          </div>
        );
      }
    });
  }

  return (
    <>
      <Button onClick={() => register()} variant="contained">Novo Produto</Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="right">Preço</TableCell>
              <TableCell align="right">Estoque</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product._id}>
                <TableCell component="th" scope="row">
                  {product.name}
                </TableCell>
                <TableCell align="right">R${product.price.toFixed(2).replace('.', ',')}</TableCell>
                <TableCell align="right">{product.stock}</TableCell>

                <TableCell width="100" align="right"><Button onClick={() => update(product._id)}
                  variant="contained">Atualizar</Button></TableCell>
                <TableCell width="100" align="right"><Button onClick={() => remove(product._id)}
                  variant="contained" color="warning">Remover</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default Home;
