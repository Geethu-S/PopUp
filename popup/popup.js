import { LightningElement,api } from 'lwc';

export default class Popup extends LightningElement {
    @api recordId;
    
    modalPopUpToggleFlag = false;
  
      handlePopup(){
          this.modalPopUpToggleFlag = true;
      }
  
      handleSkip(){
          this.modalPopUpToggleFlag = false;
      }
      customHideModalPopup(){
        this.modalPopUpToggleFlag = false;
      }

  
      @api myRecordId;

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
        this.modalPopUpToggleFlag=false;
    }

      handleSave() {
        this.template.querySelector('lightning-record-edit-form').submit(this.fields);
    }
    SaveAndNew() {
        handleSave();
        handleReset();
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