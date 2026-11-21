// Company facts shared by every language.
// Items marked `placeholder: true` are shown with a small "placeholder" tag on the site
// until real details are provided.

export const site = {
  foundedYear: 1990, // placeholder
  phones: [
    { display: '2310 517 932', tel: '+302310517932', type: 'landline' as const },
    { display: '697 291 6982', tel: '+306972916982', type: 'mobile' as const },
    { display: '697 475 5864', tel: '+306974755864', type: 'mobile' as const },
  ],
  email: 'johnkafas@gmail.com',
  office: {
    street: { el: 'Σαλαμίνος 10', en: '10 Salaminos St.' },
    city: { el: '546 25 Θεσσαλονίκη', en: '546 25 Thessaloniki, Greece' },
    lat: 40.636073402978,
    lng: 22.936338082835,
  },
  warehouse: {
    placeholder: true,
    street: { el: 'ΒΙ.ΠΕ. Σίνδου, Οδός 00, Ο.Τ. 00', en: 'Sindos Industrial Area, Street 00, Block 00' },
    city: { el: '570 22 Θεσσαλονίκη', en: '570 22 Thessaloniki, Greece' },
  },
  hours: { days: { el: 'Δευτέρα – Παρασκευή', en: 'Monday – Friday' }, time: '08:00 – 16:00' },
  hoursSchema: 'Mo-Fr 08:00-16:00',
  // Five team members — replace names, roles and add photos (public/team/*.jpg) later.
  team: [
    { name: { el: 'Ονοματεπώνυμο 1', en: 'Team member 1' }, role: { el: 'Εκτελωνιστής · Συνιδρυτής', en: 'Licensed customs broker · Co-founder' }, initials: 'EK', placeholder: true },
    { name: { el: 'Ονοματεπώνυμο 2', en: 'Team member 2' }, role: { el: 'Εκτελωνιστής · Συνιδρυτής', en: 'Licensed customs broker · Co-founder' }, initials: 'EK', placeholder: true },
    { name: { el: 'Ονοματεπώνυμο 3', en: 'Team member 3' }, role: { el: 'Τελωνειακός αντιπρόσωπος', en: 'Customs representative' }, initials: 'EK', placeholder: true },
    { name: { el: 'Ονοματεπώνυμο 4', en: 'Team member 4' }, role: { el: 'Υπεύθυνη/ος εξαγωγών', en: 'Exports specialist' }, initials: 'EK', placeholder: true },
    { name: { el: 'Ονοματεπώνυμο 5', en: 'Team member 5' }, role: { el: 'Διοικητική υποστήριξη', en: 'Office & client support' }, initials: 'EK', placeholder: true },
  ],
};

export const serviceSlugs = ['imports', 'exports', 'transit', 'outward-processing', 'customs-warehousing'] as const;
export type ServiceSlug = (typeof serviceSlugs)[number];

// Icon shown on each service card (names from src/components/Icon.astro)
export const serviceIcons = {
  imports: 'package',
  exports: 'send',
  transit: 'route',
  'outward-processing': 'recycle',
  'customs-warehousing': 'warehouse',
} as const;
