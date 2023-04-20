import {
  deleteContact,
  deletePerson,
  getAllList,
  getOneList,
  postOneContact,
  postOnePerson,
  updateOneContact,
  updateOnePerson,
} from "../services/listService.js";

const getOne = (req, res) => {
  const { id } = req.body;
  getOneList(id)
    .then((result) => {
      return res.status(200).send({ msg: "It was inserted one successfully", data: result });
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
};

const getAll = (req, res) => {
  getAllList()
    .then((result) => {
      return res.status(200).send({ msg: "It has grabbed successfully", data: result });
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
};

const postOneToList = (req, res) => {
  const data = req.body;
  postOnePerson(data)
    .then((result) => {
      return res.status(200).send({ msg: "It was created one successfully", data: result });
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
};

const postOneToContact = (req, res) => {
  const { tipo, descricao, idPessoa } = req.body;
  postOneContact(tipo, descricao, idPessoa)
    .then((result) => {
      return res.status(200).send({ msg: "It was created one successfully", data: result });
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
};

const deleteOnePerson = (req, res) => {
  const { id } = req.body;
  deletePerson(id)
    .then((result) => {
      return res.status(200).send({ msg: "It was deleted one successfully", data: result });
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
};

const deleteOneContact = (req, res) => {
  const { id } = req.body;
  deleteContact(id)
    .then((result) => {
      return res.status(200).send({ msg: "It was deleted one successfully", data: result });
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
};

const editOnePerson = (req, res) => {
  const { nome, cpf, id} = req.body;
  updateOnePerson(nome, cpf, id)
    .then((result) => {
      return res.status(200).send({ msg: "It was edited one successfully", data: result });
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
};

const editOneContact = (req, res) => {
  const { tipo, descricao, id } = req.body;
  updateOneContact(tipo, descricao, id)
    .then((result) => {
      return res.status(200).send({ msg: "It was edited one successfully", data: result });
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
};

export {
  deleteOnePerson,
  deleteOneContact,
  editOneContact,
  editOnePerson,
  postOneToContact,
  postOneToList,
  getOne,
  getAll,
};
