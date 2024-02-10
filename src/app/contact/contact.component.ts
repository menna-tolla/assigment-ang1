


import { Component } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {
  contactForm:FormGroup=new FormGroup({
    name:new FormControl(null ,[Validators.required , Validators.minLength(3) , Validators.maxLength(9)]),
    age:new FormControl(null , [Validators.required]),
    email:new FormControl(null , [Validators.required , Validators.email]),
    password:new FormControl(null , [Validators.required , Validators.pattern(/^/)]),
    rePassword:new FormControl(null),
  })

  test()
  {
    
  }

}
