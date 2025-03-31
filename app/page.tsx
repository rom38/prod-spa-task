'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

function Page() {
  const router = useRouter();
  // router.push('/products/');
  useEffect(() => {
    router.push('/products/');
  }, []);
  return (<p></p>);
};
export default Page