import { NgForOf } from '@angular/common';
import { Component, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Element } from '../../model/element';
import { TodoElementComponent } from '../todo-element/todo-element.component';

@Component({
             selector: 'app-core-menu',
             standalone: true,
             imports: [
               NgForOf,
               TodoElementComponent,
               ReactiveFormsModule,
               FormsModule,
             ],
             templateUrl: './core-menu.component.html',
             styleUrl: './core-menu.component.css'
           })
export class CoreMenuComponent {
  elements = [
    new Element('1', true),
    new Element('daj kk')
  ];
  inputText = "";

  private addElement(title: string) {
    this.elements.push(new Element(title));
  }

  private clearInputText() {
    this.inputText = "";
  }

  public pushInputText() {
    this.addElement(this.inputText);
    this.clearInputText();
  }

  public removeElement(index: number) {
    this.elements.splice(index, 1);
  }

  public reverserIsDone(index: number) {
    let isDone = this.elements[index].isDone;
    this.elements[index].isDone = !isDone;
  }
}
