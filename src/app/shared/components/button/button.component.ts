import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ButtonConfig } from '../../models/button.model';

@Component({
  selector: 'app-button',
  imports: [NgClass, NgIf, MatIconModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  @Input() config!: ButtonConfig;

  @Output() clickEvent = new EventEmitter<void>();

  onClick() {
    if (!this.config?.disabled) {
      this.clickEvent.emit();
    }
  }
}