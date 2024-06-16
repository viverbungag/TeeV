'use client';

import React from 'react';
import { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from '@/components/shared/Navigation/NavigationToggle/use-dimensions';
import NavigationMenuItemToggle from '@/components/shared/Navigation/NavigationToggle/NavigationMenuItemToggle/NavigationMenuItemToggle';
import NavigationMenuToggle from '@/components/shared/Navigation/NavigationToggle/NavigationMenuToggle/NavigationMenuToggle';
import './NavigationToggle.css';

const sidebar = {
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

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const backdrop = {
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

const navigationItems = [
  {
    label: 'PRODUCTS',
  },
  {
    label: 'SERVICES',
  },
  {
    label: 'REQUEST A QUOTE',
  },
  {
    label: 'DESIGN STUDIO',
  },
  {
    label: 'ABOUT US',
  },
];

const NavigationToggle = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <div className="navigation-toggle">
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
      >
        <motion.div className="backdrop" variants={backdrop} />
        <motion.div className="background" variants={sidebar} />
        <motion.ul className="flex flex-col gap-4 p-12" variants={variants}>
          {navigationItems.map((item) => (
            <NavigationMenuItemToggle item={item} key={item.label} />
          ))}
        </motion.ul>
        <NavigationMenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </div>
  );
};

export default NavigationToggle;
