export interface Sortable{
  length: number
  swap(i:number, j: number): void
  compare(i:number, j:number): boolean
}

export class SortCollection{
  sort(sortable: Sortable):void{
      for(let i=0;i<sortable.length;i++){
      for(let j=0;j<sortable.length-i-1;j++){
        if(sortable.compare(j, j+1)){
          sortable.swap(j, j+1)
        }
      }
    }
  }
}