import { Mulish } from 'next/font/google';
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-toastify/dist/ReactToastify.css";
import './globals.css';

//providers
// import { ApolloProvider } from '@apollo/client';
import ReduxProvider from '@/context/ReduxProvider';

// provider props
// import client from '@/lib/apolloClient';

//components
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ToastContainer } from 'react-toastify';

const mulish = Mulish({ subsets: ['latin'] });

export const metadata = {
  title: 'Sphene Qwizines | Experiencing the true culinary experience of Nigerian Foods',
  description: 'Food is our heritage, it the underlying culture that keeps us together. Sphene Qwizines is here to elevate the way you experience nigerian foods',
  keywords: ["Online Restaurant", "Nigerian Cuisines", "Food Ordering"],
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${mulish.className}`}>
        {/* <ApolloProvider client={client}> */}
        <ReduxProvider>
          <Header/>
          <main>
            <ToastContainer/>
            {children}
          </main>
          <Footer/>
        </ReduxProvider>
        {/* </ApolloProvider> */}
      </body>
    </html>
  )
}