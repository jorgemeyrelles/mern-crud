import {
  deleteAllContacts,
  deleteOneContact,
  deleteOnePerson,
  findAll,
  findOneByName,
  findOneList,
  insertOneContact,
  insertOnePerson,
  updateContact,
  updatePerson,
} from "../models/List.js"

const getOneList = (id) => {
  const fromTable = findOneList(id)
    .then((response) => {
      const [firstList] = response;
      return firstList;
    })
    .catch((error) => error)

  return fromTable;
};

const getAllList = () => {
  const fromTable = findAll()
    .then((response) => {
      const [firstList] = response;
      return firstList;
    })
    .catch((error) => error)

  return fromTable;
};

const postOnePerson = async (data) => {
  const { nome, cpf, tipo, descricao } = data;
  insertOnePerson(nome, cpf)
    .then((response) => response)
    .catch((error) => error);
  
  const [saved] = await findOneByName(nome);

  const { id } = saved[0];
  insertOneContact(tipo, descricao, id)
    .then((response) => response)
    .catch((error) => error);

  return { id , nome, cpf, tipo, descricao };
};

const postOneContact = async (tipo, descricao, idPessoa) => {
  insertOneContact(tipo, descricao, idPessoa)
    .then((response) => response)
    .catch((error) => error);
  
  const [saved] = await findOneList(idPessoa);

  return saved[0];
};

const updateOnePerson = (nome, cpf, id) => {
  const update = updatePerson(nome, cpf, id)
    .then((response) => response)
    .catch((error) => error);
  
  return update;
};

const updateOneContact = (tipo, descricao, id) => {
  const update = updateContact(tipo, descricao, id)
    .then((response) => response)
    .catch((error) => error);
  
  return update;
};

const deletePerson = async (id) => {
  const [first] = await findOneList(id);
  deleteAllContacts(id)
    .then((response) => response)
    .catch((error) => error);
  deleteOnePerson(id)
    .then((response) => response)
    .catch((error) => error);
  return first[0];
};

const deleteContact = async (id) => {
  // modificar o retorno
  const deleteConta = deleteOneContact(id)
    .then((response) => response)
    .catch((error) => error);
  return deleteConta;
}

export {
  deleteContact,
  deletePerson,
  postOneContact,
  postOnePerson,
  getAllList,
  getOneList,
  updateOneContact,
  updateOnePerson,
};
