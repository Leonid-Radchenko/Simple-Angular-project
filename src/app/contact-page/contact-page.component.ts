import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/components/button/button.component';
import { ButtonConfig } from '../shared/models/button.model';
import { InputComponent } from '../shared/components/input/input.component';
import { InputConfig } from '../shared/models/input.model';

@Component({
    selector: 'app-contact-page',
    imports: [ButtonComponent, InputComponent],
    templateUrl: './contact-page.component.html',
    styleUrl: './contact-page.component.css',
})
export class ContactPageComponent {
  submitButtonConfig: ButtonConfig = {
    label: 'Send',
    color: 'success',
    type: 'submit',
    customClass: 'button-submit'
  }

  nameInputConfig: InputConfig = {
    id: 'name',
    type: 'text',
    showLabel: true,
    label: 'Name',
    required: true,
    // placeholder: 'Enter your name'
  }

  emailInputConfig: InputConfig = {
    id: 'email',
    type: 'email',
    showLabel: true,
    label: 'Email',
    required: true,
    // placeholder: 'Enter your email'
  }

  phoneInputConfig: InputConfig = {
    id: 'phone',
    type: 'tel',
    showLabel: true,
    label: 'Phone',
    required: true,
    // placeholder: 'Enter your phone'
  }

  subjectInputConfig: InputConfig = {
    id: 'subject',
    type: 'text',
    showLabel: true,
    label: 'Subject',
    required: true,
    // placeholder: 'Enter your subject'
  }

  messageInputConfig: InputConfig = {
    id: 'message',
    type: 'textarea',
    showLabel: true,
    label: 'Message',
    required: true,
    // placeholder: 'Enter your message',
    rows: 5
  }
}
