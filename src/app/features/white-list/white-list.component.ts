import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { SqlComponentsModule } from 'sql-components';
import { DocWorkspaceFormComponent } from '../doc-workspace-form/doc-workspace-form.component';
import { SitebarWrapperComponent } from 'src/app/template/sitebar-wrapper/sitebar-wrapper.component';
import { WhiteListFormComponent } from '../white-list-form/white-list-form.component';

@Component({
  selector: 'app-white-list',
  standalone: true,
  imports: [CommonModule, SqlComponentsModule, RouterModule, SitebarWrapperComponent,WhiteListFormComponent], 

  templateUrl: './white-list.component.html',
  styleUrls: ['./white-list.component.css']
})
export class WhiteListComponent {
 
  @Output() button_click: EventEmitter<any> = new EventEmitter<any>();
  @Output() row_click: EventEmitter<any> = new EventEmitter<any>();

  constructor (private _router: Router ) {}

processButton(m: any) {
 this.button_click.emit(m);
 this._router.navigate(['/workspace-dashboard',m.id]);
}

processRow(m: any) {
 this.row_click.emit(m);
}

}
