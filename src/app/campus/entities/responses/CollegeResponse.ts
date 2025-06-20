import { BaseResponse } from "./BaseResponse";
import { CollegeViewModel } from "../models/CollegeModel"

export class CollegeListResponse {
  Response: BaseResponse;
  Colleges: CollegeViewModel[];
}

export class CollegeResponse {
  Response: BaseResponse;
  College: CollegeViewModel;
}
