
export interface Product {
  id: string;
  name: string;
  category: 'hdpe' | 'pvc' | 'ppr';
  image: string;
  description: string;
  shortDescription: string;
  specifications: {
    diameter: string;
    pressure: string;
    material: string;
    standard: string;
    application: string;
    [key: string]: string;
  };
  features: string[];
}
