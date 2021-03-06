import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { LoginProvider } from "../context/loginContext";
import "../styles/buttons.css";
import "../styles/colors.css";
import "../styles/fonts.css";
import "../styles/globals.css";
import "../styles/inputs.css";
import "../styles/texts.css";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <LoginProvider> 
        <Head>
          <title>Next Challenge</title>
          <meta
            name="description"
            content="Challenge to Next Js generated by create next app"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </LoginProvider> 
    </QueryClientProvider>
  );
}

export default MyApp;
