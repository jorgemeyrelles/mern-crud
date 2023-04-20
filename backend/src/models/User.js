import db from "../config/db.js";

const findOne = (nome, password) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM usuario WHERE `username` = ? AND `password` = ?";

    db.execute(query, [nome, password])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

const createOne = (nome, password) => {
  return new Promise((resolve, reject) => {
    const query = "INSERT INTO usuario (username, password) VALUES (?, ?)";

    db.execute(query, [nome, password])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export { findOne, createOne };
