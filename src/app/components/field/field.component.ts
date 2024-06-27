import { Component, Input } from '@angular/core';
import { PlayerCardComponent } from '../player-card/player-card.component';
import { NgForOf } from '@angular/common';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-field',
  standalone: true,
  imports: [
    PlayerCardComponent,
    NgForOf,
    CdkDropList,
    CdkDrag,
  ],
  templateUrl: './field.component.html',
  styleUrl: './field.component.css'
})
export class FieldComponent {
  @Input()
  public playerCards = Array<number>();
}
