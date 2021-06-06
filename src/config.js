module.exports = {
  email: 'mail@anir0y.in',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/anir0y',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/anir0yofficial',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/anir0y',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/anir0y',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/anir0y',
    },
  ],

  navLinks: [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'Courses',
      url: '/class',
    },
    {
      name: 'Notes',
      url: 'https://classroom.anir0y.in',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
