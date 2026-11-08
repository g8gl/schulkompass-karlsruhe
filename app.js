const translations = {
  en: {
    navDiscover: 'Discover', navShortlist: 'My shortlist', navVisit: 'Visit planner', navMap: 'Map',
    heroEyebrow: 'A little curiosity goes a long way', heroTitle: 'Where could you <em>grow</em> next?',
    heroLede: 'Let’s explore Karlsruhe Gymnasiums together. Start with the things you love, then find a few schools to visit.',
    startExploring: 'Start exploring', heroNote: 'Made for curious kids and the grown-ups helping them choose.',
    imageCaption: 'Big questions start small.', stepOne: 'Your curiosity compass', compassTitle: 'What would you love to explore?',
    compassAside: 'Pick as many as you like. There are no wrong answers.', near: 'School area', allAreas: 'All areas',
    sourceNote: 'Profiles are a starting point, not a ranking. Details change; use each official school link to confirm before visiting.',
    mapKicker: 'School locations', mapTitle: 'Find schools & plan a public-transport trip', mapKvvLink: 'KVV journey planner ↗',
    mapListTitle: 'Schools', mapSchools: 'schools', mapTrip: 'Plan transit trip ↗', mapSchoolSite: 'School site ↗',
    mapTransitNote: 'For current stops, routes and times, check the KVV journey planner.', mapUnavailable: 'The map could not be loaded. Use the school links to open locations and routes.',
    mapReportIssue: 'Report a map issue ↗',
    mapTileUnavailable: 'Some map images were blocked or could not load. The school list and route links still work.',
    stepTwo: 'Your shortlist', shortlistTitle: 'Schools worth a closer look', print: 'Print my list',
    stepThree: 'Open-day notebook', visitTitle: 'Go curious. Come back with clues.',
    visitIntro: 'Open days are a chance to notice how a place feels. Save a school, jot down a question, and compare what matters to you.',
    promptText: 'Imagine a brilliant school day. What would you be learning, making, or trying?', myNotes: 'MY NOTES',
    reflectionLabel: 'My future-learning ideas', reflectionPlaceholder: 'I’d love to learn more about…',
    questionsTitle: 'Good questions to take along', footerSources: 'School information checked 8 November 2026. Open-day dates and some details are still to be confirmed for 2027/28.',
    citySchoolList: 'City school directory ↗', save: 'Save school', saved: 'Saved', map: 'Map', officialSite: 'Official school site ↗', aiInfo: 'AI initiative details ↗',
    details: 'Explore details', hideDetails: 'Hide details', visitDate: 'Open day', dateTba: '2027/28 date to be announced · check school site',
    years: 'Program length', specialties: 'Special offerings', profile: 'School profile', furtherReading: 'Further reading', lunch: 'Lunch & afternoon',
    mensaOrdering: 'Mensa ordering & price', mensaInfo: 'I-NET-Menue ordering portal; caterer and current meal prices are not published.',
    abitur: 'Abitur options',
    generalAbi: 'General Abitur (Allgemeine Hochschulreife). Ask which advanced courses are offered.',
    g9: '9 years · G9 for new Year 5 classes; confirm the school’s transition plan.',
    ask: 'Ask at the open day', community: 'School community', matched: 'match', matches: 'matches',
    noneSaved: 'Your shortlist is empty. Save a school that sparks your curiosity and it will appear here.',
    savedLine: 'saved school', savedLines: 'saved schools', savedToast: 'Saved to your shortlist', removedToast: 'Removed from your shortlist',
    savedNote: 'Your notes stay on this device only.', visitQuestions: [
      'What do students enjoy most about being here?',
      'Which clubs or projects can Year 5 students try?',
      'What does a normal school day and lunch break look like?',
      'How do students get help when learning feels tricky?'
    ],
    topics: [
      { id: 'science', icon: '⚗', en: 'Experiments & inventions', de: 'Experimente & Erfindungen' },
      { id: 'languages', icon: '文', en: 'Languages & new places', de: 'Sprachen & neue Orte' },
      { id: 'music', icon: '♫', en: 'Music & performing', de: 'Musik & Auftreten' },
      { id: 'arts', icon: '✎', en: 'Art & making things', de: 'Kunst & Dinge gestalten' },
      { id: 'sport', icon: '↗', en: 'Sport & movement', de: 'Sport & Bewegung' },
      { id: 'community', icon: '♡', en: 'People & helping out', de: 'Menschen & Mitmachen' }
    ]
  },
  de: {
    navDiscover: 'Entdecken', navShortlist: 'Meine Merkliste', navVisit: 'Besuchsplaner', navMap: 'Karte',
    heroEyebrow: 'Neugier bringt dich weiter', heroTitle: 'Wo kannst du als Nächstes <em>wachsen</em>?',
    heroLede: 'Entdeckt gemeinsam Karlsruher Gymnasien. Fangt mit deinen Interessen an und sucht dann Schulen für einen Besuch aus.',
    startExploring: 'Los geht’s', heroNote: 'Für neugierige Kinder und die Erwachsenen, die mit ihnen entscheiden.',
    imageCaption: 'Große Fragen fangen klein an.', stepOne: 'Dein Neugier-Kompass', compassTitle: 'Was möchtest du entdecken?',
    compassAside: 'Wähle so viele Themen, wie du magst. Es gibt keine falschen Antworten.', near: 'Schulgegend', allAreas: 'Alle Gegenden',
    sourceNote: 'Die Profile sind ein Startpunkt, keine Rangliste. Angaben können sich ändern. Bitte vor einem Besuch auf der Schulwebsite prüfen.',
    mapKicker: 'Schulstandorte', mapTitle: 'Schulen finden & ÖPNV-Route planen', mapKvvLink: 'KVV-Fahrplanauskunft ↗',
    mapListTitle: 'Schulen', mapSchools: 'Schulen', mapTrip: 'ÖPNV-Route planen ↗', mapSchoolSite: 'Schulwebsite ↗',
    mapTransitNote: 'Aktuelle Haltestellen, Linien und Abfahrtszeiten zeigt die KVV-Fahrplanauskunft.', mapUnavailable: 'Die Karte konnte nicht geladen werden. Nutze die Schullinks für Standorte und Routen.',
    mapReportIssue: 'Kartenfehler melden ↗',
    mapTileUnavailable: 'Einige Kartenbilder wurden blockiert oder konnten nicht geladen werden. Schulliste und Routenlinks funktionieren weiterhin.',
    stepTwo: 'Deine Merkliste', shortlistTitle: 'Diese Schulen schaust du dir genauer an', print: 'Liste drucken',
    stepThree: 'Notizbuch für den Tag der offenen Tür', visitTitle: 'Geh neugierig hin. Komm mit Ideen zurück.',
    visitIntro: 'Am Tag der offenen Tür kannst du spüren, wie sich eine Schule anfühlt. Speichere Schulen, notiere Fragen und vergleiche, was dir wichtig ist.',
    promptText: 'Stell dir einen tollen Schultag vor. Was würdest du lernen, machen oder ausprobieren?', myNotes: 'MEINE NOTIZEN',
    reflectionLabel: 'Meine Ideen fürs Lernen', reflectionPlaceholder: 'Ich möchte mehr über … lernen',
    questionsTitle: 'Gute Fragen zum Mitnehmen', footerSources: 'Schulangaben geprüft am 8. November 2026. Termine für Tage der offenen Tür und einige Details für 2027/28 sind noch nicht bestätigt.',
    citySchoolList: 'Schulverzeichnis der Stadt ↗', save: 'Schule merken', saved: 'Gemerkt', map: 'Karte', officialSite: 'Offizielle Schulwebsite ↗', aiInfo: 'Infos zur Zukunftsschule KI ↗',
    details: 'Mehr erfahren', hideDetails: 'Details ausblenden', visitDate: 'Tag der offenen Tür', dateTba: 'Termin 2027/28 noch offen · Schulwebsite prüfen',
    years: 'Dauer', specialties: 'Besondere Angebote', profile: 'Schulprofil', furtherReading: 'Weiterlesen', lunch: 'Mittagessen & Betreuung',
    mensaOrdering: 'Mensa-Bestellung & Preis', mensaInfo: 'Bestellung über I-NET-Menue; Caterer und aktuelle Essenspreise sind nicht veröffentlicht.',
    abitur: 'Abiturmöglichkeiten',
    generalAbi: 'Allgemeine Hochschulreife. Fragt nach den angebotenen Leistungsfächern.',
    g9: '9 Jahre · G9 für neue 5. Klassen; den Übergangsplan der Schule bestätigen.',
    ask: 'Beim Besuch fragen', community: 'Schulgemeinschaft', matched: 'Treffer', matches: 'Treffer',
    noneSaved: 'Deine Merkliste ist noch leer. Speichere eine Schule, die dich neugierig macht.',
    savedLine: 'Schule gemerkt', savedLines: 'Schulen gemerkt', savedToast: 'Auf deiner Merkliste gespeichert', removedToast: 'Von der Merkliste entfernt',
    savedNote: 'Deine Notizen bleiben nur auf diesem Gerät.', visitQuestions: [
      'Was gefällt den Schülerinnen und Schülern hier am besten?',
      'Welche AGs oder Projekte können Kinder in Klasse 5 ausprobieren?',
      'Wie sieht ein normaler Schultag mit Mittagspause aus?',
      'Wer hilft, wenn das Lernen einmal schwierig wird?'
    ],
    topics: [
      { id: 'science', icon: '⚗', en: 'Experiments & inventions', de: 'Experimente & Erfindungen' },
      { id: 'languages', icon: '文', en: 'Languages & new places', de: 'Sprachen & neue Orte' },
      { id: 'music', icon: '♫', en: 'Music & performing', de: 'Musik & Auftreten' },
      { id: 'arts', icon: '✎', en: 'Art & making things', de: 'Kunst & Dinge gestalten' },
      { id: 'sport', icon: '↗', en: 'Sport & movement', de: 'Sport & Bewegung' },
      { id: 'community', icon: '♡', en: 'People & helping out', de: 'Menschen & Mitmachen' }
    ]
  }
};

const schools = [
  {
    id: 'bismarck', name: 'Bismarck-Gymnasium', district: 'Innenstadt', areaEn: 'City centre · Innenstadt', areaDe: 'Innenstadt',
    address: 'Bismarckstraße 8, 76133 Karlsruhe', lat: 49.013538, lon: 8.3948434,
    url: 'https://bismarck-gymnasium.de/informationen-fuer-viertklaessler',
    tags: ['languages', 'music', 'community'], tagsEn: ['French & Latin', 'String class', 'Gifted pathway'], tagsDe: ['Französisch & Latein', 'Streicherklasse', 'Hochbegabtenzug'],
    highlightsEn: 'A gifted-learner pathway and a string class are listed for new Year 5 students.', highlightsDe: 'Für neue 5. Klassen gibt es einen Hochbegabtenzug und eine Streicherklasse.',
    profileEn: 'The selective Hochbegabtenzug offers accelerated learning and enrichment; admission involves assessment, so it is not a general pathway. The school describes its classical-language route with Latin through Year 10. Year 5 students can apply for a timetable-integrated string class; places may be limited. Check the current module list, fees and availability.',
    profileDe: 'Der Hochbegabtenzug ist ein Auswahlangebot mit beschleunigtem Lernen und zusätzlichen Modulen; die Aufnahme erfolgt nach einem Auswahlverfahren. Der altsprachliche Bildungsgang führt nach Angaben der Schule Latein bis Klasse 10. Für Klasse 5 gibt es eine Streicherklasse im Stundenplan; die Plätze können begrenzt sein. Aktuelle Module, Kosten und Plätze bitte erfragen.',
    reading: [
      { url: 'https://bismarck-gymnasium.de/hochbegabtenzug-2', titleEn: 'Gifted-learner pathway', titleDe: 'Hochbegabtenzug' },
      { url: 'https://bismarck-gymnasium.de/anmeldeverfahren-hochbegabtenzug', titleEn: 'Admissions procedure', titleDe: 'Aufnahmeverfahren' },
      { url: 'https://bismarck-gymnasium.de/streicherklasse-2', titleEn: 'String class', titleDe: 'Streicherklasse' }
    ],
    lunchEn: 'Afternoon program is listed; ask about lunch and supervision hours.', lunchDe: 'Ein Nachmittagsangebot ist genannt; Mittagessen und Betreuungszeiten erfragen.',
    eventEn: 'Saturday, 27 February 2027 · 09:00–12:30', eventDe: 'Samstag, 27. Februar 2027 · 09:00–12:30', eventUrl: 'https://bismarck-gymnasium.de/informationen-fuer-viertklaessler',
    abiEn: 'General Abitur. The gifted pathway is a learning program, not a separate Abitur.', abiDe: 'Allgemeine Hochschulreife. Der Hochbegabtenzug ist ein Lernangebot, kein eigenes Abitur.',
    topics: ['languages', 'music', 'community']
  },
  {
    id: 'fichte', name: 'Fichte-Gymnasium', district: 'Weststadt', areaEn: 'Weststadt', areaDe: 'Weststadt',
    address: 'Sophienstraße 12-16, 76133 Karlsruhe', lat: 49.006813, lon: 8.3932475,
    url: 'https://www.fichte-gymnasium.de/',
    tags: ['languages', 'science', 'community'], tagsEn: ['French bilingual', 'Abibac', 'MINT & social projects'], tagsDe: ['Französisch bilingual', 'Abibac', 'MINT & soziales Engagement'],
    highlightsEn: 'French-bilingual learning and Abibac, a combined German Abitur and French baccalauréat option; MINT projects too.', highlightsDe: 'Bilingualer Französischunterricht und Abibac, eine Kombination aus deutschem Abitur und französischem Baccalauréat; außerdem MINT-Angebote.',
    profileEn: 'The French bilingual pathway can lead to Abibac (German Abitur plus French Baccalauréat). For Year 8, the school’s profile pages differ on whether IMP or the newer NIT is offered, so confirm the options for the intake year. Clubs and afternoon care are additional offers whose current availability should be checked.',
    profileDe: 'Der bilinguale Französischzweig kann zum Abibac (deutsches Abitur und französisches Baccalauréat) führen. Bei den Profilen ab Klasse 8 unterscheiden sich die Schulangaben dazu, ob IMP oder das neuere NIT angeboten wird. Bitte das Angebot für den jeweiligen Jahrgang bestätigen lassen. AGs und Nachmittagsbetreuung sind zusätzliche, aktuell zu erfragende Angebote.',
    reading: [
      { url: 'https://www.fichte-gymnasium.de/index.php/unsere-schule-de/schulprofil/abibac-schule', titleEn: 'French pathway & Abibac', titleDe: 'Französischzweig & Abibac' },
      { url: 'https://www.fichte-gymnasium.de/index.php/unsere-schule-de/schulprofil', titleEn: 'School profile', titleDe: 'Schulprofil' },
      { url: 'https://www.fichte-gymnasium.de/index.php/unsere-schule-de/grusswort-der-schulleitung', titleEn: 'Welcome from school leadership', titleDe: 'Grußwort der Schulleitung' }
    ],
    lunchEn: 'School cafeteria ordering system is available; confirm supervision hours.', lunchDe: 'Ein Bestellsystem für die Mensa ist vorhanden; Betreuungszeiten erfragen.',
    mensaUrl: 'https://fichte-gymnasium-ka.inetmenue.de/',
    eventEn: 'Check the school’s 2027/28 information PDF for the confirmed date.', eventDe: 'Den bestätigten Termin im Infoblatt 2027/28 der Schule nachsehen.', eventUrl: 'https://www.fichte-gymnasium.de/images/service/tdot/2027/InfoSextaneranmeldung_2027_2028.pdf',
    abiEn: 'Abibac option: German Abitur plus French baccalauréat. Ask about language requirements.', abiDe: 'Abibac: deutsches Abitur plus französisches Baccalauréat. Sprachvoraussetzungen erfragen.',
    topics: ['languages', 'science', 'community']
  },
  {
    id: 'goethe', name: 'Goethe-Gymnasium', district: 'Innenstadt', areaEn: 'City centre · Innenstadt', areaDe: 'Innenstadt',
    address: 'Renckstraße 2, 76133 Karlsruhe', lat: 49.0038602, lon: 8.3959679,
    url: 'https://www.goethe-gymnasium-karlsruhe.de/',
    tags: ['science', 'languages', 'arts'], tagsEn: ['AI School of the Future', 'MINT-friendly', 'Erasmus+'], tagsDe: ['Zukunftsschule KI', 'MINT-freundlich', 'Erasmus+'],
    highlightsEn: 'Since November 2026, part of Baden-Württemberg’s “Zukunftsschule KI” network, developing pedagogically sound, responsible, and critically reflective uses of AI in teaching and school development; also recognised for MINT learning and Erasmus+ projects.',
    highlightsDe: 'Seit November 2026 Teil des Netzwerks „Zukunftsschule KI“ in Baden-Württemberg: Die Schule entwickelt den didaktisch sinnvollen, verantwortungsbewussten und kritisch-reflexiven Einsatz von KI im Unterricht und in der Schulentwicklung. Außerdem MINT-freundliche Schule und Erasmus+-Projekte.',
    aiUrl: 'https://www.goethe-gymnasium-karlsruhe.de/index.php/kuenstliche-intelligenz',
    profileEn: 'From Year 8, the school lists NIT (science, computing and technology), Italian, or visual arts as profile choices. It also offers English-bilingual learning, with some subjects taught in English in later years. The school describes a broad sport, music, theatre, arts and creative-technical club program, plus transition and learning support for younger students. “Zukunftsschule KI” is a network for developing responsible AI use, not a claim that AI is used in every class.',
    profileDe: 'Ab Klasse 8 nennt die Schule NIT (Naturwissenschaft, Informatik und Technik), Italienisch oder Bildende Kunst als Profilfächer. Außerdem gibt es bilingualen Englischunterricht, in späteren Klassen teilweise auch in Sachfächern. Die Schule beschreibt vielfältige Sport-, Musik-, Theater-, Kunst- und Technik-AGs sowie Angebote zum Ankommen und Lernen. „Zukunftsschule KI“ steht für die Entwicklung eines verantwortungsvollen KI-Einsatzes, nicht für KI in jedem Unterricht.',
    reading: [
      { url: 'https://www.goethe-gymnasium-karlsruhe.de/index.php/unsere-schule/wir-ueber-uns/das-goethe-gymnasium', titleEn: 'School, profiles & bilingual learning', titleDe: 'Schule, Profile & bilingualer Unterricht' },
      { url: 'https://www.goethe-gymnasium-karlsruhe.de/index.php/kuenstliche-intelligenz', titleEn: 'AI initiative', titleDe: 'Zukunftsschule KI' },
      { url: 'https://www.goethe-gymnasium-karlsruhe.de/index.php/lernen-am-goethe/lernen-am-goethe-i/betreuungsangebot', titleEn: 'Afternoon care', titleDe: 'Betreuungsangebot' }
    ],
    lunchEn: 'School cafeteria with an online meal-ordering system.', lunchDe: 'Mensa mit Online-Bestellsystem für das Mittagessen.',
    mensaUrl: 'https://goethe-gymnasium-ka.inetmenue.de/',
    eventEn: '2027/28 date not confirmed yet.', eventDe: 'Termin für 2027/28 noch nicht bestätigt.', eventUrl: 'https://www.goethe-gymnasium-karlsruhe.de/',
    abiEn: 'General Abitur; ask about advanced courses and the options available to your year group.', abiDe: 'Allgemeine Hochschulreife; Leistungsfächer und Angebote für deinen Jahrgang erfragen.',
    topics: ['science', 'languages', 'arts', 'community']
  },
  {
    id: 'neureut', name: 'Gymnasium Neureut', district: 'Neureut', areaEn: 'Neureut', areaDe: 'Neureut',
    address: 'Unterfeldstraße 6, 76149 Karlsruhe', lat: 49.0451453, lon: 8.3782194,
    url: 'https://www.gymneureut.de/',
    tags: ['science', 'languages', 'sport'], tagsEn: ['New NIT profile', 'Sport profile', 'Spanish'], tagsDe: ['Neues NIT-Profil', 'Sportprofil', 'Spanisch'],
    highlightsEn: 'For 2027/28, the school lists a new science, computing and technology (NIT) profile and a sport profile.', highlightsDe: 'Für 2027/28 nennt die Schule ein neues Profil Naturwissenschaft, Informatik und Technik (NIT) sowie ein Sportprofil.',
    profileEn: 'Profile options depend on the G9 transition: the school describes NwT, IMP or Spanish for the current pathway, with NIT replacing NwT/IMP and a new sport profile planned for 2027/28. English or French starts in Year 5; Spanish may be a third language. Ask which pathway applies to the child’s intake year. The school also lists clubs and after-school supervision.',
    profileDe: 'Die Profilwahl hängt vom G9-Übergang ab: Für den bisherigen Bildungsgang nennt die Schule NwT, IMP oder Spanisch; ab 2027/28 sind NIT anstelle von NwT/IMP und ein neues Sportprofil vorgesehen. In Klasse 5 beginnt Englisch oder Französisch; Spanisch kann dritte Fremdsprache sein. Bitte klären, was für den eigenen Jahrgang gilt. Außerdem gibt es AGs und Betreuungsangebote.',
    reading: [
      { url: 'https://www.gymneureut.de/lernen/profile', titleEn: 'Subject profiles', titleDe: 'Profile' },
      { url: 'https://www.gymneureut.de/lernen/profile/sport', titleEn: 'Sport profile', titleDe: 'Sportprofil' },
      { url: 'https://www.gymneureut.de/lernen/sprachenfolgen', titleEn: 'Language pathways', titleDe: 'Sprachenfolgen' },
      { url: 'https://www.gymneureut.de/besonderes/betreuungsangebote', titleEn: 'Care offers', titleDe: 'Betreuungsangebote' }
    ],
    lunchEn: 'Mensa menu is published online; ask about afternoon care.', lunchDe: 'Der Mensaplan ist online; Nachmittagsbetreuung erfragen.',
    mensaUrl: 'https://schulzentrum-neureut-ka.inetmenue.de/fs/menu/week',
    eventEn: '2027/28 date not confirmed yet.', eventDe: 'Termin für 2027/28 noch nicht bestätigt.', eventUrl: 'https://www.gymneureut.de/service/termine',
    abiEn: 'General Abitur; the school’s profiles shape learning, not a separate Abitur certificate.', abiDe: 'Allgemeine Hochschulreife; Profile prägen das Lernen, sind aber kein eigenes Abitur.',
    topics: ['science', 'languages', 'sport']
  },
  {
    id: 'helmholtz', name: 'Helmholtz-Gymnasium', district: 'Weststadt', areaEn: 'Weststadt · Kaiserallee', areaDe: 'Weststadt · Kaiserallee',
    address: 'Kaiserallee 6, 76133 Karlsruhe', lat: 49.0111534, lon: 8.3837279,
    url: 'https://www.helmholtz-karlsruhe.de/',
    tags: ['music', 'science', 'languages'], tagsEn: ['Music profile', 'Science profile', 'Language profile'], tagsDe: ['Musikprofil', 'Naturwissenschaftliches Profil', 'Sprachliches Profil'],
    highlightsEn: 'A music Gymnasium alongside music, science and language profiles; active choirs and science projects.', highlightsDe: 'Musikgymnasium sowie Musik-, Naturwissenschafts- und Sprachprofile; aktive Chöre und Forschungsprojekte.',
    profileEn: 'The school offers music, language and natural-science profiles. Its music profile starts in Year 5 and does not require prior instrumental experience, but students should be willing to learn an instrument. The separate Musikgymnasium track adds specialist tuition and requires an audition. NIT is planned to replace NwT in 2027/28; confirm the transition for each cohort. Choirs, orchestras and jazz ensembles are also listed.',
    profileDe: 'Die Schule bietet Musik-, Sprach- und naturwissenschaftliche Profile. Das Musikprofil beginnt in Klasse 5; Vorkenntnisse sind nicht erforderlich, aber die Bereitschaft, ein Instrument zu lernen. Das separate Musikgymnasium umfasst zusätzlichen Instrumentalunterricht und ein Vorspiel. NIT soll 2027/28 NwT ablösen; den Übergang für den eigenen Jahrgang bitte bestätigen. Genannt werden außerdem Chöre, Orchester und Jazz-Ensembles.',
    reading: [
      { url: 'https://www.helmholtz-karlsruhe.de/unterricht/profile/musikprofil/', titleEn: 'Music profile', titleDe: 'Musikprofil' },
      { url: 'https://www.helmholtz-karlsruhe.de/musikgymnasium/', titleEn: 'Music Gymnasium & audition', titleDe: 'Musikgymnasium & Vorspiel' },
      { url: 'https://www.helmholtz-karlsruhe.de/unterricht/profile/naturwissenschaftliches-profil/', titleEn: 'Natural-science profile', titleDe: 'Naturwissenschaftliches Profil' },
      { url: 'https://www.helmholtz-karlsruhe.de/unterricht/profile/das-sprachliche-profil/', titleEn: 'Language profile', titleDe: 'Sprachliches Profil' }
    ],
    lunchEn: 'Ask the school about cafeteria and afternoon arrangements.', lunchDe: 'Mensa und Nachmittagsangebote bei der Schule erfragen.',
    eventEn: '2027/28 date not confirmed yet.', eventDe: 'Termin für 2027/28 noch nicht bestätigt.', eventUrl: 'https://www.helmholtz-karlsruhe.de/',
    abiEn: 'General Abitur; ask how music training and profile choices fit together.', abiDe: 'Allgemeine Hochschulreife; erfragen, wie Musikförderung und Profilwahl zusammenpassen.',
    topics: ['music', 'science', 'languages']
  },
  {
    id: 'humboldt', name: 'Humboldt-Gymnasium', district: 'Oststadt', areaEn: 'Oststadt', areaDe: 'Oststadt',
    address: 'Wilhelm-Hausenstein-Allee 22, 76187 Karlsruhe', lat: 49.0330261, lon: 8.3720151,
    url: 'https://www.humboldt-ka.de/unsere-schule/profil/profilwahl/',
    tags: ['science', 'languages', 'community'], tagsEn: ['NIT & computing', 'Spanish profile', 'Digital school'], tagsDe: ['NIT & Informatik', 'Spanisch-Profil', 'Digitale Schule'],
    highlightsEn: 'The new G9 pathway offers a science/technology profile or a Spanish-language profile; the school is also recognised as a digital school.', highlightsDe: 'Im neuen G9 gibt es ein naturwissenschaftlich-technisches oder ein sprachliches Profil mit Spanisch; die Schule ist außerdem als Digitale Schule ausgezeichnet.',
    profileEn: 'Profile choices depend on the G9 cohort: the school describes NwT, IMP or Spanish for one pathway, and NIT or Spanish for the newer cohort. Its pages also describe MINT projects with KIT and an engineering seminar course. String, wind and singing classes are additional music offers, not profile choices. Confirm current profile arrangements and program availability.',
    profileDe: 'Die Profilwahl hängt vom G9-Jahrgang ab: Für einen Bildungsgang nennt die Schule NwT, IMP oder Spanisch, für den neueren NIT oder Spanisch. Außerdem beschreibt sie MINT-Projekte mit dem KIT und einen Schüler-Ingenieur-Kurs. Streicher-, Bläser- und Singklassen sind zusätzliche Musikangebote, keine Profilwahl. Aktuelle Regelungen und Angebote bitte für den Jahrgang bestätigen.',
    reading: [
      { url: 'https://www.humboldt-ka.de/index.php/unsere-schule/profil/profilwahl/', titleEn: 'Profile choices', titleDe: 'Profilwahl' },
      { url: 'https://www.humboldt-ka.de/index.php/unsere-schule/profil/mint-am-hgk/', titleEn: 'MINT projects', titleDe: 'MINT-Angebote' },
      { url: 'https://www.humboldt-ka.de/index.php/unsere-schule/profil/musik-is-it/', titleEn: 'Music offers', titleDe: 'Musikangebote' },
      { url: 'https://www.humboldt-ka.de/index.php/aktiv/mittagessen/', titleEn: 'Lunch', titleDe: 'Mittagessen' }
    ],
    lunchEn: 'Ask about cafeteria hours and afternoon care.', lunchDe: 'Öffnungszeiten der Mensa und Nachmittagsbetreuung erfragen.',
    eventEn: '2027/28 date not confirmed yet.', eventDe: 'Termin für 2027/28 noch nicht bestätigt.', eventUrl: 'https://www.humboldt-ka.de/',
    abiEn: 'General Abitur; profiles are subject pathways, not separate Abitur certificates.', abiDe: 'Allgemeine Hochschulreife; Profile sind fachliche Wege, kein eigenes Abitur.',
    topics: ['science', 'languages', 'community']
  },
  {
    id: 'kant', name: 'Kant-Gymnasium', district: 'Oststadt', areaEn: 'Oststadt · near the city centre', areaDe: 'Oststadt · zentrumsnah',
    address: 'Englerstraße 10, 76131 Karlsruhe', lat: 49.0105054, lon: 8.4099996,
    url: 'https://www.kantgymnasium.de/',
    tags: ['languages', 'science', 'arts'], tagsEn: ['Languages', 'MINT projects', 'Exchange trips'], tagsDe: ['Sprachen', 'MINT-Projekte', 'Austauschfahrten'],
    highlightsEn: 'An active school community with language exchanges, science projects and varied subject activities.', highlightsDe: 'Eine aktive Schulgemeinschaft mit Sprachaustausch, MINT-Projekten und vielfältigen Fachangeboten.',
    profileEn: 'The school describes a science pathway with NwT and a language pathway adding Italian or Russian in Year 8. English begins in Year 5, followed by French or Latin in Year 6. MINT workshops and university activities are enrichment examples, not guaranteed regular offerings. The school also describes after-school care for Years 5–8 with lunch, supervised homework and activities; confirm current availability.',
    profileDe: 'Die Schule beschreibt einen naturwissenschaftlichen Zug mit NwT sowie einen sprachlichen Zug mit Italienisch oder Russisch ab Klasse 8. Englisch beginnt in Klasse 5, Französisch oder Latein folgt in Klasse 6. MINT-Workshops und Hochschulangebote sind Beispiele für Zusatzangebote, keine garantiert regelmäßigen Aktivitäten. Außerdem gibt es laut Schule Nachmittagsbetreuung für Klasse 5 bis 8 mit Mittagessen, Hausaufgabenbetreuung und Aktivitäten; aktuelle Plätze erfragen.',
    reading: [
      { url: 'https://www.kantgymnasium.de/seiten/schulkonzept/profile/index.html', titleEn: 'School profiles', titleDe: 'Profile' },
      { url: 'https://www.kantgymnasium.de/seiten/mint/mint-aktivitaeten/index.html', titleEn: 'MINT activities', titleDe: 'MINT-Aktivitäten' },
      { url: 'https://www.kantgymnasium.de/seiten/schulkonzept/offenene_ganztagesschule/nachmittagsbetreuung/index.html', titleEn: 'Afternoon care', titleDe: 'Nachmittagsbetreuung' },
      { url: 'https://www.kantgymnasium.de/seiten/schulkonzept/sozialcurriculum/index.html', titleEn: 'Social curriculum', titleDe: 'Sozialcurriculum' }
    ],
    lunchEn: 'School cafeteria service is listed on the school website.', lunchDe: 'Ein Mensaangebot ist auf der Schulwebsite aufgeführt.',
    eventEn: '2027/28 date not confirmed yet.', eventDe: 'Termin für 2027/28 noch nicht bestätigt.', eventUrl: 'https://www.kantgymnasium.de/',
    abiEn: 'General Abitur; ask which advanced courses will run for your year group.', abiDe: 'Allgemeine Hochschulreife; erfragen, welche Leistungsfächer für deinen Jahrgang angeboten werden.',
    topics: ['languages', 'science', 'arts']
  },
  {
    id: 'lessing', name: 'Lessing-Gymnasium', district: 'Weststadt', areaEn: 'Weststadt', areaDe: 'Weststadt',
    address: 'Sophienstraße 147, 76135 Karlsruhe', lat: 49.0078202, lon: 8.3751762,
    url: 'https://lessing-gymnasium-karlsruhe.de/cm3/',
    tags: ['arts', 'languages', 'community'], tagsEn: ['Theatre & media', 'Languages', 'Student projects'], tagsDe: ['Theater & Medien', 'Sprachen', 'Schülerprojekte'],
    highlightsEn: 'Student theatre, podcasts and a school newspaper are among the activities featured by the school.', highlightsDe: 'Schülertheater, Podcasts und Schülerzeitung gehören zu den Angeboten der Schule.',
    profileEn: 'Students start English in Year 5, choose French or Latin in Year 6, then choose Spanish as a third language or NwT as a main subject in Year 8. The school also describes exchanges and an International Café. Its Year 5–6 concept includes older-student mentors, learning-to-learn support and extra sport/swimming. Care and lunch details, including prices, can change; confirm current arrangements.',
    profileDe: 'In Klasse 5 beginnt Englisch, in Klasse 6 folgt Französisch oder Latein. Ab Klasse 8 wählen die Schülerinnen und Schüler Spanisch als dritte Fremdsprache oder NwT als Kernfach. Die Schule nennt außerdem Austausche und ein International Café. Zum Konzept für Klasse 5/6 gehören ältere Schüler als Mentoren, Lernbegleitung sowie zusätzlicher Sport- und Schwimmunterricht. Betreuung, Mittagessen und Preise bitte aktuell erfragen.',
    reading: [
      { url: 'https://lessing-gymnasium-karlsruhe.de/cm3/index.php/profil/zuege', titleEn: 'Profile pathways', titleDe: 'Züge und Profile' },
      { url: 'https://lessing-gymnasium-karlsruhe.de/cm3/index.php/profil/sprachen', titleEn: 'Languages', titleDe: 'Sprachen' },
      { url: 'https://lessing-gymnasium-karlsruhe.de/cm3/index.php/medien/dokumente/informationen/440-unterstufenkonzept/file', titleEn: 'Lower-school concept (PDF)', titleDe: 'Unterstufenkonzept (PDF)' },
      { url: 'https://lessing-gymnasium-karlsruhe.de/cm3/index.php/hilfe-rat/mensa', titleEn: 'Cafeteria & meal prices', titleDe: 'Mensa & Essenspreise' }
    ],
    lunchEn: 'A cafeteria meal plan is linked from the school website.', lunchDe: 'Der Mensaplan ist auf der Schulwebsite verlinkt.',
    mensaUrl: 'https://lessing-gymnasium-ka.inetmenue.de/',
    eventEn: '2027/28 date not confirmed yet.', eventDe: 'Termin für 2027/28 noch nicht bestätigt.', eventUrl: 'https://lessing-gymnasium-karlsruhe.de/cm3/index.php/hilfe-rat/anmeldung',
    abiEn: 'General Abitur; ask about upper-school subject choices and arts activities.', abiDe: 'Allgemeine Hochschulreife; Kurswahl in der Oberstufe und Kreativangebote erfragen.',
    topics: ['arts', 'languages', 'community']
  },
  {
    id: 'markgrafen', name: 'Markgrafen-Gymnasium', district: 'Durlach', areaEn: 'Durlach', areaDe: 'Durlach',
    address: 'Gymnasiumstraße 1-3, 76227 Karlsruhe-Durlach', lat: 48.9988942, lon: 8.4774967,
    url: 'https://mgg-karlsruhe.de/',
    tags: ['arts', 'community', 'languages', 'science'], tagsEn: ['MINT & MatheGym', 'Theatre & writing', 'Many clubs', 'Youth-centre lunch'], tagsDe: ['MINT & MatheGym', 'Theater & Schreiben', 'Viele AGs', 'Mittagessen im Jugendhaus'],
    highlightsEn: 'MatheGym offers extra mathematics practice. Ask which MINT clubs or projects are running this year. Lunch is available at the Durlach children and youth centre.', highlightsDe: 'MatheGym bietet zusätzliche Matheübungen. Fragt nach den aktuellen MINT-AGs und Projekten. Mittagessen gibt es im Kinder- und Jugendhaus Durlach.',
    profileEn: 'Students start English in Year 5, choose French or Latin in Year 6, then select a profile after Year 7: Spanish, practical/project-based NwT (science and technology), or IMP (computer science, mathematics and physics). The school also highlights theatre groups across year levels and a Literature and Theatre course. MatheGym is an optional extra-maths platform, not a formal profile. Year 5 homework care and lunch through the nearby youth centre are described; confirm current arrangements. The profile page was last updated in 2023.',
    profileDe: 'In Klasse 5 beginnt Englisch, in Klasse 6 folgt Französisch oder Latein. Nach Klasse 7 wählen die Schülerinnen und Schüler Spanisch, das praktisch und projektorientiert ausgerichtete NwT (Naturwissenschaft und Technik) oder IMP (Informatik, Mathematik und Physik). Die Schule bietet Theater-AGs für verschiedene Altersstufen und einen Kurs Literatur und Theater. MatheGym ist ein zusätzliches Mathe-Lernangebot, kein Profilfach. Hausaufgabenbetreuung in Klasse 5 und Mittagessen im nahegelegenen Jugendhaus sind beschrieben; aktuelle Bedingungen bitte erfragen. Die Profilseite wurde zuletzt 2023 aktualisiert.',
    reading: [
      { url: 'https://mgg-karlsruhe.de/sprachenprofil/', titleEn: 'Languages & profiles', titleDe: 'Sprachen und Profile' },
      { url: 'https://mgg-karlsruhe.de/theater/', titleEn: 'Theatre at MGG', titleDe: 'Theater am MGG' },
      { url: 'https://mgg-karlsruhe.de/nachmittag/', titleEn: 'Afternoon care & lunch', titleDe: 'Nachmittagsbetreuung & Mittagessen' },
      { url: 'https://mgg-karlsruhe.de/unsere-schule/', titleEn: 'About the school', titleDe: 'Unsere Schule' }
    ],
    lunchEn: 'Lunch is available at the nearby children and youth centre; ask about supervision.', lunchDe: 'Mittagessen im nahegelegenen Kinder- und Jugendhaus; Betreuung erfragen.',
    eventEn: '2027/28 date not confirmed yet.', eventDe: 'Termin für 2027/28 noch nicht bestätigt.', eventUrl: 'https://mgg-karlsruhe.de/veranstaltungen/',
    abiEn: 'General Abitur; ask which advanced courses and clubs are available.', abiDe: 'Allgemeine Hochschulreife; Leistungsfächer und AGs erfragen.',
    topics: ['arts', 'community', 'languages', 'science']
  },
  {
    id: 'maxplanck', name: 'Max-Planck-Gymnasium', district: 'Rüppurr', areaEn: 'Rüppurr', areaDe: 'Rüppurr',
    address: 'Krokusweg 49, 76199 Karlsruhe', lat: 48.9766906, lon: 8.4146765,
    url: 'https://www.mpg-ka.de/',
    tags: ['science', 'arts', 'community'], tagsEn: ['School observatory', 'School garden', 'Midday care'], tagsDe: ['Schulsternwarte', 'Schulgarten', 'Mittagsbetreuung'],
    highlightsEn: 'A school observatory, garden, clubs and a midday supervision program offer different ways to explore.', highlightsDe: 'Schulsternwarte, Schulgarten, AGs und Mittagsbetreuung bieten verschiedene Möglichkeiten zum Entdecken.',
    profileEn: 'The school lists art, IMP, NwT and Spanish profile pathways, with NIT planned from 2027/28; confirm which choices apply to each cohort. Examples of profile-linked activities include art projects at the Kunsthalle or ZKM, an IMP week at KIT, and a Spain trip for Spanish-profile students. Year 5 support includes orientation days and older-student mentors. The school also describes bookable midday care with lunch; check current times and availability.',
    profileDe: 'Die Schule nennt die Profile Bildende Kunst, IMP, NwT und Spanisch; ab 2027/28 ist NIT vorgesehen. Welche Wahlmöglichkeiten gelten, hängt vom Jahrgang ab und sollte bestätigt werden. Beispiele für profilbezogene Aktivitäten sind Kunstprojekte in Kunsthalle oder ZKM, eine IMP-Woche am KIT und eine Spanienfahrt für das Spanischprofil. In Klasse 5 gibt es Einführungstage und ältere Schüler als Mentoren. Die buchbare Mittagsbetreuung mit Mittagessen bitte hinsichtlich aktueller Zeiten und Plätze erfragen.',
    reading: [
      { url: 'https://www.mpg-ka.de/bildung/profile', titleEn: 'Profiles & pathways', titleDe: 'Profile' },
      { url: 'https://www.mpg-ka.de/bildung/orientierungsstufe', titleEn: 'Year 5 orientation', titleDe: 'Orientierungsstufe' },
      { url: 'https://www.mpg-ka.de/bildung/mittagsbetreuung', titleEn: 'Midday care', titleDe: 'Mittagsbetreuung' },
      { url: 'https://www.mpg-ka.de/bildung/ausserunterrichtliche-veranstaltungen', titleEn: 'Activities beyond lessons', titleDe: 'Außerunterrichtliche Veranstaltungen' }
    ],
    lunchEn: 'Online meal ordering and midday supervision are listed by the school.', lunchDe: 'Online-Essensbestellung und Mittagsbetreuung sind auf der Schulwebsite aufgeführt.',
    mensaUrl: 'https://max-planck-gymnasium-ka.inetmenue.de/sf/',
    eventEn: '2027/28 date not confirmed yet.', eventDe: 'Termin für 2027/28 noch nicht bestätigt.', eventUrl: 'https://www.mpg-ka.de/',
    abiEn: 'General Abitur; ask which advanced courses and subject combinations are available.', abiDe: 'Allgemeine Hochschulreife; Leistungsfächer und Fächerkombinationen erfragen.',
    topics: ['science', 'arts', 'community']
  }
];

const topicNames = {
  en: { science: 'Science', languages: 'Languages', music: 'Music', arts: 'Arts', sport: 'Sport', community: 'Community' },
  de: { science: 'Naturwissenschaft', languages: 'Sprachen', music: 'Musik', arts: 'Kunst', sport: 'Sport', community: 'Gemeinschaft' }
};
const storageKey = 'schulkompass-karlsruhe-v1';
let language = localStorage.getItem('schulkompass-language') || 'en';
let selectedTopics = new Set();
let selectedDistrict = 'all';
let savedIds = new Set(JSON.parse(localStorage.getItem(storageKey) || '[]'));
let messageTimer;

const byId = (id) => document.getElementById(id);
const text = (key) => translations[language][key];
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
let schoolMap;
const schoolMarkers = new Map();

function transitUrl(school) {
  return `https://www.google.com/maps/dir/?api=1&destination=${school.lat},${school.lon}&travelmode=transit`;
}

function renderMap() {
  const mapElement = byId('schoolMap');
  const listElement = byId('mapSchoolList');
  byId('mapSchoolCount').textContent = `${schools.length} ${text('mapSchools')}`;
  listElement.innerHTML = schools.map((school, index) => `
    <article class="map-school-row">
      <button class="map-school-select" type="button" data-map-school="${school.id}" aria-label="${escapeHtml(school.name)}">
        <span class="school-pin-number">${index + 1}</span>
        <span class="map-school-copy"><strong>${escapeHtml(school.name)}</strong><small>${escapeHtml(school.address)}</small></span>
      </button>
      <a class="map-trip-link" href="${transitUrl(school)}" target="_blank" rel="noreferrer">${escapeHtml(text('mapTrip'))}</a>
    </article>`).join('');

  if (!window.L) {
    mapElement.innerHTML = `<p class="map-fallback">${escapeHtml(text('mapUnavailable'))}</p>`;
    return;
  }

  if (!schoolMap) {
    schoolMap = L.map(mapElement, { scrollWheelZoom: false }).setView([49.006, 8.405], 12);
    const tileLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    });
    tileLayer.on('tileerror', () => {
      const tileStatus = byId('mapTileStatus');
      tileStatus.textContent = text('mapTileUnavailable');
      tileStatus.hidden = false;
    });
    tileLayer.addTo(schoolMap);
  }

  schools.forEach((school, index) => {
    let marker = schoolMarkers.get(school.id);
    if (!marker) {
      const icon = L.divIcon({
        className: 'school-pin-icon',
        html: `<span>${index + 1}</span>`,
        iconSize: [32, 32],
        iconAnchor: [16, 16]
      });
      marker = L.marker([school.lat, school.lon], { icon }).addTo(schoolMap);
      schoolMarkers.set(school.id, marker);
    }
    marker.bindPopup(`<strong>${escapeHtml(school.name)}</strong><br>${escapeHtml(school.address)}<br><a href="${transitUrl(school)}" target="_blank" rel="noreferrer">${escapeHtml(text('mapTrip'))}</a>`);
  });

  listElement.querySelectorAll('[data-map-school]').forEach((button) => {
    button.addEventListener('click', () => {
      const school = schools.find((item) => item.id === button.dataset.mapSchool);
      const marker = schoolMarkers.get(button.dataset.mapSchool);
      if (!school || !marker) return;
      schoolMap.setView([school.lat, school.lon], 15);
      marker.openPopup();
    });
  });
}

function renderStaticCopy() {
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (text(key)) element.innerHTML = text(key);
  });
  byId('languageToggle').textContent = language === 'en' ? 'DE' : 'EN';
  byId('languageToggle').setAttribute('aria-label', language === 'en' ? 'Auf Deutsch wechseln' : 'Switch to English');
  byId('reflection').placeholder = text('reflectionPlaceholder');
  byId('reflection').value = localStorage.getItem('schulkompass-reflection') || '';
  const tileStatus = byId('mapTileStatus');
  if (!tileStatus.hidden) tileStatus.textContent = text('mapTileUnavailable');
  renderTopics();
  renderDistricts();
  renderSchools();
  renderShortlist();
  renderQuestions();
  renderMap();
}

function renderTopics() {
  const topics = text('topics');
  byId('topicGrid').innerHTML = topics.map((topic) => `
    <button class="topic-chip" type="button" data-topic="${topic.id}" aria-pressed="${selectedTopics.has(topic.id)}">
      <span class="topic-icon" aria-hidden="true">${topic.icon}</span><span class="topic-label">${topic[language]}</span>
    </button>`).join('');
  byId('topicGrid').querySelectorAll('[data-topic]').forEach((button) => {
    button.addEventListener('click', () => {
      const topic = button.dataset.topic;
      if (selectedTopics.has(topic)) selectedTopics.delete(topic);
      else selectedTopics.add(topic);
      renderSchools();
      renderTopics();
    });
  });
}

function renderDistricts() {
  const select = byId('districtFilter');
  const current = selectedDistrict;
  const districts = [...new Set(schools.map((school) => school.district))].sort((a, b) => a.localeCompare(b));
  select.innerHTML = `<option value="all">${escapeHtml(text('allAreas'))}</option>${districts.map((district) => `<option value="${escapeHtml(district)}">${escapeHtml(district)}</option>`).join('')}`;
  select.value = current;
}

function getMatches() {
  return schools.filter((school) => (selectedDistrict === 'all' || school.district === selectedDistrict) &&
    (selectedTopics.size === 0 || [...selectedTopics].some((topic) => school.topics.includes(topic))))
    .sort((a, b) => {
      const aScore = [...selectedTopics].filter((topic) => a.topics.includes(topic)).length;
      const bScore = [...selectedTopics].filter((topic) => b.topics.includes(topic)).length;
      return bScore - aScore || a.name.localeCompare(b.name);
    });
}

function createCard(school, index) {
  const isSaved = savedIds.has(school.id);
  const tags = school[language === 'en' ? 'tagsEn' : 'tagsDe'];
  const highlights = school[language === 'en' ? 'highlightsEn' : 'highlightsDe'];
  const lunch = school[language === 'en' ? 'lunchEn' : 'lunchDe'];
  const area = school[language === 'en' ? 'areaEn' : 'areaDe'];
  const profile = school[language === 'en' ? 'profileEn' : 'profileDe'];
  const furtherReading = school.reading.map((item) => `
          <a href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">${escapeHtml(item[language === 'en' ? 'titleEn' : 'titleDe'])} ↗</a>`).join(' · ');
  const eventText = school.id === 'bismarck'
    ? school[language === 'en' ? 'eventEn' : 'eventDe']
    : school.id === 'fichte'
      ? school[language === 'en' ? 'eventEn' : 'eventDe']
      : text('dateTba');
  const announced = school.id === 'bismarck';
  const mapQuery = encodeURIComponent(`${school.name}, Karlsruhe`);
  const tagsHtml = tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join('');
  return `<article class="school-card" style="animation-delay:${Math.min(index * 45, 270)}ms">
    <div class="card-topline"><span class="district-tag">${escapeHtml(area)}</span>
      <button class="save-school" type="button" data-save="${school.id}" aria-pressed="${isSaved}" aria-label="${escapeHtml(isSaved ? text('saved') : text('save'))}: ${escapeHtml(school.name)}" title="${escapeHtml(isSaved ? text('saved') : text('save'))}">${isSaved ? '♥' : '♡'}</button>
    </div>
    <h3 class="school-name">${escapeHtml(school.name)}</h3>
    <p class="school-subtitle">${escapeHtml(highlights)}</p>
    <div class="tag-list">${tagsHtml}</div>
    <div class="open-day ${announced ? 'announced' : ''}"><span class="calendar-icon" aria-hidden="true">▦</span><span><strong>${escapeHtml(text('visitDate'))}:</strong> ${escapeHtml(eventText)}</span></div>
    <div class="card-links"><a href="https://www.google.com/maps/search/?api=1&query=${mapQuery}" target="_blank" rel="noreferrer">${escapeHtml(text('map'))} ↗</a><a href="${escapeHtml(school.url)}" target="_blank" rel="noreferrer">${escapeHtml(text('officialSite'))}</a>${school.aiUrl ? `<a href="${escapeHtml(school.aiUrl)}" target="_blank" rel="noreferrer">${escapeHtml(text('aiInfo'))}</a>` : ''}</div>
    <details class="school-details"><summary>${escapeHtml(text('details'))}</summary>
      <div class="details-content">
        <dl class="detail-item"><dt>${escapeHtml(text('years'))}</dt><dd>${escapeHtml(text('g9'))}</dd></dl>
        <dl class="detail-item"><dt>${escapeHtml(text('specialties'))}</dt><dd>${escapeHtml(highlights)}</dd></dl>
        <dl class="detail-item profile-detail"><dt>${escapeHtml(text('profile'))}</dt><dd>${escapeHtml(profile)}</dd></dl>
        <dl class="detail-item"><dt>${escapeHtml(text('lunch'))}</dt><dd>${escapeHtml(lunch)}</dd></dl>
        ${school.mensaUrl ? `<dl class="detail-item"><dt>${escapeHtml(text('mensaOrdering'))}</dt><dd><a href="${escapeHtml(school.mensaUrl)}" target="_blank" rel="noreferrer">I-NET-Menue ↗</a><br>${escapeHtml(text('mensaInfo'))}</dd></dl>` : ''}
        <dl class="detail-item"><dt>${escapeHtml(text('abitur'))}</dt><dd>${escapeHtml(school[language === 'en' ? 'abiEn' : 'abiDe'])}</dd></dl>
        <dl class="detail-item"><dt>${escapeHtml(text('community'))}</dt><dd>${escapeHtml(tags.join(' · '))}</dd></dl>
        <p class="details-source"><strong>${escapeHtml(text('furtherReading'))}:</strong> ${furtherReading}</p>
        <p class="details-source"><a href="${escapeHtml(school.url)}" target="_blank" rel="noreferrer">${escapeHtml(text('officialSite'))}</a></p>
      </div>
    </details>
  </article>`;
}

function renderSchools() {
  const matches = getMatches();
  const noun = matches.length === 1 ? text('matched') : text('matches');
  byId('matchCount').innerHTML = `<strong>${matches.length}</strong> ${escapeHtml(noun)}`;
  byId('schoolGrid').innerHTML = matches.length
    ? matches.map(createCard).join('')
    : `<div class="empty-results">${escapeHtml(language === 'en' ? 'No schools match this combination. Try another area or topic.' : 'Keine Schule passt zu dieser Auswahl. Probiere eine andere Gegend oder ein anderes Thema.')}</div>`;
  byId('schoolGrid').querySelectorAll('[data-save]').forEach((button) => button.addEventListener('click', () => toggleSaved(button.dataset.save)));
}

function renderShortlist() {
  const selected = schools.filter((school) => savedIds.has(school.id));
  byId('navCount').textContent = String(selected.length);
  if (!selected.length) {
    byId('shortlistContent').innerHTML = `<p class="shortlist-empty">${escapeHtml(text('noneSaved'))}</p>`;
    return;
  }
  byId('shortlistContent').innerHTML = selected.map((school) => `<article class="shortlist-item">
    <div class="shortlist-item-head"><div><h3>${escapeHtml(school.name)}</h3><p>${escapeHtml(school[language === 'en' ? 'areaEn' : 'areaDe'])}</p></div>
    <button class="remove-school" type="button" data-remove="${school.id}">${language === 'en' ? 'Remove' : 'Entfernen'}</button></div>
    <p class="shortlist-event"><strong>${escapeHtml(text('visitDate'))}:</strong> ${escapeHtml(school.id === 'bismarck' ? school[language === 'en' ? 'eventEn' : 'eventDe'] : text('dateTba'))}</p>
  </article>`).join('');
  byId('shortlistContent').querySelectorAll('[data-remove]').forEach((button) => button.addEventListener('click', () => toggleSaved(button.dataset.remove)));
}

function renderQuestions() {
  byId('questionList').innerHTML = text('visitQuestions').map((question) => `<li>${escapeHtml(question)}</li>`).join('');
}

function toggleSaved(id) {
  if (savedIds.has(id)) {
    savedIds.delete(id);
    showMessage(text('removedToast'));
  } else {
    savedIds.add(id);
    showMessage(text('savedToast'));
  }
  localStorage.setItem(storageKey, JSON.stringify([...savedIds]));
  renderSchools();
  renderShortlist();
}

function showMessage(message) {
  const status = byId('saveStatus');
  status.textContent = message;
  clearTimeout(messageTimer);
  messageTimer = setTimeout(() => { status.textContent = text('savedNote'); }, 2200);
}

byId('districtFilter').addEventListener('change', (event) => {
  selectedDistrict = event.target.value;
  renderSchools();
});
byId('languageToggle').addEventListener('click', () => {
  language = language === 'en' ? 'de' : 'en';
  localStorage.setItem('schulkompass-language', language);
  renderStaticCopy();
});
byId('printButton').addEventListener('click', () => window.print());
byId('mapNavLink').addEventListener('click', () => {
  if (schoolMap) window.setTimeout(() => schoolMap.invalidateSize(), 180);
});
byId('reflection').addEventListener('input', (event) => {
  localStorage.setItem('schulkompass-reflection', event.target.value);
  byId('saveStatus').textContent = text('savedNote');
});

renderStaticCopy();
byId('saveStatus').textContent = text('savedNote');
