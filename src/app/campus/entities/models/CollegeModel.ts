export class College {
  Id: number;
  NewId: string;
  Entity: string;
  Status: number;
  DateStamp: Date;
}

export class CollegeModel {
  CollegeId: string | null = null;
  NewId: string | null = null;
  EstablishedYear: string | null = null;
  Name: string | null = null;
  Acronym: string | null = null;
  Address: string | null = null;
  District: string | null = null;
  DistrictId: number = 0;
  Zipcode: string | null = null;
  ContactNumber: string | null = null;
  EmailAddress: string | null = null;
  Website: string | null = null;
  Description: string | null = null;
  Category: string | null = null;
  CategoryId: number = 0;
}

export class CollegeViewModel {
  Id: number;
  NewId: string; 
  Status: number;
  DateStamp: Date;

  CollegeId: string;
  EstablishedYear: string;
  Name: string;
  Acronym: string;
  Address: string;
  District: string;
  DistrictId: number;
  Zipcode: string;
  ContactNumber: string;
  EmailAddress: string;
  Website: string;
  Description: string;
  Category: string;
  CategoryId: number;
}
