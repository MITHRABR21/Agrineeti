/*
=========================================================
 AGRINEETI
 COMPLETE CROP DISEASE & PEST DATABASE

 Crops:
 1. Coconut
 2. Maize
 3. Cholam / Sorghum
 4. Sugarcane
 5. Cotton

 Every disease/pest contains:
 - Disease/Pest Information
 - Symptoms
 - Cause
 - Favorable Conditions
 - Prevention
 - Basic Solutions
 - Management
=========================================================
*/


/*
=========================================================
 INTERFACES
=========================================================
*/

export interface DiseaseInfo {
  id: string;
  name: string;
  crop: string;
  category: string;

  diseaseInformation: string;

  symptoms: string[];

  cause: string;

  favorableConditions: string[];

  prevention: string[];

  solution: string[];

  management: string[];
}


export interface CropInfo {
  id: string;
  name: string;
  overview: string;
  commonDiseases: string[];
}


/*
=========================================================
 CROP DATA
=========================================================
*/

export const CROP_DATA: CropInfo[] = [

  /*
  =======================================================
  COCONUT
  =======================================================
  */

  {
    id: 'coconut',
    name: 'Coconut',

    overview:
      'Coconut is an important plantation crop widely cultivated across Tamil Nadu. It is valued for tender coconut, copra, coconut oil, fibre and several other products.',

    commonDiseases: [
      'Bud Rot',
      'Leaf Blight',
      'Stem Bleeding',
      'Basal Stem Rot',
      'Rhinoceros Beetle',
      'Eriophyid Mite',
      'Red Palm Weevil'
    ]
  },


  /*
  =======================================================
  MAIZE
  =======================================================
  */

  {
    id: 'maize',
    name: 'Maize',

    overview:
      'Maize is an important cereal crop cultivated for food, animal feed, poultry feed and industrial products.',

    commonDiseases: [
      'Fall Armyworm',
      'Stem Borer',
      'Shoot Fly',
      'Leaf Blight',
      'Downy Mildew',
      'Common Rust',
      'Stalk Rot',
      'Corn Earworm'
    ]
  },


  /*
  =======================================================
  CHOLAM / SORGHUM
  =======================================================
  */

  {
    id: 'cholam',
    name: 'Cholam / Sorghum',

    overview:
      'Cholam, commonly known as sorghum, is a drought-tolerant cereal crop suitable for many semi-arid regions of Tamil Nadu.',

    commonDiseases: [
      'Anthracnose',
      'Leaf Blight',
      'Downy Mildew',
      'Grain Mould',
      'Ergot',
      'Rust',
      'Shoot Fly',
      'Stem Borer',
      'Sorghum Midge'
    ]
  },


  /*
  =======================================================
  SUGARCANE
  =======================================================
  */

  {
    id: 'sugarcane',
    name: 'Sugarcane',

    overview:
      'Sugarcane is an important commercial crop cultivated for sugar production, jaggery and several industrial products.',

    commonDiseases: [
      'Red Rot',
      'Smut',
      'Grassy Shoot Disease',
      'Wilt',
      'Leaf Scald',
      'Pokkah Boeng',
      'Early Shoot Borer',
      'Internode Borer',
      'Whitefly',
      'Pyrilla'
    ]
  },


  /*
  =======================================================
  COTTON
  =======================================================
  */

  {
    id: 'cotton',
    name: 'Cotton',

    overview:
      'Cotton is an important fibre crop cultivated for textile production and several associated industrial applications.',

    commonDiseases: [
      'Leaf Blight',
      'Root Rot',
      'Bacterial Blight',
      'Powdery Mildew',
      'Leaf Curl Virus',
      'Bollworm',
      'Whitefly',
      'Jassid',
      'Thrips',
      'Aphid'
    ]
  }
];


/*
=========================================================
 COMPLETE DISEASE & PEST DATABASE
=========================================================
*/

export const DISEASE_DATA: DiseaseInfo[] = [

  /*
  #######################################################
  # COCONUT
  #######################################################
  */


  /*
  -------------------------------------------------------
  1. COCONUT BUD ROT
  -------------------------------------------------------
  */

  {
    id: 'coconut-bud-rot',
    name: 'Bud Rot',
    crop: 'coconut',
    category: 'Fungal Disease',

    diseaseInformation:
      'Bud rot is a serious disease of coconut that attacks the growing point and young unopened leaves. Severe infection can destroy the crown and may result in death of the palm.',

    symptoms: [
      'Young central leaves become yellow and droop.',
      'The youngest unopened spear leaf becomes discoloured.',
      'The growing bud becomes soft and rotten.',
      'Affected tissues may produce a foul smell.',
      'The central spear may eventually collapse.',
      'Severe infection can destroy the entire crown.'
    ],

    cause:
      'The disease is mainly associated with Phytophthora palmivora infection.',

    favorableConditions: [
      'Heavy and continuous rainfall.',
      'High relative humidity.',
      'Water stagnation around palms.',
      'Poor plantation drainage.',
      'Injuries to the crown during wet weather.'
    ],

    prevention: [
      'Maintain proper drainage in the coconut garden.',
      'Avoid water stagnation around palms.',
      'Inspect the crown regularly during rainy periods.',
      'Avoid injuries to the growing point.',
      'Maintain balanced nutrition.',
      'Keep the plantation clean.'
    ],

    solution: [
      'Remove severely rotten tissues carefully where practical.',
      'Dispose of infected plant material away from healthy palms.',
      'Protect affected tissues using locally recommended disease-management treatments.',
      'Consult agricultural extension personnel when infection is severe.'
    ],

    management: [
      'Inspect palms frequently during prolonged rainy periods.',
      'Improve drainage immediately when waterlogging occurs.',
      'Remove severely affected plant material.',
      'Maintain good palm nutrition.',
      'Use only locally registered plant-protection products according to their label.'
    ]
  },


  /*
  -------------------------------------------------------
  2. COCONUT LEAF BLIGHT
  -------------------------------------------------------
  */

  {
    id: 'coconut-leaf-blight',
    name: 'Leaf Blight',
    crop: 'coconut',
    category: 'Fungal Disease',

    diseaseInformation:
      'Coconut leaf blight affects the foliage and reduces the photosynthetic area of the palm. Severe infection can reduce palm vigour and productivity.',

    symptoms: [
      'Small yellowish or brown spots appear on leaves.',
      'Spots gradually enlarge.',
      'Lesions develop brown margins.',
      'Several lesions may merge together.',
      'Severely affected leaves become dry.',
      'Premature leaf shedding may occur.'
    ],

    cause:
      'The disease is associated with fungal infection under prolonged humid and wet conditions.',

    favorableConditions: [
      'High humidity.',
      'Frequent rainfall.',
      'Extended leaf wetness.',
      'Poor air circulation.',
      'Dense plantation canopy.'
    ],

    prevention: [
      'Maintain adequate spacing between palms.',
      'Remove severely infected fallen fronds.',
      'Maintain balanced fertilization.',
      'Avoid excessive moisture.',
      'Maintain good plantation sanitation.'
    ],

    solution: [
      'Remove severely affected fronds where practical.',
      'Improve air circulation.',
      'Maintain balanced potassium and other nutrients.',
      'Use locally recommended registered fungicides when disease pressure is high.'
    ],

    management: [
      'Inspect leaves regularly.',
      'Monitor disease during rainy periods.',
      'Maintain plantation sanitation.',
      'Avoid unnecessary irrigation during prolonged wet conditions.',
      'Follow local agricultural recommendations.'
    ]
  },


  /*
  -------------------------------------------------------
  3. COCONUT STEM BLEEDING
  -------------------------------------------------------
  */

  {
    id: 'coconut-stem-bleeding',
    name: 'Stem Bleeding',
    crop: 'coconut',
    category: 'Fungal Disease',

    diseaseInformation:
      'Stem bleeding is a trunk disease in which reddish-brown liquid emerges from cracks or damaged portions of the coconut stem.',

    symptoms: [
      'Reddish-brown liquid appears on the trunk.',
      'Dark or rusty patches develop on the bark.',
      'Bark develops cracks.',
      'Internal stem tissue becomes discoloured.',
      'Rot may progress into the trunk.',
      'Severe infection reduces palm vigour.'
    ],

    cause:
      'The disease is associated with fungal pathogens including Thielaviopsis species entering through wounds or damaged tissues.',

    favorableConditions: [
      'High humidity.',
      'Poor drainage.',
      'Stem injuries.',
      'Root damage.',
      'Weak or stressed palms.',
      'Poor plantation sanitation.'
    ],

    prevention: [
      'Avoid mechanical injuries to the trunk.',
      'Maintain proper drainage.',
      'Protect palms from fire and other physical damage.',
      'Maintain good plantation sanitation.',
      'Maintain balanced palm nutrition.'
    ],

    solution: [
      'Clean affected bark carefully.',
      'Remove loose and rotten tissue where practical.',
      'Protect the cleaned area using locally recommended wound treatment.',
      'Seek expert advice for severely affected palms.'
    ],

    management: [
      'Inspect trunks regularly.',
      'Prevent further mechanical injuries.',
      'Improve drainage.',
      'Maintain palm health.',
      'Remove severely diseased palms when recommended.'
    ]
  },


  /*
  -------------------------------------------------------
  4. COCONUT BASAL STEM ROT
  -------------------------------------------------------
  */

  {
    id: 'coconut-basal-stem-rot',
    name: 'Basal Stem Rot',
    crop: 'coconut',
    category: 'Fungal Disease',

    diseaseInformation:
      'Basal stem rot is a serious disease affecting the roots and lower stem of coconut palms. It can cause gradual decline, loss of yield and eventually palm death.',

    symptoms: [
      'Older leaves gradually turn yellow.',
      'Fronds dry prematurely.',
      'Palm growth becomes weak.',
      'The basal stem develops dark or decayed tissue.',
      'Roots become damaged or rotten.',
      'Severely affected palms may collapse.'
    ],

    cause:
      'The disease is associated with soil-borne fungal pathogens affecting the root and basal stem tissues.',

    favorableConditions: [
      'Poor drainage.',
      'Excess soil moisture.',
      'Root injuries.',
      'Weak or stressed palms.',
      'Poor soil health.',
      'Long-term survival of pathogens in infected material.'
    ],

    prevention: [
      'Maintain proper field drainage.',
      'Avoid root and trunk injuries.',
      'Use healthy planting material.',
      'Maintain balanced nutrition.',
      'Remove severely diseased plant material.'
    ],

    solution: [
      'Improve drainage around affected palms.',
      'Remove severely decayed tissues where practical.',
      'Use locally recommended biological or fungicidal management.',
      'Seek agricultural expert advice for severe infections.'
    ],

    management: [
      'Inspect the basal stem and root zone.',
      'Avoid prolonged waterlogging.',
      'Maintain soil health.',
      'Remove severely affected palms when recommended.',
      'Maintain plantation sanitation.'
    ]
  },


  /*
  -------------------------------------------------------
  5. COCONUT RHINOCEROS BEETLE
  -------------------------------------------------------
  */

  {
    id: 'coconut-rhinoceros-beetle',
    name: 'Rhinoceros Beetle',
    crop: 'coconut',
    category: 'Insect Pest',

    diseaseInformation:
      'Rhinoceros beetle is a major coconut pest. Adult beetles enter the crown and feed on tender tissues, particularly in young palms.',

    symptoms: [
      'V-shaped cuts appear on newly opened fronds.',
      'Holes are visible on emerging leaves.',
      'The central spear may be damaged.',
      'Young leaves may become deformed.',
      'Repeated attack reduces palm vigour.',
      'Severe damage may affect young palms.'
    ],

    cause:
      'The damage is caused by adult rhinoceros beetles feeding inside the crown of the palm.',

    favorableConditions: [
      'Decaying organic material near plantations.',
      'Accumulation of decomposing plant residues.',
      'Poor field sanitation.',
      'Warm and humid conditions.',
      'Availability of breeding sites.'
    ],

    prevention: [
      'Remove or properly manage decaying organic breeding material.',
      'Keep the plantation clean.',
      'Inspect young palms regularly.',
      'Use recommended traps where appropriate.',
      'Encourage biological control measures.'
    ],

    solution: [
      'Remove beetles manually where practical.',
      'Use recommended trapping methods.',
      'Manage breeding sites.',
      'Use registered pest-management products only when necessary.'
    ],

    management: [
      'Inspect palm crowns regularly.',
      'Destroy or manage breeding sites.',
      'Monitor pest activity.',
      'Use integrated pest management.',
      'Protect young palms carefully.'
    ]
  },


  /*
  -------------------------------------------------------
  6. COCONUT ERIOPHYID MITE
  -------------------------------------------------------
  */

  {
    id: 'coconut-eriophyid-mite',
    name: 'Eriophyid Mite',
    crop: 'coconut',
    category: 'Mite Pest',

    diseaseInformation:
      'Coconut eriophyid mite is a microscopic pest that attacks developing nuts and tender tissues. Heavy infestation can reduce nut size and cause premature nut shedding.',

    symptoms: [
      'Brown or yellow patches develop on young nuts.',
      'Scarring develops beneath the perianth.',
      'Nuts remain smaller than normal.',
      'Nut surface becomes damaged or distorted.',
      'Premature nut shedding may occur.',
      'Heavy infestation reduces yield.'
    ],

    cause:
      'The damage is caused by eriophyid mites feeding on tender coconut tissues.',

    favorableConditions: [
      'Presence of heavily infested palms.',
      'Poor monitoring of young nuts.',
      'Warm weather.',
      'Favourable conditions for pest multiplication.',
      'Poor plantation sanitation.'
    ],

    prevention: [
      'Inspect young nuts regularly.',
      'Maintain good palm nutrition.',
      'Remove severely damaged fallen nuts.',
      'Maintain plantation sanitation.',
      'Monitor pest levels before applying control measures.'
    ],

    solution: [
      'Use locally recommended mite-management practices.',
      'Apply approved pest-control products only when required.',
      'Follow agricultural extension recommendations for timing and product selection.',
      'Maintain proper irrigation and nutrition to reduce stress on palms and support healthy nut development.'
    ],

    management: [
      'Monitor young nuts periodically.',
      'Maintain balanced irrigation.',
      'Maintain proper nutrition.',
      'Use integrated pest management.',
      'Avoid unnecessary repeated pesticide applications.'
    ]
  },


  /*
  -------------------------------------------------------
  7. COCONUT RED PALM WEEVIL
  -------------------------------------------------------
  */

  {
    id: 'coconut-red-palm-weevil',
    name: 'Red Palm Weevil',
    crop: 'coconut',
    category: 'Insect Pest',

    diseaseInformation:
      'Red palm weevil is a destructive pest of coconut. Adults and larvae can damage the trunk and crown, with larvae tunnelling inside palm tissues.',

    symptoms: [
      'Holes may appear on the trunk.',
      'Fibrous material or frass may emerge from holes.',
      'A fermenting or unusual smell may be noticed.',
      'Leaves may wilt or droop.',
      'The crown may become weak.',
      'Severe infestation can result in palm death.'
    ],

    cause:
      'The damage is caused by red palm weevil larvae feeding and tunnelling inside palm tissues.',

    favorableConditions: [
      'Existing trunk wounds.',
      'Mechanical injuries.',
      'Presence of damaged palms.',
      'Poor plantation sanitation.',
      'Warm conditions.'
    ],

    prevention: [
      'Avoid injuries to palm trunks.',
      'Treat fresh wounds according to local recommendations.',
      'Remove severely damaged palms when necessary.',
      'Monitor palms for holes and frass.',
      'Maintain plantation sanitation.'
    ],

    solution: [
      'Inspect suspicious holes carefully.',
      'Use locally recommended trapping and monitoring methods.',
      'Seek expert advice for internal infestation.',
      'Use registered pest-management measures when recommended.'
    ],

    management: [
      'Regularly inspect trunks and crowns.',
      'Protect wounds.',
      'Remove severely infested palms when recommended.',
      'Use pheromone-based monitoring or trapping where locally advised.',
      'Maintain integrated pest management.'
    ]
  },


  /*
  #######################################################
  # MAIZE
  #######################################################
  */


  /*
  -------------------------------------------------------
  8. MAIZE FALL ARMYWORM
  -------------------------------------------------------
  */

  {
    id: 'maize-fall-armyworm',
    name: 'Fall Armyworm',
    crop: 'maize',
    category: 'Insect Pest',

    diseaseInformation:
      'Fall armyworm is one of the most destructive insect pests of maize. Larvae feed heavily on young leaves and whorl tissues and can severely damage the crop.',

    symptoms: [
      'Small holes appear on young leaves.',
      'Leaves develop ragged feeding damage.',
      'Caterpillars may be found inside the whorl.',
      'Fresh frass is often visible inside the whorl.',
      'Large irregular holes may develop.',
      'Severe infestation can damage the growing point.'
    ],

    cause:
      'The pest is caused by larvae of Spodoptera frugiperda.',

    favorableConditions: [
      'Warm weather.',
      'Continuous maize cultivation.',
      'Overlapping maize crops.',
      'Presence of nearby infested fields.',
      'Poor crop monitoring.'
    ],

    prevention: [
      'Monitor maize from early growth stages.',
      'Use pheromone traps for monitoring.',
      'Encourage natural enemies.',
      'Maintain field sanitation.',
      'Use tolerant hybrids where available.',
      'Avoid unnecessary repeated pesticide applications.'
    ],

    solution: [
      'Inspect the whorl for larvae and fresh feeding damage.',
      'Use integrated pest management.',
      'Use locally registered insecticides when treatment is justified.',
      'Rotate insecticide modes of action.'
    ],

    management: [
      'Scout fields regularly.',
      'Give special attention to early larval stages.',
      'Use biological and cultural control methods.',
      'Protect beneficial insects.',
      'Follow local agricultural recommendations.'
    ]
  },


  /*
  -------------------------------------------------------
  9. MAIZE STEM BORER
  -------------------------------------------------------
  */

  {
    id: 'maize-stem-borer',
    name: 'Stem Borer',
    crop: 'maize',
    category: 'Insect Pest',

    diseaseInformation:
      'Stem borer larvae tunnel inside maize stems and interfere with water and nutrient movement. Severe attack can weaken plants and reduce yield.',

    symptoms: [
      'Small holes appear on leaves.',
      'Shot-hole symptoms may develop.',
      'Central shoots may wilt.',
      'Dead-heart symptoms may occur in young plants.',
      'Stem tunnelling weakens mature plants.',
      'Affected plants may lodge.'
    ],

    cause:
      'The damage is caused by stem-boring insect larvae feeding inside maize stems.',

    favorableConditions: [
      'Warm weather.',
      'Continuous maize cultivation.',
      'Infested crop residues.',
      'Poor field sanitation.'
    ],

    prevention: [
      'Practice crop rotation.',
      'Remove heavily infested residues.',
      'Monitor young plants.',
      'Maintain good crop nutrition.',
      'Use suitable varieties where available.'
    ],

    solution: [
      'Remove severely affected plants where practical.',
      'Use biological control measures where available.',
      'Use locally recommended pest-management products when necessary.',
      'Remove and properly manage infested crop residues after harvest to reduce future pest populations.'
    ],

    management: [
      'Monitor from early growth stages.',
      'Look for dead-heart symptoms.',
      'Maintain field sanitation.',
      'Use integrated pest management.'
    ]
  },


  /*
  -------------------------------------------------------
  10. MAIZE SHOOT FLY
  -------------------------------------------------------
  */

  {
    id: 'maize-shoot-fly',
    name: 'Shoot Fly',
    crop: 'maize',
    category: 'Insect Pest',

    diseaseInformation:
      'Shoot fly is an early-stage pest of maize. Its larvae damage the central shoot and can cause dead-heart symptoms in young plants.',

    symptoms: [
      'Central shoot leaves wilt.',
      'Dead-heart symptoms appear.',
      'Affected plants may produce side shoots.',
      'Leaves may become yellow.',
      'Plant growth becomes uneven.',
      'Severe infestation reduces plant population.'
    ],

    cause:
      'The damage is caused by shoot fly larvae feeding within young maize shoots.',

    favorableConditions: [
      'Delayed sowing.',
      'Warm weather.',
      'Slow early crop growth.',
      'Presence of volunteer maize plants.'
    ],

    prevention: [
      'Follow timely sowing.',
      'Maintain good early crop growth.',
      'Remove volunteer maize plants.',
      'Use healthy seed.',
      'Monitor young seedlings regularly.'
    ],

    solution: [
      'Remove severely damaged plants where practical.',
      'Maintain adequate moisture and nutrition.',
      'Use locally recommended pest-management measures when required.',
      'Maintain uniform and healthy early crop growth so seedlings can tolerate pest damage better.'
    ],

    management: [
      'Inspect seedlings frequently.',
      'Look for dead-heart symptoms.',
      'Maintain uniform crop establishment.',
      'Use integrated pest management.'
    ]
  },


  /*
  -------------------------------------------------------
  11. MAIZE LEAF BLIGHT
  -------------------------------------------------------
  */

  {
    id: 'maize-leaf-blight',
    name: 'Leaf Blight',
    crop: 'maize',
    category: 'Fungal Disease',

    diseaseInformation:
      'Maize leaf blight is a foliar fungal disease that reduces green leaf area and can affect grain filling when infection becomes severe.',

    symptoms: [
      'Long elliptical lesions appear on leaves.',
      'Lesions may be grayish-brown or tan.',
      'Lesions enlarge under favourable weather.',
      'Several lesions may merge.',
      'Leaves gradually dry.',
      'Severe infection reduces photosynthetic activity.'
    ],

    cause:
      'The disease is associated with fungal pathogens favoured by humid weather and infected crop residues.',

    favorableConditions: [
      'High humidity.',
      'Frequent rainfall.',
      'Extended leaf wetness.',
      'Continuous maize cultivation.',
      'Infected crop residues.'
    ],

    prevention: [
      'Use resistant or tolerant hybrids where available.',
      'Practice crop rotation.',
      'Manage infected residues.',
      'Maintain balanced fertilization.',
      'Avoid excessive plant density.'
    ],

    solution: [
      'Remove severely affected leaves where practical.',
      'Monitor disease progression.',
      'Use locally recommended registered fungicides when necessary.',
      'Follow product label instructions.'
    ],

    management: [
      'Scout fields regularly.',
      'Monitor during prolonged wet weather.',
      'Maintain field sanitation.',
      'Use integrated disease management.'
    ]
  },


  /*
  -------------------------------------------------------
  12. MAIZE DOWNY MILDEW
  -------------------------------------------------------
  */

  {
    id: 'maize-downy-mildew',
    name: 'Downy Mildew',
    crop: 'maize',
    category: 'Oomycete Disease',

    diseaseInformation:
      'Downy mildew is a serious disease of maize that can cause chlorosis, stunting and poor ear development.',

    symptoms: [
      'Long pale or yellow stripes appear on leaves.',
      'White or gray downy growth may develop under humid conditions.',
      'Plants may become stunted.',
      'Leaves may become narrow and chlorotic.',
      'Severely affected plants may produce poor ears.'
    ],

    cause:
      'The disease is caused by downy mildew pathogens that may survive in soil or infected plant material.',

    favorableConditions: [
      'High humidity.',
      'Frequent rainfall.',
      'Excess soil moisture.',
      'Poor drainage.',
      'Repeated cultivation of susceptible varieties.'
    ],

    prevention: [
      'Use healthy seed.',
      'Use tolerant or resistant varieties where available.',
      'Maintain proper drainage.',
      'Avoid excessive irrigation.',
      'Remove severely infected plants.'
    ],

    solution: [
      'Rogue severely infected plants where appropriate.',
      'Use locally recommended seed-treatment practices.',
      'Seek agricultural extension personnel for severe disease pressure.',
      'Improve field drainage and avoid excessive irrigation to reduce favourable conditions for disease development.'
    ],

    management: [
      'Monitor young fields regularly.',
      'Remove heavily infected plants early.',
      'Maintain field sanitation.',
      'Avoid repeatedly planting susceptible material.'
    ]
  },


  /*
  -------------------------------------------------------
  13. MAIZE COMMON RUST
  -------------------------------------------------------
  */

  {
    id: 'maize-common-rust',
    name: 'Common Rust',
    crop: 'maize',
    category: 'Fungal Disease',

    diseaseInformation:
      'Common rust is a fungal disease of maize that produces rust-coloured pustules on leaves. Severe infection can reduce leaf function.',

    symptoms: [
      'Small reddish-brown pustules appear on leaves.',
      'Pustules may occur on both leaf surfaces.',
      'Leaves become covered with rust-like spots.',
      'Severe infection causes premature leaf drying.',
      'Photosynthetic activity may decline.'
    ],

    cause:
      'The disease is caused by the rust fungus Puccinia sorghi.',

    favorableConditions: [
      'Cool to moderate temperatures.',
      'High humidity.',
      'Leaf wetness.',
      'Frequent rainfall.',
      'Dense crop canopy.'
    ],

    prevention: [
      'Use resistant or tolerant hybrids where available.',
      'Maintain proper spacing.',
      'Avoid prolonged leaf wetness.',
      'Maintain balanced nutrition.',
      'Monitor leaves regularly.'
    ],

    solution: [
      'Monitor disease development.',
      'Remove severely affected plant material where practical.',
      'Use locally recommended registered fungicides when necessary.',
      'Maintain good crop nutrition and field aeration to support healthy plant growth.'
    ],

    management: [
      'Scout fields regularly.',
      'Monitor during humid weather.',
      'Maintain good crop growth.',
      'Use integrated disease management.'
    ]
  },


  /*
  -------------------------------------------------------
  14. MAIZE STALK ROT
  -------------------------------------------------------
  */

  {
    id: 'maize-stalk-rot',
    name: 'Stalk Rot',
    crop: 'maize',
    category: 'Fungal Disease',

    diseaseInformation:
      'Stalk rot affects the internal tissues of maize stems and can weaken plants, resulting in lodging and reduced grain production.',

    symptoms: [
      'Lower leaves may dry prematurely.',
      'Stem tissues become weak.',
      'Internal stalk tissues may become discoloured.',
      'Plants may lodge before harvest.',
      'Stalks may become hollow or soft.',
      'Ear development may be reduced.'
    ],

    cause:
      'Stalk rot is associated with several fungal pathogens, particularly when plants are stressed.',

    favorableConditions: [
      'Moisture stress.',
      'Excess soil moisture.',
      'Nutrient imbalance.',
      'High plant density.',
      'Mechanical damage.',
      'Warm humid conditions.'
    ],

    prevention: [
      'Maintain balanced fertilization.',
      'Avoid severe moisture stress.',
      'Maintain proper plant population.',
      'Use tolerant hybrids where available.',
      'Manage crop residues.'
    ],

    solution: [
      'Remove severely affected plants where practical.',
      'Harvest susceptible fields promptly when lodging risk is high.',
      'Maintain proper irrigation and nutrition.',
      'Use locally recommended disease-management practices.'
    ],

    management: [
      'Inspect stalk strength during crop development.',
      'Avoid excessive nitrogen.',
      'Maintain proper irrigation.',
      'Use crop rotation where suitable.'
    ]
  },


  /*
  -------------------------------------------------------
  15. MAIZE CORN EARWORM
  -------------------------------------------------------
  */

  {
    id: 'maize-corn-earworm',
    name: 'Corn Earworm',
    crop: 'maize',
    category: 'Insect Pest',

    diseaseInformation:
      'Corn earworm is an insect pest that can feed on maize silks and developing ears, reducing grain quality and yield.',

    symptoms: [
      'Silks are damaged.',
      'Larvae may be found near developing ears.',
      'Kernels become damaged.',
      'Frass may be present around the ear tip.',
      'Secondary fungal infection may develop in damaged ears.'
    ],

    cause:
      'The damage is caused by larvae of Helicoverpa species feeding on reproductive tissues.',

    favorableConditions: [
      'Warm weather.',
      'High moth activity.',
      'Continuous availability of host crops.',
      'Poor monitoring during silking.'
    ],

    prevention: [
      'Monitor fields during silking.',
      'Use pheromone traps where recommended.',
      'Encourage natural enemies.',
      'Maintain field sanitation.',
      'Use suitable tolerant varieties where available.'
    ],

    solution: [
      'Inspect ears and silks regularly.',
      'Use biological control methods where practical.',
      'Apply locally recommended pest-management measures when required.',
      'Use pheromone-based monitoring and take control action when pest levels become significant.'
    ],

    management: [
      'Monitor during flowering and ear development.',
      'Protect beneficial insects.',
      'Use integrated pest management.',
      'Avoid unnecessary pesticide applications.'
    ]
  },


  /*
  #######################################################
  # CHOLAM / SORGHUM
  #######################################################
  */


  /*
  -------------------------------------------------------
  16. CHOLAM ANTHRACNOSE
  -------------------------------------------------------
  */

  {
    id: 'cholam-anthracnose',
    name: 'Anthracnose',
    crop: 'cholam',
    category: 'Fungal Disease',

    diseaseInformation:
      'Anthracnose is an important fungal disease of sorghum affecting leaves, stalks and sometimes panicles.',

    symptoms: [
      'Small circular or elliptical spots appear on leaves.',
      'Lesions may have reddish, purple or tan margins.',
      'Dark fungal structures may develop within lesions.',
      'Lesions enlarge and merge.',
      'Severe infection causes premature leaf drying.',
      'Stalk infection can weaken plants.'
    ],

    cause:
      'The disease is mainly associated with Colletotrichum species, particularly Colletotrichum graminicola.',

    favorableConditions: [
      'Warm and humid weather.',
      'Frequent rainfall.',
      'Extended leaf wetness.',
      'Continuous sorghum cultivation.',
      'Infected crop residues.'
    ],

    prevention: [
      'Use healthy certified seed.',
      'Select tolerant varieties where available.',
      'Practice crop rotation.',
      'Manage infected crop residues.',
      'Maintain balanced nutrition.'
    ],

    solution: [
      'Remove severely affected plant material where practical.',
      'Monitor disease development.',
      'Use locally recommended registered fungicides when necessary.',
      'Follow label directions.'
    ],

    management: [
      'Scout the crop regularly.',
      'Maintain field sanitation.',
      'Avoid repeatedly cultivating highly susceptible varieties.',
      'Use integrated disease management.'
    ]
  },


  /*
  -------------------------------------------------------
  17. CHOLAM LEAF BLIGHT
  -------------------------------------------------------
  */

  {
    id: 'cholam-leaf-blight',
    name: 'Leaf Blight',
    crop: 'cholam',
    category: 'Fungal Disease',

    diseaseInformation:
      'Sorghum leaf blight is a foliar disease that produces lesions on leaves and can reduce photosynthetic activity and yield.',

    symptoms: [
      'Oval or elongated lesions appear on leaves.',
      'Lesions may be red, purple, brown or tan.',
      'Several lesions can merge.',
      'Large portions of leaves may dry.',
      'Severe infection causes premature leaf death.'
    ],

    cause:
      'The disease is associated with fungal infection and can spread through infected residues and rain splash.',

    favorableConditions: [
      'High humidity.',
      'Frequent rainfall.',
      'Warm temperatures.',
      'Dense crop canopy.',
      'Poor field sanitation.'
    ],

    prevention: [
      'Use tolerant varieties where available.',
      'Practice crop rotation.',
      'Manage infected crop residues.',
      'Maintain suitable spacing.',
      'Avoid excessive nitrogen.'
    ],

    solution: [
      'Remove severely infected leaves where practical.',
      'Improve crop aeration.',
      'Use locally recommended fungicides when necessary.',
      'Follow product label recommendations.'
    ],

    management: [
      'Inspect leaves regularly.',
      'Monitor during rainy periods.',
      'Maintain balanced nutrition.',
      'Use integrated disease management.'
    ]
  },


  /*
  -------------------------------------------------------
  18. CHOLAM DOWNY MILDEW
  -------------------------------------------------------
  */

  {
    id: 'cholam-downy-mildew',
    name: 'Downy Mildew',
    crop: 'cholam',
    category: 'Oomycete Disease',

    diseaseInformation:
      'Downy mildew is a systemic disease of sorghum that can cause chlorosis, stunting and poor panicle development.',

    symptoms: [
      'Long yellow or pale stripes appear on leaves.',
      'White downy growth may develop under humid conditions.',
      'Leaves may become shredded.',
      'Plants may remain stunted.',
      'Severely infected plants may fail to produce normal panicles.'
    ],

    cause:
      'The disease is caused by downy mildew pathogens that can survive in soil and infected plant material.',

    favorableConditions: [
      'High humidity.',
      'Frequent rainfall.',
      'Wet soil conditions.',
      'Poor drainage.',
      'Repeated cultivation of susceptible varieties.'
    ],

    prevention: [
      'Use healthy seed.',
      'Select resistant varieties where available.',
      'Practice crop rotation.',
      'Maintain good drainage.',
      'Remove severely infected plants.'
    ],

    solution: [
      'Rogue severely infected plants.',
      'Use locally recommended seed-treatment practices.',
      'Seek expert advice when disease incidence is high.',
      'Improve field drainage and avoid excessive moisture around the crop.'
    ],

    management: [
      'Inspect young crops regularly.',
      'Remove infected plants early.',
      'Maintain field sanitation.',
      'Avoid repeated planting of susceptible varieties.'
    ]
  },


  /*
  -------------------------------------------------------
  19. CHOLAM GRAIN MOULD
  -------------------------------------------------------
  */

  {
    id: 'cholam-grain-mould',
    name: 'Grain Mould',
    crop: 'cholam',
    category: 'Fungal Disease Complex',

    diseaseInformation:
      'Grain mould is a complex of fungal infections affecting sorghum grains, particularly when wet weather occurs during flowering and grain filling.',

    symptoms: [
      'Grains develop pink, black, gray or white fungal growth.',
      'Grains become discoloured.',
      'Grains may become shrivelled.',
      'Seed quality and germination may decline.',
      'Grain becomes unsuitable for quality markets when severely moulded.'
    ],

    cause:
      'Grain mould is caused by a group of fungi colonising developing sorghum grains under wet conditions.',

    favorableConditions: [
      'Rain during flowering.',
      'High humidity during grain filling.',
      'Delayed harvest.',
      'Poor grain drying.',
      'Prolonged wetness of panicles.'
    ],

    prevention: [
      'Select suitable sowing dates.',
      'Use tolerant varieties where available.',
      'Harvest promptly after maturity.',
      'Dry grain properly.',
      'Maintain clean storage conditions.'
    ],

    solution: [
      'Harvest at suitable maturity.',
      'Dry harvested grain thoroughly.',
      'Separate severely moulded grains.',
      'Do not use visibly contaminated grain for seed.'
    ],

    management: [
      'Monitor panicles during grain filling.',
      'Avoid unnecessary harvest delays.',
      'Maintain proper post-harvest drying.',
      'Store grain under dry conditions.'
    ]
  },


  /*
  -------------------------------------------------------
  20. CHOLAM ERGOT
  -------------------------------------------------------
  */

  {
    id: 'cholam-ergot',
    name: 'Ergot',
    crop: 'cholam',
    category: 'Fungal Disease',

    diseaseInformation:
      'Ergot is a fungal disease of sorghum that infects unfertilized florets and produces sticky honeydew followed by dark fungal structures.',

    symptoms: [
      'Sticky honeydew droplets appear on flowers.',
      'Honeydew may attract insects.',
      'White fungal growth may appear initially.',
      'Dark sclerotial structures may later form.',
      'Seed quality may be reduced.'
    ],

    cause:
      'The disease is caused by Claviceps species infecting unfertilized sorghum florets.',

    favorableConditions: [
      'High humidity during flowering.',
      'Cloudy weather.',
      'Rain during flowering.',
      'Poor pollination conditions.',
      'Infected seed or residues.'
    ],

    prevention: [
      'Use clean disease-free seed.',
      'Select tolerant varieties where available.',
      'Use suitable sowing periods.',
      'Maintain field sanitation.',
      'Avoid planting contaminated seed.'
    ],

    solution: [
      'Remove heavily infected panicles where practical.',
      'Prevent contaminated seed from being used.',
      'Use locally recommended disease-management practices.',
      'Harvest and handle seed carefully so infected material does not become a source of further contamination.'
    ],

    management: [
      'Monitor panicles during flowering.',
      'Remove infected material.',
      'Maintain clean seed sources.',
      'Follow agricultural extension recommendations.'
    ]
  },


  /*
  -------------------------------------------------------
  21. CHOLAM RUST
  -------------------------------------------------------
  */

  {
    id: 'cholam-rust',
    name: 'Rust',
    crop: 'cholam',
    category: 'Fungal Disease',

    diseaseInformation:
      'Sorghum rust is a fungal disease that produces rust-coloured pustules on leaves. Severe infection can reduce green leaf area.',

    symptoms: [
      'Small reddish-brown pustules appear on leaves.',
      'Pustules may occur on both leaf surfaces.',
      'Leaves develop rust-like spots.',
      'Severe infection causes premature drying.',
      'Plant vigour may decline.'
    ],

    cause:
      'The disease is caused by rust fungi that infect sorghum foliage.',

    favorableConditions: [
      'Moderate temperatures.',
      'High humidity.',
      'Extended leaf wetness.',
      'Frequent rainfall.',
      'Dense canopy.'
    ],

    prevention: [
      'Use tolerant varieties where available.',
      'Maintain proper spacing.',
      'Avoid excessive canopy density.',
      'Maintain balanced nutrition.',
      'Monitor leaves regularly.'
    ],

    solution: [
      'Monitor disease development.',
      'Remove severely affected leaves where practical.',
      'Use locally recommended registered fungicides when necessary.',
      'Maintain proper crop nutrition and avoid excessive canopy density.'
    ],

    management: [
      'Scout regularly.',
      'Monitor during humid periods.',
      'Maintain proper crop growth.',
      'Use integrated disease management.'
    ]
  },


  /*
  -------------------------------------------------------
  22. CHOLAM SHOOT FLY
  -------------------------------------------------------
  */

  {
    id: 'cholam-shoot-fly',
    name: 'Shoot Fly',
    crop: 'cholam',
    category: 'Insect Pest',

    diseaseInformation:
      'Shoot fly is an important early-stage pest of sorghum. Larvae damage the central shoot and can cause dead-heart symptoms.',

    symptoms: [
      'Central shoot dries and produces a dead heart.',
      'Young leaves wilt.',
      'Affected plants produce side shoots.',
      'Plant growth becomes uneven.',
      'Severe infestation reduces plant establishment.'
    ],

    cause:
      'The damage is caused by shoot fly larvae feeding inside young sorghum shoots.',

    favorableConditions: [
      'Delayed sowing.',
      'Warm weather.',
      'Poor early crop growth.',
      'Volunteer sorghum plants.',
      'Staggered crop establishment.'
    ],

    prevention: [
      'Follow timely sowing.',
      'Use healthy seed.',
      'Maintain good early crop growth.',
      'Remove volunteer sorghum plants.',
      'Monitor seedlings frequently.'
    ],

    solution: [
      'Remove severely damaged plants where practical.',
      'Maintain adequate moisture and nutrition.',
      'Use locally recommended pest-management practices.',
      'Maintain timely and uniform crop establishment to reduce the risk of severe early-stage damage.'
    ],

    management: [
      'Inspect early crop stages.',
      'Look for dead-heart symptoms.',
      'Maintain uniform crop establishment.',
      'Use integrated pest management.'
    ]
  },


  /*
  -------------------------------------------------------
  23. CHOLAM STEM BORER
  -------------------------------------------------------
  */

  {
    id: 'cholam-stem-borer',
    name: 'Stem Borer',
    crop: 'cholam',
    category: 'Insect Pest',

    diseaseInformation:
      'Stem borer larvae tunnel into sorghum stems and interfere with water and nutrient movement, weakening plants.',

    symptoms: [
      'Small holes appear on leaves.',
      'Central shoots may wilt.',
      'Dead-heart symptoms may occur.',
      'Stem tunnelling weakens mature plants.',
      'Panicles may be poorly developed.'
    ],

    cause:
      'The damage is caused by stem-boring insect larvae feeding inside sorghum stems.',

    favorableConditions: [
      'Warm weather.',
      'Continuous sorghum cultivation.',
      'Poor field sanitation.',
      'Infested crop residues.'
    ],

    prevention: [
      'Practice crop rotation.',
      'Remove heavily infested residues.',
      'Maintain healthy crop growth.',
      'Monitor the crop regularly.',
      'Use suitable varieties where available.'
    ],

    solution: [
      'Remove severely affected plants where practical.',
      'Use biological control methods where available.',
      'Use locally recommended pest-management products when necessary.',
      'Remove and properly manage infested crop residues to reduce pest carryover.'
    ],

    management: [
      'Inspect plants regularly.',
      'Look for shot holes and dead hearts.',
      'Maintain field sanitation.',
      'Use integrated pest management.'
    ]
  },


  /*
  -------------------------------------------------------
  24. CHOLAM SORGHUM MIDGE
  -------------------------------------------------------
  */

  {
    id: 'cholam-sorghum-midge',
    name: 'Sorghum Midge',
    crop: 'cholam',
    category: 'Insect Pest',

    diseaseInformation:
      'Sorghum midge is a small insect pest that attacks flowering sorghum. Larvae feed inside developing florets and can reduce grain formation.',

    symptoms: [
      'Affected florets fail to develop normal grains.',
      'Panicles may have empty or partially filled areas.',
      'Poor grain set is visible after flowering.',
      'Tiny adult midges may be observed around flowering panicles.',
      'Severe attack can cause major grain loss.'
    ],

    cause:
      'The damage is caused by sorghum midge larvae developing inside sorghum florets.',

    favorableConditions: [
      'Warm weather during flowering.',
      'Extended flowering periods.',
      'Staggered planting.',
      'Presence of flowering sorghum plants over long periods.'
    ],

    prevention: [
      'Use uniform and timely planting.',
      'Select tolerant varieties where available.',
      'Avoid prolonged staggered flowering in nearby fields.',
      'Monitor panicles during flowering.'
    ],

    solution: [
      'Monitor adult activity during flowering.',
      'Use locally recommended pest-management measures when infestation is significant.',
      'Follow agricultural extension recommendations.',
      'Maintain uniform flowering and avoid prolonged staggered planting that can support continuous midge populations.'
    ],

    management: [
      'Inspect flowering panicles frequently.',
      'Maintain uniform crop establishment.',
      'Use integrated pest management.',
      'Monitor neighbouring sorghum fields.'
    ]
  },


  /*
  #######################################################
  # SUGARCANE
  #######################################################
  */


  /*
  -------------------------------------------------------
  25. SUGARCANE RED ROT
  -------------------------------------------------------
  */

  {
    id: 'sugarcane-red-rot',
    name: 'Red Rot',
    crop: 'sugarcane',
    category: 'Fungal Disease',

    diseaseInformation:
      'Red rot is one of the most destructive diseases of sugarcane. It affects stalk tissues and can seriously reduce cane yield and quality.',

    symptoms: [
      'Upper leaves become yellow.',
      'Leaves gradually dry.',
      'Internal stalk tissue becomes reddish.',
      'White patches may appear across the red tissue.',
      'Affected stalks may develop a fermented smell.',
      'Severe infection causes stalk death.'
    ],

    cause:
      'The disease is mainly associated with Colletotrichum falcatum.',

    favorableConditions: [
      'Poor drainage.',
      'Waterlogged soil.',
      'High humidity.',
      'Infected planting material.',
      'Stalk injuries.',
      'Susceptible varieties.'
    ],

    prevention: [
      'Use disease-free planting material.',
      'Select resistant varieties where available.',
      'Practice crop rotation.',
      'Maintain proper drainage.',
      'Remove infected clumps.',
      'Avoid using diseased cane as seed material.'
    ],

    solution: [
      'Rogue infected clumps.',
      'Avoid transporting diseased planting material.',
      'Use locally recommended seed-cane treatment practices.',
      'Consult agricultural extension personnel during severe outbreaks.'
    ],

    management: [
      'Inspect the crop regularly.',
      'Remove diseased stools promptly.',
      'Maintain drainage.',
      'Use healthy planting material.',
      'Maintain field sanitation.'
    ]
  },


  /*
  -------------------------------------------------------
  26. SUGARCANE SMUT
  -------------------------------------------------------
  */

  {
    id: 'sugarcane-smut',
    name: 'Smut',
    crop: 'sugarcane',
    category: 'Fungal Disease',

    diseaseInformation:
      'Sugarcane smut produces a characteristic black whip-like structure from the growing point and can significantly reduce cane yield.',

    symptoms: [
      'A long black whip emerges from the growing point.',
      'Plants become thin and weak.',
      'Excessive tillering may occur.',
      'Leaves become narrow and erect.',
      'Affected stools produce poor cane yield.'
    ],

    cause:
      'The disease is caused by the smut fungus Sporisorium scitamineum.',

    favorableConditions: [
      'Warm weather.',
      'Dry conditions favouring spore dispersal.',
      'Infected planting material.',
      'Susceptible varieties.'
    ],

    prevention: [
      'Use healthy planting material.',
      'Select resistant varieties.',
      'Avoid setts from infected fields.',
      'Inspect fields regularly.',
      'Remove infected plants early.'
    ],

    solution: [
      'Remove infected stools carefully.',
      'Destroy smut whips before extensive spore release.',
      'Use clean planting material.',
      'Follow locally recommended seed-cane treatment practices.'
    ],

    management: [
      'Inspect fields regularly.',
      'Rogue infected stools.',
      'Maintain field sanitation.',
      'Use resistant varieties where suitable.'
    ]
  },


  /*
  -------------------------------------------------------
  27. SUGARCANE GRASSY SHOOT DISEASE
  -------------------------------------------------------
  */

  {
    id: 'sugarcane-grassy-shoot-disease',
    name: 'Grassy Shoot Disease',
    crop: 'sugarcane',
    category: 'Phytoplasma Disease',

    diseaseInformation:
      'Grassy shoot disease is a serious systemic disease caused by phytoplasma. It produces excessive thin shoots and severely reduces cane formation.',

    symptoms: [
      'Numerous thin shoots develop.',
      'Leaves become narrow and pale.',
      'Plants develop a grass-like appearance.',
      'Normal cane formation is poor.',
      'Affected stools lose productivity.'
    ],

    cause:
      'The disease is caused by phytoplasma and may spread through infected planting material and insect vectors.',

    favorableConditions: [
      'Infected planting material.',
      'Presence of infected stools.',
      'High vector populations.',
      'Susceptible varieties.'
    ],

    prevention: [
      'Use healthy disease-free seed cane.',
      'Select tolerant varieties where available.',
      'Remove infected stools.',
      'Maintain field sanitation.',
      'Monitor the crop regularly.'
    ],

    solution: [
      'Rogue infected stools early.',
      'Avoid planting material from infected fields.',
      'Manage insect vectors using locally recommended methods.',
      'Use healthy planting material.'
    ],

    management: [
      'Inspect stools regularly.',
      'Remove symptomatic plants.',
      'Maintain clean planting material.',
      'Monitor vector populations.',
      'Use integrated disease management.'
    ]
  },


  /*
  -------------------------------------------------------
  28. SUGARCANE WILT
  -------------------------------------------------------
  */

  {
    id: 'sugarcane-wilt',
    name: 'Wilt',
    crop: 'sugarcane',
    category: 'Fungal Disease',

    diseaseInformation:
      'Sugarcane wilt affects the root and vascular system and interferes with water movement, causing drying and weakening of affected canes.',

    symptoms: [
      'Leaves gradually lose their green colour.',
      'Plants become weak and wilted.',
      'Leaves dry prematurely.',
      'Internal stalk tissues may become discoloured.',
      'Affected canes may become hollow or lightweight.'
    ],

    cause:
      'The disease is associated with soil-borne fungal infection and becomes more damaging when plants experience stress.',

    favorableConditions: [
      'High soil temperature.',
      'Moisture stress.',
      'Poor soil conditions.',
      'Root injuries.',
      'Continuous cultivation.'
    ],

    prevention: [
      'Use healthy planting material.',
      'Maintain proper irrigation.',
      'Avoid severe moisture stress.',
      'Practice crop rotation where suitable.',
      'Maintain good soil health.'
    ],

    solution: [
      'Remove severely affected stools.',
      'Improve soil and moisture management.',
      'Use locally recommended biological disease-management practices.',
      'Seek expert advice during severe outbreaks.'
    ],

    management: [
      'Monitor plants for early wilting.',
      'Maintain uniform irrigation.',
      'Avoid root damage.',
      'Improve soil health.',
      'Maintain field sanitation.'
    ]
  },


  /*
  -------------------------------------------------------
  29. SUGARCANE LEAF SCALD
  -------------------------------------------------------
  */

  {
    id: 'sugarcane-leaf-scald',
    name: 'Leaf Scald',
    crop: 'sugarcane',
    category: 'Bacterial Disease',

    diseaseInformation:
      'Leaf scald is a bacterial disease that can become systemic in sugarcane and produces characteristic pale or white streaks on leaves.',

    symptoms: [
      'Long narrow white streaks appear along leaves.',
      'Leaves may gradually dry.',
      'Side shoots may develop.',
      'Affected plants become weak.',
      'Severe infection can cause plant decline.'
    ],

    cause:
      'The disease is caused by the bacterium Xanthomonas albilineans.',

    favorableConditions: [
      'Infected planting material.',
      'Contaminated cutting tools.',
      'Movement of infected plant material.',
      'Warm humid weather.'
    ],

    prevention: [
      'Use healthy planting material.',
      'Disinfect cutting tools.',
      'Remove infected stools.',
      'Avoid transporting infected planting material.',
      'Use resistant varieties where available.'
    ],

    solution: [
      'Remove and destroy infected stools.',
      'Avoid using infected cane as seed material.',
      'Clean and disinfect tools.',
      'Seek extension advice during severe outbreaks.'
    ],

    management: [
      'Inspect leaves regularly.',
      'Rogue infected plants.',
      'Maintain clean farm equipment.',
      'Use healthy planting material.'
    ]
  },


  /*
  -------------------------------------------------------
  30. SUGARCANE POKKAH BOENG
  -------------------------------------------------------
  */

  {
    id: 'sugarcane-pokkah-boeng',
    name: 'Pokkah Boeng',
    crop: 'sugarcane',
    category: 'Fungal Disease',

    diseaseInformation:
      'Pokkah boeng is a fungal disease affecting young sugarcane shoots and leaves. Severe infection can distort growing tissues and reduce plant development.',

    symptoms: [
      'Young leaves become distorted.',
      'Leaves may develop chlorotic areas.',
      'Growing shoots become malformed.',
      'Wrinkling or twisting of young leaves may occur.',
      'Severe infection can cause top drying.'
    ],

    cause:
      'The disease is associated with Fusarium species infecting young sugarcane tissues.',

    favorableConditions: [
      'Warm humid weather.',
      'Frequent rainfall.',
      'Dense crop canopy.',
      'Excessive moisture.',
      'Susceptible varieties.'
    ],

    prevention: [
      'Use healthy planting material.',
      'Maintain good field drainage.',
      'Avoid excessive nitrogen.',
      'Maintain suitable plant spacing.',
      'Monitor young shoots.'
    ],

    solution: [
      'Remove severely affected plant material where practical.',
      'Improve drainage and crop aeration.',
      'Use locally recommended disease-management products when required.',
      'Maintain balanced fertilization and avoid excessive nitrogen that can encourage weak, lush growth.'
    ],

    management: [
      'Monitor young leaves regularly.',
      'Maintain balanced nutrition.',
      'Avoid excessive moisture.',
      'Use integrated disease management.'
    ]
  },


  /*
  -------------------------------------------------------
  31. SUGARCANE EARLY SHOOT BORER
  -------------------------------------------------------
  */

  {
    id: 'sugarcane-early-shoot-borer',
    name: 'Early Shoot Borer',
    crop: 'sugarcane',
    category: 'Insect Pest',

    diseaseInformation:
      'Early shoot borer is an important pest of young sugarcane. Larvae enter young shoots and can cause dead-heart symptoms.',

    symptoms: [
      'Central shoots dry and form dead hearts.',
      'Young leaves wilt.',
      'Affected shoots can be pulled easily.',
      'Bore holes may be present.',
      'Crop establishment becomes uneven.'
    ],

    cause:
      'The damage is caused by larvae of shoot-boring moths feeding inside young sugarcane shoots.',

    favorableConditions: [
      'Warm weather.',
      'Dry field conditions.',
      'Poor early crop growth.',
      'Infested crop residues.'
    ],

    prevention: [
      'Use healthy planting material.',
      'Maintain good crop nutrition.',
      'Maintain adequate soil moisture.',
      'Monitor young crops.',
      'Remove heavily infested material.'
    ],

    solution: [
      'Remove severely affected dead-heart shoots.',
      'Use biological control measures where available.',
      'Use locally recommended pest-management methods when infestation is high.',
      'Maintain timely irrigation and balanced nutrition to promote vigorous early shoot growth.'
    ],

    management: [
      'Monitor young crop stages.',
      'Look for dead-heart symptoms.',
      'Maintain uniform growth.',
      'Use integrated pest management.'
    ]
  },


  /*
  -------------------------------------------------------
  32. SUGARCANE INTERNODE BORER
  -------------------------------------------------------
  */

  {
    id: 'sugarcane-internode-borer',
    name: 'Internode Borer',
    crop: 'sugarcane',
    category: 'Insect Pest',

    diseaseInformation:
      'Internode borer damages the internal stalk tissues of sugarcane and can reduce cane weight and sugar recovery.',

    symptoms: [
      'Small holes appear on stalks.',
      'Larvae tunnel through internodes.',
      'Frass may be visible near bore holes.',
      'Affected stalks become weak.',
      'Cane quality may decline.'
    ],

    cause:
      'The damage is caused by larvae of internode-boring moths tunnelling inside sugarcane stalks.',

    favorableConditions: [
      'Warm weather.',
      'Dense crop canopy.',
      'Poor field sanitation.',
      'Infested crop residues.'
    ],

    prevention: [
      'Maintain field sanitation.',
      'Remove heavily infested residues.',
      'Monitor stalks regularly.',
      'Use tolerant varieties where available.',
      'Encourage natural enemies.'
    ],

    solution: [
      'Remove severely infested stalks where practical.',
      'Use biological control methods where available.',
      'Use locally recommended pest-management measures when necessary.',
      'Remove and properly manage infested crop residues to reduce pest survival between seasons.'
    ],

    management: [
      'Inspect stalks periodically.',
      'Monitor pest activity.',
      'Maintain proper crop nutrition.',
      'Use integrated pest management.'
    ]
  },


  /*
  -------------------------------------------------------
  33. SUGARCANE WHITEFLY
  -------------------------------------------------------
  */

  {
    id: 'sugarcane-whitefly',
    name: 'Whitefly',
    crop: 'sugarcane',
    category: 'Insect Pest',

    diseaseInformation:
      'Sugarcane whitefly is a sap-sucking pest that weakens leaves and may produce honeydew, leading to sooty mould development.',

    symptoms: [
      'Small white insects are visible on leaf undersides.',
      'Leaves may become yellow.',
      'Sticky honeydew accumulates on leaves.',
      'Black sooty mould may develop.',
      'Heavy infestation reduces plant vigour.'
    ],

    cause:
      'The damage is caused by whiteflies feeding on plant sap.',

    favorableConditions: [
      'Warm weather.',
      'Dense crop canopy.',
      'Excessive nitrogen.',
      'Poor field monitoring.',
      'High pest populations.'
    ],

    prevention: [
      'Monitor leaf undersides regularly.',
      'Avoid excessive nitrogen fertilization.',
      'Maintain proper crop spacing.',
      'Conserve natural enemies.',
      'Maintain field sanitation.'
    ],

    solution: [
      'Use integrated pest management.',
      'Encourage natural predators and parasitoids.',
      'Use locally registered insecticides only when necessary.',
      'Rotate insecticide modes of action.'
    ],

    management: [
      'Monitor pest population.',
      'Inspect lower leaf surfaces.',
      'Protect beneficial insects.',
      'Avoid unnecessary repeated spraying.'
    ]
  },


  /*
  -------------------------------------------------------
  34. SUGARCANE PYRILLA
  -------------------------------------------------------
  */

  {
    id: 'sugarcane-pyrilla',
    name: 'Pyrilla',
    crop: 'sugarcane',
    category: 'Insect Pest',

    diseaseInformation:
      'Pyrilla is a sap-sucking insect pest of sugarcane. Heavy infestation can weaken plants and produce honeydew that encourages sooty mould.',

    symptoms: [
      'Insects occur on the underside of leaves.',
      'Leaves lose vigour.',
      'Honeydew is deposited on leaves.',
      'Black sooty mould develops on honeydew.',
      'Severe infestation reduces photosynthetic activity.'
    ],

    cause:
      'The damage is caused by Pyrilla species feeding on sugarcane sap.',

    favorableConditions: [
      'Warm weather.',
      'Dense crop growth.',
      'High humidity.',
      'Excessive nitrogen.',
      'Poor natural-enemy activity.'
    ],

    prevention: [
      'Maintain balanced fertilization.',
      'Avoid excessive nitrogen.',
      'Conserve natural enemies.',
      'Monitor leaves regularly.',
      'Maintain proper field sanitation.'
    ],

    solution: [
      'Encourage biological control.',
      'Use locally recommended pest-management measures.',
      'Apply registered insecticides only when economically justified.',
      'Avoid excessive nitrogen and maintain healthy crop growth to reduce conditions favourable for heavy pest multiplication.'
    ],

    management: [
      'Monitor pest populations.',
      'Inspect leaf undersides.',
      'Protect beneficial insects.',
      'Use integrated pest management.'
    ]
  },


  /*
  #######################################################
  # COTTON
  #######################################################
  */


  /*
  -------------------------------------------------------
  35. COTTON LEAF BLIGHT
  -------------------------------------------------------
  */

  {
    id: 'cotton-leaf-blight',
    name: 'Leaf Blight',
    crop: 'cotton',
    category: 'Fungal Disease',

    diseaseInformation:
      "Cotton leaf blight produces spots and lesions on foliage. Severe infection can cause defoliation and reduce the plant's photosynthetic capacity.",

    symptoms: [
      'Brown or reddish spots appear on leaves.',
      'Spots enlarge under favourable conditions.',
      'Several lesions may merge together.',
      'Leaves become dry.',
      'Severe infection can cause leaf shedding.'
    ],

    cause:
      'The disease is favoured by fungal infection under warm, humid and wet conditions.',

    favorableConditions: [
      'High humidity.',
      'Frequent rainfall.',
      'Warm temperatures.',
      'Poor air circulation.',
      'Extended leaf wetness.'
    ],

    prevention: [
      'Use healthy certified seed.',
      'Maintain proper plant spacing.',
      'Ensure good field aeration.',
      'Avoid excessive irrigation.',
      'Remove infected crop residues.',
      'Monitor the crop regularly.'
    ],

    solution: [
      'Remove severely affected leaves where practical.',
      'Improve field aeration.',
      'Maintain balanced crop nutrition.',
      'Use locally registered fungicides when disease pressure becomes high.',
      'Follow product label and extension guidance.'
    ],

    management: [
      'Scout the crop regularly.',
      'Monitor during humid and rainy periods.',
      'Maintain field sanitation.',
      'Avoid excessive nitrogen.',
      'Use integrated disease management.'
    ]
  },


  /*
  -------------------------------------------------------
  36. COTTON ROOT ROT
  -------------------------------------------------------
  */

  {
    id: 'cotton-root-rot',
    name: 'Root Rot',
    crop: 'cotton',
    category: 'Fungal Disease',

    diseaseInformation:
      'Cotton root rot is a soil-associated disease that damages roots and can cause sudden wilting and death of plants, particularly under hot soil conditions.',

    symptoms: [
      'Leaves suddenly become yellow.',
      'Plants wilt rapidly.',
      'Leaves may remain attached after death.',
      'The root collar may become damaged.',
      'Roots become brown and rotted.',
      'Affected plants may die rapidly.'
    ],

    cause:
      'The disease is associated with soil-borne fungal pathogens affecting cotton roots.',

    favorableConditions: [
      'High soil temperatures.',
      'Moisture fluctuations.',
      'Alkaline or calcareous soils.',
      'Plant stress.',
      'Poor soil health.'
    ],

    prevention: [
      'Practice suitable crop rotation.',
      'Improve soil health.',
      'Avoid severe moisture stress.',
      'Use healthy seed.',
      'Maintain balanced nutrition.'
    ],

    solution: [
      'Remove severely affected plants.',
      'Improve soil moisture management.',
      'Use locally recommended biological disease-management practices.',
      'Seek agricultural extension advice during severe outbreaks.'
    ],

    management: [
      'Inspect plants for early wilting.',
      'Maintain uniform irrigation.',
      'Avoid root injuries.',
      'Improve soil organic matter.',
      'Remove severely diseased plant material.'
    ]
  },


  /*
  -------------------------------------------------------
  37. COTTON BACTERIAL BLIGHT
  -------------------------------------------------------
  */

  {
    id: 'cotton-bacterial-blight',
    name: 'Bacterial Blight',
    crop: 'cotton',
    category: 'Bacterial Disease',

    diseaseInformation:
      'Cotton bacterial blight affects leaves, stems and bolls and can cause significant damage under warm and wet conditions.',

    symptoms: [
      'Angular water-soaked spots appear on leaves.',
      'Leaf lesions may turn brown or black.',
      'Dark lesions may develop on stems.',
      'Boll infection may lead to boll rot.',
      'Premature leaf shedding may occur.'
    ],

    cause:
      'The disease is caused by Xanthomonas species associated with cotton bacterial blight.',

    favorableConditions: [
      'Frequent rainfall.',
      'High humidity.',
      'Warm temperatures.',
      'Rain splash.',
      'Infected seed or residues.'
    ],

    prevention: [
      'Use healthy certified seed.',
      'Select resistant varieties where available.',
      'Maintain proper spacing.',
      'Avoid excessive irrigation.',
      'Remove infected residues.'
    ],

    solution: [
      'Remove severely infected plant material where practical.',
      'Improve field sanitation.',
      'Use locally recommended registered bacterial-disease management products when appropriate.',
      'Follow agricultural extension recommendations.'
    ],

    management: [
      'Monitor leaves, stems and bolls.',
      'Avoid movement of contaminated plant material.',
      'Maintain field drainage.',
      'Use integrated disease management.'
    ]
  },


  /*
  -------------------------------------------------------
  38. COTTON POWDERY MILDEW
  -------------------------------------------------------
  */

  {
    id: 'cotton-powdery-mildew',
    name: 'Powdery Mildew',
    crop: 'cotton',
    category: 'Fungal Disease',

    diseaseInformation:
      'Powdery mildew produces white powder-like fungal growth on cotton leaves and may cause premature leaf ageing and shedding.',

    symptoms: [
      'White powdery patches appear on leaves.',
      'Patches gradually enlarge.',
      'Leaves may become yellow.',
      'Premature leaf shedding may occur.',
      'Plant growth may be reduced.'
    ],

    cause:
      'The disease is caused by powdery mildew fungi developing on leaf surfaces.',

    favorableConditions: [
      'High relative humidity.',
      'Cooler nights.',
      'Moderate temperatures.',
      'Dense crop canopy.',
      'Poor air circulation.'
    ],

    prevention: [
      'Maintain suitable plant spacing.',
      'Avoid excessive nitrogen.',
      'Ensure adequate sunlight and air movement.',
      'Monitor leaves regularly.',
      'Use tolerant varieties where available.'
    ],

    solution: [
      'Remove severely affected leaves where practical.',
      'Improve canopy ventilation.',
      'Use locally recommended registered fungicides when necessary.',
      'Follow label instructions.'
    ],

    management: [
      'Monitor regularly.',
      'Inspect lower and shaded leaves.',
      'Maintain balanced nutrition.',
      'Avoid unnecessary repeated fungicide applications.'
    ]
  },


  /*
  -------------------------------------------------------
  39. COTTON LEAF CURL VIRUS
  -------------------------------------------------------
  */

  {
    id: 'cotton-leaf-curl-virus',
    name: 'Leaf Curl Virus',
    crop: 'cotton',
    category: 'Viral Disease',

    diseaseInformation:
      'Cotton leaf curl disease is a viral disease transmitted mainly by whiteflies. It causes leaf deformation, stunting and reduced yield.',

    symptoms: [
      'Leaves curl upward or downward.',
      'Leaf veins become thickened.',
      'Cup-shaped structures may develop on leaves.',
      'Plants become stunted.',
      'Flowering may be reduced.',
      'Boll development may decline.'
    ],

    cause:
      'The disease is caused by cotton leaf curl-associated viruses and is mainly spread by whitefly vectors.',

    favorableConditions: [
      'High whitefly populations.',
      'Presence of infected plants.',
      'Weed hosts around the crop.',
      'Warm weather.',
      'Continuous susceptible cotton cultivation.'
    ],

    prevention: [
      'Use healthy certified seed.',
      'Monitor whitefly populations.',
      'Remove weed hosts.',
      'Remove severely infected plants where appropriate.',
      'Use tolerant varieties where available.'
    ],

    solution: [
      'Focus on managing the insect vector.',
      'Remove severely affected plants when recommended.',
      'Use locally registered whitefly-management products when necessary.',
      'Use integrated pest management.'
    ],

    management: [
      'Monitor whiteflies regularly.',
      'Use yellow sticky traps for monitoring.',
      'Maintain field sanitation.',
      'Avoid unnecessary broad-spectrum insecticide applications.',
      'Protect beneficial insects.'
    ]
  },


  /*
  -------------------------------------------------------
  40. COTTON BOLLWORM
  -------------------------------------------------------
  */

  {
    id: 'cotton-bollworm',
    name: 'Bollworm',
    crop: 'cotton',
    category: 'Insect Pest',

    diseaseInformation:
      'Bollworms are major insect pests of cotton. Larvae feed on squares, flowers and developing bolls and can directly reduce yield and fibre quality.',

    symptoms: [
      'Small holes appear on flower buds.',
      'Holes develop on bolls.',
      'Larvae may be found inside damaged bolls.',
      'Boll contents become damaged.',
      'Premature fruit shedding may occur.',
      'Seed cotton quality declines.'
    ],

    cause:
      'Damage is caused by bollworm larvae feeding on cotton reproductive structures.',

    favorableConditions: [
      'Warm weather.',
      'High pest populations.',
      'Continuous host availability.',
      'Poor monitoring during flowering.',
      'Presence of alternate host crops.'
    ],

    prevention: [
      'Monitor flowering and boll stages.',
      'Use pheromone traps where recommended.',
      'Encourage natural enemies.',
      'Remove crop residues after harvest.',
      'Use suitable resistant or Bt varieties according to local recommendations.'
    ],

    solution: [
      'Inspect flowers and bolls for larvae.',
      'Use biological control methods where available.',
      'Apply locally recommended insecticides only when economically justified.',
      'Rotate insecticide modes of action.'
    ],

    management: [
      'Scout frequently during flowering.',
      'Monitor boll formation.',
      'Protect beneficial insects.',
      'Avoid repeated use of the same insecticide group.',
      'Use integrated pest management.'
    ]
  },


  /*
  -------------------------------------------------------
  41. COTTON WHITEFLY
  -------------------------------------------------------
  */

  {
    id: 'cotton-whitefly',
    name: 'Whitefly',
    crop: 'cotton',
    category: 'Insect Pest',

    diseaseInformation:
      'Whitefly is an important sucking pest of cotton. It feeds on plant sap, weakens plants and can contribute to the spread of viral diseases.',

    symptoms: [
      'Small white insects are visible on leaf undersides.',
      'Leaves may become yellow.',
      'Sticky honeydew accumulates on leaves.',
      'Black sooty mould may develop.',
      'Heavy infestation reduces plant vigour.'
    ],

    cause:
      'The damage is caused by whiteflies feeding on plant sap. Whiteflies can also act as vectors of viral diseases.',

    favorableConditions: [
      'Warm weather.',
      'Dry conditions.',
      'Dense crop canopy.',
      'Excessive nitrogen.',
      'Presence of alternate host plants.'
    ],

    prevention: [
      'Monitor the underside of leaves.',
      'Use yellow sticky traps for monitoring.',
      'Remove weed hosts.',
      'Avoid excessive nitrogen.',
      'Conserve natural enemies.'
    ],

    solution: [
      'Use integrated pest management.',
      'Encourage predators and parasitoids.',
      'Use locally registered insecticides only when necessary.',
      'Rotate insecticide modes of action.'
    ],

    management: [
      'Monitor pest populations.',
      'Inspect lower leaf surfaces.',
      'Protect beneficial insects.',
      'Avoid unnecessary repeated spraying.',
      'Manage alternate weed hosts.'
    ]
  },


  /*
  -------------------------------------------------------
  42. COTTON JASSID
  -------------------------------------------------------
  */

  {
    id: 'cotton-jassid',
    name: 'Jassid',
    crop: 'cotton',
    category: 'Insect Pest',

    diseaseInformation:
      'Jassids are sap-sucking insect pests of cotton. They feed on leaf tissues and can cause characteristic yellowing and curling of leaf margins.',

    symptoms: [
      'Yellowing begins along leaf margins.',
      'Leaf margins curl downward.',
      'Leaves may develop reddish or brown margins.',
      'Severe feeding causes leaf drying.',
      'Plant growth may be reduced.'
    ],

    cause:
      'The damage is caused by jassids feeding on plant sap from cotton leaves.',

    favorableConditions: [
      'Warm weather.',
      'Dry conditions.',
      'High pest populations.',
      'Susceptible varieties.',
      'Poor monitoring.'
    ],

    prevention: [
      'Monitor leaf undersides regularly.',
      'Maintain balanced nutrition.',
      'Avoid excessive nitrogen.',
      'Use tolerant varieties where available.',
      'Conserve natural enemies.'
    ],

    solution: [
      'Use integrated pest management.',
      'Encourage natural predators.',
      'Use locally recommended registered insecticides when necessary.',
      'Avoid unnecessary repeated applications.'
    ],

    management: [
      'Inspect leaves regularly.',
      'Monitor pest populations.',
      'Maintain proper crop nutrition.',
      'Protect beneficial insects.'
    ]
  },


  /*
  -------------------------------------------------------
  43. COTTON THRIPS
  -------------------------------------------------------
  */

  {
    id: 'cotton-thrips',
    name: 'Thrips',
    crop: 'cotton',
    category: 'Insect Pest',

    diseaseInformation:
      'Thrips are tiny insects that feed on young cotton leaves and growing tissues. Heavy infestation can distort young plants and reduce early crop growth.',

    symptoms: [
      'Young leaves develop silvery patches.',
      'Leaves become distorted.',
      'Leaf edges may curl.',
      'Growing points may become damaged.',
      'Young plants show stunted growth.'
    ],

    cause:
      'The damage is caused by thrips feeding on tender plant tissues.',

    favorableConditions: [
      'Warm dry weather.',
      'Young crop stages.',
      'High pest populations.',
      'Weed hosts around fields.'
    ],

    prevention: [
      'Monitor young leaves regularly.',
      'Maintain field sanitation.',
      'Remove weed hosts.',
      'Maintain healthy crop growth.',
      'Conserve natural enemies.'
    ],

    solution: [
      'Use integrated pest management.',
      'Monitor pest levels before treatment.',
      'Use locally recommended registered insecticides when necessary.',
      'Maintain healthy early crop growth and remove nearby weed hosts that may support thrips populations.'
    ],

    management: [
      'Inspect young leaves and growing points.',
      'Maintain good crop establishment.',
      'Manage weeds.',
      'Protect beneficial insects.'
    ]
  },


  /*
  -------------------------------------------------------
  44. COTTON APHID
  -------------------------------------------------------
  */

  {
    id: 'cotton-aphid',
    name: 'Aphid',
    crop: 'cotton',
    category: 'Insect Pest',

    diseaseInformation:
      'Aphids are small sap-sucking insects that colonize young shoots and leaves. Heavy infestation can weaken plants and produce honeydew.',

    symptoms: [
      'Clusters of small insects occur on young shoots.',
      'Leaves become curled or distorted.',
      'Honeydew deposits appear on leaves.',
      'Sooty mould may develop.',
      'Plant growth may be reduced.'
    ],

    cause:
      'The damage is caused by aphids feeding on plant sap.',

    favorableConditions: [
      'Moderate temperatures.',
      'Dense plant growth.',
      'Excessive nitrogen.',
      'Presence of alternate host plants.',
      'Poor natural-enemy activity.'
    ],

    prevention: [
      'Monitor young shoots regularly.',
      'Avoid excessive nitrogen.',
      'Remove weed hosts.',
      'Conserve ladybird beetles and other natural enemies.',
      'Maintain healthy crop growth.'
    ],

    solution: [
      'Use biological control where practical.',
      'Use locally recommended registered insecticides when infestation is significant.',
      'Avoid unnecessary broad-spectrum spraying.',
      'Conserve ladybird beetles and other natural enemies that help suppress aphid populations.'
    ],

    management: [
      'Inspect shoots and leaf undersides.',
      'Monitor aphid populations.',
      'Protect natural enemies.',
      'Maintain balanced nutrition.',
      'Use integrated pest management.'
    ]
  },
  {
  id: 'paddy-blast',
  name: 'Rice Blast',
  crop: 'paddy',
  category: 'Fungal Disease',

  diseaseInformation:
    'Rice blast is an important fungal disease of paddy that can affect leaves, nodes and panicles. Severe infection can reduce healthy leaf area, weaken stems and interfere with grain formation.',

  symptoms: [
    'Spindle-shaped or diamond-shaped lesions appear on leaves.',
    'Lesions may have grey or whitish centres with darker margins.',
    'Leaf infection can cause drying of affected portions.',
    'Dark lesions may develop on stem nodes.',
    'Panicle infection can cause partial or complete grain filling failure.',
    'Severely affected panicles may appear whitish and produce few or poorly filled grains.'
  ],

  cause:
    'Rice blast is caused by the fungus Magnaporthe oryzae, which infects susceptible rice tissues under favourable environmental conditions.',

  favorableConditions: [
    'High relative humidity.',
    'Frequent rainfall or prolonged leaf wetness.',
    'Moderate temperatures favourable for fungal development.',
    'Excessive nitrogen fertilization.',
    'Dense crop growth with poor air movement.',
    'Susceptible rice varieties.'
  ],

  prevention: [
    'Use healthy and good-quality seed.',
    'Prefer locally recommended and disease-tolerant varieties where available.',
    'Avoid excessive nitrogen application.',
    'Maintain balanced crop nutrition.',
    'Maintain appropriate plant spacing and avoid excessively dense crop growth.',
    'Monitor the crop regularly, especially during humid weather and critical growth stages.'
  ],

  solution: [
    'Remove and properly manage severely affected plant material where practical.',
    'Use locally recommended disease-management practices.',
    'Apply registered fungicides only when necessary and according to the product label and local agricultural recommendations.',
    'Seek agricultural extension advice when disease incidence becomes severe.'
  ],

  management: [
    'Inspect leaves, nodes and panicles regularly.',
    'Monitor disease development during humid and rainy periods.',
    'Maintain balanced nitrogen and other nutrient management.',
    'Avoid excessive crop density.',
    'Use integrated disease-management practices.',
    'Give particular attention to panicle infection because severe neck or panicle blast can affect grain production.'
  ]
},

{
  id: 'paddy-brown-spot',
  name: 'Brown Spot',
  crop: 'paddy',
  category: 'Fungal Disease',

  diseaseInformation:
    'Brown spot is a fungal disease of paddy that mainly affects leaves and can also affect grains. It is often associated with plant stress, poor nutrition and environmental conditions that favour disease development.',

  symptoms: [
    'Small brown spots appear on leaves.',
    'Spots may enlarge and develop darker margins.',
    'Numerous lesions can cause leaves to dry prematurely.',
    'Brown lesions may occur on grains or glumes.',
    'Severely affected plants may show poor vigour.',
    'Grain quality and grain filling may be reduced under severe infection.'
  ],

  cause:
    'Brown spot is caused by the fungus Bipolaris oryzae.',

  favorableConditions: [
    'High humidity.',
    'Frequent rainfall or prolonged moisture.',
    'Poor soil fertility, particularly nutrient imbalance.',
    'Plant stress caused by drought or inadequate nutrition.',
    'Poorly drained or unsuitable field conditions.',
    'Use of infected seed.'
  ],

  prevention: [
    'Use healthy and certified or quality-tested seed.',
    'Maintain balanced fertilization.',
    'Avoid severe moisture stress.',
    'Maintain proper field and water management.',
    'Remove or properly manage infected crop residues.',
    'Monitor leaves and grains regularly for early symptoms.'
  ],

  solution: [
    'Improve crop nutrition and reduce plant stress.',
    'Use locally recommended seed-treatment practices.',
    'Remove severely affected plant material where practical.',
    'Use locally recommended registered fungicides when disease pressure is significant.',
    'Consult agricultural extension personnel when symptoms are severe or spreading rapidly.'
  ],

  management: [
    'Inspect leaves regularly from early crop stages.',
    'Monitor disease development after periods of prolonged humidity or rainfall.',
    'Maintain adequate soil fertility.',
    'Prevent severe water stress.',
    'Manage crop residues properly after harvest.',
    'Use integrated disease-management practices throughout the crop cycle.'
  ]
},

{
  id: 'paddy-sheath-blight',
  name: 'Sheath Blight',
  crop: 'paddy',
  category: 'Fungal Disease',

  diseaseInformation:
    'Sheath blight is an important fungal disease of rice that commonly develops on leaf sheaths near the water line and can spread upward through dense crop canopies. Severe infection can reduce photosynthetic area and affect grain production.',

  symptoms: [
    'Oval or irregular greenish-grey lesions appear on leaf sheaths.',
    'Lesions develop near the water level and may spread upward.',
    'Lesions can become brown or grey as the disease progresses.',
    'Infected sheaths may show large patches of dead tissue.',
    'Leaves above affected sheaths may dry under severe infection.',
    'Dense crop areas may show rapid disease spread.'
  ],

  cause:
    'Sheath blight is caused by the soil- and residue-associated fungus Rhizoctonia solani.',

  favorableConditions: [
    'High humidity.',
    'Warm temperatures.',
    'Dense crop canopy.',
    'Excessive nitrogen application.',
    'High plant population.',
    'Continuous wet conditions around the crop.'
  ],

  prevention: [
    'Maintain recommended plant spacing.',
    'Avoid excessive nitrogen fertilization.',
    'Maintain balanced crop nutrition.',
    'Avoid unnecessary dense crop growth.',
    'Manage infected crop residues properly.',
    'Monitor lower leaf sheaths regularly, especially during humid weather.'
  ],

  solution: [
    'Remove or manage severely affected plant material where practical.',
    'Improve crop aeration by maintaining appropriate plant density.',
    'Use locally recommended disease-management practices.',
    'Apply registered fungicides when necessary according to local recommendations and label directions.',
    'Seek agricultural extension advice during severe disease outbreaks.'
  ],

  management: [
    'Inspect leaf sheaths near the water line.',
    'Monitor disease spread through dense crop areas.',
    'Maintain balanced nitrogen management.',
    'Avoid excessive crop density.',
    'Manage irrigation and field conditions appropriately.',
    'Use integrated disease-management practices.'
  ]
},

{
  id: 'paddy-bacterial-leaf-blight',
  name: 'Bacterial Leaf Blight',
  crop: 'paddy',
  category: 'Bacterial Disease',

  diseaseInformation:
    'Bacterial leaf blight is a serious bacterial disease of rice that can affect leaves and reduce plant vigour. Under favourable conditions, the disease can spread rapidly through fields and cause significant yield losses.',

  symptoms: [
    'Water-soaked or pale green lesions may appear along leaf margins.',
    'Lesions gradually extend along the leaf.',
    'Leaves may turn yellowish and then dry from the margins.',
    'Severely affected leaves may become straw coloured.',
    'Young plants may wilt rapidly under severe infection.',
    'Infected fields may show patches of drying leaves.'
  ],

  cause:
    'Bacterial leaf blight is caused by the bacterium Xanthomonas oryzae pv. oryzae.',

  favorableConditions: [
    'Warm and humid weather.',
    'Frequent rainfall.',
    'Strong winds and rain that spread bacterial cells.',
    'Excessive nitrogen fertilization.',
    'Standing water and poor field management.',
    'Susceptible rice varieties.',
    'Plant injuries that allow bacterial entry.'
  ],

  prevention: [
    'Use healthy and quality-tested seed.',
    'Prefer locally recommended tolerant varieties where available.',
    'Avoid excessive nitrogen application.',
    'Maintain balanced crop nutrition.',
    'Avoid unnecessary plant injury during field operations.',
    'Maintain proper field sanitation and water management.',
    'Monitor fields regularly during warm and humid weather.'
  ],

  solution: [
    'Remove or manage severely affected plant material where practical.',
    'Maintain balanced nitrogen and water management.',
    'Use locally recommended bacterial-disease management practices.',
    'Avoid unnecessary movement of contaminated plant material between fields.',
    'Seek agricultural extension advice for severe outbreaks and locally approved control measures.'
  ],

  management: [
    'Inspect leaf margins and young leaves regularly.',
    'Monitor disease spread after heavy rainfall and strong winds.',
    'Maintain appropriate water management.',
    'Avoid excessive nitrogen fertilization.',
    'Use healthy planting material and suitable varieties.',
    'Follow integrated crop-health management practices.'
  ]
},
{
  id: 'turmeric-leaf-spot',
  name: 'Leaf Spot',
  crop: 'turmeric',
  category: 'Fungal Disease',

  diseaseInformation:
    'Turmeric leaf spot is a fungal disease that mainly affects the leaves and can reduce the photosynthetic capacity of the plant. Severe infection may cause premature drying of leaves and reduced rhizome development.',

  symptoms: [
    'Small brown or yellowish spots appear on leaves.',
    'Spots gradually enlarge and may develop darker margins.',
    'Several spots may merge to form larger damaged areas.',
    'Severely affected leaves may turn yellow and dry.',
    'Leaf area may be reduced under heavy infection.',
    'Severe disease can reduce plant vigour and rhizome development.'
  ],

  cause:
    'Leaf spot is caused by fungal pathogens that infect turmeric leaves, particularly under warm and humid conditions.',

  favorableConditions: [
    'Warm and humid weather.',
    'Frequent rainfall.',
    'Prolonged leaf wetness.',
    'Dense crop canopy.',
    'Poor air circulation.',
    'Infected crop residues remaining in the field.'
  ],

  prevention: [
    'Use healthy and disease-free planting material.',
    'Maintain adequate spacing between plants.',
    'Avoid excessive irrigation and prolonged leaf wetness.',
    'Maintain proper field sanitation.',
    'Remove severely infected leaves where practical.',
    'Maintain balanced crop nutrition.'
  ],

  solution: [
    'Remove severely infected leaves where practical.',
    'Improve field aeration and avoid excessive moisture.',
    'Use locally recommended disease-management practices.',
    'Apply registered fungicides when necessary according to label directions and local agricultural recommendations.',
    'Seek agricultural extension advice when disease severity is high.'
  ],

  management: [
    'Inspect leaves regularly for early spotting.',
    'Monitor disease development during humid and rainy periods.',
    'Maintain proper plant spacing.',
    'Remove heavily infected plant material.',
    'Manage irrigation carefully.',
    'Use integrated disease-management practices.'
  ]
},

{
  id: 'turmeric-leaf-blotch',
  name: 'Leaf Blotch',
  crop: 'turmeric',
  category: 'Fungal Disease',

  diseaseInformation:
    'Turmeric leaf blotch is a fungal disease that produces irregular lesions and blotches on leaves. Severe infection can reduce green leaf area and weaken the crop during active growth and rhizome development.',

  symptoms: [
    'Irregular brown or dark lesions appear on leaves.',
    'Lesions may expand and form large blotches.',
    'Affected areas may become dry and brittle.',
    'Leaves may show yellowing around infected portions.',
    'Severely affected leaves may dry prematurely.',
    'Heavy infection can reduce plant vigour.'
  ],

  cause:
    'Leaf blotch is caused by fungal infection of turmeric foliage, particularly when environmental conditions remain favourable for pathogen development.',

  favorableConditions: [
    'Warm and humid weather.',
    'Frequent rainfall.',
    'Extended periods of leaf wetness.',
    'Dense vegetation.',
    'Poor air circulation within the crop.',
    'Poor field sanitation.'
  ],

  prevention: [
    'Use healthy and disease-free rhizomes for planting.',
    'Maintain recommended plant spacing.',
    'Ensure good field drainage.',
    'Avoid excessive irrigation.',
    'Remove infected leaves and crop residues where practical.',
    'Maintain balanced nutrition and healthy crop growth.'
  ],

  solution: [
    'Remove severely affected leaves where practical.',
    'Improve drainage and field aeration.',
    'Use locally recommended disease-management measures.',
    'Apply registered fungicides when necessary according to label directions and local recommendations.',
    'Consult agricultural extension personnel when disease continues to spread.'
  ],

  management: [
    'Inspect leaves regularly.',
    'Monitor newly emerging foliage for lesions.',
    'Maintain good field sanitation.',
    'Avoid excessive moisture in the crop.',
    'Remove severely damaged plant material.',
    'Follow integrated disease-management practices throughout the season.'
  ]
},

{
  id: 'turmeric-rhizome-rot',
  name: 'Rhizome Rot',
  crop: 'turmeric',
  category: 'Fungal Disease',

  diseaseInformation:
    'Rhizome rot is an important soil-borne disease of turmeric that affects underground rhizomes and roots. Severe infection can cause poor plant establishment, yellowing, wilting and decay of the planting material and developing rhizomes.',

  symptoms: [
    'Leaves begin to yellow from the lower portions.',
    'Plants show reduced growth and vigour.',
    'Affected plants may wilt gradually.',
    'Roots and rhizomes become soft and discoloured.',
    'Rotting tissue may develop an unpleasant appearance or odour.',
    'Severely affected plants may collapse and die.',
    'Poor rhizome development may occur in heavily affected fields.'
  ],

  cause:
    'Rhizome rot is caused by soil-borne fungal pathogens that infect turmeric roots and rhizomes, especially when drainage is poor.',

  favorableConditions: [
    'Poorly drained soils.',
    'Prolonged waterlogging.',
    'Excessive irrigation.',
    'High soil moisture.',
    'Infected planting material.',
    'Continuous cultivation without proper field sanitation.',
    'Warm and humid conditions.'
  ],

  prevention: [
    'Use healthy and disease-free rhizomes for planting.',
    'Select well-drained fields.',
    'Avoid prolonged waterlogging.',
    'Maintain proper drainage channels.',
    'Avoid excessive irrigation.',
    'Remove severely diseased plants and rhizomes from the field.',
    'Maintain proper field sanitation and crop rotation where practical.'
  ],

  solution: [
    'Remove severely affected plants and rhizomes where practical.',
    'Improve field drainage immediately.',
    'Reduce excessive irrigation and prevent standing water.',
    'Use locally recommended disease-management practices for soil-borne diseases.',
    'Use registered biological or chemical disease-management products only when locally recommended and according to label directions.'
  ],

  management: [
    'Inspect plants regularly for yellowing and wilting.',
    'Check affected plants and rhizomes for signs of decay.',
    'Maintain proper drainage throughout the crop cycle.',
    'Remove diseased plant material from the field.',
    'Avoid using infected rhizomes as planting material.',
    'Maintain field sanitation and integrated disease management.'
  ]
},

{
  id: 'turmeric-root-knot-nematode',
  name: 'Root Knot Nematode',
  crop: 'turmeric',
  category: 'Nematode Problem',

  diseaseInformation:
    'Root knot nematodes are microscopic soil-dwelling pests that attack turmeric roots and interfere with water and nutrient uptake. Infested plants may show poor growth, yellowing and reduced rhizome development.',

  symptoms: [
    'Plants show stunted or uneven growth.',
    'Leaves may become pale or yellow.',
    'Plants may wilt even when soil moisture is adequate.',
    'Roots may develop small swellings or galls.',
    'Root systems may become poorly developed.',
    'Affected plants may produce smaller or poorly developed rhizomes.',
    'Infested areas may occur in patches across the field.'
  ],

  cause:
    'Damage is caused by root-knot nematodes, mainly Meloidogyne species, which feed on turmeric roots and interfere with normal root function.',

  favorableConditions: [
    'Infested soil.',
    'Use of contaminated planting material.',
    'Continuous cultivation of susceptible crops.',
    'Warm soil conditions.',
    'Poor crop rotation.',
    'Presence of alternative host weeds.',
    'Movement of infested soil between fields.'
  ],

  prevention: [
    'Use healthy and pest-free planting material.',
    'Use suitable crop rotation practices.',
    'Remove weeds that can act as alternative hosts.',
    'Maintain good field sanitation.',
    'Avoid moving infested soil between fields.',
    'Use locally recommended biological nematode-management practices where available.',
    'Monitor fields with a history of nematode problems.'
  ],

  solution: [
    'Remove severely affected plants where practical.',
    'Use locally recommended biological control measures.',
    'Improve soil health through suitable organic matter management.',
    'Use registered nematode-management products only when necessary and according to local recommendations and label directions.',
    'Seek agricultural extension advice when infestation is severe.'
  ],

  management: [
    'Monitor crop patches showing stunting or yellowing.',
    'Inspect roots for characteristic galls.',
    'Maintain suitable crop rotation.',
    'Control alternative weed hosts.',
    'Avoid movement of infested soil and planting material.',
    'Use integrated nematode-management practices.'
  ]
},
{
  id: 'banana-plantain-panama-wilt',
  name: 'Panama Wilt',
  crop: 'banana-plantain',
  category: 'Fungal Disease',

  diseaseInformation:
    'Panama wilt is a serious soil-borne disease of banana caused by Fusarium. The disease affects the roots and vascular system, restricting water movement and causing progressive yellowing, wilting and decline of plants.',

  symptoms: [
    'Older leaves begin to yellow from the margins.',
    'Leaves gradually wilt and droop around the pseudostem.',
    'Yellowing progresses to younger leaves as disease severity increases.',
    'Leaf stalks may bend and leaves may hang around the plant.',
    'The pseudostem may show internal brown or reddish vascular discoloration.',
    'Severely affected plants may stop producing healthy bunches.',
    'Plants may eventually collapse and die.'
  ],

  cause:
    'Panama wilt is caused by Fusarium oxysporum f. sp. cubense, a soil-borne fungal pathogen that infects banana roots and colonizes the vascular system.',

  favorableConditions: [
    'Warm soil conditions.',
    'Poorly drained fields.',
    'Movement of infected soil.',
    'Use of infected planting material.',
    'Injury to roots.',
    'Continuous cultivation of susceptible banana cultivars.',
    'Movement of contaminated farm equipment or water.'
  ],

  prevention: [
    'Use healthy and disease-free planting material.',
    'Select planting material from reliable sources.',
    'Maintain good field drainage.',
    'Avoid moving soil from infected fields to healthy fields.',
    'Clean farm tools and equipment after working in affected areas.',
    'Remove severely affected plants and manage them properly.',
    'Use locally recommended tolerant or resistant cultivars where available.'
  ],

  solution: [
    'Remove severely affected plants and associated infected material where practical.',
    'Improve drainage and avoid conditions that damage roots.',
    'Use healthy planting material for replacement planting.',
    'Follow locally recommended disease-management practices.',
    'Seek agricultural extension advice before replanting heavily affected fields.'
  ],

  management: [
    'Inspect plants regularly for progressive leaf yellowing and wilting.',
    'Check suspicious plants for vascular discoloration.',
    'Remove and properly manage severely affected plants.',
    'Prevent movement of contaminated soil and planting material.',
    'Maintain good drainage and root-zone health.',
    'Use integrated disease-management practices.'
  ]
},

{
  id: 'banana-plantain-sigatoka-leaf-spot',
  name: 'Sigatoka Leaf Spot',
  crop: 'banana-plantain',
  category: 'Fungal Disease',

  diseaseInformation:
    'Sigatoka leaf spot is a fungal disease of banana and plantain that affects leaves and reduces functional green leaf area. Severe infection can reduce photosynthesis and negatively affect bunch development and fruit filling.',

  symptoms: [
    'Small yellowish or pale streaks appear on leaves.',
    'Streaks gradually develop into brown or dark lesions.',
    'Lesions may enlarge and merge together.',
    'Severely affected leaves develop extensive dead areas.',
    'Leaves may dry prematurely.',
    'Heavy infection can result in reduced healthy leaf area.',
    'Fruit development and filling may be affected when disease is severe.'
  ],

  cause:
    'Sigatoka leaf spot is caused by fungal pathogens that infect banana foliage, particularly under humid conditions.',

  favorableConditions: [
    'Warm and humid weather.',
    'Frequent rainfall.',
    'Long periods of leaf wetness.',
    'Dense plantation canopy.',
    'Poor air circulation.',
    'Infected leaves and crop residues remaining in the plantation.'
  ],

  prevention: [
    'Use healthy planting material.',
    'Maintain appropriate spacing between plants.',
    'Remove severely infected and dead leaves where practical.',
    'Maintain good field sanitation.',
    'Improve air circulation within the plantation.',
    'Avoid excessive irrigation that keeps foliage wet for long periods.',
    'Maintain balanced crop nutrition.'
  ],

  solution: [
    'Remove severely infected leaves where practical.',
    'Improve plantation aeration and sanitation.',
    'Use locally recommended disease-management practices.',
    'Apply registered fungicides when necessary according to label directions and local agricultural recommendations.',
    'Seek agricultural extension advice when disease pressure becomes severe.'
  ],

  management: [
    'Inspect young and mature leaves regularly.',
    'Monitor disease development during humid and rainy periods.',
    'Remove heavily infected leaves where practical.',
    'Maintain proper plant spacing.',
    'Avoid prolonged leaf wetness.',
    'Use integrated disease-management practices throughout the crop cycle.'
  ]
},

{
  id: 'banana-plantain-bunchy-top',
  name: 'Banana Bunchy Top',
  crop: 'banana-plantain',
  category: 'Viral Disease',

  diseaseInformation:
    'Banana bunchy top is a viral disease that affects banana and plantain plants. It interferes with normal leaf development and can severely reduce plant growth and bunch production. Infected planting material and insect vectors can contribute to disease spread.',

  symptoms: [
    'New leaves become narrow and erect.',
    'Leaves may develop a crowded or bunchy appearance at the top of the plant.',
    'Dark green streaks or dots may appear along leaf veins and midribs.',
    'Leaves may become smaller than normal.',
    'Plants show reduced growth and poor vigour.',
    'Severely affected plants may fail to produce normal bunches.',
    'Infected suckers may continue carrying the disease to new fields.'
  ],

  cause:
    'Banana bunchy top is caused by Banana bunchy top virus and can be spread by infected planting material and the banana aphid vector.',

  favorableConditions: [
    'Use of infected suckers or planting material.',
    'Presence of banana aphid vectors.',
    'Poor removal of infected plants.',
    'Continuous cultivation of infected planting material.',
    'Movement of infected suckers between fields.',
    'Poor plantation sanitation.'
  ],

  prevention: [
    'Use healthy and disease-free planting material.',
    'Inspect planting material before establishment.',
    'Remove severely infected plants and suckers promptly.',
    'Control vector populations using locally recommended integrated pest-management practices.',
    'Avoid moving infected suckers between fields.',
    'Maintain good plantation sanitation.',
    'Monitor new growth regularly for characteristic symptoms.'
  ],

  solution: [
    'Remove and properly destroy severely infected plants where practical.',
    'Do not use suckers from infected plants as planting material.',
    'Manage banana aphid populations using locally recommended methods.',
    'Replace infected plants with healthy planting material.',
    'Seek agricultural extension advice when disease is detected in a plantation.'
  ],

  management: [
    'Inspect newly emerging leaves regularly.',
    'Rogue symptomatic plants promptly.',
    'Use only healthy planting material.',
    'Monitor banana aphid activity.',
    'Prevent movement of infected suckers.',
    'Maintain plantation sanitation and integrated disease management.'
  ]
},

{
  id: 'banana-plantain-corm-rhizome-rot',
  name: 'Corm & Rhizome Rot',
  crop: 'banana-plantain',
  category: 'Fungal Disease',

  diseaseInformation:
    'Corm and rhizome rot affects the underground portions of banana and plantain plants. Infection can damage roots and planting structures, resulting in poor establishment, yellowing, wilting and reduced plant vigour.',

  symptoms: [
    'Plants show poor establishment and reduced growth.',
    'Older leaves may turn yellow.',
    'Plants may develop wilting symptoms.',
    'Roots may become dark, damaged or decayed.',
    'Corm or rhizome tissues may become soft and discoloured.',
    'Affected plants may produce weak suckers.',
    'Severely affected plants may collapse or die.'
  ],

  cause:
    'Corm and rhizome rot is associated with soil-borne fungal pathogens that infect underground plant tissues, particularly when excessive moisture and poor drainage occur.',

  favorableConditions: [
    'Poorly drained soil.',
    'Prolonged waterlogging.',
    'Excessive irrigation.',
    'Infected planting material.',
    'Root or corm injuries.',
    'Poor field sanitation.',
    'Warm and humid soil conditions.'
  ],

  prevention: [
    'Use healthy and disease-free planting material.',
    'Select well-drained fields.',
    'Maintain proper drainage around plants.',
    'Avoid prolonged waterlogging.',
    'Avoid unnecessary root and corm injuries.',
    'Remove severely affected plants and infected residues.',
    'Maintain good plantation sanitation.'
  ],

  solution: [
    'Remove severely affected plants where practical.',
    'Improve drainage around the root zone.',
    'Reduce excessive irrigation and prevent standing water.',
    'Use healthy planting material for replacement.',
    'Follow locally recommended disease-management practices.',
    'Use registered biological or chemical disease-management products only when locally recommended and according to label directions.'
  ],

  management: [
    'Inspect plants for yellowing and wilting.',
    'Check roots and underground tissues when disease is suspected.',
    'Maintain proper drainage throughout the crop cycle.',
    'Remove severely diseased plant material.',
    'Avoid planting material from affected plants.',
    'Maintain field sanitation and integrated disease management.'
  ]
},
{
  id: 'millets-downy-mildew',
  name: 'Downy Mildew',
  crop: 'millets',
  category: 'Fungal Disease',

  diseaseInformation:
    'Downy mildew is an important disease of millet crops that mainly affects young leaves and developing plants. Severe infection can reduce plant growth and, in susceptible millet species, interfere with normal panicle development.',

  symptoms: [
    'Young leaves may show pale green or yellow areas.',
    'Yellowish streaks or patches may develop along the leaves.',
    'White or greyish fungal growth may appear on the underside of infected leaves under humid conditions.',
    'Affected plants may become stunted.',
    'Leaves may become distorted or dry prematurely.',
    'Severely infected plants may show poor panicle development.',
    'Disease may occur in patches within the field.'
  ],

  cause:
    'Downy mildew is caused by oomycete pathogens that infect susceptible millet plants, with the specific pathogen varying among millet species.',

  favorableConditions: [
    'Warm and humid weather.',
    'Frequent rainfall.',
    'High relative humidity.',
    'Prolonged leaf wetness.',
    'Dense crop growth.',
    'Poor field aeration.',
    'Use of infected seed or contaminated planting material.'
  ],

  prevention: [
    'Use healthy and quality-tested seed.',
    'Prefer locally recommended disease-tolerant varieties where available.',
    'Maintain appropriate plant spacing.',
    'Avoid excessive irrigation and prolonged leaf wetness.',
    'Maintain good field sanitation.',
    'Remove severely infected plants where practical.',
    'Follow suitable crop rotation practices.'
  ],

  solution: [
    'Remove severely infected plants where practical.',
    'Use locally recommended seed-treatment practices.',
    'Improve field drainage and avoid excessive moisture.',
    'Use registered fungicidal or disease-management products when locally recommended and necessary.',
    'Seek agricultural extension advice when disease incidence becomes severe.'
  ],

  management: [
    'Inspect young leaves regularly.',
    'Monitor disease development during humid and rainy periods.',
    'Remove severely affected plants where practical.',
    'Maintain proper plant spacing and field aeration.',
    'Avoid excessive irrigation.',
    'Use integrated disease-management practices.'
  ]
},

{
  id: 'millets-blast',
  name: 'Blast',
  crop: 'millets',
  category: 'Fungal Disease',

  diseaseInformation:
    'Blast is a fungal disease that can affect leaves, nodes and panicles of susceptible millet crops. Severe infection may reduce healthy leaf area and cause damage to panicles, resulting in poor grain formation and reduced yield.',

  symptoms: [
    'Spindle-shaped or elongated lesions may appear on leaves.',
    'Lesions may have grey or whitish centres with darker margins.',
    'Multiple lesions can merge and cause leaf drying.',
    'Dark lesions may develop on stems or nodes.',
    'Panicle infection may cause poor grain formation.',
    'Affected panicles may become weak or partially dry.',
    'Severe infection can reduce grain yield.'
  ],

  cause:
    'Blast is caused by fungal pathogens in the Magnaporthe oryzae species complex that can infect susceptible millet crops.',

  favorableConditions: [
    'Warm and humid conditions.',
    'Frequent rainfall.',
    'Prolonged leaf wetness.',
    'Excessive nitrogen application.',
    'Dense crop growth.',
    'Poor air circulation.',
    'Cultivation of susceptible varieties.'
  ],

  prevention: [
    'Use healthy and quality-tested seed.',
    'Prefer locally recommended tolerant varieties where available.',
    'Avoid excessive nitrogen fertilization.',
    'Maintain balanced crop nutrition.',
    'Maintain appropriate plant spacing.',
    'Avoid excessive moisture and prolonged leaf wetness.',
    'Monitor leaves and panicles regularly.'
  ],

  solution: [
    'Remove severely infected plant material where practical.',
    'Maintain balanced crop nutrition.',
    'Use locally recommended disease-management practices.',
    'Apply registered fungicides when necessary according to label directions and local agricultural recommendations.',
    'Seek expert advice when panicle infection becomes significant.'
  ],

  management: [
    'Inspect leaves and panicles regularly.',
    'Monitor disease during humid weather.',
    'Maintain suitable crop density.',
    'Avoid excessive nitrogen.',
    'Remove severely affected plant material where practical.',
    'Use integrated disease-management practices.'
  ]
},

{
  id: 'millets-rust',
  name: 'Rust',
  crop: 'millets',
  category: 'Fungal Disease',

  diseaseInformation:
    'Rust is a fungal disease that produces characteristic pustules on millet leaves and other plant parts. Severe infection can reduce photosynthetic activity and cause premature drying of foliage.',

  symptoms: [
    'Small yellowish or orange spots appear on leaves.',
    'Rust-coloured powdery pustules develop on affected tissues.',
    'Pustules may occur on both surfaces of leaves depending on the millet species.',
    'Infected leaves may develop yellowing around pustules.',
    'Severe infection can cause premature leaf drying.',
    'Plant vigour may decline under heavy disease pressure.',
    'Grain production may be affected when infection is severe.'
  ],

  cause:
    'Rust is caused by species-specific rust fungi that infect susceptible millet crops.',

  favorableConditions: [
    'Moderate to warm temperatures.',
    'High humidity.',
    'Frequent rainfall or dew.',
    'Extended periods of leaf wetness.',
    'Dense crop canopy.',
    'Poor air circulation.',
    'Cultivation of susceptible varieties.'
  ],

  prevention: [
    'Use healthy and quality-tested seed.',
    'Prefer locally recommended disease-tolerant varieties where available.',
    'Maintain appropriate crop spacing.',
    'Avoid excessive crop density.',
    'Maintain balanced nutrition.',
    'Remove severely infected plant material where practical.',
    'Monitor crops regularly for early rust symptoms.'
  ],

  solution: [
    'Remove severely affected leaves or plant material where practical.',
    'Improve crop aeration by maintaining appropriate spacing.',
    'Use locally recommended registered fungicides when disease pressure is significant.',
    'Follow agricultural extension recommendations for product selection and timing.',
    'Maintain balanced crop nutrition to support healthy plant growth.'
  ],

  management: [
    'Inspect leaves regularly for rust pustules.',
    'Monitor disease progression during humid weather.',
    'Maintain suitable crop density.',
    'Remove heavily affected plant material where practical.',
    'Avoid excessive nitrogen application.',
    'Use integrated disease-management practices.'
  ]
},

{
  id: 'millets-grain-mold',
  name: 'Grain Mold',
  crop: 'millets',
  category: 'Fungal Disease',

  diseaseInformation:
    'Grain mold is a group of fungal diseases that can develop on millet grains, particularly when wet and humid conditions occur around flowering and grain maturity. Severe infection can reduce grain quality, colour, storage life and market value.',

  symptoms: [
    'Grains develop discolouration or abnormal colour.',
    'Visible fungal growth may occur on grains under humid conditions.',
    'Panicles may contain mouldy or poorly developed grains.',
    'Grains may become shrivelled or lightweight.',
    'Grain quality and appearance may deteriorate.',
    'Severely affected grain lots may have poor storage quality.',
    'Disease severity may be higher when mature panicles remain exposed to wet weather.'
  ],

  cause:
    'Grain mold is caused by a complex of fungi that colonize developing or mature millet grains, especially when moisture remains high during flowering and grain maturation.',

  favorableConditions: [
    'Frequent rainfall during flowering and grain maturity.',
    'High relative humidity.',
    'Prolonged wet conditions around panicles.',
    'Delayed harvesting after maturity.',
    'Dense crop canopy.',
    'Poor field aeration.',
    'Infected crop residues and contaminated seed.'
  ],

  prevention: [
    'Use healthy and quality-tested seed.',
    'Prefer varieties suitable for the local growing season.',
    'Plan sowing and harvesting to reduce exposure to prolonged wet weather where practical.',
    'Maintain appropriate plant spacing.',
    'Avoid excessive nitrogen fertilization.',
    'Harvest mature panicles promptly under suitable weather conditions.',
    'Dry harvested grain properly before storage.'
  ],

  solution: [
    'Harvest mature grain promptly when suitable dry weather is available.',
    'Separate visibly mouldy or damaged grain from healthy grain.',
    'Dry harvested grain thoroughly to a safe storage moisture level.',
    'Use locally recommended disease-management practices during crop production.',
    'Follow appropriate grain storage and sanitation practices to prevent further mould development.'
  ],

  management: [
    'Inspect panicles during flowering and grain maturity.',
    'Monitor fields after rainfall during grain development.',
    'Harvest at appropriate maturity.',
    'Dry grain properly before storage.',
    'Remove damaged and visibly mouldy grain.',
    'Store clean and adequately dried grain in suitable conditions.',
    'Maintain field and post-harvest sanitation.'
  ]
},
{
  id: 'mango-powdery-mildew',
  name: 'Powdery Mildew',
  crop: 'mango',
  category: 'Fungal Disease',

  diseaseInformation:
    'Powdery mildew is an important fungal disease of mango that mainly affects young leaves, flower panicles and developing fruits. Severe infection during flowering can reduce fruit set and cause significant yield loss.',

  symptoms: [
    'White or greyish powdery fungal growth appears on young leaves.',
    'Flower panicles may become covered with a powdery coating.',
    'Young leaves may become distorted or curled.',
    'Infected flowers may dry and fall prematurely.',
    'Young fruits may develop surface infection and drop.',
    'Severe infection can reduce fruit set.',
    'Disease is often more noticeable during flowering.'
  ],

  cause:
    'Powdery mildew is caused by the fungus Oidium mangiferae, which commonly infects tender mango tissues and flower panicles.',

  favorableConditions: [
    'Cool to moderately warm conditions during flowering.',
    'High relative humidity.',
    'Morning dew and humid nights.',
    'Poor air circulation within dense canopies.',
    'Dense flowering and excessive canopy growth.',
    'Susceptible mango varieties.'
  ],

  prevention: [
    'Maintain proper orchard spacing and canopy aeration.',
    'Prune overcrowded and excessively dense branches.',
    'Avoid excessive nitrogen application.',
    'Remove heavily infected plant material where practical.',
    'Maintain balanced nutrition.',
    'Monitor flower panicles regularly during flowering.',
    'Prefer locally recommended tolerant varieties where available.'
  ],

  solution: [
    'Remove severely infected plant parts where practical.',
    'Improve canopy aeration through appropriate pruning.',
    'Use locally recommended registered fungicides when disease pressure is significant.',
    'Apply disease-management products according to label directions.',
    'Seek agricultural extension advice when flowering is severely affected.'
  ],

  management: [
    'Inspect young leaves and flower panicles regularly.',
    'Monitor the orchard closely during flowering.',
    'Maintain good canopy ventilation.',
    'Avoid excessive nitrogen fertilization.',
    'Remove severely affected plant material where practical.',
    'Use integrated disease-management practices.'
  ]
},

{
  id: 'mango-anthracnose',
  name: 'Anthracnose',
  crop: 'mango',
  category: 'Fungal Disease',

  diseaseInformation:
    'Anthracnose is a major fungal disease of mango that can affect leaves, flowers, twigs and fruits. Fruit infection can become particularly serious under humid and rainy conditions and may continue to develop after harvest.',

  symptoms: [
    'Small dark brown to black spots may appear on leaves.',
    'Leaf lesions may enlarge and merge under severe infection.',
    'Dark lesions may develop on flower panicles.',
    'Infected flowers may dry and fall.',
    'Young fruits may develop small black or brown spots.',
    'Fruit lesions may enlarge and become sunken as the fruit matures.',
    'Post-harvest fruit decay may develop from infected areas.'
  ],

  cause:
    'Anthracnose is caused by Colletotrichum species that infect mango tissues, especially under warm and humid conditions.',

  favorableConditions: [
    'Warm and humid weather.',
    'Frequent rainfall.',
    'High relative humidity.',
    'Prolonged leaf and fruit wetness.',
    'Dense tree canopy.',
    'Poor orchard aeration.',
    'Presence of infected plant debris and diseased fruits.'
  ],

  prevention: [
    'Maintain good orchard sanitation.',
    'Remove diseased fruits and infected plant material.',
    'Prune dense canopies to improve air circulation.',
    'Avoid unnecessary overhead irrigation.',
    'Maintain balanced tree nutrition.',
    'Harvest fruits carefully to avoid injuries.',
    'Use healthy planting material.'
  ],

  solution: [
    'Remove and destroy severely infected fruits and plant debris where practical.',
    'Improve canopy aeration through appropriate pruning.',
    'Use locally recommended registered fungicides when necessary.',
    'Apply disease-management products at the recommended growth stages.',
    'Maintain proper post-harvest handling and sanitation.'
  ],

  management: [
    'Inspect leaves, flowers, twigs and fruits regularly.',
    'Monitor disease during rainy and humid periods.',
    'Maintain orchard sanitation.',
    'Prune overcrowded branches where necessary.',
    'Handle fruits carefully during harvesting and transport.',
    'Use integrated disease-management practices.'
  ]
},

{
  id: 'mango-bacterial-canker',
  name: 'Bacterial Canker',
  crop: 'mango',
  category: 'Bacterial Disease',

  diseaseInformation:
    'Bacterial canker is a serious disease of mango that can affect leaves, twigs, branches and fruits. Severe infection can cause defoliation, twig damage and blemishes on fruits, reducing crop quality.',

  symptoms: [
    'Small water-soaked or dark spots may appear on leaves.',
    'Leaf lesions may become brown or necrotic.',
    'Leaves may develop shot-hole-like symptoms as damaged tissue falls away.',
    'Dark lesions or cankers may develop on twigs and branches.',
    'Gum or bacterial exudates may appear from infected areas.',
    'Fruits may develop dark raised spots or lesions.',
    'Severe infection may cause premature leaf and fruit drop.'
  ],

  cause:
    'Bacterial canker is caused by Xanthomonas species associated with mango bacterial disease. The pathogen can spread through infected planting material, rain splash, tools and wounds.',

  favorableConditions: [
    'Warm and humid weather.',
    'Frequent rainfall.',
    'High humidity.',
    'Rain splash between infected and healthy plant parts.',
    'Injuries caused by pruning or insects.',
    'Poor orchard sanitation.',
    'Use of infected planting material.'
  ],

  prevention: [
    'Use healthy disease-free planting material.',
    'Remove severely infected plant parts where practical.',
    'Disinfect pruning tools between infected and healthy trees.',
    'Avoid unnecessary injury to branches and fruits.',
    'Maintain good orchard sanitation.',
    'Improve canopy ventilation.',
    'Monitor new growth regularly.'
  ],

  solution: [
    'Prune and remove severely infected branches where practical.',
    'Disinfect pruning equipment after cutting diseased tissues.',
    'Remove infected plant debris from the orchard.',
    'Use locally recommended registered bactericidal or disease-management products when necessary.',
    'Seek agricultural extension advice when infection is severe.'
  ],

  management: [
    'Inspect leaves, shoots, branches and fruits regularly.',
    'Monitor disease after rainfall.',
    'Remove infected tissues promptly where practical.',
    'Maintain clean pruning practices.',
    'Avoid unnecessary mechanical injuries.',
    'Use integrated disease-management practices.'
  ]
},

{
  id: 'mango-malformation',
  name: 'Mango Malformation',
  crop: 'mango',
  category: 'Fungal Disease',

  diseaseInformation:
    'Mango malformation is a serious disorder that mainly affects vegetative shoots and flower panicles. It produces abnormal compact growth and malformed flowering structures, which can reduce flowering efficiency and fruit production.',

  symptoms: [
    'Vegetative shoots may become short and compact.',
    'Leaves on affected shoots may become small and crowded.',
    'Flower panicles may become excessively compact.',
    'Malformed panicles may have abnormal branching.',
    'Affected flowers may fail to develop into normal fruits.',
    'Vegetative malformation may produce broom-like growth.',
    'Severe infection can reduce fruit production.'
  ],

  cause:
    'Mango malformation is strongly associated with Fusarium species, particularly Fusarium mangiferae and related fungi. The disease may also be influenced by environmental and physiological factors.',

  favorableConditions: [
    'Cool weather during flower development.',
    'High humidity.',
    'Dense and poorly ventilated canopy.',
    'Excessive vegetative growth.',
    'Presence of infected shoots and panicles.',
    'Use of infected planting material.',
    'Susceptible mango varieties.'
  ],

  prevention: [
    'Use healthy and disease-free planting material.',
    'Remove malformed shoots and panicles early.',
    'Prune affected tissues well below the malformed portion.',
    'Maintain good orchard sanitation.',
    'Avoid excessive nitrogen application.',
    'Maintain balanced tree nutrition.',
    'Monitor flowering shoots regularly.'
  ],

  solution: [
    'Remove and destroy malformed shoots and flower panicles where practical.',
    'Prune affected branches during the recommended period.',
    'Maintain good orchard sanitation.',
    'Use locally recommended disease-management products when necessary.',
    'Seek expert agricultural advice for severe or recurring malformation.'
  ],

  management: [
    'Inspect vegetative shoots and flower panicles regularly.',
    'Remove malformed growth before further spread.',
    'Maintain proper canopy management.',
    'Avoid excessive vegetative growth.',
    'Use healthy planting material for new orchards.',
    'Follow integrated orchard-management practices.'
  ]
},

{
  id: 'mango-dieback',
  name: 'Dieback',
  crop: 'mango',
  category: 'Fungal Disease',

  diseaseInformation:
    'Dieback is a disease condition of mango in which twigs and branches progressively dry from the tips backward. It can weaken trees, reduce productive branches and cause decline when infection becomes severe.',

  symptoms: [
    'Young shoots may begin drying from the tip.',
    'Drying gradually progresses toward larger branches.',
    'Leaves on affected branches may wilt and dry.',
    'Bark may develop dark or discoloured areas.',
    'Small twigs may become brittle and die.',
    'Affected branches may show reduced new growth.',
    'Severe infection can result in extensive branch drying.'
  ],

  cause:
    'Mango dieback can be associated with fungal pathogens such as Lasiodiplodia and related branch-infecting fungi. Injuries, stress and poor orchard sanitation can increase disease development.',

  favorableConditions: [
    'High humidity.',
    'Rainy weather.',
    'Injuries to branches and bark.',
    'Drought or other tree stress.',
    'Poor pruning practices.',
    'Poor orchard sanitation.',
    'Weak or nutritionally stressed trees.'
  ],

  prevention: [
    'Maintain healthy and well-nourished trees.',
    'Avoid unnecessary injuries to branches.',
    'Use clean and properly disinfected pruning tools.',
    'Prune dead and diseased branches regularly.',
    'Maintain good orchard sanitation.',
    'Provide suitable irrigation during moisture stress.',
    'Avoid overcrowded canopy conditions.'
  ],

  solution: [
    'Prune affected branches below the diseased portion.',
    'Remove and destroy infected plant material.',
    'Disinfect pruning tools after removing diseased branches.',
    'Protect pruning wounds using locally recommended practices.',
    'Use registered disease-management products when locally recommended.'
  ],

  management: [
    'Inspect branches and shoots regularly.',
    'Identify drying branches at an early stage.',
    'Prune infected tissues promptly.',
    'Maintain proper irrigation and nutrition.',
    'Keep the orchard clean of dead plant material.',
    'Use integrated disease-management practices.'
  ]
},

{
  id: 'mango-red-rust',
  name: 'Red Rust',
  crop: 'mango',
  category: 'Algal Disease',

  diseaseInformation:
    'Red rust is an algal disease of mango that mainly affects leaves and young twigs. It produces reddish or rust-coloured patches and can reduce the health and appearance of foliage when infection becomes severe.',

  symptoms: [
    'Small orange, reddish or rust-coloured spots appear on leaves.',
    'Spots may become raised as the disease develops.',
    'Affected areas may develop a rough or velvety appearance.',
    'Numerous lesions may occur on older leaves.',
    'Young twigs may develop reddish or brownish patches.',
    'Severe infection can reduce healthy leaf area.',
    'Repeated infection may weaken affected branches.'
  ],

  cause:
    'Red rust is caused by the green alga Cephaleuros species, which can colonize mango leaves and young branches.',

  favorableConditions: [
    'High humidity.',
    'Frequent rainfall.',
    'Persistent moisture on leaves.',
    'Dense tree canopy.',
    'Poor air circulation.',
    'Shaded orchard conditions.',
    'Weak or poorly managed trees.'
  ],

  prevention: [
    'Maintain good orchard sanitation.',
    'Prune dense branches to improve sunlight and air circulation.',
    'Maintain balanced tree nutrition.',
    'Avoid excessive canopy humidity.',
    'Remove severely affected plant material where practical.',
    'Maintain proper orchard spacing.',
    'Monitor leaves and twigs regularly.'
  ],

  solution: [
    'Remove severely affected leaves or twigs where practical.',
    'Improve canopy ventilation through appropriate pruning.',
    'Maintain proper tree nutrition and irrigation.',
    'Use locally recommended registered products when disease pressure is significant.',
    'Seek agricultural extension advice for persistent infection.'
  ],

  management: [
    'Inspect leaves and young twigs regularly.',
    'Monitor disease during humid and rainy periods.',
    'Maintain an open and well-aerated canopy.',
    'Remove severely affected material where practical.',
    'Maintain overall tree health.',
    'Use integrated orchard-management practices.'
  ]
},

{
  id: 'mango-hopper',
  name: 'Mango Hopper',
  crop: 'mango',
  category: 'Insect Pest',

  diseaseInformation:
    'Mango hoppers are important sap-sucking insect pests that feed on tender shoots, leaves and especially flowering panicles. Heavy infestation can cause flower drying, poor fruit set and reduced mango yield.',

  symptoms: [
    'Small hoppers may be found on young shoots and flower panicles.',
    'Insects jump or move rapidly when disturbed.',
    'Flower panicles may dry and turn brown.',
    'Flowers may drop prematurely.',
    'Fruit set may be reduced.',
    'Honeydew deposits may develop on plant surfaces.',
    'Sooty mould may develop on honeydew-covered tissues.'
  ],

  cause:
    'Damage is caused by mango hopper species that suck plant sap from tender tissues and flower panicles.',

  favorableConditions: [
    'Warm and humid conditions.',
    'Dense tree canopy.',
    'Heavy flowering.',
    'Excessive vegetative growth.',
    'Poor canopy ventilation.',
    'Presence of alternate host plants.',
    'Reduced activity of natural enemies.'
  ],

  prevention: [
    'Monitor flower panicles regularly.',
    'Maintain proper orchard spacing and canopy management.',
    'Avoid excessive nitrogen application.',
    'Remove unnecessary dense vegetation around trees.',
    'Conserve natural enemies.',
    'Maintain orchard sanitation.',
    'Use integrated pest-management practices.'
  ],

  solution: [
    'Monitor hopper populations during flowering.',
    'Use locally recommended registered insecticides when infestation reaches damaging levels.',
    'Apply products according to label directions and recommended timing.',
    'Avoid unnecessary broad-spectrum insecticide use.',
    'Conserve beneficial insects that help suppress hopper populations.'
  ],

  management: [
    'Inspect flower panicles and young shoots regularly.',
    'Monitor hopper populations during flowering.',
    'Maintain good canopy ventilation.',
    'Avoid excessive nitrogen fertilization.',
    'Protect natural enemies.',
    'Use integrated pest-management practices.'
  ]
},

{
  id: 'mango-mealybug',
  name: 'Mealybug',
  crop: 'mango',
  category: 'Insect Pest',

  diseaseInformation:
    'Mango mealybugs are sap-sucking pests that can infest roots, shoots, leaves, flowers and developing fruits. Heavy infestation can weaken trees, reduce flowering and fruit set, and cause honeydew and sooty mould development.',

  symptoms: [
    'White cottony insects may occur on shoots and leaves.',
    'Mealybugs may cluster around flower panicles.',
    'Flowers and young fruits may become covered with insects.',
    'Honeydew deposits may appear on plant surfaces.',
    'Sooty mould may develop on honeydew-covered tissues.',
    'Affected shoots may become weak or distorted.',
    'Heavy infestation can reduce fruit development.'
  ],

  cause:
    'Damage is caused by mealybug species that suck sap from mango plant tissues. Some species may also have populations associated with the soil and roots.',

  favorableConditions: [
    'Warm weather.',
    'Dense vegetation.',
    'Poor orchard sanitation.',
    'Presence of weeds and alternate hosts.',
    'Reduced natural-enemy activity.',
    'Ant activity that protects honeydew-producing insects.',
    'Excessive vegetative growth.'
  ],

  prevention: [
    'Remove weeds and alternate host plants around trees.',
    'Monitor shoots and flower panicles regularly.',
    'Maintain good orchard sanitation.',
    'Conserve ladybird beetles and other natural enemies.',
    'Control excessive ant activity where appropriate.',
    'Avoid excessive nitrogen fertilization.',
    'Use healthy planting material.'
  ],

  solution: [
    'Remove heavily infested plant parts where practical.',
    'Use biological control where suitable.',
    'Use locally recommended registered insecticides when infestation is significant.',
    'Apply insecticides according to label directions.',
    'Manage ants where they interfere with natural biological control.'
  ],

  management: [
    'Inspect shoots, leaves and flower panicles regularly.',
    'Monitor mealybug populations.',
    'Remove weeds and alternate hosts.',
    'Conserve natural enemies.',
    'Maintain balanced crop nutrition.',
    'Use integrated pest-management practices.'
  ]
},
{
  id: 'groundnut-early-leaf-spot',
  name: 'Early Leaf Spot',
  crop: 'groundnut',
  category: 'Fungal Disease',

  diseaseInformation:
    'Early leaf spot is an important fungal disease of groundnut that mainly affects leaves and can cause premature defoliation. Severe infection reduces the healthy leaf area available for photosynthesis and may result in lower pod and seed yield.',

  symptoms: [
    'Small brown to dark spots appear on older leaves.',
    'Lesions may have a yellowish halo around them.',
    'Spots are commonly visible on the upper surface of leaves.',
    'Dark fungal structures may develop within lesions.',
    'Several lesions may merge and cause extensive leaf damage.',
    'Severely affected leaves may turn yellow and fall prematurely.',
    'Heavy infection can reduce plant vigour and pod development.'
  ],

  cause:
    'Early leaf spot is caused by the fungus Cercospora arachidicola, which infects susceptible groundnut foliage.',

  favorableConditions: [
    'Warm and humid weather.',
    'Frequent rainfall.',
    'High relative humidity.',
    'Prolonged leaf wetness.',
    'Dense crop canopy.',
    'Poor air circulation.',
    'Continuous groundnut cultivation and infected crop residues.'
  ],

  prevention: [
    'Use healthy and quality-tested seed.',
    'Prefer locally recommended disease-tolerant varieties where available.',
    'Maintain appropriate plant spacing.',
    'Follow suitable crop rotation practices.',
    'Remove or properly manage infected crop residues.',
    'Avoid excessive irrigation and prolonged leaf wetness.',
    'Maintain balanced crop nutrition.'
  ],

  solution: [
    'Remove severely affected plant material where practical.',
    'Maintain suitable crop spacing and field aeration.',
    'Use locally recommended registered fungicides when disease pressure is significant.',
    'Apply disease-management products according to label directions.',
    'Seek agricultural extension advice when severe defoliation occurs.'
  ],

  management: [
    'Inspect leaves regularly for early lesions.',
    'Monitor disease development during humid and rainy periods.',
    'Maintain proper plant spacing.',
    'Follow recommended crop rotation.',
    'Manage infected crop residues.',
    'Use integrated disease-management practices.'
  ]
},

{
  id: 'groundnut-late-leaf-spot',
  name: 'Late Leaf Spot',
  crop: 'groundnut',
  category: 'Fungal Disease',

  diseaseInformation:
    'Late leaf spot is a major fungal disease of groundnut that causes dark lesions on leaves and can lead to premature defoliation. Severe disease can reduce photosynthetic activity, affect pod filling and lower yield.',

  symptoms: [
    'Dark brown to nearly black spots develop on leaves.',
    'Lesions are often more numerous on the lower leaf surface.',
    'Affected leaves may develop multiple circular lesions.',
    'Leaves may yellow and dry as infection increases.',
    'Premature leaf fall may occur under severe disease pressure.',
    'The crop canopy may become thin due to defoliation.',
    'Severe infection can reduce pod and seed development.'
  ],

  cause:
    'Late leaf spot is caused by Nothopassalora personata, a fungal pathogen that infects groundnut foliage.',

  favorableConditions: [
    'Warm and humid weather.',
    'Frequent rainfall or dew.',
    'High relative humidity.',
    'Extended periods of leaf wetness.',
    'Dense crop growth.',
    'Poor field aeration.',
    'Continuous groundnut cultivation.'
  ],

  prevention: [
    'Use healthy quality-tested seed.',
    'Use locally recommended tolerant varieties where available.',
    'Maintain proper crop spacing.',
    'Follow crop rotation practices.',
    'Manage infected crop residues properly.',
    'Avoid unnecessary overhead irrigation.',
    'Monitor foliage regularly from early crop growth.'
  ],

  solution: [
    'Remove severely infected plant material where practical.',
    'Improve crop aeration by maintaining suitable spacing.',
    'Use locally recommended registered fungicides when necessary.',
    'Follow recommended fungicide timing and label directions.',
    'Seek agricultural extension advice when disease progresses rapidly.'
  ],

  management: [
    'Inspect lower and upper leaf surfaces regularly.',
    'Monitor disease during humid and rainy periods.',
    'Maintain appropriate crop density.',
    'Follow recommended crop rotation.',
    'Manage crop residues after harvest.',
    'Use integrated disease-management practices.'
  ]
},

{
  id: 'groundnut-rust',
  name: 'Rust',
  crop: 'groundnut',
  category: 'Fungal Disease',

  diseaseInformation:
    'Groundnut rust is a fungal disease that produces characteristic rust-coloured pustules on leaves. Severe infection can cause premature leaf drying and defoliation, reducing photosynthetic activity and crop yield.',

  symptoms: [
    'Small yellowish spots initially appear on leaves.',
    'Orange to reddish-brown rust pustules develop on leaves.',
    'Pustules may occur on the lower surface of leaves.',
    'Yellowing may develop around infected areas.',
    'Severely infected leaves may dry prematurely.',
    'Leaves may fall when infection becomes severe.',
    'Heavy disease pressure can reduce pod filling and yield.'
  ],

  cause:
    'Groundnut rust is caused by the rust fungus Puccinia arachidis.',

  favorableConditions: [
    'Warm temperatures.',
    'High relative humidity.',
    'Frequent rainfall or dew.',
    'Long periods of leaf wetness.',
    'Dense crop canopy.',
    'Poor air circulation.',
    'Cultivation of susceptible varieties.'
  ],

  prevention: [
    'Use healthy and quality-tested seed.',
    'Prefer locally recommended disease-tolerant varieties where available.',
    'Maintain appropriate plant spacing.',
    'Avoid excessive crop density.',
    'Follow suitable crop rotation practices.',
    'Remove heavily infected crop residues after harvest.',
    'Maintain balanced crop nutrition.'
  ],

  solution: [
    'Remove severely affected plant material where practical.',
    'Improve field aeration through suitable crop spacing.',
    'Use locally recommended registered fungicides when disease pressure is significant.',
    'Apply disease-management products according to label directions.',
    'Seek agricultural extension advice for severe infection.'
  ],

  management: [
    'Inspect leaves regularly for rust pustules.',
    'Monitor disease development during humid periods.',
    'Maintain suitable crop density.',
    'Manage infected crop residues.',
    'Maintain balanced nutrition.',
    'Use integrated disease-management practices.'
  ]
},

{
  id: 'groundnut-stem-rot',
  name: 'Stem Rot',
  crop: 'groundnut',
  category: 'Fungal Disease',

  diseaseInformation:
    'Stem rot is an important soil-borne fungal disease of groundnut that can cause rotting around the stem base and crown region. Severe infection can result in wilting, plant death and reduced plant population.',

  symptoms: [
    'White fungal growth may appear around the stem base or soil surface.',
    'The lower stem may develop brown or dark lesions.',
    'Affected plants may wilt suddenly.',
    'Leaves may become yellow before the plant collapses.',
    'The stem and crown tissues may become soft and rotten.',
    'Small fungal survival structures may develop near infected tissues.',
    'Severely affected plants may die before pod maturity.'
  ],

  cause:
    'Stem rot is commonly caused by the soil-borne fungus Sclerotium rolfsii, which survives in soil and infected plant residues.',

  favorableConditions: [
    'Warm soil conditions.',
    'High soil moisture.',
    'Poor field drainage.',
    'High organic debris near the soil surface.',
    'Dense crop growth.',
    'Injuries around the plant base.',
    'Continuous cultivation of susceptible crops.'
  ],

  prevention: [
    'Use healthy quality-tested seed.',
    'Follow suitable crop rotation practices.',
    'Maintain good field drainage.',
    'Avoid excessive irrigation.',
    'Remove severely infected plants and crop residues where practical.',
    'Avoid unnecessary injury to plant bases.',
    'Maintain balanced crop nutrition.'
  ],

  solution: [
    'Remove severely affected plants and infected debris where practical.',
    'Improve field drainage.',
    'Avoid excessive irrigation around the crop base.',
    'Use locally recommended biological or chemical disease-management practices.',
    'Apply registered products according to label directions and local recommendations.'
  ],

  management: [
    'Inspect the plant base regularly.',
    'Look for wilting and stem-base lesions.',
    'Remove severely infected plants promptly where practical.',
    'Maintain proper drainage.',
    'Follow crop rotation.',
    'Use integrated soil-borne disease-management practices.'
  ]
},

{
  id: 'groundnut-collar-rot',
  name: 'Collar Rot',
  crop: 'groundnut',
  category: 'Fungal Disease',

  diseaseInformation:
    'Collar rot is a soil-borne fungal disease that mainly affects young groundnut plants near the collar and stem base. Severe infection during early crop establishment can cause seedling death and poor plant population.',

  symptoms: [
    'Young seedlings may wilt and collapse.',
    'Brown to dark lesions develop near the collar region.',
    'The stem base may become soft and rotten.',
    'Leaves may turn yellow and dry.',
    'White fungal growth may occur around infected tissues under suitable conditions.',
    'Affected seedlings may die in patches.',
    'Poor plant establishment may occur when disease is severe.'
  ],

  cause:
    'Collar rot is commonly associated with Aspergillus niger and other soil-associated fungi that infect groundnut seedlings and collar tissues.',

  favorableConditions: [
    'Warm soil conditions.',
    'Excessive soil moisture.',
    'Poor soil drainage.',
    'Damaged or injured seedlings.',
    'Poor-quality seed.',
    'High soil-borne inoculum.',
    'Weak seedling establishment.'
  ],

  prevention: [
    'Use healthy and quality-tested seed.',
    'Follow recommended seed-treatment practices.',
    'Maintain good field drainage.',
    'Avoid excessive irrigation during establishment.',
    'Prepare the seedbed properly.',
    'Avoid mechanical injury to seedlings.',
    'Follow suitable crop rotation practices.'
  ],

  solution: [
    'Remove severely affected seedlings where practical.',
    'Improve drainage and avoid excessive soil moisture.',
    'Use locally recommended seed-treatment or soil-management practices.',
    'Use registered disease-management products when locally recommended.',
    'Seek extension advice if seedling mortality becomes severe.'
  ],

  management: [
    'Inspect seedlings regularly after emergence.',
    'Monitor for collar lesions and wilting.',
    'Remove severely affected plants where practical.',
    'Maintain suitable soil moisture.',
    'Ensure proper field drainage.',
    'Use integrated disease-management practices.'
  ]
},

{
  id: 'groundnut-bud-necrosis',
  name: 'Bud Necrosis',
  crop: 'groundnut',
  category: 'Viral Disease',

  diseaseInformation:
    'Bud necrosis is a virus-associated disease of groundnut that mainly affects young growing points and developing leaves. Severe infection can cause stunting, distorted growth and poor pod development.',

  symptoms: [
    'Young terminal buds may become necrotic.',
    'Young leaves may develop chlorotic or necrotic patches.',
    'Leaves may become distorted or curled.',
    'Plants may become severely stunted.',
    'Growing points may die back.',
    'Affected plants may produce excessive side shoots.',
    'Severe infection can reduce pod and seed production.'
  ],

  cause:
    'Bud necrosis is commonly associated with Groundnut bud necrosis virus and related orthotospoviruses. The disease is mainly spread by thrips.',

  favorableConditions: [
    'High thrips populations.',
    'Warm weather.',
    'Presence of infected host plants.',
    'Presence of weed hosts.',
    'Dense crop growth.',
    'Continuous cultivation of susceptible crops.',
    'Poor monitoring of vector populations.'
  ],

  prevention: [
    'Use healthy quality-tested seed.',
    'Remove weed hosts around the field.',
    'Monitor thrips populations regularly.',
    'Prefer locally recommended tolerant varieties where available.',
    'Maintain proper crop establishment.',
    'Remove severely affected plants where practical.',
    'Use integrated vector and disease management.'
  ],

  solution: [
    'Remove severely infected plants where practical.',
    'Manage thrips populations using locally recommended integrated pest-management practices.',
    'Control important weed hosts around the crop.',
    'Use locally recommended registered insecticides when vector populations are significant.',
    'Seek agricultural extension advice for severe disease incidence.'
  ],

  management: [
    'Inspect young leaves and growing points regularly.',
    'Monitor thrips populations.',
    'Remove severely affected plants where practical.',
    'Control weeds that can harbour the virus or vector.',
    'Maintain healthy crop growth.',
    'Use integrated virus and vector-management practices.'
  ]
},

{
  id: 'groundnut-root-knot-nematode',
  name: 'Root Knot Nematode',
  crop: 'groundnut',
  category: 'Nematode Problem',

  diseaseInformation:
    'Root knot nematodes are microscopic soil-dwelling pests that attack groundnut roots and interfere with water and nutrient uptake. Infested plants may become stunted and show uneven growth, while root galls can reduce effective root function and yield.',

  symptoms: [
    'Plants may show stunted or uneven growth.',
    'Leaves may become pale or yellow due to impaired nutrient uptake.',
    'Plants may wilt more readily during moisture stress.',
    'Roots may develop characteristic swollen galls.',
    'Root systems may become poorly developed.',
    'Pod development may be reduced in severely affected plants.',
    'Infested patches may occur unevenly across the field.'
  ],

  cause:
    'Root knot disease is caused by Meloidogyne species that feed on groundnut roots and induce characteristic root galls.',

  favorableConditions: [
    'Warm soil temperatures.',
    'Light or sandy soils.',
    'Continuous cultivation of susceptible crops.',
    'Presence of infected planting material or soil.',
    'Poor crop rotation.',
    'Presence of alternate host weeds.',
    'High nematode populations in soil.'
  ],

  prevention: [
    'Use healthy planting material and quality-tested seed.',
    'Follow suitable crop rotation practices.',
    'Control weeds that can host nematodes.',
    'Maintain good soil organic matter.',
    'Prefer locally recommended tolerant varieties where available.',
    'Avoid movement of infested soil between fields.',
    'Maintain good field sanitation.'
  ],

  solution: [
    'Remove heavily affected plants and manage crop residues appropriately.',
    'Follow recommended crop rotation with non-host crops.',
    'Use locally recommended biological nematode-management practices.',
    'Use registered nematode-management products only when recommended for the crop and situation.',
    'Seek soil-testing and agricultural extension advice for severe infestations.'
  ],

  management: [
    'Inspect roots when abnormal stunting occurs.',
    'Monitor uneven crop growth.',
    'Check roots for characteristic galls.',
    'Maintain suitable crop rotation.',
    'Control weed hosts.',
    'Improve soil health and organic matter.',
    'Use integrated nematode-management practices.'
  ]
},

{
  id: 'groundnut-aphid-thrips',
  name: 'Aphid / Thrips Complex',
  crop: 'groundnut',
  category: 'Insect Pest',

  diseaseInformation:
    'Aphids and thrips are important sap-sucking pests of groundnut. They feed on young leaves, shoots and other tender tissues, causing direct feeding damage and, in the case of some thrips species, contributing to the spread of virus diseases.',

  symptoms: [
    'Small insects may be found on young leaves and tender shoots.',
    'Young leaves may become curled or distorted.',
    'Leaves may show silvery or bronzed feeding damage from thrips.',
    'Aphid colonies may occur on tender plant parts.',
    'Honeydew deposits may appear where aphids are abundant.',
    'Sooty mould may develop on honeydew-covered surfaces.',
    'Severe infestation can reduce plant vigour and growth.'
  ],

  cause:
    'Damage is caused by aphids and thrips feeding on plant sap. Thrips can also act as vectors of certain virus diseases affecting groundnut.',

  favorableConditions: [
    'Warm and relatively dry weather.',
    'Presence of young tender crop growth.',
    'Dense vegetation.',
    'Presence of weed hosts.',
    'Excessive nitrogen application.',
    'Reduced natural-enemy activity.',
    'Continuous availability of suitable host plants.'
  ],

  prevention: [
    'Monitor young leaves and shoots regularly.',
    'Control important weed hosts around the crop.',
    'Avoid excessive nitrogen fertilization.',
    'Conserve ladybird beetles and other natural enemies.',
    'Maintain healthy and balanced crop nutrition.',
    'Use healthy quality-tested seed.',
    'Follow integrated pest-management practices.'
  ],

  solution: [
    'Monitor aphid and thrips populations before taking control measures.',
    'Conserve natural enemies wherever practical.',
    'Use locally recommended registered insecticides when pest populations reach damaging levels.',
    'Rotate insecticide modes of action where repeated treatment is required.',
    'Avoid unnecessary broad-spectrum insecticide applications.'
  ],

  management: [
    'Inspect young leaves and shoots regularly.',
    'Monitor pest populations using field observations or suitable traps.',
    'Control weeds around the crop.',
    'Protect beneficial insects.',
    'Maintain balanced crop nutrition.',
    'Monitor for associated virus symptoms.',
    'Use integrated pest-management practices.'
  ]
},
{
  id: 'oilseeds-damping-off',
  name: 'Damping Off',
  crop: 'oilseeds',
  category: 'Fungal Disease',

  diseaseInformation:
    'Damping off is a soil-borne disease that mainly affects oilseed seedlings during germination and early establishment. Severe infection can cause poor emergence, seedling collapse and gaps in the crop stand.',

  symptoms: [
    'Seeds may fail to germinate properly.',
    'Young seedlings may develop water-soaked lesions near the soil surface.',
    'The stem near the soil line may become thin and weak.',
    'Affected seedlings may bend and collapse.',
    'Roots may become brown or rotted.',
    'Seedlings may die in patches.',
    'Poor plant population may develop when infection is severe.'
  ],

  cause:
    'Damping off is caused by several soil-borne fungi and oomycetes, including Pythium, Rhizoctonia and related pathogens that attack germinating seeds and young seedlings.',

  favorableConditions: [
    'Excessive soil moisture.',
    'Poor field drainage.',
    'Heavy or compacted soil.',
    'Dense seedling growth.',
    'Poor air circulation near the soil surface.',
    'Use of infected or poor-quality seed.',
    'Continuous cultivation without proper field sanitation.'
  ],

  prevention: [
    'Use healthy and quality-tested seed.',
    'Follow locally recommended seed-treatment practices.',
    'Prepare a well-drained seedbed.',
    'Avoid excessive irrigation.',
    'Maintain appropriate seed spacing.',
    'Remove infected seedlings and crop debris where practical.',
    'Follow suitable crop rotation practices.'
  ],

  solution: [
    'Remove severely affected seedlings where practical.',
    'Improve field drainage.',
    'Avoid excessive irrigation.',
    'Use locally recommended biological or chemical seed and soil disease-management practices.',
    'Seek agricultural extension advice when seedling mortality becomes severe.'
  ],

  management: [
    'Inspect seedlings regularly after emergence.',
    'Monitor wet areas of the field carefully.',
    'Maintain suitable soil moisture.',
    'Ensure good field drainage.',
    'Remove severely affected seedlings where practical.',
    'Use integrated disease-management practices.'
  ]
},

{
  id: 'oilseeds-powdery-mildew',
  name: 'Powdery Mildew',
  crop: 'oilseeds',
  category: 'Fungal Disease',

  diseaseInformation:
    'Powdery mildew is a fungal disease that produces a characteristic white powdery growth on leaves and other tender plant parts of susceptible oilseed crops. Severe infection can reduce photosynthetic activity and plant vigour.',

  symptoms: [
    'White powdery patches appear on leaves.',
    'The powdery growth may spread across larger areas of the leaf surface.',
    'Affected leaves may become yellow.',
    'Leaves may curl or become distorted.',
    'Severely infected foliage may dry prematurely.',
    'Plant growth may become weak.',
    'Severe infection can reduce seed development and yield.'
  ],

  cause:
    'Powdery mildew is caused by species-specific powdery mildew fungi that grow on the surface of susceptible oilseed plant tissues.',

  favorableConditions: [
    'Moderate temperatures.',
    'High relative humidity.',
    'Cooler nights with humid conditions.',
    'Dense crop growth.',
    'Poor air circulation.',
    'Shaded conditions.',
    'Cultivation of susceptible varieties.'
  ],

  prevention: [
    'Use healthy planting material.',
    'Prefer locally recommended tolerant varieties where available.',
    'Maintain appropriate crop spacing.',
    'Avoid excessive nitrogen application.',
    'Improve field aeration.',
    'Remove severely infected plant material where practical.',
    'Monitor foliage regularly.'
  ],

  solution: [
    'Remove severely affected plant material where practical.',
    'Improve crop aeration through suitable spacing.',
    'Use locally recommended registered fungicides when disease pressure is significant.',
    'Follow product label directions and recommended application timing.',
    'Seek agricultural extension advice for severe disease.'
  ],

  management: [
    'Inspect leaves regularly.',
    'Monitor disease development during humid conditions.',
    'Maintain suitable crop density.',
    'Avoid excessive nitrogen fertilization.',
    'Remove heavily infected plant material where practical.',
    'Use integrated disease-management practices.'
  ]
},

{
  id: 'oilseeds-alternaria-leaf-spot',
  name: 'Alternaria Leaf Spot',
  crop: 'oilseeds',
  category: 'Fungal Disease',

  diseaseInformation:
    'Alternaria leaf spot is a fungal disease that causes characteristic dark lesions on leaves of susceptible oilseed crops. Severe infection can result in premature leaf drying and reduced photosynthetic activity.',

  symptoms: [
    'Small brown or dark spots appear on leaves.',
    'Lesions may gradually enlarge.',
    'Concentric rings may develop within larger lesions.',
    'Several spots may merge and form large necrotic areas.',
    'Leaves may turn yellow around severe lesions.',
    'Heavily infected leaves may dry and fall prematurely.',
    'Severe disease can reduce seed development and yield.'
  ],

  cause:
    'Alternaria leaf spot is caused by Alternaria species that infect susceptible oilseed crops, particularly under favourable humid conditions.',

  favorableConditions: [
    'Warm and humid weather.',
    'Frequent rainfall or dew.',
    'Prolonged leaf wetness.',
    'Dense crop canopy.',
    'Poor air circulation.',
    'Infected crop residues.',
    'Cultivation of susceptible varieties.'
  ],

  prevention: [
    'Use healthy and quality-tested seed.',
    'Follow suitable crop rotation.',
    'Remove or properly manage infected crop residues.',
    'Maintain appropriate plant spacing.',
    'Avoid excessive irrigation.',
    'Maintain balanced crop nutrition.',
    'Monitor leaves regularly for early symptoms.'
  ],

  solution: [
    'Remove severely infected plant material where practical.',
    'Manage infected crop residues.',
    'Improve field aeration.',
    'Use locally recommended registered fungicides when disease pressure is significant.',
    'Apply disease-management products according to label directions.'
  ],

  management: [
    'Inspect leaves regularly.',
    'Monitor disease after rainfall.',
    'Maintain suitable crop density.',
    'Follow recommended crop rotation.',
    'Manage infected residues after harvest.',
    'Use integrated disease-management practices.'
  ]
},

{
  id: 'oilseeds-rust',
  name: 'Rust',
  crop: 'oilseeds',
  category: 'Fungal Disease',

  diseaseInformation:
    'Rust diseases produce characteristic orange, brown or reddish pustules on leaves and other plant parts of susceptible oilseed crops. Severe infection can reduce healthy leaf area and cause premature drying of foliage.',

  symptoms: [
    'Small yellowish spots may appear on leaves.',
    'Orange, reddish or brown rust pustules develop on affected tissues.',
    'Pustules may occur on one or both leaf surfaces depending on the crop and pathogen.',
    'Yellowing may develop around infected areas.',
    'Severely infected leaves may dry prematurely.',
    'Plant vigour may decline under heavy infection.',
    'Seed production may be reduced when disease is severe.'
  ],

  cause:
    'Rust is caused by species-specific rust fungi that infect susceptible oilseed crops.',

  favorableConditions: [
    'Moderate to warm temperatures.',
    'High humidity.',
    'Frequent rainfall or dew.',
    'Extended periods of leaf wetness.',
    'Dense crop canopy.',
    'Poor air circulation.',
    'Cultivation of susceptible varieties.'
  ],

  prevention: [
    'Use healthy and quality-tested seed.',
    'Prefer locally recommended tolerant varieties where available.',
    'Maintain appropriate crop spacing.',
    'Avoid excessive crop density.',
    'Follow suitable crop rotation practices.',
    'Remove heavily infected plant material where practical.',
    'Maintain balanced crop nutrition.'
  ],

  solution: [
    'Remove severely affected plant material where practical.',
    'Improve crop aeration.',
    'Use locally recommended registered fungicides when disease pressure is significant.',
    'Follow recommended product timing and label directions.',
    'Seek agricultural extension advice for severe infection.'
  ],

  management: [
    'Inspect leaves regularly for rust pustules.',
    'Monitor disease during humid weather.',
    'Maintain suitable crop density.',
    'Remove heavily affected plant material where practical.',
    'Maintain balanced nutrition.',
    'Use integrated disease-management practices.'
  ]
},

{
  id: 'oilseeds-downy-mildew',
  name: 'Downy Mildew',
  crop: 'oilseeds',
  category: 'Fungal Disease',

  diseaseInformation:
    'Downy mildew is a disease that mainly affects leaves and young tissues of susceptible oilseed crops. It can cause yellowing, leaf lesions and reduced plant growth, particularly under humid conditions.',

  symptoms: [
    'Pale green or yellow patches appear on leaves.',
    'Yellowish areas may enlarge as infection progresses.',
    'White or greyish growth may develop on the underside of leaves under humid conditions.',
    'Leaves may become distorted.',
    'Affected foliage may dry prematurely.',
    'Young plants may become stunted.',
    'Severe infection can reduce crop vigour and yield.'
  ],

  cause:
    'Downy mildew is caused by oomycete pathogens whose species vary according to the affected oilseed crop.',

  favorableConditions: [
    'Cool to moderately warm humid weather.',
    'Frequent rainfall.',
    'High relative humidity.',
    'Prolonged leaf wetness.',
    'Dense crop growth.',
    'Poor field aeration.',
    'Use of infected seed or planting material.'
  ],

  prevention: [
    'Use healthy and quality-tested seed.',
    'Prefer locally recommended tolerant varieties where available.',
    'Maintain appropriate plant spacing.',
    'Avoid excessive irrigation.',
    'Improve field aeration.',
    'Maintain good field sanitation.',
    'Follow suitable crop rotation practices.'
  ],

  solution: [
    'Remove severely infected plants where practical.',
    'Improve drainage and avoid prolonged moisture.',
    'Use locally recommended seed-treatment practices.',
    'Use registered disease-management products when necessary and locally recommended.',
    'Seek agricultural extension advice for severe disease incidence.'
  ],

  management: [
    'Inspect young leaves regularly.',
    'Monitor disease during humid and rainy periods.',
    'Maintain suitable crop spacing.',
    'Avoid excessive irrigation.',
    'Remove severely affected plants where practical.',
    'Use integrated disease-management practices.'
  ]
},

{
  id: 'oilseeds-stem-rot',
  name: 'Stem Rot',
  crop: 'oilseeds',
  category: 'Fungal Disease',

  diseaseInformation:
    'Stem rot is a soil-borne disease that can affect the lower stem and root region of susceptible oilseed crops. Infection can interfere with water and nutrient movement and may cause wilting and plant death.',

  symptoms: [
    'Brown or dark lesions may develop near the stem base.',
    'The lower stem may become weak or rotten.',
    'White fungal growth may appear under humid conditions.',
    'Affected plants may wilt.',
    'Leaves may turn yellow before plant death.',
    'Roots may become damaged or rotten.',
    'Severely affected plants may die prematurely.'
  ],

  cause:
    'Stem rot may be caused by soil-borne fungal pathogens such as Sclerotium and related fungi, depending on the oilseed crop.',

  favorableConditions: [
    'Warm soil conditions.',
    'High soil moisture.',
    'Poor drainage.',
    'Dense crop growth.',
    'Plant injuries near the soil surface.',
    'High soil-borne pathogen levels.',
    'Continuous cultivation of susceptible crops.'
  ],

  prevention: [
    'Use healthy quality-tested seed.',
    'Follow suitable crop rotation.',
    'Maintain good field drainage.',
    'Avoid excessive irrigation.',
    'Remove infected crop residues.',
    'Avoid unnecessary injury to plant bases.',
    'Maintain balanced crop nutrition.'
  ],

  solution: [
    'Remove severely infected plants where practical.',
    'Improve field drainage.',
    'Avoid excessive soil moisture.',
    'Use locally recommended biological or chemical disease-management practices.',
    'Apply registered products only according to crop-specific recommendations.'
  ],

  management: [
    'Inspect the stem base and root region regularly.',
    'Monitor plants showing unexplained wilting.',
    'Remove severely infected plants where practical.',
    'Maintain suitable soil moisture.',
    'Follow crop rotation.',
    'Use integrated soil-borne disease-management practices.'
  ]
},

{
  id: 'oilseeds-whitefly',
  name: 'Whitefly',
  crop: 'oilseeds',
  category: 'Insect Pest',

  diseaseInformation:
    'Whiteflies are small sap-sucking insects that can infest leaves of susceptible oilseed crops. Heavy infestations weaken plants, produce honeydew and may contribute to the spread of certain plant viruses.',

  symptoms: [
    'Small white insects may fly from the underside of leaves when disturbed.',
    'Nymphs may occur on the lower surface of leaves.',
    'Leaves may become yellow or pale.',
    'Honeydew may accumulate on leaf surfaces.',
    'Sooty mould may develop on honeydew-covered leaves.',
    'Plants may show reduced vigour under heavy infestation.',
    'Virus-like symptoms may occur when vector-borne viruses are present.'
  ],

  cause:
    'Damage is caused by whiteflies feeding on plant sap. Some whitefly species can also transmit plant viruses between susceptible plants.',

  favorableConditions: [
    'Warm weather.',
    'Dry to moderately humid conditions.',
    'Dense crop growth.',
    'Excessive nitrogen application.',
    'Presence of weed and alternate host plants.',
    'Reduced natural-enemy activity.',
    'Continuous availability of suitable host plants.'
  ],

  prevention: [
    'Monitor the underside of leaves regularly.',
    'Remove important weed and alternate host plants.',
    'Avoid excessive nitrogen fertilization.',
    'Conserve parasitoids and predatory insects.',
    'Maintain balanced crop nutrition.',
    'Use healthy planting material.',
    'Follow integrated pest-management practices.'
  ],

  solution: [
    'Monitor whitefly populations before applying control measures.',
    'Conserve beneficial insects wherever practical.',
    'Use locally recommended registered insecticides when populations reach damaging levels.',
    'Rotate insecticide modes of action when repeated treatment is required.',
    'Avoid unnecessary broad-spectrum insecticide applications.'
  ],

  management: [
    'Inspect the underside of leaves regularly.',
    'Monitor adult and immature whiteflies.',
    'Control important weed hosts.',
    'Protect natural enemies.',
    'Maintain balanced crop nutrition.',
    'Monitor for associated virus symptoms.',
    'Use integrated pest-management practices.'
  ]
},

{
  id: 'oilseeds-aphid',
  name: 'Aphid',
  crop: 'oilseeds',
  category: 'Insect Pest',

  diseaseInformation:
    'Aphids are small sap-sucking insects that can colonize young shoots, leaves and reproductive tissues of susceptible oilseed crops. Heavy infestation can weaken plants, distort growth and reduce seed production.',

  symptoms: [
    'Clusters of small aphids occur on young shoots and leaves.',
    'Leaves may become curled or distorted.',
    'Young shoots may show reduced growth.',
    'Honeydew deposits may appear on plant surfaces.',
    'Sooty mould may develop on honeydew-covered tissues.',
    'Severely infested plants may become weak.',
    'Seed development may be reduced under heavy infestation.'
  ],

  cause:
    'Damage is caused by aphids feeding on plant sap. Certain aphid species may also transmit plant viruses.',

  favorableConditions: [
    'Moderate temperatures.',
    'Dense crop growth.',
    'Excessive nitrogen application.',
    'Presence of alternate host plants.',
    'Presence of weeds.',
    'Reduced natural-enemy activity.',
    'Continuous availability of tender plant growth.'
  ],

  prevention: [
    'Monitor young shoots and leaves regularly.',
    'Avoid excessive nitrogen application.',
    'Remove important weed hosts.',
    'Conserve ladybird beetles and other natural enemies.',
    'Maintain balanced crop nutrition.',
    'Use healthy planting material.',
    'Follow integrated pest-management practices.'
  ],

  solution: [
    'Monitor aphid populations before taking control measures.',
    'Conserve beneficial insects wherever practical.',
    'Use locally recommended registered insecticides when infestation reaches damaging levels.',
    'Rotate insecticide modes of action when repeated treatment is required.',
    'Avoid unnecessary broad-spectrum insecticide applications.'
  ],

  management: [
    'Inspect young leaves and shoots regularly.',
    'Monitor aphid populations.',
    'Control important weed hosts.',
    'Protect natural enemies.',
    'Maintain balanced nutrition.',
    'Monitor for possible virus symptoms.',
    'Use integrated pest-management practices.'
  ]
},
{
  id: 'tapioca-cassava-mosaic-disease',
  name: 'Cassava Mosaic Disease',
  crop: 'tapioca',
  category: 'Viral Disease',

  diseaseInformation:
    'Cassava mosaic disease is an important viral disease of tapioca that mainly affects leaves and young shoots. Infection can reduce leaf area, plant vigour and root yield, particularly when susceptible planting material is used and disease pressure is high.',

  symptoms: [
    'Leaves show irregular light green and dark green mosaic patterns.',
    'Young leaves may become distorted or reduced in size.',
    'Leaves may develop yellowish patches.',
    'Severe infection can cause leaf curling.',
    'Affected plants may become stunted.',
    'Shoot growth may be reduced.',
    'Severe infection can reduce storage root development and yield.'
  ],

  cause:
    'Cassava mosaic disease is caused by cassava mosaic begomoviruses. The disease can spread through infected stem cuttings and through whitefly vectors.',

  favorableConditions: [
    'Use of infected planting material.',
    'High whitefly populations.',
    'Presence of infected cassava plants.',
    'Presence of alternate host plants and weeds.',
    'Continuous cultivation of susceptible varieties.',
    'Poor field sanitation.',
    'Movement of infected planting material between fields.'
  ],

  prevention: [
    'Use healthy and disease-free stem cuttings.',
    'Prefer locally recommended tolerant or resistant varieties where available.',
    'Remove severely infected plants from the field where practical.',
    'Control important weed and alternate host plants.',
    'Monitor whitefly populations regularly.',
    'Avoid planting cuttings obtained from visibly diseased plants.',
    'Maintain good field sanitation.'
  ],

  solution: [
    'Remove severely infected plants where practical.',
    'Replace infected plants with healthy planting material.',
    'Manage whitefly populations using locally recommended integrated pest-management practices.',
    'Use disease-free stem cuttings for new planting.',
    'Seek agricultural extension advice when disease incidence is high.'
  ],

  management: [
    'Inspect young leaves regularly for mosaic symptoms.',
    'Remove severely affected plants where practical.',
    'Use healthy planting material for gap filling.',
    'Monitor whitefly populations.',
    'Control important weed hosts.',
    'Avoid movement of infected cuttings between fields.',
    'Use integrated virus and vector-management practices.'
  ]
},

{
  id: 'tapioca-cassava-bacterial-blight',
  name: 'Cassava Bacterial Blight',
  crop: 'tapioca',
  category: 'Bacterial Disease',

  diseaseInformation:
    'Cassava bacterial blight is a bacterial disease that can affect leaves, petioles and stems of tapioca plants. Severe infection may cause leaf blighting, shoot dieback and reduced plant growth and root yield.',

  symptoms: [
    'Water-soaked or angular leaf spots may appear.',
    'Leaf lesions may become brown or necrotic.',
    'Leaves may wilt and dry under severe infection.',
    'Petioles may develop dark or water-soaked lesions.',
    'Young shoots may show dieback.',
    'Bacterial exudates may occur from infected tissues under favourable conditions.',
    'Severe infection can reduce plant vigour and root development.'
  ],

  cause:
    'Cassava bacterial blight is caused by Xanthomonas species that infect cassava tissues. The bacteria can spread through infected planting material, rain splash, contaminated tools and wounds.',

  favorableConditions: [
    'Warm and humid weather.',
    'Frequent rainfall.',
    'High relative humidity.',
    'Rain splash between plants.',
    'Infected planting material.',
    'Mechanical injuries to plants.',
    'Poor field sanitation.'
  ],

  prevention: [
    'Use healthy and disease-free stem cuttings.',
    'Remove severely infected plant material where practical.',
    'Maintain good field sanitation.',
    'Avoid unnecessary injury to stems and shoots.',
    'Disinfect cutting and pruning tools.',
    'Maintain appropriate plant spacing.',
    'Prefer locally recommended tolerant varieties where available.'
  ],

  solution: [
    'Remove severely infected plants or shoots where practical.',
    'Use healthy planting material for replacement.',
    'Disinfect tools used for cutting infected plants.',
    'Improve field sanitation and remove infected debris.',
    'Use locally recommended registered disease-management products when necessary.'
  ],

  management: [
    'Inspect leaves, petioles and stems regularly.',
    'Monitor disease after rainfall.',
    'Remove infected plant material promptly where practical.',
    'Maintain clean planting practices.',
    'Avoid unnecessary mechanical injuries.',
    'Use healthy stem cuttings.',
    'Follow integrated disease-management practices.'
  ]
},

{
  id: 'tapioca-tuber-rot',
  name: 'Tuber Rot',
  crop: 'tapioca',
  category: 'Fungal Disease',

  diseaseInformation:
    'Tuber rot is a storage-root disease of tapioca that can develop in the field or after harvest. Infection causes deterioration of storage roots and can result in poor quality, reduced market value and post-harvest losses.',

  symptoms: [
    'Storage roots may develop brown or dark rotting areas.',
    'Affected root tissues become soft or discoloured.',
    'Rot may progress from injured portions of the root.',
    'Fungal growth may appear on severely affected roots.',
    'Internal tissues may become discoloured.',
    'Affected roots may develop an unpleasant odour during advanced decay.',
    'Severe infection can cause significant root weight and quality loss.'
  ],

  cause:
    'Tuber rot can be caused by several soil-borne and storage-associated fungi, with infection often entering through wounds, damaged roots or poorly drained soil.',

  favorableConditions: [
    'Poor soil drainage.',
    'Excessive soil moisture.',
    'Waterlogging.',
    'Root injuries during cultivation or harvesting.',
    'High soil-borne pathogen levels.',
    'Improper storage conditions.',
    'Poor post-harvest handling.'
  ],

  prevention: [
    'Plant healthy and disease-free stem cuttings.',
    'Select well-drained fields.',
    'Avoid prolonged waterlogging.',
    'Prevent unnecessary damage to storage roots.',
    'Harvest carefully to reduce injuries.',
    'Remove damaged roots before storage.',
    'Maintain clean and well-ventilated storage conditions.'
  ],

  solution: [
    'Remove severely rotted roots from healthy produce.',
    'Improve field drainage where soil moisture is excessive.',
    'Avoid storing damaged or infected roots with healthy produce.',
    'Handle harvested roots carefully.',
    'Use locally recommended disease-management practices when field infection is significant.',
    'Follow suitable post-harvest sanitation practices.'
  ],

  management: [
    'Inspect plants and storage roots regularly.',
    'Monitor poorly drained portions of the field.',
    'Remove severely affected roots where practical.',
    'Avoid root injury during harvesting.',
    'Sort roots before storage or marketing.',
    'Maintain suitable storage conditions.',
    'Use integrated field and post-harvest disease management.'
  ]
},

{
  id: 'tapioca-root-knot-nematode',
  name: 'Root Knot Nematode',
  crop: 'tapioca',
  category: 'Nematode Problem',

  diseaseInformation:
    'Root knot nematodes are microscopic soil-dwelling pests that attack tapioca roots and interfere with normal root development and nutrient uptake. Heavy infestation can reduce storage-root development and plant vigour.',

  symptoms: [
    'Plants may show uneven or stunted growth.',
    'Leaves may become pale or yellow.',
    'Plants may wilt more readily during dry conditions.',
    'Roots may develop swollen galls.',
    'Root systems may become poorly developed.',
    'Storage-root development may be reduced.',
    'Infested areas may occur in patches within the field.'
  ],

  cause:
    'Root knot disease is caused by Meloidogyne species that enter and feed within tapioca roots, producing characteristic root galls.',

  favorableConditions: [
    'Warm soil temperatures.',
    'Light or sandy soils.',
    'Continuous cultivation of susceptible crops.',
    'High nematode populations in soil.',
    'Poor crop rotation.',
    'Presence of alternate host weeds.',
    'Movement of infested soil or planting material.'
  ],

  prevention: [
    'Use healthy and pest-free planting material.',
    'Follow suitable crop rotation practices.',
    'Control weeds that can host nematodes.',
    'Maintain good soil organic matter.',
    'Prefer locally recommended tolerant varieties where available.',
    'Avoid movement of infested soil between fields.',
    'Maintain good field sanitation.'
  ],

  solution: [
    'Remove severely affected plants where practical.',
    'Follow recommended crop rotation with suitable non-host crops.',
    'Use locally recommended biological nematode-management practices.',
    'Use registered nematode-management products only when recommended for tapioca.',
    'Seek soil-testing and agricultural extension advice for severe infestations.'
  ],

  management: [
    'Inspect plants showing unusual stunting.',
    'Check roots for characteristic galls.',
    'Monitor uneven crop growth.',
    'Control weed hosts.',
    'Maintain suitable crop rotation.',
    'Improve soil health and organic matter.',
    'Use integrated nematode-management practices.'
  ]
},

{
  id: 'tapioca-mealybug',
  name: 'Mealybug',
  crop: 'tapioca',
  category: 'Insect Pest',

  diseaseInformation:
    'Mealybugs are small sap-sucking insects that infest tender shoots and leaves of tapioca. Heavy infestation can weaken plants, cause leaf distortion and reduce normal plant growth.',

  symptoms: [
    'White cottony insects occur on shoots and leaves.',
    'Mealybugs may cluster around tender growing points.',
    'Leaves may become curled or distorted.',
    'Young shoots may show reduced growth.',
    'Honeydew deposits may appear on plant surfaces.',
    'Sooty mould may develop on honeydew-covered tissues.',
    'Severe infestation can reduce plant vigour.'
  ],

  cause:
    'Damage is caused by mealybug species that feed on plant sap. Populations can increase rapidly when natural enemies are insufficient.',

  favorableConditions: [
    'Warm weather.',
    'Dense crop growth.',
    'Excessive nitrogen application.',
    'Presence of weeds and alternate host plants.',
    'Reduced natural-enemy activity.',
    'Ant activity that protects honeydew-producing insects.',
    'Poor field sanitation.'
  ],

  prevention: [
    'Monitor tender shoots regularly.',
    'Remove important weed and alternate host plants.',
    'Avoid excessive nitrogen fertilization.',
    'Conserve ladybird beetles and other natural enemies.',
    'Control ant activity where appropriate.',
    'Maintain good field sanitation.',
    'Use healthy planting material.'
  ],

  solution: [
    'Remove heavily infested plant parts where practical.',
    'Use biological control where suitable.',
    'Use locally recommended registered insecticides when infestation becomes significant.',
    'Apply insecticides according to label directions.',
    'Manage ants where they interfere with natural biological control.'
  ],

  management: [
    'Inspect shoots and leaves regularly.',
    'Monitor mealybug populations.',
    'Remove weed hosts.',
    'Protect natural enemies.',
    'Maintain balanced crop nutrition.',
    'Manage ant populations where necessary.',
    'Use integrated pest-management practices.'
  ]
},

{
  id: 'tapioca-mites',
  name: 'Mites',
  crop: 'tapioca',
  category: 'Insect Pest',

  diseaseInformation:
    'Mites are very small sap-feeding pests that can attack tapioca leaves, particularly under hot and dry conditions. Heavy infestation can cause leaf bronzing, yellowing, distortion and premature leaf drop.',

  symptoms: [
    'Fine yellowish speckling may appear on leaves.',
    'Leaves may develop a bronzed or dusty appearance.',
    'Leaf surfaces may become dull or discoloured.',
    'Young leaves may become distorted.',
    'Fine webbing may sometimes be visible under heavy infestation.',
    'Severely affected leaves may dry prematurely.',
    'Heavy infestation can reduce plant vigour and storage-root development.'
  ],

  cause:
    'Damage is caused by phytophagous mites that feed on plant cells and leaf tissues. Several mite species can infest cassava under favourable conditions.',

  favorableConditions: [
    'Hot weather.',
    'Dry conditions.',
    'Low relative humidity.',
    'Water stress.',
    'Dusty field conditions.',
    'Reduced natural-enemy activity.',
    'Heavy pest pressure on tender foliage.'
  ],

  prevention: [
    'Maintain adequate irrigation during prolonged dry periods.',
    'Monitor leaves regularly for early mite symptoms.',
    'Avoid unnecessary broad-spectrum insecticide use.',
    'Conserve predatory mites and other natural enemies.',
    'Maintain healthy crop growth.',
    'Control severe water stress.',
    'Remove severely damaged plant material where practical.'
  ],

  solution: [
    'Reduce plant water stress through suitable irrigation.',
    'Use locally recommended registered miticides when infestation becomes economically significant.',
    'Follow product label directions carefully.',
    'Conserve natural enemies.',
    'Avoid repeated unnecessary pesticide applications.'
  ],

  management: [
    'Inspect young and mature leaves regularly.',
    'Monitor mite symptoms during hot and dry weather.',
    'Maintain adequate soil moisture.',
    'Protect natural enemies.',
    'Avoid unnecessary pesticide use.',
    'Remove severely damaged foliage where practical.',
    'Use integrated pest-management practices.'
  ]
},

{
  id: 'tapioca-whitefly',
  name: 'Whitefly',
  crop: 'tapioca',
  category: 'Insect Pest',

  diseaseInformation:
    'Whiteflies are small sap-sucking insects that can infest tapioca leaves and shoots. Heavy infestation can weaken plants, produce honeydew and sooty mould, and some whitefly species can contribute to the spread of plant viruses.',

  symptoms: [
    'Small white insects fly from the underside of leaves when disturbed.',
    'Nymphs may occur on the lower leaf surface.',
    'Leaves may become pale or yellow.',
    'Honeydew may accumulate on leaves.',
    'Sooty mould may develop on honeydew-covered surfaces.',
    'Plants may show reduced vigour under heavy infestation.',
    'Virus-like symptoms may occur when virus vectors are involved.'
  ],

  cause:
    'Damage is caused by whiteflies feeding on plant sap. Certain whitefly species can also act as vectors of plant viruses.',

  favorableConditions: [
    'Warm weather.',
    'Dry to moderately humid conditions.',
    'Dense crop growth.',
    'Excessive nitrogen fertilization.',
    'Presence of weeds and alternate host plants.',
    'Reduced natural-enemy activity.',
    'Continuous availability of tender plant growth.'
  ],

  prevention: [
    'Inspect the underside of leaves regularly.',
    'Remove important weed and alternate host plants.',
    'Avoid excessive nitrogen application.',
    'Conserve parasitoids and predatory insects.',
    'Maintain balanced crop nutrition.',
    'Use healthy planting material.',
    'Follow integrated pest-management practices.'
  ],

  solution: [
    'Monitor whitefly populations before applying control measures.',
    'Conserve beneficial insects wherever practical.',
    'Use locally recommended registered insecticides when pest populations reach damaging levels.',
    'Rotate insecticide modes of action when repeated treatment is required.',
    'Avoid unnecessary broad-spectrum insecticide applications.'
  ],

  management: [
    'Inspect leaf undersides regularly.',
    'Monitor adult and immature whiteflies.',
    'Control important weed hosts.',
    'Protect natural enemies.',
    'Maintain balanced crop nutrition.',
    'Monitor for associated virus symptoms.',
    'Use integrated pest-management practices.'
  ]
},

{
  id: 'tapioca-termites',
  name: 'Termites',
  crop: 'tapioca',
  category: 'Insect Pest',

  diseaseInformation:
    'Termites are soil-associated insect pests that can damage tapioca planting material, roots and underground plant tissues. Heavy infestation can interfere with establishment, root development and plant survival, particularly under dry conditions.',

  symptoms: [
    'Termites may damage planted stem cuttings.',
    'Underground portions of stems may be hollowed or eaten.',
    'Plants may wilt or show poor establishment.',
    'Roots may show feeding damage.',
    'Damaged plants may dry prematurely.',
    'Affected plants may occur in patches.',
    'Severe infestation can reduce plant population and storage-root yield.'
  ],

  cause:
    'Damage is caused by termite species that feed on underground plant tissues and organic material in the soil.',

  favorableConditions: [
    'Dry soil conditions.',
    'Prolonged drought.',
    'Low soil moisture.',
    'Presence of undecomposed plant residues.',
    'Sandy or light soils.',
    'Poor field sanitation.',
    'High termite populations in the field.'
  ],

  prevention: [
    'Use healthy and vigorous stem cuttings.',
    'Maintain suitable soil moisture during establishment.',
    'Remove excessive dry plant residues from the field.',
    'Maintain good field sanitation.',
    'Avoid planting in heavily infested locations where practical.',
    'Follow suitable crop rotation and soil-management practices.',
    'Monitor newly planted fields regularly.'
  ],

  solution: [
    'Identify and remove severely damaged planting material where practical.',
    'Maintain adequate soil moisture during crop establishment.',
    'Use locally recommended termite-management practices.',
    'Use registered insecticides or soil treatments only when recommended for tapioca and the specific situation.',
    'Seek agricultural extension advice for severe termite infestation.'
  ],

  management: [
    'Inspect newly planted cuttings regularly.',
    'Check soil and plant bases for termite activity.',
    'Monitor dry portions of the field carefully.',
    'Maintain suitable soil moisture.',
    'Remove heavily damaged plant material where practical.',
    'Maintain field sanitation.',
    'Use integrated pest-management practices.'
  ]
},
// =========================================================
// RAGI / FINGER MILLET
// =========================================================

{
  id: 'ragi-blast',
  name: 'Blast',
  crop: 'ragi',
  category: 'Fungal Disease',

  diseaseInformation:
    'Blast is one of the most important fungal diseases of ragi. It can affect leaves, necks and finger heads, causing lesions, drying and poor grain development. Severe neck blast can cause significant yield loss.',

  symptoms: [
    'Small brown to greyish spots appear on leaves.',
    'Lesions may enlarge and develop spindle-shaped or elliptical forms.',
    'Leaf tissues around lesions may turn yellow or dry.',
    'Neck portions below the finger heads may develop dark lesions.',
    'Infected necks may weaken and break.',
    'Finger heads may dry prematurely.',
    'Severely affected plants may produce poorly filled grains.'
  ],

  cause:
    'Blast is caused by the fungus Magnaporthe grisea, also known as Magnaporthe oryzae in modern classification.',

  favorableConditions: [
    'High relative humidity.',
    'Frequent rainfall or prolonged leaf wetness.',
    'Moderate temperatures.',
    'Dense crop growth.',
    'Excessive nitrogen application.',
    'Poor field aeration.',
    'Continuous cultivation of susceptible varieties.'
  ],

  prevention: [
    'Use healthy and quality-tested seed.',
    'Prefer locally recommended blast-tolerant varieties where available.',
    'Avoid excessive nitrogen fertilization.',
    'Maintain appropriate plant spacing.',
    'Avoid excessive crop density.',
    'Maintain balanced crop nutrition.',
    'Remove heavily infected crop residues where practical.'
  ],

  solution: [
    'Monitor leaves and finger heads regularly.',
    'Remove severely affected plant material where practical.',
    'Use locally recommended registered fungicides when disease severity warrants treatment.',
    'Follow recommended application timing and label directions.',
    'Avoid repeated use of the same fungicide mode of action.'
  ],

  management: [
    'Inspect fields regularly, especially during humid weather.',
    'Monitor leaf and neck symptoms.',
    'Maintain balanced fertilizer application.',
    'Avoid excessive nitrogen.',
    'Use resistant or tolerant varieties where available.',
    'Apply recommended fungicide management when necessary.',
    'Follow integrated disease-management practices.'
  ]
},

{
  id: 'ragi-foot-rot',
  name: 'Foot Rot',
  crop: 'ragi',
  category: 'Fungal Disease',

  diseaseInformation:
    'Foot rot is a soil-associated fungal disease that affects the lower portions of ragi plants. Infection can cause basal stem damage, weakening, yellowing and eventual drying of affected plants.',

  symptoms: [
    'Plants may show yellowing of lower leaves.',
    'The basal portion of the stem may develop brown or dark lesions.',
    'Roots may become weakened or damaged.',
    'Affected plants may show poor growth.',
    'Plants may wilt under severe infection.',
    'Infected plants may lodge easily.',
    'Severely affected plants may dry prematurely.'
  ],

  cause:
    'Foot rot is associated with soil-borne fungal pathogens that infect roots and the basal portion of the stem, particularly when plants are stressed or soil conditions favour pathogen development.',

  favorableConditions: [
    'Poor soil drainage.',
    'Excessive soil moisture.',
    'Waterlogging.',
    'Continuous cultivation of susceptible crops.',
    'High soil-borne pathogen populations.',
    'Root injury.',
    'Poor field sanitation.'
  ],

  prevention: [
    'Use healthy planting material and quality seed.',
    'Select well-drained fields.',
    'Avoid prolonged waterlogging.',
    'Maintain proper crop spacing.',
    'Follow suitable crop rotation.',
    'Remove severely affected plants where practical.',
    'Maintain good field sanitation.'
  ],

  solution: [
    'Remove severely affected plants where practical.',
    'Improve drainage in affected areas.',
    'Avoid excessive irrigation.',
    'Use locally recommended biological disease-management practices.',
    'Use registered fungicides or seed treatments only when recommended for the crop and disease.'
  ],

  management: [
    'Inspect the plant base regularly.',
    'Monitor poorly drained field areas.',
    'Remove severely affected plants.',
    'Maintain proper drainage.',
    'Avoid excessive irrigation.',
    'Follow suitable crop rotation.',
    'Use integrated soil-borne disease management.'
  ]
},

{
  id: 'ragi-leaf-blight',
  name: 'Leaf Blight',
  crop: 'ragi',
  category: 'Fungal Disease',

  diseaseInformation:
    'Leaf blight causes damaging lesions on ragi foliage and can reduce the effective leaf area available for photosynthesis. Severe infection may result in premature drying of leaves and reduced grain production.',

  symptoms: [
    'Brown or reddish-brown spots appear on leaves.',
    'Spots may enlarge and merge together.',
    'Large portions of leaves may become necrotic.',
    'Leaves may gradually dry from infected areas.',
    'Severely infected leaves may dry prematurely.',
    'Plant vigour may decline.',
    'Heavy infection can reduce grain development.'
  ],

  cause:
    'Leaf blight is caused by fungal pathogens that infect ragi foliage under favourable environmental conditions.',

  favorableConditions: [
    'Warm and humid weather.',
    'Frequent rainfall.',
    'Long periods of leaf wetness.',
    'Dense crop canopy.',
    'Poor field aeration.',
    'Infected crop residues.',
    'Excessive nitrogen application.'
  ],

  prevention: [
    'Use healthy seed.',
    'Maintain appropriate plant spacing.',
    'Avoid excessive nitrogen fertilization.',
    'Remove infected crop residues where practical.',
    'Maintain balanced crop nutrition.',
    'Avoid unnecessary overhead irrigation.',
    'Prefer locally recommended tolerant varieties where available.'
  ],

  solution: [
    'Remove severely infected leaves where practical.',
    'Improve crop aeration.',
    'Use locally recommended registered fungicides when disease severity is significant.',
    'Follow label instructions and recommended application intervals.',
    'Rotate fungicide modes of action when repeated treatment is required.'
  ],

  management: [
    'Inspect leaves regularly.',
    'Monitor disease after rainfall.',
    'Maintain suitable plant spacing.',
    'Avoid excessive nitrogen.',
    'Remove heavily infected debris.',
    'Use recommended fungicide treatment when necessary.',
    'Follow integrated disease management.'
  ]
},

{
  id: 'ragi-downy-mildew',
  name: 'Downy Mildew',
  crop: 'ragi',
  category: 'Fungal Disease',

  diseaseInformation:
    'Downy mildew affects ragi leaves and young plant growth. Infection can cause abnormal leaf development, yellowing and reduced plant vigour. Severe infection may interfere with normal crop establishment and development.',

  symptoms: [
    'Leaves may develop pale green or yellow areas.',
    'White to greyish fungal growth may appear under humid conditions.',
    'Leaves may become narrow or distorted.',
    'Young plants may show stunted growth.',
    'Affected foliage may dry prematurely.',
    'Severely affected plants may have poor tillering.',
    'Heavy infection can reduce crop vigour.'
  ],

  cause:
    'Downy mildew is caused by an oomycete pathogen that develops on ragi foliage under moist and humid conditions.',

  favorableConditions: [
    'High humidity.',
    'Frequent rainfall.',
    'Prolonged leaf wetness.',
    'Dense crop canopy.',
    'Poor air circulation.',
    'Excessive irrigation.',
    'Infected crop residues.'
  ],

  prevention: [
    'Use healthy seed.',
    'Maintain suitable crop spacing.',
    'Avoid excessive irrigation.',
    'Ensure proper field drainage.',
    'Remove severely infected crop material.',
    'Use locally recommended tolerant varieties where available.',
    'Maintain balanced crop nutrition.'
  ],

  solution: [
    'Remove severely infected plants where practical.',
    'Improve field aeration and drainage.',
    'Avoid prolonged leaf wetness.',
    'Use locally recommended registered fungicides or oomycete-management products when necessary.',
    'Follow label directions carefully.'
  ],

  management: [
    'Monitor young plants regularly.',
    'Inspect leaves during humid weather.',
    'Maintain proper drainage.',
    'Avoid excessive irrigation.',
    'Remove severely infected plants.',
    'Use recommended disease-management products when necessary.',
    'Follow integrated disease-management practices.'
  ]
},

{
  id: 'ragi-seedling-blight',
  name: 'Seedling Blight',
  crop: 'ragi',
  category: 'Fungal Disease',

  diseaseInformation:
    'Seedling blight affects young ragi seedlings and can result in poor crop establishment. Infection may cause seed decay, root damage, basal stem lesions and death of young seedlings.',

  symptoms: [
    'Seeds may fail to germinate properly.',
    'Young seedlings may develop brown lesions.',
    'Roots may become discoloured or damaged.',
    'Seedlings may show poor growth.',
    'The basal stem may become weak.',
    'Affected seedlings may wilt and collapse.',
    'Missing patches may appear in the field.'
  ],

  cause:
    'Seedling blight is caused by soil- and seed-borne fungal pathogens that attack germinating seeds and young seedlings.',

  favorableConditions: [
    'Excessive soil moisture.',
    'Poor drainage.',
    'Heavy or compacted soil.',
    'Use of infected seed.',
    'High soil-borne pathogen populations.',
    'Dense seedling growth.',
    'Poor nursery or field sanitation.'
  ],

  prevention: [
    'Use quality-tested seed.',
    'Use recommended seed treatment practices.',
    'Avoid excessive irrigation.',
    'Provide adequate drainage.',
    'Prepare a well-drained seedbed.',
    'Avoid excessive seed rate.',
    'Maintain clean nursery and field conditions.'
  ],

  solution: [
    'Remove severely affected seedlings where practical.',
    'Improve drainage.',
    'Avoid over-irrigation.',
    'Use recommended biological or chemical seed treatments for subsequent planting.',
    'Follow locally recommended disease-management practices.'
  ],

  management: [
    'Inspect seedlings after emergence.',
    'Monitor areas with poor drainage.',
    'Maintain proper soil moisture.',
    'Remove severely affected seedlings.',
    'Use healthy seed.',
    'Follow recommended seed treatment.',
    'Maintain field sanitation.'
  ]
},

{
  id: 'ragi-grain-smut',
  name: 'Grain Smut',
  crop: 'ragi',
  category: 'Fungal Disease',

  diseaseInformation:
    'Grain smut is a fungal disease of ragi that affects developing grains. Infected grains may be replaced by dark fungal structures, reducing grain quality and potentially affecting yield.',

  symptoms: [
    'Individual grains may become enlarged or abnormal.',
    'Affected grains may be replaced by dark fungal masses.',
    'Blackish or brownish smut structures may appear on finger heads.',
    'Infected grains may have poor development.',
    'Panicles may contain a mixture of healthy and infected grains.',
    'Grain quality may decline.',
    'Severe infection can reduce marketable grain yield.'
  ],

  cause:
    'Grain smut is caused by a seed- or grain-associated fungal pathogen that infects developing ragi grains.',

  favorableConditions: [
    'High humidity.',
    'Frequent rainfall during flowering.',
    'Prolonged wet weather.',
    'Use of infected seed.',
    'Susceptible varieties.',
    'Poor sanitation.',
    'Continuous cultivation without suitable crop rotation.'
  ],

  prevention: [
    'Use healthy and quality-tested seed.',
    'Use recommended seed-treatment practices.',
    'Remove heavily infected panicles.',
    'Maintain field sanitation.',
    'Prefer locally recommended tolerant varieties.',
    'Avoid saving seed from severely infected fields.',
    'Follow suitable crop rotation where practical.'
  ],

  solution: [
    'Remove and destroy severely infected panicles where practical.',
    'Avoid using heavily infected grain as planting seed.',
    'Use recommended seed treatment before the next crop.',
    'Apply locally recommended fungicide management when appropriate.',
    'Maintain proper post-harvest sanitation.'
  ],

  management: [
    'Inspect finger heads during flowering and grain development.',
    'Remove infected panicles.',
    'Use healthy seed for the next season.',
    'Treat seed according to local recommendations.',
    'Maintain field sanitation.',
    'Monitor disease incidence.',
    'Use integrated disease management.'
  ]
},

{
  id: 'ragi-shoot-fly',
  name: 'Shoot Fly',
  crop: 'ragi',
  category: 'Insect Pest',

  diseaseInformation:
    'Shoot fly is an important insect pest of young ragi plants. The larvae damage the central shoot and can cause dead-heart symptoms, leading to reduced plant growth and poor crop establishment.',

  symptoms: [
    'Central shoots of young plants may dry and die.',
    'Dead-heart symptoms may appear.',
    'Damaged plants may produce side shoots.',
    'Young plants may show stunted growth.',
    'Plant stands may become uneven.',
    'Severely damaged plants may fail to establish properly.',
    'Heavy infestation can reduce plant population and yield.'
  ],

  cause:
    'Damage is caused by shoot fly larvae that feed inside the young shoots of ragi plants.',

  favorableConditions: [
    'Warm weather.',
    'Delayed sowing.',
    'Poor crop establishment.',
    'Presence of volunteer cereal plants.',
    'Continuous cereal cultivation.',
    'High pest population.',
    'Weak or stressed young plants.'
  ],

  prevention: [
    'Follow recommended sowing time.',
    'Use healthy seed and vigorous planting material.',
    'Maintain a uniform plant stand.',
    'Remove volunteer cereal plants.',
    'Avoid unnecessary delayed sowing.',
    'Maintain balanced crop nutrition.',
    'Monitor young plants regularly.'
  ],

  solution: [
    'Remove severely damaged young plants where practical.',
    'Monitor dead-heart symptoms.',
    'Use locally recommended registered insecticides when pest incidence reaches damaging levels.',
    'Follow recommended application timing and label directions.',
    'Use integrated pest-management methods.'
  ],

  management: [
    'Inspect young plants regularly.',
    'Monitor dead-heart symptoms.',
    'Maintain uniform crop establishment.',
    'Remove volunteer host plants.',
    'Follow recommended sowing time.',
    'Protect beneficial insects.',
    'Use recommended insecticide treatment only when necessary.'
  ]
},

{
  id: 'ragi-aphid-thrips',
  name: 'Aphid / Thrips',
  crop: 'ragi',
  category: 'Insect Pest',

  diseaseInformation:
    'Aphids and thrips are small sap-feeding insects that can infest young ragi foliage and developing plant tissues. Heavy infestation may cause leaf distortion, yellowing and reduced plant vigour.',

  symptoms: [
    'Small insects may occur on young leaves and shoots.',
    'Leaves may become curled or distorted.',
    'Fine silvery or pale streaks may appear on leaves due to thrips feeding.',
    'Leaves may become yellow or dull.',
    'Honeydew may occur with aphid infestation.',
    'Sooty mould may develop on honeydew-covered surfaces.',
    'Severe infestation can reduce plant growth.'
  ],

  cause:
    'Damage is caused by aphids and thrips feeding on plant sap and tender plant tissues.',

  favorableConditions: [
    'Warm weather.',
    'Dry conditions.',
    'Dense crop growth.',
    'Excessive nitrogen.',
    'Presence of alternate host plants.',
    'Reduced natural-enemy activity.',
    'Continuous availability of young plant growth.'
  ],

  prevention: [
    'Monitor young leaves regularly.',
    'Avoid excessive nitrogen fertilization.',
    'Remove important weed hosts.',
    'Conserve ladybird beetles and other beneficial insects.',
    'Maintain balanced crop nutrition.',
    'Maintain healthy crop growth.',
    'Avoid unnecessary broad-spectrum insecticide use.'
  ],

  solution: [
    'Remove heavily infested plant material where practical.',
    'Use biological control where suitable.',
    'Use locally recommended registered insecticides when pest levels are significant.',
    'Rotate insecticide modes of action when repeated treatment is required.',
    'Avoid unnecessary pesticide applications.'
  ],

  management: [
    'Inspect young shoots and leaves.',
    'Monitor aphid and thrips populations.',
    'Control important weed hosts.',
    'Protect natural enemies.',
    'Maintain balanced nutrition.',
    'Use recommended insecticides only when necessary.',
    'Follow integrated pest-management practices.'
  ]
},

// =========================================================
// SUNFLOWER
// =========================================================

{
  id: 'sunflower-alternaria-leaf-spot',
  name: 'Alternaria Leaf Spot',
  crop: 'sunflower',
  category: 'Fungal Disease',

  diseaseInformation:
    'Alternaria leaf spot is a fungal disease that affects sunflower leaves and can reduce photosynthetic area. Severe infection may cause premature leaf drying and reduced seed and oil production.',

  symptoms: [
    'Small brown spots appear on leaves.',
    'Spots may become circular or irregular.',
    'Concentric rings may develop within lesions.',
    'Lesions may enlarge and merge.',
    'Leaves may turn yellow around infected areas.',
    'Severely infected leaves may dry prematurely.',
    'Heavy infection can reduce seed filling and yield.'
  ],

  cause:
    'Alternaria leaf spot is caused by Alternaria species that infect sunflower foliage under favourable environmental conditions.',

  favorableConditions: [
    'Warm and humid weather.',
    'Frequent rainfall.',
    'Long periods of leaf wetness.',
    'Dense crop canopy.',
    'Infected crop residues.',
    'Poor field aeration.',
    'Continuous cultivation of susceptible crops.'
  ],

  prevention: [
    'Use healthy and quality-tested seed.',
    'Maintain appropriate plant spacing.',
    'Follow suitable crop rotation.',
    'Remove infected crop residues where practical.',
    'Avoid excessive irrigation.',
    'Maintain balanced crop nutrition.',
    'Prefer locally recommended tolerant varieties where available.'
  ],

  solution: [
    'Remove severely infected leaves where practical.',
    'Improve crop aeration.',
    'Use locally recommended registered fungicides when disease severity is significant.',
    'Follow recommended application timing.',
    'Rotate fungicide modes of action where repeated applications are required.'
  ],

  management: [
    'Monitor leaves regularly.',
    'Inspect the crop after rainfall.',
    'Maintain appropriate plant spacing.',
    'Avoid excessive nitrogen.',
    'Remove infected crop debris.',
    'Use recommended fungicide treatment when necessary.',
    'Follow integrated disease management.'
  ]
},

{
  id: 'sunflower-downy-mildew',
  name: 'Downy Mildew',
  crop: 'sunflower',
  category: 'Fungal Disease',

  diseaseInformation:
    'Downy mildew is an important disease of sunflower that can affect seedlings and mature plants. Infection may cause leaf symptoms, stunting and abnormal plant development, particularly under cool and wet conditions.',

  symptoms: [
    'Leaves may develop pale green or yellow patches.',
    'White to greyish fungal growth may appear on the lower leaf surface.',
    'Young plants may become stunted.',
    'Leaves may become distorted.',
    'The stem may remain short in severely affected plants.',
    'Affected plants may have reduced vigour.',
    'Severe infection can reduce seed production.'
  ],

  cause:
    'Downy mildew is caused by the oomycete pathogen Plasmopara halstedii.',

  favorableConditions: [
    'Cool and wet weather.',
    'High soil moisture.',
    'Frequent rainfall.',
    'Poor soil drainage.',
    'Dense crop growth.',
    'Infected seed or crop residues.',
    'Continuous cultivation of susceptible sunflower varieties.'
  ],

  prevention: [
    'Use healthy and quality-tested seed.',
    'Prefer resistant or tolerant varieties where available.',
    'Provide proper field drainage.',
    'Avoid excessive irrigation.',
    'Follow suitable crop rotation.',
    'Maintain appropriate plant spacing.',
    'Remove severely infected plants where practical.'
  ],

  solution: [
    'Remove severely affected plants where practical.',
    'Improve soil drainage.',
    'Avoid excessive irrigation.',
    'Use locally recommended registered fungicides or oomycete-management products when appropriate.',
    'Follow label directions and recommended application timing.'
  ],

  management: [
    'Inspect seedlings and young plants regularly.',
    'Monitor disease after periods of wet weather.',
    'Maintain good drainage.',
    'Use resistant varieties where available.',
    'Remove severely infected plants.',
    'Use recommended disease-management products when required.',
    'Follow integrated disease-management practices.'
  ]
},

{
  id: 'sunflower-powdery-mildew',
  name: 'Powdery Mildew',
  crop: 'sunflower',
  category: 'Fungal Disease',

  diseaseInformation:
    'Powdery mildew produces a characteristic white powdery growth on sunflower leaves and other plant parts. Severe infection can interfere with photosynthesis and reduce plant vigour and seed development.',

  symptoms: [
    'White powdery patches appear on leaves.',
    'Powdery growth may spread across leaf surfaces.',
    'Leaves may become yellow around infected areas.',
    'Severely infected leaves may become dry.',
    'Plant growth may be reduced.',
    'Premature leaf ageing may occur.',
    'Heavy infection can reduce seed development.'
  ],

  cause:
    'Powdery mildew is caused by powdery mildew fungi that grow on the surface of sunflower tissues.',

  favorableConditions: [
    'Warm days and relatively dry conditions.',
    'Moderate humidity.',
    'Dense crop growth.',
    'Poor air circulation.',
    'Excessive nitrogen.',
    'Susceptible varieties.',
    'Continuous crop growth without adequate disease management.'
  ],

  prevention: [
    'Maintain appropriate plant spacing.',
    'Avoid excessive nitrogen fertilization.',
    'Use locally recommended tolerant varieties.',
    'Maintain good field aeration.',
    'Monitor young leaves regularly.',
    'Maintain balanced crop nutrition.',
    'Remove severely affected plant material where practical.'
  ],

  solution: [
    'Remove severely affected leaves where practical.',
    'Improve crop aeration.',
    'Use locally recommended registered fungicides when infection becomes significant.',
    'Follow label directions carefully.',
    'Rotate fungicide modes of action when repeated applications are necessary.'
  ],

  management: [
    'Inspect leaves regularly.',
    'Monitor disease progression.',
    'Maintain good crop spacing.',
    'Avoid excessive nitrogen.',
    'Protect healthy foliage.',
    'Use recommended fungicide treatment when necessary.',
    'Follow integrated disease-management practices.'
  ]
},

{
  id: 'sunflower-rust',
  name: 'Rust',
  crop: 'sunflower',
  category: 'Fungal Disease',

  diseaseInformation:
    'Rust is a fungal disease that produces characteristic rust-coloured pustules on sunflower leaves and other plant tissues. Severe infection can reduce photosynthetic activity and contribute to premature leaf drying.',

  symptoms: [
    'Small orange, brown or rust-coloured pustules appear on leaves.',
    'Pustules may occur mainly on the lower leaf surface.',
    'Yellowing may develop around infected areas.',
    'Leaves may become covered with numerous pustules.',
    'Severely infected leaves may dry prematurely.',
    'Plant vigour may decline.',
    'Heavy infection can reduce seed filling.'
  ],

  cause:
    'Rust is caused by rust fungi that produce spore-forming pustules on sunflower tissues.',

  favorableConditions: [
    'Moderate temperatures.',
    'High humidity.',
    'Frequent rainfall.',
    'Extended periods of leaf wetness.',
    'Dense crop canopy.',
    'Susceptible varieties.',
    'Presence of infected plant residues.'
  ],

  prevention: [
    'Use healthy seed.',
    'Prefer rust-tolerant varieties where available.',
    'Maintain suitable plant spacing.',
    'Remove infected crop residues.',
    'Avoid excessive irrigation.',
    'Maintain balanced crop nutrition.',
    'Follow suitable crop rotation.'
  ],

  solution: [
    'Monitor rust pustules regularly.',
    'Remove severely infected foliage where practical.',
    'Use locally recommended registered fungicides when disease severity is economically significant.',
    'Follow recommended application timing.',
    'Rotate fungicide modes of action when necessary.'
  ],

  management: [
    'Inspect both upper and lower leaf surfaces.',
    'Monitor disease after humid weather.',
    'Maintain good field aeration.',
    'Remove infected residues.',
    'Use tolerant varieties where available.',
    'Apply recommended fungicide management when necessary.',
    'Follow integrated disease management.'
  ]
},

{
  id: 'sunflower-sclerotinia-head-rot',
  name: 'Sclerotinia Head Rot',
  crop: 'sunflower',
  category: 'Fungal Disease',

  diseaseInformation:
    'Sclerotinia head rot is a serious fungal disease that affects sunflower heads and can cause rapid decay of developing seeds. Under favourable wet conditions, severe infection can cause major yield and quality losses.',

  symptoms: [
    'Brown or water-soaked areas develop on the flower head.',
    'Head tissues may become soft and rotten.',
    'White fungal growth may appear on infected tissues.',
    'Black sclerotia may develop within or around affected tissues.',
    'Seeds may become discoloured or shrivelled.',
    'Affected heads may dry prematurely.',
    'Severe infection can cause significant yield loss.'
  ],

  cause:
    'Sclerotinia head rot is caused by Sclerotinia sclerotiorum, a soil- and residue-borne fungal pathogen.',

  favorableConditions: [
    'Cool and wet weather.',
    'Frequent rainfall during flowering.',
    'High humidity.',
    'Dense crop canopy.',
    'Poor air circulation.',
    'High soil pathogen levels.',
    'Continuous cultivation of susceptible crops.'
  ],

  prevention: [
    'Follow suitable crop rotation.',
    'Use healthy seed.',
    'Avoid excessive irrigation.',
    'Maintain appropriate plant spacing.',
    'Improve field drainage.',
    'Remove severely infected crop residues.',
    'Avoid planting susceptible crops continuously in heavily infested fields.'
  ],

  solution: [
    'Remove severely infected heads where practical.',
    'Improve field drainage.',
    'Avoid excessive irrigation.',
    'Use locally recommended registered fungicides when appropriate and at the recommended crop stage.',
    'Follow integrated management for soil-borne Sclerotinia populations.'
  ],

  management: [
    'Monitor plants during flowering.',
    'Inspect flower heads after prolonged wet weather.',
    'Remove severely affected heads where practical.',
    'Maintain proper drainage.',
    'Follow crop rotation.',
    'Reduce unnecessary irrigation.',
    'Use integrated disease-management practices.'
  ]
},

{
  id: 'sunflower-charcoal-rot',
  name: 'Charcoal Rot',
  crop: 'sunflower',
  category: 'Fungal Disease',

  diseaseInformation:
    'Charcoal rot is a soil-borne fungal disease that mainly affects the roots and lower stem of sunflower. It is often associated with drought and plant stress and can cause premature drying and reduced seed yield.',

  symptoms: [
    'Plants may wilt during hot and dry weather.',
    'Leaves may yellow and dry prematurely.',
    'Lower stems may become weakened.',
    'Root tissues may show decay.',
    'Small black fungal structures may be visible in affected tissues.',
    'Affected plants may lodge easily.',
    'Severe infection can cause premature plant death.'
  ],

  cause:
    'Charcoal rot is commonly caused by Macrophomina phaseolina, a soil-borne fungal pathogen.',

  favorableConditions: [
    'Hot weather.',
    'Prolonged drought.',
    'Low soil moisture.',
    'Plant water stress.',
    'Poor soil health.',
    'High pathogen populations in soil.',
    'Continuous cultivation of susceptible crops.'
  ],

  prevention: [
    'Maintain adequate soil moisture during critical crop stages.',
    'Follow suitable crop rotation.',
    'Improve soil organic matter.',
    'Use healthy seed.',
    'Avoid severe water stress.',
    'Maintain balanced crop nutrition.',
    'Remove severely infected crop residues where practical.'
  ],

  solution: [
    'Reduce crop water stress through appropriate irrigation.',
    'Remove severely affected plants where practical.',
    'Improve soil health and organic matter.',
    'Follow suitable crop rotation.',
    'Use locally recommended biological disease-management practices.',
    'Seek agricultural extension advice for severe field infestation.'
  ],

  management: [
    'Monitor plants during hot and dry periods.',
    'Inspect roots and lower stems of wilted plants.',
    'Maintain adequate soil moisture.',
    'Avoid prolonged drought stress.',
    'Improve soil health.',
    'Follow crop rotation.',
    'Use integrated soil-borne disease management.'
  ]
},

{
  id: 'sunflower-capitulum-borer',
  name: 'Capitulum Borer',
  crop: 'sunflower',
  category: 'Insect Pest',

  diseaseInformation:
    'Capitulum borers are insect pests that attack sunflower flower heads and developing seeds. Larval feeding can damage the capitulum, reduce seed formation and create entry points for secondary infections.',

  symptoms: [
    'Larvae may be present on flower heads.',
    'Small feeding holes may appear on the capitulum.',
    'Developing seeds may be damaged.',
    'Frass may be visible around feeding sites.',
    'Flower head tissues may become damaged.',
    'Secondary fungal infection may develop in damaged heads.',
    'Severe infestation can reduce seed yield and quality.'
  ],

  cause:
    'Damage is caused by insect larvae that feed on sunflower flower heads and developing seeds.',

  favorableConditions: [
    'High pest populations.',
    'Warm weather.',
    'Continuous sunflower cultivation.',
    'Presence of alternate host plants.',
    'Poor field monitoring.',
    'Delayed pest detection.',
    'Dense crop growth.'
  ],

  prevention: [
    'Monitor flower heads regularly.',
    'Remove alternate weed hosts where practical.',
    'Maintain field sanitation.',
    'Avoid unnecessary insecticide use.',
    'Conserve parasitoids and predatory insects.',
    'Follow suitable crop rotation.',
    'Use locally recommended tolerant hybrids where available.'
  ],

  solution: [
    'Collect and destroy severely infested heads where practical.',
    'Use biological control where suitable.',
    'Use locally recommended registered insecticides when infestation reaches damaging levels.',
    'Apply treatment at the recommended crop stage.',
    'Rotate insecticide modes of action when repeated applications are needed.'
  ],

  management: [
    'Inspect flower heads during flowering and seed development.',
    'Monitor larvae and feeding damage.',
    'Remove severely damaged plant material.',
    'Protect natural enemies.',
    'Control important alternate hosts.',
    'Use insecticides only when economically justified.',
    'Follow integrated pest management.'
  ]
},

{
  id: 'sunflower-aphid',
  name: 'Aphid',
  crop: 'sunflower',
  category: 'Insect Pest',

  diseaseInformation:
    'Aphids are small sap-sucking insects that can colonize sunflower shoots, leaves and flower heads. Heavy infestation may weaken plants, cause leaf distortion and reduce normal crop development.',

  symptoms: [
    'Aphid colonies may occur on young shoots and leaves.',
    'Leaves may become curled or distorted.',
    'Plants may show yellowing.',
    'Honeydew may accumulate on plant surfaces.',
    'Sooty mould may develop on honeydew.',
    'Flower heads may become infested.',
    'Severe infestation can reduce plant vigour and seed development.'
  ],

  cause:
    'Damage is caused by aphids feeding on sunflower plant sap.',

  favorableConditions: [
    'Moderate temperatures.',
    'Dense crop growth.',
    'Excessive nitrogen.',
    'Presence of weeds and alternate hosts.',
    'Reduced natural-enemy activity.',
    'Ant activity that protects aphid colonies.',
    'Continuous availability of tender plant growth.'
  ],

  prevention: [
    'Inspect young shoots and leaves regularly.',
    'Avoid excessive nitrogen application.',
    'Remove important weed hosts.',
    'Conserve ladybird beetles and other natural enemies.',
    'Maintain balanced crop nutrition.',
    'Monitor ant activity where necessary.',
    'Avoid unnecessary broad-spectrum insecticide use.'
  ],

  solution: [
    'Remove heavily infested plant parts where practical.',
    'Encourage biological control.',
    'Use locally recommended registered insecticides when infestation becomes significant.',
    'Rotate insecticide modes of action where repeated treatment is required.',
    'Avoid unnecessary pesticide applications.'
  ],

  management: [
    'Monitor aphid colonies regularly.',
    'Inspect leaf undersides and flower heads.',
    'Protect natural enemies.',
    'Control important weed hosts.',
    'Maintain balanced crop nutrition.',
    'Manage ants where they interfere with biological control.',
    'Use integrated pest-management practices.'
  ]
},

// =========================================================
// SESAME / GINGELLY
// =========================================================

{
  id: 'sesame-alternaria-leaf-spot',
  name: 'Alternaria Leaf Spot',
  crop: 'sesame',
  category: 'Fungal Disease',

  diseaseInformation:
    'Alternaria leaf spot is a fungal disease of sesame that produces spots on leaves and can reduce photosynthetic activity. Severe infection may cause premature defoliation and reduced seed production.',

  symptoms: [
    'Small brown spots appear on leaves.',
    'Spots may become circular or irregular.',
    'Concentric rings may develop within older lesions.',
    'Lesions may enlarge and merge.',
    'Leaves may turn yellow around infected areas.',
    'Severely infected leaves may dry and fall prematurely.',
    'Heavy infection can reduce seed yield.'
  ],

  cause:
    'Alternaria leaf spot is caused by Alternaria species that infect sesame foliage under favourable environmental conditions.',

  favorableConditions: [
    'Warm and humid weather.',
    'Frequent rainfall.',
    'Prolonged leaf wetness.',
    'Dense crop growth.',
    'Poor field aeration.',
    'Infected crop residues.',
    'Continuous cultivation of susceptible sesame crops.'
  ],

  prevention: [
    'Use healthy and quality-tested seed.',
    'Maintain appropriate plant spacing.',
    'Follow suitable crop rotation.',
    'Remove infected crop residues where practical.',
    'Avoid excessive irrigation.',
    'Maintain balanced crop nutrition.',
    'Prefer locally recommended tolerant varieties where available.'
  ],

  solution: [
    'Remove severely infected leaves where practical.',
    'Improve crop aeration.',
    'Use locally recommended registered fungicides when disease severity is significant.',
    'Follow recommended application timing.',
    'Rotate fungicide modes of action when repeated treatment is required.'
  ],

  management: [
    'Inspect leaves regularly.',
    'Monitor disease after rainfall.',
    'Maintain suitable crop spacing.',
    'Avoid excessive nitrogen.',
    'Remove infected residues.',
    'Use recommended fungicide management when necessary.',
    'Follow integrated disease-management practices.'
  ]
},

{
  id: 'sesame-cercospora-leaf-spot',
  name: 'Cercospora Leaf Spot',
  crop: 'sesame',
  category: 'Fungal Disease',

  diseaseInformation:
    'Cercospora leaf spot is a fungal disease that produces characteristic spots on sesame leaves. Severe infection can reduce leaf area, cause premature defoliation and affect plant productivity.',

  symptoms: [
    'Small circular spots appear on leaves.',
    'Spots may have brown margins.',
    'The centre of lesions may become greyish.',
    'Multiple lesions may occur on older leaves.',
    'Leaves may yellow around severe infections.',
    'Heavily infected leaves may dry and fall.',
    'Severe disease can reduce plant vigour and seed production.'
  ],

  cause:
    'Cercospora leaf spot is caused by Cercospora species that infect sesame leaves under favourable moisture and humidity conditions.',

  favorableConditions: [
    'Warm humid weather.',
    'Frequent rainfall.',
    'High relative humidity.',
    'Long periods of leaf wetness.',
    'Dense crop canopy.',
    'Infected crop residues.',
    'Poor field sanitation.'
  ],

  prevention: [
    'Use healthy seed.',
    'Maintain suitable plant spacing.',
    'Follow crop rotation.',
    'Remove infected plant residues.',
    'Avoid excessive irrigation.',
    'Maintain good field sanitation.',
    'Use locally recommended tolerant varieties where available.'
  ],

  solution: [
    'Remove severely infected leaves where practical.',
    'Improve crop aeration.',
    'Use locally recommended registered fungicides when disease severity warrants treatment.',
    'Follow recommended application intervals.',
    'Rotate fungicide modes of action.'
  ],

  management: [
    'Inspect leaves regularly.',
    'Monitor disease during humid weather.',
    'Maintain appropriate plant density.',
    'Remove infected residues.',
    'Avoid excessive irrigation.',
    'Use recommended fungicide management when necessary.',
    'Follow integrated disease-management practices.'
  ]
},

{
  id: 'sesame-phyllody',
  name: 'Phyllody',
  crop: 'sesame',
  category: 'Phytoplasma Disease',

  diseaseInformation:
    'Phyllody is an important disease of sesame in which floral parts become leaf-like and normal flower and seed development is disrupted. Severe infection can cause major reductions in seed production.',

  symptoms: [
    'Flowers become malformed.',
    'Floral parts may turn green and leaf-like.',
    'Normal flower development is disrupted.',
    'Excessive leafy growth may occur around affected flowers.',
    'Seed formation may be greatly reduced.',
    'Affected plants may show abnormal branching.',
    'Severely infected plants may become almost completely sterile.'
  ],

  cause:
    'Phyllody is associated with phytoplasmas that are transmitted mainly by leafhopper vectors. Infected plant material and vector populations can contribute to disease spread.',

  favorableConditions: [
    'High leafhopper populations.',
    'Presence of infected plants.',
    'Presence of weed hosts.',
    'Warm weather.',
    'Continuous cultivation of sesame.',
    'Poor field sanitation.',
    'Presence of alternate phytoplasma hosts.'
  ],

  prevention: [
    'Use healthy seed and planting material.',
    'Remove and destroy phyllody-affected plants where practical.',
    'Control important weed hosts.',
    'Monitor leafhopper populations.',
    'Avoid continuous sesame cultivation.',
    'Maintain field sanitation.',
    'Prefer locally recommended tolerant varieties where available.'
  ],

  solution: [
    'Remove severely affected plants promptly where practical.',
    'Manage leafhopper vectors using locally recommended integrated pest-management practices.',
    'Control important weed hosts.',
    'Avoid using infected plant material for future planting.',
    'Seek agricultural extension advice when disease incidence is high.'
  ],

  management: [
    'Inspect flowers regularly.',
    'Monitor for abnormal leafy floral structures.',
    'Remove infected plants.',
    'Monitor leafhopper populations.',
    'Control weed hosts.',
    'Maintain field sanitation.',
    'Use integrated vector and disease management.'
  ]
},

{
  id: 'sesame-root-rot-stem-rot',
  name: 'Root Rot / Stem Rot',
  crop: 'sesame',
  category: 'Fungal Disease',

  diseaseInformation:
    'Root rot and stem rot are soil-associated fungal diseases that can affect sesame roots and lower stems. Infection may cause wilting, basal stem damage, poor plant growth and premature plant death.',

  symptoms: [
    'Plants may show yellowing and wilting.',
    'Roots may become brown or black and decayed.',
    'The lower stem may develop dark lesions.',
    'Affected plants may become weak.',
    'Plants may lodge easily.',
    'Severely affected plants may dry prematurely.',
    'Dead plants may occur in patches within the field.'
  ],

  cause:
    'Root and stem rot can be caused by several soil-borne fungal pathogens, including Macrophomina and Fusarium species.',

  favorableConditions: [
    'High soil temperatures.',
    'Drought stress.',
    'Poor soil health.',
    'Excessive soil moisture in some situations.',
    'Root injury.',
    'Continuous cultivation of susceptible crops.',
    'High soil-borne pathogen populations.'
  ],

  prevention: [
    'Use healthy and quality-tested seed.',
    'Follow suitable crop rotation.',
    'Maintain balanced soil moisture.',
    'Avoid severe drought stress.',
    'Improve soil organic matter.',
    'Avoid unnecessary root injury.',
    'Remove infected crop residues where practical.'
  ],

  solution: [
    'Remove severely affected plants where practical.',
    'Improve soil and moisture management.',
    'Use recommended biological disease-management practices.',
    'Use registered fungicides or seed treatments only when locally recommended.',
    'Avoid continuous cultivation of susceptible crops.'
  ],

  management: [
    'Inspect wilted plants and check roots.',
    'Monitor field patches with poor plant growth.',
    'Maintain suitable soil moisture.',
    'Improve soil health.',
    'Remove severely affected plants.',
    'Follow suitable crop rotation.',
    'Use integrated soil-borne disease management.'
  ]
},

{
  id: 'sesame-powdery-mildew',
  name: 'Powdery Mildew',
  crop: 'sesame',
  category: 'Fungal Disease',

  diseaseInformation:
    'Powdery mildew produces white powdery fungal growth on sesame leaves and other green tissues. Severe infection can reduce photosynthetic activity and cause premature leaf ageing.',

  symptoms: [
    'White powdery patches appear on leaves.',
    'Powdery growth may spread across leaf surfaces.',
    'Leaves may become yellow around infected areas.',
    'Leaves may dry under severe infection.',
    'Plant growth may become weak.',
    'Premature leaf ageing may occur.',
    'Severe infection can reduce seed development.'
  ],

  cause:
    'Powdery mildew is caused by powdery mildew fungi that grow primarily on the surface of sesame tissues.',

  favorableConditions: [
    'Warm weather.',
    'Moderate humidity.',
    'Poor air circulation.',
    'Dense crop growth.',
    'Excessive nitrogen.',
    'Susceptible varieties.',
    'Reduced field ventilation.'
  ],

  prevention: [
    'Maintain suitable plant spacing.',
    'Avoid excessive nitrogen application.',
    'Maintain good field aeration.',
    'Use locally recommended tolerant varieties where available.',
    'Monitor young leaves regularly.',
    'Maintain balanced crop nutrition.',
    'Remove severely affected plant material where practical.'
  ],

  solution: [
    'Remove severely affected leaves where practical.',
    'Improve crop ventilation.',
    'Use locally recommended registered fungicides when disease becomes significant.',
    'Follow label directions.',
    'Rotate fungicide modes of action when repeated treatment is necessary.'
  ],

  management: [
    'Inspect leaves regularly.',
    'Monitor disease progression.',
    'Maintain suitable plant density.',
    'Avoid excessive nitrogen.',
    'Remove severely infected material.',
    'Use recommended fungicide treatment when required.',
    'Follow integrated disease management.'
  ]
},

{
  id: 'sesame-leaf-curl',
  name: 'Sesame Leaf Curl',
  crop: 'sesame',
  category: 'Viral Disease',

  diseaseInformation:
    'Sesame leaf curl is a virus-associated disease that can cause curling, distortion and reduced growth of sesame leaves. Vector insects such as whiteflies may contribute to the spread of virus diseases in sesame.',

  symptoms: [
    'Young leaves may curl upward or downward.',
    'Leaves may become distorted.',
    'Leaf size may be reduced.',
    'Plants may show stunted growth.',
    'Leaves may develop yellowish or pale areas.',
    'Internode growth may become shortened.',
    'Severe infection can reduce flowering and seed production.'
  ],

  cause:
    'Leaf curl symptoms can be associated with plant viruses transmitted by sap-feeding insect vectors, particularly whiteflies in virus complexes affecting susceptible crops.',

  favorableConditions: [
    'High whitefly populations.',
    'Presence of infected plants.',
    'Presence of alternate host plants.',
    'Warm weather.',
    'Dense crop growth.',
    'Poor weed management.',
    'Continuous availability of susceptible host plants.'
  ],

  prevention: [
    'Use healthy planting material.',
    'Remove severely symptomatic plants where practical.',
    'Control important weed and alternate host plants.',
    'Monitor whitefly populations.',
    'Conserve natural enemies.',
    'Avoid unnecessary broad-spectrum insecticide use.',
    'Maintain good field sanitation.'
  ],

  solution: [
    'Remove severely infected plants where practical.',
    'Manage whitefly populations using locally recommended integrated pest-management practices.',
    'Control important weed hosts.',
    'Avoid moving infected plant material between fields.',
    'Seek agricultural extension advice if virus symptoms become widespread.'
  ],

  management: [
    'Inspect young leaves regularly.',
    'Monitor whitefly populations.',
    'Remove severely symptomatic plants.',
    'Control important weed hosts.',
    'Protect natural enemies.',
    'Maintain field sanitation.',
    'Use integrated virus and vector management.'
  ]
},

{
  id: 'sesame-gall-fly',
  name: 'Gall Fly',
  crop: 'sesame',
  category: 'Insect Pest',

  diseaseInformation:
    'Gall flies are insect pests that can damage young sesame shoots, leaves and reproductive structures. Larval feeding may cause abnormal tissue growth and interfere with normal plant development.',

  symptoms: [
    'Small swellings or galls may develop on affected plant parts.',
    'Young shoots may become distorted.',
    'Tender tissues may show feeding damage.',
    'Flower or capsule development may be affected.',
    'Affected shoots may show reduced growth.',
    'Plants may develop abnormal growth around feeding sites.',
    'Heavy infestation can reduce seed production.'
  ],

  cause:
    'Damage is caused by gall fly larvae that feed within developing sesame tissues.',

  favorableConditions: [
    'Warm weather.',
    'High pest populations.',
    'Continuous sesame cultivation.',
    'Presence of alternate host plants.',
    'Poor field monitoring.',
    'Dense crop growth.',
    'Delayed detection of infestation.'
  ],

  prevention: [
    'Monitor young shoots and reproductive structures regularly.',
    'Remove severely infested plant parts where practical.',
    'Remove important weed hosts.',
    'Maintain good field sanitation.',
    'Follow suitable crop rotation.',
    'Conserve parasitoids and predatory insects.',
    'Use healthy planting material.'
  ],

  solution: [
    'Remove and destroy heavily infested plant parts where practical.',
    'Use biological control where suitable.',
    'Use locally recommended registered insecticides when infestation reaches damaging levels.',
    'Follow recommended application timing.',
    'Rotate insecticide modes of action when repeated treatment is required.'
  ],

  management: [
    'Inspect young shoots regularly.',
    'Monitor galls and abnormal growth.',
    'Remove heavily infested plant parts.',
    'Control important alternate host plants.',
    'Protect beneficial insects.',
    'Use insecticides only when economically justified.',
    'Follow integrated pest-management practices.'
  ]
},

{
  id: 'sesame-whitefly',
  name: 'Whitefly',
  crop: 'sesame',
  category: 'Insect Pest',

  diseaseInformation:
    'Whiteflies are small sap-sucking insects that can infest sesame leaves and shoots. Heavy infestation can weaken plants, cause honeydew and sooty mould, and some whitefly species can contribute to the transmission of plant viruses.',

  symptoms: [
    'Small white insects fly from the underside of leaves when disturbed.',
    'Nymphs may occur on lower leaf surfaces.',
    'Leaves may become pale or yellow.',
    'Honeydew may accumulate on leaves.',
    'Sooty mould may develop on honeydew-covered surfaces.',
    'Plants may show reduced vigour.',
    'Virus-like leaf symptoms may occur when virus vectors are involved.'
  ],

  cause:
    'Damage is caused by whiteflies feeding on plant sap. Certain whitefly species can also act as vectors of plant viruses.',

  favorableConditions: [
    'Warm weather.',
    'Dry to moderately humid conditions.',
    'Dense crop growth.',
    'Excessive nitrogen.',
    'Presence of weeds and alternate hosts.',
    'Reduced natural-enemy activity.',
    'Continuous availability of tender foliage.'
  ],

  prevention: [
    'Inspect leaf undersides regularly.',
    'Remove important weed and alternate host plants.',
    'Avoid excessive nitrogen fertilization.',
    'Conserve parasitoids and predatory insects.',
    'Maintain balanced crop nutrition.',
    'Use healthy planting material.',
    'Avoid unnecessary broad-spectrum insecticide use.'
  ],

  solution: [
    'Monitor whitefly populations before applying control measures.',
    'Conserve beneficial insects.',
    'Use locally recommended registered insecticides when populations reach damaging levels.',
    'Rotate insecticide modes of action when repeated treatment is necessary.',
    'Avoid unnecessary pesticide applications.'
  ],

  management: [
    'Inspect leaves and shoots regularly.',
    'Monitor adult and immature whiteflies.',
    'Control important weed hosts.',
    'Protect natural enemies.',
    'Maintain balanced crop nutrition.',
    'Monitor for associated virus symptoms.',
    'Use integrated pest-management practices.'
  ]
},
    // =========================================================
    // ONION
    // =========================================================

    {
      id: 'onion-purple-blotch',
      name: 'Purple Blotch',
      crop: 'onion',
      category: 'Fungal Disease',

      diseaseInformation:
        'Purple blotch is an important fungal disease of onion that mainly affects leaves and can reduce bulb development. Severe infection causes premature leaf drying and significant reduction in bulb yield and quality.',

      symptoms: [
        'Small water-soaked spots appear on onion leaves.',
        'Spots enlarge and develop purple or reddish-brown centres.',
        'Yellow halos may develop around lesions.',
        'Lesions may become elongated and spindle-shaped.',
        'Infected leaves may bend or collapse.',
        'Severely affected leaves dry prematurely.',
        'Heavy infection can reduce bulb size and yield.'
      ],

      cause:
        'Purple blotch is caused by Alternaria porri, a fungal pathogen that infects onion foliage.',

      favorableConditions: [
        'Warm and humid weather.',
        'Frequent rainfall.',
        'Long periods of leaf wetness.',
        'Dense crop growth.',
        'Poor air circulation.',
        'Infected crop residues.',
        'Excessive nitrogen fertilization.'
      ],

      prevention: [
        'Use healthy and quality-tested seed or planting material.',
        'Maintain proper plant spacing.',
        'Avoid excessive nitrogen fertilization.',
        'Remove infected crop residues.',
        'Maintain good field sanitation.',
        'Avoid unnecessary overhead irrigation.',
        'Follow suitable crop rotation.'
      ],

      solution: [
        'Remove severely infected leaves where practical.',
        'Improve crop aeration.',
        'Use locally recommended registered fungicides when disease severity warrants treatment.',
        'Follow recommended application intervals.',
        'Rotate fungicide modes of action when repeated applications are required.'
      ],

      management: [
        'Inspect onion leaves regularly.',
        'Monitor disease after rainfall and humid weather.',
        'Maintain suitable plant spacing.',
        'Avoid excessive nitrogen.',
        'Remove infected crop debris.',
        'Apply recommended fungicide management when necessary.',
        'Follow integrated disease-management practices.'
      ]
    },

    {
      id: 'onion-stemphylium-blight',
      name: 'Stemphylium Blight',
      crop: 'onion',
      category: 'Fungal Disease',

      diseaseInformation:
        'Stemphylium blight is a fungal disease of onion that causes lesions on leaves and can result in premature drying of foliage. Severe infection reduces photosynthetic activity and may affect bulb development.',

      symptoms: [
        'Small yellowish or water-soaked lesions appear on leaves.',
        'Lesions enlarge and become brown to dark brown.',
        'Dark fungal growth may develop on older lesions.',
        'Leaves may become yellow around infected areas.',
        'Lesions may merge and destroy large portions of leaves.',
        'Severely affected leaves may dry prematurely.',
        'Heavy disease pressure can reduce bulb development.'
      ],

      cause:
        'Stemphylium blight is caused mainly by Stemphylium vesicarium, which infects onion foliage under favourable environmental conditions.',

      favorableConditions: [
        'Warm and humid conditions.',
        'Frequent rainfall.',
        'Extended leaf wetness.',
        'Dense crop canopy.',
        'Poor air circulation.',
        'Infected crop residues.',
        'Plant stress.'
      ],

      prevention: [
        'Use healthy planting material.',
        'Maintain appropriate plant spacing.',
        'Remove infected crop residues.',
        'Avoid excessive irrigation.',
        'Maintain balanced crop nutrition.',
        'Improve field aeration.',
        'Follow suitable crop rotation.'
      ],

      solution: [
        'Remove severely affected leaves where practical.',
        'Improve field ventilation.',
        'Use locally recommended registered fungicides when disease pressure is significant.',
        'Follow recommended application timing.',
        'Rotate fungicide modes of action to reduce resistance risk.'
      ],

      management: [
        'Inspect leaves regularly.',
        'Monitor disease during humid weather.',
        'Maintain proper plant spacing.',
        'Remove infected residues.',
        'Avoid excessive leaf wetness.',
        'Use recommended fungicide treatment when necessary.',
        'Follow integrated disease management.'
      ]
    },

    {
      id: 'onion-downy-mildew',
      name: 'Downy Mildew',
      crop: 'onion',
      category: 'Fungal Disease',

      diseaseInformation:
        'Downy mildew affects onion leaves and can spread rapidly under cool, humid and wet conditions. Severe infection causes leaf yellowing, collapse and reduced bulb development.',

      symptoms: [
        'Pale green or yellow patches appear on leaves.',
        'Greyish to violet fungal growth may develop on affected leaves.',
        'Infected leaves become weak and bend downward.',
        'Lesions may enlarge during prolonged wet weather.',
        'Leaves may become yellow and dry.',
        'Severely affected plants may lose much of their foliage.',
        'Bulb size and yield may be reduced.'
      ],

      cause:
        'Downy mildew is caused by Peronospora destructor, an oomycete pathogen that infects onion foliage.',

      favorableConditions: [
        'Cool and humid weather.',
        'Frequent rainfall.',
        'Long periods of leaf wetness.',
        'High relative humidity.',
        'Dense crop growth.',
        'Poor air circulation.',
        'Excessive irrigation.'
      ],

      prevention: [
        'Use healthy planting material.',
        'Maintain proper plant spacing.',
        'Provide adequate field drainage.',
        'Avoid excessive irrigation.',
        'Reduce prolonged leaf wetness.',
        'Remove infected crop residues.',
        'Follow suitable crop rotation.'
      ],

      solution: [
        'Remove severely infected leaves where practical.',
        'Improve field drainage and aeration.',
        'Use locally recommended registered fungicides or oomycete-management products when necessary.',
        'Apply treatments at recommended crop stages.',
        'Rotate fungicide modes of action when repeated treatment is required.'
      ],

      management: [
        'Inspect leaves frequently during humid weather.',
        'Monitor fields after rainfall.',
        'Maintain good drainage.',
        'Avoid excessive irrigation.',
        'Remove heavily infected residues.',
        'Use recommended disease-management products when required.',
        'Follow integrated disease management.'
      ]
    },

    {
      id: 'onion-basal-rot',
      name: 'Basal Rot',
      crop: 'onion',
      category: 'Fungal Disease',

      diseaseInformation:
        'Basal rot is a soil-borne fungal disease that primarily affects the roots and basal portion of onion bulbs. Infection can cause root decay, bulb rot and premature plant death.',

      symptoms: [
        'Leaves may become yellow and wilt.',
        'Roots may become brown and decayed.',
        'The basal plate of the bulb may develop brown rot.',
        'Bulbs may become soft near the base.',
        'White fungal growth may occur under favourable conditions.',
        'Affected plants may be pulled easily from the soil.',
        'Severe infection can cause bulb loss and reduced yield.'
      ],

      cause:
        'Basal rot is commonly associated with Fusarium species, particularly Fusarium oxysporum f. sp. cepae.',

      favorableConditions: [
        'Warm soil conditions.',
        'Poor soil drainage.',
        'Root injury.',
        'Continuous onion cultivation.',
        'High soil-borne pathogen populations.',
        'Infected planting material.',
        'Poor field sanitation.'
      ],

      prevention: [
        'Use healthy and disease-free planting material.',
        'Follow suitable crop rotation.',
        'Select well-drained fields.',
        'Avoid root injury during cultivation.',
        'Remove infected bulbs and plant debris.',
        'Maintain good field sanitation.',
        'Avoid planting onions continuously in heavily infested soil.'
      ],

      solution: [
        'Remove severely infected plants and bulbs where practical.',
        'Improve soil drainage.',
        'Avoid excessive irrigation.',
        'Use recommended biological disease-management practices.',
        'Use registered fungicide or seed-treatment options only when locally recommended.'
      ],

      management: [
        'Inspect plants for yellowing and wilting.',
        'Check bulb bases of affected plants.',
        'Remove infected bulbs.',
        'Maintain proper drainage.',
        'Follow crop rotation.',
        'Avoid root injuries.',
        'Use integrated soil-borne disease management.'
      ]
    },

    {
      id: 'onion-damping-off',
      name: 'Damping Off',
      crop: 'onion',
      category: 'Fungal Disease',

      diseaseInformation:
        'Damping off affects onion seedlings in nursery beds and can cause poor establishment and seedling death. The disease is favoured by excessive moisture, poor drainage and dense seedlings.',

      symptoms: [
        'Seeds may fail to germinate properly.',
        'Young seedlings develop water-soaked lesions.',
        'The stem near the soil surface becomes thin and weak.',
        'Seedlings may bend and collapse.',
        'Roots may become brown and decayed.',
        'Dead seedlings may occur in patches.',
        'Severe infection can destroy large portions of the nursery.'
      ],

      cause:
        'Damping off is caused by several soil- and seed-borne pathogens, including Pythium, Rhizoctonia and Fusarium species.',

      favorableConditions: [
        'Excessive soil moisture.',
        'Poor nursery drainage.',
        'Dense seedling growth.',
        'Heavy soil.',
        'Poor air circulation.',
        'Contaminated nursery soil.',
        'Over-irrigation.'
      ],

      prevention: [
        'Use healthy and quality-tested seed.',
        'Prepare raised and well-drained nursery beds.',
        'Avoid excessive irrigation.',
        'Maintain proper seed spacing.',
        'Use recommended seed-treatment practices.',
        'Remove diseased seedlings promptly.',
        'Maintain clean nursery conditions.'
      ],

      solution: [
        'Remove and destroy severely affected seedlings.',
        'Improve nursery drainage.',
        'Reduce irrigation frequency when soil is excessively wet.',
        'Use recommended biological or chemical seed treatments.',
        'Follow locally recommended nursery disease-management practices.'
      ],

      management: [
        'Inspect seedlings after emergence.',
        'Monitor nursery moisture levels.',
        'Remove infected seedlings.',
        'Maintain proper drainage.',
        'Avoid overcrowding.',
        'Use treated healthy seed.',
        'Maintain nursery sanitation.'
      ]
    },

    {
      id: 'onion-thrips',
      name: 'Onion Thrips',
      crop: 'onion',
      category: 'Insect Pest',

      diseaseInformation:
        'Onion thrips are small insects that feed on onion leaves and can cause extensive surface damage. Heavy infestation reduces photosynthetic activity and may affect bulb formation and yield.',

      symptoms: [
        'Silvery or whitish streaks appear on leaves.',
        'Leaves may develop small pale patches.',
        'Leaf tips may become dry.',
        'Leaves may become distorted under heavy infestation.',
        'Small slender insects may be found between leaf folds.',
        'Plants may become weak and stunted.',
        'Severe infestation can reduce bulb size and yield.'
      ],

      cause:
        'Damage is caused by thrips feeding on onion leaf tissues and plant sap.',

      favorableConditions: [
        'Warm and dry weather.',
        'Low rainfall.',
        'Dense crop growth.',
        'Presence of weeds.',
        'Reduced natural-enemy activity.',
        'Continuous onion cultivation.',
        'Water-stressed plants.'
      ],

      prevention: [
        'Monitor young leaves regularly.',
        'Maintain adequate irrigation during dry periods.',
        'Remove important weed hosts.',
        'Avoid excessive nitrogen.',
        'Conserve predatory insects.',
        'Maintain field sanitation.',
        'Use integrated pest-management practices.'
      ],

      solution: [
        'Monitor thrips populations before treatment.',
        'Use biological control where practical.',
        'Use locally recommended registered insecticides when pest levels are damaging.',
        'Rotate insecticide modes of action.',
        'Avoid repeated unnecessary pesticide applications.'
      ],

      management: [
        'Inspect leaf folds regularly.',
        'Monitor thrips population.',
        'Maintain adequate soil moisture.',
        'Control weed hosts.',
        'Protect natural enemies.',
        'Apply recommended insecticides only when necessary.',
        'Follow integrated pest management.'
      ]
    },

    {
      id: 'onion-maggot',
      name: 'Onion Maggot',
      crop: 'onion',
      category: 'Insect Pest',

      diseaseInformation:
        'Onion maggots are fly larvae that feed on onion roots, bulbs and young seedlings. Severe infestation can cause seedling death, poor establishment and bulb damage.',

      symptoms: [
        'Young seedlings may wilt suddenly.',
        'Roots may show feeding damage.',
        'Bulbs may develop tunnels or feeding injuries.',
        'Affected plants may become yellow.',
        'Plants may be pulled easily from the soil.',
        'Secondary rotting may occur in damaged bulbs.',
        'Severe infestation can reduce plant population and bulb yield.'
      ],

      cause:
        'Damage is caused by larvae of onion-infesting flies that feed on roots and underground bulb tissues.',

      favorableConditions: [
        'Presence of infested crop residues.',
        'Poor field sanitation.',
        'Cool to moderate weather during susceptible crop stages.',
        'Continuous onion cultivation.',
        'Injured bulbs and seedlings.',
        'High pest populations.',
        'Unremoved cull onions.'
      ],

      prevention: [
        'Remove and destroy damaged bulbs and crop residues.',
        'Maintain good field sanitation.',
        'Follow crop rotation.',
        'Avoid planting near heavily infested onion fields where practical.',
        'Use healthy planting material.',
        'Avoid unnecessary plant injury.',
        'Remove volunteer onion plants.'
      ],

      solution: [
        'Remove severely infested plants and bulbs.',
        'Destroy crop residues after harvest.',
        'Use locally recommended registered insecticides when economically justified.',
        'Follow recommended application timing.',
        'Use integrated soil and residue management.'
      ],

      management: [
        'Inspect seedlings and bulb bases.',
        'Monitor plant wilting.',
        'Remove infested plants.',
        'Maintain field sanitation.',
        'Follow suitable crop rotation.',
        'Remove volunteer onions.',
        'Use integrated pest management.'
      ]
    },

    {
      id: 'onion-bulb-mites',
      name: 'Bulb Mites',
      crop: 'onion',
      category: 'Mite Pest',

      diseaseInformation:
        'Bulb mites are tiny pests that feed on onion bulbs and roots. Infestation can weaken plants in the field and cause bulb deterioration during storage, especially when damaged or infected bulbs are present.',

      symptoms: [
        'Roots may become damaged or reduced.',
        'Young plants may show poor growth.',
        'Bulbs may develop soft or damaged tissues.',
        'Outer bulb scales may become discoloured.',
        'Infested bulbs may deteriorate during storage.',
        'Secondary fungal or bacterial decay may occur.',
        'Severe infestation can reduce bulb quality and storage life.'
      ],

      cause:
        'Damage is caused by bulb-feeding mites that infest onion bulbs, roots and plant debris.',

      favorableConditions: [
        'Damaged bulbs.',
        'High soil or storage pest populations.',
        'Poor storage sanitation.',
        'High humidity in storage.',
        'Infected or infested planting material.',
        'Continuous onion cultivation.',
        'Presence of decaying plant material.'
      ],

      prevention: [
        'Use healthy planting material.',
        'Avoid storing damaged bulbs.',
        'Maintain clean storage conditions.',
        'Remove decaying bulbs and crop debris.',
        'Provide suitable storage ventilation.',
        'Follow crop rotation.',
        'Handle bulbs carefully to avoid injuries.'
      ],

      solution: [
        'Remove heavily infested bulbs.',
        'Clean and sanitize storage areas.',
        'Avoid mixing damaged bulbs with healthy produce.',
        'Use locally recommended mite-management practices.',
        'Use approved treatments only when recommended for the crop and storage situation.'
      ],

      management: [
        'Inspect bulbs before storage.',
        'Monitor stored onions regularly.',
        'Remove damaged or infested bulbs.',
        'Maintain suitable storage conditions.',
        'Prevent bulb injuries.',
        'Maintain storage sanitation.',
        'Follow integrated pest-management practices.'
      ]
    },


    // =========================================================
    // TOMATO
    // =========================================================

    {
      id: 'tomato-early-blight',
      name: 'Early Blight',
      crop: 'tomato',
      category: 'Fungal Disease',

      diseaseInformation:
        'Early blight is an important fungal disease of tomato that affects leaves, stems and fruits. Severe infection causes premature defoliation and can reduce fruit size, quality and yield.',

      symptoms: [
        'Small brown spots appear on older leaves.',
        'Lesions develop characteristic concentric rings.',
        'Yellowing may occur around infected areas.',
        'Leaves may dry and fall prematurely.',
        'Dark lesions may occur on stems.',
        'Fruit may develop dark sunken lesions near the stem end.',
        'Severe infection can reduce fruit yield.'
      ],

      cause:
        'Early blight is mainly caused by Alternaria solani.',

      favorableConditions: [
        'Warm and humid weather.',
        'Frequent rainfall.',
        'Long periods of leaf wetness.',
        'Poor field aeration.',
        'Dense crop growth.',
        'Infected crop residues.',
        'Nutritional or water stress.'
      ],

      prevention: [
        'Use healthy and quality-tested seed.',
        'Maintain suitable plant spacing.',
        'Remove infected crop residues.',
        'Avoid overhead irrigation where practical.',
        'Maintain balanced crop nutrition.',
        'Use suitable crop rotation.',
        'Stake plants where appropriate to improve air circulation.'
      ],

      solution: [
        'Remove severely infected leaves.',
        'Improve air circulation.',
        'Use locally recommended registered fungicides when disease pressure is significant.',
        'Follow recommended application timing.',
        'Rotate fungicide modes of action.'
      ],

      management: [
        'Inspect lower leaves regularly.',
        'Monitor disease after rainfall.',
        'Remove infected leaves and debris.',
        'Maintain proper plant spacing.',
        'Avoid prolonged leaf wetness.',
        'Apply recommended fungicide treatment when required.',
        'Follow integrated disease management.'
      ]
    },

    {
      id: 'tomato-late-blight',
      name: 'Late Blight',
      crop: 'tomato',
      category: 'Fungal Disease',

      diseaseInformation:
        'Late blight is a destructive disease of tomato that can affect leaves, stems and fruits. Under cool, wet and humid conditions, the disease can spread rapidly and cause severe crop loss.',

      symptoms: [
        'Water-soaked irregular lesions develop on leaves.',
        'Lesions rapidly become brown or dark.',
        'White fungal-like growth may appear around lesions under humid conditions.',
        'Leaves may collapse and dry rapidly.',
        'Dark lesions may develop on stems.',
        'Fruits may develop firm brown or dark lesions.',
        'Severe infection can rapidly destroy foliage.'
      ],

      cause:
        'Late blight is caused by Phytophthora infestans, an oomycete pathogen.',

      favorableConditions: [
        'Cool and wet weather.',
        'High relative humidity.',
        'Frequent rainfall.',
        'Prolonged leaf wetness.',
        'Dense crop canopy.',
        'Poor air circulation.',
        'Infected plant material.'
      ],

      prevention: [
        'Use healthy planting material.',
        'Avoid prolonged leaf wetness.',
        'Maintain proper plant spacing.',
        'Improve field drainage.',
        'Remove infected plant material.',
        'Avoid planting near heavily infected crops where practical.',
        'Use locally recommended tolerant varieties where available.'
      ],

      solution: [
        'Remove severely infected leaves and plants where practical.',
        'Improve drainage and air circulation.',
        'Use locally recommended registered fungicides or oomycete-management products.',
        'Apply treatments at recommended intervals.',
        'Rotate fungicide modes of action.'
      ],

      management: [
        'Inspect plants frequently during wet weather.',
        'Monitor leaves and fruits.',
        'Remove infected plant material.',
        'Maintain field drainage.',
        'Avoid overhead irrigation where practical.',
        'Use recommended disease-management products promptly when necessary.',
        'Follow integrated disease management.'
      ]
    },

    {
      id: 'tomato-bacterial-wilt',
      name: 'Bacterial Wilt',
      crop: 'tomato',
      category: 'Bacterial Disease',

      diseaseInformation:
        'Bacterial wilt is a serious soil-borne disease of tomato that causes rapid wilting without an initial severe yellowing of leaves. The disease can cause major losses, particularly in warm and wet soils.',

      symptoms: [
        'Plants wilt suddenly during warm weather.',
        'Initially, leaves may remain green despite wilting.',
        'Wilting may progress from younger to older foliage.',
        'The plant may eventually collapse completely.',
        'Brown discoloration may occur inside affected stems.',
        'Bacterial ooze may be observed from infected stem tissues.',
        'Severely affected plants may die rapidly.'
      ],

      cause:
        'Bacterial wilt is caused by Ralstonia solanacearum, a soil-borne bacterial pathogen.',

      favorableConditions: [
        'Warm soil temperatures.',
        'High soil moisture.',
        'Poor field drainage.',
        'Root injuries.',
        'Infested soil.',
        'Continuous cultivation of susceptible solanaceous crops.',
        'Movement of contaminated soil and water.'
      ],

      prevention: [
        'Use healthy disease-free seedlings.',
        'Select well-drained fields.',
        'Follow suitable crop rotation.',
        'Avoid planting in heavily infested soil.',
        'Remove severely infected plants.',
        'Avoid root injuries.',
        'Use locally recommended tolerant varieties or grafted seedlings where available.'
      ],

      solution: [
        'Remove and destroy severely infected plants.',
        'Improve field drainage.',
        'Avoid movement of contaminated soil and water.',
        'Use biological disease-management practices where locally recommended.',
        'Seek agricultural extension advice for heavily infested fields.'
      ],

      management: [
        'Inspect plants for sudden wilting.',
        'Remove infected plants promptly.',
        'Maintain good drainage.',
        'Avoid excessive irrigation.',
        'Follow crop rotation.',
        'Prevent movement of contaminated soil.',
        'Use integrated bacterial-wilt management.'
      ]
    },

    {
      id: 'tomato-bacterial-leaf-spot',
      name: 'Bacterial Leaf Spot',
      crop: 'tomato',
      category: 'Bacterial Disease',

      diseaseInformation:
        'Bacterial leaf spot affects tomato leaves, stems and fruits. The disease can produce numerous small lesions and may reduce foliage quality and fruit marketability under warm and humid conditions.',

      symptoms: [
        'Small dark spots appear on leaves.',
        'Lesions may have yellow halos.',
        'Spots may merge under severe infection.',
        'Leaf margins may become necrotic.',
        'Small raised dark lesions may occur on fruits.',
        'Stems may develop dark spots.',
        'Severe infection can reduce fruit quality and yield.'
      ],

      cause:
        'Bacterial leaf spot is caused by Xanthomonas species that infect tomato tissues.',

      favorableConditions: [
        'Warm and humid weather.',
        'Frequent rainfall.',
        'Overhead irrigation.',
        'Leaf wetness.',
        'Infected seed or seedlings.',
        'Plant wounds.',
        'Dense crop growth.'
      ],

      prevention: [
        'Use disease-free seed and seedlings.',
        'Avoid overhead irrigation where practical.',
        'Maintain proper plant spacing.',
        'Disinfect tools used for pruning.',
        'Remove infected plant residues.',
        'Avoid unnecessary plant injuries.',
        'Maintain field sanitation.'
      ],

      solution: [
        'Remove severely infected plant material.',
        'Improve air circulation.',
        'Use locally recommended registered bacterial-disease management products when appropriate.',
        'Follow recommended application intervals.',
        'Avoid working in wet crops to reduce disease spread.'
      ],

      management: [
        'Inspect leaves and fruits regularly.',
        'Monitor disease after rainfall.',
        'Remove infected plant debris.',
        'Maintain good field sanitation.',
        'Avoid unnecessary leaf wetness.',
        'Use recommended disease-management products when necessary.',
        'Follow integrated bacterial disease management.'
      ]
    },

    {
      id: 'tomato-fusarium-wilt',
      name: 'Fusarium Wilt',
      crop: 'tomato',
      category: 'Fungal Disease',

      diseaseInformation:
        'Fusarium wilt is a soil-borne fungal disease that affects the vascular system of tomato plants. Infection causes yellowing, wilting and reduced growth, and severe cases may result in plant death.',

      symptoms: [
        'Lower leaves may become yellow.',
        'Leaves may wilt during hot periods.',
        'Wilting may gradually progress upward.',
        'One side of the plant may show symptoms initially.',
        'Stem tissues may show brown vascular discoloration.',
        'Plants may become stunted.',
        'Severely affected plants may die.'
      ],

      cause:
        'Fusarium wilt is caused by Fusarium oxysporum f. sp. lycopersici.',

      favorableConditions: [
        'Warm soil temperatures.',
        'Infested soil.',
        'Continuous tomato cultivation.',
        'Root injury.',
        'Poor crop rotation.',
        'Movement of contaminated soil.',
        'Susceptible varieties.'
      ],

      prevention: [
        'Use healthy disease-free seedlings.',
        'Use resistant varieties where available.',
        'Follow suitable crop rotation.',
        'Avoid moving contaminated soil.',
        'Maintain good field sanitation.',
        'Avoid root injuries.',
        'Use clean nursery media.'
      ],

      solution: [
        'Remove severely affected plants.',
        'Improve field sanitation.',
        'Use resistant or tolerant varieties for subsequent crops.',
        'Use locally recommended biological soil-management practices.',
        'Use registered fungicide or soil treatments only where locally recommended.'
      ],

      management: [
        'Inspect plants for yellowing and wilting.',
        'Remove infected plants promptly.',
        'Maintain field sanitation.',
        'Follow crop rotation.',
        'Use resistant varieties.',
        'Avoid movement of infested soil.',
        'Use integrated soil-borne disease management.'
      ]
    },

    {
      id: 'tomato-leaf-curl-virus',
      name: 'Tomato Leaf Curl Virus',
      crop: 'tomato',
      category: 'Viral Disease',

      diseaseInformation:
        'Tomato leaf curl is an important viral disease that causes severe distortion and stunting of tomato plants. It is commonly associated with whitefly transmission and can significantly reduce flowering, fruit set and yield.',

      symptoms: [
        'Young leaves curl upward or downward.',
        'Leaves become smaller and distorted.',
        'Leaves may become thickened or leathery.',
        'Plants may show severe stunting.',
        'Internodes may become shortened.',
        'Flower development and fruit set may be reduced.',
        'Severely infected plants may produce very few marketable fruits.'
      ],

      cause:
        'Tomato leaf curl disease is caused by begomoviruses that are primarily transmitted by the whitefly Bemisia tabaci.',

      favorableConditions: [
        'High whitefly populations.',
        'Warm weather.',
        'Presence of infected tomato plants.',
        'Presence of alternate weed hosts.',
        'Continuous cultivation of tomato.',
        'Poor field sanitation.',
        'Dense crop growth.'
      ],

      prevention: [
        'Use healthy disease-free seedlings.',
        'Monitor and manage whitefly populations.',
        'Remove severely infected plants early.',
        'Control important weed hosts.',
        'Use resistant or tolerant varieties where available.',
        'Use suitable insect-proof nursery practices.',
        'Maintain field sanitation.'
      ],

      solution: [
        'Remove severely infected plants where practical.',
        'Manage whitefly vectors using integrated pest-management methods.',
        'Control important weed hosts.',
        'Use locally recommended registered insecticides when whitefly populations are damaging.',
        'Avoid unnecessary repeated insecticide applications.'
      ],

      management: [
        'Inspect young plants regularly.',
        'Monitor whitefly populations.',
        'Remove infected plants early.',
        'Control weed hosts.',
        'Use tolerant varieties where available.',
        'Protect natural enemies.',
        'Follow integrated virus and vector management.'
      ]
    },

    {
      id: 'tomato-fruit-borer',
      name: 'Fruit Borer',
      crop: 'tomato',
      category: 'Insect Pest',

      diseaseInformation:
        'Tomato fruit borer is a major insect pest that damages flowers and fruits. Larvae bore into developing fruits and feed internally, causing direct yield loss and secondary fruit rotting.',

      symptoms: [
        'Small holes appear on tomato fruits.',
        'Larvae may be visible on or inside fruits.',
        'Frass may occur around feeding holes.',
        'Fruits may develop internal feeding damage.',
        'Damaged fruits may rot due to secondary infections.',
        'Flowers and young fruits may also be attacked.',
        'Severe infestation can cause major marketable yield loss.'
      ],

      cause:
        'Damage is mainly caused by larvae of Helicoverpa armigera and related fruit-boring caterpillars.',

      favorableConditions: [
        'Warm weather.',
        'High pest populations.',
        'Continuous tomato cultivation.',
        'Presence of alternate host plants.',
        'Poor field monitoring.',
        'Dense crop growth.',
        'Presence of flowering weeds.'
      ],

      prevention: [
        'Monitor plants regularly from flowering onwards.',
        'Use pheromone traps where recommended.',
        'Remove and destroy heavily infested fruits.',
        'Remove important weed hosts.',
        'Encourage natural enemies.',
        'Use suitable crop rotation.',
        'Avoid unnecessary broad-spectrum insecticide use.'
      ],

      solution: [
        'Collect and destroy infested fruits and larvae.',
        'Use biological control where suitable.',
        'Use locally recommended registered insecticides when pest levels are damaging.',
        'Rotate insecticide modes of action.',
        'Apply treatment at the recommended crop stage.'
      ],

      management: [
        'Inspect flowers and fruits regularly.',
        'Monitor adult moth activity.',
        'Use recommended pheromone traps where appropriate.',
        'Remove damaged fruits.',
        'Protect parasitoids and predators.',
        'Apply insecticides only when economically justified.',
        'Follow integrated pest management.'
      ]
    },

    {
      id: 'tomato-whitefly',
      name: 'Whitefly',
      crop: 'tomato',
      category: 'Insect Pest',

      diseaseInformation:
        'Whiteflies are important sap-sucking pests of tomato and can also transmit tomato leaf curl viruses. Heavy infestation weakens plants and may cause honeydew and sooty mould formation.',

      symptoms: [
        'Small white insects fly from leaves when disturbed.',
        'Nymphs occur on the underside of leaves.',
        'Leaves may become yellow.',
        'Honeydew may accumulate on leaves.',
        'Sooty mould may develop.',
        'Plants may show reduced vigour.',
        'Virus-like symptoms may occur in infected plants.'
      ],

      cause:
        'Damage is caused by whiteflies feeding on plant sap. Bemisia tabaci can also transmit important begomoviruses affecting tomato.',

      favorableConditions: [
        'Warm weather.',
        'Dry to moderately humid conditions.',
        'Dense crop growth.',
        'Excessive nitrogen.',
        'Presence of weeds and alternate hosts.',
        'Reduced natural-enemy activity.',
        'Continuous availability of young foliage.'
      ],

      prevention: [
        'Use healthy seedlings.',
        'Inspect leaf undersides regularly.',
        'Use suitable nursery protection.',
        'Remove weed hosts.',
        'Conserve natural enemies.',
        'Avoid excessive nitrogen.',
        'Monitor virus symptoms.'
      ],

      solution: [
        'Remove severely infected plants where practical.',
        'Use biological control where suitable.',
        'Use locally recommended registered insecticides when whitefly populations are damaging.',
        'Rotate insecticide modes of action.',
        'Avoid unnecessary pesticide applications.'
      ],

      management: [
        'Monitor adults and nymphs.',
        'Inspect young leaves regularly.',
        'Control weed hosts.',
        'Protect beneficial insects.',
        'Monitor for tomato leaf curl symptoms.',
        'Use recommended vector-control measures.',
        'Follow integrated pest management.'
      ]
    },


    // =========================================================
    // BRINJAL
    // =========================================================

    {
      id: 'brinjal-phomopsis-fruit-rot',
      name: 'Phomopsis Fruit Rot',
      crop: 'brinjal',
      category: 'Fungal Disease',

      diseaseInformation:
        'Phomopsis fruit rot is an important fungal disease of brinjal that mainly affects fruits and can also infect leaves and stems. Fruit infection causes rotting, poor market quality and yield loss.',

      symptoms: [
        'Small pale or brown spots appear on fruits.',
        'Lesions gradually enlarge.',
        'Affected fruit tissues become soft and rotten.',
        'Dark fungal structures may develop on older lesions.',
        'Leaves may develop spots under severe infection.',
        'Infected fruits may become shrivelled.',
        'Severe disease can cause substantial fruit loss.'
      ],

      cause:
        'Phomopsis fruit rot is caused by Phomopsis vexans, also known as Diaporthe vexans.',

      favorableConditions: [
        'Warm and humid weather.',
        'Frequent rainfall.',
        'High relative humidity.',
        'Fruit injuries.',
        'Dense crop growth.',
        'Infected crop residues.',
        'Poor field sanitation.'
      ],

      prevention: [
        'Use healthy seed and seedlings.',
        'Remove infected fruits and crop debris.',
        'Avoid unnecessary fruit injuries.',
        'Maintain suitable plant spacing.',
        'Follow crop rotation.',
        'Maintain good field sanitation.',
        'Avoid excessive irrigation.'
      ],

      solution: [
        'Remove and destroy infected fruits.',
        'Remove infected plant debris.',
        'Use locally recommended registered fungicides when disease pressure is significant.',
        'Improve crop aeration.',
        'Follow recommended application intervals.'
      ],

      management: [
        'Inspect fruits regularly.',
        'Remove diseased fruits.',
        'Monitor disease after rainfall.',
        'Maintain field sanitation.',
        'Avoid fruit injury.',
        'Use recommended fungicide management when necessary.',
        'Follow integrated disease management.'
      ]
    },

    {
      id: 'brinjal-little-leaf',
      name: 'Little Leaf',
      crop: 'brinjal',
      category: 'Phytoplasma Disease',

      diseaseInformation:
        'Brinjal little leaf is an important phytoplasma-associated disease that causes severe changes in leaf and shoot development. Affected plants become bushy and produce many small leaves with poor or absent fruit production.',

      symptoms: [
        'Leaves become unusually small.',
        'Leaves may become narrow and pale green.',
        'Internodes become shortened.',
        'Plants develop a bushy appearance.',
        'Excessive shoot growth may occur.',
        'Flowers may become abnormal or fail to develop normally.',
        'Affected plants may produce few or no marketable fruits.'
      ],

      cause:
        'Little leaf is associated with phytoplasmas and is commonly transmitted by leafhopper vectors.',

      favorableConditions: [
        'High leafhopper populations.',
        'Presence of infected plants.',
        'Presence of weed hosts.',
        'Warm weather.',
        'Continuous cultivation of solanaceous crops.',
        'Poor field sanitation.',
        'Presence of alternate phytoplasma hosts.'
      ],

      prevention: [
        'Use healthy seedlings.',
        'Remove infected plants early.',
        'Control important weed hosts.',
        'Monitor leafhopper populations.',
        'Use locally recommended tolerant varieties where available.',
        'Avoid continuous cultivation of susceptible crops.',
        'Maintain field sanitation.'
      ],

      solution: [
        'Remove severely affected plants.',
        'Manage leafhopper vectors using integrated pest management.',
        'Control weed hosts.',
        'Avoid retaining infected plants in the field.',
        'Seek agricultural extension advice when incidence is high.'
      ],

      management: [
        'Inspect young leaves and shoots.',
        'Monitor for abnormal leaf size.',
        'Remove infected plants.',
        'Monitor leafhoppers.',
        'Control weed hosts.',
        'Protect natural enemies.',
        'Follow integrated phytoplasma and vector management.'
      ]
    },

    {
      id: 'brinjal-bacterial-wilt',
      name: 'Bacterial Wilt',
      crop: 'brinjal',
      category: 'Bacterial Disease',

      diseaseInformation:
        'Bacterial wilt is a serious soil-borne disease of brinjal that causes rapid wilting and plant death. It can persist in soil and spread through infected planting material and contaminated water.',

      symptoms: [
        'Plants wilt suddenly.',
        'Leaves may initially remain green.',
        'Wilting progresses rapidly under warm conditions.',
        'Stem tissues may show brown discoloration.',
        'Bacterial ooze may be present in infected stems.',
        'Affected plants may collapse completely.',
        'Severe infection can cause major plant losses.'
      ],

      cause:
        'Bacterial wilt is caused by Ralstonia solanacearum.',

      favorableConditions: [
        'Warm soil temperatures.',
        'High soil moisture.',
        'Poor drainage.',
        'Root injuries.',
        'Infested soil.',
        'Continuous solanaceous crop cultivation.',
        'Movement of contaminated irrigation water.'
      ],

      prevention: [
        'Use healthy disease-free seedlings.',
        'Use resistant or tolerant varieties where available.',
        'Select well-drained fields.',
        'Follow suitable crop rotation.',
        'Avoid root injuries.',
        'Remove infected plants promptly.',
        'Prevent movement of contaminated soil and water.'
      ],

      solution: [
        'Remove and destroy infected plants.',
        'Improve field drainage.',
        'Avoid excessive irrigation.',
        'Use locally recommended biological disease-management practices.',
        'Seek extension advice for heavily infested fields.'
      ],

      management: [
        'Inspect plants for sudden wilting.',
        'Remove infected plants.',
        'Maintain good drainage.',
        'Follow crop rotation.',
        'Avoid movement of contaminated soil.',
        'Use tolerant varieties where available.',
        'Follow integrated bacterial-wilt management.'
      ]
    },

    {
      id: 'brinjal-damping-off',
      name: 'Damping Off',
      crop: 'brinjal',
      category: 'Fungal Disease',

      diseaseInformation:
        'Damping off affects brinjal seedlings in nursery beds and can cause severe seedling mortality. The disease is favoured by excessive moisture, poor drainage and overcrowded seedlings.',

      symptoms: [
        'Seeds may decay before emergence.',
        'Young seedlings develop water-soaked lesions.',
        'The stem near the soil surface becomes thin.',
        'Seedlings bend and collapse.',
        'Roots may become brown and decayed.',
        'Dead seedlings occur in patches.',
        'Severe infection can destroy nursery seedlings.'
      ],

      cause:
        'Damping off is caused by soil- and seed-borne pathogens including Pythium, Rhizoctonia and Fusarium species.',

      favorableConditions: [
        'Excessive soil moisture.',
        'Poor nursery drainage.',
        'Overcrowded seedlings.',
        'Heavy soil.',
        'Poor air circulation.',
        'Contaminated nursery media.',
        'Over-irrigation.'
      ],

      prevention: [
        'Use healthy quality-tested seed.',
        'Prepare raised and well-drained nursery beds.',
        'Use recommended seed-treatment practices.',
        'Avoid excessive irrigation.',
        'Maintain proper seed spacing.',
        'Remove diseased seedlings.',
        'Maintain nursery sanitation.'
      ],

      solution: [
        'Remove severely affected seedlings.',
        'Improve drainage.',
        'Reduce excessive irrigation.',
        'Use recommended biological or chemical seed treatments.',
        'Follow locally recommended nursery disease-management practices.'
      ],

      management: [
        'Inspect seedlings regularly.',
        'Monitor nursery moisture.',
        'Remove infected seedlings.',
        'Maintain proper drainage.',
        'Avoid overcrowding.',
        'Use healthy treated seed.',
        'Maintain nursery hygiene.'
      ]
    },

    {
      id: 'brinjal-alternaria-leaf-spot',
      name: 'Alternaria Leaf Spot',
      crop: 'brinjal',
      category: 'Fungal Disease',

      diseaseInformation:
        'Alternaria leaf spot affects brinjal foliage and can reduce photosynthetic activity. Severe infection may result in premature leaf drying and reduced plant vigour.',

      symptoms: [
        'Small brown spots develop on leaves.',
        'Lesions may show concentric rings.',
        'Spots may enlarge and merge.',
        'Yellowing may occur around lesions.',
        'Older leaves are commonly affected first.',
        'Severely infected leaves may dry prematurely.',
        'Heavy infection can reduce plant growth and yield.'
      ],

      cause:
        'Alternaria leaf spot is caused by Alternaria species that infect brinjal foliage.',

      favorableConditions: [
        'Warm and humid weather.',
        'Frequent rainfall.',
        'Long periods of leaf wetness.',
        'Dense crop canopy.',
        'Poor field aeration.',
        'Infected crop residues.',
        'Plant stress.'
      ],

      prevention: [
        'Use healthy seed and seedlings.',
        'Maintain suitable plant spacing.',
        'Remove infected residues.',
        'Avoid excessive irrigation.',
        'Maintain balanced crop nutrition.',
        'Follow suitable crop rotation.',
        'Improve field aeration.'
      ],

      solution: [
        'Remove severely infected leaves.',
        'Improve air circulation.',
        'Use locally recommended registered fungicides when disease pressure is significant.',
        'Follow recommended application intervals.',
        'Rotate fungicide modes of action.'
      ],

      management: [
        'Monitor lower leaves regularly.',
        'Inspect plants after rainfall.',
        'Remove infected leaves and debris.',
        'Maintain proper plant spacing.',
        'Avoid prolonged leaf wetness.',
        'Use recommended fungicides when necessary.',
        'Follow integrated disease management.'
      ]
    },

    {
      id: 'brinjal-shoot-fruit-borer',
      name: 'Shoot and Fruit Borer',
      crop: 'brinjal',
      category: 'Insect Pest',

      diseaseInformation:
        'Brinjal shoot and fruit borer is one of the most damaging insect pests of brinjal. Larvae bore into young shoots and fruits, causing wilting of shoots and internal fruit damage that reduces marketable yield.',

      symptoms: [
        'Young shoots suddenly wilt.',
        'Small holes may be visible on shoots.',
        'Larvae may be present inside shoots.',
        'Fruits develop small holes.',
        'Frass may be visible around entry holes.',
        'Damaged fruits may rot.',
        'Severe infestation can make a large proportion of fruits unmarketable.'
      ],

      cause:
        'Damage is caused by larvae of Leucinodes orbonalis, commonly known as the brinjal shoot and fruit borer.',

      favorableConditions: [
        'Warm weather.',
        'Continuous brinjal cultivation.',
        'High pest populations.',
        'Dense crop growth.',
        'Presence of alternate host plants.',
        'Poor field sanitation.',
        'Delayed removal of infested shoots and fruits.'
      ],

      prevention: [
        'Inspect shoots and fruits regularly.',
        'Remove and destroy infested shoots.',
        'Remove damaged fruits.',
        'Use pheromone traps where recommended.',
        'Maintain field sanitation.',
        'Remove alternate host weeds.',
        'Use suitable crop rotation.'
      ],

      solution: [
        'Collect and destroy infested shoots and fruits.',
        'Use pheromone traps as part of integrated management.',
        'Encourage parasitoids and predators.',
        'Use locally recommended registered insecticides when pest pressure is significant.',
        'Rotate insecticide modes of action.'
      ],

      management: [
        'Inspect plants at least regularly during crop growth.',
        'Monitor young shoots.',
        'Remove infested shoots and fruits.',
        'Use recommended pheromone traps.',
        'Protect natural enemies.',
        'Apply insecticides only when economically justified.',
        'Follow integrated pest management.'
      ]
    },

    {
      id: 'brinjal-aphid',
      name: 'Aphid',
      crop: 'brinjal',
      category: 'Insect Pest',

      diseaseInformation:
        'Aphids are small sap-sucking insects that infest tender shoots and leaves of brinjal. Heavy infestation can cause leaf curling, yellowing, reduced plant vigour and honeydew accumulation.',

      symptoms: [
        'Aphid colonies occur on tender shoots and leaves.',
        'Leaves may curl or become distorted.',
        'Young shoots may show reduced growth.',
        'Leaves may turn yellow.',
        'Honeydew may accumulate on leaves.',
        'Sooty mould may develop.',
        'Severe infestation can weaken plants.'
      ],

      cause:
        'Damage is caused by aphids feeding on plant sap.',

      favorableConditions: [
        'Moderate temperatures.',
        'Dense plant growth.',
        'Excessive nitrogen.',
        'Presence of weed hosts.',
        'Reduced natural-enemy activity.',
        'Ant activity.',
        'Continuous tender plant growth.'
      ],

      prevention: [
        'Monitor tender shoots regularly.',
        'Avoid excessive nitrogen.',
        'Remove weed hosts.',
        'Conserve ladybird beetles and other natural enemies.',
        'Maintain balanced nutrition.',
        'Manage ants where necessary.',
        'Avoid unnecessary broad-spectrum insecticides.'
      ],

      solution: [
        'Remove heavily infested plant parts where practical.',
        'Encourage biological control.',
        'Use locally recommended registered insecticides when infestation is significant.',
        'Rotate insecticide modes of action.',
        'Avoid unnecessary pesticide applications.'
      ],

      management: [
        'Inspect young shoots and leaf undersides.',
        'Monitor aphid colonies.',
        'Control weed hosts.',
        'Protect natural enemies.',
        'Maintain balanced nutrition.',
        'Manage ants where required.',
        'Use integrated pest management.'
      ]
    },

    {
      id: 'brinjal-whitefly',
      name: 'Whitefly',
      crop: 'brinjal',
      category: 'Insect Pest',

      diseaseInformation:
        'Whiteflies are sap-sucking pests of brinjal that can weaken plants and produce honeydew and sooty mould. They can also contribute to the spread of certain plant viruses.',

      symptoms: [
        'Small white insects fly from leaves when disturbed.',
        'Nymphs occur on the underside of leaves.',
        'Leaves may become yellow.',
        'Honeydew may appear on leaf surfaces.',
        'Sooty mould may develop.',
        'Plants may show reduced vigour.',
        'Virus-like symptoms may occur in affected crops.'
      ],

      cause:
        'Damage is caused by whiteflies feeding on plant sap. Some whitefly species can also transmit plant viruses.',

      favorableConditions: [
        'Warm weather.',
        'Dry to moderately humid conditions.',
        'Dense crop growth.',
        'Excessive nitrogen.',
        'Presence of weeds and alternate hosts.',
        'Reduced natural-enemy activity.',
        'Continuous tender foliage.'
      ],

      prevention: [
        'Inspect leaf undersides regularly.',
        'Use healthy seedlings.',
        'Remove important weed hosts.',
        'Conserve parasitoids and predators.',
        'Avoid excessive nitrogen.',
        'Maintain field sanitation.',
        'Monitor for virus symptoms.'
      ],

      solution: [
        'Remove severely affected plants where practical.',
        'Use biological control where suitable.',
        'Use locally recommended registered insecticides when whitefly populations are damaging.',
        'Rotate insecticide modes of action.',
        'Avoid unnecessary broad-spectrum pesticide applications.'
      ],

      management: [
        'Monitor adult and immature whiteflies.',
        'Inspect young leaves regularly.',
        'Control weed hosts.',
        'Protect natural enemies.',
        'Monitor for associated virus symptoms.',
        'Use recommended vector-management practices.',
        'Follow integrated pest management.'
      ]
    },


    // =========================================================
    // BITTER GOURD
    // =========================================================

    {
      id: 'bitter-gourd-powdery-mildew',
      name: 'Powdery Mildew',
      crop: 'bitter-gourd',
      category: 'Fungal Disease',

      diseaseInformation:
        'Powdery mildew is a common fungal disease of bitter gourd that produces white powdery growth on leaves. Severe infection can reduce photosynthesis, cause premature leaf ageing and affect fruit production.',

      symptoms: [
        'White powdery patches appear on leaves.',
        'Powdery growth may spread over leaf surfaces.',
        'Leaves may develop yellow patches.',
        'Infected leaves may become distorted.',
        'Severely infected leaves may dry prematurely.',
        'Vines may lose vigour.',
        'Heavy infection can reduce flowering and fruit yield.'
      ],

      cause:
        'Powdery mildew is caused by powdery mildew fungi that grow on the surface of bitter gourd foliage.',

      favorableConditions: [
        'Warm weather.',
        'Moderate humidity.',
        'Poor air circulation.',
        'Dense vine growth.',
        'Excessive nitrogen.',
        'Shaded crop conditions.',
        'Susceptible varieties.'
      ],

      prevention: [
        'Provide adequate spacing between plants.',
        'Train vines properly to improve air circulation.',
        'Avoid excessive nitrogen.',
        'Remove severely infected leaves.',
        'Maintain balanced crop nutrition.',
        'Use locally recommended tolerant varieties where available.',
        'Avoid excessive shade.'
      ],

      solution: [
        'Remove severely infected leaves.',
        'Improve vine aeration.',
        'Use locally recommended registered fungicides when disease pressure is significant.',
        'Follow recommended application intervals.',
        'Rotate fungicide modes of action.'
      ],

      management: [
        'Inspect leaves regularly.',
        'Monitor disease progression.',
        'Train vines for better ventilation.',
        'Remove infected foliage.',
        'Avoid excessive nitrogen.',
        'Use recommended fungicide treatment when necessary.',
        'Follow integrated disease management.'
      ]
    },

    {
      id: 'bitter-gourd-downy-mildew',
      name: 'Downy Mildew',
      crop: 'bitter-gourd',
      category: 'Fungal Disease',

      diseaseInformation:
        'Downy mildew affects bitter gourd leaves and can spread rapidly during humid and wet conditions. Severe infection causes yellowing, leaf drying and reduced fruit production.',

      symptoms: [
        'Yellow angular spots appear on leaves.',
        'Lesions may be limited by leaf veins.',
        'Greyish or purplish fungal growth may appear on the underside of leaves.',
        'Leaves may become yellow and dry.',
        'Severely affected leaves may fall prematurely.',
        'Vine growth may be reduced.',
        'Heavy infection can reduce fruit yield.'
      ],

      cause:
        'Downy mildew is caused by Pseudoperonospora cubensis, an oomycete pathogen that affects cucurbit crops.',

      favorableConditions: [
        'Cool to moderate humid weather.',
        'Frequent rainfall.',
        'High relative humidity.',
        'Long periods of leaf wetness.',
        'Dense vine canopy.',
        'Poor air circulation.',
        'Excessive irrigation.'
      ],

      prevention: [
        'Provide good vine spacing.',
        'Train vines to improve air circulation.',
        'Avoid excessive irrigation.',
        'Reduce prolonged leaf wetness.',
        'Remove severely infected leaves.',
        'Maintain field sanitation.',
        'Use locally recommended tolerant varieties where available.'
      ],

      solution: [
        'Remove severely infected leaves.',
        'Improve crop ventilation.',
        'Use locally recommended registered fungicides or oomycete-management products.',
        'Follow recommended application timing.',
        'Rotate fungicide modes of action.'
      ],

      management: [
        'Inspect leaves regularly.',
        'Monitor disease after rainfall.',
        'Maintain good vine aeration.',
        'Remove heavily infected foliage.',
        'Avoid excessive irrigation.',
        'Apply recommended disease-management products when necessary.',
        'Follow integrated disease management.'
      ]
    },

    {
      id: 'bitter-gourd-anthracnose',
      name: 'Anthracnose',
      crop: 'bitter-gourd',
      category: 'Fungal Disease',

      diseaseInformation:
        'Anthracnose is a fungal disease that affects bitter gourd leaves, stems and fruits. Infection produces dark lesions and can cause fruit decay and significant market-quality losses.',

      symptoms: [
        'Small yellowish or brown spots develop on leaves.',
        'Lesions may become dark and sunken.',
        'Stem lesions may develop under severe infection.',
        'Fruits may develop circular sunken spots.',
        'Fruit lesions may enlarge rapidly during wet weather.',
        'Infected fruits may rot.',
        'Severe disease can reduce marketable yield.'
      ],

      cause:
        'Anthracnose is caused by Colletotrichum species that infect bitter gourd tissues.',

      favorableConditions: [
        'Warm and humid weather.',
        'Frequent rainfall.',
        'Long periods of wetness.',
        'Fruit injuries.',
        'Dense vine growth.',
        'Poor field sanitation.',
        'Infected crop residues.'
      ],

      prevention: [
        'Use healthy quality-tested seed.',
        'Maintain good field sanitation.',
        'Avoid fruit injuries.',
        'Provide suitable plant spacing.',
        'Train vines properly.',
        'Remove infected fruits and plant debris.',
        'Follow suitable crop rotation.'
      ],

      solution: [
        'Remove infected fruits and leaves.',
        'Improve crop aeration.',
        'Use locally recommended registered fungicides when disease pressure is significant.',
        'Follow recommended application intervals.',
        'Rotate fungicide modes of action.'
      ],

      management: [
        'Inspect leaves and fruits regularly.',
        'Remove infected fruits promptly.',
        'Monitor disease after rainfall.',
        'Maintain good vine ventilation.',
        'Remove infected crop debris.',
        'Use recommended fungicide management when necessary.',
        'Follow integrated disease management.'
      ]
    },

    {
      id: 'bitter-gourd-fusarium-wilt',
      name: 'Fusarium Wilt',
      crop: 'bitter-gourd',
      category: 'Fungal Disease',

      diseaseInformation:
        'Fusarium wilt is a soil-borne fungal disease that affects bitter gourd roots and vascular tissues. Infection causes yellowing, wilting and reduced vine growth and may result in plant death.',

      symptoms: [
        'Lower leaves may become yellow.',
        'Vines may wilt during hot periods.',
        'Wilting may progress gradually.',
        'Roots may become discoloured.',
        'Stem vascular tissues may show brown discoloration.',
        'Plants may become stunted.',
        'Severely affected vines may die.'
      ],

      cause:
        'Fusarium wilt is caused by Fusarium species that survive in soil and infect plant roots.',

      favorableConditions: [
        'Warm soil temperatures.',
        'Infested soil.',
        'Root injuries.',
        'Continuous cucurbit cultivation.',
        'Poor crop rotation.',
        'Plant stress.',
        'Movement of contaminated soil.'
      ],

      prevention: [
        'Use healthy seed and seedlings.',
        'Follow suitable crop rotation.',
        'Use clean nursery media.',
        'Avoid root injuries.',
        'Maintain good field sanitation.',
        'Improve soil health.',
        'Use locally recommended tolerant varieties or grafted plants where available.'
      ],

      solution: [
        'Remove severely affected plants.',
        'Improve soil and moisture management.',
        'Use locally recommended biological disease-management practices.',
        'Avoid planting susceptible crops repeatedly in heavily infested fields.',
        'Use registered soil or fungicide treatments only when locally recommended.'
      ],

      management: [
        'Monitor plants for yellowing and wilting.',
        'Inspect roots of affected vines.',
        'Remove infected plants.',
        'Follow suitable crop rotation.',
        'Maintain soil health.',
        'Avoid root injuries.',
        'Use integrated soil-borne disease management.'
      ]
    },

    {
      id: 'bitter-gourd-cercospora-leaf-spot',
      name: 'Cercospora Leaf Spot',
      crop: 'bitter-gourd',
      category: 'Fungal Disease',

      diseaseInformation:
        'Cercospora leaf spot affects bitter gourd foliage and can reduce photosynthetic activity. Severe infection causes extensive leaf spotting, premature leaf drying and reduced vine productivity.',

      symptoms: [
        'Small circular spots develop on leaves.',
        'Lesions may have brown margins.',
        'Centres of older lesions may become greyish.',
        'Multiple spots may occur on older foliage.',
        'Lesions may enlarge and merge.',
        'Severely infected leaves may dry prematurely.',
        'Heavy infection can reduce fruit production.'
      ],

      cause:
        'Cercospora leaf spot is caused by Cercospora species that infect bitter gourd leaves.',

      favorableConditions: [
        'Warm humid weather.',
        'Frequent rainfall.',
        'High relative humidity.',
        'Long periods of leaf wetness.',
        'Dense vine canopy.',
        'Poor air circulation.',
        'Infected plant residues.'
      ],

      prevention: [
        'Use healthy seed.',
        'Maintain proper plant spacing.',
        'Train vines to improve air circulation.',
        'Remove infected plant residues.',
        'Avoid excessive irrigation.',
        'Maintain balanced nutrition.',
        'Follow suitable crop rotation.'
      ],

      solution: [
        'Remove severely infected leaves.',
        'Improve crop ventilation.',
        'Use locally recommended registered fungicides when disease severity warrants treatment.',
        'Follow recommended application intervals.',
        'Rotate fungicide modes of action.'
      ],

      management: [
        'Inspect foliage regularly.',
        'Monitor disease after rainfall.',
        'Remove infected leaves and debris.',
        'Maintain good vine ventilation.',
        'Avoid prolonged leaf wetness.',
        'Use recommended fungicide treatment when necessary.',
        'Follow integrated disease management.'
      ]
    },

    {
      id: 'bitter-gourd-fruit-fly',
      name: 'Fruit Fly',
      crop: 'bitter-gourd',
      category: 'Insect Pest',

      diseaseInformation:
        'Fruit flies are major pests of bitter gourd and other cucurbit crops. Adult females lay eggs in developing fruits and the larvae feed inside the fruit, causing rotting and severe marketable yield loss.',

      symptoms: [
        'Small puncture marks appear on fruits.',
        'Egg-laying spots may become dark or sunken.',
        'Larvae feed inside developing fruits.',
        'Fruit tissues become soft and rotten.',
        'Affected fruits may develop foul odour.',
        'Premature fruit drop may occur.',
        'Severe infestation can make a large proportion of fruits unmarketable.'
      ],

      cause:
        'Damage is caused by fruit fly species whose larvae feed inside developing cucurbit fruits.',

      favorableConditions: [
        'Warm weather.',
        'High humidity.',
        'Availability of mature fruits.',
        'Poor field sanitation.',
        'Uncollected damaged fruits.',
        'Continuous cucurbit cultivation.',
        'High adult fruit-fly populations.'
      ],

      prevention: [
        'Collect and destroy infested fruits regularly.',
        'Do not leave damaged fruits in the field.',
        'Use recommended fruit-fly traps.',
        'Maintain field sanitation.',
        'Harvest fruits at suitable intervals.',
        'Use suitable crop rotation.',
        'Avoid continuous cucurbit cultivation where practical.'
      ],

      solution: [
        'Remove and destroy infested fruits.',
        'Use recommended bait traps or lure traps.',
        'Use locally recommended bait sprays where appropriate.',
        'Use biological control where suitable.',
        'Follow integrated fruit-fly management practices.'
      ],

      management: [
        'Inspect fruits regularly.',
        'Remove infested fruits immediately.',
        'Use recommended traps.',
        'Maintain field sanitation.',
        'Monitor adult fruit-fly populations.',
        'Harvest fruits regularly.',
        'Follow integrated pest management.'
      ]
    },

    {
      id: 'bitter-gourd-aphid',
      name: 'Aphid',
      crop: 'bitter-gourd',
      category: 'Insect Pest',

      diseaseInformation:
        'Aphids are sap-sucking insects that colonize tender shoots and leaves of bitter gourd. Heavy infestation can cause leaf curling, yellowing, reduced vine growth and honeydew accumulation.',

      symptoms: [
        'Aphid colonies occur on tender shoots.',
        'Leaves may curl or become distorted.',
        'Young shoots may show reduced growth.',
        'Leaves may turn yellow.',
        'Honeydew may accumulate on leaves.',
        'Sooty mould may develop.',
        'Severe infestation can weaken vines and reduce fruit production.'
      ],

      cause:
        'Damage is caused by aphids feeding on plant sap. Some aphid species can also transmit plant viruses.',

      favorableConditions: [
        'Moderate temperatures.',
        'Dense vine growth.',
        'Excessive nitrogen.',
        'Presence of weeds.',
        'Reduced natural-enemy activity.',
        'Ant activity.',
        'Continuous tender plant growth.'
      ],

      prevention: [
        'Monitor young shoots regularly.',
        'Avoid excessive nitrogen fertilization.',
        'Remove important weed hosts.',
        'Conserve ladybird beetles and other natural enemies.',
        'Maintain balanced nutrition.',
        'Manage ants where necessary.',
        'Avoid unnecessary broad-spectrum insecticide use.'
      ],

      solution: [
        'Remove heavily infested shoots where practical.',
        'Encourage biological control.',
        'Use locally recommended registered insecticides when infestation becomes significant.',
        'Rotate insecticide modes of action.',
        'Avoid unnecessary pesticide applications.'
      ],

      management: [
        'Inspect shoots and leaf undersides.',
        'Monitor aphid colonies.',
        'Control weed hosts.',
        'Protect natural enemies.',
        'Maintain balanced crop nutrition.',
        'Manage ants where required.',
        'Use integrated pest-management practices.'
      ]
    },

    {
      id: 'bitter-gourd-red-pumpkin-beetle',
      name: 'Red Pumpkin Beetle',
      crop: 'bitter-gourd',
      category: 'Insect Pest',

      diseaseInformation:
        'Red pumpkin beetle is an important pest of cucurbit crops. Adult beetles feed on leaves and young plants, while severe infestation can cause extensive defoliation and poor crop establishment.',

      symptoms: [
        'Small holes appear on young leaves.',
        'Beetles may be visible on foliage.',
        'Leaves may become heavily damaged.',
        'Young seedlings may be severely defoliated.',
        'Growing points may be damaged.',
        'Plants may become weak or stunted.',
        'Severe infestation can reduce crop establishment and yield.'
      ],

      cause:
        'Damage is caused by red pumpkin beetles that feed on cucurbit leaves and young plant tissues.',

      favorableConditions: [
        'Warm weather.',
        'Young crop stages.',
        'Presence of cucurbit weeds and alternate hosts.',
        'High beetle populations.',
        'Poor field monitoring.',
        'Continuous cucurbit cultivation.',
        'Weak young plants.'
      ],

      prevention: [
        'Monitor seedlings regularly.',
        'Remove important weed hosts.',
        'Maintain field sanitation.',
        'Protect young seedlings.',
        'Use healthy and vigorous planting material.',
        'Follow suitable crop rotation.',
        'Encourage natural predators.'
      ],

      solution: [
        'Collect and destroy beetles manually in small fields where practical.',
        'Protect young seedlings from severe feeding.',
        'Use locally recommended registered insecticides when infestation is significant.',
        'Apply treatment according to label directions.',
        'Rotate insecticide modes of action when repeated treatment is necessary.'
      ],

      management: [
        'Inspect young plants regularly.',
        'Monitor beetle populations.',
        'Remove weed hosts.',
        'Protect young seedlings.',
        'Maintain field sanitation.',
        'Use recommended insecticides only when necessary.',
        'Follow integrated pest management.'
      ]
    },
        // =========================================================
    // GARLIC
    // =========================================================

    {
      id: 'garlic-purple-blotch',
      name: 'Purple Blotch',
      crop: 'garlic',
      category: 'Fungal Disease',

      diseaseInformation:
        'Purple blotch is an important fungal disease of garlic that mainly affects leaves and can reduce bulb development. Severe infection causes premature leaf drying and reduced bulb yield and quality.',

      symptoms: [
        'Small water-soaked spots appear on garlic leaves.',
        'Lesions enlarge and develop purple or reddish-brown centres.',
        'Yellow halos may develop around infected areas.',
        'Lesions may become elongated or spindle-shaped.',
        'Leaves may bend and become weak.',
        'Severely infected leaves dry prematurely.',
        'Heavy infection can reduce bulb size and yield.'
      ],

      cause:
        'Purple blotch is mainly caused by Alternaria porri, a fungal pathogen that infects garlic foliage.',

      favorableConditions: [
        'Warm and humid weather.',
        'Frequent rainfall.',
        'Long periods of leaf wetness.',
        'Dense crop growth.',
        'Poor air circulation.',
        'Infected crop residues.',
        'Excessive nitrogen fertilization.'
      ],

      prevention: [
        'Use healthy disease-free cloves.',
        'Maintain proper plant spacing.',
        'Avoid excessive nitrogen fertilization.',
        'Remove infected crop residues.',
        'Maintain good field sanitation.',
        'Avoid unnecessary overhead irrigation.',
        'Follow suitable crop rotation.'
      ],

      solution: [
        'Remove severely infected leaves where practical.',
        'Improve crop aeration.',
        'Use locally recommended registered fungicides when disease pressure is significant.',
        'Follow recommended application intervals.',
        'Rotate fungicide modes of action when repeated applications are required.'
      ],

      management: [
        'Inspect garlic leaves regularly.',
        'Monitor disease after rainfall.',
        'Maintain suitable plant spacing.',
        'Avoid excessive nitrogen.',
        'Remove infected plant debris.',
        'Use recommended fungicide management when necessary.',
        'Follow integrated disease-management practices.'
      ]
    },

    {
      id: 'garlic-stemphylium-blight',
      name: 'Stemphylium Blight',
      crop: 'garlic',
      category: 'Fungal Disease',

      diseaseInformation:
        'Stemphylium blight affects garlic foliage and can cause progressive leaf spotting and drying. Severe infection reduces photosynthetic activity and may interfere with bulb development.',

      symptoms: [
        'Small yellowish or water-soaked lesions appear on leaves.',
        'Lesions become brown to dark brown.',
        'Dark fungal growth may develop on older lesions.',
        'Leaf tissues around lesions may become yellow.',
        'Lesions may merge and destroy larger leaf areas.',
        'Leaves may dry prematurely.',
        'Severe infection can reduce bulb development.'
      ],

      cause:
        'Stemphylium blight is caused by Stemphylium species that infect garlic foliage under favourable environmental conditions.',

      favorableConditions: [
        'Warm and humid weather.',
        'Frequent rainfall.',
        'Extended leaf wetness.',
        'Dense crop canopy.',
        'Poor air circulation.',
        'Infected plant residues.',
        'Plant stress.'
      ],

      prevention: [
        'Use healthy planting material.',
        'Maintain appropriate plant spacing.',
        'Remove infected crop residues.',
        'Avoid excessive irrigation.',
        'Maintain balanced crop nutrition.',
        'Improve field aeration.',
        'Follow suitable crop rotation.'
      ],

      solution: [
        'Remove severely affected leaves where practical.',
        'Improve field ventilation.',
        'Use locally recommended registered fungicides when disease pressure is significant.',
        'Follow recommended application timing.',
        'Rotate fungicide modes of action.'
      ],

      management: [
        'Inspect leaves regularly.',
        'Monitor disease during humid weather.',
        'Maintain proper plant spacing.',
        'Remove infected residues.',
        'Avoid prolonged leaf wetness.',
        'Use recommended fungicide treatment when necessary.',
        'Follow integrated disease management.'
      ]
    },

    {
      id: 'garlic-downy-mildew',
      name: 'Downy Mildew',
      crop: 'garlic',
      category: 'Fungal Disease',

      diseaseInformation:
        'Downy mildew is a disease of garlic foliage that is favoured by cool, humid and wet conditions. Severe infection causes leaf yellowing, collapse and reduced bulb development.',

      symptoms: [
        'Pale green or yellow patches appear on leaves.',
        'Greyish or violet fungal growth may develop on affected leaves.',
        'Leaves become weak and bend downward.',
        'Lesions enlarge during prolonged wet weather.',
        'Leaves may turn yellow and dry.',
        'Severely affected plants may lose much of their foliage.',
        'Bulb size and yield may be reduced.'
      ],

      cause:
        'Downy mildew is caused by Peronospora destructor, an oomycete pathogen affecting Allium crops.',

      favorableConditions: [
        'Cool and humid weather.',
        'Frequent rainfall.',
        'High relative humidity.',
        'Long periods of leaf wetness.',
        'Dense crop growth.',
        'Poor air circulation.',
        'Excessive irrigation.'
      ],

      prevention: [
        'Use healthy planting material.',
        'Maintain proper plant spacing.',
        'Provide adequate field drainage.',
        'Avoid excessive irrigation.',
        'Reduce prolonged leaf wetness.',
        'Remove infected crop residues.',
        'Follow suitable crop rotation.'
      ],

      solution: [
        'Remove severely infected leaves where practical.',
        'Improve field drainage and aeration.',
        'Use locally recommended registered fungicides or oomycete-management products.',
        'Apply treatments at recommended crop stages.',
        'Rotate fungicide modes of action.'
      ],

      management: [
        'Inspect leaves frequently during humid weather.',
        'Monitor fields after rainfall.',
        'Maintain good drainage.',
        'Avoid excessive irrigation.',
        'Remove heavily infected residues.',
        'Use recommended disease-management products when required.',
        'Follow integrated disease management.'
      ]
    },

    {
      id: 'garlic-basal-rot',
      name: 'Basal Rot',
      crop: 'garlic',
      category: 'Fungal Disease',

      diseaseInformation:
        'Basal rot is a soil-borne fungal disease that affects garlic roots and the basal portion of bulbs. Infection can cause root decay, yellowing, wilting and deterioration of bulbs.',

      symptoms: [
        'Leaves become yellow and wilt.',
        'Roots become brown and decayed.',
        'The basal plate develops brown or discoloured tissues.',
        'Bulbs may become soft near the base.',
        'White fungal growth may occur under favourable conditions.',
        'Affected plants may be pulled easily from the soil.',
        'Severe infection causes bulb loss and reduced yield.'
      ],

      cause:
        'Basal rot is commonly associated with Fusarium species, particularly Fusarium oxysporum associated with Allium crops.',

      favorableConditions: [
        'Warm soil conditions.',
        'Poor soil drainage.',
        'Root injury.',
        'Continuous Allium cultivation.',
        'High soil-borne pathogen populations.',
        'Infected planting material.',
        'Poor field sanitation.'
      ],

      prevention: [
        'Use healthy disease-free cloves.',
        'Follow suitable crop rotation.',
        'Select well-drained fields.',
        'Avoid root injury.',
        'Remove infected bulbs and plant debris.',
        'Maintain good field sanitation.',
        'Avoid continuous garlic cultivation in heavily infested soil.'
      ],

      solution: [
        'Remove severely infected plants and bulbs.',
        'Improve soil drainage.',
        'Avoid excessive irrigation.',
        'Use recommended biological disease-management practices.',
        'Use registered seed or soil treatments only when locally recommended.'
      ],

      management: [
        'Inspect plants for yellowing and wilting.',
        'Check bulb bases of affected plants.',
        'Remove infected bulbs.',
        'Maintain proper drainage.',
        'Follow crop rotation.',
        'Avoid root injuries.',
        'Use integrated soil-borne disease management.'
      ]
    },

    {
      id: 'garlic-white-rot',
      name: 'White Rot',
      crop: 'garlic',
      category: 'Fungal Disease',

      diseaseInformation:
        'White rot is a serious soil-borne disease of garlic that attacks roots and bulbs. It can cause rapid deterioration of underground tissues and may persist in soil for long periods.',

      symptoms: [
        'Leaves become yellow from the tips downward.',
        'Plants become weak and stunted.',
        'Roots become brown and decay.',
        'White fungal growth may develop around the bulb base.',
        'Small dark survival structures may occur in infected tissues or soil.',
        'Bulbs become soft and rotten.',
        'Severely affected plants may die prematurely.'
      ],

      cause:
        'White rot is caused by Sclerotium cepivorum, a soil-borne fungal pathogen affecting Allium crops.',

      favorableConditions: [
        'Cool to moderate soil conditions.',
        'High soil moisture.',
        'Infested soil.',
        'Continuous garlic or onion cultivation.',
        'Movement of contaminated soil.',
        'Infected planting material.',
        'Poor field sanitation.'
      ],

      prevention: [
        'Use disease-free planting material.',
        'Avoid planting garlic in heavily infested fields.',
        'Follow long crop rotations.',
        'Remove infected plants and bulbs.',
        'Prevent movement of contaminated soil.',
        'Maintain good field sanitation.',
        'Clean tools and farm equipment after working in infested areas.'
      ],

      solution: [
        'Remove and destroy infected plants and bulbs.',
        'Avoid moving contaminated soil to clean fields.',
        'Use locally recommended biological soil-management practices.',
        'Use resistant or tolerant planting material where available.',
        'Seek agricultural extension advice for heavily infested fields.'
      ],

      management: [
        'Inspect plants for yellowing and wilting.',
        'Check bulb bases for white fungal growth.',
        'Remove infected plants promptly.',
        'Maintain field sanitation.',
        'Avoid movement of infested soil.',
        'Follow long-term crop rotation.',
        'Use integrated soil-borne disease management.'
      ]
    },

    {
      id: 'garlic-damping-off',
      name: 'Damping Off',
      crop: 'garlic',
      category: 'Fungal Disease',

      diseaseInformation:
        'Damping off can affect garlic during early establishment and is favoured by excessive moisture, poor drainage and infected planting material. Severe infection results in poor plant establishment.',

      symptoms: [
        'Young plants fail to establish properly.',
        'Emerging shoots become weak.',
        'Basal tissues may become water-soaked.',
        'Roots may become brown and decayed.',
        'Young plants may collapse.',
        'Dead plants may occur in patches.',
        'Severe infection can reduce plant population.'
      ],

      cause:
        'Damping-off symptoms may be associated with soil- and planting-material-borne pathogens including Pythium, Rhizoctonia and Fusarium species.',

      favorableConditions: [
        'Excessive soil moisture.',
        'Poor drainage.',
        'Dense planting.',
        'Heavy soil.',
        'Contaminated planting material.',
        'Poor field sanitation.',
        'Over-irrigation.'
      ],

      prevention: [
        'Use healthy disease-free cloves.',
        'Select well-drained fields.',
        'Avoid excessive irrigation.',
        'Maintain appropriate plant spacing.',
        'Use recommended planting-material treatment practices.',
        'Remove diseased plants promptly.',
        'Maintain good field sanitation.'
      ],

      solution: [
        'Remove severely affected plants.',
        'Improve drainage.',
        'Reduce excessive irrigation.',
        'Use locally recommended biological disease-management practices.',
        'Use registered planting-material treatments where locally recommended.'
      ],

      management: [
        'Inspect newly established plants.',
        'Monitor soil moisture.',
        'Remove infected plants.',
        'Maintain good drainage.',
        'Avoid overcrowding.',
        'Use healthy planting material.',
        'Maintain field hygiene.'
      ]
    },

    {
      id: 'garlic-thrips',
      name: 'Thrips',
      crop: 'garlic',
      category: 'Insect Pest',

      diseaseInformation:
        'Thrips are small sap-feeding insects that damage garlic leaves by scraping plant tissues and feeding on plant fluids. Heavy infestation can reduce photosynthetic activity and bulb development.',

      symptoms: [
        'Silvery streaks appear on leaves.',
        'Leaves develop pale or whitish patches.',
        'Leaf tips may become dry.',
        'Leaves may become distorted.',
        'Small slender insects may occur between leaf folds.',
        'Plants may become weak.',
        'Severe infestation can reduce bulb size and yield.'
      ],

      cause:
        'Damage is caused by thrips feeding on garlic leaf tissues and plant sap.',

      favorableConditions: [
        'Warm and dry weather.',
        'Low rainfall.',
        'Dense crop growth.',
        'Presence of weeds.',
        'Water-stressed plants.',
        'Reduced natural-enemy activity.',
        'Continuous Allium cultivation.'
      ],

      prevention: [
        'Monitor young leaves regularly.',
        'Maintain adequate soil moisture.',
        'Remove important weed hosts.',
        'Avoid excessive nitrogen.',
        'Conserve predatory insects.',
        'Maintain field sanitation.',
        'Use integrated pest-management practices.'
      ],

      solution: [
        'Monitor thrips populations before treatment.',
        'Use biological control where practical.',
        'Use locally recommended registered insecticides when pest levels are damaging.',
        'Rotate insecticide modes of action.',
        'Avoid repeated unnecessary pesticide applications.'
      ],

      management: [
        'Inspect leaf folds regularly.',
        'Monitor thrips populations.',
        'Maintain adequate soil moisture.',
        'Control weed hosts.',
        'Protect natural enemies.',
        'Use recommended insecticides only when necessary.',
        'Follow integrated pest management.'
      ]
    },

    {
      id: 'garlic-bulb-mites',
      name: 'Bulb Mites',
      crop: 'garlic',
      category: 'Mite Pest',

      diseaseInformation:
        'Bulb mites are tiny pests that feed on garlic bulbs and roots. Infestation can weaken plants in the field and cause bulb deterioration, particularly when planting material or stored bulbs are already infested.',

      symptoms: [
        'Roots become damaged or reduced.',
        'Young plants show poor growth.',
        'Bulbs develop damaged or discoloured tissues.',
        'Outer bulb scales may become affected.',
        'Infested bulbs may deteriorate during storage.',
        'Secondary fungal or bacterial decay may occur.',
        'Severe infestation reduces bulb quality.'
      ],

      cause:
        'Damage is caused by bulb-feeding mites that infest garlic bulbs, roots and plant debris.',

      favorableConditions: [
        'Damaged bulbs.',
        'Infested planting material.',
        'High pest populations.',
        'Poor storage sanitation.',
        'High humidity in storage.',
        'Continuous Allium cultivation.',
        'Presence of decaying plant material.'
      ],

      prevention: [
        'Use healthy planting material.',
        'Avoid storing damaged bulbs.',
        'Maintain clean storage conditions.',
        'Remove decaying bulbs.',
        'Provide suitable storage ventilation.',
        'Handle bulbs carefully.',
        'Maintain good field sanitation.'
      ],

      solution: [
        'Remove heavily infested bulbs.',
        'Clean and sanitize storage areas.',
        'Avoid mixing infested bulbs with healthy produce.',
        'Use locally recommended mite-management practices.',
        'Use approved treatments only when recommended for the crop and storage situation.'
      ],

      management: [
        'Inspect cloves and bulbs before planting or storage.',
        'Monitor stored garlic regularly.',
        'Remove damaged or infested bulbs.',
        'Maintain suitable storage conditions.',
        'Prevent bulb injuries.',
        'Maintain storage sanitation.',
        'Follow integrated pest management.'
      ]
    },


    // =========================================================
    // GRAPES
    // =========================================================

    {
      id: 'grapes-downy-mildew',
      name: 'Downy Mildew',
      crop: 'grapes',
      category: 'Fungal Disease',

      diseaseInformation:
        'Downy mildew is an important disease of grapevines that affects leaves, shoots, flowers and young berries. Under humid and wet conditions, it can spread rapidly and cause serious crop losses.',

      symptoms: [
        'Yellowish oil spots appear on upper leaf surfaces.',
        'White downy fungal growth may develop on the underside of leaves.',
        'Affected leaves may become brown and dry.',
        'Young shoots may develop lesions.',
        'Flowers and young berries may become infected.',
        'Infected clusters may dry or develop poor fruit set.',
        'Severe infection can cause major yield reduction.'
      ],

      cause:
        'Grape downy mildew is caused by Plasmopara viticola, an oomycete pathogen.',

      favorableConditions: [
        'Warm and humid weather.',
        'Frequent rainfall.',
        'High relative humidity.',
        'Extended leaf wetness.',
        'Dense vine canopy.',
        'Poor air circulation.',
        'Infected plant debris.'
      ],

      prevention: [
        'Maintain proper canopy management.',
        'Improve air circulation around clusters.',
        'Remove infected plant material.',
        'Avoid excessive irrigation.',
        'Maintain vineyard sanitation.',
        'Use suitable resistant or tolerant varieties where available.',
        'Monitor vines closely during humid weather.'
      ],

      solution: [
        'Remove severely infected leaves where practical.',
        'Improve canopy ventilation.',
        'Use locally recommended registered fungicides or oomycete-management products.',
        'Apply treatment according to recommended disease-risk periods.',
        'Rotate fungicide modes of action.'
      ],

      management: [
        'Inspect leaves and clusters regularly.',
        'Monitor weather and humidity conditions.',
        'Remove infected foliage where practical.',
        'Maintain an open canopy.',
        'Avoid prolonged leaf wetness.',
        'Use recommended disease-management products when necessary.',
        'Follow integrated disease management.'
      ]
    },

    {
      id: 'grapes-powdery-mildew',
      name: 'Powdery Mildew',
      crop: 'grapes',
      category: 'Fungal Disease',

      diseaseInformation:
        'Powdery mildew is a major grape disease that affects leaves, shoots and berries. The disease produces a white powdery growth and can severely reduce berry quality and yield.',

      symptoms: [
        'White powdery growth develops on leaves.',
        'Leaves may become distorted.',
        'Infected shoots may show greyish patches.',
        'Young berries may develop powdery fungal growth.',
        'Severely affected berries may crack.',
        'Infected berries may dry or fail to develop normally.',
        'Fruit quality can decline significantly.'
      ],

      cause:
        'Powdery mildew is caused by Erysiphe necator, a fungal pathogen of grapevines.',

      favorableConditions: [
        'Warm weather.',
        'Moderate humidity.',
        'Poor air circulation.',
        'Dense canopy.',
        'Shaded foliage.',
        'Excessive nitrogen.',
        'Susceptible varieties.'
      ],

      prevention: [
        'Maintain an open vine canopy.',
        'Train and prune vines properly.',
        'Remove excessive shoots and foliage.',
        'Avoid excessive nitrogen.',
        'Maintain balanced nutrition.',
        'Monitor young berries carefully.',
        'Use tolerant varieties where available.'
      ],

      solution: [
        'Remove severely infected plant tissues where practical.',
        'Improve canopy ventilation.',
        'Use locally recommended registered fungicides when disease pressure is significant.',
        'Follow recommended spray intervals.',
        'Rotate fungicide modes of action.'
      ],

      management: [
        'Inspect young leaves and clusters regularly.',
        'Monitor disease during warm conditions.',
        'Maintain good canopy aeration.',
        'Remove heavily infected tissues.',
        'Avoid excessive nitrogen.',
        'Use recommended fungicide management when necessary.',
        'Follow integrated disease management.'
      ]
    },

    {
      id: 'grapes-anthracnose',
      name: 'Anthracnose',
      crop: 'grapes',
      category: 'Fungal Disease',

      diseaseInformation:
        'Anthracnose is a fungal disease of grapevines that affects young shoots, leaves and berries. It produces dark lesions and can cause serious damage during wet weather.',

      symptoms: [
        'Small dark spots appear on young leaves.',
        'Lesions may become sunken with dark margins.',
        'Young shoots develop elongated dark lesions.',
        'Berry lesions may become circular and sunken.',
        'Affected berries may crack or shrivel.',
        'Infected shoots may become weak.',
        'Severe infection can reduce fruit yield and quality.'
      ],

      cause:
        'Anthracnose is caused by Elsinoe ampelina, a fungal pathogen of grapevines.',

      favorableConditions: [
        'Warm and wet weather.',
        'Frequent rainfall.',
        'High humidity.',
        'Long periods of plant wetness.',
        'Dense vine canopy.',
        'Infected plant debris.',
        'Poor vineyard sanitation.'
      ],

      prevention: [
        'Use healthy planting material.',
        'Remove infected shoots and berries.',
        'Prune and destroy infected plant material.',
        'Maintain open canopy conditions.',
        'Improve vineyard sanitation.',
        'Avoid excessive irrigation.',
        'Use tolerant varieties where available.'
      ],

      solution: [
        'Remove infected shoots and fruit clusters.',
        'Improve canopy ventilation.',
        'Use locally recommended registered fungicides when disease pressure warrants treatment.',
        'Begin management early when disease risk is high.',
        'Rotate fungicide modes of action.'
      ],

      management: [
        'Inspect young shoots and berries.',
        'Monitor disease following rainfall.',
        'Remove infected tissues.',
        'Maintain good canopy aeration.',
        'Maintain vineyard sanitation.',
        'Use recommended fungicide management when required.',
        'Follow integrated disease management.'
      ]
    },

    {
      id: 'grapes-bacterial-leaf-spot',
      name: 'Bacterial Leaf Spot',
      crop: 'grapes',
      category: 'Bacterial Disease',

      diseaseInformation:
        'Bacterial leaf spot can affect grape leaves, shoots and fruiting tissues. Infection produces dark lesions and can reduce foliage health and fruit quality under favourable humid conditions.',

      symptoms: [
        'Small dark spots develop on leaves.',
        'Lesions may become angular or irregular.',
        'Leaf tissues around lesions may turn yellow.',
        'Dark lesions may develop on young shoots.',
        'Fruit surfaces may develop small spots.',
        'Severe leaf infection can cause premature drying.',
        'Heavy infection can reduce vine vigour.'
      ],

      cause:
        'Bacterial leaf spotting of grapevines is associated with bacterial pathogens that infect plant tissues, especially under wet conditions.',

      favorableConditions: [
        'Warm and humid weather.',
        'Frequent rainfall.',
        'Extended leaf wetness.',
        'Plant wounds.',
        'Dense canopy.',
        'Infected plant material.',
        'Poor vineyard sanitation.'
      ],

      prevention: [
        'Use healthy planting material.',
        'Prune and remove infected tissues.',
        'Disinfect pruning tools when appropriate.',
        'Improve canopy ventilation.',
        'Avoid unnecessary plant injuries.',
        'Maintain vineyard sanitation.',
        'Avoid excessive overhead irrigation.'
      ],

      solution: [
        'Remove severely affected tissues.',
        'Improve canopy ventilation.',
        'Use locally recommended registered bacterial-disease management products when appropriate.',
        'Avoid working through wet vines when possible.',
        'Follow local agricultural recommendations for severe outbreaks.'
      ],

      management: [
        'Inspect leaves and shoots regularly.',
        'Monitor disease after rainfall.',
        'Remove infected plant material.',
        'Maintain vineyard hygiene.',
        'Improve canopy airflow.',
        'Avoid unnecessary plant wounds.',
        'Follow integrated disease management.'
      ]
    },

    {
      id: 'grapes-dieback',
      name: 'Dieback',
      crop: 'grapes',
      category: 'Fungal Disease',

      diseaseInformation:
        'Grapevine dieback is associated with fungal pathogens that infect pruning wounds and woody tissues. Affected canes and branches gradually weaken and may die, reducing productive vine structure.',

      symptoms: [
        'Canes show poor growth.',
        'Leaves on affected branches may wilt or yellow.',
        'Branches may develop dark or dead sections.',
        'Pruning wounds may fail to heal properly.',
        'Wood tissues may become discoloured internally.',
        'Affected shoots may dry back.',
        'Severe infection can reduce productive vine area.'
      ],

      cause:
        'Grapevine dieback can be associated with several wood-infecting fungal pathogens that enter through wounds and damaged tissues.',

      favorableConditions: [
        'Infected pruning wounds.',
        'Wet weather during pruning periods.',
        'Poor pruning practices.',
        'Old infected wood.',
        'Plant stress.',
        'Poor vineyard sanitation.',
        'Infected planting material.'
      ],

      prevention: [
        'Use healthy planting material.',
        'Prune using clean tools.',
        'Avoid unnecessary large wounds.',
        'Remove dead and diseased wood.',
        'Destroy infected prunings.',
        'Protect major pruning wounds using locally recommended practices.',
        'Maintain healthy vine growth.'
      ],

      solution: [
        'Prune out visibly infected wood where practical.',
        'Remove and destroy diseased canes.',
        'Avoid leaving infected wood in the vineyard.',
        'Use locally recommended wound-management practices.',
        'Seek expert advice when extensive trunk or cordon infection occurs.'
      ],

      management: [
        'Inspect trunks, cordons and canes regularly.',
        'Remove dead wood during pruning.',
        'Sanitize pruning equipment.',
        'Avoid moving infected wood between vines.',
        'Maintain balanced vine nutrition.',
        'Monitor newly pruned wounds.',
        'Follow integrated grapevine trunk-disease management.'
      ]
    },

    {
      id: 'grapes-mealybug',
      name: 'Mealybug',
      crop: 'grapes',
      category: 'Insect Pest',

      diseaseInformation:
        'Mealybugs are sap-sucking pests that infest grape leaves, shoots, bunches and other plant parts. They produce honeydew that encourages sooty mould and may reduce fruit quality.',

      symptoms: [
        'White cottony insects occur on shoots and leaves.',
        'Mealybugs may occur inside fruit clusters.',
        'Leaves may become weak or yellow.',
        'Honeydew accumulates on plant surfaces.',
        'Sooty mould develops on honeydew-covered tissues.',
        'Fruit clusters may become contaminated.',
        'Severe infestation can reduce fruit quality and yield.'
      ],

      cause:
        'Damage is caused by mealybugs feeding on plant sap and producing honeydew.',

      favorableConditions: [
        'Warm weather.',
        'Dense canopy.',
        'Excessive nitrogen.',
        'Presence of ants.',
        'Poor canopy management.',
        'Weed hosts.',
        'Reduced natural-enemy activity.'
      ],

      prevention: [
        'Monitor shoots and clusters regularly.',
        'Control important weed hosts.',
        'Avoid excessive nitrogen.',
        'Manage ants that protect mealybugs.',
        'Conserve parasitoids and predators.',
        'Maintain open canopy conditions.',
        'Remove heavily infested plant material where practical.'
      ],

      solution: [
        'Remove heavily infested plant parts.',
        'Encourage natural enemies.',
        'Manage ants where necessary.',
        'Use locally recommended registered insecticides when infestation is economically significant.',
        'Rotate insecticide modes of action.'
      ],

      management: [
        'Inspect fruit clusters carefully.',
        'Monitor mealybug populations.',
        'Control ant activity.',
        'Protect natural enemies.',
        'Remove heavily infested tissues.',
        'Use recommended insecticide treatment when necessary.',
        'Follow integrated pest management.'
      ]
    },

    {
      id: 'grapes-thrips',
      name: 'Thrips',
      crop: 'grapes',
      category: 'Insect Pest',

      diseaseInformation:
        'Thrips damage grape leaves, flowers and young berries by feeding on plant tissues. Feeding injury can reduce fruit quality and cause scarring, particularly during flowering and fruit development.',

      symptoms: [
        'Silvery or bronze patches appear on leaves.',
        'Young leaves may become distorted.',
        'Flowers may show feeding injury.',
        'Young berries may develop surface scars.',
        'Fruit skin may become rough or discoloured.',
        'Shoots may show reduced growth.',
        'Severe infestation can reduce fruit marketability.'
      ],

      cause:
        'Damage is caused by thrips feeding on grape tissues, particularly young leaves, flowers and developing berries.',

      favorableConditions: [
        'Warm and dry weather.',
        'Flowering and young fruit stages.',
        'Dense canopy.',
        'Presence of weeds.',
        'Reduced natural-enemy activity.',
        'Water-stressed vines.',
        'High thrips populations.'
      ],

      prevention: [
        'Monitor flowering and fruiting stages.',
        'Remove important weed hosts.',
        'Maintain healthy vine growth.',
        'Conserve predatory insects.',
        'Avoid unnecessary broad-spectrum insecticides.',
        'Maintain proper canopy management.',
        'Use monitoring traps where locally recommended.'
      ],

      solution: [
        'Monitor pest populations before treatment.',
        'Use biological control where practical.',
        'Use locally recommended registered insecticides when damaging populations occur.',
        'Rotate insecticide modes of action.',
        'Avoid unnecessary repeated applications.'
      ],

      management: [
        'Inspect flowers and young berries.',
        'Monitor thrips populations.',
        'Control weed hosts.',
        'Protect natural enemies.',
        'Maintain good canopy management.',
        'Use recommended insecticides when necessary.',
        'Follow integrated pest management.'
      ]
    },

    {
      id: 'grapes-leafhopper',
      name: 'Grape Leafhopper',
      crop: 'grapes',
      category: 'Insect Pest',

      diseaseInformation:
        'Grape leafhoppers are sap-sucking insects that feed mainly on the underside of grape leaves. Heavy infestation causes leaf stippling, yellowing and premature drying, which can reduce vine productivity.',

      symptoms: [
        'Fine pale speckling appears on leaves.',
        'Leaves gradually develop yellow or bronze coloration.',
        'Small jumping insects may be seen on leaf undersides.',
        'Leaf surfaces may become dry.',
        'Severely affected leaves may fall prematurely.',
        'Vine vigour may decrease.',
        'Heavy infestation can reduce fruit development.'
      ],

      cause:
        'Damage is caused by leafhopper insects feeding on grape leaf tissues and plant sap.',

      favorableConditions: [
        'Warm weather.',
        'Dry conditions.',
        'Dense foliage.',
        'Presence of weeds.',
        'Reduced natural-enemy activity.',
        'Poor vineyard monitoring.',
        'High pest populations.'
      ],

      prevention: [
        'Inspect leaf undersides regularly.',
        'Remove important weed hosts.',
        'Maintain proper canopy management.',
        'Conserve predatory insects.',
        'Avoid excessive nitrogen.',
        'Maintain healthy vine growth.',
        'Use monitoring methods where locally recommended.'
      ],

      solution: [
        'Monitor leafhopper populations.',
        'Use biological control where practical.',
        'Use locally recommended registered insecticides when populations are damaging.',
        'Rotate insecticide modes of action.',
        'Avoid unnecessary pesticide applications.'
      ],

      management: [
        'Inspect leaves regularly.',
        'Monitor leafhopper populations.',
        'Remove weed hosts.',
        'Protect beneficial insects.',
        'Maintain suitable canopy density.',
        'Apply recommended insecticides when necessary.',
        'Follow integrated pest management.'
      ]
    },


    // =========================================================
    // BROCCOLI
    // =========================================================

    {
      id: 'broccoli-downy-mildew',
      name: 'Downy Mildew',
      crop: 'broccoli',
      category: 'Fungal Disease',

      diseaseInformation:
        'Downy mildew affects broccoli leaves and can also affect developing heads under favourable conditions. The disease is favoured by cool, humid and wet weather and can reduce crop quality.',

      symptoms: [
        'Yellow or pale patches develop on leaves.',
        'Greyish or white fungal growth may appear on leaf undersides.',
        'Lesions may enlarge during wet weather.',
        'Leaves may become brown and dry.',
        'Young foliage may become distorted.',
        'Severe infection can reduce plant vigour.',
        'Head quality may decline under severe disease pressure.'
      ],

      cause:
        'Downy mildew of broccoli is caused by Hyaloperonospora parasitica, also referred to as Hyaloperonospora brassicae.',

      favorableConditions: [
        'Cool humid weather.',
        'Frequent rainfall.',
        'High relative humidity.',
        'Long periods of leaf wetness.',
        'Dense crop growth.',
        'Poor air circulation.',
        'Excessive irrigation.'
      ],

      prevention: [
        'Use healthy seed and seedlings.',
        'Maintain proper plant spacing.',
        'Avoid excessive irrigation.',
        'Improve field drainage.',
        'Remove infected crop residues.',
        'Use suitable crop rotation.',
        'Use tolerant varieties where available.'
      ],

      solution: [
        'Remove severely infected leaves where practical.',
        'Improve field ventilation.',
        'Use locally recommended registered fungicides or oomycete-management products.',
        'Apply treatment according to disease risk.',
        'Rotate fungicide modes of action.'
      ],

      management: [
        'Inspect leaves regularly.',
        'Monitor disease during cool humid weather.',
        'Maintain good field drainage.',
        'Avoid prolonged leaf wetness.',
        'Remove infected plant residues.',
        'Use recommended disease-management products when required.',
        'Follow integrated disease management.'
      ]
    },

    {
      id: 'broccoli-alternaria-leaf-spot',
      name: 'Alternaria Leaf Spot',
      crop: 'broccoli',
      category: 'Fungal Disease',

      diseaseInformation:
        'Alternaria leaf spot causes dark lesions on broccoli leaves and can reduce photosynthetic activity. Severe infection can lead to premature leaf loss and reduced crop quality.',

      symptoms: [
        'Small dark spots appear on leaves.',
        'Lesions develop concentric rings.',
        'Yellow halos may form around lesions.',
        'Spots enlarge and may merge.',
        'Older leaves are often affected first.',
        'Severely infected leaves may dry prematurely.',
        'Heavy infection can reduce plant vigour and head development.'
      ],

      cause:
        'Alternaria leaf spot is caused by Alternaria species that infect brassica foliage.',

      favorableConditions: [
        'Warm and humid conditions.',
        'Frequent rainfall.',
        'Extended leaf wetness.',
        'Dense crop growth.',
        'Poor field aeration.',
        'Infected crop residues.',
        'Plant stress.'
      ],

      prevention: [
        'Use healthy quality-tested seed.',
        'Maintain suitable plant spacing.',
        'Remove infected crop residues.',
        'Avoid excessive overhead irrigation.',
        'Maintain balanced nutrition.',
        'Follow suitable crop rotation.',
        'Use tolerant varieties where available.'
      ],

      solution: [
        'Remove severely infected leaves.',
        'Improve crop aeration.',
        'Use locally recommended registered fungicides when disease pressure is significant.',
        'Follow recommended application timing.',
        'Rotate fungicide modes of action.'
      ],

      management: [
        'Inspect lower leaves regularly.',
        'Monitor disease after rainfall.',
        'Remove infected leaves and debris.',
        'Maintain proper spacing.',
        'Avoid prolonged leaf wetness.',
        'Use recommended fungicides when necessary.',
        'Follow integrated disease management.'
      ]
    },

    {
      id: 'broccoli-black-rot',
      name: 'Black Rot',
      crop: 'broccoli',
      category: 'Bacterial Disease',

      diseaseInformation:
        'Black rot is a serious bacterial disease of broccoli and other brassica crops. It affects leaves and vascular tissues and can cause severe yellowing, leaf death and reduced head quality.',

      symptoms: [
        'Yellow V-shaped lesions develop from leaf margins.',
        'Lesions progress toward the midrib.',
        'Leaf veins may become dark.',
        'Leaves may dry and fall prematurely.',
        'Vascular tissues may become discoloured.',
        'Plants may become stunted.',
        'Severe infection can reduce or destroy marketable heads.'
      ],

      cause:
        'Black rot is caused by Xanthomonas campestris pathovar campestris.',

      favorableConditions: [
        'Warm humid weather.',
        'Frequent rainfall.',
        'Overhead irrigation.',
        'Infected seed.',
        'Plant wounds.',
        'Poor field sanitation.',
        'Contaminated water and equipment.'
      ],

      prevention: [
        'Use certified disease-free seed.',
        'Use healthy seedlings.',
        'Avoid overhead irrigation where practical.',
        'Maintain field sanitation.',
        'Remove infected plant residues.',
        'Follow suitable crop rotation.',
        'Disinfect contaminated tools and equipment.'
      ],

      solution: [
        'Remove severely infected plants.',
        'Destroy infected crop residues.',
        'Improve field ventilation.',
        'Avoid working in wet crops.',
        'Use locally recommended bacterial-disease management practices.'
      ],

      management: [
        'Inspect leaves for V-shaped lesions.',
        'Monitor disease after rainfall.',
        'Remove infected plants promptly.',
        'Maintain field sanitation.',
        'Avoid unnecessary plant injuries.',
        'Use clean planting material.',
        'Follow integrated bacterial disease management.'
      ]
    },

    {
      id: 'broccoli-clubroot',
      name: 'Clubroot',
      crop: 'broccoli',
      category: 'Soil-Borne Disease',

      diseaseInformation:
        'Clubroot is a serious soil-borne disease of broccoli and other brassica crops. It causes abnormal swelling of roots, restricts water and nutrient uptake and can result in severe plant stunting.',

      symptoms: [
        'Plants become stunted.',
        'Leaves may wilt during warm periods.',
        'Leaves may become yellow.',
        'Roots develop enlarged club-shaped swellings.',
        'Affected roots become distorted.',
        'Plants show poor nutrient and water uptake.',
        'Severe infection can cause premature plant death.'
      ],

      cause:
        'Clubroot is caused by Plasmodiophora brassicae, a soil-borne pathogen that infects brassica roots.',

      favorableConditions: [
        'Acidic soil.',
        'High soil moisture.',
        'Poor drainage.',
        'Continuous brassica cultivation.',
        'Infested soil.',
        'Movement of contaminated soil.',
        'High soil pathogen populations.'
      ],

      prevention: [
        'Use clean planting material.',
        'Follow long crop rotations.',
        'Improve soil drainage.',
        'Avoid movement of infested soil.',
        'Maintain suitable soil pH according to local recommendations.',
        'Remove infected root residues.',
        'Avoid repeated brassica cultivation in infested fields.'
      ],

      solution: [
        'Remove severely affected plants.',
        'Improve soil drainage.',
        'Use locally recommended soil pH management.',
        'Avoid planting susceptible brassicas repeatedly in infested fields.',
        'Use tolerant varieties where available.'
      ],

      management: [
        'Inspect roots of stunted plants.',
        'Monitor field drainage.',
        'Remove infected plants.',
        'Prevent movement of contaminated soil.',
        'Follow long crop rotation.',
        'Maintain suitable soil conditions.',
        'Use integrated soil-borne disease management.'
      ]
    },

    {
      id: 'broccoli-damping-off',
      name: 'Damping Off',
      crop: 'broccoli',
      category: 'Fungal Disease',

      diseaseInformation:
        'Damping off affects broccoli seedlings in nursery beds and can cause poor establishment and seedling death. Excessive moisture and poor nursery sanitation increase disease risk.',

      symptoms: [
        'Seeds may fail to germinate.',
        'Young seedlings develop water-soaked lesions.',
        'The stem near the soil surface becomes thin.',
        'Seedlings bend and collapse.',
        'Roots become brown and decayed.',
        'Dead seedlings occur in patches.',
        'Severe infection can destroy nursery seedlings.'
      ],

      cause:
        'Damping off is caused by soil- and seed-borne pathogens including Pythium, Rhizoctonia and Fusarium species.',

      favorableConditions: [
        'Excessive soil moisture.',
        'Poor nursery drainage.',
        'Overcrowded seedlings.',
        'Heavy soil.',
        'Poor air circulation.',
        'Contaminated nursery media.',
        'Over-irrigation.'
      ],

      prevention: [
        'Use healthy quality-tested seed.',
        'Prepare raised and well-drained nursery beds.',
        'Use recommended seed-treatment practices.',
        'Avoid excessive irrigation.',
        'Maintain proper seed spacing.',
        'Remove diseased seedlings promptly.',
        'Maintain nursery sanitation.'
      ],

      solution: [
        'Remove severely affected seedlings.',
        'Improve nursery drainage.',
        'Reduce excessive irrigation.',
        'Use recommended biological or chemical seed treatments.',
        'Follow locally recommended nursery disease-management practices.'
      ],

      management: [
        'Inspect seedlings regularly.',
        'Monitor nursery moisture.',
        'Remove infected seedlings.',
        'Maintain proper drainage.',
        'Avoid overcrowding.',
        'Use healthy treated seed.',
        'Maintain nursery hygiene.'
      ]
    },

    {
      id: 'broccoli-cabbage-aphid',
      name: 'Cabbage Aphid',
      crop: 'broccoli',
      category: 'Insect Pest',

      diseaseInformation:
        'Cabbage aphids are sap-sucking insects that form colonies on broccoli leaves, shoots and developing heads. Heavy infestation can weaken plants and contaminate marketable produce with insects and honeydew.',

      symptoms: [
        'Clusters of aphids occur on leaves and shoots.',
        'Leaves may curl or become distorted.',
        'Young growth may become stunted.',
        'Leaves may become yellow.',
        'Honeydew accumulates on plant surfaces.',
        'Sooty mould may develop.',
        'Aphids may infest developing broccoli heads.'
      ],

      cause:
        'Damage is caused by aphids feeding on plant sap, especially on tender tissues and developing heads.',

      favorableConditions: [
        'Cool to moderate temperatures.',
        'Dense crop growth.',
        'Excessive nitrogen.',
        'Presence of weeds.',
        'Reduced natural-enemy activity.',
        'Continuous brassica cultivation.',
        'High aphid populations.'
      ],

      prevention: [
        'Monitor plants regularly.',
        'Remove important weed hosts.',
        'Avoid excessive nitrogen.',
        'Conserve ladybird beetles and parasitoids.',
        'Maintain balanced crop nutrition.',
        'Remove heavily infested leaves where practical.',
        'Avoid unnecessary broad-spectrum insecticides.'
      ],

      solution: [
        'Remove heavily infested plant parts where practical.',
        'Encourage natural enemies.',
        'Use locally recommended registered insecticides when infestation is damaging.',
        'Rotate insecticide modes of action.',
        'Avoid unnecessary repeated pesticide applications.'
      ],

      management: [
        'Inspect leaves and developing heads.',
        'Monitor aphid colonies.',
        'Control weed hosts.',
        'Protect beneficial insects.',
        'Maintain balanced nutrition.',
        'Use recommended insecticide treatment when necessary.',
        'Follow integrated pest management.'
      ]
    },

    {
      id: 'broccoli-diamondback-moth',
      name: 'Diamondback Moth',
      crop: 'broccoli',
      category: 'Insect Pest',

      diseaseInformation:
        'Diamondback moth is a major insect pest of broccoli and other brassicas. Larvae feed on leaves and can cause extensive defoliation, particularly during warm and dry conditions.',

      symptoms: [
        'Small holes appear on leaves.',
        'Larvae feed between leaf veins.',
        'Leaves may develop a window-like appearance.',
        'Older leaves may become heavily damaged.',
        'Young plants may suffer severe defoliation.',
        'Developing heads may be indirectly affected by reduced foliage.',
        'Severe infestation can reduce marketable yield.'
      ],

      cause:
        'Damage is caused by larvae of Plutella xylostella, commonly known as the diamondback moth.',

      favorableConditions: [
        'Warm weather.',
        'Dry conditions.',
        'Continuous brassica cultivation.',
        'Presence of brassica weeds.',
        'High pest populations.',
        'Reduced natural-enemy activity.',
        'Frequent use of broad-spectrum insecticides that disrupt natural enemies.'
      ],

      prevention: [
        'Monitor plants regularly.',
        'Remove brassica weeds.',
        'Follow suitable crop rotation.',
        'Conserve parasitoids and predators.',
        'Use pheromone monitoring where locally recommended.',
        'Avoid unnecessary broad-spectrum insecticides.',
        'Maintain field sanitation.'
      ],

      solution: [
        'Use biological control where practical.',
        'Remove heavily infested leaves in small plantings.',
        'Use locally recommended registered insecticides when pest populations are damaging.',
        'Rotate insecticide modes of action carefully.',
        'Follow resistance-management recommendations.'
      ],

      management: [
        'Inspect leaf undersides.',
        'Monitor larvae and feeding damage.',
        'Use recommended monitoring traps.',
        'Protect natural enemies.',
        'Remove heavily infested plant material.',
        'Apply insecticides only when economically justified.',
        'Follow integrated pest management.'
      ]
    },

    {
      id: 'broccoli-cabbage-white-butterfly',
      name: 'Cabbage White Butterfly',
      crop: 'broccoli',
      category: 'Insect Pest',

      diseaseInformation:
        'Cabbage white butterflies can damage broccoli when their caterpillars feed on leaves. Heavy feeding may cause severe defoliation and reduce plant vigour and head development.',

      symptoms: [
        'Irregular holes appear on leaves.',
        'Green caterpillars may be found on leaf surfaces.',
        'Leaf margins may be consumed.',
        'Young plants may lose large portions of foliage.',
        'Frass may accumulate on leaves.',
        'Severe defoliation reduces plant vigour.',
        'Heavy infestation may reduce head development.'
      ],

      cause:
        'Damage is caused by caterpillars of cabbage white butterflies feeding on broccoli leaves.',

      favorableConditions: [
        'Warm weather.',
        'Presence of brassica crops.',
        'Brassica weeds.',
        'High butterfly populations.',
        'Continuous brassica cultivation.',
        'Reduced natural-enemy activity.',
        'Poor field monitoring.'
      ],

      prevention: [
        'Inspect leaves regularly.',
        'Remove caterpillars and eggs where practical.',
        'Remove brassica weeds.',
        'Conserve parasitoids and predators.',
        'Maintain field sanitation.',
        'Use suitable crop rotation.',
        'Monitor young plants carefully.'
      ],

      solution: [
        'Hand-pick caterpillars in small fields where practical.',
        'Use biological control where suitable.',
        'Use locally recommended registered insecticides when infestation is damaging.',
        'Apply treatment according to label directions.',
        'Rotate insecticide modes of action when repeated treatment is necessary.'
      ],

      management: [
        'Inspect upper and lower leaf surfaces.',
        'Monitor eggs and caterpillars.',
        'Remove caterpillars where practical.',
        'Protect natural enemies.',
        'Control brassica weed hosts.',
        'Use recommended insecticides when necessary.',
        'Follow integrated pest management.'
      ]
    },


    // =========================================================
    // POTATO
    // =========================================================

    {
      id: 'potato-early-blight',
      name: 'Early Blight',
      crop: 'potato',
      category: 'Fungal Disease',

      diseaseInformation:
        'Early blight is an important fungal disease of potato that mainly affects foliage and can also infect tubers. Severe infection causes premature leaf loss and can reduce tuber size and yield.',

      symptoms: [
        'Small brown spots appear on older leaves.',
        'Lesions develop concentric rings.',
        'Yellowing may occur around lesions.',
        'Spots enlarge and merge under severe infection.',
        'Leaves may dry prematurely.',
        'Tubers may develop dark sunken lesions.',
        'Severe infection can reduce tuber yield.'
      ],

      cause:
        'Early blight is mainly caused by Alternaria solani.',

      favorableConditions: [
        'Warm weather.',
        'High humidity.',
        'Frequent leaf wetness.',
        'Nutritional stress.',
        'Plant maturity.',
        'Infected crop residues.',
        'Poor field sanitation.'
      ],

      prevention: [
        'Use healthy certified seed tubers.',
        'Maintain balanced crop nutrition.',
        'Avoid plant stress.',
        'Remove infected crop residues.',
        'Follow suitable crop rotation.',
        'Maintain adequate plant spacing.',
        'Avoid prolonged leaf wetness.'
      ],

      solution: [
        'Remove severely infected foliage where practical.',
        'Improve crop aeration.',
        'Use locally recommended registered fungicides when disease pressure warrants treatment.',
        'Follow recommended application intervals.',
        'Rotate fungicide modes of action.'
      ],

      management: [
        'Inspect lower leaves regularly.',
        'Monitor disease as plants mature.',
        'Remove infected debris.',
        'Maintain balanced nutrition.',
        'Avoid unnecessary leaf wetness.',
        'Use recommended fungicides when necessary.',
        'Follow integrated disease management.'
      ]
    },

    {
      id: 'potato-late-blight',
      name: 'Late Blight',
      crop: 'potato',
      category: 'Fungal Disease',

      diseaseInformation:
        'Late blight is one of the most destructive diseases of potato. It affects leaves, stems and tubers and can spread rapidly under cool, wet and humid conditions.',

      symptoms: [
        'Water-soaked pale green lesions appear on leaves.',
        'Lesions rapidly become brown or dark.',
        'White fungal-like growth may occur under humid conditions.',
        'Leaves may collapse quickly.',
        'Stem lesions may become dark.',
        'Tubers may develop brown or reddish-brown internal lesions.',
        'Severe infection can destroy foliage and cause major yield loss.'
      ],

      cause:
        'Late blight is caused by Phytophthora infestans, an oomycete pathogen.',

      favorableConditions: [
        'Cool and wet weather.',
        'High relative humidity.',
        'Frequent rainfall.',
        'Prolonged leaf wetness.',
        'Dense crop canopy.',
        'Poor air circulation.',
        'Infected plant material.'
      ],

      prevention: [
        'Use certified healthy seed tubers.',
        'Avoid planting infected tubers.',
        'Maintain good field drainage.',
        'Use suitable crop spacing.',
        'Remove infected plant material.',
        'Avoid prolonged leaf wetness.',
        'Use tolerant varieties where available.'
      ],

      solution: [
        'Remove severely infected foliage where practical.',
        'Improve field drainage and aeration.',
        'Use locally recommended registered fungicides or oomycete-management products.',
        'Apply treatments according to disease risk.',
        'Rotate fungicide modes of action.'
      ],

      management: [
        'Inspect fields frequently during wet weather.',
        'Monitor leaves and stems.',
        'Remove infected plant material.',
        'Maintain field drainage.',
        'Avoid unnecessary overhead irrigation.',
        'Use recommended disease-management products promptly when required.',
        'Follow integrated disease management.'
      ]
    },

    {
      id: 'potato-bacterial-wilt',
      name: 'Bacterial Wilt',
      crop: 'potato',
      category: 'Bacterial Disease',

      diseaseInformation:
        'Bacterial wilt is a serious soil-borne disease of potato that causes rapid wilting and plant death. The pathogen can survive in infested soil and spread through infected seed tubers, water and contaminated equipment.',

      symptoms: [
        'Plants wilt during warm conditions.',
        'Leaves may initially remain green.',
        'Wilting may progress rapidly.',
        'Stems may show internal vascular discoloration.',
        'Bacterial ooze may be present in infected tissues.',
        'Tubers may show vascular browning.',
        'Severe infection can cause plant death and tuber loss.'
      ],

      cause:
        'Bacterial wilt is caused by Ralstonia solanacearum and related bacterial strains affecting solanaceous crops.',

      favorableConditions: [
        'Warm soil temperatures.',
        'High soil moisture.',
        'Poor field drainage.',
        'Infested soil.',
        'Infected seed tubers.',
        'Root injuries.',
        'Movement of contaminated irrigation water.'
      ],

      prevention: [
        'Use certified disease-free seed tubers.',
        'Select well-drained fields.',
        'Follow suitable crop rotation.',
        'Avoid planting in heavily infested fields.',
        'Remove infected plants and tubers.',
        'Prevent movement of contaminated soil and water.',
        'Maintain clean farm equipment.'
      ],

      solution: [
        'Remove infected plants promptly.',
        'Improve field drainage.',
        'Avoid excessive irrigation.',
        'Use locally recommended biological soil-management practices.',
        'Avoid retaining infected tubers as planting material.'
      ],

      management: [
        'Inspect plants for sudden wilting.',
        'Check stems and tubers for vascular symptoms.',
        'Remove infected plants.',
        'Maintain good drainage.',
        'Follow crop rotation.',
        'Prevent movement of contaminated soil.',
        'Use integrated bacterial-wilt management.'
      ]
    },

    {
      id: 'potato-black-scurf',
      name: 'Black Scurf',
      crop: 'potato',
      category: 'Fungal Disease',

      diseaseInformation:
        'Black scurf is a fungal disease of potato associated with Rhizoctonia infection. It affects sprouts, stems and tubers and can reduce plant emergence and tuber quality.',

      symptoms: [
        'Dark irregular structures develop on tuber surfaces.',
        'Sprouts may be damaged or fail to emerge properly.',
        'Underground stems may develop brown lesions.',
        'Plants may become weak or stunted.',
        'Aerial tubers may occasionally develop.',
        'Tubers may have rough or damaged surfaces.',
        'Severe infection can reduce yield and market quality.'
      ],

      cause:
        'Black scurf is caused by Rhizoctonia solani, a soil-borne fungal pathogen.',

      favorableConditions: [
        'Cool soil conditions during emergence.',
        'High soil moisture.',
        'Infested seed tubers.',
        'Poor soil drainage.',
        'Continuous potato cultivation.',
        'Plant stress.',
        'High soil pathogen populations.'
      ],

      prevention: [
        'Use certified healthy seed tubers.',
        'Use clean planting material.',
        'Follow suitable crop rotation.',
        'Avoid planting heavily infected tubers.',
        'Maintain good soil drainage.',
        'Harvest and store tubers properly.',
        'Avoid excessive soil compaction.'
      ],

      solution: [
        'Use healthy seed tubers.',
        'Remove severely affected planting material.',
        'Use locally recommended seed-treatment practices.',
        'Improve soil conditions.',
        'Follow crop rotation.',
        'Use biological management practices where locally recommended.'
      ],

      management: [
        'Inspect seed tubers before planting.',
        'Monitor emergence.',
        'Check underground stems when plants are weak.',
        'Maintain suitable soil moisture.',
        'Avoid heavily infested planting material.',
        'Follow crop rotation.',
        'Use integrated disease management.'
      ]
    },

    {
      id: 'potato-common-scab',
      name: 'Common Scab',
      crop: 'potato',
      category: 'Bacterial Disease',

      diseaseInformation:
        'Common scab affects potato tuber surfaces and produces rough, corky lesions. The disease mainly reduces tuber appearance and market quality rather than causing severe foliage symptoms.',

      symptoms: [
        'Rough corky lesions develop on tuber surfaces.',
        'Small brown spots may appear initially.',
        'Lesions enlarge and become irregular.',
        'Scabby tissue may become raised.',
        'Severe infection can cover large portions of tubers.',
        'Tubers may become less marketable.',
        'Internal tuber tissues are usually less affected than the surface.'
      ],

      cause:
        'Common scab is associated with Streptomyces species, particularly Streptomyces scabies and related species.',

      favorableConditions: [
        'Dry soil during early tuber development.',
        'Alkaline or high-pH soil conditions.',
        'Light sandy soils.',
        'Low soil moisture.',
        'Continuous potato cultivation.',
        'Infected soil.',
        'Excessive soil disturbance around tubers.'
      ],

      prevention: [
        'Use healthy certified seed tubers.',
        'Maintain adequate soil moisture during tuber initiation.',
        'Follow suitable crop rotation.',
        'Avoid excessive soil pH where scab risk is high.',
        'Maintain good soil health.',
        'Avoid planting susceptible varieties in highly infested fields.',
        'Handle tubers carefully.'
      ],

      solution: [
        'Maintain suitable soil moisture during tuber initiation.',
        'Use locally recommended soil-management practices.',
        'Select tolerant varieties where available.',
        'Avoid repeated potato cultivation in heavily affected fields.',
        'Use only locally recommended soil amendments or treatments.'
      ],

      management: [
        'Monitor tubers during development.',
        'Maintain adequate soil moisture.',
        'Follow suitable crop rotation.',
        'Use tolerant varieties.',
        'Maintain suitable soil conditions.',
        'Avoid unnecessary soil disturbance.',
        'Follow integrated tuber-quality management.'
      ]
    },

    {
      id: 'potato-virus-y',
      name: 'Potato Virus Y',
      crop: 'potato',
      category: 'Viral Disease',

      diseaseInformation:
        'Potato Virus Y is an important viral disease that can reduce plant vigour and tuber yield. It is commonly spread through infected seed tubers and aphid vectors.',

      symptoms: [
        'Leaves may show mosaic patterns.',
        'Leaf veins may develop discoloration.',
        'Leaves may become mottled or distorted.',
        'Some strains cause leaf drop or necrotic symptoms.',
        'Plants may become stunted.',
        'Tuber yield may be reduced.',
        'Severe infection can significantly reduce crop performance.'
      ],

      cause:
        'Potato Virus Y is caused by Potato virus Y and is transmitted through infected planting material and aphid vectors.',

      favorableConditions: [
        'Use of infected seed tubers.',
        'High aphid populations.',
        'Presence of infected volunteer plants.',
        'Presence of weed hosts.',
        'Poor field sanitation.',
        'Continuous potato cultivation.',
        'Delayed removal of infected plants.'
      ],

      prevention: [
        'Use certified virus-free seed tubers.',
        'Remove infected volunteer potato plants.',
        'Control important weed hosts.',
        'Monitor aphid populations.',
        'Use tolerant or resistant varieties where available.',
        'Maintain field sanitation.',
        'Avoid planting infected tubers.'
      ],

      solution: [
        'Remove severely infected plants where practical.',
        'Use certified disease-free seed tubers for future planting.',
        'Manage aphid vectors using integrated pest management.',
        'Control important weed hosts.',
        'Avoid retaining infected tubers for planting.'
      ],

      management: [
        'Inspect plants for mosaic and abnormal growth.',
        'Monitor aphid populations.',
        'Remove infected volunteer plants.',
        'Use certified seed tubers.',
        'Control weed hosts.',
        'Protect natural enemies.',
        'Follow integrated virus and vector management.'
      ]
    },

    {
      id: 'potato-tuber-moth',
      name: 'Potato Tuber Moth',
      crop: 'potato',
      category: 'Insect Pest',

      diseaseInformation:
        'Potato tuber moth is an important pest of potato that damages foliage and tubers. Larvae tunnel into tubers, causing direct feeding damage and allowing secondary rotting organisms to enter.',

      symptoms: [
        'Leaves may show mining damage.',
        'Larvae may be present in foliage.',
        'Small holes may occur on tubers.',
        'Tunnels may develop inside tubers.',
        'Frass may be visible around feeding areas.',
        'Damaged tubers may rot.',
        'Severe infestation can cause significant storage losses.'
      ],

      cause:
        'Damage is caused by larvae of potato tuber moths, including Phthorimaea operculella.',

      favorableConditions: [
        'Warm dry weather.',
        'Exposed tubers.',
        'Poor earthing-up.',
        'Damaged tubers.',
        'Poor storage sanitation.',
        'Continuous potato cultivation.',
        'High adult moth populations.'
      ],

      prevention: [
        'Maintain proper earthing-up.',
        'Avoid exposing tubers to sunlight and moths.',
        'Harvest potatoes at suitable maturity.',
        'Remove damaged tubers.',
        'Maintain clean storage areas.',
        'Store tubers under suitable conditions.',
        'Remove volunteer potato plants.'
      ],

      solution: [
        'Remove and destroy heavily infested tubers.',
        'Maintain adequate soil cover over developing tubers.',
        'Use suitable traps where locally recommended.',
        'Use locally recommended registered insecticides when pest pressure is significant.',
        'Follow integrated storage pest management.'
      ],

      management: [
        'Inspect foliage and tubers regularly.',
        'Monitor adult moth activity.',
        'Maintain good earthing-up.',
        'Remove damaged tubers.',
        'Maintain storage sanitation.',
        'Use recommended pest-management products when necessary.',
        'Follow integrated pest management.'
      ]
    },

    {
      id: 'potato-aphid',
      name: 'Aphid',
      crop: 'potato',
      category: 'Insect Pest',

      diseaseInformation:
        'Aphids are important sap-sucking pests of potato and can also transmit several potato viruses. Heavy infestation weakens plants and may reduce crop vigour and tuber production.',

      symptoms: [
        'Aphid colonies occur on young leaves and shoots.',
        'Leaves may curl or become distorted.',
        'Plants may show reduced vigour.',
        'Leaves may become yellow.',
        'Honeydew may accumulate on foliage.',
        'Sooty mould may develop under heavy infestation.',
        'Virus symptoms may appear in infected plants.'
      ],

      cause:
        'Damage is caused by aphids feeding on potato plant sap. Aphids can also transmit important potato viruses.',

      favorableConditions: [
        'Moderate temperatures.',
        'Dense crop growth.',
        'Excessive nitrogen.',
        'Presence of weeds.',
        'Reduced natural-enemy activity.',
        'Presence of infected plants.',
        'High aphid populations.'
      ],

      prevention: [
        'Use certified healthy seed tubers.',
        'Monitor young leaves regularly.',
        'Remove volunteer potato plants.',
        'Control important weed hosts.',
        'Conserve ladybird beetles and parasitoids.',
        'Avoid excessive nitrogen.',
        'Monitor for virus symptoms.'
      ],

      solution: [
        'Remove heavily infested plant parts where practical.',
        'Use biological control where suitable.',
        'Use locally recommended registered insecticides when aphid populations are damaging.',
        'Rotate insecticide modes of action.',
        'Avoid unnecessary broad-spectrum insecticide use.'
      ],

      management: [
        'Inspect leaf undersides regularly.',
        'Monitor aphid populations.',
        'Remove infected volunteer plants.',
        'Control weed hosts.',
        'Protect natural enemies.',
        'Monitor for virus symptoms.',
        'Follow integrated pest management.'
      ]
    }

];


/*
=========================================================
 HELPER FUNCTION
 GET DISEASE BY EXACT ID
=========================================================
*/

export function getDiseaseById(
  id: string
): DiseaseInfo | undefined {

  const normalizedId = decodeURIComponent(id)
    .toLowerCase()
    .trim();

  return DISEASE_DATA.find(
    disease =>
      disease.id.toLowerCase() === normalizedId
  );
}


/*
=========================================================
 GET ALL DISEASES / PESTS OF A CROP
=========================================================
*/

export function getDiseasesByCrop(
  cropId: string
): DiseaseInfo[] {

  const normalizedCrop = decodeURIComponent(cropId)
    .toLowerCase()
    .trim();

  return DISEASE_DATA.filter(
    disease =>
      disease.crop.toLowerCase() === normalizedCrop
  );
}


/*
=========================================================
 SEARCH DISEASE / PEST
=========================================================
*/

export function searchDiseases(
  searchTerm: string
): DiseaseInfo[] {

  const term = searchTerm
    .toLowerCase()
    .trim();

  if (!term) {
    return DISEASE_DATA;
  }

  return DISEASE_DATA.filter(
    disease =>
      disease.name.toLowerCase().includes(term) ||
      disease.crop.toLowerCase().includes(term) ||
      disease.category.toLowerCase().includes(term) ||
      disease.diseaseInformation.toLowerCase().includes(term)
  );
}