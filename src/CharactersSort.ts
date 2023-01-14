import { Sortable } from "./Sort";

export class CharactersSort implements Sortable{
  public data: string = ''
  constructor(str: string){
     this.data = str;
  }
  get length():number{
    return this.data.length
  }
  compare(leftIndex:number, rightIndex: number): boolean{
     if(this.data[leftIndex].toLocaleLowerCase() > this.data[rightIndex].toLocaleLowerCase()){
       return true;
     }else{
       return false;
     }
  }
  swap(leftIndex: number, rightIndex: number):void {
     const tempString = this.data.split('');
     const temp = tempString[leftIndex];
     tempString[leftIndex] = tempString[rightIndex];
     tempString[rightIndex] = temp;
     this.data = tempString.join('');
  }
}