/**
 * Mana Panduga (మన పండుగ) - AP Cultural Connect & Rural Festivals
 * Core Application Engine
 */

// ==========================================================================
// 1. DATASETS: AP Districts, Festivals, Cultural Arts, Gallery & Panchangam
// ==========================================================================

const AP_DISTRICTS = [
  { id: "VZM", nameEn: "Vizianagaram", nameTe: "విజయనగరం", mandals: ["Vizianagaram", "Gajapathinagaram", "Bobbili", "Cheepurupalli", "Salur"] },
  { id: "SKLM", nameEn: "Srikakulam", nameTe: "శ్రీకాకుళం", mandals: ["Srikakulam", "Mandasa", "Amadalavalasa", "Palasa", "Narasannapeta"] },
  { id: "VSP", nameEn: "Visakhapatnam", nameTe: "విశాఖపట్నం", mandals: ["Bheemunipatnam", "Pendurthi", "Gajuwaka", "Anandapuram"] },
  { id: "AKP", nameEn: "Anakapalli", nameTe: "అనకాపల్లి", mandals: ["Anakapalli", "Chodavaram", "Madugula", "Yellamanchili"] },
  { id: "ASR", nameEn: "Alluri Sitharama Raju", nameTe: "అల్లూరి సీతారామరాజు", mandals: ["Paderu", "Araku Valley", "Rampachodavaram", "Maredumilli"] },
  { id: "KKD", nameEn: "Kakinada", nameTe: "కాకినాడ", mandals: ["Kakinada Rural", "Pithapuram", "Samalkota", "Prathipadu"] },
  { id: "EGD", nameEn: "East Godavari", nameTe: "తూర్పు గోదావరి", mandals: ["Rajahmundry Rural", "Korukonda", "Anaparthi", "Gokavaram"] },
  { id: "KNSM", nameEn: "Dr. B.R. Ambedkar Konaseema", nameTe: "డాక్టర్ బి.ఆర్. అంబేద్కర్ కోనసీమ", mandals: ["Amalapuram", "Razole", "Mamidikuduru", "Ambajipeta", "Kothapeta"] },
  { id: "WGD", nameEn: "West Godavari", nameTe: "పశ్చిమ గోదావరి", mandals: ["Bhimavaram", "Tanuku", "Narasapuram", "Palakollu", "Achanta"] },
  { id: "ELR", nameEn: "Eluru", nameTe: "ఏలూరు", mandals: ["Eluru", "Jangareddygudem", "Nuzvid", "Denduluru"] },
  { id: "KRS", nameEn: "Krishna", nameTe: "కృష్ణా", mandals: ["Machilipatnam", "Gudivada", "Movva", "Avanigadda", "Pamarru"] },
  { id: "NTR", nameEn: "NTR", nameTe: "ఎన్టీఆర్", mandals: ["Vijayawada Rural", "Mylavaram", "Tiruvuru", "Jaggayyapeta"] },
  { id: "GNT", nameEn: "Guntur", nameTe: "గుంటూరు", mandals: ["Guntur Rural", "Mangalagiri", "Tadikonda", "Tenali", "Ponnur"] },
  { id: "PLN", nameEn: "Palnadu", nameTe: "పల్నాడు", mandals: ["Narasaraopet", "Sattenapalle", "Gurazala", "Macherla", "Vinukonda"] },
  { id: "BPT", nameEn: "Bapatla", nameTe: "బాపట్ల", mandals: ["Bapatla", "Chirala", "Repalle", "Vemuru"] },
  { id: "PKM", nameEn: "Prakasam", nameTe: "ప్రకాశం", mandals: ["Ongole", "Markapur", "Kanigiri", "Giddalur", "Podili"] },
  { id: "NLR", nameEn: "SPSR Nellore", nameTe: "శ్రీ పొట్టి శ్రీరాములు నెల్లూరు", mandals: ["Nellore Rural", "Kavali", "Gudur", "Atmakur", "Venkatagiri"] },
  { id: "KNL", nameEn: "Kurnool", nameTe: "కర్నూలు", mandals: ["Kurnool Rural", "Adoni", "Yemmiganur", "Alur", "Kodumur"] },
  { id: "NDL", nameEn: "Nandyal", nameTe: "నంద్యాల", mandals: ["Nandyal", "Allagadda", "Srisailam", "Banaganapalle", "Nandikotkur"] },
  { id: "ATP", nameEn: "Ananthapuramu", nameTe: "అనంతపురము", mandals: ["Anantapur Rural", "Guntakal", "Tadipatri", "Uravakonda"] },
  { id: "SSS", nameEn: "Sri Sathya Sai", nameTe: "శ్రీ సత్యసాయి", mandals: ["Puttaparthi", "Dharmavaram", "Kadiri", "Penukonda", "Lepakshi"] },
  { id: "KDP", nameEn: "YSR Kadapa", nameTe: "వైఎస్ఆర్ కడప", mandals: ["Kadapa", "Proddatur", "Pulivendula", "Jammalamadugu", "Vontimitta"] },
  { id: "ANM", nameEn: "Annamayya", nameTe: "అన్నమయ్య", mandals: ["Rayachoti", "Rajampet", "Madanapalle", "Railway Koduru"] },
  { id: "TPT", nameEn: "Tirupati", nameTe: "తిరుపతి", mandals: ["Tirupati Urban", "Chandragiri", "Srikalahasti", "Venkatagiri", "Sullurpeta"] },
  { id: "CTR", nameEn: "Chittoor", nameTe: "చిత్తూరు", mandals: ["Chittoor Rural", "Punganur", "Nagari", "Palamaner", "Kuppam"] },
  { id: "PVM", nameEn: "Parvathipuram Manyam", nameTe: "పార్వతీపురం మన్యం", mandals: ["Parvathipuram", "Salur", "Kurupam", "Palakonda"] }
];

let FESTIVALS_DATABASE = [
  {
    id: 1,
    titleEn: "Sri Sirimanotsavam Grand Jatara",
    titleTe: "శ్రీ పైడితల్లి సిరిమానోత్సవం జాతర",
    category: "JATARA",
    districtId: "VZM",
    districtEn: "Vizianagaram",
    districtTe: "విజయనగరం",
    mandal: "Vizianagaram",
    village: "Fort Town",
    venue: "Sri Pydithalli Ammavari Devasthanam & Fort Road",
    startDate: "2026-10-20",
    endDate: "2026-10-22",
    bannerImg: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=800&q=80",
    descriptionEn: "North Coastal Andhra's largest folk festival. The temple priest swings high upon the sacred 60-ft Neem tree trunk (Sirimanu) bestowing blessings across lakhs of village devotees.",
    descriptionTe: "ఉత్తరాంధ్రుల ఆరాధ్య దైవం పైడితల్లి అమ్మవారి సిరిమానోత్సవం. 60 అడుగుల సిరిమానుపై ప్రధాన పూజారి ఆశీస్సులు అందిస్తారు.",
    schedule: [
      { time: "05:00 AM", eventEn: "Suprabhata Seva & Special Kunkumarchana", eventTe: "సుప్రభాత సేవ & కుంకుమార్చన" },
      { time: "03:30 PM", eventEn: "Grand Sirimanu Ratham Procession from Fort", eventTe: "కోట నుండి సిరిమాను రథం ఊరేగింపు" },
      { time: "07:00 PM", eventEn: "Tappeta Gullu & Dappu Nrityam Performances", eventTe: "తప్పెట గుళ్ళు & డప్పు నృత్యం" },
      { time: "09:30 PM", eventEn: "Annamayya Keerthanalu & Kolatam Finals", eventTe: "అన్నమయ్య కీర్తనలు & కోలాటం" }
    ],
    prasadamEn: "Maha Annadanam: Continuous from 11:30 AM at Devasthanam Kalyana Mandapam",
    prasadamTe: "మహా అన్నదానం: ఉదయం 11:30 నుండి కళ్యాణ మండపం వద్ద నిరంతరం",
    organizer: "Devasthanam Board & Vizianagaram Yuvatha",
    phone: "9848022331",
    status: "APPROVED"
  },
  {
    id: 2,
    titleEn: "Kotappakonda Sri Trikoteswara Mahasivaratri Thirunallu",
    titleTe: "కోటప్పకొండ త్రికోటేశ్వర మహాశివరాత్రి తిరునాళ్ళు",
    category: "PRABHALU",
    districtId: "PLN",
    districtEn: "Palnadu",
    districtTe: "పల్నాడు",
    mandal: "Narasaraopet",
    village: "Kotappakonda",
    venue: "Kotappakonda Hill Shrine & Foothill Grounds",
    startDate: "2026-03-08",
    endDate: "2026-03-10",
    bannerImg: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=800&q=80",
    descriptionEn: "Famous for colossal 80-100 feet tall electric-illuminated bamboo Prabhalu pulled on giant bullock carts from dozens of surrounding Palnadu villages with folk drums.",
    descriptionTe: "పల్నాడు గ్రామాల నుండి రైతులు ఎడ్లబండ్లపై తీసుకొచ్చే 100 అడుగుల విద్యుత్ ప్రభలు, డప్పు వాయిద్యాల కోలాహలం.",
    schedule: [
      { time: "04:00 AM", eventEn: "Ekadasa Rudrabhishekam at Hilltop", eventTe: "ఏకాదశ రుద్రాభిషేకం" },
      { time: "04:00 PM", eventEn: "Arrival of Village Prabhalu from Gurazala & Vinukonda", eventTe: "గ్రామ ప్రభల రాక" },
      { time: "08:00 PM", eventEn: "All-night Burrakatha & Harikatha Discourses", eventTe: "రాత్రంతా బుర్రకథ & హరికథ గానం" },
      { time: "11:30 PM", eventEn: "Lingodbhava Kala Maha Puja", eventTe: "లింగోద్భవ కాల మహా పూజ" }
    ],
    prasadamEn: "Soma Prasadam & Free Buttermilk Camps across foothill roads",
    prasadamTe: "చలివేంద్రాలు & ఉచిత ప్రసాద వితరణ",
    organizer: "Palnadu Rythu Sangham & Endowment Dept",
    phone: "9440155210",
    status: "APPROVED"
  },
  {
    id: 3,
    titleEn: "Tirupati Thathayyagunta Sri Ganga Jatara",
    titleTe: "తిరుపతి తాతయ్యగుంట శ్రీ గంగ జాతర",
    category: "JATARA",
    districtId: "TPT",
    districtEn: "Tirupati",
    districtTe: "తిరుపతి",
    mandal: "Tirupati Urban",
    village: "Thathayyagunta",
    venue: "Sri Ganga Ammavari Temple & Bazaar Streets",
    startDate: "2026-05-12",
    endDate: "2026-05-19",
    bannerImg: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=800&q=80",
    descriptionEn: "Folk festival of Rayalaseema where devotees adopt sacred guises (Bairagi Vesham, Banda Vesham, Thoti Vesham, Matangi Vesham) culminating in cheek piercing and clay idol immersion.",
    descriptionTe: "రాయలసీమ సంప్రదాయ జాతర. భక్తులు బైరాగి, బండ, తోటి, మాతంగి వేషాలు ధరించి మొక్కులు తీర్చుకుంటారు.",
    schedule: [
      { time: "06:00 AM", eventEn: "Chatti Chata & Goddess Awakening Rites", eventTe: "చాటింపు & అమ్మవారి మేల్కొలుపు" },
      { time: "05:00 PM", eventEn: "Traditional Vesham Processions across Old Town", eventTe: "వివిధ వేషధారణల ఊరేగింపు" },
      { time: "08:30 PM", eventEn: "Kolatam & Rayalaseema Folk Songs Competition", eventTe: "కోలాటం & జానపద గేయాల పోటీలు" }
    ],
    prasadamEn: "Ambali (Ragi Porridge) distribution at all major corners",
    prasadamTe: "రాగి అంబలి వితరణ",
    organizer: "Ganga Jatara Utsava Committee",
    phone: "9849200114",
    status: "APPROVED"
  },
  {
    id: 4,
    titleEn: "Konaseema Jaggannapeta Prabhala Theertham (Sankranti)",
    titleTe: "కోనసీమ జగ్గన్నపేట ప్రభల తీర్థం (సంక్రాంతి)",
    category: "PRABHALU",
    districtId: "KNSM",
    districtEn: "Dr. B.R. Ambedkar Konaseema",
    districtTe: "డాక్టర్ బి.ఆర్. అంబేద్కర్ కోనసీమ",
    mandal: "Amalapuram",
    village: "Jaggannapeta & Mosallapalli",
    venue: "Lush Paddy Fields of Mosallapalli & Kousika River bank",
    startDate: "2026-01-15",
    endDate: "2026-01-16",
    bannerImg: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    descriptionEn: "400-year-old Kanuma festival tradition where 11 villages bring towering Ekadasa Rudra bamboo Prabhalu through coconut groves and canal waters to an open green arena.",
    descriptionTe: "400 ఏళ్ల చరిత్ర కలిగిన సంక్రాంతి కనుమ నాటి ఉత్సవం. 11 గ్రామాల నుంచి ఏకాదశ రుద్రుల ప్రభలు తరలివస్తాయి.",
    schedule: [
      { time: "02:00 PM", eventEn: "Canal Crossing of Gigantic Bamboo Prabhalu", eventTe: "కాలువ దాటే ప్రభల ఊరేగింపు" },
      { time: "05:30 PM", eventEn: "Congregation of 11 Grama Rudra Deities", eventTe: "11 గ్రామాల ప్రభల మహా సంగమం" },
      { time: "08:00 PM", eventEn: "Haridasu Keerthanas & Burrakatha Performance", eventTe: "హరిదాసు కీర్తనలు & బుర్రకథ" }
    ],
    prasadamEn: "Ariselu, Bobbatlu & traditional Pongal offerings",
    prasadamTe: "అరిసెలు, బొబ్బట్లు & పొంగలి ప్రసాదం",
    organizer: "Konaseema Heritage & Grama Sabhalu",
    phone: "9177884422",
    status: "APPROVED"
  },
  {
    id: 5,
    titleEn: "Kuchipudi Natyotsavam & Bhagavatam Melam",
    titleTe: "కూచిపూడి గ్రామోత్సవం & భాగవత మేళం",
    category: "KUCHIPUDI",
    districtId: "KRS",
    districtEn: "Krishna",
    districtTe: "కృష్ణా",
    mandal: "Movva",
    village: "Kuchipudi",
    venue: "Siddhendra Yogi Natya Peetham Auditorium & Chavadi",
    startDate: "2026-11-04",
    endDate: "2026-11-07",
    bannerImg: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80",
    descriptionEn: "The sacred ancestral birthplace of classical Andhra dance. Village artistes perform the pristine Bhama Kalapam, Gollakalapam, and brass-plate Tarangam all night.",
    descriptionTe: "కూచిపూడి నాట్య జన్మస్థలంలో జరిగే వార్షిక నాట్యోత్సవాలు. భామాకలాపం, గొల్లకలాపం, తరంగం ప్రదర్శనలు.",
    schedule: [
      { time: "06:00 PM", eventEn: "Siddhendra Yogi Puja & Deeparadhana", eventTe: "సిద్ధేంద్ర యోగి పూజ" },
      { time: "07:30 PM", eventEn: "Bhama Kalapam by Village Traditional Troupe", eventTe: "సాంప్రదాయ భామాకలాపం" },
      { time: "10:00 PM", eventEn: "Tarangam Dance on Brass Plates by Young Artistes", eventTe: "ఇత్తడి పళ్ళెంపై తరంగ నృత్యం" }
    ],
    prasadamEn: "Grama Prasadam & Tirtha Vitarana",
    prasadamTe: "తీర్థ ప్రసాద వితరణ",
    organizer: "Kuchipudi Artistes Welfare Society",
    phone: "9441238990",
    status: "APPROVED"
  },
  {
    id: 6,
    titleEn: "Venkatagiri Sri Poleramma Ammavari Jatara",
    titleTe: "వెంకటగిరి శ్రీ పోలేరమ్మ అమ్మవారి జాతర",
    category: "JATARA",
    districtId: "TPT",
    districtEn: "Tirupati",
    districtTe: "తిరుపతి",
    mandal: "Venkatagiri",
    village: "Venkatagiri Town",
    venue: "Poleramma Temple & Rajah Street",
    startDate: "2026-09-15",
    endDate: "2026-09-17",
    bannerImg: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=800&q=80",
    descriptionEn: "Centuries-old grama devatha jatara instituted by Venkatagiri Rajas. Unique clay idol molded with fresh tank silt, dressed in handloom zari sarees, and paraded on a wooden carriage.",
    descriptionTe: "వెంకటగిరి రాజా కాలం నాటి గ్రామ దేవత జాతర. మట్టితో అమ్మవారి విగ్రహం చేసి అద్భుతంగా అలంకరిస్తారు.",
    schedule: [
      { time: "05:00 AM", eventEn: "Grama Chatimpu & Kumbham Samarpana", eventTe: "గ్రామ చాటింపు & కుంభం సమర్పణ" },
      { time: "04:00 PM", eventEn: "Grama Devatha Pallaki Utsavam", eventTe: "పల్లకీ ఉత్సవం" },
      { time: "08:00 PM", eventEn: "Kolatam, Chekka Bhajana & Nataka Pradarsana", eventTe: "చెక్క భజన & నాటక ప్రదర్శన" }
    ],
    prasadamEn: "Ragi Sankati & Pulihora Prasadam",
    prasadamTe: "రాగి సంకటి & పులిహోర ప్రసాదం",
    organizer: "Venkatagiri Grama Utsava Mandali",
    phone: "9848112255",
    status: "APPROVED"
  },
  {
    id: 7,
    titleEn: "Lepakshi Basaveshwara & Nandi Utsavalu",
    titleTe: "లేపాక్షి బసవేశ్వర & నంది ఉత్సవాలు",
    category: "HARIKATHA",
    districtId: "SSS",
    districtEn: "Sri Sathya Sai",
    districtTe: "శ్రీ సత్యసాయి",
    mandal: "Lepakshi",
    village: "Lepakshi",
    venue: "Monolithic Nandi & Veerabhadra Swamy Temple",
    startDate: "2026-02-24",
    endDate: "2026-02-26",
    bannerImg: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=800&q=80",
    descriptionEn: "Celebration of Vijayanagara architecture and rural folklore. Continuous Harikatha sessions on Veerabhadra Charitra, Yakshagana, and leather shadow puppetry (Tolu Bommalata).",
    descriptionTe: "విజయనగర వైభవాన్ని చాటే ఉత్సవాలు. తోలుబొమ్మలాట, యక్షగానం మరియు హరికథా గానం.",
    schedule: [
      { time: "07:00 AM", eventEn: "Maha Abhishekam to Monolithic Basavanna", eventTe: "ఏకశిలా బసవన్నకు మహాభిషేకం" },
      { time: "06:00 PM", eventEn: "Tolu Bommalata (Shadow Puppetry - Sundarakanda)", eventTe: "తోలుబొమ్మలాట (సుందరకాండ)" },
      { time: "08:30 PM", eventEn: "Harikatha Discourse by Bhagavatar Troupe", eventTe: "భాగవతార్ బృందం హరికథ" }
    ],
    prasadamEn: "Maha Prasadam distribution at Veerabhadra Temple Hall",
    prasadamTe: "వీరభద్ర స్వామి ఆలయం వద్ద మహా ప్రసాదం",
    organizer: "Lepakshi Heritage Samithi",
    phone: "9440889900",
    status: "APPROVED"
  },
  {
    id: 8,
    titleEn: "Nellore Bara Shaheed Dargah Rottela Panduga",
    titleTe: "నెల్లూరు బారా షహీద్ దర్గా రొట్టెల పండుగ",
    category: "JATARA",
    districtId: "NLR",
    districtEn: "SPSR Nellore",
    districtTe: "శ్రీ పొట్టి శ్రీరాములు నెల్లూరు",
    mandal: "Nellore Rural",
    village: "Swarnala Cheruvu",
    venue: "Bara Shaheed Dargah Tank & Banks",
    startDate: "2026-07-28",
    endDate: "2026-08-01",
    bannerImg: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80",
    descriptionEn: "Unique communal harmony festival where lakhs of pilgrims exchange blessed sweet breads (Rottelu) standing in Swarnala tank waters for good health, education, harvest, and marriage.",
    descriptionTe: "మతసామరస్యానికి ప్రతీకగా నిలిచే రొట్టెల పండుగ. స్వర్ణాల చెరువులో రొట్టెల మార్పిడి చేసుకుంటారు.",
    schedule: [
      { time: "08:00 AM", eventEn: "Gandham Utsavam Procession from Kotamitta", eventTe: "గంధం మహోత్సవం ఊరేగింపు" },
      { time: "11:00 AM", eventEn: "Commencement of Rottela Exchange at Water Ghats", eventTe: "రొట్టెల మార్పిడి ప్రారంభం" },
      { time: "07:30 PM", eventEn: "Qawwali & Sufi Folk Music Concerts", eventTe: "కవ్వాలీ & సూఫీ సంగీత విభావరి" }
    ],
    prasadamEn: "Tabarruk & sweet rotti distribution across 12 ghats",
    prasadamTe: "రొట్టెలు & తీపి ప్రసాదం",
    organizer: "Bara Shaheed Dargah Committee & District Admin",
    phone: "9848556677",
    status: "APPROVED"
  }
];

// Cultural Arts In-Depth Data
const CULTURAL_ARTS_DATA = {
  kolatam: {
    titleEn: "Kolatam (Stick Dance of Andhra Villages)",
    titleTe: "కోలాటం (ఆంధ్ర గ్రామాల్లో కర్రల నృత్యం)",
    badge: "Folk Rhythm & Stick Dance",
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
    descEn: "Kolatam, often called the 'Dandia of Andhra Pradesh', is a lively stick dance performed in village chavadis and temple courtyards during Jataras, Sankranti, and Rama Navami. Dancers hold two polished wood sticks (kolalu) struck rhythmically while moving in complex concentric circles called 'Jada Kolatam' (plaiting a colorful braided ceiling of ribbons while dancing).",
    descTe: "కోలాటం ఆంధ్ర గ్రామాల్లో అత్యంత ప్రాచుర్యం పొందిన జానపద నృత్యం. రంగురంగుల కర్రలతో తాళబద్ధంగా అడుగులు వేస్తూ 'జడ కోలాటం' వంటి అద్భుత రీతులలో ప్రదర్శిస్తారు. తిరునాళ్ళు, శ్రీరామనవమి, సంక్రాంతి సమయాల్లో గ్రామాల్లో కోలాట బృందాల సందడి చూడముచ్చటగా ఉంటుంది.",
    highlights: [
      { labelEn: "Key Styles", labelTe: "ప్రధాన రీతులు", valEn: "Chitti Kolatam, Jada Kolatam", valTe: "చిట్టి కోలాటం, జడ కోలాటం" },
      { labelEn: "Instruments", labelTe: "వాయిద్యాలు", valEn: "Mridangam, Talam, Harmoniam", valTe: "మృదంగం, తాళాలు, హార్మోనియం" },
      { labelEn: "Active Troupes", labelTe: "ప్రసిద్ధ బృందాలు", valEn: "240+ Registered Village Mandalis", valTe: "240+ గ్రామ కోలాట మండళ్లు" },
      { labelEn: "Season", labelTe: "ఉత్సవ సమయం", valEn: "Kartika Masam & Sankranti", valTe: "కార్తీక మాసం & సంక్రాంతి" }
    ],
    audioPreviewNote: "Playing rhythmic Kolatam stick beats and devotional Rama Keerthana rhythm."
  },
  burrakatha: {
    titleEn: "Burrakatha (Heroic Ballad Narrative)",
    titleTe: "బుర్రకథ (జానపద వీరగాథల గానం)",
    badge: "Theatrical Folk Ballad",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    descEn: "Burrakatha is the quintessential rural theatrical ballad of Andhra Pradesh. A three-person troupe commands the village stage: the main storyteller (Kathakudu) strums the Tambura with brass ring bells (Andelu) on fingers, flanked by two co-performers playing clay/brass drums (Gummeta / Dakki) - the Hasyakudu injecting witty village humor and the Rajakiyakudu offering moral/social commentary.",
    descTe: "బుర్రకథ ఆంధ్రుల ప్రత్యేక జానపద కళారూపం. కథకుడు తంబూరా మీటుతూ, చేతికి అందెలు తొడిగి వీరగాథలను గానం చేస్తుండగా, పక్కనే ఇద్దరు వంతలు (హాస్యగాడు, రాజకీయం మాట్లాడేవాడు) గుమ్మెట వాయిస్తూ గ్రామ ప్రజలను రంజింపజేస్తారు.",
    highlights: [
      { labelEn: "Trio Setup", labelTe: "బృంద స్వరూపం", valEn: "Kathakudu, Hasyakudu, Vanta", valTe: "కథకుడు, హాస్యగాడు, వంత" },
      { labelEn: "Famous Ballads", labelTe: "ప్రసిద్ధ కథలు", valEn: "Palnadu Yuddham, Bobbili Katha", valTe: "పల్నాటి యుద్ధం, బొబ్బిలి కథ" },
      { labelEn: "Instruments", labelTe: "వాయిద్యాలు", valEn: "Tambura, Gummeta, Andelu", valTe: "తంబూరా, గుమ్మెట, అందెలు" },
      { labelEn: "Pioneers", labelTe: "ప్రముఖులు", valEn: "Nazar, Sunkara, Sheikh Nazar", valTe: "నాజర్, సుంకర సత్యనారాయణ" }
    ],
    audioPreviewNote: "Playing Tambura drone with Gummeta drum beats and ballad recitation."
  },
  harikatha: {
    titleEn: "Harikatha (Devotional Storytelling)",
    titleTe: "హరికథ (భక్తి ప్రవచన సంగీత కళ)",
    badge: "Spiritual Musical Discourse",
    img: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    descEn: "Harikatha ('Stories of Hari') is a composite musical discourse where a single scholarly Bhagavatar narrates episodes from the Ramayana, Mahabharata, and Puranas through classical Carnatic ragas, poetic verses (padyalu), dance movements, and sharp philosophical anecdotes, accompanied by Chipla cymbals and mridangam.",
    descTe: "హరికథ సంగీతం, సాహిత్యం, నాట్యం, వేదాంతాల సంగమం. భాగవతార్ చిడతలు వాయిస్తూ, కాళ్ళకు గజ్జెలు కట్టి పద్యాలు, కీర్తనలతో భక్తి రసాన్ని కురిపిస్తారు. గ్రామ రామమందిరాలు, శివాలయాల్లో హరికథలు నిత్య నూతనం.",
    highlights: [
      { labelEn: "Grandmaster", labelTe: "పితామహుడు", valEn: "Ajjada Adibhatla Narayana Dasu", valTe: "అజ్జాడ ఆదిభట్ల నారాయణదాసు" },
      { labelEn: "Instruments", labelTe: "వాయిద్యాలు", valEn: "Chipla (Cymbals), Gejjelu, Mridangam", valTe: "చిడతలు, గజ్జెలు, మృదంగం" },
      { labelEn: "Popular Themes", labelTe: "ప్రధాన కథలు", valEn: "Srinivasa Kalyanam, Rukmini Kalyanam", valTe: "శ్రీనివాస కళ్యాణం, రుక్మిణీ కళ్యాణం" },
      { labelEn: "School", labelTe: "ప్రసిద్ధ సంస్థ", valEn: "Vizianagaram Harikatha Pathasala", valTe: "విజయనగరం హరికథ పాఠశాల" }
    ],
    audioPreviewNote: "Playing Chipla rhythmic cymbals with classical Carnatic devotional alaap."
  },
  kuchipudi: {
    titleEn: "Kuchipudi (Classical Andhra Natyam)",
    titleTe: "కూచిపూడి (ఆంధ్ర సాంప్రదాయ నృత్యం)",
    badge: "Classical Dance Drama",
    img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80",
    descEn: "Originating in the village of Kuchipudi in Krishna district, this world-renowned classical dance-drama combines graceful Nritta (pure dance), intense Abhinaya (expressions), and spoken dialogues. The legendary Tarangam dance—balancing atop the rim of a brass plate with a pot of water on the head—showcases peak artistic devotion.",
    descTe: "కృష్ణా జిల్లా కూచిపూడి గ్రామంలో పుట్టి అంతర్జాతీయ ఖ్యాతి గడించిన శాస్త్రీయ నృత్య రీతి. భక్తి భావంతో ఇత్తడి పళ్ళెంపై నిలబడి అద్భుతమైన తాళ విన్యాసాలు చేసే 'తరంగం' కూచిపూడి నృత్యానికి తలమానికం.",
    highlights: [
      { labelEn: "Birthplace", labelTe: "పుట్టినిల్లు", valEn: "Kuchipudi Village, Krishna Dist", valTe: "కూచిపూడి గ్రామం, కృష్ణా జిల్లా" },
      { labelEn: "Founder", labelTe: "ఆద్యుడు", valEn: "Siddhendra Yogi (14th Century)", valTe: "సిద్ధేంద్ర యోగి (14వ శతాబ్దం)" },
      { labelEn: "Masterpiece", labelTe: "కీలక నాటకం", valEn: "Bhama Kalapam (Satyabhama)", valTe: "భామాకలాపం" },
      { labelEn: "Feat", labelTe: "ప్రత్యేకత", valEn: "Brass Plate Tarangam Dancing", valTe: "ఇత్తడి పళ్లెంపై నర్తనం" }
    ],
    audioPreviewNote: "Playing Nattuvangam rhythm bells with flute and mridangam jathis."
  },
  folktraditions: {
    titleEn: "Dappu Nrityam, Tappeta Gullu & Tolu Bommalata",
    titleTe: "డప్పు నృత్యం, తప్పెట గుళ్ళు & తోలుబొమ్మలాట",
    badge: "Folk Percussion & Puppetry",
    img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    descEn: "Andhra's rural soil breathes through the thundering beats of Dappu (circular frame drum), the mesmerizing chest-hung bell beats of Tappeta Gullu in Srikakulam, and the magical leather shadow puppet plays (Tolu Bommalata) of Nimmalakunta that keep ancient epics alive under moonlit village skies.",
    descTe: "ఉత్తరాంధ్రుల తప్పెట గుళ్ళు, రాయలసీమ నిమ్మలకుంట తోలుబొమ్మలాటలు మరియు పల్లె పల్లెనా మారుమ్రోగే డప్పు చప్పుళ్ళు ఆంధ్ర గ్రామీణ సంస్కృతికి జీవనాడి.",
    highlights: [
      { labelEn: "Tappeta Gullu", labelTe: "తప్పెట గుళ్ళు", valEn: "Srikakulam & Vizianagaram Troupes", valTe: "శ్రీకాకుళం, విజయనగరం" },
      { labelEn: "Shadow Puppetry", labelTe: "తోలుబొమ్మలాట", valEn: "Nimmalakunta (Ananthapuramu)", valTe: "నిమ్మలకుంట (అనంతపురం)" },
      { labelEn: "Dappu Beat", labelTe: "డప్పు శైలి", valEn: "Jatara & Devatha Melam", valTe: "జాతర & దేవతా మేళం" },
      { labelEn: "Heritage Status", labelTe: "గుర్తింపు", valEn: "GI Tag for Leather Puppets", valTe: "జియోగ్రాఫికల్ ఇండికేషన్ గుర్తింపు" }
    ],
    audioPreviewNote: "Playing energetic rural Dappu drum beats and bronze bell rhythms."
  }
};

// Heritage Memories Gallery
const GALLERY_DATA = [
  { id: 1, type: "sankranti", titleEn: "Gangireddulu Village Visit", titleTe: "సంక్రాంతి గంగిరెద్దుల విన్యాసం", location: "Konaseema", img: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=800&q=80" },
  { id: 2, type: "prabhalu", titleEn: "100ft Illuminated Prabhalu", titleTe: "కోటప్పకొండ విద్యుత్ ప్రభలు", location: "Palnadu", img: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=800&q=80" },
  { id: 3, type: "kolatam", titleEn: "Village Youth Kolatam Mandali", titleTe: "గ్రామ యువకుల కోలాట విన్యాసం", location: "Krishna", img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80" },
  { id: 4, type: "jatara", titleEn: "Sirimanu Ratham Procession", titleTe: "పైడితల్లి సిరిమాను రథం", location: "Vizianagaram", img: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=800&q=80" },
  { id: 5, type: "sankranti", titleEn: "Haridasu Keerthana with Akshaya Patra", titleTe: "హరిదాసు సంకీర్తన", location: "East Godavari", img: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80" },
  { id: 6, type: "jatara", titleEn: "Ganga Jatara Folk Guises", titleTe: "గంగ జాతర వేషధారణ", location: "Tirupati", img: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=800&q=80" },
  { id: 7, type: "prabhalu", titleEn: "Canal Crossing of Kanuma Prabha", titleTe: "కోనసీమ కనుమ ప్రభల ఊరేగింపు", location: "Amalapuram", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" },
  { id: 8, type: "kolatam", titleEn: "Jada Kolatam Ribbon Weaving", titleTe: "జడ కోలాటం రిబ్బన్ల నృత్యం", location: "Guntur", img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80" }
];

// Notifications
let NOTIFICATIONS = [
  { id: 1, title: "Sirimanotsavam Procession Alert", time: "Starts in 4 days at Vizianagaram Fort", type: "alert" },
  { id: 2, title: "Telugu Panchangam Update", time: "Today: Shukla Paksha Dashami, auspicious for Annadanam", type: "panchang" },
  { id: 3, title: "Harikatha Schedule Published", time: "Lepakshi Basaveshwara Temple (3-day discourse)", type: "program" }
];

// Admin Pending Queue
let ADMIN_PENDING_SUBMISSIONS = [
  {
    id: 101,
    titleEn: "Sri Poleramma Jatara - Chilakaluripet",
    titleTe: "శ్రీ పోలేరమ్మ జాతర - చిలకలూరిపేట",
    category: "JATARA",
    districtId: "PLN",
    districtEn: "Palnadu",
    mandal: "Chilakaluripet",
    village: "Ganapavaram",
    venue: "Grama Temple",
    startDate: "2026-11-14",
    endDate: "2026-11-16",
    organizer: "G. Venkateswarlu (Village Volunteer)",
    phone: "9848123456",
    schedule: "6:00 PM: Grama Uregimpu, 8:30 PM: Burrakatha by Master Subba Rao",
    status: "PENDING"
  },
  {
    id: 102,
    titleEn: "Maha Sivaratri Kolatam & Chekka Bhajana Samaram",
    titleTe: "మహాశివరాత్రి కోలాటం & చెక్కభజన సమరం",
    category: "KOLATAM",
    districtId: "GNT",
    districtEn: "Guntur",
    mandal: "Tenali",
    village: "Angalakuduru",
    venue: "Sri Ramalingeswara Swamy Temple Ground",
    startDate: "2026-03-08",
    endDate: "2026-03-09",
    organizer: "K. Ranga Rao (Youth Association)",
    phone: "9177112233",
    schedule: "All night 12 village Kolatam troupes battle for silver stick trophy",
    status: "PENDING"
  }
];

// Translations dictionary
const TRANSLATIONS = {
  en: {
    navFestivals: "Festivals & Jataras",
    navCalendar: "Calendar",
    navCulture: "Cultural Arts",
    navGallery: "Memories",
    btnSubmitFestival: "Submit Festival",
    btnAdmin: "Admin",
    panchangamHeading: "Today's Telugu Panchangam",
    tithiLabel: "Tithi:",
    nakshatraLabel: "Nakshatram:",
    rahuLabel: "Rahu Kalam:",
    utsavamTodayLabel: "Special Event:",
    heroBadge: "Preserving Andhra's Rural Soul & Heritage",
    heroTitle: 'Celebrate the Rich <span class="accent">Grama Utsavalu</span> & Temple Jataralu',
    heroSubtitle: "Discover traditional village fairs, Harikatha, Burrakatha, Kolatam, and sacred temple gatherings across all 26 districts of Andhra Pradesh.",
    heroExploreBtn: "Explore Village Festivals",
    heroCultureBtn: "Cultural Programs",
    statDistrictsLabel: "AP Districts Covered",
    statFestivalsLabel: "Village Jataralu & Fairs",
    statArtistesLabel: "Folk Artistes & Troupes",
    spotlightFeatured: "Featured Mega Jatara",
    countdownLabel: "Grand Procession Commences In",
    unitDays: "Days",
    unitHours: "Hours",
    unitMins: "Mins",
    unitSecs: "Secs",
    btnViewFullSchedule: "View Full Program Itinerary",
    tagRadar: "Village Festival Radar",
    headingFestivals: "Search Andhra Rural Festivals & Jataras",
    descFestivals: "Filter across all districts, mandals, and villages to discover sacred temple thirunallu, folk dance programs, and rural harvest celebrations.",
    viewGrid: "Grid",
    viewCalendar: "Calendar",
    viewTimeline: "Timeline",
    catAll: "All Events",
    catJatara: "Temple Jataralu",
    catKolatam: "Kolatam & Folk Dance",
    catHarikatha: "Harikatha & Burrakatha",
    catKuchipudi: "Kuchipudi & Natakam",
    catPrabha: "Prabha & Rathotsavam",
    showingEvents: "Showing",
    ruralPrograms: "rural programs",
    resetFilters: "Reset Filters",
    tagCulture: "Andhra Samskruthi Vibhaagam",
    headingCulture: "Rural Performing Arts & Heritage",
    descCulture: "Explore the vibrant folk narratives, sacred stick dances, ballad singing, and classical traditions that have enriched village life for generations.",
    tagGallery: "Cultural Visual Archives",
    headingGallery: "Village Festival Photo & Reel Gallery",
    descGallery: "Glimpses of Kotappakonda Prabhalu, Sankranti Gangireddulu, Haridasu keerthanas, and village temple rathotsavams.",
    allMemories: "All Memories",
    volBannerTitle: "Are you a Village Volunteer or Temple Organizer?",
    volBannerDesc: "Help keep your village heritage alive! Submit upcoming temple Jataralu, Kolatam performances, Harikatha schedules, or Annadanam details to be published across Andhra Pradesh.",
    btnSubmitVillageEvent: "Submit Village Event",
    btnReviewDesk: "Admin Verification Desk",
    footerAbout: "A digital preservation and cultural connect platform for rural Andhra Pradesh, celebrating age-old temple fairs, sacred folklore, and village traditions.",
    footerFairsHeading: "Popular Jataras",
    footerCultureHeading: "Cultural Forms",
    footerRegionsHeading: "AP Cultural Regions",
    modalVolTitle: "Submit Village Festival Details",
    formFestName: "Festival / Jatara Name",
    formCategory: "Category",
    formDistrict: "District",
    formMandal: "Mandal",
    formVillage: "Village / Gramam",
    formVenue: "Temple / Venue",
    formStartDate: "Start Date",
    formEndDate: "End Date",
    formSchedule: "Cultural Programs & Schedule",
    formOrganizer: "Volunteer / Organizer Name",
    formPhone: "Contact Phone Number",
    btnCancel: "Cancel",
    btnSubmitForReview: "Submit for Admin Approval",
    notifHeader: "Alerts & Reminders",
    adminDeskHeader: "Admin Verification Desk"
  },
  te: {
    navFestivals: "పండుగలు & జాతరలు",
    navCalendar: "క్యాలెండర్",
    navCulture: "సాంస్కృతిక కళలు",
    navGallery: "జ్ఞాపకాలు",
    btnSubmitFestival: "జాతర నమోదు",
    btnAdmin: "అడ్మిన్",
    panchangamHeading: "నేటి తెలుగు పంచాంగం",
    tithiLabel: "తిథి:",
    nakshatraLabel: "నక్షత్రం:",
    rahuLabel: "రాహు కాలం:",
    utsavamTodayLabel: "ప్రత్యేక ఉత్సవం:",
    heroBadge: "ఆంధ్ర గ్రామీణ సంస్కృతి & వారసత్వ పరిరక్షణ",
    heroTitle: 'మన పల్లె <span class="accent">గ్రామ ఉత్సవాలు</span> & దేవాలయ జాతరల సంబరం',
    heroSubtitle: "ఆంధ్రప్రదేశ్ లోని 26 జిల్లాల్లో జరిగే సాంప్రదాయ జాతరలు, హరికథలు, బుర్రకథలు, కోలాటాలు మరియు పండుగ విశేషాలను తెలుసుకోండి.",
    heroExploreBtn: "గ్రామ పండుగలను అన్వేషించండి",
    heroCultureBtn: "సాంస్కృతిక కార్యక్రమాలు",
    statDistrictsLabel: "కవర్ చేయబడిన AP జిల్లాలు",
    statFestivalsLabel: "గ్రామ జాతరలు & ఉత్సవాలు",
    statArtistesLabel: "జానపద కళాకారులు & బృందాలు",
    spotlightFeatured: "ప్రధాన మహా జాతర",
    countdownLabel: "మహా ఊరేగింపు ప్రారంభానికి సమయం",
    unitDays: "రోజులు",
    unitHours: "గంటలు",
    unitMins: "నిమిషాలు",
    unitSecs: "సెకన్లు",
    btnViewFullSchedule: "పూర్తి కార్యక్రమాల వివరాలు",
    tagRadar: "గ్రామ పండుగల రాడార్",
    headingFestivals: "ఆంధ్ర గ్రామీణ పండుగలు & జాతరలు",
    descFestivals: "దేవాలయ తిరునాళ్ళు, కోలాటం, హరికథ ప్రదర్శనలు మరియు గ్రామీణ సంక్రాంతి సంబరాల సమాచారం.",
    viewGrid: "గ్రిడ్ వ్యూ",
    viewCalendar: "క్యాలెండర్",
    viewTimeline: "టైమ్‌లైన్",
    catAll: "అన్ని ఉత్సవాలు",
    catJatara: "గ్రామ జాతరలు",
    catKolatam: "కోలాటం & నృత్యం",
    catHarikatha: "హరికథ & బుర్రకథ",
    catKuchipudi: "కూచిపూడి & నాటకం",
    catPrabha: "ప్రభలు & రథోత్సవం",
    showingEvents: "కనిపిస్తున్నవి",
    ruralPrograms: "గ్రామీణ కార్యక్రమాలు",
    resetFilters: "ఫిల్టర్లు రీసెట్",
    tagCulture: "ఆంధ్ర సంస్కృతి విభాగం",
    headingCulture: "జానపద కళారూపాలు & సాంస్కృతిక వైభవం",
    descCulture: "తరతరాలుగా పల్లె సీమలకు జీవం పోస్తున్న బుర్రకథలు, కోలాటాలు, హరికథలు మరియు తోలుబొమ్మలాటలు.",
    tagGallery: "సాంస్కృతిక ఛాయాచిత్రాలు",
    headingGallery: "పల్లె పండుగల ఫోటో & రీల్ గ్యాలరీ",
    descGallery: "కోటప్పకొండ విద్యుత్ ప్రభలు, సంక్రాంతి గంగిరెద్దులు, హరిదాసు సంకీర్తనల దృశ్యాలు.",
    allMemories: "అన్ని చిత్రాలు",
    volBannerTitle: "మీరు గ్రామ వాలంటీరా లేదా ఆలయ నిర్వాహకులా?",
    volBannerDesc: "మీ ఊరి పండుగలు, జాతరలు, కోలాటం లేదా అన్నదానం వివరాలను సమర్పించండి. ఆంధ్రప్రదేశ్ అంతటా భక్తులకు చేరవేయండి.",
    btnSubmitVillageEvent: "గ్రామ ఉత్సవాన్ని నమోదు చేయండి",
    btnReviewDesk: "అడ్మిన్ పరిశీలన డెస్క్",
    footerAbout: "ఆంధ్రప్రదేశ్ గ్రామీణ సంస్కృతి, దేవాలయ జాతరలు మరియు జానపద కళలను పరిరక్షించే డిజిటల్ వేదిక.",
    footerFairsHeading: "ప్రసిద్ధ జాతరలు",
    footerCultureHeading: "సాంస్కృతిక కళలు",
    footerRegionsHeading: "సాంస్కృతిక ప్రాంతాలు",
    modalVolTitle: "గ్రామ పండుగ వివరాల నమోదు",
    formFestName: "పండుగ / జాతర పేరు",
    formCategory: "విభాగం",
    formDistrict: "జిల్లా",
    formMandal: "మండలం",
    formVillage: "గ్రామం / పల్లె",
    formVenue: "ఆలయం / ప్రాంగణం",
    formStartDate: "ప్రారంభ తేదీ",
    formEndDate: "ముగింపు తేదీ",
    formSchedule: "కార్యక్రమాల పట్టిక & సమయాలు",
    formOrganizer: "వాలంటీర్ / నిర్వాహకుడి పేరు",
    formPhone: "మొబైల్ ఫోన్ నంబర్",
    btnCancel: "రద్దు",
    btnSubmitForReview: "అడ్మిన్ పరిశీలనకు పంపండి",
    notifHeader: "హెచ్చరికలు & రిమైండర్లు",
    adminDeskHeader: "అడ్మిన్ పరిశీలన డెస్క్"
  }
};

// ==========================================================================
// 2. STATE MANAGEMENT
// ==========================================================================
let currentLanguage = "en";
let currentCategory = "ALL";
let currentView = "grid";
let selectedDistrict = "ALL";
let selectedMandal = "ALL";
let currentCalDate = new Date(2026, 9, 1); // Oct 2026

// Audio Synthesis Engine state
let audioCtx = null;
let isAudioPlaying = false;
let droneGain = null;
let bellInterval = null;

// ==========================================================================
// 3. INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  populateDistrictsDropdown();
  renderPanchangam();
  renderFestivalGrid();
  renderCalendar();
  renderTimeline();
  showCulturalArt("kolatam");
  renderGallery();
  renderNotifications();
  renderAdminSubmissions();
  setupCountdown();
  setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
  document.getElementById("openVolunteerModalBtn")?.addEventListener("click", openVolunteerModal);
  document.getElementById("openAdminDrawerBtn")?.addEventListener("click", openAdminDrawer);
  document.getElementById("notificationBtn")?.addEventListener("click", toggleNotificationDrawer);
  document.getElementById("audioToggleBtn")?.addEventListener("click", toggleFestiveAudio);
  
  // Mobile navigation toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      const navLinks = document.querySelector(".nav-links");
      if (navLinks) {
        navLinks.classList.toggle("mobile-active");
      }
    });
  }

  // Close modals on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeVolunteerModal();
      closeEventDetailsModal();
      closeLightbox();
      closeNotificationDrawer();
      closeAdminDrawer();
    }
  });

}

// ==========================================================================
// 4. LANGUAGE SWITCHER (English / Telugu)
// ==========================================================================
function setLanguage(lang) {
  currentLanguage = lang;
  document.body.setAttribute("data-lang", lang);

  document.getElementById("langEnBtn").classList.toggle("active", lang === "en");
  document.getElementById("langTeBtn").classList.toggle("active", lang === "te");

  // Apply translations to data-i18n elements
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      el.innerHTML = TRANSLATIONS[lang][key];
    }
  });

  // Re-render dynamic elements with correct language
  populateDistrictsDropdown();
  renderFestivalGrid();
  renderCalendar();
  renderTimeline();
  renderAdminSubmissions();
  
  showToast(lang === "te" ? "భాష తెలుగులోకి మార్చబడింది" : "Language switched to English");
}

// ==========================================================================
// 5. PANCHANGAM & COUNTDOWN
// ==========================================================================
function renderPanchangam() {
  const tithiEl = document.getElementById("panchangTithi");
  const nakshatraEl = document.getElementById("panchangNakshatra");
  const rahuEl = document.getElementById("panchangRahu");
  const utsavamEl = document.getElementById("panchangUtsavam");

  if (currentLanguage === "te") {
    tithiEl.textContent = "శుక్ల పక్ష దశమి";
    nakshatraEl.textContent = "రోహిణి నక్షత్రం";
    rahuEl.textContent = "సా. 04:30 - 06:00";
    utsavamEl.textContent = "పైడితల్లి సిరిమాను సంబరం";
  } else {
    tithiEl.textContent = "Shukla Paksha Dashami";
    nakshatraEl.textContent = "Rohini Nakshatram";
    rahuEl.textContent = "04:30 PM - 06:00 PM";
    utsavamEl.textContent = "Sirimanotsavam Prabhalu Active";
  }
}

function setupCountdown() {
  let days = 4, hours = 14, mins = 32, secs = 45;
  setInterval(() => {
    if (secs > 0) {
      secs--;
    } else {
      secs = 59;
      if (mins > 0) {
        mins--;
      } else {
        mins = 59;
        if (hours > 0) {
          hours--;
        } else {
          hours = 23;
          if (days > 0) days--;
        }
      }
    }
    const dEl = document.getElementById("cdDays");
    const hEl = document.getElementById("cdHours");
    const mEl = document.getElementById("cdMins");
    const sEl = document.getElementById("cdSecs");

    if (dEl) dEl.textContent = String(days).padStart(2, "0");
    if (hEl) hEl.textContent = String(hours).padStart(2, "0");
    if (mEl) mEl.textContent = String(mins).padStart(2, "0");
    if (sEl) sEl.textContent = String(secs).padStart(2, "0");
  }, 1000);
}

// ==========================================================================
// 6. DISTRICTS & FILTERS POPULATION
// ==========================================================================
function populateDistrictsDropdown() {
  const distSelect = document.getElementById("districtFilter");
  const vDistSelect = document.getElementById("vDistrict");
  
  if (!distSelect) return;

  const currentVal = distSelect.value;
  distSelect.innerHTML = `<option value="ALL">${currentLanguage === "te" ? "అన్ని 26 జిల్లాలు (All Districts)" : "All 26 AP Districts"}</option>`;
  if (vDistSelect) {
    vDistSelect.innerHTML = `<option value="">${currentLanguage === "te" ? "జిల్లాను ఎంచుకోండి" : "Select District"}</option>`;
  }

  AP_DISTRICTS.forEach((d) => {
    const opt = document.createElement("option");
    opt.value = d.id;
    opt.textContent = currentLanguage === "te" ? `${d.nameTe} (${d.nameEn})` : `${d.nameEn} (${d.nameTe})`;
    distSelect.appendChild(opt);

    if (vDistSelect) {
      const vOpt = document.createElement("option");
      vOpt.value = d.id;
      vOpt.textContent = currentLanguage === "te" ? d.nameTe : d.nameEn;
      vDistSelect.appendChild(vOpt);
    }
  });

  if (currentVal) distSelect.value = currentVal;
}

function handleDistrictChange() {
  const distSelect = document.getElementById("districtFilter");
  const mandalSelect = document.getElementById("mandalFilter");
  selectedDistrict = distSelect.value;

  mandalSelect.innerHTML = `<option value="ALL">${currentLanguage === "te" ? "అన్ని మండలాలు (All Mandals)" : "All Mandals"}</option>`;

  if (selectedDistrict !== "ALL") {
    const distData = AP_DISTRICTS.find((d) => d.id === selectedDistrict);
    if (distData && distData.mandals) {
      distData.mandals.forEach((m) => {
        const opt = document.createElement("option");
        opt.value = m;
        opt.textContent = m;
        mandalSelect.appendChild(opt);
      });
    }
  }

  handleFilterChange();
}

function handleVolunteerDistrictChange() {
  // Can be extended if volunteer form uses dynamic mandals
}

function setCategory(cat) {
  currentCategory = cat;
  document.querySelectorAll(".category-pill").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-cat") === cat);
  });
  handleFilterChange();
}

function handleFilterChange() {
  renderFestivalGrid();
  renderCalendar();
  renderTimeline();
}

function resetFilters() {
  document.getElementById("searchInput").value = "";
  document.getElementById("districtFilter").value = "ALL";
  selectedDistrict = "ALL";
  handleDistrictChange();
  setCategory("ALL");
  showToast(currentLanguage === "te" ? "ఫిల్టర్లు రీసెట్ చేయబడ్డాయి" : "Filters reset successfully");
}

function switchView(view) {
  currentView = view;
  document.getElementById("btnViewGrid").classList.toggle("active", view === "grid");
  document.getElementById("btnViewCalendar").classList.toggle("active", view === "calendar");
  document.getElementById("btnViewTimeline").classList.toggle("active", view === "timeline");

  document.getElementById("festivalGrid").style.display = view === "grid" ? "grid" : "none";
  document.getElementById("calendarView").style.display = view === "calendar" ? "block" : "none";
  document.getElementById("timelineView").style.display = view === "timeline" ? "block" : "none";
}

// Filter evaluation helper
function getFilteredFestivals() {
  const query = document.getElementById("searchInput")?.value.toLowerCase().trim() || "";
  const mandalVal = document.getElementById("mandalFilter")?.value || "ALL";

  return FESTIVALS_DATABASE.filter((fest) => {
    // Only approved
    if (fest.status !== "APPROVED") return false;

    // Category filter
    if (currentCategory !== "ALL" && fest.category !== currentCategory) return false;

    // District filter
    if (selectedDistrict !== "ALL" && fest.districtId !== selectedDistrict) return false;

    // Mandal filter
    if (mandalVal !== "ALL" && fest.mandal !== mandalVal) return false;

    // Text query
    if (query) {
      const matchEn = fest.titleEn.toLowerCase().includes(query) ||
                      fest.village.toLowerCase().includes(query) ||
                      fest.districtEn.toLowerCase().includes(query) ||
                      fest.descriptionEn.toLowerCase().includes(query);
      const matchTe = fest.titleTe.includes(query) || fest.districtTe.includes(query);
      if (!matchEn && !matchTe) return false;
    }

    return true;
  });
}

// ==========================================================================
// 7. RENDER FESTIVAL CARDS (GRID VIEW)
// ==========================================================================
function renderFestivalGrid() {
  const grid = document.getElementById("festivalGrid");
  const countEl = document.getElementById("resultsCount");
  if (!grid) return;

  const filtered = getFilteredFestivals();
  if (countEl) countEl.textContent = filtered.length;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 50px 20px; background: var(--bg-card); border-radius: var(--radius-md); border: 1px dashed var(--border-gold);">
        <i class="fa-solid fa-om" style="font-size: 3rem; color: var(--primary-gold); margin-bottom: 14px;"></i>
        <h3 style="color: #ffffff; margin-bottom: 8px;">${currentLanguage === "te" ? "ఎటువంటి ఉత్సవాలు కనుగొనబడలేదు" : "No Village Festivals Found"}</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem;">${currentLanguage === "te" ? "దయచేసి వేరొక జిల్లా లేదా వర్గాన్ని ఎంచుకోండి లేదా ఫిల్టర్లను రీసెట్ చేయండి." : "Try resetting the search filters or selecting another district."}</p>
        <button class="btn btn-primary" onclick="resetFilters()" style="margin-top: 16px;">
          <i class="fa-solid fa-rotate-left"></i> ${currentLanguage === "te" ? "ఫిల్టర్లు రీసెట్ చేయండి" : "Reset Filters"}
        </button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map((fest) => {
    const title = currentLanguage === "te" ? fest.titleTe : fest.titleEn;
    const districtName = currentLanguage === "te" ? fest.districtTe : fest.districtEn;
    const desc = currentLanguage === "te" ? fest.descriptionTe : fest.descriptionEn;

    // Get 2 schedule previews
    const scheduleItems = fest.schedule.slice(0, 2).map((s) => `
      <div class="schedule-item">
        <span><i class="fa-regular fa-clock" style="color: var(--primary-gold); font-size: 0.75rem;"></i> ${s.time}</span>
        <span style="font-weight: 600; color: #cbd5e1;">${currentLanguage === "te" ? s.eventTe : s.eventEn}</span>
      </div>
    `).join("");

    return `
      <div class="festival-card">
        <div class="card-banner" style="background-image: url('${fest.bannerImg}')">
          <span class="card-badge-top">${fest.category}</span>
          <span class="card-district-badge"><i class="fa-solid fa-location-dot"></i> ${districtName}</span>
          <div class="card-title-group">
            <div class="card-village"><i class="fa-solid fa-tree-city"></i> ${fest.village}, ${fest.mandal}</div>
            <h3 class="card-title font-title">${title}</h3>
          </div>
        </div>

        <div class="card-body">
          <div class="card-meta-list">
            <div class="meta-row">
              <i class="fa-regular fa-calendar-days"></i>
              <span><strong>${currentLanguage === "te" ? "తేదీలు:" : "Dates:"}</strong> ${formatDate(fest.startDate)} - ${formatDate(fest.endDate)}</span>
            </div>
            <div class="meta-row">
              <i class="fa-solid fa-place-of-worship"></i>
              <span><strong>${currentLanguage === "te" ? "వేదిక:" : "Venue:"}</strong> ${fest.venue}</span>
            </div>
          </div>

          <div class="card-schedule-preview">
            <div class="schedule-header">
              <span><i class="fa-solid fa-list-check"></i> ${currentLanguage === "te" ? "ప్రధాన కార్యక్రమాలు" : "Key Programs"}</span>
              <span style="font-size: 0.72rem; color: var(--text-muted);">${fest.schedule.length} ${currentLanguage === "te" ? "ఈవెంట్లు" : "lineups"}</span>
            </div>
            ${scheduleItems}
          </div>

          <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 15px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
            ${desc}
          </p>

          <div class="card-footer">
            <button class="btn btn-primary" style="flex: 1; font-size: 0.82rem; padding: 8px 12px;" onclick="viewEventDetails(${fest.id})">
              <i class="fa-solid fa-circle-info"></i> ${currentLanguage === "te" ? "పూర్తి వివరాలు" : "Full Details"}
            </button>
            <button class="btn-icon" title="${currentLanguage === "te" ? "రిమైండర్ సెట్ చేయండి" : "Set Reminder"}" onclick="setEventReminder(${fest.id})">
              <i class="fa-regular fa-bell"></i>
            </button>
            <button class="btn-icon" title="Share on WhatsApp" onclick="shareOnWhatsApp(${fest.id})">
              <i class="fa-brands fa-whatsapp"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// ==========================================================================
// 8. RENDER INTERACTIVE CALENDAR VIEW
// ==========================================================================
function renderCalendar() {
  const calGrid = document.getElementById("calendarDays");
  const monthLabel = document.getElementById("calendarMonthLabel");
  if (!calGrid || !monthLabel) return;

  const year = currentCalDate.getFullYear();
  const month = currentCalDate.getMonth();

  const monthNamesEn = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const monthNamesTe = ["జనవరి", "ఫిబ్రవరి", "మార్చి", "ఏప్రిల్", "మే", "జూన్", "జూలై", "ఆగస్టు", "సెప్టెంబర్", "అక్టోబర్", "నవంబర్", "డిసెంబర్"];

  monthLabel.textContent = currentLanguage === "te" ? `${monthNamesTe[month]} ${year}` : `${monthNamesEn[month]} ${year}`;

  const firstDayIndex = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  let html = "";

  // Previous month padding days
  for (let i = firstDayIndex - 1; i >= 0; i--) {
    html += `<div class="cal-day-cell inactive"><span class="cal-day-num">${daysInPrevMonth - i}</span></div>`;
  }

  // Current month days
  const activeEvents = getFilteredFestivals();

  for (let d = 1; d <= daysInMonth; d++) {
    const formattedDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    const dayEvents = activeEvents.filter((ev) => ev.startDate <= formattedDate && ev.endDate >= formattedDate);

    const isToday = d === 8 && month === 9 && year === 2026;

    let eventPillsHtml = dayEvents.map((ev) => `
      <div class="cal-event-pill ${ev.category === "KOLATAM" || ev.category === "KUCHIPUDI" ? "cultural" : ""}" title="${ev.titleEn}" onclick="event.stopPropagation(); viewEventDetails(${ev.id})">
        ${currentLanguage === "te" ? ev.titleTe : ev.titleEn}
      </div>
    `).join("");

    html += `
      <div class="cal-day-cell ${isToday ? "today" : ""}" onclick="openDatePopup('${formattedDate}', ${dayEvents.length})">
        <span class="cal-day-num">${d}</span>
        ${eventPillsHtml}
      </div>
    `;
  }

  calGrid.innerHTML = html;
}

function changeMonth(delta) {
  currentCalDate.setMonth(currentCalDate.getMonth() + delta);
  renderCalendar();
}

function openDatePopup(dateStr, count) {
  if (count > 0) {
    showToast(currentLanguage === "te" ? `${dateStr} తేదీన ${count} ఉత్సవాలు ఉన్నాయి` : `${count} festival(s) on ${dateStr}`);
  } else {
    showToast(currentLanguage === "te" ? `${dateStr} తేదీన ఎటువంటి ప్రత్యేక ఉత్సవం నమోదు కాలేదు` : `No scheduled events on ${dateStr}`);
  }
}

// ==========================================================================
// 9. RENDER CHRONOLOGICAL TIMELINE VIEW
// ==========================================================================
function renderTimeline() {
  const container = document.getElementById("timelineView");
  if (!container) return;

  const sortedEvents = [...getFilteredFestivals()].sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

  if (sortedEvents.length === 0) {
    container.innerHTML = `<p style="text-align: center; color: var(--text-muted);">${currentLanguage === "te" ? "ఉత్సవాలు లేవు" : "No events to display in timeline"}</p>`;
    return;
  }

  container.innerHTML = sortedEvents.map((ev, index) => {
    const side = index % 2 === 0 ? "left" : "right";
    const title = currentLanguage === "te" ? ev.titleTe : ev.titleEn;
    const desc = currentLanguage === "te" ? ev.descriptionTe : ev.descriptionEn;

    return `
      <div class="timeline-item ${side}">
        <div class="timeline-marker"></div>
        <div class="timeline-content-card">
          <div class="timeline-date"><i class="fa-regular fa-calendar-check"></i> ${formatDate(ev.startDate)} - ${formatDate(ev.endDate)}</div>
          <h4 style="font-size: 1.15rem; color: #ffffff; margin: 6px 0 4px;" class="font-title">${title}</h4>
          <p style="font-size: 0.8rem; color: var(--primary-gold-light); margin-bottom: 8px;">
            <i class="fa-solid fa-location-dot"></i> ${ev.village}, ${ev.mandal} (${ev.districtEn})
          </p>
          <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 12px;">${desc}</p>
          <button class="btn btn-outline" style="font-size: 0.78rem; padding: 4px 10px;" onclick="viewEventDetails(${ev.id})">
            <i class="fa-solid fa-arrow-up-right-from-square"></i> ${currentLanguage === "te" ? "వివరాలు చూడండి" : "Explore"}
          </button>
        </div>
      </div>
    `;
  }).join("");
}

// ==========================================================================
// 10. CULTURAL ARTS SPOTLIGHT (SAMSKRUTHI VIBHAG)
// ==========================================================================
function showCulturalArt(key) {
  const data = CULTURAL_ARTS_DATA[key];
  if (!data) return;

  // Update tab buttons
  document.querySelectorAll(".cultural-tab-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("onclick")?.includes(key));
  });

  const displayArea = document.getElementById("culturalDisplayArea");
  if (!displayArea) return;

  const title = currentLanguage === "te" ? data.titleTe : data.titleEn;
  const desc = currentLanguage === "te" ? data.descTe : data.descEn;

  const highlightsHtml = data.highlights.map((h) => `
    <div class="highlight-box">
      <div class="highlight-label">${currentLanguage === "te" ? h.labelTe : h.labelEn}</div>
      <div class="highlight-val">${currentLanguage === "te" ? h.valTe : h.valEn}</div>
    </div>
  `).join("");

  displayArea.innerHTML = `
    <div class="cultural-media" style="background-image: url('${data.img}')">
      <div class="media-play-overlay">
        <button class="play-circle-btn" onclick="playArtAudioPreview('${key}')" title="Play Authentic Audio Sample">
          <i class="fa-solid fa-play"></i>
        </button>
        <div>
          <h4 style="color: #ffffff; font-size: 1.1rem; font-weight: 800;">${data.badge}</h4>
          <p style="color: var(--primary-gold-light); font-size: 0.8rem;"><i class="fa-solid fa-volume-high"></i> Click to Hear Traditional Audio</p>
        </div>
      </div>
    </div>

    <div class="cultural-info">
      <div class="hero-badge" style="width: fit-content; margin-bottom: 12px;">
        <i class="fa-solid fa-masks-theater"></i> ${data.badge}
      </div>
      <h3 class="cultural-title font-title">${title}</h3>
      <div class="cultural-telugu-name font-telugu">${data.titleTe}</div>
      <p class="cultural-desc">${desc}</p>

      <div class="cultural-highlights">
        ${highlightsHtml}
      </div>

      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <button class="btn btn-primary" onclick="filterFestivalsByArt('${key}')">
          <i class="fa-solid fa-magnifying-glass"></i> ${currentLanguage === "te" ? "రాబోయే ప్రదర్శనలు కనుగొనండి" : "Find Upcoming Performances"}
        </button>
        <button class="btn btn-outline" onclick="playArtAudioPreview('${key}')">
          <i class="fa-solid fa-music"></i> ${currentLanguage === "te" ? "శబ్ద విన్యాసం వినండి" : "Audio Preview"}
        </button>
      </div>
    </div>
  `;
}

function filterFestivalsByArt(key) {
  let cat = "ALL";
  if (key === "kolatam") cat = "KOLATAM";
  else if (key === "burrakatha" || key === "harikatha") cat = "HARIKATHA";
  else if (key === "kuchipudi") cat = "KUCHIPUDI";
  else if (key === "folktraditions") cat = "JATARA";

  setCategory(cat);
  document.getElementById("festivals")?.scrollIntoView({ behavior: "smooth" });
}

function playArtAudioPreview(key) {
  playBellSound();
  const data = CULTURAL_ARTS_DATA[key];
  showToast(data ? data.audioPreviewNote : "Playing traditional performance sample audio");
}

// ==========================================================================
// 11. PHOTO & VIDEO HERITAGE GALLERY & LIGHTBOX
// ==========================================================================
function renderGallery(filter = "ALL") {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;

  const items = filter === "ALL" ? GALLERY_DATA : GALLERY_DATA.filter((g) => g.type === filter);

  grid.innerHTML = items.map((item) => `
    <div class="gallery-item" onclick="openLightbox(${item.id})">
      <img src="${item.img}" alt="${item.titleEn}" class="gallery-img" loading="lazy">
      <span class="gallery-type-badge"><i class="fa-solid fa-camera"></i> ${item.type.toUpperCase()}</span>
      <div class="gallery-overlay">
        <h4>${currentLanguage === "te" ? item.titleTe : item.titleEn}</h4>
        <p><i class="fa-solid fa-location-dot"></i> ${item.location}</p>
      </div>
    </div>
  `).join("");
}

function filterGallery(type) {
  document.querySelectorAll(".gallery-filter-bar .category-pill").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("onclick")?.includes(type));
  });
  renderGallery(type);
}

function openLightbox(id) {
  const item = GALLERY_DATA.find((g) => g.id === id);
  if (!item) return;

  document.getElementById("lightboxTitle").textContent = currentLanguage === "te" ? item.titleTe : item.titleEn;
  document.getElementById("lightboxImg").src = item.img;
  document.getElementById("lightboxCaption").textContent = `${item.titleEn} (${item.titleTe}) • ${item.location}, Andhra Pradesh`;

  document.getElementById("lightboxModal").classList.add("open");
}

function closeLightbox() {
  document.getElementById("lightboxModal").classList.remove("open");
}

// ==========================================================================
// 12. EVENT DETAILS MODAL & ACTIONS
// ==========================================================================
function viewEventDetails(id) {
  const event = FESTIVALS_DATABASE.find((e) => e.id === id);
  if (!event) return;

  const title = currentLanguage === "te" ? event.titleTe : event.titleEn;
  const desc = currentLanguage === "te" ? event.descriptionTe : event.descriptionEn;
  const districtName = currentLanguage === "te" ? event.districtTe : event.districtEn;
  const prasadam = currentLanguage === "te" ? event.prasadamTe : event.prasadamEn;

  document.getElementById("detailModalTitle").innerHTML = `<i class="fa-solid fa-om" style="color: var(--primary-gold);"></i> ${title}`;

  const scheduleRows = event.schedule.map((s) => `
    <li style="display: flex; gap: 15px; padding: 10px 0; border-bottom: 1px dashed rgba(255, 255, 255, 0.1);">
      <span style="min-width: 85px; color: var(--primary-gold); font-weight: 700;"><i class="fa-regular fa-clock"></i> ${s.time}</span>
      <span style="color: #ffffff;">${currentLanguage === "te" ? s.eventTe : s.eventEn}</span>
    </li>
  `).join("");

  document.getElementById("detailModalBody").innerHTML = `
    <div style="margin-bottom: 20px; border-radius: var(--radius-md); overflow: hidden; max-height: 250px; position: relative;">
      <img src="${event.bannerImg}" alt="${title}" style="width: 100%; height: 250px; object-fit: cover;">
      <div style="position: absolute; bottom: 12px; left: 14px; background: rgba(0,0,0,0.7); padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; color: var(--primary-gold-light);">
        <i class="fa-solid fa-location-dot"></i> ${event.village}, ${event.mandal} (${districtName})
      </div>
    </div>

    <p style="font-size: 0.95rem; color: #e2e8f0; line-height: 1.7; margin-bottom: 20px;">${desc}</p>

    <div style="background: rgba(11, 9, 20, 0.7); border: 1px solid var(--border-gold); border-radius: var(--radius-sm); padding: 16px; margin-bottom: 20px;">
      <h4 style="color: var(--primary-gold); font-size: 1rem; margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">
        <i class="fa-solid fa-calendar-check"></i> ${currentLanguage === "te" ? "పూర్తి కార్యక్రమాల వివరాలు" : "Program Schedule"}
      </h4>
      <ul style="list-style: none; padding: 0;">${scheduleRows}</ul>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 15px;">
      <div style="background: rgba(255,255,255,0.04); padding: 12px; border-radius: var(--radius-sm); border-left: 3px solid var(--mango-green);">
        <strong style="color: var(--mango-green); display: block; font-size: 0.8rem;"><i class="fa-solid fa-bowl-rice"></i> ${currentLanguage === "te" ? "ప్రసాదం / అన్నదానం" : "Prasadam / Annadanam"}</strong>
        <span style="font-size: 0.85rem; color: var(--text-muted);">${prasadam}</span>
      </div>
      <div style="background: rgba(255,255,255,0.04); padding: 12px; border-radius: var(--radius-sm); border-left: 3px solid var(--primary-gold);">
        <strong style="color: var(--primary-gold); display: block; font-size: 0.8rem;"><i class="fa-solid fa-phone"></i> ${currentLanguage === "te" ? "వాలంటీర్ / సంప్రదింపు" : "Volunteer Organizer"}</strong>
        <span style="font-size: 0.85rem; color: var(--text-muted);">${event.organizer} (Ph: ${event.phone})</span>
      </div>
    </div>
  `;

  document.getElementById("detailModalFooter").innerHTML = `
    <button class="btn btn-outline" onclick="downloadIcsCalendar(${event.id})">
      <i class="fa-regular fa-calendar-plus"></i> ${currentLanguage === "te" ? "క్యాలెండర్ కు జోడించండి (.ics)" : "Add to Calendar (.ics)"}
    </button>
    <button class="btn btn-primary" onclick="shareOnWhatsApp(${event.id})">
      <i class="fa-brands fa-whatsapp"></i> ${currentLanguage === "te" ? "వాట్సాప్ లో పంచుకోండి" : "Share on WhatsApp"}
    </button>
  `;

  document.getElementById("eventDetailsModal").classList.add("open");
}

function closeEventDetailsModal() {
  document.getElementById("eventDetailsModal").classList.remove("open");
}

// Download .ics Calendar File
function downloadIcsCalendar(id) {
  const ev = FESTIVALS_DATABASE.find((e) => e.id === id);
  if (!ev) return;

  const startFormatted = ev.startDate.replace(/-/g, "") + "T090000Z";
  const endFormatted = ev.endDate.replace(/-/g, "") + "T210000Z";

  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Mana Panduga AP Cultural Connect//EN
BEGIN:VEVENT
UID:manapanduga-${ev.id}@andhraheritage.org
DTSTAMP:${startFormatted}
DTSTART:${startFormatted}
DTEND:${endFormatted}
SUMMARY:${ev.titleEn} (${ev.titleTe})
LOCATION:${ev.venue}, ${ev.village}, ${ev.mandal}, ${ev.districtEn}
DESCRIPTION:${ev.descriptionEn} - Volunteer Organizer: ${ev.organizer}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `ManaPanduga_${ev.id}_${ev.village}.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast(currentLanguage === "te" ? "క్యాలెండర్ ఫైల్ డౌన్‌లోడ్ చేయబడింది" : "Calendar (.ics) downloaded!");
}

// Share on WhatsApp
function shareOnWhatsApp(id) {
  const ev = FESTIVALS_DATABASE.find((e) => e.id === id);
  if (!ev) return;

  const text = `🎉 *${ev.titleEn} (${ev.titleTe})*\n📅 Dates: ${ev.startDate} to ${ev.endDate}\n📍 Venue: ${ev.venue}, ${ev.village}, ${ev.districtEn}\n🙏 Join with family for cultural programs & Annadanam!\nDiscover more on *Mana Panduga*: https://manapanduga.ap.gov.in`;
  window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, "_blank");
}

function setEventReminder(id) {
  const ev = FESTIVALS_DATABASE.find((e) => e.id === id);
  if (!ev) return;

  NOTIFICATIONS.unshift({
    id: Date.now(),
    title: `Reminder set: ${ev.titleEn}`,
    time: `Event starts on ${ev.startDate} at ${ev.village}`,
    type: "reminder"
  });

  renderNotifications();
  showToast(currentLanguage === "te" ? "ఈవెంట్ రిమైండర్ సెట్ చేయబడింది!" : `Reminder saved for ${ev.titleEn}!`);
}

// Quick Search from Footer
function quickSearch(keyword) {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.value = keyword;
    handleFilterChange();
    document.getElementById("festivals")?.scrollIntoView({ behavior: "smooth" });
  }
}

function filterByRegion(region) {
  if (region === "coastal") selectedDistrict = "KRS";
  else if (region === "rayalaseema") selectedDistrict = "TPT";
  else if (region === "uttarandhra") selectedDistrict = "VZM";
  else if (region === "godavari") selectedDistrict = "KNSM";

  const distSelect = document.getElementById("districtFilter");
  if (distSelect) {
    distSelect.value = selectedDistrict;
    handleDistrictChange();
    document.getElementById("festivals")?.scrollIntoView({ behavior: "smooth" });
  }
}

// ==========================================================================
// 13. VOLUNTEER SUBMISSION WORKFLOW & ADMIN REVIEW
// ==========================================================================
function openVolunteerModal() {
  document.getElementById("volunteerModal").classList.add("open");
}

function closeVolunteerModal() {
  document.getElementById("volunteerModal").classList.remove("open");
}

function handleVolunteerSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("vFestName").value.trim();
  const category = document.getElementById("vCategory").value;
  const districtId = document.getElementById("vDistrict").value;
  const mandal = document.getElementById("vMandal").value.trim();
  const village = document.getElementById("vVillage").value.trim();
  const venue = document.getElementById("vVenue").value.trim();
  const startDate = document.getElementById("vStartDate").value;
  const endDate = document.getElementById("vEndDate").value;
  const scheduleText = document.getElementById("vSchedule").value.trim();
  const organizer = document.getElementById("vOrganizer").value.trim();
  const phone = document.getElementById("vPhone").value.trim();

  const distObj = AP_DISTRICTS.find((d) => d.id === districtId);
  const districtEn = distObj ? distObj.nameEn : "Andhra Pradesh";

  const newSubmission = {
    id: Date.now(),
    titleEn: name,
    titleTe: name,
    category: category,
    districtId: districtId,
    districtEn: districtEn,
    districtTe: distObj ? distObj.nameTe : districtEn,
    mandal: mandal,
    village: village,
    venue: venue,
    startDate: startDate,
    endDate: endDate,
    scheduleText: scheduleText,
    schedule: [
      { time: "06:00 PM", eventEn: scheduleText, eventTe: scheduleText }
    ],
    prasadamEn: "Grama Annadanam & Prasadam",
    prasadamTe: "గ్రామ అన్నదానం & ప్రసాదం",
    organizer: `${organizer} (Village Volunteer)`,
    phone: phone,
    descriptionEn: `Village festival submitted by volunteer ${organizer} for ${village}, ${mandal} mandal.`,
    descriptionTe: `${village} గ్రామ వాలంటీర్ ${organizer} సమర్పించిన పండుగ వివరాలు.`,
    bannerImg: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=800&q=80",
    status: "PENDING"
  };

  ADMIN_PENDING_SUBMISSIONS.unshift(newSubmission);
  renderAdminSubmissions();

  closeVolunteerModal();
  document.getElementById("volunteerForm").reset();

  showToast(currentLanguage === "te" ? "ధన్యవాదాలు! మీ గ్రామ పండుగ వివరాలు అడ్మిన్ పరిశీలనకు పంపబడ్డాయి." : "Thank you! Your village festival details have been submitted for admin approval.");
}

function openAdminDrawer() {
  document.getElementById("adminDrawer").classList.add("open");
}

function closeAdminDrawer() {
  document.getElementById("adminDrawer").classList.remove("open");
}

function renderAdminSubmissions() {
  const container = document.getElementById("adminSubmissionsList");
  const countBadge = document.getElementById("adminPendingCount");
  if (!container) return;

  const pending = ADMIN_PENDING_SUBMISSIONS.filter((s) => s.status === "PENDING");
  if (countBadge) countBadge.textContent = pending.length;

  if (ADMIN_PENDING_SUBMISSIONS.length === 0) {
    container.innerHTML = `<p style="color: var(--text-muted); font-size: 0.85rem; text-align: center; padding: 20px;">No submissions in queue.</p>`;
    return;
  }

  container.innerHTML = ADMIN_PENDING_SUBMISSIONS.map((sub) => `
    <div class="admin-card-item">
      <span class="admin-item-status ${sub.status === "PENDING" ? "status-pending" : "status-approved"}">
        ${sub.status}
      </span>
      <h4 style="color: #ffffff; font-size: 1rem; margin-bottom: 4px;">${sub.titleEn}</h4>
      <p style="font-size: 0.8rem; color: var(--primary-gold-light); margin-bottom: 6px;">
        <i class="fa-solid fa-location-dot"></i> ${sub.village}, ${sub.mandal} (${sub.districtEn})
      </p>
      <p style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 8px;">
        <strong>Dates:</strong> ${sub.startDate} to ${sub.endDate}<br>
        <strong>Organizer:</strong> ${sub.organizer} (Ph: ${sub.phone})
      </p>
      
      ${sub.status === "PENDING" ? `
        <div style="display: flex; gap: 8px; margin-top: 10px;">
          <button class="btn btn-primary" style="font-size: 0.75rem; padding: 6px 12px;" onclick="approveSubmission(${sub.id})">
            <i class="fa-solid fa-check"></i> Approve & Publish
          </button>
          <button class="btn btn-outline" style="font-size: 0.75rem; padding: 6px 12px;" onclick="rejectSubmission(${sub.id})">
            <i class="fa-solid fa-xmark"></i> Reject
          </button>
        </div>
      ` : `
        <span style="font-size: 0.75rem; color: #34d399;"><i class="fa-solid fa-circle-check"></i> Published to live calendar</span>
      `}
    </div>
  `).join("");
}

function approveSubmission(id) {
  const sub = ADMIN_PENDING_SUBMISSIONS.find((s) => s.id === id);
  if (!sub) return;

  sub.status = "APPROVED";

  // Add to active database
  FESTIVALS_DATABASE.unshift({
    ...sub,
    status: "APPROVED"
  });

  // Add alert to notification list
  NOTIFICATIONS.unshift({
    id: Date.now(),
    title: `New Village Festival Approved: ${sub.titleEn}`,
    time: `Commencing on ${sub.startDate} at ${sub.village}`,
    type: "new"
  });

  renderAdminSubmissions();
  renderNotifications();
  renderFestivalGrid();
  renderCalendar();
  renderTimeline();

  playBellSound();
  showToast(`✅ "${sub.titleEn}" approved and published to live festival calendar!`);
}

function rejectSubmission(id) {
  ADMIN_PENDING_SUBMISSIONS = ADMIN_PENDING_SUBMISSIONS.filter((s) => s.id !== id);
  renderAdminSubmissions();
  showToast("Submission removed from queue.");
}

// ==========================================================================
// 14. NOTIFICATIONS DRAWER
// ==========================================================================
function toggleNotificationDrawer() {
  const drawer = document.getElementById("notificationDrawer");
  drawer.classList.toggle("open");
}

function closeNotificationDrawer() {
  document.getElementById("notificationDrawer").classList.remove("open");
}

function renderNotifications() {
  const list = document.getElementById("notificationList");
  const badge = document.getElementById("unreadBadge");
  if (!list) return;

  if (badge) badge.style.display = NOTIFICATIONS.length > 0 ? "block" : "none";

  list.innerHTML = NOTIFICATIONS.map((n) => `
    <div class="notification-item">
      <strong style="color: #ffffff; font-size: 0.88rem; display: block;">${n.title}</strong>
      <div class="notification-time"><i class="fa-regular fa-clock"></i> ${n.time}</div>
    </div>
  `).join("");
}

// ==========================================================================
// 15. NATIVE WEB AUDIO API SYNTH (TRADITIONAL FESTIVE DRONE & BELLS)
// ==========================================================================
function initAudioEngine() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();
  }
}

function toggleFestiveAudio() {
  initAudioEngine();
  const icon = document.getElementById("audioIcon");

  if (!isAudioPlaying) {
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    startTraditionalDrone();
    isAudioPlaying = true;
    icon.className = "fa-solid fa-volume-high";
    showToast(currentLanguage === "te" ? "సాంప్రదాయ నాదస్వరం & దేవాలయ గంటల శబ్దం ప్రారంభమైంది" : "Traditional Nadaswaram & Temple Bell ambience active");
  } else {
    stopTraditionalDrone();
    isAudioPlaying = false;
    icon.className = "fa-solid fa-volume-xmark";
    showToast(currentLanguage === "te" ? "శబ్దం ఆపివేయబడింది" : "Ambience muted");
  }
}

function startTraditionalDrone() {
  if (!audioCtx) return;

  // Carnatic Tanpura / Nadaswaram Shadjam + Panchamam (C#3 / G#3)
  const tonic = 138.59; // C#3
  const fifth = 207.65; // G#3

  droneGain = audioCtx.createGain();
  droneGain.gain.setValueAtTime(0.08, audioCtx.currentTime);

  const osc1 = audioCtx.createOscillator();
  osc1.type = "sawtooth";
  osc1.frequency.setValueAtTime(tonic, audioCtx.currentTime);

  const osc2 = audioCtx.createOscillator();
  osc2.type = "sawtooth";
  osc2.frequency.setValueAtTime(fifth, audioCtx.currentTime);

  // Warm Lowpass filter
  const filter = audioCtx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(650, audioCtx.currentTime);

  osc1.connect(filter);
  osc2.connect(filter);
  filter.connect(droneGain);
  droneGain.connect(audioCtx.destination);

  osc1.start();
  osc2.start();

  // Periodic temple bell chimes every 8 seconds
  bellInterval = setInterval(() => {
    playBellSound();
  }, 8000);
}

function stopTraditionalDrone() {
  if (droneGain) {
    droneGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.5);
  }
  if (bellInterval) {
    clearInterval(bellInterval);
  }
}

function playBellSound() {
  initAudioEngine();
  if (!audioCtx) return;

  const freqs = [880, 1320, 1760]; // Rich bell harmonics
  freqs.forEach((f) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(f, audioCtx.currentTime);

    gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1.8);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 1.9);
  });
}

// ==========================================================================
// 16. TOAST NOTIFICATIONS & UTILITIES
// ==========================================================================
function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--primary-gold);"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function formatDate(dateStr) {
  if (!dateStr) return "";
  const parts = dateStr.split("-");
  if (parts.length !== 3) return dateStr;

  const monthsEn = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const mIndex = parseInt(parts[1], 10) - 1;
  return `${parts[2]} ${monthsEn[mIndex] || ""} ${parts[0]}`;
}
