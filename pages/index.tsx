import { useEffect, useState } from 'react';
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

import ProductController from '../controllers/ProductController';
import { Product }  from '../controllers/ProductController';

const Home: NextPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    async function fetchProducts() {
      const products = await ProductController.list();
      setProducts(products.sort((a: Product, b: Product) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1));
    }    
    fetchProducts();
  }, [products]);
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

  const remove = (_id: string, index: number) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="modal">
            <p>Tem certeza de que deseja remover este produto?</p>
            <div className="confirmButtons">
              <Button onClick={() => {
                ProductController.remove(_id);
                onClose();
              }} variant="contained" className="marginButton">Confirmar</Button>
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
                <TableCell width="100"><Button onClick={() => update(product._id!)}
                  variant="contained">Atualizar</Button></TableCell>
                <TableCell width="100"><Button onClick={() => remove(product._id!, index)}
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
