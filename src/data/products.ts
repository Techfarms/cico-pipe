
import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "pvc-pressure-110",
    name: "PVC Pressure Pipe 110mm",
    category: "pvc",
    image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=400&h=300&fit=crop",
    shortDescription: "High-quality PVC pressure pipe ideal for water distribution systems.",
    description: "Our 110mm PVC pressure pipes are engineered for superior performance in municipal and residential water distribution. These pipes offer excellent chemical resistance, long-term durability, and cost-effective installation. Manufactured to international standards with stringent quality control.",
    specifications: {
      diameter: "110mm",
      pressure: "6 bar, 9 bar, 12 bar, 16 bar",
      material: "uPVC (Unplasticized Polyvinyl Chloride)",
      standard: "ISO 4422, ASTM D2241, BS EN 1452",
      application: "Water distribution, irrigation, industrial",
      color: "Blue, Grey",
      connection: "Solvent cement welding, rubber ring joint",
      length: "6m standard lengths",
      wallThickness: "3.2mm - 10.0mm (varies by pressure class)"
    },
    features: [
      "Corrosion and chemical resistant",
      "Long service life (50+ years)",
      "Smooth internal surface for optimal flow",
      "UV resistant formulation",
      "Easy installation and maintenance",
      "Cost-effective solution",
      "Environmentally friendly and recyclable",
      "Lightweight yet durable"
    ]
  },
  {
    id: "pvc-pressure-160",
    name: "PVC Pressure Pipe 160mm",
    category: "pvc",
    image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=400&h=300&fit=crop",
    shortDescription: "Medium diameter PVC pressure pipe for commercial water systems.",
    description: "The 160mm PVC pressure pipe is perfect for commercial and industrial water distribution applications. Built with high-grade uPVC material, these pipes ensure reliable performance under varying pressure conditions with minimal maintenance requirements.",
    specifications: {
      diameter: "160mm",
      pressure: "6 bar, 9 bar, 12 bar, 16 bar",
      material: "uPVC (Unplasticized Polyvinyl Chloride)",
      standard: "ISO 4422, ASTM D2241, BS EN 1452",
      application: "Commercial water systems, fire fighting lines",
      color: "Blue, Grey",
      connection: "Solvent cement welding, rubber ring joint",
      length: "6m standard lengths",
      wallThickness: "4.7mm - 14.6mm (varies by pressure class)"
    },
    features: [
      "High burst strength and pressure rating",
      "Excellent chemical resistance",
      "Smooth bore for maximum flow efficiency",
      "Impact resistant in normal conditions",
      "Non-toxic and safe for potable water",
      "Maintenance-free operation",
      "Quick and easy installation",
      "Cost-effective lifecycle"
    ]
  },
  {
    id: "pvc-pressure-200",
    name: "PVC Pressure Pipe 200mm",
    category: "pvc",
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=400&h=300&fit=crop",
    shortDescription: "Large diameter PVC pressure pipe for main distribution lines.",
    description: "Our 200mm PVC pressure pipes are designed for main water distribution networks and large-scale irrigation systems. These pipes combine strength, durability, and cost-effectiveness, making them ideal for municipal and agricultural applications.",
    specifications: {
      diameter: "200mm",
      pressure: "6 bar, 9 bar, 12 bar, 16 bar",
      material: "uPVC (Unplasticized Polyvinyl Chloride)",
      standard: "ISO 4422, ASTM D2241, BS EN 1452",
      application: "Main distribution lines, large irrigation",
      color: "Blue, Grey",
      connection: "Rubber ring joint, flanged connections",
      length: "6m standard lengths",
      wallThickness: "5.9mm - 18.2mm (varies by pressure class)"
    },
    features: [
      "Superior hydraulic performance",
      "Excellent joint integrity",
      "Long-term pressure stability",
      "Resistant to soil stress and chemicals",
      "Low installation and maintenance costs",
      "Smooth internal walls prevent scaling",
      "Flexible jointing system",
      "Proven track record in harsh conditions"
    ]
  },
  {
    id: "pvc-sewerage-110",
    name: "PVC Sewerage Pipe 110mm",
    category: "pvc",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=400&h=300&fit=crop",
    shortDescription: "Durable PVC pipe for residential sewerage and drainage applications.",
    description: "Specially designed for sewerage and stormwater drainage, our 110mm PVC sewerage pipes provide excellent flow characteristics and chemical resistance. These pipes are engineered to handle domestic and light commercial wastewater applications with long-lasting performance.",
    specifications: {
      diameter: "110mm",
      pressure: "SN4 (4 kN/m²), SN8 (8 kN/m²)",
      material: "uPVC (Unplasticized Polyvinyl Chloride)",
      standard: "ISO 4435, EN 1401, ASTM F679",
      application: "Sewerage, stormwater drainage, underground",
      color: "Orange, Grey, Brown",
      connection: "Rubber ring joint system",
      length: "3m, 6m standard lengths",
      wallThickness: "3.2mm - 4.2mm (varies by stiffness class)"
    },
    features: [
      "Excellent chemical resistance to sewage",
      "Smooth internal surface for self-cleaning",
      "Root intrusion resistant joints",
      "High ring stiffness for ground loads",
      "Abrasion resistant interior",
      "Long service life (100+ years)",
      "Easy installation and jointing",
      "Environmentally sustainable"
    ]
  },
  {
    id: "pvc-sewerage-160",
    name: "PVC Sewerage Pipe 160mm",
    category: "pvc",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
    shortDescription: "Medium diameter sewerage pipe for commercial drainage systems.",
    description: "The 160mm PVC sewerage pipe is ideal for commercial buildings and medium-scale drainage networks. With superior chemical resistance and structural integrity, these pipes ensure reliable wastewater management for decades.",
    specifications: {
      diameter: "160mm",
      pressure: "SN4 (4 kN/m²), SN8 (8 kN/m²)",
      material: "uPVC (Unplasticized Polyvinyl Chloride)",
      standard: "ISO 4435, EN 1401, ASTM F679",
      application: "Commercial sewerage, industrial drainage",
      color: "Orange, Grey, Brown",
      connection: "Rubber ring joint system",
      length: "3m, 6m standard lengths",
      wallThickness: "4.7mm - 6.2mm (varies by stiffness class)"
    },
    features: [
      "High structural integrity under load",
      "Resistant to hydrogen sulfide attack",
      "Optimized flow characteristics",
      "Leak-proof joint system",
      "No corrosion or scaling issues",
      "Easy handling and installation",
      "Cost-effective maintenance",
      "Suitable for aggressive environments"
    ]
  },
  {
    id: "pvc-sewerage-200",
    name: "PVC Sewerage Pipe 200mm",
    category: "pvc",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
    shortDescription: "Large diameter sewerage pipe for main collection systems.",
    description: "Our 200mm PVC sewerage pipes are engineered for main sewerage collection networks and large commercial facilities. These pipes offer exceptional durability and hydraulic efficiency for critical wastewater infrastructure applications.",
    specifications: {
      diameter: "200mm",
      pressure: "SN4 (4 kN/m²), SN8 (8 kN/m²)",
      material: "uPVC (Unplasticized Polyvinyl Chloride)",
      standard: "ISO 4435, EN 1401, ASTM F679",
      application: "Main sewerage lines, trunk sewers",
      color: "Orange, Grey, Brown",
      connection: "Rubber ring joint system",
      length: "6m standard lengths",
      wallThickness: "5.9mm - 7.7mm (varies by stiffness class)"
    },
    features: [
      "Maximum hydraulic efficiency",
      "Superior chemical and abrasion resistance",
      "Excellent structural performance",
      "Reliable leak-proof joints",
      "Long-term dimensional stability",
      "Minimal infiltration and exfiltration",
      "Reduced pumping and maintenance costs",
      "Proven performance in critical applications"
    ]
  }
];
