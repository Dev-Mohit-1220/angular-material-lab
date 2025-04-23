import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'aml-short-content',
  templateUrl: './short-content.component.html',
  styleUrl: './short-content.component.scss',
})
export class ShortContentComponent {
  @ViewChild('dialogContainer', { static: true }) dialogContainer!: ElementRef;

  initResize(event: MouseEvent) {
    const element = this.dialogContainer.nativeElement;
    const startX = event.clientX;
    const startY = event.clientY;
    const startWidth = element.offsetWidth;
    const startHeight = element.offsetHeight;

    const mouseMove = (e: MouseEvent) => {
      element.style.width = startWidth + (e.clientX - startX) + 'px';
      element.style.height = startHeight + (e.clientY - startY) + 'px';
    };

    const mouseUp = () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseup', mouseUp);
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseup', mouseUp);
  }
}
