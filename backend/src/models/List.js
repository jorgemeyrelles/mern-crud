import db from "../config/db.js";

const findOneList = (id) => {
  return new Promise((resolve, reject) => {
    const columns = "p.id, p.nome, p.cpf, c.tipo, c.descricao";
    const innerJoin = "INNER JOIN contato AS c ON p.id = c.idPessoa";
    const query = `SELECT ${columns} FROM pessoa AS p ${innerJoin} WHERE p.id = ?`;

    db.execute(query, [id])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

const findOneByName = (nome) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM pessoa WHERE nome = ?";

    db.execute(query, [nome])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

const findAll = () => {
  return new Promise((resolve, reject) => {
    const columns = "p.id, p.nome, p.cpf, c.tipo, c.descricao";
    const innerJoin = "INNER JOIN contato AS c ON p.id = c.idPessoa";
    const query = `SELECT ${columns} FROM pessoa AS p ${innerJoin}`;

    db.execute(query)
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

const insertOnePerson = (nome, cpf) => {
  return new Promise((resolve, reject) => {
    const query = "INSERT INTO pessoa (nome, cpf) VALUES (?, ?)";

    db.execute(query, [nome, cpf])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

const insertOneContact = (tipo, descricao, idPessoa) => {
  return new Promise((resolve, reject) => {
    const queryContato = "INSERT INTO contato (tipo, descricao, idPessoa) VALUES (?, ?, ?)";

    db.execute(queryContato, [tipo, descricao, idPessoa])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

const updatePerson = (nome, pessoa, id) => {
  return new Promise((resolve, reject) => {
    const query = "UPDATE pessoa SET nome = ?, cpf = ? WHERE id = ?";

    db.execute(query, [nome, pessoa, id])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

const updateContact = (tipo, descricao, idContact) => {
  return new Promise((resolve, reject) => {
    const queryContato = "UPDATE contato SET tipo = ?, descricao = ? WHERE id = ?";

    db.execute(queryContato, [tipo, descricao, idContact])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

const deleteOnePerson = (id) => {
  return new Promise((resolve, reject) => {
    const query = "DELETE FROM pessoa WHERE id = ?";

    db.execute(query, [id])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

const deleteAllContacts = (id) => {
  return new Promise((resolve, reject) => {
    const queryContato = "DELETE FROM contato WHERE idPessoa = ?";

    db.execute(queryContato, [id])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

const deleteOneContact = (id) => {
  return new Promise((resolve, reject) => {
    const queryContato = "DELETE FROM contato WHERE id = ?";

    db.execute(queryContato, [id])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export {
  findOneList,
  findAll,
  insertOnePerson,
  insertOneContact,
  updateContact,
  updatePerson,
  deleteAllContacts,
  deleteOnePerson,
  deleteOneContact,
  findOneByName,
};
