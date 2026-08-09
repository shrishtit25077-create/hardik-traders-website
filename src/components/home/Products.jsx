import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2 } from 'lucide-react';

const catalogCategories = [
  { id: 'fasteners', name: 'Fasteners & Fixings' },
  { id: 'hand-tools', name: 'Hand Tools' },
  { id: 'power-tools', name: 'Power Tools' },
  { id: 'pneumatic-tools', name: 'Pneumatic Tools' },
  { id: 'bearings', name: 'Bearings' },
  { id: 'power-transmission', name: 'Power Transmission' },
  { id: 'cutting-tools', name: 'Cutting Tools' },
  { id: 'welding-equipment', name: 'Welding Equipment' },
  { id: 'measuring-instruments', name: 'Measuring Instruments' },
  { id: 'adhesives-chemicals', name: 'Adhesives & Chemicals' },
  { id: 'valves', name: 'Valves' },
  { id: 'pipes-fittings', name: 'Pipes & Fittings' },
  { id: 'electrical-automation', name: 'Electrical & Automation' },
  { id: 'lubrication-tools', name: 'Lubrication Tools' },
  { id: 'safety-equipment', name: 'Safety Equipment' },
  { id: 'abrasives', name: 'Abrasives' },
  { id: 'industrial-chains', name: 'Industrial Chains' }
];

const fullCatalogData = {
  'fasteners': [
    {
      brand: 'Unbrako',
      image: '/products/unbrako-category.png',
      products: ['Socket Head Cap Screws', 'Hex Bolts', 'Grub Screws', 'Anchor Fasteners', 'High-Tensile Studs', 'Spring Washers']
    },
    {
      brand: 'TVS',
      image: '/products/tvs-category.png',
      products: ['High Tensile Fasteners', 'Hex Head Bolts', 'Socket Screws', 'Heavy Duty Nuts']
    },
    {
      brand: 'LPS (Lakshmi Precision)',
      image: '/products/lps-category.png',
      products: ['Industrial Fasteners', 'Studs & Nuts', 'Custom Precision Bolts', 'Threaded Rods']
    },
    {
      brand: 'Fischer',
      image: '/products/fischer-category.png',
      products: ['Nylon Plugs', 'Heavy Duty Steel Anchors', 'Chemical Fixings', 'Frame Fixings']
    }
  ],
  'hand-tools': [
    {
      brand: 'Taparia',
      image: '/products/taparia-category.png',
      products: ['Spanners & Wrenches', 'Pliers & Cutters', 'Screwdrivers', 'Socket Sets', 'Hammers & Chisels']
    },
    {
      brand: 'Stanley',
      image: '/products/stanley-category.png',
      products: ['Measuring Tapes', 'Utility Knives', 'Tool Storage Boxes', 'Mechanical Hand Tools']
    },
    {
      brand: 'Grip-On',
      image: '/products/grip-on-category.png',
      products: ['Locking Pliers', 'C-Clamps', 'Industrial Pipe Clamps', 'Sheet Metal Grippers']
    },
    {
      brand: 'Groz',
      image: '/products/groz-category.png',
      products: ['Precision Hand Tools', 'Bench Vices', 'Anvils & Striking Tools', 'Mechanic Tool Sets']
    }
  ],
  'power-tools': [
    {
      brand: 'Bosch',
      image: '/products/bosch-category.png',
      products: ['Hammer Drills', 'Angle Grinders', 'Cordless Drivers', 'Demolition Hammers']
    },
    {
      brand: 'Makita',
      image: '/products/makita-category.png',
      products: ['Circular Saws', 'Impact Wrenches', 'Cordless Combo Sets', 'Rotary Hammers']
    },
    {
      brand: 'Hilti',
      image: '/products/hilti-category.png',
      products: ['Rotary Drills', 'Gas Actuated Fastening', 'Diamond Core Cutters', 'Slitting Tools']
    },
    {
      brand: 'DeWalt',
      image: '/products/dewalt-category.png',
      products: ['Cordless Impact Drivers', 'Heavy Duty Grinders', 'Table Saws', 'Cut-Off Machines']
    }
  ],
  'pneumatic-tools': [
    {
      brand: 'Festo',
      image: '/products/pneumatics-category.jpg',
      products: ['Pneumatic Cylinders', 'Solenoid Valves', 'FRL Filter Units', 'Air Tubing & Fittings']
    },
    {
      brand: 'SMC',
      image: '/products/smc-category.png',
      products: ['Air Fittings & Tubing', 'Speed Controllers', 'Manifolds', 'Air Filters & Dryers']
    },
    {
      brand: 'Janatics',
      image: '/products/janatics-category.png',
      products: ['Air Cylinders', 'Directional Control Valves', 'Pneumatic Accessories', 'Air Blow Guns']
    },
    {
      brand: 'Chicago Pneumatic',
      image: '/products/chicago-category.png',
      products: ['Air Impact Wrenches', 'Pneumatic Grinders', 'Air Riveters', 'Chipping Hammers']
    }
  ],
  'bearings': [
    {
      brand: 'SKF',
      image: '/products/bearings-category.png',
      products: ['Ball Bearings', 'Tapered Roller Bearings', 'Spherical Roller Bearings', 'Needle Bearings']
    },
    {
      brand: 'FAG',
      image: '/products/fag-category.png',
      products: ['Spherical Roller Bearings', 'Cylindrical Roller Bearings', 'Precision Bearings', 'Thrust Bearings']
    },
    {
      brand: 'NTN',
      image: '/products/ntn-category.png',
      products: ['High-Speed Bearings', 'Pillow Block Units', 'Needle Roller Bearings', 'Tapered Bearings']
    },
    {
      brand: 'NBC',
      image: '/products/nbc-category.png',
      products: ['Deep Groove Ball Bearings', 'Automotive Bearings', 'Taper Roller Bearings', 'Spherical Bearings']
    },
    {
      brand: 'Timken',
      image: '/products/timken-category.png',
      products: ['Tapered Roller Bearings', 'Heavy Duty Bearings', 'Thrust Ball Bearings', 'Housed Units']
    }
  ],
  'power-transmission': [
    {
      brand: 'Fenner',
      image: '/products/pulleys-vbelts-category.png',
      products: ['Industrial V-Belts', 'Timing Pulleys', 'Flexible Couplings', 'Taper Lock Bushes']
    },
    {
      brand: 'Gates',
      image: '/products/gates-category.png',
      products: ['High-Capacity V-Belts', 'Synchronous Timing Belts', 'Industrial Transmission Hoses']
    },
    {
      brand: 'Lovejoy',
      image: '/products/lovejoy-category.png',
      products: ['Jaw Couplings', 'Universal Joints', 'Grid Couplings', 'Shaft Collars']
    },
    {
      brand: 'Rathi',
      image: '/products/rathi-category.png',
      products: ['Flexible Pin Bush Couplings', 'Star Couplings', 'Tyre Couplings', 'Gear Couplings']
    }
  ],
  'cutting-tools': [
    {
      brand: 'Sandvik Coromant',
      image: '/products/sandvik-category.png',
      products: ['Carbide Turning Inserts', 'Milling Cutters', 'Drilling Tools', 'Boring Tools']
    },
    {
      brand: 'Addison',
      image: '/products/addison-category.png',
      products: ['HSS Twist Drills', 'End Mills', 'Reamers', 'Milling Cutters', 'Taps & Dies']
    },
    {
      brand: 'Miranda',
      image: '/products/miranda-category.png',
      products: ['HSS Tool Bits', 'Hacksaw Blades', 'Metal Cutting Saw Blades', 'Parting Blades']
    },
    {
      brand: 'TaeguTec',
      image: '/products/taegutec-category.png',
      products: ['Milling Inserts', 'Threading Inserts', 'Solid Carbide Drills', 'Grooving Tools']
    }
  ],
  'welding-equipment': [
    {
      brand: 'Esab',
      image: '/products/esab-category.png',
      products: ['MIG/TIG Welding Machines', 'Welding Electrodes', 'Flux Cored Wires', 'Plasma Cutters']
    },
    {
      brand: 'Ador Welding',
      image: '/products/ador-category.png',
      products: ['Manual Metal Arc Electrodes', 'Welding Inverters', 'Gas Cutting Torches & Regulators']
    },
    {
      brand: 'Lincoln Electric',
      image: '/products/lincoln-category.png',
      products: ['Welding Generators', 'Submerged Arc Flux', 'TIG Welding Rods', 'Wire Feeders']
    }
  ],
  'measuring-instruments': [
    {
      brand: 'Mitutoyo',
      image: '/products/mitutoyo-category.png',
      products: ['Vernier Calipers', 'Outside Micrometers', 'Dial Indicators', 'Height Gauges']
    },
    {
      brand: 'Baker',
      image: '/products/baker-category.png',
      products: ['Dial Gauges', 'Plug & Ring Gauges', 'Digital Vernier Calipers', 'Thread Gauges']
    },
    {
      brand: 'Insize',
      image: '/products/insize-category.png',
      products: ['Electronic Calipers', 'Micrometer Sets', 'Digital Angle Protractors', 'Thickness Gauges']
    }
  ],
  'adhesives-chemicals': [
    {
      brand: 'Loctite',
      image: '/products/loctite-category.png',
      products: ['Threadlockers (243/270)', 'Retaining Compounds', 'RTV Silicones', 'Instant Adhesives']
    },
    {
      brand: 'Anabond',
      image: '/products/anabond-category.png',
      products: ['Anaerobic Adhesives', 'Gasket Makers', 'Epoxy Sealants', 'Thread Sealants']
    },
    {
      brand: 'Pidilite',
      image: '/products/pidilite-category.png',
      products: ['Fevicol Industrial Adhesives', 'M-Seal Epoxy Putty', 'Waterproofing Chemicals']
    },
    {
      brand: '3M',
      image: '/products/3m-adhesives-category.png',
      products: ['Industrial Tapes (VHB)', 'Structural Adhesives', 'Spray Adhesives', 'Protective Coatings']
    }
  ],
  'valves': [
    {
      brand: 'Audco',
      image: '/products/audco-category.png',
      products: ['Ball Valves', 'Butterfly Valves', 'Plug Valves', 'Check Valves']
    },
    {
      brand: 'Leader',
      image: '/products/leader-category.png',
      products: ['Cast Steel Gate Valves', 'Globe Valves', 'Y-Strainers', 'Check Valves']
    },
    {
      brand: 'Forbes Marshall',
      image: '/products/forbes-category.png',
      products: ['Steam Traps', 'Pressure Reducing Valves', 'Control Valves', 'Safety Relief Valves']
    },
    {
      brand: 'L&T Valves',
      image: '/products/lnt-valves-category.png',
      products: ['Forged Steel Gate Valves', 'Trunnion Mounted Ball Valves', 'Globe Valves']
    }
  ],
  'pipes-fittings': [
    {
      brand: 'Tata Pipes',
      image: '/products/tata-category.png',
      products: ['MS Pipes (Mild Steel)', 'GI Galvanized Pipes', 'Structural Hollow Sections']
    },
    {
      brand: 'Jindal',
      image: '/products/jindal-category.png',
      products: ['Seamless Steel Pipes', 'ERW Pipes', 'Pipe Fittings & Elbows', 'Steel Flanges']
    },
    {
      brand: 'Gates',
      image: '/products/gates-category.png',
      products: ['Hydraulic Hose Pipes', 'High-Pressure Hoses', 'Crimped Hose Fittings']
    },
    {
      brand: 'Supreme',
      image: '/products/supreme-category.png',
      products: ['UPVC / CPVC Industrial Pipes', 'Pipe Connectors', 'Pressure Pipes & Fittings']
    }
  ],
  'electrical-automation': [
    {
      brand: 'Schneider',
      image: '/products/schneider-category.png',
      products: ['Air Circuit Breakers (ACB)', 'Contactors & Overload Relays', 'Switchgear Units', 'MCBs & MCCBs']
    },
    {
      brand: 'Siemens',
      image: '/products/siemens-category.png',
      products: ['PLCs & HMI Panels', 'AC Drives & VFDs', 'Motor Protections', 'Power Contactors']
    },
    {
      brand: 'L&T Electrical',
      image: '/products/lnt-electrical-category.png',
      products: ['Switchgear Components', 'Molded Case Circuit Breakers', 'Motor Starters', 'Push Buttons']
    },
    {
      brand: 'ABB',
      image: '/products/abb-category.png',
      products: ['Variable Frequency Drives', 'Industrial Contactors', 'Soft Starters', 'Control Relays']
    }
  ],
  'lubrication-tools': [
    {
      brand: 'Groz',
      image: '/products/groz-lubrication-category.png',
      products: ['Heavy-Duty Grease Guns', 'Oil Transfer Pumps', 'Hose Reels', 'Waste Oil Drainers']
    },
    {
      brand: 'Pressol',
      image: '/products/pressol-category.png',
      products: ['Lever Action Grease Guns', 'Flexible Oil Cans', 'Measuring Jugs']
    },
    {
      brand: 'Lincoln',
      image: '/products/lincoln-lubrication-category.png',
      products: ['Pneumatic Grease Pumps', 'Automatic Lubrication Systems', 'Metering Valves']
    }
  ],
  'safety-equipment': [
    {
      brand: '3M',
      image: '/products/3m-safety-category.png',
      products: ['N95 Respirators', 'Protective Eyewear', 'Ear Plugs & Muffs', 'Disposable Coveralls']
    },
    {
      brand: 'Honeywell',
      image: '/products/honeywell-safety-category.png',
      products: ['Safety Helmets', 'Full Body Harnesses', 'Steel-Toe Boots', 'Cut-Resistant Gloves']
    },
    {
      brand: 'Karam',
      image: '/products/karam-category.png',
      products: ['Fall Protection Harnesses', 'Safety Lanyards', 'Anchorage Connectors', 'Safety Helmets']
    },
    {
      brand: 'Udyogi',
      image: '/products/udyogi-category.png',
      products: ['Industrial Safety Goggles', 'Face Shields', 'Chemical Protective Gloves', 'Reflective Vests']
    }
  ],
  'abrasives': [
    {
      brand: 'Norton (Saint-Gobain)',
      image: '/products/norton-category.png',
      products: ['Grinding Wheels', 'Cutting Discs', 'Flap Discs', 'Sanding Sheets & Belts']
    },
    {
      brand: 'CUMI (Carborundum)',
      image: '/products/cumi-category.png',
      products: ['Bonded Abrasive Wheels', 'Coated Abrasive Belts', 'Cut-Off Wheels', 'Finishing Wheels']
    },
    {
      brand: 'Pferd',
      image: '/products/pferd-category.png',
      products: ['Precision Steel Files', 'Mounted Points', 'Wire Wheel Brushes', 'Grinding Discs']
    }
  ],
  'industrial-chains': [
    {
      brand: 'Diamond (TIDC)',
      image: '/products/diamond-chains-category.png',
      products: ['Industrial Roller Chains', 'Power Transmission Chains', 'Conveyor Chains']
    },
    {
      brand: 'Renold',
      image: '/products/renold-category.png',
      products: ['Heavy Duty Roller Chains', 'Leaf Chains', 'Stainless Steel Chains', 'Sprocket Wheels']
    },
    {
      brand: 'Elecon',
      image: '/products/elecon-category.png',
      products: ['Material Handling Chains', 'Elevator Chains', 'Industrial Sprockets', 'Drive Chains']
    }
  ]
};

function BrandCard({ brandData }) {
  return (
    <div
      className="
        relative flex flex-col overflow-hidden group rounded-[22px] border border-slate-100 bg-white/95 backdrop-blur-md h-full max-w-[360px] w-full mx-auto
        transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-blue-500/30 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)]
      "
    >
      {/* Brand logo overlay tag (floating badge) */}
      <div className="absolute top-3.5 left-3.5 px-3 py-1 bg-blue-600/90 text-white text-[9.5px] font-black uppercase tracking-widest rounded-md backdrop-blur-sm shadow-sm z-10 transition-transform duration-300 group-hover:scale-105">
        {brandData.brand}
      </div>

      {/* Product Image Area - compact h-[185px] with object-contain */}
      <div className="h-[185px] w-full overflow-hidden relative border-b border-slate-100/90 flex-shrink-0 rounded-t-[22px] bg-[#F8FAFC] p-3.5 flex items-center justify-center">
        <img
          src={brandData.image}
          alt={brandData.brand}
          loading="lazy"
          className="max-w-full max-h-full object-contain transition-transform duration-[500ms] group-hover:scale-105 object-center"
        />
        {/* Subtle bottom gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-100/20 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Content Area */}
      <div className="p-5 flex flex-col justify-between flex-grow">
        <div>
          {/* Brand Title */}
          <h4 className="font-black text-slate-900 text-[18px] uppercase tracking-wider leading-none mb-3">
            {brandData.brand}
          </h4>

          {/* Product Types listed as clean capsule pills */}
          <div className="flex flex-col gap-1.5">
            {brandData.products.map((prod) => (
              <div 
                key={prod}
                className="px-3.5 py-2 bg-[#E6F0FA] border border-blue-100/30 text-blue-900 text-[11px] font-extrabold uppercase tracking-wider rounded-full text-left transition-colors"
              >
                {prod}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('fasteners');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const activeBrands = fullCatalogData[activeCategory] || [];

  return (
    <section id="products" className="bg-[#F8FAFC] py-10 border-t border-black/[0.04] relative z-20">
      {/* Outer Container constrained to max-w-[1180px] */}
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <CheckCircle2 size={13} className="text-blue-600" /> Authorized Industrial Distributor
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight mb-2">
            Our Industrial Products
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed font-medium">
            Select an industrial category below to explore authorized brands and technical product components.
          </p>
        </motion.div>

        {/* Category Pill Selector (Multi-Row Wrapping Layout) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-8 w-full py-1">
          {catalogCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 sm:px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider rounded-full transition-all duration-300 select-none ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-[1.02]'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80 hover:border-slate-300'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Compact 3-Column Centered Product Card Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center auto-rows-fr"
          >
            {activeBrands.map((item) => (
              <BrandCard 
                key={item.brand} 
                brandData={item} 
              />
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
