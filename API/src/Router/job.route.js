import { Router } from "express";
const router = Router();

import { getAllJobs } from "../controller/job.controller.js";

router.route("/").get(getAllJobs);

module.exports = {
  router,
};
