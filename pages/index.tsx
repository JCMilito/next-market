import { useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
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

import ProductController from '../controllers/ProductController'

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
  const router = useRouter();

  const register = () => {
    router.push('register');
  }

  const update = (_id: string) => {
    router.push({
      pathname: '/update',
      query: { _id: _id }
    })
  }

  const remove = (_id: string) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="modal">
            <p>Tem certeza de que deseja remover este produto?</p>
            <div className="modalButtons">
              <Button onClick={() => {
                onClose();
              }} variant="contained" className="modalButton">Confirmar</Button>
              <Button onClick={onClose} variant="contained" color="warning">Cancelar</Button>
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
              <TableCell><b>Nome</b></TableCell>
              <TableCell><b>Preço</b></TableCell>
              <TableCell><b>Estoque</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, index) => (
              <TableRow key={index}>
                <TableCell>{product.name}</TableCell>
                <TableCell width="200">R${product.price.toFixed(2).replace('.', ',')}</TableCell>
                <TableCell width="100">{product.stock}</TableCell>
                <TableCell width="100"><Button onClick={() => update(product._id)}
                  variant="contained">Atualizar</Button></TableCell>
                <TableCell width="100"><Button onClick={() => remove(product._id)}
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
