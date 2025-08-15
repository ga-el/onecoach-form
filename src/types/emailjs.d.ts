// EmailJS Type Declarations
declare global {
  interface Window {
    emailjs: {
      init: (publicKey: string) => void;
      send: (serviceId: string, templateId: string, params: Record<string, any>) => Promise<any>;
    };
  }
}

export {};
