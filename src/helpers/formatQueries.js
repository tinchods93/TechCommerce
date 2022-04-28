module.exports = (queryModel, queries) => {
  let where = {};
  //Tomamos las keys
  const inputQueries = Object.keys(queries);
  const availableQueries = Object.keys(queryModel);

  //Si algunos de los queries ingresados existen, entonces recorremos los queries entrantes, y los mapeamos
  if (queries && availableQueries.some((a) => inputQueries.includes(a))) {
    for (let query of inputQueries) {
      if (queryModel[query]) {
        let { field } = queryModel[query];
        where[field] = queries[query];
      }
    }
  }

  return where;
};
