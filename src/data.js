export const reactorData = [
  { id: 1, name: "Fukushima Daiichi", type: "Boiling Water Reactor", status: "Decommissioning", location: [37.4217, 141.0327], output: "0 MW" },
  { id: 2, name: "Chernobyl", type: "RBMK-1000", status: "Sheltered", location: [51.3890, 30.0970], output: "0 MW" },
  { id: 3, name: "Three Mile Island", type: "Pressurized Water Reactor", status: "Decommissioning", location: [40.1500, -76.6500], output: "0 MW" },
  { id: 4, name: "Oconee Nuclear Station", type: "Pressurized Water Reactor", status: "Operational", location: [34.7400, -81.7100], output: "2,640 MW" },
  { id: 5, name: "Palisades Nuclear Plant", type: "Pressurized Water Reactor", status: "Decommissioning", location: [42.2000, -86.3600], output: "0 MW" },
];

export const energyComparison = {
  labels: ['Coal', 'Natural Gas', 'Nuclear', 'Wind', 'Solar'],
  datasets: [
    {
      label: 'Global Energy Mix (%)',
      data: [27, 22, 10, 7, 3],
      backgroundColor: ['#555', '#f59e0b', '#10b981', '#3b82f6', '#fbbf24'],
    },
  ],
};


// ... existing data ...

// ADD THIS TO data.js
export const nuclearEducation = [
  {
    id: 1,
    title: "What is Nuclear Energy?",
    icon: "⚛️",
    content: "Nuclear energy is the energy released from the nucleus of an atom. It can be released through nuclear fission (splitting atoms) or nuclear fusion (combining atoms). Nuclear power plants use fission to generate electricity.",
    details: "In nuclear fission, a neutron strikes the nucleus of a uranium-235 atom, causing it to split into two smaller atoms, releasing energy and more neutrons. These neutrons can then strike other uranium atoms, creating a chain reaction. This process releases a tremendous amount of heat, which is used to produce steam that drives turbines to generate electricity."
  },
  {
    id: 2,
    title: "How Nuclear Reactors Work",
    icon: "⚡",
    content: "Nuclear reactors control the fission process to produce heat, which is converted into electricity through a series of steps.",
    details: "1.Fuel Assembly: Uranium fuel rods are placed in the reactor core. 2.Control Rods: Absorb neutrons to control the reaction rate. 3. Coolant: Water or gas circulates to remove heat. 4.Steam Generator: Heat converts water to steam. 5.Turbine: Steam spins the turbine. 6.Generator: Turbine spins the generator to produce electricity. 7.Condenser: Steam is cooled back to water and recycled."
  },
  {
    id: 3,
    title: "Types of Nuclear Reactors",
    icon: "🏭",
    content: "There are several types of nuclear reactors, each with unique designs and applications.",
    details: "  Pressurized Water Reactor (PWR)  : Most common type. Uses two water loops.   Boiling Water Reactor (BWR)  : Water boils directly in the reactor.   Heavy Water Reactor (HWR)  : Uses deuterium oxide as coolant.   Fast Breeder Reactor  : Produces more fuel than it consumes.   Small Modular Reactor (SMR)  : Smaller, factory-built reactors."
  },
  {
    id: 4,
    title: "Nuclear Fuel Cycle",
    icon: "🔄",
    content: "The nuclear fuel cycle describes the series of industrial processes involved in the production of electricity from nuclear fission.",
    details: "  Mining  : Uranium ore is extracted from the ground.   Milling  : Ore is crushed and processed to extract uranium.   Conversion  : Uranium oxide is converted to uranium hexafluoride gas.   Enrichment  : Uranium-235 concentration is increased.   Fuel Fabrication  : Fuel rods are manufactured.   Reactor Operation  : Fuel is used in the reactor.   Spent Fuel Storage  : Used fuel is stored.   Reprocessing  : Some countries recycle spent fuel."
  }
];

export const historicalIncidents = [
  {
    id: 1,
    name: "Chernobyl",
    year: 1986,
    location: "Ukraine",
    type: "Reactor Meltdown",
    severity: "Level 7 (Major)",
    casualties: "Estimated 4,000-90,000 deaths",
    description: "The Chernobyl disaster was the worst nuclear power plant accident in history. A flawed reactor design combined with operator errors led to an explosion and fire that released massive amounts of radioactive material into the atmosphere.",
    lessons: "Improved reactor design, better safety protocols, international cooperation on nuclear safety."
  },
  {
    id: 2,
    name: "Fukushima Daiichi",
    year: 2011,
    location: "Japan",
    type: "Meltdown",
    severity: "Level 7 (Major)",
    casualties: "No direct deaths from radiation",
    description: "A massive earthquake and tsunami disabled the cooling systems of three reactors, leading to meltdowns and hydrogen explosions. The disaster forced the evacuation of over 150,000 people.",
    lessons: "Improved tsunami protection, backup power systems, emergency response planning."
  },
  {
    id: 3,
    name: "Three Mile Island",
    year: 1979,
    location: "USA",
    type: "Partial Meltdown",
    severity: "Level 5 (Accident with Wider Risk)",
    casualties: "No direct deaths",
    description: "A combination of mechanical failures and operator errors led to a partial meltdown of the reactor core. No significant radiation release occurred, but it caused widespread public concern.",
    lessons: "Improved operator training, better emergency procedures, enhanced safety systems."
  },
  {
    id: 4,
    name: "Kyshtym",
    year: 1957,
    location: "Soviet Union",
    type: "Waste Storage Explosion",
    severity: "Level 6 (Major)",
    casualties: "Estimated 200-1,000 deaths",
    description: "A waste storage tank explosion at the Mayak nuclear facility released radioactive material over a large area. The incident was kept secret for decades.",
    lessons: "Better waste storage protocols, transparency in nuclear operations."
  }
];

export const safetyInformation = [
  {
    id: 1,
    title: "Radiation Protection",
    icon: "🛡️",
    content: "Radiation protection is based on three principles: time, distance, and shielding.",
    details: "  Time  : Minimize time spent near radiation sources.   Distance  : Maximize distance from radiation sources (inverse square law).   Shielding  : Use appropriate materials (lead, concrete, water) to block radiation.   Monitoring  : Personal dosimeters track exposure levels."
  },
  {
    id: 2,
    title: "Safety Systems",
    icon: "🔒",
    content: "Modern nuclear reactors have multiple redundant safety systems.",
    details: "  Emergency Core Cooling System (ECCS)  : Provides cooling during accidents.   Containment Structure  : Reinforced concrete and steel to contain radiation.   Backup Power  : Multiple diesel generators and batteries.   Passive Safety  : Systems that work without power (gravity, natural convection).   Defense in Depth  : Multiple layers of protection."
  },
  {
    id: 3,
    title: "Emergency Procedures",
    icon: "🚨",
    content: "Nuclear facilities have detailed emergency response plans.",
    details: "  Alert Levels  : Unusual, Alert, Site Area Emergency, General Emergency.   Evacuation Zones  : 10-mile and 50-mile zones.   Shelter-in-Place  : Stay indoors, close windows.   Potassium Iodide  : Protects thyroid from radioactive iodine.   Communication  : Regular updates to public and authorities."
  },
  {
    id: 4,
    title: "Waste Management",
    icon: "♻️",
    content: "Nuclear waste is managed through careful storage and disposal.",
    details: "  Low-Level Waste  : Contaminated clothing, tools (buried in shallow landfills).   Intermediate-Level Waste  : Resins, chemical sludge (concrete-encased).   High-Level Waste  : Spent fuel (stored in pools, then dry casks).   Deep Geological Repositories  : Permanent disposal 500+ meters underground."
  }
];