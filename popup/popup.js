import { LightningElement,api } from 'lwc';
import PROJECT_NAME__C_FIELD from '@salesforce/schema/Project__c.Name';
import PROJECTTYPE__C_FIELD from '@salesforce/schema/Project__c.projecttype__c';
import OWNER__C_FIELD from '@salesforce/schema/Project__c.owner__c';
import END_DATE__C_FIELD from '@salesforce/schema/Project__c.end_date__c';
import STATUS__C_FIELD from '@salesforce/schema/Project__c.status__c';
import PRIORITY__C_FIELD from '@salesforce/schema/Project__c.priority__c';
import PROJECT__C_OBJECT from '@salesforce/schema/Project__c';

export default class Popup extends LightningElement {
    @api recordId;
    objectName= PROJECT__C_OBJECT;
    objectFields=[PROJECT_NAME__C_FIELD,PROJECTTYPE__C_FIELD,OWNER__C_FIELD,END_DATE__C_FIELD,STATUS__C_FIELD,PRIORITY__C_FIELD];

    
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
    handleCodeBlockButtonClick() {
        const inputRichText = this.template.querySelector('lightning-input-rich-text');
        let format = inputRichText.getFormat();

        // Set or unset code-block format based on format on current selection
        if (format['code-block']) {
            inputRichText.setFormat({ 'code-block': false });
        } else {
            inputRichText.setFormat({ 'code-block': true });
        }
    }
}