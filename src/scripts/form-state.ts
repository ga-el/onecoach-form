import type { FormState } from '../types/form';
import { showNotification } from '../utils/notifications';

// Initialize form state
const formState: FormState = {
    currentStep: 1,
    totalSteps: 6,
    completedSteps: new Set<number>(),
    data: {}
} as const;

// Initialize form navigation
export function initializeFormNavigation() {
    // Make navigation functions available globally
    window.nextStep = nextStep;
    window.prevStep = prevStep;
    window.validateCurrentStep = validateCurrentStep;
    
    // Set up event listeners for navigation buttons
    document.querySelectorAll('[data-next-step]').forEach(button => {
        button.addEventListener('click', nextStep);
    });
    
    document.querySelectorAll('[data-prev-step]').forEach(button => {
        button.addEventListener('click', prevStep);
    });
    
    // Set up form submission
    const form = document.getElementById('wizard-form') as HTMLFormElement;
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            submitForm();
        });
    }
}

// Navigation functions
function nextStep() {
    if (validateCurrentStep()) {
        formState.completedSteps.add(formState.currentStep);
        formState.currentStep = Math.min(formState.currentStep + 1, formState.totalSteps);
        updateProgress();
    }
}

function prevStep() {
    formState.currentStep = Math.max(formState.currentStep - 1, 1);
    updateProgress();
}

// Form validation
function validateCurrentStep(): boolean {
    const currentStepElement = document.querySelector(`.form-step[data-step="${formState.currentStep}"]`);
    if (!currentStepElement) return false;
    
    const requiredFields = currentStepElement.querySelectorAll<HTMLInputElement>('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.classList.add('error');
            showNotification(`Por favor completa el campo ${field.name}`, 'error');
        } else {
            field.classList.remove('error');
        }
    });
    
    return isValid;
}

// Update progress indicator
function updateProgress() {
    const progress = (formState.completedSteps.size / formState.totalSteps) * 100;
    const progressBar = document.querySelector('.progress-bar') as HTMLElement;
    if (progressBar) {
        progressBar.style.width = `${progress}%`;
    }
    
    // Update active step indicator
    document.querySelectorAll('.step-indicator').forEach((indicator, index) => {
        const stepNumber = index + 1;
        if (stepNumber === formState.currentStep) {
            indicator.classList.add('active');
        } else if (stepNumber < formState.currentStep) {
            indicator.classList.add('completed');
            indicator.classList.remove('active');
        } else {
            indicator.classList.remove('active', 'completed');
        }
    });
    
    // Update form steps visibility
    document.querySelectorAll('.form-step').forEach(step => {
        const stepNumber = parseInt(step.getAttribute('data-step') || '0', 10);
        if (stepNumber === formState.currentStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
}

// Form submission
function submitForm() {
    if (validateCurrentStep()) {
        // Show success message
        showNotification('Formulario enviado correctamente', 'success');
        
        // You can add form submission logic here
        // For example, collect all form data and send it to a server
        const formData = new FormData(document.getElementById('wizard-form') as HTMLFormElement);
        console.log('Form data:', Object.fromEntries(formData.entries()));
        
        // Reset form after submission
        // form.reset();
    }
}

// Initialize form state when DOM is loaded
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        initializeFormNavigation();
        updateProgress();
    });
}
