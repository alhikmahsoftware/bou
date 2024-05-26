import ConfirmDialog from 'primevue/confirmdialog';
import ConfirmationService from 'primevue/confirmationservice';
import { useConfirm } from "primevue/useconfirm";
import { useToast } from "primevue/usetoast";



export function useToastNotification() {
    const toast = useToast();
    
    const showToastNotification = (errorType,summary, detail, time=3000) => {
      toast.add({ severity: errorType, summary: summary, detail: detail, life: time });
    };
  
    return {
        showToastNotification,
    };
}


//color primevue:

//severity: 'success' , severity: 'info',  severity: 'warn', severity: 'error', 

//when use this service please must add this component in page -------   <Toast />