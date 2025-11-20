// lib/locationsData.ts

// --- TypeScript Types ---

// Type for a single city link
export interface LocationCity {
  name: string;
  href: string;
  longtitude:string,
  latitude:string
}

// Type for a single state
export interface LocationState {
  stateName: string;
  cities: LocationCity[];
}

// Type for the main locations object
export interface LocationsMenu {
  [stateCode: string]: LocationState;
}

// --- Data ---

export const locationsMenu: LocationsMenu = {
  TX: {
    stateName: 'Texas',
    cities: [
      { name: 'Houston', href: '/locations/tx/houston',longtitude:"29.7601",latitude:" 95.3701" },
      { name: 'Cypress', href: '/locations/tx/cypress',longtitude:"29.7601",latitude:" 95.3701"  },
      { name: 'The Woodlands', href: '/locations/tx/the-woodlands',longtitude:"29.7601",latitude:" 95.3701" },
      { name: 'Katy', href: '/locations/tx/katy',longtitude:"29.7601",latitude:" 95.3701"  },
    ]
  },
  LA: {
    stateName: 'Louisiana',
    cities: [
      { name: 'New Orleans', href: '/locations/la/new-orleans',longtitude:"29.7601",latitude:" 95.3701"  },
      { name: 'Baton Rouge', href: '/locations/la/baton-rouge',longtitude:"29.7601",latitude:" 95.3701"  },
    ]
  },
};