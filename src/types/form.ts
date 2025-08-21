// Form data types
export interface PostalData {
    [key: string]: {
        colonia: string;
        municipio: string;
        estado: string;
    };
}

export interface FormField {
    id: string;
    type: string;
    required: boolean;
    value?: string | number | boolean;
    options?: { value: string; label: string }[];
}

export interface FormStep {
    id: number;
    title: string;
    fields: string[];
    completed: boolean;
}

export interface FormState {
    currentStep: number;
    totalSteps: number;
    completedSteps: Set<number>;
    data: Record<string, any>;
}
