import { Component, Input } from '@angular/core';
import { ContactInfo } from '../../models/contact-info.model';

@Component({
  selector: 'app-contact-info',
  imports: [],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.css'
})
export class ContactInfoComponent {
  @Input() info!: ContactInfo;
}
