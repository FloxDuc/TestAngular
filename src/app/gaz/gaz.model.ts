export class Gaz {
  userName: string ;
  distance: number;
  amount: number;

  constructor({
    userName = '',
    distance = undefined,
    amount = undefined
   }:{
    userName ?: string,
    distance ?: number,
    amount ?: number
   }){
    this.userName=userName;
    this.distance=distance;
    this.amount=amount;
  }
}
