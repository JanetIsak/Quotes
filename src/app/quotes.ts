export class Quotes {
public showDetails:boolean;
  constructor(
    public quote:string,
    public author:string,
    public user:string,
    public upVotes:number,
    public downVotes:number,
     public creation:Date = new Date()) {
this.showDetails=false;
     }
}
