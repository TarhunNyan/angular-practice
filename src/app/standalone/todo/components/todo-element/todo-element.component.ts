import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
             selector: 'app-todo-element',
             standalone: true,
             imports: [
               FormsModule,
               NgClass,
             ],
             templateUrl: './todo-element.component.html',
             styleUrl: './todo-element.component.css',
           })
export class TodoElementComponent {
  @Input() title: String = '';
  @Input() isDone: boolean = false;
  @Output() deleteElement = new EventEmitter();
  @Output() reverserIsDone = new EventEmitter();

  onDeleteElement() {
    this.deleteElement.emit();
  }

  onReverserIsDone() {
    this.reverserIsDone.emit();
  }
}
