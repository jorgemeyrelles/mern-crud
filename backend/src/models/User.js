import db from "../config/db.js";

const findOne = (nome, password) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM usuario WHERE `username` = ? AND `password` = ?";

    db.execute(query, [nome, password])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

const findOneByName = (nome) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM usuario WHERE `username` = ?";

    db.execute(query, [nome])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

const getAllUsersModel = () => {
  const res = new Promise((resolve, reject) => {
    const query = "SELECT * FROM usuario";

    db.execute(query)
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
  return res;
};

const createOne = (nome, password) => {
  return new Promise((resolve, reject) => {
    const query = "INSERT INTO usuario (username, password) VALUES (?, ?)";

    db.execute(query, [nome, password])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export { findOne, createOne, findOneByName, getAllUsersModel };
