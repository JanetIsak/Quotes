import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Quotes} from '../quotes'
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote:Quotes;
    @Output() isComplete = new EventEmitter<boolean>();

upVote() {
  this.quote.upVotes ++
}

downVote() {
  this.quote.downVotes ++
}

quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit() {
  }

}
