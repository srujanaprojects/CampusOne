import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Observable } from 'rxjs';
import { DataTablesResponse, IUserModel, UserService } from 'src/app/_fake/services/user-service';
import { SweetAlertOptions } from 'sweetalert2';
import moment from 'moment';
import { IRoleModel, RoleService } from 'src/app/_fake/services/role.service';
import { Config } from 'datatables.net';
import { CollegeService } from '../../../services/CollegeService';
import { CollegeModel } from '../../entities/models/CollegeModel';

@Component({
  selector: 'college-listing',
  templateUrl: './college-listing.component.html',
  styleUrls: ['./college-listing.component.scss']
})
export class CollegeComponent implements OnInit, AfterViewInit, OnDestroy {

  isCollapsed1 = false;
  isCollapsed2 = true;

  isLoading = false;

  users: DataTablesResponse;

  datatableConfig: Config = {};

  // Reload emitter inside datatable
  reloadEvent: EventEmitter<boolean> = new EventEmitter();

  // Single model
  aUser: Observable<CollegeModel>;
  collegeModel: CollegeModel = {
    CollegeId: '', Name: '', EmailAddress: '', ContactNumber: '',
    EstablishedYear: '', Acronym: '', Address: '', Category: '',
    CategoryId: 0, District: '', DistrictId: 0, Zipcode: '', NewId: '',
    Website: '', Description: ''
  };

  @ViewChild('noticeSwal')
  noticeSwal!: SwalComponent;

  swalOptions: SweetAlertOptions = {};

  roles$: Observable<DataTablesResponse>;

  constructor(private apiService: CollegeService, private roleService: RoleService, private cdr: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.datatableConfig = {
      serverSide: true,
      ajax: (dataTablesParameters: any, callback) => {
        this.apiService.GetActiveCollegeList().subscribe(resp => {
          callback(resp);
        });
      },
      columns: [
        {
          title: 'Name', data: 'Name', render: function (data, type, full) {
            const colorClasses = ['success', 'info', 'warning', 'danger'];
            const randomColorClass = colorClasses[Math.floor(Math.random() * colorClasses.length)];

            const initials = data[0].toUpperCase();
            const symbolLabel = `
              <div class="symbol-label fs-3 bg-light-${randomColorClass} text-${randomColorClass}">
                ${initials}
              </div>
            `;

            const nameAndEmail = `
              <div class="d-flex flex-column" data-action="view" data-id="${full.NewId}">
                <a href="javascript:;" class="text-gray-800 text-hover-primary mb-1">${data}</a>
                <span>${full.EmailAddress}</span>
              </div>
            `;

            return `
              <div class="symbol symbol-circle symbol-50px overflow-hidden me-3" data-action="view" data-id="${full.NewId}">
                <a href="javascript:;">
                  ${symbolLabel}
                </a>
              </div>
              ${nameAndEmail}
            `;
          }
        },
        {
          title: 'Established Year', data: 'EstablishedYear', render: function (data, type, row) {
            const roleName = row.EstablishedYear;
            return roleName || '';
          },
          orderData: [1],
          orderSequence: ['asc', 'desc'],
          type: 'string',
        },
        {
          title: 'College Id', data: 'CollegeId', render: (data, type, full) => {
            const collegeId = data || full.CollegeId;
            return `<div class="badge badge-light fw-bold">${collegeId}</div>`;
          }
        },
        {
          title: 'Acronym', data: 'Acronym', render: function (data, type, full) {
            const acronym = data || full.CollegeId;
            return acronym;
          }
        },
        {
          title: 'Address', data: 'Address', render: function (data, type, full) {
            const address = data || full.Address;
            return address;
          }
        },
        {
          title: 'ContactNumber', data: 'ContactNumber', render: function (data, type, full) {
            const contactNumber = data || full.ContactNumber;
            return contactNumber;
          }
        }
      ],
      createdRow: function (row, data, dataIndex) {
        $('td:eq(0)', row).addClass('d-flex align-items-center');
      },
    };
  }

  delete(id: number) {
    //this.apiService.deleteUser(id).subscribe(() => {
    //  this.reloadEvent.emit(true);
    //});
  }

  edit(id: any) {
    this.collegeModel.NewId = id.Tostring();
    //this.aUser = this.apiService.getUser(id);
    //this.aUser.subscribe((user: IUserModel) => {
    //  this.userModel = user;
    //});
  }

  create() {
    this.collegeModel = {
      CollegeId: '', Name: '', EmailAddress: '', ContactNumber: '',
      EstablishedYear: '', Acronym: '', Address: '', Category: '',
      CategoryId: 0, District: '', DistrictId: 0, Zipcode: '',
      NewId: '', Website: '', Description: ''
    };
  }

  onCreateSubmit(event: Event, myForm: NgForm) {
    if (myForm && myForm.invalid) {
      return;
    }

    this.isLoading = true;

    const successAlert: SweetAlertOptions = {
      icon: 'success',
      title: 'Success!',
      text: this.collegeModel.CollegeId !== '' ? 'User updated successfully!' : 'User created successfully!',
    };
    const errorAlert: SweetAlertOptions = {
      icon: 'error',
      title: 'Error!',
      text: '',
    };

    const completeFn = () => {
      this.isLoading = false;
    };

    const updateFn = () => {
      //this.apiService.updateUser(this.userModel.id, this.userModel).subscribe({
      //  next: () => {
      //    this.showAlert(successAlert);
      //    this.reloadEvent.emit(true);
      //  },
      //  error: (error) => {
      //    errorAlert.text = this.extractText(error.error);
      //    this.showAlert(errorAlert);
      //    this.isLoading = false;
      //  },
      //  complete: completeFn,
      //});
    };

    const createFn = () => {
      //this.userModel.password = 'test123';
      //this.apiService.createUser(this.userModel).subscribe({
      //  next: () => {
      //    this.showAlert(successAlert);
      //    this.reloadEvent.emit(true);
      //  },
      //  error: (error) => {
      //    errorAlert.text = this.extractText(error.error);
      //    this.showAlert(errorAlert);
      //    this.isLoading = false;
      //  },
      //  complete: completeFn,
      //});
    };

    if (this.collegeModel.CollegeId !== '') {
      updateFn();
    } else {
      createFn();
    }
  }

  onEditSubmit(event: Event, myForm: NgForm) {
    if (myForm && myForm.invalid) {
      return;
    }

    this.isLoading = true;

    const successAlert: SweetAlertOptions = {
      icon: 'success',
      title: 'Success!',
      text: this.collegeModel.CollegeId !== '' ? 'User updated successfully!' : 'User created successfully!',
    };
    const errorAlert: SweetAlertOptions = {
      icon: 'error',
      title: 'Error!',
      text: '',
    };

    const completeFn = () => {
      this.isLoading = false;
    };

    const updateFn = () => {
      //this.apiService.updateUser(this.userModel.id, this.userModel).subscribe({
      //  next: () => {
      //    this.showAlert(successAlert);
      //    this.reloadEvent.emit(true);
      //  },
      //  error: (error) => {
      //    errorAlert.text = this.extractText(error.error);
      //    this.showAlert(errorAlert);
      //    this.isLoading = false;
      //  },
      //  complete: completeFn,
      //});
    };

    const createFn = () => {
      //this.userModel.password = 'test123';
      //this.apiService.createUser(this.userModel).subscribe({
      //  next: () => {
      //    this.showAlert(successAlert);
      //    this.reloadEvent.emit(true);
      //  },
      //  error: (error) => {
      //    errorAlert.text = this.extractText(error.error);
      //    this.showAlert(errorAlert);
      //    this.isLoading = false;
      //  },
      //  complete: completeFn,
      //});
    };

    if (this.collegeModel.NewId !== '') {
      updateFn();
    } else {
      createFn();
    }
  }

  extractText(obj: any): string {
    var textArray: string[] = [];

    for (var key in obj) {
      if (typeof obj[key] === 'string') {
        // If the value is a string, add it to the 'textArray'
        textArray.push(obj[key]);
      } else if (typeof obj[key] === 'object') {
        // If the value is an object, recursively call the function and concatenate the results
        textArray = textArray.concat(this.extractText(obj[key]));
      }
    }

    // Use a Set to remove duplicates and convert back to an array
    var uniqueTextArray = Array.from(new Set(textArray));

    // Convert the uniqueTextArray to a single string with line breaks
    var text = uniqueTextArray.join('\n');

    return text;
  }

  showAlert(swalOptions: SweetAlertOptions) {
    let style = swalOptions.icon?.toString() || 'success';
    if (swalOptions.icon === 'error') {
      style = 'danger';
    }
    this.swalOptions = Object.assign({
      buttonsStyling: false,
      confirmButtonText: "Ok, got it!",
      customClass: {
        confirmButton: "btn btn-" + style
      }
    }, swalOptions);
    this.cdr.detectChanges();
    this.noticeSwal.fire();
  }

  ngOnDestroy(): void {
    this.reloadEvent.unsubscribe();
  }
}
