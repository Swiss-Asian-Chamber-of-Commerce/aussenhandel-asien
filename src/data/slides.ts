export type SlideLayout =
  | "title"
  | "statement"
  | "bullets"
  | "network"
  | "close";

export type Slide = {
  id: string;
  layout: SlideLayout;
  image?: string;
  kicker?: string;
  title: string;
  subtitle?: string;
  bullets?: string[];
  meta?: string;
  notes: string;
};

export const DECK_TITLE = "Opportunitäten durch Handelsabkommen — Asien";
export const DECK_FILE = "/Nathan-Kaiser-Asien-Handelsabkommen.pptx";
export const DECK_DOWNLOAD_NAME = "Nathan-Kaiser-Asien-Handelsabkommen.pptx";

export const SACC_URL = "https://sacc.ch/";
export const PROCURE_URL = "https://www.procure.ch/";
export const SACC_LOGO = "/brand/sacc-logo-white.png";
export const EVENT_FOOTER =
  "Fachtagung Aussenhandel, procure.ch · 22. September 2026";

export const slides: Slide[] = [
  {
    id: "titel",
    layout: "title",
    image: "/slides/01-port-dusk.jpg",
    kicker: "Fachtagung Aussenhandel  ·  procure.ch",
    title: "Opportunitäten durch Handelsabkommen",
    subtitle: "Asien",
    meta: "Nathan Kaiser  ·  Vice President, Swiss-Asian Chamber of Commerce (SACC)",
    notes:
      "Guten Morgen. Mein Name ist Nathan Kaiser. Ich bin Vice President der Swiss-Asian Chamber of Commerce. Ich habe für diesen Block rund fünfzehn Minuten. Das Thema ist Asien und die Freihandelsabkommen der Schweiz — aus der Sicht des Einkaufs, nicht aus der Sicht der Aussenpolitik.\n\nDie Folien sind knapp gehalten. Der Inhalt liegt im Gesprochenen. Wenn Sie etwas nachschlagen wollen: Sprechertext steht in der Notizansicht der PowerPoint-Datei.\n\nDer Ablauf: zuerst der Rahmen — mehrere asiatische Märkte, nicht einer, und warum die Schweiz oft über die EFTA verhandelt. Dann vier aktuelle Vorgänge: das Upgrade mit China, Vietnam, Thailand und Malaysia. Am Schluss der Punkt, an dem die Abkommen in der Praxis scheitern oder funktionieren: der Ursprungsnachweis. Und drei konkrete Schritte für nächste Woche.",
  },
  {
    id: "these",
    layout: "statement",
    image: "/slides/02-network.jpg",
    kicker: "Ausgangslage",
    title: "Asien ist kein einheitlicher Markt.",
    subtitle: "Jedes Land hat eigene Regeln.",
    notes:
      "Wenn in der Schweiz von «Asien» die Rede ist, meinen viele stillschweigend China. Für den Einkauf ist das zu grob. China, Japan, Korea, die ASEAN-Staaten, Indien — das sind unterschiedliche Zollgebiete, unterschiedliche Ursprungsregeln, unterschiedliche Verfahren. Eine Lieferung aus Shanghai folgt anderen Regeln als eine Lieferung aus Ho-Chi-Minh-Stadt oder aus Bangkok.\n\nDie Schweiz hat zu mehreren dieser Märkte Freihandelsabkommen. Ein Teil gilt seit Jahren. Ein Teil ist 2025 und 2026 neu verhandelt, unterzeichnet oder parlamentarisch behandelt worden. Die Abkommen senken oder beseitigen Zölle auf Industrieprodukte, oft mit Übergangsfristen, und sie legen fest, unter welchen Bedingungen eine Ware als Ursprungsware gilt — nur dann kommt der Vorzugszoll zur Anwendung.\n\nVier Vorgänge stehen heute im Vordergrund. Erstens: die Modernisierung des Abkommens mit China, Verhandlungen abgeschlossen am 20. August 2026, noch nicht in Kraft. Zweitens: Vietnam, Verhandlungen der EFTA abgeschlossen am 2. Juli 2026, noch nicht in Kraft. Drittens: Thailand, unterzeichnet, Zieltermin Inkrafttreten 1. Januar 2027. Viertens: Malaysia, unterzeichnet und in Bern genehmigt, gegenwärtig in der Referendumsfrist. Indien lasse ich bewusst beiseite; das Abkommen gilt seit dem 1. Oktober 2025, ist aber nicht Gegenstand dieses Blocks.",
  },
  {
    id: "einkauf",
    layout: "bullets",
    image: "/slides/03-warehouse.jpg",
    kicker: "Für den Einkauf",
    title: "Was in der Preisrechnung zählt",
    bullets: [
      "Massgeblich ist der Preis nach Zoll, Transport und Abgaben",
      "Ob Zoll anfällt, hängt vom Ursprung der Ware ab",
      "Eine zweite Bezugsquelle in Asien ist oft eine Risikofrage",
      "Ein Abkommen nützt nur, wenn es in der Bestellung angewendet wird",
    ],
    notes:
      "Dieser Block richtet sich an den Einkauf. Es geht nicht um Staatsbesuche und nicht um die politische Bewertung der Partner. Es geht um den Preis, der am Schluss in der Kalkulation steht: Listenpreis plus Fracht, Versicherung, Zoll, allfällige Abgaben, interne Abwicklung.\n\nOb Zoll anfällt, entscheidet sich nicht am Namen des Lieferanten, sondern am Ursprung der Ware und daran, ob ein Abkommen greift. Zwei optisch gleiche Teile — eines aus China, eines aus Vietnam — können unterschiedliche Zollbelastungen haben, sobald das jeweilige Abkommen in Kraft ist und der Ursprung nachgewiesen ist.\n\nViele Unternehmen beziehen in Asien aus einem Land, oft aus China. Eine zweite Bezugsquelle in der Region ist dann keine Mode, sondern eine Frage der Versorgungssicherheit: Handelshemmnisse, Exportkontrollen, Störungen in der Logistik. Vietnam und Thailand werden genau in diesem Zusammenhang diskutiert. Das setzt voraus, dass man die Abkommen kennt, bevor sie in Kraft treten — sonst ändert sich der Zollsatz, und die Verträge sind nicht vorbereitet.\n\nPraktisch: ein Freihandelsabkommen, das nicht in die Zolltarifnummer, in die Lieferantenakte und in die Bestellung übersetzt wird, ändert am bezahlten Preis nichts. Die Präferenz muss beantragt beziehungsweise im Nachweis geführt werden. Sie entsteht nicht von selbst.",
  },
  {
    id: "netz",
    layout: "network",
    kicker: "Das bestehende Netz",
    title: "Was sich 2026 geändert hat",
    notes:
      "Zuerst das, was bereits gilt. Mit Japan besteht ein bilaterales Abkommen seit 2009. Mit Korea, Singapur, Hongkong, den Philippinen und Indonesien bestehen EFTA-Abkommen, in Kraft seit 2006, 2003, 2012, 2018 und 2021. Diese sechs Partner sind das bestehende Netz. Wer dort bezieht oder dorthin liefert, kann die Präferenz in der Regel schon heute nutzen — sofern Ursprung und Nachweis stimmen.\n\nNeu sind 2025 und 2026 vier Vorgänge, die noch nicht oder noch nicht vollständig in der Praxis angekommen sind. China: die Modernisierung des bilateralen Abkommens von 2014, Verhandlungen abgeschlossen am 20. August 2026. Vietnam: EFTA-Verhandlungen abgeschlossen am 2. Juli 2026. Thailand: unterzeichnet im Januar 2025, beide Parlamente haben 2026 genehmigt, angestrebtes Inkrafttreten 1. Januar 2027. Malaysia: unterzeichnet im Juni 2025, in der Schweiz parlamentarisch genehmigt, Referendum bis 8. Oktober 2026.\n\nDer Unterschied in der Form ist wichtig. China und Japan laufen bilateral. Der Rest in Asien, mit dem die Schweiz ein Abkommen hat oder eines vorbereitet, läuft über die EFTA. Deshalb die nächste Folie.",
  },
  {
    id: "efta",
    layout: "bullets",
    image: "/slides/04-geneva.jpg",
    kicker: "Der Verhandlungsrahmen",
    title: "Warum die EFTA verhandelt",
    bullets: [
      "Vier Staaten: Schweiz, Norwegen, Island, Liechtenstein",
      "Gemeinsam mehr Verhandlungsgewicht als jede für sich",
      "Ein Abkommen und einheitliche Ursprungsregeln",
      "Bilateral nur, wo der Partner das will: China, Japan",
    ],
    notes:
      "Die Schweiz schliesst Freihandelsabkommen auf zwei Wegen ab. Der Regelfall gegenüber Drittstaaten ausserhalb der EU ist die Europäische Freihandelsassoziation, die EFTA: Island, Liechtenstein, Norwegen und die Schweiz. Das Sekretariat sitzt in Genf.\n\nDie Logik ist institutionell, nicht ideologisch. Vier vergleichsweise kleine, offene und exportorientierte Volkswirtschaften bündeln ihre Position und treten gegenüber einem Partner gemeinsam auf. Das erhöht das Gewicht am Verhandlungstisch. Es erspart ausserdem vier parallele Verträge mit vier Ursprungsregeln. Für den Einkauf ist das praktisch: ein Regelwerk, ein Nachweisverfahren, anwendbar auf Schweizer Ursprungswaren.\n\nDie vier Staaten sind nicht identisch. Liechtenstein ist mit der Schweiz in einer Zollunion; für den Warenverkehr folgt Liechtenstein in der Regel dem schweizerischen Regime. Norwegen und Island gehören zum Europäischen Wirtschaftsraum, die Schweiz nicht. Nach aussen, bei Freihandelsabkommen mit Drittstaaten, verhandeln sie trotzdem gemeinsam. Voraussetzung ist, dass sie eine gemeinsame Position finden. Landwirtschaft ist der häufigste Vorbehalt: die Schweiz schliesst oft einen eigenen bilateralen Anhang ab, weil die Agrarinteressen nicht dieselben sind wie in Norwegen oder Island.\n\nDer Partner muss mitspielen. China und Japan wollten ein Abkommen mit der Schweiz, nicht mit dem Block. Deshalb diese beiden Sonderfälle. Korea, Singapur, Indonesien, Hongkong, die Philippinen, Vietnam, Thailand, Malaysia und Indien laufen über die EFTA. Wenn Sie später «EFTA–Vietnam» lesen: der Vorzugszoll gilt für Waren mit Ursprung in der Schweiz beziehungsweise in Vietnam, nicht erst, wenn alle vier EFTA-Staaten ratifiziert haben. Das Inkrafttreten kann gestaffelt erfolgen — sobald Malaysia oder Vietnam und mindestens ein EFTA-Staat hinterlegt haben, gilt das Abkommen zwischen diesen Parteien.",
  },
  {
    id: "china-upgrade",
    layout: "bullets",
    image: "/slides/05-shanghai.jpg",
    kicker: "China  ·  20. August 2026",
    title: "Die Modernisierung ist verhandelt",
    bullets: [
      "99,8 % der Schweizer Ausfuhren künftig zollfrei — heute 53,6 %",
      "77,5 % zollfrei ab dem Tag des Inkrafttretens",
      "Zusätzlich rund 244 Millionen Franken Zolleinsparung pro Jahr",
      "Unterzeichnung noch 2026 vorgesehen, danach interne Genehmigung",
    ],
    notes:
      "Mit China besteht seit dem 1. Juli 2014 ein bilaterales Freihandelsabkommen. Es ist das wirtschaftlich gewichtigste Abkommen der Schweiz nach demjenigen mit der EU. China ist der grösste asiatische Handelspartner und weltweit der drittgrösste, nach der EU und den Vereinigten Staaten.\n\nDie Asymmetrie des geltenden Abkommens ist bekannt. Fast alle chinesischen Industrieprodukte kommen zollfrei in die Schweiz. Umgekehrt war bisher nur rund die Hälfte der Schweizer Ausfuhren nach China zollfrei, gemessen am Wert; der Rest blieb ganz oder teilweise zollpflichtig, mit spürbaren Sätzen insbesondere bei Uhren. Dieses Ungleichgewicht war der Grund für die Modernisierungsverhandlungen, aufgenommen im September 2024, abgeschlossen am 20. August 2026 in fünf Runden. Präsident Parmelin und Handelsminister Wang Wentao haben den Abschluss mit einer Absichtserklärung festgehalten.\n\nNach den veröffentlichten Angaben des SECO sollen künftig 99,8 Prozent der Schweizer Ausfuhren nach China zollfrei sein, 77,5 Prozent bereits ab Inkrafttreten, der Rest über Übergangsfristen von fünf bis zehn Jahren. Das zusätzliche jährliche Sparpotenzial gegenüber dem Abkommen von 2014 wird mit 244 Millionen Franken angegeben, vor allem Uhren, Maschinen, Pharma.\n\nDer rechtliche Status ist klar festzuhalten: die Verhandlungen sind abgeschlossen, das Abkommen ist nicht in Kraft. Es folgt die rechtliche Bereinigung der Texte, die Unterzeichnung — vom Bundesrat noch für 2026 angestrebt — und danach die internen Verfahren in beiden Staaten, in der Schweiz inklusive Parlament und allenfalls Referendum. Bis dahin gilt unverändert das Abkommen von 2014. Was Unternehmen jetzt tun können, ist vorbereiten: Tariflinien, Verträge, Ursprungsprozesse. Anwenden können sie die neuen Sätze erst nach Inkrafttreten.",
  },
  {
    id: "china-zahlen",
    layout: "bullets",
    image: "/slides/06-watch.jpg",
    kicker: "China  ·  Ausfuhren",
    title: "Welche Positionen zollfrei werden",
    bullets: [
      "Uhren: von 1 % auf 100 % zollfrei",
      "Pharma: von 29 % auf 100 %",
      "Maschinen: von 75 % auf 100 %",
      "Ursprungsregeln: Bearbeitung in Drittländern und Transit werden lockerer",
    ],
    notes:
      "Drei Branchen tragen den grössten Teil der geplanten Entlastung. Uhren: nach geltendem Abkommen ist nur etwa ein Prozent der Uhrenausfuhren nach China zollfrei. Künftig sollen es hundert Prozent sein, nach Ablauf der Übergangsfristen. Das ist der sichtbarste Posten, weil China auf Uhren hohe Zölle erhebt. Pharma: von 29 auf 100 Prozent. Maschinen: von 75 auf 100 Prozent. Ähnlich Chemie und Präzisionsinstrumente. Die Übergangsfristen für den Rest liegen bei fünf bis zehn Jahren; die genaue Linie muss man an der Zolltarifnummer prüfen, sobald die Listen veröffentlicht sind.\n\nEbenso wichtig wie die Zollsätze sind die Ursprungsregeln. Nach den bisherigen Angaben zur Modernisierung soll künftig bestimmte Bearbeitung in Drittländern zulässig sein, ohne den Ursprung zu verlieren. Der direkte Transport zwischen Schweiz und China wäre nicht mehr zwingend; Transit über Drittstaaten würde erleichtert. Vorgesehen ist auch ein elektronischer Ursprungsnachweis anstelle des papiernen EUR.1. Das erleichtert die Abwicklung, ändert aber nichts daran, dass der Ursprung materiell erfüllt und dokumentiert sein muss.\n\nZwei Abgrenzungen. Erstens: die chinesische Konsumsteuer auf Uhren ist eine Inlandsteuer. Das Freihandelsabkommen betrifft den Zoll, nicht diese Steuer. Wer nur den Zollsatz in die Kalkulation schreibt und die Konsumsteuer vergisst, unterschätzt die Belastung vor Ort. Zweitens: die neuen Sätze gelten erst ab Inkrafttreten. Lieferverträge, die 2027 oder 2028 greifen, kann man schon jetzt mit einer Klausel versehen, die die Präferenz nach Inkrafttreten einbezieht. Verträge, die das nicht tun, bleiben auf dem Regime von 2014.",
  },
  {
    id: "vietnam",
    layout: "bullets",
    image: "/slides/07-vietnam.jpg",
    kicker: "Vietnam  ·  2. Juli 2026",
    title: "Verhandlungen abgeschlossen",
    bullets: [
      "Abkommen der EFTA mit Vietnam, noch nicht in Kraft",
      "Geltungsbereich: Waren, Ursprung, Investitionen, Nachhaltigkeit",
      "Vietnam baut Industriezölle über höchstens elf Jahre ab",
      "Betrifft unter anderem Uhren, Maschinen und Chemie",
    ],
    notes:
      "Vietnam läuft über die EFTA, nicht bilateral. Die Verhandlungen begannen 2012, ruhten längere Zeit und wurden am 8. September 2025 in Genf wieder aufgenommen. Nach fünf Runden wurden sie am 2. Juli 2026 abgeschlossen, bekannt gegeben im Anschluss an die EFTA-Ministertagung in Reykjavík. Der Text ist noch nicht in Kraft; es folgen rechtliche Bereinigung, Unterzeichnung und die jeweiligen innerstaatlichen Verfahren.\n\nDas Abkommen ist als umfassend angelegt: Warenhandel, Ursprungsregeln, technische Handelshemmnisse, gesundheitspolizeiliche und pflanzenschutzrechtliche Massnahmen, Investitionen, geistiges Eigentum, öffentliche Beschaffung, Handel und nachhaltige Entwicklung. Die EFTA-Staaten schaffen Zölle auf Industrieprodukte und Fisch aus Vietnam ab. Vietnam baut seine Industriezölle über höchstens elf Jahre ab. Für die Schweiz relevant sind unter anderem Uhren, Maschinen, Chemie, daneben verarbeitete Landwirtschaft — Käse, Schokolade — in dem Rahmen, den Vietnam zugesteht.\n\nDer Handel zwischen den EFTA-Staaten und Vietnam lag 2025 bei rund 4,8 Milliarden Euro, ohne den Schweizer Goldhandel; der Überschuss lag bei Vietnam. Für den Einkauf ist Vietnam vor allem als Standort neben China von Interesse. Viele Lieferketten, die in China begonnen haben, haben in den letzten Jahren Kapazität in Vietnam aufgebaut — Textilien, Elektronik, Möbel, zunehmend auch präzisere Fertigung. Das Abkommen ändert daran nichts von selbst. Es senkt, sobald es gilt, die Zollbelastung auf dem Weg in die EFTA-Staaten und verbessert die Planbarkeit für Investitionen vor Ort.\n\nVietnam ist ein eigener Rechtsraum. Ursprungsregeln, Arbeitsrecht, Umweltauflagen und die Verwaltungspraxis unterscheiden sich von China. Wer eine zweite Bezugsquelle aufbaut, muss den Ursprung in Vietnam nachweisen können — nicht den Ursprung einer Vorleistung, die weiterhin in China hergestellt wird, sofern die Wertschöpfungs- oder Verarbeitungsschwellen nicht erreicht sind. Das ist der Punkt, an dem viele Verlagerungen später beim Zoll scheitern.",
  },
  {
    id: "thailand",
    layout: "bullets",
    image: "/slides/08-thailand.jpg",
    kicker: "Thailand  ·  1. Januar 2027",
    title: "Unterzeichnet, Inkrafttreten vorgesehen 2027",
    bullets: [
      "Erstes Freihandelsabkommen Thailands mit europäischen Staaten",
      "99,7 % der Schweizer Ausfuhren mit Zollerleichterung, 77 % sofort",
      "Uhren, Pharma, Elektromaschinen — rund 63 Mio. Dollar Sparpotenzial pro Jahr",
      "Parlamente in der Schweiz und in Thailand haben 2026 genehmigt",
    ],
    notes:
      "Thailand ist unter den vier aktuellen Vorgängen derjenige, der der Anwendung am nächsten steht. Das Abkommen der EFTA mit Thailand wurde am 23. Januar 2025 in Davos unterzeichnet. Es ist Thailands erstes Freihandelsabkommen mit europäischen Staaten. Die Europäische Union verhandelt ihrerseits noch; der Zeitvorsprung ist damit sachlich, nicht rhetorisch.\n\nNach Angaben des SECO erhalten 99,7 Prozent der Schweizer Ausfuhren nach Thailand eine Zollerleichterung, 77 Prozent sind ab Inkrafttreten vollständig zollfrei. Uhren machen ohne Gold rund einen Drittel der Ausfuhren aus, danach Pharma und Elektromaschinen. Das jährliche Sparpotenzial wird mit bis zu 63 Millionen US-Dollar angegeben, allein bei Uhren rund 20 Millionen Franken.\n\nDas innerstaatliche Verfahren ist auf beiden Seiten weit fortgeschritten. In der Schweiz hat der Nationalrat im Dezember 2025 zugestimmt, der Ständerat im März 2026. Das thailändische Parlament hat im Juni 2026 zugestimmt. Switzerland Global Enterprise und der Bundesrat nennen als Zieltermin den 1. Januar 2027. Ein Zieltermin ist kein Inkrafttretensdatum; massgeblich ist die Hinterlegung. Aber die Reihenfolge ist klar: Thailand steht vor Vietnam und vor der China-Modernisierung.\n\nFür den Einkauf heisst das: die Zolltarifnummern gegen Thailand kann man jetzt legen. Lieferanten in Thailand kann man jetzt fragen, ob sie Ursprungswaren im Sinne des Abkommens herstellen und den Nachweis führen können. Wer erst im Januar 2027 damit beginnt, verliert die ersten Monate der Präferenz. Bangkok hat im Sommer 2026 bereits eine Delegation in die Schweiz geschickt, die kleine und mittlere Unternehmen auf die Anwendung vorbereitet. Die Gegenseite richtet sich also schon darauf ein.",
  },
  {
    id: "malaysia",
    layout: "bullets",
    image: "/slides/11-malaysia.jpg",
    kicker: "Malaysia  ·  Referendum bis 8. Oktober 2026",
    title: "Unterzeichnet, noch nicht in Kraft",
    bullets: [
      "Wirtschaftspartnerschaftsabkommen EFTA–Malaysia, 23. Juni 2025",
      "Ständerat und Nationalrat haben im März und Juni 2026 zugestimmt",
      "Referendum läuft, Unterschriftenfrist 8. Oktober 2026",
      "99,9 % der Schweizer Ausfuhren mit Zollerleichterung, sobald es gilt",
    ],
    notes:
      "Malaysia ist in der ASEAN-Region der viertwichtigste Güterhandelspartner der Schweiz, nach Singapur, Thailand und Vietnam. Der bilaterale Güterhandel lag 2024 bei rund 2,3 Milliarden Franken. Maschinen, Pharma, Elektrotechnik und Uhren auf der Ausfuhrseite; auf der Einfuhrseite unter anderem Elektronik und agrarische Rohstoffe, namentlich Palmöl.\n\nDas Wirtschaftspartnerschaftsabkommen der EFTA mit Malaysia wurde am 23. Juni 2025 in Tromsø unterzeichnet, nach Verhandlungen, die 2012 aufgenommen, unterbrochen und 2025 abgeschlossen wurden. Der Bundesrat hat die Botschaft am 28. Januar 2026 verabschiedet. Der Ständerat hat am 17. März 2026 zugestimmt, der Nationalrat am 17. Juni 2026. Inhaltlich sieht das Abkommen Zollerleichterungen für 99,9 Prozent der heutigen Schweizer Ausfuhren nach Malaysia vor, teilweise mit Übergangsfristen. Es enthält ausserdem Kapitel zu Dienstleistungen, Investitionen, geistigem Eigentum und — ungewöhnlich für ein asiatisches Partnerland der EFTA — zum öffentlichen Beschaffungswesen.\n\nGegen den Bundesbeschluss wurde am 30. Juni 2026 das Referendum ergriffen, getragen von einer Allianz aus Umwelt-, Entwicklungs- und Bauernorganisationen sowie SP und Grünen. Bis zum 8. Oktober 2026 müssen 50'000 gültige Unterschriften bei der Bundeskanzlei liegen. Kommt das Referendum zustande, entscheidet die Stimmbevölkerung. Der Präzedenzfall ist das Abkommen mit Indonesien, das 2021 knapp angenommen wurde. Der Streitpunkt ist auch hier Palmöl: das Abkommen sieht Zollerleichterungen für ein Kontingent von 12'500 Tonnen vor, verknüpft mit Zertifizierungsanforderungen. Die Gegnerschaft hält die Begleitmassnahmen für unzureichend.\n\nFür den Einkauf folgt daraus eine klare Reihenfolge. Thailand vorbereiten. Vietnam beobachten. Malaysia: den Stand des Referendums verfolgen. Bis zum Inkrafttreten — und das setzt voraus, dass das Referendum entweder nicht zustande kommt oder die Vorlage angenommen wird, und dass Malaysia seinerseits ratifiziert — gelten keine Vorzugszölle. Wer heute malaysische Ware verzollt, tut das zum Drittlandzoll.",
  },
  {
    id: "ursprung",
    layout: "statement",
    image: "/slides/08-origin.jpg",
    kicker: "Anwendung",
    title: "Der Vorzugszoll gilt nur",
    subtitle: "mit nachgewiesenem Ursprung.",
    bullets: [
      "Der niedrigere Zollsatz wird nicht automatisch gewährt",
      "Der Lieferant muss den Ursprung belegen können",
      "Eine falsche Erklärung kann zu Nachzahlung und Verfahren führen",
    ],
    notes:
      "Alle bisherigen Folien beschreiben Rechte auf dem Papier. Eingelöst werden sie erst, wenn die Ware die Ursprungsregeln erfüllt und der Nachweis vorliegt. Der Vorzugszoll ist kein Rabatt, den der Lieferant «mitliefert». Er ist ein Antrag gegenüber der Zollverwaltung, gestützt auf eine Erklärung oder eine Warenverkehrsbescheinigung.\n\nDie Ursprungsregeln unterscheiden sich je nach Abkommen. In Asien gilt in der Regel keine paneuropäische Kumulation. Was in Japan gilt, gilt nicht automatisch in Vietnam. Wer Vorleistungen aus mehreren Ländern bezieht, muss prüfen, ob die Verarbeitung im Ausfuhrland ausreicht — Wertschöpfungsanteil, Tarifsprung, spezifische Bearbeitungsregeln, je nach Position. Beim China-Abkommen nach der Modernisierung soll bestimmte Bearbeitung in Drittländern zulässig werden, und der direkte Transport wäre nicht mehr zwingend. Das hilft nur, wenn Einkauf, Zollstelle und Lieferant denselben Prozess fahren und die Lieferantenerklärung dazu passt.\n\nDie häufigste Schwachstelle in Schweizer KMU ist nicht das fehlende Abkommen, sondern der fehlende Prozess: niemand hat die Zolltarifnummer gegen die Liste gelegt, der Lieferant hat nie eine Langzeit-Lieferantenerklärung abgegeben, die Spedition verzollt zum Drittlandzoll, weil die Unterlagen unvollständig sind. Zwei Jahre später kommt die Nachprüfung. Dann wird nachgezahlt, oft mit Verzugszins, in schwereren Fällen mit einem Verfahren wegen unrichtiger Anmeldung.\n\nDie praktische Frage an den Lieferanten lautet deshalb nicht «habt ihr ein Zertifikat?». Sie lautet: Können Sie für diese Zolltarifnummer den Ursprung nach dem Abkommen X belegen, und welche Vorleistungen stammen aus Drittländern? Wer das nicht schriftlich hat, sollte den Vorzugszoll nicht in die Kalkulation nehmen.",
  },
  {
    id: "montag",
    layout: "bullets",
    image: "/slides/09-boardroom.jpg",
    kicker: "Nächste Schritte",
    title: "Drei Aufgaben für die kommende Woche",
    bullets: [
      "Zolltarifnummern gegen China, Vietnam, Thailand und Malaysia prüfen",
      "Lieferanten fragen, ob sie den Ursprung belegen können",
      "Bezugsquellen: China bleibt; Vietnam und Thailand vorbereiten; Malaysia beobachten",
    ],
    notes:
      "Drei Aufgaben, die man in der kommenden Woche anstossen kann, ohne auf das Inkrafttreten zu warten.\n\nErstens: die eigenen Zolltarifnummern — Einfuhr und Ausfuhr — gegen die vier Vorgänge legen. Wo fällt künftig ein Vorzugszoll an, wo nicht, wo gibt es Übergangsfristen. Thailand zuerst, weil der 1. Januar 2027 der nächste verbindliche Horizont ist. China: die Listen der Modernisierung, sobald sie vorliegen, gegen die Uhren-, Pharma- und Maschinenpositionen. Vietnam und Malaysia: vorerst die Struktur verstehen, die Sätze kommen mit dem veröffentlichten Text.\n\nZweitens: die wichtigsten Lieferanten in diesen Ländern schriftlich fragen, ob sie Ursprungswaren im Sinne des jeweiligen Abkommens herstellen und den Nachweis führen können. Nicht als allgemeine Zusicherung, sondern positionsbezogen. Wer das nicht beantworten kann, ist für die Präferenz vorerst nicht nutzbar, unabhängig vom Inkrafttreten.\n\nDrittens: die Bezugsquellen für 2027 intern festhalten. China bleibt für die meisten Unternehmen der Hauptlieferant in Asien; daran ändert keines der neuen Abkommen etwas. Vietnam und Thailand gehören auf die Liste der geprüften Alternativen, wo Konzentration oder Zollbelastung ein Risiko ist. Malaysia bleibt unter Vorbehalt des Referendums. Das muss kein Strategiepapier sein. Es reicht ein interner Beschluss, welche Lieferanten man bis wann anschreibt und welche Tarifnummern man zuerst prüft.",
  },
  {
    id: "schluss",
    layout: "close",
    image: "/slides/10-dawn.jpg",
    title: "Vielen Dank.",
    subtitle: "Fragen zum asiatischen Teil.",
    meta: "Nathan Kaiser  ·  sacc.ch",
    notes:
      "Das bestehende Netz in Asien — Japan, Korea, Singapur, Indonesien, Hongkong, die Philippinen — kann man heute nutzen. Neu kommen China in modernisierter Form, Vietnam, Thailand und, je nach Ausgang des Referendums, Malaysia hinzu. Der Nutzen entsteht nicht mit der Unterzeichnung, sondern mit dem Ursprungsnachweis und mit der Bestellung. Ich beantworte gern Fragen zum asiatischen Teil. Vielen Dank.",
  },
];
