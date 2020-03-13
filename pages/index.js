import React from 'react';
import { fadeInUp, pageTransition } from '../src/animations';
import { motion } from 'framer-motion';

const Homepage = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={ fadeInUp }
      transition={ pageTransition }
    >
      <h1>Homepage</h1>

      <p>Lorem ipsum dolor sit amet.</p>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur atque dignissimos
        fugiat ipsum itaque
        laborum officia optio quidem voluptates.</p>

      <p className='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequatur culpa debitis
        dolores labore
        laboriosam nihil pariatur. Accusantium alias aspernatur cupiditate delectus dignissimos dolorem doloribus
        eligendi eum facere fugit, mollitia nostrum nulla odit, officiis qui quidem tempora totam unde ut veritatis
        vero
        vitae voluptatum. Animi aperiam blanditiis, debitis distinctio dolores ducimus ea ex fugiat fugit laboriosam,
        laborum molestiae natus nobis obcaecati officia officiis omnis porro provident quas quisquam, repellendus
        soluta
        tenetur. Atque ipsam laborum nisi, quae quisquam quos repudiandae vel. Eos ex iure, laboriosam laudantium
        neque
        nobis omnis praesentium rem sapiente sint. Beatae blanditiis cupiditate excepturi nemo nihil quo voluptas?</p>
    </motion.div>
  );
};

export default Homepage;
