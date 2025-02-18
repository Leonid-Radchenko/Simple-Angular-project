import { Injectable } from "@angular/core";
import { InputConfig } from "../models/input.model";

@Injectable({
  providedIn: 'root'
})
export class FormConfigService {
  getContactFormInputs(): InputConfig[] {
    return [
      {
        id: 'name',
        type: 'text',
        showLabel: true,
        label: 'Name',
        required: true,
        // placeholder: 'Enter your name'
      },
      {
        id: 'email',
        type: 'email',
        showLabel: true,
        label: 'Email',
        required: true,
        // placeholder: 'Enter your email'
      },
      {
        id: 'phone',
        type: 'tel',
        showLabel: true,
        label: 'Phone',
        required: true,
        // placeholder: 'Enter your phone'
      },
      {
        id: 'subject',
        type: 'text',
        showLabel: true,
        label: 'Subject',
        required: true,
        // placeholder: 'Enter your subject'
      },
      {
        id: 'message',
        type: 'textarea',
        showLabel: true,
        label: 'Message',
        required: true,
        // placeholder: 'Enter your message',
        rows: 5
      }
    ];
  }
}