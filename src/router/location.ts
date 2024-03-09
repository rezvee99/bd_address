import express from "express";
import withErrorHandling from "../utility/helper";
import {
  getDistrictsByDivisionId,
  getDivision,
  getUnionsByUpazilaId,
  getUpazilasByDistrictId,
} from "../controller/location.controller";

const router = express();
// get all divisions
router.get("/divisions", withErrorHandling(getDivision));

// get all districts by division id
router.get("/districts/:id", withErrorHandling(getDistrictsByDivisionId));

// get all upazilas by district id
router.get("/upazillas/:id", withErrorHandling(getUpazilasByDistrictId));

// get all unions by upazila id
router.get("/unions/:id", withErrorHandling(getUnionsByUpazilaId));

export default router;
