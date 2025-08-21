// Extend the Window interface to include our custom functions
declare interface Window {
    // Form navigation
    nextStep?: () => void;
    prevStep?: () => void;
    
    // Form utilities
    toggleRiskAddress?: (checkbox: HTMLInputElement) => void;
    showNotification?: (message: string, type?: 'success' | 'error' | 'warning' | 'info', duration?: number) => void;
    applyClickEffect?: (element: HTMLElement | null) => void;
    
    // Form validation
    validateCurrentStep?: () => boolean;
    
    // File handling
    handleFileSelect?: (event: Event) => void;
    removeFile?: (button: HTMLElement) => void;
    
    // Form submission
    submitForm?: () => void;
    
    // Address handling
    handlePostalCode?: (input: HTMLInputElement, isRisk: boolean) => void;
}
