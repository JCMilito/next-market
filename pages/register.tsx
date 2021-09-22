import React, { useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Register: NextPage = () => {
  const [title, setTitle] = useState("");
  const router = useRouter();


  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.back();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />


      <input type="submit" value="Submit" />
    </form>
  )
}

export default Register;
