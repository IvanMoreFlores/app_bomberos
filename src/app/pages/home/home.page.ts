import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  validations_form: FormGroup;
  constructor(public formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      username: new FormControl('', Validators.compose([
        Validators.maxLength(6),
        Validators.minLength(3),
        Validators.required
      ]))
    });
  }

  onSubmit(values){
    console.log(values);
  }

  validation_messages = {
    'username': [
      { type: 'required', message: 'Se requiere código COD.' },
      { type: 'minlength', message: 'El código COD debe tener al menos 3 caracteres.' },
      { type: 'maxlength', message: 'El código COD no puede tener más de 6 caracteres.' }
    ]
  };

}
