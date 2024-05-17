import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export function vueThreeToast() {
    const showToast = (message, backgroundColor) => {
        if (typeof window !== 'undefined') {
            import('vue3-toastify').then(({ toast }) => {
                toast(message, {
                    position: 'top-right',
                    theme: 'dark',
                    duration: 6,
                    backgroundColor: backgroundColor,
                });
            });
        } else {
            console.warn('vue3-toastify is not supported in this environment.');
        }
    };
    
    return showToast;
}
