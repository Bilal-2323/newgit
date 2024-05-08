import express from "express";
import { getAllData } from "../controller/menuController.js";

const route = express.Router();
route.get("/getalldata", getAllData);

export default route;