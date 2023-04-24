import * as userServices from "../services/usersSevice.js";

const getOneUser = (req, res) => {
  const { username, password } = req.query;
  userServices
    .getOneUser(username, password)
    .then((result) => {
      const [dataUser] = result;
      if (dataUser.length === 0) {
        return res.status(500).send({ msg: "User was not found out", data: dataUser });
      }
      return res.status(200).json({
        message: "User found out successfully",
        data: dataUser[0],
      });
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
};

const postOneUser = (req, res) => {
  const { username, password } = req.query;
  userServices
    .postOneUser(username, password)
    .then((result) => {
      const [dataUser] = result;
      res.status(200).json({
        message: "User was created successfully",
        data: dataUser[0],
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const getCheckOneUser = (req, res) => {
  const { username } = req.query;
  userServices
    .getCheckUser(username)
    .then((result) => {
      const [dataUser] = result;
      if (dataUser.length !== 0) {
        return res.status(500).json({
          message: "User exist",
          data: dataUser[0],
        });
      }
      return res.status(200).send({ msg: "User does not exist", data: req.query });
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
};

export { getOneUser, postOneUser, getCheckOneUser };
