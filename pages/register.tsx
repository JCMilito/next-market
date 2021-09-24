import React, { useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from 'yup';
  
import Input from '../components/Input';
import ProductController from '../controllers/ProductController';

const Register: NextPage = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const router = useRouter();

  const schema = yup.object().shape({
    name: yup.string().required("Por favor, digite o nome"),
    price: yup.number().typeError("Preço inválido").positive("Preço inválido"),
    stock: yup.number().typeError("Estoque inválido").positive("Estoque inválido").integer("Estoque inválido")    
  });

  const handleSubmit = () => {  
    const product = { name, price: price.replace(',', '.'), stock };
    schema.validate(product).then(async () => {
      await ProductController.create({name, price: parseFloat(price.replace(',', '.')), stock:parseInt(stock)});
      toast.success("Produto cadastrado");
      setName('');
      setPrice('');
      setStock('');
    }).catch((error) => {
      toast.error(error.message);
    });    
  }

  const validateProduct = () => {
    
  }
 
  return (
    <>
      <div>
        <Input placeholder=" Nome" value={name} set={setName} />
      </div>
      <div>
        <Input placeholder=" Preço" value={price} set={setPrice} />
      </div>
      <div>
        <Input placeholder=" Estoque" value={stock} set={setStock} />
      </div>

      <div>
        <Button onClick={handleSubmit} variant="contained" className="marginButton">Cadastrar</Button>
        <Button onClick={() => router.back()} variant="contained" color="warning">Voltar</Button>
      </div>
      <ToastContainer hideProgressBar={true} />
    </>
  )
}

export default Register;
