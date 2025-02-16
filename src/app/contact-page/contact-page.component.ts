import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/components/button/button.component';
import { ButtonConfig } from '../shared/models/button.model';

@Component({
    selector: 'app-contact-page',
    imports: [ButtonComponent],
    templateUrl: './contact-page.component.html',
    styleUrl: './contact-page.component.css',
})
export class ContactPageComponent {
  submitButtonConfig: ButtonConfig = {
    label: 'Send',
    color: 'success'
  }
}
