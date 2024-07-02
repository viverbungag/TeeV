'use client';

import React from 'react';
import { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from '@/components/shared/Navigation/NavigationToggle/use-dimensions';
import NavigationMenuItemToggle from '@/components/shared/Navigation/NavigationToggle/NavigationMenuItemToggle/NavigationMenuItemToggle';
import NavigationMenuToggle from '@/components/shared/Navigation/NavigationToggle/NavigationMenuToggle/NavigationMenuToggle';
import './NavigationToggle.css';
import { link } from 'fs';

const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 750px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 750px 40px)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const ulVariants = {
  open: {
    display: 'block',
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    display: 'none',
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const backdropVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 750px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
    opacity: 0.7,
  }),
  closed: {
    clipPath: 'circle(30px at 1870px 40px)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
    opacity: 0,
  },
};

const navigationToggleVariants = {
  open: {
    width: '100vw',
    height: '100vh',
  },
  closed: {
    width: '150px',
    height: '200px',
  },
};

const navigationItems = [
  {
    label: 'PRODUCTS',
    link: '/products',
  },
  {
    label: 'SERVICES',
    link: '/',
  },
  {
    label: 'REQUEST A QUOTE',
    link: '/',
  },
  {
    label: 'DESIGN STUDIO',
    link: '/',
  },
  {
    label: 'ABOUT US',
    link: '/',
  },
];

const NavigationToggle = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.div
      className="navigation-toggle"
      variants={navigationToggleVariants}
      animate={isOpen ? 'open' : 'closed'}
    >
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
      >
        <motion.div className="backdrop" variants={backdropVariants} />
        <motion.div className="background" variants={sidebarVariants} />
        <motion.ul
          className="flex relative flex-col gap-4 p-12"
          variants={ulVariants}
        >
          {navigationItems.map((item) => (
            <NavigationMenuItemToggle item={item} key={item.label} />
          ))}
        </motion.ul>
        <NavigationMenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </motion.div>
  );
};

export default NavigationToggle;
