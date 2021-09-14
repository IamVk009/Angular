import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {
  // Here transform function takes two arguments i.e. value and 1D array using spread operator)
  transform(value: string, ...args: any): string {
    
    let limit = 10;
    // Here arguments.length > 1 is used because transform function takes two arguments in which the first argument is value so in order
    // to check if there is second argument provided, we need to check if its length is >1. 
    if(arguments.length > 1)
    limit = args[0]

    return value.substring(0,limit) + ".......";
  }

}

// The transform method can also be written as - 
// transform(value: string, arg: number): string {
    
//   let limit = 10;

//   if(arguments.length > 1)
//   limit = arg;

//   return value.substring(0,limit) + ".......";
// }