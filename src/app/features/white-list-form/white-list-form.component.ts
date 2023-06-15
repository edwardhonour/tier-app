import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SqlComponentsModule, SqlDataSelectComponent, SqlDeleteComponent, SqlSubmitComponent } from 'sql-components';
import {MatDialogModule} from '@angular/material/dialog';


@Component({
  selector: 'app-white-list-form',
  standalone: true,
  imports: [CommonModule, SqlComponentsModule, SqlSubmitComponent, SqlDataSelectComponent, SqlDeleteComponent, MatDialogModule], 
  templateUrl: './white-list-form.component.html',
  styleUrls: ['./white-list-form.component.css']
})
export class WhiteListFormComponent {

}
