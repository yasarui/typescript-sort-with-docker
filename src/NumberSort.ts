import { Sortable } from "./Sort";

export class NumberSort implements Sortable{
  public data: number[] = []
  constructor(arr: number[]){
     this.data = arr
  }
  get length():number{
    return this.data.length
  }
  compare(leftIndex:number, rightIndex: number): boolean{
     if(this.data[leftIndex] > this.data[rightIndex]){
      return true;
     }else{
      return false;
     }
  }
  swap(leftIndex: number, rightIndex: number):void {
    const temp = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = temp;
  }
}