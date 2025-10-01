import { Component, signal, inject, computed, input } from '@angular/core';
import { FormControl, FormGroup, ɵInternalFormsSharedModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FestivalService } from '../../services/festival-service';

@Component({
  selector: 'app-form-add',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './form-add.html',
  styleUrl: './form-add.css'
})
export class FormAdd {

  private servicefestival = inject(FestivalService)
  public hidden = input<boolean>()

  readonly form= new FormGroup({
    name: new FormControl('', {nonNullable:true, validators: [Validators.required, Validators.minLength(5)]}),
    location: new FormControl('', {nonNullable:true, validators: [Validators.required]}),
    year: new FormControl('', {nonNullable:true, validators: [Validators.required]})
  })

  submit():void{
    const formvalue = this.form.value
    if (this.form.invalid) {
      console.log("Form est invalide")
      return;
    }
    this.servicefestival.add(formvalue.name!, formvalue.location!, Number(formvalue.year!))
    this.servicefestival.close()
  }

  close(){
    this.servicefestival.close()
  }

  
    
  

}
