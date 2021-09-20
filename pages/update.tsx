import type { NextPage } from 'next';
import { useRouter } from "next/router";

const Update: NextPage = () => {
  const router = useRouter();

  return (
    <>
      {router.query._id}
    </>
  )
}

export default Update;
