import Head from 'next/head';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Head>
        <title>Приложение продукты</title>
        <meta name="description" content="Manage your products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* <Link href="/products"> */}
            <h1 className="text-xl font-bold cursor-pointer">Приложение список продуктов</h1>
          {/* </Link> */}
          <div className="flex space-x-4">
            <Link href="/products">
              <button className="px-3 py-1 rounded hover:bg-blue-700">Список продуктов</button>
            </Link>
            <Link href="/create-product">
              <button className="px-3 py-1 rounded hover:bg-blue-700">Создать продукт</button>
            </Link>
          </div>
        </div>
      </nav>

      <main>{children}</main>

      <footer className="bg-gray-100 p-4 mt-8">
        <div className="container mx-auto text-center text-gray-600">
          <p>© {new Date().getFullYear()} Приложение продукты. ООО лечебное питание.</p>
        </div>
      </footer>
    </>
  );
};

// export default RootLayout;