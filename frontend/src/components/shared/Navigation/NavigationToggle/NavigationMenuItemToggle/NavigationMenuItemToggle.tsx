import React from 'react';
import { motion } from 'framer-motion';
import IntegralCF from '@/utilities/fonts/integralCF/integralCF';
import Link from 'next/link';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      duration: 0.05,
    },
  },
};

const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'];

const NavigationMenuItemToggle = ({ item }: { item: any }) => {
  // const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={item.link}>
        <p className={`${IntegralCF.className} sm:text-4xl text-xl`}>
          {item.label}
        </p>
      </Link>
    </motion.li>
  );
};

export default NavigationMenuItemToggle;
