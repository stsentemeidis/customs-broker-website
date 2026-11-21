// English texts. Keep the same structure in every language file.
// Strings that contain HTML are rendered as-is (links, lists, <strong>).

const en = {
  meta: {
    siteName: 'Exintaris & Kafas',
    legalName: 'Exintaris & Kafas LTD',
    tagline: 'Customs brokers · Since 1990',
    description:
      'Licensed customs brokers in Thessaloniki. Import and export clearance, transit (T1/T2), outward processing and customs warehousing for businesses across Greece.',
  },
  nav: {
    home: 'Home',
    services: 'Services',
    about: 'About us',
    warehouse: 'Customs warehouse',
    faq: 'FAQ & documents',
    contact: 'Contact',
    quote: 'Request a quote',
    menu: 'Menu',
    close: 'Close menu',
    language: 'Language',
    skip: 'Skip to content',
  },
  common: {
    callUs: 'Call us',
    requestQuote: 'Request a quote',
    learnMore: 'Learn more',
    allServices: 'All services',
    placeholder: 'Placeholder',
    address: 'Office',
    phone: 'Phone',
    email: 'Email',
    hours: 'Opening hours',
    landline: 'Office',
    mobile: 'Mobile',
    directions: 'Get directions',
    readMore: 'Read more',
    yearsSuffix: 'years',
  },
  home: {
    portChip: 'Port of Thessaloniki',
    eyebrow: 'Licensed customs brokers in Thessaloniki',
    title: 'Customs clearance,<br/>handled with <span class="accent">precision</span>.',
    lead:
      'Since 1990 we have been clearing imports and exports and handling every customs procedure in between for businesses across Greece, with consistency, speed and complete confidentiality.',
    facts: [
      { value: '{years}+', label: 'years in customs' },
      { value: 'Sea · Air · Road · Rail', label: 'every mode of transport' },
      { value: 'Mon – Fri', label: '08:00 – 16:00' },
    ],
    trust: [
      'Licensed customs brokers',
      'Connected to ICISnet',
      'Cost estimate before we start',
      'Absolute confidentiality',
    ],
    servicesEyebrow: 'What we do',
    servicesTitle: 'Every customs procedure, one trusted office',
    servicesLead:
      'From a single pallet to regular container traffic, we take care of the declarations, the documents and the follow-up, so your goods keep moving.',
    howEyebrow: 'How it works',
    howTitle: 'From arrival to release in four steps',
    steps: [
      { title: 'Tell us about the shipment', text: 'Call us or send a quote request with what you are moving, where from and how.' },
      { title: 'Get a detailed cost estimate', text: 'You receive a clear breakdown of duties, taxes and our fees before anything is filed.' },
      { title: 'We prepare and file', text: 'Send us the documents. We check them, classify the goods and submit the declaration.' },
      { title: 'Your goods are released', text: 'We follow the file until customs releases the goods, ready for collection or delivery.' },
    ],
    startEyebrow: 'First time with customs?',
    startTitle: 'Two things you need before your first declaration',
    startItems: [
      { title: 'An EORI number', text: 'Your customs ID across the EU. For Greek businesses it is GR followed by your tax number (AFM). It is free and we can help you apply.' },
      { title: 'ICISnet authorisation', text: 'A one-off electronic authorisation that lets us submit declarations on your behalf in the AADE customs system.' },
    ],
    startCta: 'Read the guide',
    warehouseEyebrow: 'Customs warehousing',
    warehouseTitle: 'Store now, pay duties when you sell',
    warehouseText:
      'Keep imported goods in an approved customs warehouse with duties and taxes suspended until they leave for the market. A simple way to protect your cash flow.',
    warehouseCta: 'About our warehouse',
    teamEyebrow: 'Our people',
    teamTitle: 'A small team of specialists who know your file',
    teamText:
      'You always deal with the same experienced people, who answer the phone, know your goods and keep up with every change in customs rules.',
    teamCta: 'Meet the team',
    faqEyebrow: 'Questions',
    faqTitle: 'Frequently asked',
    faqCta: 'All questions & documents',
    ctaTitle: 'Have a shipment coming up?',
    ctaText: 'Tell us what you are moving and we will reply with a clear cost estimate.',
  },
  services: {
    eyebrow: 'Services',
    title: 'Customs services for importers and exporters',
    lead:
      'We handle the full range of customs procedures for businesses in Greece. Choose a service to see how it works and which documents you will need.',
    requirementTitle: 'Before we can file for you',
    requirementText:
      'Every customs declaration requires your <strong>EORI number</strong> and an electronic <strong>authorisation through ICISnet</strong>. If you do not have them yet, we will guide you through both.',
    sidebarTitle: 'Need this service?',
    sidebarText: 'Send us the details and receive a cost estimate before we start.',
    documentsTitle: 'Documents you may need',
    documentsNote: 'Not every document applies to every shipment. We will tell you exactly what is needed for yours.',
    related: 'Other services',
    items: {
      imports: {
        name: 'Import clearance',
        short: 'Clearance of goods arriving from outside the EU, with a detailed cost estimate before anything is filed.',
        intro:
          'We clear your imported goods so they reach your premises without delay. Before the goods arrive we explain every step and send you a detailed cost estimate, so you know your duties, taxes and fees in advance. Once the goods arrive and the file is ready, we submit the import declaration and follow it through to release.',
        points: [
          { title: 'Cost estimate up front', text: 'A clear breakdown of duties, VAT and fees before the declaration is filed. No surprises.' },
          { title: 'Classification and checks', text: 'We check your documents, classify the goods and apply any preferential origin you are entitled to.' },
          { title: 'Fast release', text: 'We follow the declaration until the goods are released for collection or delivery to your premises.' },
        ],
        documents: [
          'Commercial invoice from the foreign supplier',
          'Packing list',
          'Transport document: CMR (road), B/L (sea), AWB (air) or CIM (rail)',
          'Freight invoice, when delivery terms are EXW, FOB, FOT or FCA',
          'Agency invoice from the carrier or forwarder',
          'Insurance policy, or a sworn declaration that the goods are uninsured',
          'Preferential origin certificate (EUR.1, FORM A or A.TR), where applicable',
          'Certificate of origin for textiles and goods subject to anti-dumping duty',
          'Proforma invoice, order confirmation or contract, when the CIF value exceeds €20,000',
          'CE declaration of conformity for machinery, electrical equipment and toys',
          'CITES certificate for protected species of flora and fauna',
          'Phytosanitary certificate for products of plant origin',
          'Veterinary certificate for products of animal origin',
        ],
      },
      exports: {
        name: 'Export clearance',
        short: 'Export declarations and certificates, coordinated with you and your carrier.',
        intro:
          'We take care of your exports from start to finish. We coordinate with you and the transport company, prepare and submit the export declaration, and issue the documents and certificates your buyer and their customs will ask for.',
        points: [
          { title: 'Export declaration', text: 'Prepared, checked and submitted on time so the goods leave without delay.' },
          { title: 'Certificates arranged', text: 'Origin, EUR.1, A.TR, phytosanitary, veterinary and health certificates, arranged by us when needed.' },
          { title: 'Coordination', text: 'We liaise with the carrier and keep you informed until the goods have left the EU.' },
        ],
        documents: [
          'Original commercial invoice',
          'Detailed packing list',
          'Delivery note naming the foreign buyer as consignee, with delivery to the place of export',
        ],
        extraTitle: 'Certificates we can arrange for you',
        extra: [
          'Phytosanitary certificate',
          'Veterinary certificate',
          'Health certificate',
          'Certificate of origin',
          'EUR.1 movement certificate',
          'A.TR movement certificate',
        ],
      },
      transit: {
        name: 'Transit (T1 / T2)',
        short: 'Move goods across the EU customs territory with duties and taxes suspended.',
        intro:
          'Transit lets goods travel between two points of the customs territory without paying duties and taxes along the way. We open and manage the transit declaration so your goods move quickly and securely to their destination.',
        points: [
          { title: 'External transit (T1)', text: 'For non-EU goods moving within the EU, or passing through the EU to another destination, without duties or taxes being charged on the way.' },
          { title: 'Internal transit (T2)', text: 'For EU goods travelling between two EU points through a common transit country such as Switzerland, Norway, Iceland or Liechtenstein.' },
          { title: 'Handled end to end', text: 'We open the movement, arrange what is needed and follow it until it is discharged at destination.' },
        ],
      },
      'outward-processing': {
        name: 'Outward processing',
        short: 'Send EU goods outside the EU for repair or processing and re-import them with duty relief.',
        intro:
          'Outward processing allows EU goods to be exported temporarily for processing, repair or assembly outside the EU, and then re-imported with full or partial relief from import duties. We have many years of experience with this procedure and guide you through every step, from authorisation to re-import.',
        points: [
          { title: 'Duty relief', text: 'Depending on the processing carried out, relief from import duties on re-import can be partial or total.' },
          { title: 'Typical operations', text: 'Assembly, repair, finishing or other processing, depending on the product and your business needs.' },
          { title: 'Conditions', text: 'A guarantee for the customs value of the exported goods, identification and tracking of the goods, and re-import of the processed products.' },
        ],
        extraTitle: 'What we take care of',
        extra: [
          'Guidance on the conditions and application for the procedure',
          'Export declaration under outward processing',
          'Identification and follow-up of the goods',
          'Re-import declaration and calculation of the duty relief',
        ],
      },
      'customs-warehousing': {
        name: 'Customs warehousing',
        short: 'Store imported goods with duties and taxes suspended until they enter the market.',
        intro:
          'Under customs warehousing, imported goods are stored in approved customs premises without paying duties and taxes. Payment is suspended until the goods leave the warehouse for the market, so you only pay when you are ready to sell. We handle the whole procedure, in our own customs warehouse or in any other approved warehouse.',
        points: [
          { title: 'Duties suspended', text: 'No import duties or taxes are paid while the goods remain in the warehouse.' },
          { title: 'Flexible duration', text: 'Goods can stay for as long as your business needs, under customs supervision.' },
          { title: 'Better cash flow', text: 'Charges are paid only when products are released for sale, helping you manage time and import costs.' },
        ],
        extraTitle: 'How it works',
        extra: [
          'Goods are placed in a specially approved warehouse that meets customs requirements',
          'The warehouse and the goods remain under the supervision of the customs authorities',
          'Duties and taxes become payable only when goods are released for free circulation',
          'We carry out every formality the procedure requires',
        ],
      },
    },
  },
  about: {
    eyebrow: 'About us',
    title: 'A Thessaloniki customs office built on trust',
    lead:
      'Exintaris & Kafas LTD is a customs brokerage office in Thessaloniki, providing customs and transport services to businesses that import and export across Greece.',
    storyTitle: 'Our story',
    story: [
      'Founded in {year}, our office has grown alongside the trade of Northern Greece and the port of Thessaloniki. Over the years we have handled the full range of customs procedures for our clients, from everyday import and export clearances to special procedures such as transit, outward processing and customs warehousing.',
      'Our mission is to provide high-quality customs services tailored to the needs of each client, and to build long-term relationships based on reliability. We stay up to date with every development in customs legislation, so our clients do not have to.',
    ],
    valuesTitle: 'What we stand for',
    values: [
      { title: 'Consistency', text: 'Deadlines kept, documents right first time and the same people handling your file.' },
      { title: 'Speed', text: 'We prepare in advance, so your goods spend as little time at customs as possible.' },
      { title: 'Confidentiality', text: 'Your prices, suppliers and customers stay strictly between us.' },
    ],
    teamTitle: 'Meet the team',
    teamLead: 'Licensed customs brokers and specialists you can call directly.',
    numbers: [
      { value: '{year}', label: 'founded' },
      { value: '5', label: 'specialists' },
      { value: '5', label: 'customs procedures' },
    ],
  },
  warehouse: {
    eyebrow: 'Customs warehouse',
    title: 'Our customs warehouse in Thessaloniki',
    lead:
      'Store imported goods with duties and taxes suspended, close to the port of Thessaloniki, and release them to the market when you are ready.',
    intro:
      'Customs warehousing is one of the most useful tools for importers. Instead of paying duties and taxes when your goods arrive, you store them in an approved customs warehouse and pay only when they are released for sale. We manage the procedure in our own warehouse or in any other approved customs warehouse.',
    benefits: [
      { title: 'Pay when you sell', text: 'Duties and taxes are suspended while goods stay in the warehouse.' },
      { title: 'Release in batches', text: 'Release only what you need, when you need it, and keep the rest stored.' },
      { title: 'Re-export without duties', text: 'Goods that leave the EU again from the warehouse do not pay import duties.' },
      { title: 'Under customs supervision', text: 'Approved premises, meeting customs requirements, with all formalities handled by us.' },
    ],
    addressTitle: 'Warehouse location',
    cta: 'Ask about storage',
  },
  faq: {
    eyebrow: 'FAQ & documents',
    title: 'Customs questions, clearly answered',
    lead: 'Practical answers for businesses and private individuals, based on current Greek and EU rules.',
    reviewed: 'Last reviewed: November 2026',
    disclaimer:
      'This information is general and may change. For your specific case, contact us or the AADE customs helpline <a href="tel:1521">1521</a>.',
    groups: [
      {
        title: 'Getting started',
        items: [
          {
            q: 'What does a customs broker do?',
            a: '<p>A customs broker (εκτελωνιστής) is a licensed professional who carries out customs formalities on behalf of the owner of the goods, acting as their representative before the customs authorities. In practice, we prepare and submit your declarations, calculate duties and taxes, and make sure your goods are cleared correctly and quickly.</p>',
          },
          {
            q: 'Do I need an EORI number and how do I get one?',
            a: '<p>Yes. Every business or person established in Greece that takes part in customs procedures needs an EORI number. For Greek operators it is <strong>GR followed by the tax number (AFM)</strong>.</p><ul><li>Apply electronically through the AADE application <em>"Τα Αιτήματά μου"</em> (My Requests), or by email to the competent customs office.</li><li>Individuals attach a copy of their ID card or passport. Companies need no documents; customs checks their details through GEMI.</li><li>There is no fee. Apply before your first shipment to avoid delays.</li></ul><p>We can prepare the application for you. You can also download the <a href="/docs/eori-application.pdf" download>application form</a> and the <a href="/docs/eori-sworn-declaration.pdf" download>sworn declaration</a>.</p>',
          },
          {
            q: 'What is the ICISnet authorisation?',
            a: '<p>ICISnet is the electronic customs system of AADE. Before we can submit declarations in your name, you give us an <strong>electronic authorisation</strong> in the system. It is done once and stays valid until you revoke it. We will walk you through it step by step, or you can follow the <a href="/docs/icisnet-authorisation-guide.pdf" download>official step-by-step guide (PDF)</a>.</p>',
          },
          {
            q: 'How much does customs clearance cost?',
            a: '<p>It depends on the goods, their value and origin, and the procedure. That is why we send you a <strong>detailed cost estimate before we start</strong>, showing duties, VAT and our fees separately. <a href="{contact}">Request a quote</a> and we will reply with yours.</p>',
          },
        ],
      },
      {
        title: 'Online orders & small parcels',
        items: [
          {
            q: 'Do I pay duty on parcels under €150 from outside the EU?',
            a: '<p>Yes. Since <strong>1 July 2026</strong> the EU has abolished the customs duty exemption for low-value consignments. A temporary flat duty of <strong>€3 per item</strong> applies to goods sent from businesses outside the EU to consumers in the EU in parcels worth up to €150. It applies until 1 July 2028, when it is due to be replaced by a new EU e-commerce system.</p><p>VAT has applied to all imported goods regardless of value since July 2021.</p>',
          },
          {
            q: 'What changes for businesses importing low-value goods?',
            a: '<p>The €3 flat duty applies to sales to consumers. For business-to-business imports, the removal of the €150 exemption means the <strong>normal customs tariff</strong> now applies to low-value consignments too. If you import samples or small orders regularly, talk to us about the most efficient way to declare them.</p>',
          },
        ],
      },
      {
        title: 'Vehicles',
        items: [
          {
            q: 'How do I import a car from another EU country?',
            a: '<ol><li>When the car enters Greece, a <strong>Vehicle Arrival Declaration (ΔΑΟ)</strong> is submitted electronically to the nearest customs office.</li><li>Within <strong>30 days</strong>, a Special Declaration (ΔΕΦΚ) is filed to calculate and pay the registration tax (and VAT for new cars).</li><li>Customs issues a digital registration certificate and the car is registered and receives plates through the Ministry of Transport platform.</li></ol><p>Used cars have additional requirements on emissions, mileage and environmental fees. Ask us for an estimate of the registration tax before you buy.</p>',
          },
          {
            q: 'And from a country outside the EU?',
            a: '<p>No ΔΑΟ is needed. The car is cleared with an <strong>import declaration</strong>, paying import duty, VAT and registration tax. The registration tax can be paid with the import declaration or within 15 days of release. We handle the whole clearance for you.</p>',
          },
        ],
      },
      {
        title: 'Travellers',
        items: [
          {
            q: 'What can I bring back duty-free from a trip outside the EU?',
            a: '<p>Goods for personal use up to a total value of:</p><ul><li><strong>€430</strong> for air and sea travellers</li><li><strong>€300</strong> for other travellers</li><li><strong>€150</strong> for travellers under 15</li></ul><p>Personal luggage and medicines for personal use do not count towards these limits.</p>',
          },
          {
            q: 'How much tobacco and alcohol can I bring?',
            a: '<table><thead><tr><th>Product</th><th>By air</th><th>Other means</th></tr></thead><tbody><tr><td>Cigarettes</td><td>200</td><td>40</td></tr><tr><td>Cigarillos</td><td>100</td><td>20</td></tr><tr><td>Cigars</td><td>50</td><td>10</td></tr><tr><td>Smoking tobacco</td><td>250 g</td><td>50 g</td></tr></tbody></table><p>Alcohol, for any means of transport: <strong>1 litre</strong> of spirits over 22% or <strong>2 litres</strong> of drinks up to 22%, plus <strong>4 litres</strong> of still wine and <strong>16 litres</strong> of beer. Travellers under 17 have no allowance for tobacco or alcohol.</p><p>Also duty-free: e-cigarette liquid up to 20 ml, 200 nicotine pouches or heated tobacco sticks, and 3 kg of coffee.</p>',
          },
          {
            q: 'Which countries are in the EU customs territory?',
            a: '<p>The 27 EU member states: Austria, Belgium, Bulgaria, Croatia, Cyprus, Czechia, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Ireland, Italy, Latvia, Lithuania, Luxembourg, Malta, the Netherlands, Poland, Portugal, Romania, Slovakia, Slovenia, Spain and Sweden.</p><p>Some territories are outside it, for example the Faroe Islands, Greenland, Heligoland, Ceuta and Melilla. The <strong>United Kingdom</strong> has been outside the EU customs territory since 1 January 2021, so goods from the UK need customs clearance.</p>',
          },
        ],
      },
      {
        title: 'Special procedures',
        items: [
          {
            q: 'Can I delay paying duties until I sell my goods?',
            a: '<p>Yes, with <a href="{warehousing}">customs warehousing</a>. Goods are stored in an approved customs warehouse with duties and taxes suspended, and you pay only when they are released for the market.</p>',
          },
          {
            q: 'My goods only pass through Greece. Do I pay duties here?',
            a: '<p>No, if they move under <a href="{transit}">transit</a>. With a T1 declaration, non-EU goods can travel through Greece and the EU to their destination without duties or taxes being charged on the way.</p>',
          },
          {
            q: 'What is CBAM and does it affect me?',
            a: '<p>The Carbon Border Adjustment Mechanism (CBAM) covers imports of iron and steel, aluminium, cement, fertilisers, hydrogen and electricity. Since <strong>1 January 2026</strong>, importers of more than <strong>50 tonnes</strong> of these goods per year must hold the status of <strong>authorised CBAM declarant</strong>. If you import these products, contact us to check what applies to you.</p>',
          },
          {
            q: 'What is an Authorised Economic Operator (AEO)?',
            a: '<p>AEO is an EU-wide status for reliable businesses that meet customs criteria for compliance, record-keeping, financial solvency and security. It brings simplifications and fewer controls. Businesses apply digitally to AADE. We can advise you on whether it is worth it for your volume of trade.</p>',
          },
        ],
      },
    ],
    docsTitle: 'Useful documents & links',
    docsLead: 'Official guides from the Greek customs authority and the EU, and our own forms.',
    docs: [
      { title: 'EORI number: questions & answers', source: 'AADE (PDF, Greek)', href: 'https://aade.gr/sites/default/files/2026-07/FAQS_EORI_2.pdf' },
      { title: 'Allowances for travellers from non-EU countries', source: 'AADE (PDF, Greek)', href: 'https://www.aade.gr/sites/default/files/2026-07/12.%20FAQs_apallages_taxidioton_triton%20xwrwn.pdf' },
      { title: 'Vehicles and registration tax: questions & answers', source: 'AADE (PDF, Greek)', href: 'https://aade.gr/sites/default/files/2026-08/FAQS_aytokinita_oximata_eidi_foron_polyteleias_0.pdf' },
      { title: '€3 customs duty on low-value parcels: guidance', source: 'European Commission', href: 'https://taxation-customs.ec.europa.eu/news/guidance-and-legal-text-temporary-flat-fee-low-value-imports-which-will-apply-until-1-july-2028-2026-06-08_en' },
    ],
    ownDocsTitle: 'Our forms',
    ownDocs: [
      { title: 'EORI number application form', note: 'PDF, Greek / English · 1 page', href: '/docs/eori-application.pdf' },
      { title: 'Sworn declaration for EORI (Law 1599/1986)', note: 'PDF, Greek · 1 page', href: '/docs/eori-sworn-declaration.pdf' },
      { title: 'ICISnet electronic authorisation: step-by-step guide', note: 'PDF, Greek · 6 pages', href: '/docs/icisnet-authorisation-guide.pdf' },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Request a quote or talk to us',
    lead: 'Tell us about your shipment and we will reply with a clear cost estimate, usually within one working day.',
    detailsTitle: 'Contact details',
    formTitle: 'Quote request',
    form: {
      name: 'Full name',
      company: 'Company',
      email: 'Email',
      phone: 'Phone',
      service: 'Service',
      servicePlaceholder: 'Choose a service',
      serviceOther: 'Not sure / other',
      mode: 'Transport',
      modes: { sea: 'Sea', air: 'Air', road: 'Road', rail: 'Rail' },
      origin: 'From (country)',
      destination: 'To (country)',
      goods: 'Description of goods',
      goodsHint: 'e.g. 2 pallets of spare parts, HS code if known',
      value: 'Approximate value (€)',
      message: 'Anything else we should know?',
      consent: 'I agree that my details are used to answer this request, as described in the <a href="{privacy}">privacy policy</a>.',
      submit: 'Send request',
      sending: 'Sending…',
      required: 'Required',
      optional: 'optional',
      errors: {
        required: 'Please fill in this field.',
        email: 'Please enter a valid email address.',
        consent: 'Please accept to continue.',
        generic: 'Something went wrong. Please try again or call us.',
      },
      success: 'Thank you. Your request has been sent and we will get back to you shortly.',
    },
  },
  privacy: {
    title: 'Privacy policy',
    body:
      '<p><strong>Placeholder text: to be reviewed before the site goes live.</strong></p><p>Exintaris &amp; Kafas LTD, Salaminos 10, 546 25 Thessaloniki, is responsible for the personal data you send us through this website.</p><h2>What we collect</h2><p>When you submit the quote request form, we receive the details you enter (name, company, email, phone and shipment information). We use them only to reply to your request and to prepare a cost estimate.</p><h2>Cookies and analytics</h2><p>This website does not use advertising or tracking cookies. We may use privacy-friendly, cookie-free visitor statistics.</p><h2>Your rights</h2><p>You can ask to see, correct or delete your data at any time by emailing us. You also have the right to complain to the Hellenic Data Protection Authority (www.dpa.gr).</p>',
  },
  footer: {
    about: 'Licensed customs brokers in Thessaloniki, serving importers and exporters across Greece since {year}.',
    servicesTitle: 'Services',
    companyTitle: 'Company',
    contactTitle: 'Contact',
    rights: 'All rights reserved.',
    privacy: 'Privacy policy',
  },
  legal: { gemi: 'GEMI no.', vat: 'VAT no.' },
  chat: { open: 'Message us', close: 'Close', title: 'Message us directly', text: 'Send us a message on WhatsApp or Viber during office hours.', whatsapp: 'WhatsApp', viber: 'Viber' },
  where: {
    eyebrow: 'Where we work',
    title: 'Clearance at every gateway of Northern Greece',
    lead: 'Wherever your goods arrive, by sea, air or road, we handle the clearance from our office in the centre of Thessaloniki.',
    points: {
      port: { name: 'Port of Thessaloniki', text: 'Containers and general cargo at the ThPA terminals.' },
      airport: { name: 'Makedonia Airport', text: 'Air freight at the cargo terminal of Thessaloniki airport.' },
      evzoni: { name: 'Evzoni border crossing', text: 'Road freight to and from North Macedonia and the Western Balkans.' },
      promachonas: { name: 'Promachonas border crossing', text: 'Road freight to and from Bulgaria and Central Europe.' },
      offices: { name: 'Inland customs offices', text: 'Clearance at the customs offices of Thessaloniki and Central Macedonia.' },
    },
  },
  notFound: {
    title: 'Page not found',
    text: 'The page you are looking for does not exist or has moved.',
    back: 'Back to the homepage',
  },
};

export default en;
export type Dictionary = typeof en;
