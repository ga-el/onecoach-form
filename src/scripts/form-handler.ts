// Import utilities
import { showNotification } from '../utils/notifications';

// Type definitions
interface PostalData {
    [key: string]: {
        colonia: string;
        municipio: string;
        estado: string;
    };
}

// Click effect function
function applyClickEffect(element: HTMLElement | null): void {
    if (!element) return;
    
    element.style.transform = 'scale(0.95)';
    setTimeout(() => {
        if (element) {
            element.style.transform = 'scale(1)';
        }
    }, 150);
}

// Postal code data
const postalData: PostalData = {
    '01000': { colonia: 'Centro', municipio: 'Cuauhtémoc', estado: 'CDMX' },
    '03100': { colonia: 'Del Valle Centro', municipio: 'Benito Juárez', estado: 'CDMX' },
    '44600': { colonia: 'Centro', municipio: 'Guadalajara', estado: 'Jalisco' },
    '64000': { colonia: 'Centro', municipio: 'Monterrey', estado: 'Nuevo León' },
    '44100': { colonia: 'Americana', municipio: 'Guadalajara', estado: 'Jalisco' },
    '11510': { colonia: 'Polanco', municipio: 'Miguel Hidalgo', estado: 'CDMX' }
};

// Initialize form functionality
function initializeForm() {
    // Set current date
    const today = new Date().toISOString().split('T')[0];
    const fechaSolicitud = document.getElementById('fecha-solicitud') as HTMLInputElement;
    if (fechaSolicitud) {
        fechaSolicitud.value = today;
    }
    
    // Initialize postal code autocomplete
    setupPostalCodeAutocomplete();
    
    // Initialize option selection
    setupOptionSelection();
    
    // Setup phone number formatting
    setupPhoneNumberFormatting();
    
    // Setup form validation
    setupFormValidation();
}

// Phone number formatting
function setupPhoneNumberFormatting() {
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    
    phoneInputs.forEach(input => {
        input.addEventListener('input', (e: Event) => {
            const target = e.target as HTMLInputElement;
            let value = target.value.replace(/\D/g, '');
            
            if (value.length <= 12) {
                if (value.startsWith('52') && value.length >= 3) {
                    // Format: (+52) XXX-XXX-XXXX
                    const countryCode = value.substring(0, 2);
                    const areaCode = value.substring(2, 5);
                    const phoneNumber = value.substring(5);
                    const formattedPhoneNumber = `(+${countryCode}) ${areaCode}-${phoneNumber.substring(0, 3)}-${phoneNumber.substring(3)}`;
                    target.value = formattedPhoneNumber;
                }
            }
        });
    });
}

// Form validation
function setupFormValidation() {
    const form = document.getElementById('wizard-form');
    if (!form) return;
    
    form.addEventListener('submit', (e: Event) => {
        e.preventDefault();
        // Add your form validation logic here
        showNotification('Formulario enviado correctamente', 'success');
    });
}

// Postal code autocomplete
function setupPostalCodeAutocomplete(): void {
    const cpInput = document.getElementById('cp') as HTMLInputElement | null;
    const cpRiesgoInput = document.getElementById('cp-riesgo') as HTMLInputElement | null;
    
    if (!cpInput || !cpRiesgoInput) return;
    
    const handlePostalCode = (input: HTMLInputElement, isRisk: boolean): void => {
        input.addEventListener('input', (e: Event) => {
            const target = e.target as HTMLInputElement;
            if (!target) return;
            
            const cp = target.value.trim();
            
            if (cp.length === 5) {
                // Add loading class
                target.classList.add('loading');
                
                // Simulate API call with timeout
                const timer = setTimeout(() => {
                    const data = postalData[cp];
                    
                    if (data) {
                        // Fill address fields
                        const coloniaField = document.getElementById(isRisk ? 'colonia-riesgo' : 'colonia') as HTMLInputElement;
                        const municipioField = document.getElementById(isRisk ? 'municipio-riesgo' : 'municipio') as HTMLInputElement;
                        const estadoField = document.getElementById(isRisk ? 'estado-riesgo' : 'estado') as HTMLInputElement;
                        
                        if (coloniaField) coloniaField.value = data.colonia;
                        if (municipioField) municipioField.value = data.municipio;
                        if (estadoField) estadoField.value = data.estado;
                        
                        showNotification('Dirección completada automáticamente', 'success');
                    } else {
                        showNotification('Código postal no encontrado', 'warning');
                    }
                    
                    // Remove loading class
                    target.classList.remove('loading');
                    clearTimeout(timer);
                }, 500);
            }
        });
    };
    
    // Set up both postal code inputs
    handlePostalCode(cpInput, false);
    handlePostalCode(cpRiesgoInput, true);
}

// Option selection
function setupOptionSelection(): void {
    const optionGroups = document.querySelectorAll<HTMLElement>('.option-group');
    
    optionGroups.forEach((group) => {
        const options = group.querySelectorAll<HTMLElement>('.option');
        
        options.forEach((option) => {
            option.addEventListener('click', (e: Event) => {
                // Remove previous selection in the same group
                options.forEach((opt) => opt.classList.remove('selected'));
                
                // Apply selection
                option.classList.add('selected');
                
                // Update any associated input
                const input = option.querySelector('input');
                if (input) {
                    input.checked = true;
                }
                
                // Apply click effect
                applyClickEffect(option);
            });
        });
    });
}

// Make functions available globally
if (typeof window !== 'undefined') {
    window.applyClickEffect = applyClickEffect;
    
    // Initialize form when DOM is loaded
    document.addEventListener('DOMContentLoaded', initializeForm);
}
