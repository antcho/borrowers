module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'ember-101-antcho',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
