import { Injectable } from "@angular/core";
import { ContactInfo } from "../models/contact-info.model";

@Injectable({
  providedIn: 'root'
})
export class ContactInfoService {
  getContactInfo(): ContactInfo[] {
    return [
      {
        id: 1,
        icon: 'assets/images/icons/pin-49.png',
        title: 'Address',
        content: 'Khreshchatyk 77\nKyiv, Ukraine'
      },
      {
        id: 2,
        icon: 'assets/images/icons/phone-504.png',
        title: "Let's Talk",
        content: '+380 78 787 87 87',
        link: 'tel:+380787878787'
      },
      {
        id: 3,
        icon: 'assets/images/icons/mail-5888.png',
        title: 'General Support',
        content: 'contact@example.com',
        link: 'mailto:contact@example.com'
      }
    ];
  }
}