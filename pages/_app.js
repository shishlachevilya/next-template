import React from 'react';
import App from 'next/app';
import MainLayout from '../src/components/Layouts/MainLayout';
import { AnimatePresence } from 'framer-motion';
import DefaultLayout from '../src/components/Layouts/DefaultLayout';


class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    let Layout = '';

    if (router.route === '/') {
      Layout = MainLayout;
    } else {
      Layout = DefaultLayout;
    }

    return (
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    );
  }
}

export default MyApp;

