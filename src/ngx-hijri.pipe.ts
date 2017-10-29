import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'hijriDate',
})
export class HijriPipe implements PipeTransform {

    transform(value: string, splitter: string, format: string) {
        return value + ' sp= ' + splitter + ' f= ' + format;
    }

}
