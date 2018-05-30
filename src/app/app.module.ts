import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
// import { QuoteComponent } from './quote-details/quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { QuotesComponent } from './quotes/quotes.component';
import { DateCountPipe } from './date-count.pipe';


@NgModule({
  declarations: [
    AppComponent,
    QuotesFormComponent,
    // QuoteComponent,
    QuoteDetailsComponent,
    QuotesComponent,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
