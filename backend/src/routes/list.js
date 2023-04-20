import { Router } from "express";
import {
  deleteOnePerson,
  getAll,
  getOne,
  postOneToContact,
  postOneToList,
} from "../controllers/listController.js";

const listRoute = Router();

listRoute.get("/all/", getAll);
listRoute.get("/one/", getOne);
listRoute.post("/person/", postOneToList);
listRoute.post("/contact/", postOneToContact)
listRoute.delete("/delete/", deleteOnePerson);

export default listRoute;
