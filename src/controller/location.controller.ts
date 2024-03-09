import { Request, Response, NextFunction } from "express";
import Division from "../model/division.model";
import District from "../model/district.model";
import Upazilla from "../model/upazilla.model";
import Union from "../model/union.model";

export const getDivision = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const divisions = await Division.find();

  return res.status(200).json({
    message: "Get all divisions successfully!",
    data: divisions,
  });
};

export const getDistrictsByDivisionId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const districts = await District.find({ division_id: id });

  return res.status(200).json({
    message: "Get all districts successfully! of the division",
    data: districts,
  });
};

export const getUpazilasByDistrictId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const upazillas = await Upazilla.find({ district_id: id });

  return res.status(200).json({
    message: "Get all upazillas successfully! of the district",
    data: upazillas,
  });
};

export const getUnionsByUpazilaId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const unions = await Union.find({ upazilla_id: id });

  return res.status(200).json({
    message: "Get all unions successfully! of the upazila",
    data: unions,
  });
};
