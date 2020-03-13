import React from 'react';
import { fadeInUp, pageTransition } from '../src/animations';
import { motion } from 'framer-motion';

const aboutContainer = {
  textAlign: 'center',
  maxWidth: '700px',
  margin: '0 auto'
};

const About = () => {
  return (

    <motion.div
      style={aboutContainer}
      initial="out"
      animate="in"
      exit="out"
      variants={ fadeInUp }
      transition={ pageTransition }
    >
      <h1>About Us</h1>

      <p className='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet consectetur doloremque,
        dolorum eaque ex
        facilis ipsa magnam maiores nam necessitatibus recusandae, sunt vero! Aperiam beatae dolore dolores ducimus
        eos,
        fugit minima nostrum possimus quis quo, sint temporibus totam vitae.</p>

      <p className='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquid blanditiis cum
        dicta dignissimos
        doloremque, dolores ea eligendi error, illo impedit ipsa magnam maiores maxime quaerat quia repellendus sequi
        sunt voluptas? Aliquid aut, eos et eveniet explicabo officia quos sequi velit. Ad, consequuntur ea eaque enim,
        exercitationem facere hic iusto libero minima mollitia nisi nobis quam tempore unde voluptates. Adipisci
        architecto aspernatur blanditiis consectetur distinctio, dolorem ducimus eaque eius et harum illo illum
        impedit
        ipsam ipsum maxime molestias necessitatibus nihil nisi nulla numquam obcaecati odio odit officiis quaerat
        quibusdam sit, sunt suscipit vel voluptate voluptatem? Accusamus error facere possimus.</p>

      <p className='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, autem consequatur corporis
        doloribus enim iure
        numquam omnis repudiandae velit? Ab inventore ipsam maxime molestiae nisi quaerat rem similique vel,
        voluptatem.</p>
    </motion.div>
  );
};

export default About;
