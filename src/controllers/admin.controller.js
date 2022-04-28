const path = require('path');

const data = {
  products: () => {},
  categories: () => {},
};

module.exports = {
  default: (req, res) => {
    res.send('XXXX');
  },
  products: {
    add: (req, res) => {
      res.send('XXXX');
    },
    store: (req, res) => {
      res.send('XXXX');
    },
    edit: (req, res) => {
      res.send('XXXX');
    },
    update: (req, res) => {
      res.send('XXXX');
    },
    remove: (req, res) => {
      res.send('XXXX');
    },
  },
  categories: {
    add: (req, res) => {
      res.send('XXXX');
    },
    store: (req, res) => {
      res.send('XXXX');
    },
    edit: (req, res) => {
      res.send('XXXX');
    },
    update: (req, res) => {
      res.send('XXXX');
    },
    remove: (req, res) => {
      res.send('XXXX');
    },
  },
};
