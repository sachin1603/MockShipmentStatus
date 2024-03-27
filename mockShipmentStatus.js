/* 
@Description: Getting the tracking Number on the onchange event and sending it to the apex to check the status  
@Author: Sachin Setty 
@Created Date: 03/27/24
@Last Modified by: 
*/

import { LightningElement, track } from 'lwc';
import getShippingStatusLwc from '@salesforce/apex/MockShippingStatusService.getShippingStatusLwc'; 

export default class ShippingStatusChecker extends LightningElement {
    
   //Holding the tracking number entered from UI
    trackingNumber = '';
    //Holding the message retrived from apex
    statusMessage = '';

    //OnChange event to capture the tracking number  
    handleTrackingNumberChange(event) {
        this.trackingNumber = event.target.value;
        console.log('Entering the tracking Number'+this.trackingNumber);
    }

    //OnButton click event
    checkStatus() {
        getShippingStatusLwc({trackingNumber: this.trackingNumber})
            .then(result => {
                this.statusMessage = result;
                console.log('Entering the tracking Number'+this.statusMessage);
            })
            .catch(error => {
                this.statusMessage = 'Error - ' + error.body.message;
                console.log('Entering the tracking Number'+this.statusMessage);
            });
    }
}