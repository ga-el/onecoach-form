// Extend the Window interface with our custom properties
declare global {
  interface Window {
    toggleRiskAddress: (checkbox: HTMLInputElement) => void;
    showSuccessModal: () => void;
    closeSuccessModal: () => void;
    showNotification: (message: string, type?: 'success' | 'error' | 'warning' | 'info', duration?: number) => void;
  }
}

// Add type definitions for DOM elements
type HTMLElementWithValue = HTMLElement & { value: string };
type HTMLElementWithDisabled = HTMLElement & { disabled: boolean };
type HTMLElementWithStyle = HTMLElement & { style: CSSStyleDeclaration };
type HTMLElementWithChecked = HTMLElement & { checked: boolean };
type HTMLElementWithFiles = HTMLElement & { files: FileList };
type HTMLElementWithReset = HTMLElement & { reset: () => void };
