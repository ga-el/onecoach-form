// Global type declarations
declare global {
    interface Window {
        showNotification: (message: string, type?: 'success' | 'error' | 'warning' | 'info', duration?: number) => void;
        applyClickEffect: (element: HTMLElement | null) => void;
    }
}

export {}; // This file needs to be a module
