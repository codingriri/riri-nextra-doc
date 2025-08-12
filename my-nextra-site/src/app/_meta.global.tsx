const appMetadata = {
  index: {
    //By default, all MDX routes in the filesystem will be shown on the sidebar. But you can hide a specific pages or folders
    display: 'hidden',
    title: "Home",
    //to hide the navbar/footer from a specific page
    // theme: {
    //   footer: false,
    // },
  },
  docs: {
    type: "page",
    title: "Documentation",
    items: {
      python: {
        items: {
          index: "What is Python?",
          datatypes: "Data Types",
        },
      },
      // 'about': {
      //   title: 'About Nextra',
      //   href: '/about'
      // },
    },
  },
};
export default appMetadata;
