import { CollegeModel, CollegeViewModel } from "../models/CollegeModel";
import { BaseRequest } from "./BaseRequest";

export class CollegeRequest {
  CampusOneRequest: BaseRequest;
  College: CollegeModel;

}

export class RetrieveCollegeRequest {
  CampusOneRequest: BaseRequest;
  CollegeNewId: string;
}

export class UpdateCollegeRequest {
  CampusOneRequest: BaseRequest;
  College: CollegeViewModel;
}
