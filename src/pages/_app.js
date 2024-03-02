import "@/styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import client from "@/lib/apolloClient";
import { ApolloProvider } from "@apollo/client";

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
    )
}
