import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "persianNumber",
})
export class PersianNumberPipe implements PipeTransform {
  transform(value: number | string): string {
    if (value === null || value === undefined) return "";

    const englishNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

    let str = value.toString();
    for (let i = 0; i < 10; i++) {
      str = str.replace(new RegExp(englishNumbers[i], "g"), persianNumbers[i]);
    }

    return str;
  }
}
