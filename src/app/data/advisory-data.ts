export interface AdvisoryData {
  crop: string;
  condition: string;
  status: 'Healthy' | 'Disease' | 'Condition';

  title: string;
  explanation: string;

  symptoms: string[];
  possibleCauses: string[];
  prevention: string[];
  solutions: string[];
  monitoring: string[];
}

export const ADVISORY_DATA: AdvisoryData[] = [

  // =========================================================
  // COCONUT - HEALTHY
  // =========================================================

  {
    crop: 'Coconut',
    condition: 'Healthy',
    status: 'Healthy',

    title: 'Healthy Coconut Plant',

    explanation:
      'The uploaded coconut leaf appears healthy according to the current AI model. No supported disease condition was strongly detected in the image.',

    symptoms: [
      'Leaves maintain a normal green colour.',
      'No major spots or unusual lesions are visible.',
      'No significant yellowing is observed.',
      'No obvious pest-feeding damage is detected.'
    ],

    possibleCauses: [],

    prevention: [
      'Maintain proper irrigation and avoid prolonged water stress.',
      'Provide balanced plant nutrition based on local recommendations.',
      'Keep the field clean and remove unnecessary plant debris.',
      'Inspect leaves periodically for early signs of disease or pest attack.'
    ],

    solutions: [
      'No disease-specific treatment is required for a healthy plant.',
      'Continue normal crop management practices.',
      'Monitor the plant regularly for changes in leaf colour or appearance.'
    ],

    monitoring: [
      'Check new leaves periodically.',
      'Watch for spots, yellowing, wilting or pest damage.',
      'Upload another image if unusual symptoms appear.'
    ]
  },

  // =========================================================
  // COCONUT - LEAF SPOT
  // =========================================================

  {
    crop: 'Coconut',
    condition: 'Leaf Spot',
    status: 'Disease',

    title: 'Coconut Leaf Spot',

    explanation:
      'Leaf spot is a condition in which visible spots or lesions develop on coconut leaves. Several organisms or environmental factors can produce leaf-spot-like symptoms, so the AI result should be used as an initial advisory rather than a confirmed field diagnosis.',

    symptoms: [
      'Small brown or dark spots may appear on the leaves.',
      'Spots may gradually increase in size.',
      'Affected areas may become dry or discoloured.',
      'Multiple spots may join together when damage becomes severe.',
      'Severely affected leaves may lose healthy green tissue.'
    ],

    possibleCauses: [
      'Possible fungal or other plant disease infection.',
      'Prolonged leaf wetness and high humidity may favour some leaf diseases.',
      'Poor field sanitation can allow infected plant material to remain nearby.',
      'Plant stress can make symptoms more noticeable.'
    ],

    prevention: [
      'Maintain good field sanitation.',
      'Remove heavily affected or fallen plant material where appropriate.',
      'Avoid unnecessary prolonged wetting of foliage.',
      'Maintain suitable spacing and airflow where applicable.',
      'Inspect nearby plants for similar symptoms.'
    ],

    solutions: [
      'Monitor whether the spots are increasing or spreading to other leaves.',
      'Remove severely affected material where appropriate and dispose of it responsibly.',
      'Maintain balanced nutrition and appropriate irrigation.',
      'Seek crop-specific agricultural guidance if symptoms continue to spread.',
      'Use disease-control products only according to local agricultural recommendations and product labels.'
    ],

    monitoring: [
      'Observe whether new spots appear on younger leaves.',
      'Compare symptoms on nearby coconut plants.',
      'Take another clear image after a few days if symptoms change.',
      'Consult an agricultural expert if the damage becomes severe.'
    ]
  },

  // =========================================================
  // COCONUT - PEST DAMAGE
  // =========================================================

  {
    crop: 'Coconut',
    condition: 'Pest Damage',
    status: 'Condition',

    title: 'Possible Coconut Pest Damage',

    explanation:
      'The AI detected visual characteristics that may be associated with pest-related leaf damage. Different insects and pests can produce similar damage, so the specific pest should be identified through physical inspection before selecting a control method.',

    symptoms: [
      'Irregular holes or damaged areas on leaves.',
      'Scraping or feeding marks may be visible.',
      'Leaf edges may appear damaged.',
      'Parts of the leaf may become dry after feeding damage.',
      'Insects, eggs or larvae may sometimes be present around affected areas.'
    ],

    possibleCauses: [
      'Feeding by insects or other crop pests.',
      'Pest populations developing on nearby plants.',
      'Favourable environmental conditions for pest activity.'
    ],

    prevention: [
      'Inspect coconut plants regularly for early pest activity.',
      'Check both sides of leaves for insects, eggs or larvae.',
      'Maintain field sanitation.',
      'Remove severely damaged plant material where appropriate.',
      'Follow integrated pest management practices.'
    ],

    solutions: [
      'Identify the actual pest before applying a pest-control treatment.',
      'Inspect surrounding plants to determine whether the damage is spreading.',
      'Use suitable mechanical, biological or other integrated pest-management measures where recommended.',
      'Seek agricultural guidance when pest infestation is severe.',
      'Use pesticides only when necessary and according to approved local recommendations and label directions.'
    ],

    monitoring: [
      'Inspect both sides of affected leaves.',
      'Look for insects, eggs, larvae or fresh feeding damage.',
      'Monitor nearby coconut plants.',
      'Record whether damage increases over time.'
    ]
  },

  // =========================================================
  // COCONUT - YELLOWING
  // =========================================================

  {
    crop: 'Coconut',
    condition: 'Yellowing',
    status: 'Condition',

    title: 'Coconut Leaf Yellowing',

    explanation:
      'The AI detected yellowing in the coconut leaf. Yellowing is a visible symptom rather than a single confirmed disease and may occur because of nutrient problems, water stress, root problems, environmental stress or certain diseases.',

    symptoms: [
      'Green leaf tissue gradually becomes pale or yellow.',
      'Yellowing may affect part of a leaf or larger areas.',
      'Older and younger leaves may show different patterns depending on the cause.',
      'Plant growth may be affected when the underlying problem is severe.'
    ],

    possibleCauses: [
      'Nutrient deficiency or imbalance.',
      'Excess or insufficient water.',
      'Poor drainage or root stress.',
      'Environmental stress.',
      'Certain pests or diseases may also produce yellowing symptoms.'
    ],

    prevention: [
      'Maintain appropriate irrigation and drainage.',
      'Follow balanced nutrient-management practices.',
      'Monitor soil and plant condition regularly.',
      'Inspect plants for pests and additional disease symptoms.',
      'Maintain overall field hygiene.'
    ],

    solutions: [
      'Check irrigation and drainage conditions.',
      'Assess whether similar yellowing occurs on nearby plants.',
      'Review the crop nutrition programme.',
      'Look for additional symptoms before deciding on disease-specific treatment.',
      'Seek agricultural advice when yellowing persists or spreads.'
    ],

    monitoring: [
      'Observe which leaves develop yellowing first.',
      'Check whether yellowing spreads over time.',
      'Look for spots, wilting, root problems or pest damage.',
      'Upload another clear image if the symptoms change.'
    ]
  },

  // =========================================================
  // SUGARCANE - HEALTHY
  // =========================================================

  {
    crop: 'Sugarcane',
    condition: 'Healthy',
    status: 'Healthy',

    title: 'Healthy Sugarcane Plant',

    explanation:
      'The uploaded sugarcane leaf appears healthy according to the current AI model. No supported disease condition was strongly detected.',

    symptoms: [
      'Leaves show normal green colour.',
      'No major disease-like lesions are visible.',
      'No obvious mosaic pattern is detected.',
      'No significant rust-like symptoms are detected.'
    ],

    possibleCauses: [],

    prevention: [
      'Maintain appropriate irrigation.',
      'Provide balanced crop nutrition.',
      'Maintain good field sanitation.',
      'Inspect the crop regularly for early disease symptoms.',
      'Use healthy planting material.'
    ],

    solutions: [
      'No disease-specific treatment is currently indicated.',
      'Continue normal crop-management practices.',
      'Monitor the crop regularly for new symptoms.'
    ],

    monitoring: [
      'Inspect leaves periodically.',
      'Watch for colour changes, lesions or unusual patterns.',
      'Upload another image if symptoms develop.'
    ]
  },

  // =========================================================
  // SUGARCANE - MOSAIC
  // =========================================================

  {
    crop: 'Sugarcane',
    condition: 'Mosaic',
    status: 'Disease',

    title: 'Sugarcane Mosaic',

    explanation:
      'Sugarcane mosaic is a viral disease that can produce characteristic irregular light and dark green patterns on leaves. The AI prediction should be supported by field observation before management decisions are made.',

    symptoms: [
      'Irregular light and dark green mosaic patterns on leaves.',
      'Yellowish or pale streaks may occur.',
      'Leaf colour may appear uneven.',
      'Affected plants may show reduced vigour or growth.'
    ],

    possibleCauses: [
      'Infection by viruses associated with sugarcane mosaic disease.',
      'Infected planting material can contribute to disease spread.',
      'Some insect vectors may contribute to transmission depending on the virus involved.'
    ],

    prevention: [
      'Use healthy and recommended planting material.',
      'Avoid using visibly affected plants for propagation.',
      'Inspect fields regularly for mosaic-like symptoms.',
      'Follow locally recommended disease and vector-management practices.'
    ],

    solutions: [
      'Identify and monitor plants showing strong mosaic symptoms.',
      'Avoid using affected plants as planting material.',
      'Manage potential vectors according to local agricultural recommendations.',
      'Consult agricultural specialists when symptoms are widespread.'
    ],

    monitoring: [
      'Check nearby sugarcane plants for similar mosaic patterns.',
      'Observe newly developing leaves.',
      'Monitor whether affected areas increase across the field.'
    ]
  },

  // =========================================================
  // SUGARCANE - RED ROT
  // =========================================================

  {
    crop: 'Sugarcane',
    condition: 'Red Rot',
    status: 'Disease',

    title: 'Sugarcane Red Rot',

    explanation:
      'Red rot is an important fungal disease of sugarcane. Because characteristic internal stalk symptoms are important for field diagnosis, a leaf-image prediction alone should be treated as an early warning rather than confirmation.',

    symptoms: [
      'Leaves may lose colour and begin to dry.',
      'Plant vigour may decline.',
      'Affected canes may show internal reddish discolouration when examined.',
      'Advanced infection may result in drying or deterioration of the cane.'
    ],

    possibleCauses: [
      'Fungal infection associated with red rot.',
      'Use of infected planting material can contribute to disease spread.',
      'Susceptible crop varieties and favourable environmental conditions may increase disease development.'
    ],

    prevention: [
      'Use healthy planting material.',
      'Prefer locally recommended resistant or tolerant varieties where available.',
      'Maintain field sanitation.',
      'Avoid using material from visibly affected plants for planting.',
      'Monitor fields regularly for suspicious symptoms.'
    ],

    solutions: [
      'Inspect the stalk and the entire plant when red rot is suspected.',
      'Avoid using affected canes as planting material.',
      'Manage affected plants according to local agricultural recommendations.',
      'Seek agricultural expert guidance promptly when red rot is suspected across multiple plants.'
    ],

    monitoring: [
      'Inspect surrounding sugarcane plants.',
      'Look for drying leaves and internal stalk symptoms.',
      'Monitor whether symptoms spread to additional plants.'
    ]
  },

  // =========================================================
  // SUGARCANE - RUST
  // =========================================================

  {
    crop: 'Sugarcane',
    condition: 'Rust',
    status: 'Disease',

    title: 'Sugarcane Rust',

    explanation:
      'Sugarcane rust is a fungal disease that can produce characteristic rust-coloured lesions or pustules on leaves. Disease severity can vary with crop variety and environmental conditions.',

    symptoms: [
      'Small yellowish spots may develop initially.',
      'Spots may develop into brown or rust-coloured lesions.',
      'Numerous lesions can occur on affected leaves.',
      'Severe infection can reduce healthy green leaf area.'
    ],

    possibleCauses: [
      'Fungal pathogens associated with sugarcane rust.',
      'Favourable humidity and environmental conditions can encourage disease development.',
      'Susceptible varieties may develop more severe symptoms.'
    ],

    prevention: [
      'Use recommended resistant or tolerant varieties where available.',
      'Monitor the crop regularly for early rust symptoms.',
      'Maintain appropriate crop nutrition.',
      'Follow locally recommended field-management practices.'
    ],

    solutions: [
      'Monitor the severity and spread of lesions.',
      'Inspect surrounding plants for similar symptoms.',
      'Follow local agricultural recommendations for rust management.',
      'Seek expert guidance when infection becomes widespread or severe.'
    ],

    monitoring: [
      'Check newly developed leaves.',
      'Observe whether the number of rust-coloured lesions increases.',
      'Monitor nearby plants for similar symptoms.'
    ]
  },

  // =========================================================
  // SUGARCANE - YELLOW
  // =========================================================

  {
    crop: 'Sugarcane',
    condition: 'Yellow',
    status: 'Condition',

    title: 'Sugarcane Leaf Yellowing',

    explanation:
      'The AI detected yellowing in the sugarcane leaf. Yellowing can have several causes, including crop stress, nutrient problems, water-related issues or disease, so additional field observations are required.',

    symptoms: [
      'Leaves become pale green or yellow.',
      'Yellowing may occur along particular regions of the leaf.',
      'Affected plants may show reduced growth when the underlying problem is severe.',
      'Additional symptoms may appear depending on the cause.'
    ],

    possibleCauses: [
      'Nutrient deficiency or imbalance.',
      'Water stress.',
      'Poor drainage or root stress.',
      'Environmental stress.',
      'Certain diseases can also cause yellowing.'
    ],

    prevention: [
      'Maintain balanced crop nutrition.',
      'Maintain appropriate irrigation and drainage.',
      'Use healthy planting material.',
      'Monitor plants regularly for additional symptoms.',
      'Maintain good field sanitation.'
    ],

    solutions: [
      'Check irrigation and drainage conditions.',
      'Review the crop nutrition programme.',
      'Inspect plants for additional disease symptoms.',
      'Compare affected plants with healthy plants in the same field.',
      'Seek agricultural guidance if yellowing persists or spreads.'
    ],

    monitoring: [
      'Observe how yellowing develops over time.',
      'Check nearby sugarcane plants for similar symptoms.',
      'Look for additional spots, streaks, lesions or wilting.',
      'Upload another clear image if symptoms change.'
    ]
  },

  // =========================================================
  // MAIZE - HEALTHY
  // =========================================================

  {
    crop: 'Maize',
    condition: 'Healthy',
    status: 'Healthy',

    title: 'Healthy Maize Plant',

    explanation:
      'The uploaded maize leaf appears healthy according to the current AI model. No supported maize disease condition was strongly detected in the image.',

    symptoms: [
      'Leaves maintain a normal green appearance.',
      'No major blight-like lesions are visible.',
      'No significant rust-like pustules are detected.',
      'No obvious gray leaf spot symptoms are detected.'
    ],

    possibleCauses: [],

    prevention: [
      'Maintain appropriate irrigation and drainage.',
      'Provide balanced crop nutrition according to local recommendations.',
      'Maintain good field sanitation.',
      'Inspect maize plants regularly for early disease symptoms.',
      'Use healthy and locally recommended planting material.'
    ],

    solutions: [
      'No disease-specific treatment is currently indicated.',
      'Continue normal maize crop-management practices.',
      'Maintain suitable irrigation and nutrition.',
      'Monitor the crop for new spots, lesions or colour changes.'
    ],

    monitoring: [
      'Inspect both younger and older leaves regularly.',
      'Watch for elongated lesions, rust-coloured pustules or gray spots.',
      'Compare suspicious leaves with healthy plants nearby.',
      'Upload another image if symptoms develop.'
    ]
  },

  // =========================================================
  // MAIZE - BLIGHT
  // =========================================================

  {
    crop: 'Maize',
    condition: 'Blight',
    status: 'Disease',

    title: 'Maize Leaf Blight',

    explanation:
      'The AI detected visual characteristics associated with maize leaf blight. Blight-like symptoms can develop as elongated damaged areas on leaves, so field observation should be used to support the image-based prediction.',

    symptoms: [
      'Long or elongated lesions may develop on maize leaves.',
      'Lesions may appear gray-green, tan or brown as they develop.',
      'Affected areas may expand and join together.',
      'Severe infection can cause large areas of leaf tissue to dry.',
      'Loss of healthy green leaf area may reduce plant vigour.'
    ],

    possibleCauses: [
      'Fungal pathogens associated with maize leaf blight.',
      'Warm or humid conditions may favour disease development.',
      'Infected crop residue may contribute to disease persistence.',
      'Susceptible varieties may show greater disease severity.'
    ],

    prevention: [
      'Use locally recommended resistant or tolerant maize varieties where available.',
      'Maintain good field sanitation and manage infected crop residue appropriately.',
      'Maintain suitable plant spacing and field airflow.',
      'Inspect crops regularly for early blight-like lesions.',
      'Follow appropriate crop rotation and local crop-management recommendations.'
    ],

    solutions: [
      'Monitor affected leaves to determine whether lesions are increasing.',
      'Inspect surrounding maize plants for similar symptoms.',
      'Manage severely affected crop material according to local agricultural recommendations.',
      'Maintain balanced nutrition and appropriate irrigation.',
      'Use disease-control products only when recommended locally and according to approved label directions.'
    ],

    monitoring: [
      'Check newly developing leaves for fresh lesions.',
      'Observe whether existing lesions expand or join together.',
      'Monitor nearby plants for similar symptoms.',
      'Seek agricultural guidance if symptoms spread rapidly across the field.'
    ]
  },

  // =========================================================
  // MAIZE - COMMON RUST
  // =========================================================

  {
    crop: 'Maize',
    condition: 'Common Rust',
    status: 'Disease',

    title: 'Maize Common Rust',

    explanation:
      'Maize common rust is a fungal disease that can produce rust-coloured pustules on leaf surfaces. The AI result should be supported by visual inspection of the affected leaves and surrounding plants.',

    symptoms: [
      'Small raised pustules may appear on maize leaves.',
      'Pustules may become reddish-brown or rust coloured.',
      'Symptoms can occur on both sides of the leaf.',
      'Numerous pustules may develop when infection is severe.',
      'Severe infection can reduce healthy green leaf area.'
    ],

    possibleCauses: [
      'Fungal infection associated with maize common rust.',
      'Cool to moderate temperatures with moisture can favour infection.',
      'Airborne spores can contribute to spread between plants.',
      'Susceptible maize varieties may show more severe symptoms.'
    ],

    prevention: [
      'Use resistant or tolerant maize varieties where locally recommended.',
      'Inspect crops regularly for early rust symptoms.',
      'Maintain balanced plant nutrition.',
      'Maintain appropriate field management and crop health.',
      'Follow local recommendations for managing maize rust.'
    ],

    solutions: [
      'Inspect both sides of affected leaves for rust-like pustules.',
      'Monitor how rapidly symptoms are spreading through the crop.',
      'Maintain appropriate crop nutrition and irrigation.',
      'Seek agricultural guidance if infection becomes widespread.',
      'Use fungicidal disease-control measures only when locally recommended and according to approved labels.'
    ],

    monitoring: [
      'Check newly developed leaves for fresh pustules.',
      'Monitor the number and distribution of rust-coloured lesions.',
      'Inspect surrounding maize plants.',
      'Record whether disease severity increases over time.'
    ]
  },

  // =========================================================
  // MAIZE - GRAY LEAF SPOT
  // =========================================================

  {
    crop: 'Maize',
    condition: 'Gray Leaf Spot',
    status: 'Disease',

    title: 'Maize Gray Leaf Spot',

    explanation:
      'Gray leaf spot is a fungal disease of maize that can produce characteristic elongated gray or brown lesions. Because some maize leaf diseases can look similar, the AI result should be supported by field inspection.',

    symptoms: [
      'Small leaf spots may appear during early infection.',
      'Lesions can become rectangular or elongated.',
      'Affected areas may develop a gray, tan or brown appearance.',
      'Lesions may be limited by the leaf veins.',
      'Severe disease can cause large portions of the leaf to dry.'
    ],

    possibleCauses: [
      'Fungal infection associated with gray leaf spot.',
      'High humidity and prolonged leaf wetness can favour disease development.',
      'Infected maize residue may contribute to disease persistence.',
      'Susceptible varieties may experience more severe symptoms.'
    ],

    prevention: [
      'Use resistant or tolerant varieties where locally available.',
      'Manage infected crop residue appropriately.',
      'Follow suitable crop-rotation practices.',
      'Maintain appropriate field spacing and airflow.',
      'Inspect crops regularly during conditions favourable for leaf disease.'
    ],

    solutions: [
      'Inspect affected leaves closely and compare symptoms across several plants.',
      'Monitor whether lesions are increasing in number or size.',
      'Maintain balanced crop nutrition and appropriate irrigation.',
      'Follow locally recommended gray-leaf-spot management practices.',
      'Use disease-control products only where locally recommended and according to approved label directions.'
    ],

    monitoring: [
      'Check upper and lower leaves for developing lesions.',
      'Observe whether lesions become more rectangular or gray.',
      'Inspect nearby maize plants for similar symptoms.',
      'Seek expert guidance if disease becomes widespread or severe.'
    ]
  },

  // =========================================================
  // COTTON - HEALTHY
  // =========================================================

  {
    crop: 'Cotton',
    condition: 'Healthy',
    status: 'Healthy',

    title: 'Healthy Cotton Plant',

    explanation:
      'The uploaded cotton leaf appears healthy according to the current AI model. No supported cotton disease condition was strongly detected in the image.',

    symptoms: [
      'Leaves maintain a normal green appearance.',
      'No major bacterial-blight-like lesions are visible.',
      'No obvious severe leaf curling is detected.',
      'No clear wilt-related symptoms are indicated by the image.'
    ],

    possibleCauses: [],

    prevention: [
      'Maintain appropriate irrigation and drainage.',
      'Provide balanced crop nutrition.',
      'Maintain field sanitation and remove unnecessary infected plant debris.',
      'Inspect cotton plants regularly for disease and insect-vector activity.',
      'Use healthy and locally recommended planting material.'
    ],

    solutions: [
      'No disease-specific treatment is currently indicated.',
      'Continue normal cotton crop-management practices.',
      'Maintain appropriate irrigation and nutrition.',
      'Monitor plants regularly for changes in leaf shape, colour or vigour.'
    ],

    monitoring: [
      'Inspect new leaves periodically.',
      'Watch for spots, curling, yellowing or wilting.',
      'Check surrounding cotton plants for unusual symptoms.',
      'Upload another image if symptoms appear.'
    ]
  },

  // =========================================================
  // COTTON - BACTERIAL BLIGHT
  // =========================================================

  {
    crop: 'Cotton',
    condition: 'Bacterial Blight',
    status: 'Disease',

    title: 'Cotton Bacterial Blight',

    explanation:
      'Cotton bacterial blight is a bacterial disease that can affect leaves and other plant tissues. The AI prediction should be treated as an initial advisory and supported by field inspection before management decisions are made.',

    symptoms: [
      'Small water-soaked or dark lesions may develop on leaves.',
      'Leaf lesions may become angular because they are limited by veins.',
      'Affected areas may turn brown or black as tissue dies.',
      'Severe infection can cause leaf damage and premature loss of tissue.',
      'Other above-ground plant parts may also develop symptoms in affected crops.'
    ],

    possibleCauses: [
      'Bacterial infection associated with cotton bacterial blight.',
      'Contaminated or infected planting material can contribute to disease establishment.',
      'Rain splash and moisture may assist movement of bacteria between plant tissues.',
      'Plant injury and favourable environmental conditions may contribute to infection.'
    ],

    prevention: [
      'Use healthy and recommended planting material.',
      'Use resistant or tolerant varieties where locally available.',
      'Maintain good field sanitation.',
      'Avoid unnecessary movement through wet plants where disease spread is a concern.',
      'Follow locally recommended crop-rotation and residue-management practices.'
    ],

    solutions: [
      'Inspect affected plants for characteristic angular lesions.',
      'Monitor surrounding plants to determine whether symptoms are spreading.',
      'Manage infected crop residue according to local agricultural recommendations.',
      'Avoid using visibly affected plants as a source of planting material.',
      'Seek agricultural guidance for locally appropriate bacterial-blight management.'
    ],

    monitoring: [
      'Inspect newly developing cotton leaves.',
      'Watch for new angular or dark lesions.',
      'Check nearby plants for similar symptoms.',
      'Record whether disease incidence increases following wet conditions.'
    ]
  },

  // =========================================================
  // COTTON - CURL VIRUS
  // =========================================================

  {
    crop: 'Cotton',
    condition: 'Curl Virus',
    status: 'Disease',

    title: 'Cotton Leaf Curl Virus',

    explanation:
      'The AI detected characteristics associated with cotton leaf curl disease. Viral leaf-curl disease can alter leaf shape and plant growth, but field inspection and local agricultural guidance should support the image-based prediction.',

    symptoms: [
      'Leaves may curl upward or downward.',
      'Leaf surfaces may appear wrinkled, puckered or distorted.',
      'Veins may become more prominent or thickened.',
      'Affected plants may show reduced growth or stunting.',
      'Severe infection can reduce normal leaf and plant development.'
    ],

    possibleCauses: [
      'Viral infection associated with cotton leaf curl disease.',
      'Insect vectors, particularly whiteflies, can contribute to transmission of cotton leaf curl viruses.',
      'Nearby infected host plants may contribute to sources of infection.',
      'Susceptible cotton varieties may experience more severe disease.'
    ],

    prevention: [
      'Use healthy planting material and locally recommended tolerant or resistant varieties where available.',
      'Monitor cotton fields regularly for whitefly and other relevant vector activity.',
      'Manage weeds and alternative host plants according to local recommendations.',
      'Maintain good field sanitation.',
      'Follow integrated pest and vector-management practices.'
    ],

    solutions: [
      'Inspect the whole plant to confirm whether leaf curling occurs on multiple leaves.',
      'Monitor and manage insect vectors according to local agricultural recommendations.',
      'Avoid using severely affected plants as planting material.',
      'Manage affected plants according to locally recommended disease-management practices.',
      'Seek agricultural guidance if symptoms are spreading rapidly through the crop.'
    ],

    monitoring: [
      'Check newly emerging leaves for curling or distortion.',
      'Inspect the underside of leaves for whitefly activity.',
      'Monitor nearby cotton plants for similar symptoms.',
      'Observe whether affected plants show increasing stunting or reduced vigour.'
    ]
  },

  // =========================================================
  // COTTON - FUSARIUM WILT
  // =========================================================

  {
    crop: 'Cotton',
    condition: 'Fusarium Wilt',
    status: 'Disease',

    title: 'Cotton Fusarium Wilt',

    explanation:
      'Fusarium wilt is a soil-associated fungal disease that can interfere with water movement in cotton plants. A leaf image can indicate wilt-related visual symptoms, but examination of the entire plant is important before treating the AI prediction as a field diagnosis.',

    symptoms: [
      'Leaves may become yellow or show loss of normal green colour.',
      'Affected plants may wilt even when surrounding plants appear less affected.',
      'Plants may show reduced growth or stunting.',
      'Leaves may dry or fall as disease becomes severe.',
      'Internal vascular discolouration may be present in affected stems.'
    ],

    possibleCauses: [
      'Soil-borne Fusarium fungi associated with cotton wilt.',
      'Infected soil or plant material may contribute to disease persistence.',
      'Susceptible cotton varieties may develop more severe symptoms.',
      'Root stress or interactions with other soil-related problems may influence disease severity.'
    ],

    prevention: [
      'Use resistant or tolerant cotton varieties where locally recommended.',
      'Use healthy planting material.',
      'Follow appropriate crop-rotation and field-management practices.',
      'Maintain suitable irrigation and drainage.',
      'Avoid unnecessary movement of potentially contaminated soil between fields.'
    ],

    solutions: [
      'Inspect the whole plant and root zone when wilt is suspected.',
      'Compare affected plants with healthy plants in the same field.',
      'Manage severely affected plants according to local agricultural recommendations.',
      'Maintain appropriate soil, irrigation and crop-health management.',
      'Seek agricultural expert guidance when wilt symptoms occur across multiple plants.'
    ],

    monitoring: [
      'Monitor affected plants for increasing yellowing or wilting.',
      'Check neighbouring cotton plants for similar symptoms.',
      'Observe whether symptoms are concentrated in particular areas of the field.',
      'Inspect stems and roots where appropriate when field diagnosis is required.'
    ]
  }

];


// =========================================================
// FIND ADVISORY FOR AI RESULT
// =========================================================

export function getAdvisory(
  crop: string,
  condition: string
): AdvisoryData | undefined {

  const normalize = (value: string): string =>
    value
      .toLowerCase()
      .replace(/_/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

  return ADVISORY_DATA.find(
    advisory =>
      normalize(advisory.crop) === normalize(crop) &&
      normalize(advisory.condition) === normalize(condition)
  );
}