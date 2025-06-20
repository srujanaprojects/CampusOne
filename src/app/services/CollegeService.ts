import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { BaseRequest } from "../campus/entities/requests/BaseRequest";
import { DataTablesResponse } from "../_fake/services/user-service";

//export interface DataTablesResponse {
//  Draw?: number;
//  RecordsTotal: number;
//  RecordsFiltered: number;
//  Data: any[];
//}

@Injectable({ providedIn: 'root' })
export class CollegeService {
  baseUrl = environment.baseUrl;
  baseRequest: BaseRequest;

  headerDirect = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type'
  }

  constructor(public http: HttpClient) {
    this.baseRequest = new BaseRequest();
    this.baseRequest.User = "user";

    //to fetch IP address
    this.http.get("https://api.ipify.org/?format=json").subscribe((res: any) => {
      this.baseRequest.IpAddress = res.ip;
    });
  }

  //To Get Active College List
  public GetActiveCollegeList(): Observable<DataTablesResponse> {
    return this.http.get<DataTablesResponse>(this.baseUrl + "college/active-list");
  }
}
