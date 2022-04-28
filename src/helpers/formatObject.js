module.exports = (input, attributes) => {
 const output = {};

  for (let att of attributes) {
    output[att] = input[att];
  }

  return output;
};
