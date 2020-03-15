import React from 'react';
import App from 'next/app';
import MainLayout from '../src/components/Layouts/MainLayout';
import { AnimatePresence } from 'framer-motion';

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    let title = '';

    switch (router.route) {
      case '/':
        title = 'Main page';
        break;
      case '/about':
        title = 'About page';
        break;
      case '/contacts':
        title = 'Contacts page';
        break;
      default:
        title = 'Main page';
    }

    return (
      <MainLayout title={title}>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </MainLayout>
    );
  }
}

export default MyApp;

