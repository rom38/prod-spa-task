'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const Home= () => {
  const { push } = useRouter();

  useEffect(() => {
     push('/products');
  }, []);
  return <p></p>;
};