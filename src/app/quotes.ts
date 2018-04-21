export class Quotes {
public showDescription:boolean;
  constructor(public quote:string,
    public author:string,
    public upvote:number,
    public downvote:number,
     public creation:Date) {
       this.showDescription:false
     }
}
