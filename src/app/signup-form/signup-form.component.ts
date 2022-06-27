import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IContact } from './../interfaces/form';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  public contactForm: FormGroup;

  public submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {

    this.contactForm = this.formBuilder.group({

      name: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required]],
      message: [""]

    })
   }

   public onSubmit() {
    this.submitted = true;

    if (this.contactForm.valid) {

      const user: IContact = {

        name: this.contactForm.get('Name')?.value,
        email: this.contactForm.get('Email')?.value,
        message: this.contactForm.get('Message')?.value

      };

      console.log(user);

      this.contactForm.reset();

      this.submitted = false;

    }
   }



}
