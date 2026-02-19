import { LightningElement } from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountServiceController.getAllAccounts';

export default class Lwc2 extends LightningElement {

    accounts;
    error;
    connectedCallback(){
        getAllAccounts()
        .then(result => {
            this.accounts = result;
            this.error = undefined;
        })
        .catch(error => {
            this.error = error;
            this.accounts = undefined;
        });
    }

}