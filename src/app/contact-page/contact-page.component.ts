import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../shared/components/button/button.component';
import { ButtonConfig } from '../shared/models/button.model';
import { InputComponent } from '../shared/components/input/input.component';
import { InputConfig } from '../shared/models/input.model';
import { ContactInfo } from '../shared/models/contact-info.model';
import { ContactInfoComponent } from '../shared/components/contact-info/contact-info.component';
import { ContactInfoService } from '../shared/services/contact-info.service';
import { FormConfigService } from '../shared/services/form-config.service';

@Component({
    selector: 'app-contact-page',
    imports: [ButtonComponent, InputComponent, ContactInfoComponent],
    templateUrl: './contact-page.component.html',
    styleUrl: './contact-page.component.css',
})
export class ContactPageComponent {
  private contactInfoService = inject(ContactInfoService);

  private formConfigService = inject(FormConfigService);

  contactInfo: ContactInfo[] = this.contactInfoService.getContactInfo();

  inputConfigs: InputConfig[] = this.formConfigService.getContactFormInputs();
  
  submitButtonConfig: ButtonConfig = {
    label: 'Send',
    color: 'success',
    type: 'submit',
    customClass: 'button-submit'
  };
}
