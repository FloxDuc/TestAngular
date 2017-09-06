import { Pipe, PipeTransform, Input } from '@angular/core';

@Pipe({
  name: 'kilometerFormat'
})
export class KilometerFormatPipe implements PipeTransform {
  
  public static METRIC_KILOMETER:string = "KM";
  public static METRIC_METER:string = "M";
  
  transform(value: string, metric ?: string): string {
    if(!metric){
      metric = KilometerFormatPipe.METRIC_KILOMETER;
    }
    let res:string = value;
    if(metric === KilometerFormatPipe.METRIC_KILOMETER){
      res = value + " km";
    }else if(metric === KilometerFormatPipe.METRIC_METER){
      res = value + "000 m";
    }
    return res;
  }

}

