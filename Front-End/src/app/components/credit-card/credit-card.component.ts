import { Component, OnInit } from '@angular/core';
import {INgxMyDpOptions, IMyDateModel} from 'ngx-mydatepicker';
import { LocalCommunicationService } from '../../service/local-communication.service';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {
  fieldTemp:any;
  
  constructor(
    private _localCommunicationService: LocalCommunicationService
  ) { }
  
  ngOnInit(): void {
    this.fieldTemp = this._localCommunicationService.creditCardDetails;
  }

  submit(event){
  }
  
  change(event){
  }

}
