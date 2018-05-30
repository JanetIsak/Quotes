import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes = [
      new Quotes(' Strive for progress, not perfection.','Unknown','daniel-Wong.com',0, 0,new Date(2000,11,10)),
      new Quotes(' I find that the harder I work, the more luck I seem to have.',' Thomas Jefferson','Janet', 0, 0,new Date(1993,3,21)),
      new Quotes('Start where you are. Use what you have. Do what you can.', 'Arthur Ashe','Ariam', 0, 0,new Date(1986,4,24))
    ]
    addNewQuote(quote){
      let quoteLength = this.quotes.length;
      quote.creation = new Date();
      this.quotes.push(quote);
      console.log(this.quotes);

    }
    deleteQuote(complete,index){
    if(complete){
      this.quotes.splice(index,1);
    }
  }

  toogleDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  constructor() { }

  ngOnInit() {
  }

}
