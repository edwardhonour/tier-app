import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Data, Router, RouterModule } from '@angular/router';
import { DataService } from 'src/app/data.service'; 
import { MatRadioModule } from '@angular/material/radio'
import { MatButtonModule } from '@angular/material/button'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatIconModule } from '@angular/material/icon'
import { MatBadgeModule } from '@angular/material/badge'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule }  from '@angular/material/toolbar';
import { MatSidenavModule }  from '@angular/material/sidenav';
import { MatMenuModule }  from '@angular/material/menu';
import { MatListModule }  from '@angular/material/list';
import { MatGridListModule }  from '@angular/material/grid-list';
import { MatExpansionModule }  from '@angular/material/expansion';
import { MatCardModule }  from '@angular/material/card';
import { MatStepperModule }  from '@angular/material/stepper';
import { MatError, MatFormFieldModule }  from '@angular/material/form-field';
import { MatInputModule }  from '@angular/material/input';
import { MatTabsModule }  from '@angular/material/tabs';
import { MatAutocompleteModule }  from '@angular/material/autocomplete';
import { MatDividerModule }  from '@angular/material/divider';
import { MatPaginatorModule }  from '@angular/material/paginator';
import { MatCheckboxModule }  from '@angular/material/checkbox';
import { MatSelectModule }  from '@angular/material/select';
import { MatDatepickerModule }  from '@angular/material/datepicker';
import { MatNativeDateModule }  from '@angular/material/core';


@Component({
  selector: 'app-new-signin',
  standalone: true,
  imports: [ CommonModule, MatButtonModule, MatCheckboxModule, RouterModule, FormsModule, ReactiveFormsModule, MatFormFieldModule],
  templateUrl: './new-signin.component.html',
  styleUrls: ['./new-signin.component.css']
})
export class NewSigninComponent implements OnInit {


  signInForm!: FormGroup;
  showAlert: boolean = false;
  email: any = '';
  password: any = '';
  style: any = '';

  /**
   * Constructor
   */
  constructor(
      private _activatedRoute: ActivatedRoute,
      private _formBuilder: FormBuilder,
      private _router: Router,
      private _dataService: DataService
  )
  {
    
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void
  {
      if (localStorage.getItem('uid')===null) {
          localStorage.setItem('uid','572');
      } else {
       
      }
      this._router.navigateByUrl('/sadmin'); 
  }

}