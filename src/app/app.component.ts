import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { SuccessPopupComponent } from './success-popup/success-popup.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FormWithValidations';

  simpleForm!: FormGroup;
  image:any = [];
  isAddPhoto:boolean = false;
  constructor(
    public dialog: MatDialog
  ) {
    
    this.initForms();
    this.simpleForm.get('')
    
}
  initForms() {
    this.simpleForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName :  new FormControl('', Validators.required),
      description : new FormControl('', Validators.required),
      emailAddress :  new FormControl('', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      save : new FormControl()

  })  }

  get issimpleFormValid() {
    return this.simpleForm.valid;
  }

  get borderbordercolor()
  {
    if(this.simpleForm.get('emailAddress')?.hasError('pattern'))
    {
      return "#ff0000";
      
    }
    else{
      return "#b4b4b4";
    }
  }
  
  onFileSelected(event: any)
  {
    var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
			this.image.push(reader.result); 
      this.isAddPhoto = true;
		}
   
    }

    OnSave()
    {
      let dialogRef = this.dialog.open(SuccessPopupComponent, {
      
        panelClass : 'dialog-css'
      });
    }
}


