import { getAllUsersModel } from "../models/User.js";
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
  const { id } = req.query;
  getOneList(id)
    .then((result) => {
      return res.status(200).send({ msg: "It was grabbed one successfully", data: result });
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
  const data = req.query;
  postOnePerson(data)
    .then((result) => {
      return res.status(200).send({ msg: "It was created one successfully", data: result });
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
};

const postOneToContact = (req, res) => {
  const { tipo, descricao, idPessoa } = req.query;
  postOneContact(tipo, descricao, idPessoa)
    .then((result) => {
      return res.status(200).send({ msg: "It was created one successfully", data: result });
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
};

const deleteOnePerson = (req, res) => {
  const { id } = req.query;
  deletePerson(id)
    .then((result) => {
      return res.status(200).send({ msg: "It was deleted one successfully", data: result });
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
};

const deleteOneContact = (req, res) => {
  const { id } = req.query;
  deleteContact(id)
    .then((result) => {
      return res.status(200).send({ msg: "It was deleted one successfully", data: result });
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
};

const editOnePerson = (req, res) => {
  const { nome, cpf, id} = req.query;
  updateOnePerson(nome, cpf, id)
    .then((result) => {
      return res.status(200).send({ msg: "It was edited one successfully", data: result });
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
};

const editOneContact = (req, res) => {
  const { tipo, descricao, id } = req.query;
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
