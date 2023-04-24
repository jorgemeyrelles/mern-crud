import { findOne, createOne, findOneByName } from "../models/User.js";

const getOneUser = (nome, password) => {
  const fromTable = findOne(nome, password)
    .then((response) => response)
    .catch((error) => error)

  return fromTable;
}

const getCheckUser = (nome) => {
  const fromTable = findOneByName(nome)
    .then((response) => response)
    .catch((error) => error)

  return fromTable;
}

const postOneUser = (nome, password) => {
  const toTable = createOne(nome, password)
    .then((response) => response)
    .catch((error) => error)

  return toTable;
}

export { getOneUser, postOneUser, getCheckUser };
