import * as userServices from "../services/usersSevice.js";

export const getOneUser = (req, res) => {
  const { username, password } = req.body;
  userServices
    .getOneUser(username, password)
    .then((result) => {
      const [dataUser] = result;
      console.log('controller', dataUser);
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

export const postOneUser = (req, res) => {
  const { username, password } = req.body;
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
