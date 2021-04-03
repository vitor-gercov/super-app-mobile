import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(url: string, type?: 'url' | 'style' | 'resourceUrl') {
    if (!url) return null;
    switch (type) {
      case 'style':
        return this.sanitizer.bypassSecurityTrustStyle(url);
      case 'resourceUrl':
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
      case 'url':
      default:
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
  }
}