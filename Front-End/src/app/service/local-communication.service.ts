import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalCommunicationService {
  constructor() { }
  creditCardDetails = [
    {
      "displayCode": "Credit Card Number",
      "fieldName": "cardNumber",
      "fieldId": "cardNumber",
      "className": "",
      "isConditional": false,
      "defaultValue": "",
      "fieldWidth": 6,
      "helpText": "",
      "inputType": "text",
      "isMandatory": true,
      "mandatorySet": false,
      "maxLength": 12,
      "otherProperties": {
         "readOnly":false
      },
      "isVisibleByDefault": true,
      "type": "input",
      "dataValue": "",
      "validations": null
    },
    {
      "displayCode": "Card Holder",
      "fieldName": "cardHolder",
      "fieldId": "cardHolder",
      "className": "",
      "isConditional": false,
      "defaultValue": "",
      "fieldWidth": 6,
      "helpText": "",
      "inputType": "text",
      "isMandatory": true,
      "mandatorySet": false,
      "maxLength": 12,
      "otherProperties": {
         "readOnly":false
      },
      "isVisibleByDefault": true,
      "type": "input",
      "dataValue": "",
      "validations": null
    },
    {
      "displayCode": "Expiary date",
      "fieldName": "expDate",
      "fieldId": "expDate",
      "className": "",
      "isConditional": false,
      "defaultValue": "",
      "fieldWidth": 6,
      "helpText": "",
      "inputType": "",
      "isMandatory": true,
      "mandatorySet": false,
      "maxLength": 12,
      "otherProperties": {
         "readOnly":false
      },
      "isVisibleByDefault": true,
      "type": "date",
      "dataValue": "",
      "validations": null
    },
    {
      "displayCode": "CVV",
      "fieldName": "cvv",
      "fieldId": "cvv",
      "className": "",
      "isConditional": false,
      "defaultValue": "",
      "fieldWidth": 6,
      "helpText": "",
      "inputType": "number",
      "isMandatory": true,
      "mandatorySet": false,
      "maxLength": 3,
      "otherProperties": {
         "readOnly":false
      },
      "isVisibleByDefault": true,
      "type": "input",
      "dataValue": "",
      "validations": null
    },
    {
      "displayCode": "Amount",
      "fieldName": "amount",
      "fieldId": "amount",
      "className": "",
      "isConditional": false,
      "defaultValue": "",
      "fieldWidth": 6,
      "helpText": "",
      "inputType": "number",
      "isMandatory": true,
      "mandatorySet": false,
      "maxLength": 3,
      "otherProperties": {
         "readOnly":false
      },
      "isVisibleByDefault": true,
      "type": "input",
      "dataValue": "",
      "validations": null
    },
  ]
}
