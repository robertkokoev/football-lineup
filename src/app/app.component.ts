import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FieldComponent } from './components/field/field.component';
import { toPng } from 'html-to-image';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FieldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public readonly playerCards = Array<number>();

  @ViewChild(FieldComponent, { read: ElementRef })
  private readonly fieldComponent?: ElementRef<HTMLElement>;

  public save(): void {
    if (!this.fieldComponent) {
      return;
    }

    toPng(this.fieldComponent.nativeElement)
      .then(dataUrl => downloadURI(dataUrl, 'my-field.png'))
  }

  public addCard(): void {
    this.playerCards.push(0);
  }

  public clearCards(): void {
    this.playerCards.length = 0;
  }
}

function downloadURI(uri: string, name: string) {
  const link = document.createElement('a');
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
