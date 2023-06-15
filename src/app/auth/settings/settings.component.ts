import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, Output, EventEmitter, HostBindingDecorator, HostListener, HostBinding } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { FormsModule,  FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { DataService, FileUploadService } from 'src/app/data.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxTablePaginationModule } from 'ngx-table-pagination';
import { MatRadioModule } from '@angular/material/radio';
import { SqlComponentsModule, SqlMenuComponent } from 'sql-components';
import { FileUploadModule, FileUploadControl, FileUploadValidators } from '@iplab/ngx-file-upload';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { AddDocumentFormComponent } from 'src/app/components/add-document-form/add-document-form.component';
import { SqlUploadComponent } from 'src/app/components/sql-upload/sql-upload.component';
import { SmartUploadComponent } from 'src/app/components/smart-upload/smart-upload.component';
import { SitebarWrapperComponent } from 'src/app/template/sitebar-wrapper/sitebar-wrapper.component';


@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, Ng2SearchPipeModule, MatRadioModule, NgxTablePaginationModule, RouterModule, FormsModule, SqlUploadComponent, SmartUploadComponent,
    SqlComponentsModule, SqlMenuComponent, FileUploadModule, HttpClientModule, AddDocumentFormComponent, SitebarWrapperComponent],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  @Output() onFileDropped = new EventEmitter<any>();
  
  @HostListener('dragover', ['$event']) onDragOver(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
  }
  //Dragleave listener, when something is dragged away from our host element
  @HostListener('dragleave', ['$event']) public onDragLeave(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
  }
  
  @HostListener('drop', ['$event']) public ondrop(evt: any) {
  //    evt.preventDefault();
  //    evt.stopPropagation();
  //    let files = evt.dataTransfer.files;
  //    if (files.length > 0) {
  //      this.onFileDropped.emit(files)
  //    }
  this.uploadFiles();
  }
  
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router, 
    private _dataService: DataService,
    public http: HttpClient,
    private fileUploadService: FileUploadService
  ) { }
  public uploadedFiles: Array<File> = [];
  data: any; 
  uploading: any = 'N';
  adding: any = 'N';
  version: any = 'N';
  k: any;
  uploadedList: any = '';
  public fileUploadControl = new FileUploadControl();
  progress: number = 0;
  uid: any = 0;
  doc_id: any = 0;
  
  ngOnInit(): void {      
          this._activatedRoute.data.subscribe(({ 
            data, menudata, userdata })=> { 
            this.data=data;
            if (this.data.user.force_logout>0) {
                localStorage.removeItem('uid');
                this._router.navigate(['/sign-in']);
  
            } else {
              this.uploading='N'
              this.uid=localStorage.getItem('uid');
            }
          }) 
  }
  
  toggleUpload() {
    if (this.uploading=='Y') {
      this.uploading='N';
    } else {
      this.uploading='Y';
      this.adding='N';
    }
  }
  
  toggleAdd() {
    if (this.adding=='Y') {
      this.adding='N';
    } else {
      this.adding='Y';
      this.uploading='N';
    }
  }
  
  toggleVersion(m: any) {
    this.k=m;
    this.doc_id=m.id;
    if (this.version=='Y') {
      this.version='N';
    } else {
      this.version='Y';
    }
  }
  
  processClick(m: any) {

    if (m.id=='TEAM') { this.toggleAdd(); }
  }
  
  ngOnDestroy(): void
  {
   //--   this._unsubscribeAll.next(null);
   //--   this._unsubscribeAll.complete();
  }
  
  previewVersion(m: any) {
  
  }
  
  uploadFiles() {
  for (const droppedFile of this.uploadedFiles) {
    console.log(droppedFile.name);
    console.log(droppedFile.size);
    console.log(droppedFile.type);
    let postData= {
      one: 'one',
      two: 'two'
    }
    this.fileUploadService.upload(droppedFile, postData).subscribe((event: HttpEvent<any>) => {
    switch (event.type) {
      case HttpEventType.Sent:
        console.log('Request has been made!');
        break;
      case HttpEventType.ResponseHeader:
        console.log('Response header has been received!');
        break;
      case HttpEventType.UploadProgress:
        this.progress = Math.round(event.loaded / event.total! * 100);
        console.log('Uploaded! ' + this.progress);
        break;
      case HttpEventType.Response:
        console.log('User successfully created!', event.body);
        setTimeout(() => {
          this.progress = 0;
          this.uploadedList+=droppedFile.name;
        }, 1500);
    }
  })
  }
  }
  
  drop() {
  alert('dropped')
  }
  
  public clear(): void {
  this.uploadedFiles = [];
  }
  
  }
  