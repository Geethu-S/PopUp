import { LightningElement , track ,api} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class Model extends LightningElement {
    @track customFormModal = false;
    @api recordId;
    @api myRecordId;
    redirect = true;
    resetpage = true;
 @api objectApiName;
   objectApiName='Project__c';
   
    
    customShowModalPopup() {            
        this.customFormModal = true;
    }
 
    customHideModalPopup() {    
        
        this.customFormModal = false;
    }
    

    get encryptedToken() {
        //use apex to get
    }

    get acceptedFormats() {
        return ['.pdf', '.png'];
    }

    handleUploadFinished(event) {
        // Get the list of uploaded files
        const uploadedFiles = event.detail.Files;
        alert("No. of files uploaded : " + uploadedFiles.length);
    }
   
    
    handleCancel(){
        this.customFormModal=false;
    }
    handleSave(){
        this.template.querySelector('lightning-record-edit-form').submit();
        this.customFormModal = false;
        const evt = new ShowToastEvent({
            title: 'Project Created',
            message: 'New Project has been added Successfully',
            variant: 'success',
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
      }
      SaveAndNew() {
       this.redirect = false;
       this.template.querySelector('lightning-record-edit-form').submit(this.Fields);
       this.resetpage = true;
       this.handleReset();
    }
    
    handleReset(event) {
       // Might be possible to use this.fields instead of a selector
       const inputFields = this.template.querySelectorAll(
           'lightning-input-field'
       );
       if (inputFields) {
           inputFields.forEach(field => {
               field.reset();
           });
       }
    }
}

