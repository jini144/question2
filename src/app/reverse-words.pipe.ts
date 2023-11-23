import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseWords',
})
export class ReverseWordsPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;

    return value
      .split(' ')
      .map((word) => this.reverseWord(word))
      .join(' ');
  }

  private reverseWord(word: string): string {
    return word.split('').reverse().join('');
  }
}
