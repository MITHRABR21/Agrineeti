import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

interface Crop {
name: string;
image: string;
description: string;
category: string;
commonProblems: string[];
diseases: string[];
}

@Component({
selector: 'app-district',
standalone: true,
imports: [
CommonModule,
RouterLink
],
templateUrl: './district.html',
styleUrl: './district.css'
})
export class District implements OnInit {

districtName = 'Coimbatore';

districtDescription =
'Explore agricultural crops, crop health information and region-specific farming insights.';

crops: Crop[] = [];

constructor(
private route: ActivatedRoute,
private router: Router
) {}

ngOnInit(): void {

this.route.paramMap.subscribe(params => {

  const district = params.get('district') || 'coimbatore';

  const normalizedDistrict =
    this.normalizeDistrict(district);

  this.districtName =
    this.getDistrictDisplayName(normalizedDistrict);

  this.districtDescription =
    this.getDistrictDescription(normalizedDistrict);

  if (normalizedDistrict === 'coimbatore') {

    this.crops = this.getCoimbatoreCrops();

  } else if (normalizedDistrict === 'erode') {

    this.crops = this.getErodeCrops();

  } else if (normalizedDistrict === 'salem') {

    this.crops = this.getSalemCrops();

  } else if (normalizedDistrict === 'thanjavur') {

    this.crops = this.getThanjavurCrops();

  } else if (normalizedDistrict === 'tiruchirappalli') {

    this.crops = this.getTiruchirappalliCrops();

  } else if (normalizedDistrict === 'tiruppur') {

    this.crops = this.getTiruppurCrops();

  } else {

    this.crops = [];

  }

});

}

private normalizeDistrict(value: string): string {

let normalized = '';

try {
  normalized = decodeURIComponent(value);
} catch {
  normalized = value;
}

normalized = normalized
  .toLowerCase()
  .trim()
  .replace(/[_\s]+/g, '-')
  .replace(/-+/g, '-')
  .replace(/^-|-$/g, '');

const aliases: Record<string, string> = {

  coimbatore: 'coimbatore',
  'coimbatore-district': 'coimbatore',

  erode: 'erode',
  'erode-district': 'erode',

  salem: 'salem',
  'salem-district': 'salem',

  thanjavur: 'thanjavur',
  'thanjavur-district': 'thanjavur',

  tiruchirappalli: 'tiruchirappalli',
  tiruchirapalli: 'tiruchirappalli',
  trichy: 'tiruchirappalli',
  'tiruchirappalli-district': 'tiruchirappalli',
  'tiruchirapalli-district': 'tiruchirappalli',
  'trichy-district': 'tiruchirappalli',

  tiruppur: 'tiruppur',
  'tiruppur-district': 'tiruppur'

};

return aliases[normalized] || normalized;

}

private getDistrictDisplayName(district: string): string {

const names: Record<string, string> = {

  coimbatore: 'Coimbatore',
  erode: 'Erode',
  salem: 'Salem',
  thanjavur: 'Thanjavur',
  tiruchirappalli: 'Tiruchirappalli',
  tiruppur: 'Tiruppur'

};

return names[district] ||
  this.formatDistrictName(district);

}

private getDistrictDescription(district: string): string {

const descriptions: Record<string, string> = {

  coimbatore:
    'Explore major crops cultivated in Coimbatore along with common agricultural problems and crop health information.',

  erode:
    'Explore major crops cultivated in Erode including paddy, turmeric, banana and plantain, and millets with crop health information and common diseases.',

  salem:
    'Explore major crops cultivated across Salem district including tapioca, mango, oilseeds and groundnut with crop health information and common diseases.',

  thanjavur:
    'Explore important agricultural crops of Thanjavur and their common crop health conditions.',

  tiruchirappalli:
    'Explore important crops cultivated in Tiruchirappalli including onion, tomato, brinjal and bitter gourd with crop health information and common agricultural problems.',

  tiruppur:
    'Explore important crops cultivated in Tiruppur including garlic, grapes, broccoli and potato with crop health information, common agricultural problems and major diseases.'

};

return descriptions[district] ||
  'Explore agricultural crops, crop health information and region-specific farming insights.';

}

private getCoimbatoreCrops(): Crop[] {

return [

  {
    name: 'Coconut',
    image:
      'https://images.unsplash.com/photo-1580984969071-a8da5656c2fb?auto=format&fit=crop&w=1200&q=85',
    description:
      'Coconut is one of the major plantation crops cultivated widely across Coimbatore and Tamil Nadu.',
    category: 'PLANTATION CROP',
    commonProblems: [
      'Yellowing of leaves',
      'Drying of leaves',
      'Poor nut development',
      'Stem damage'
    ],
    diseases: [
      'Bud Rot',
      'Leaf Blight',
      'Stem Bleeding'
    ]
  },

  {
    name: 'Maize',
    image:
      'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=1200&q=85',
    description:
      'Maize is an important cereal crop cultivated for food, livestock feed and industrial purposes.',
    category: 'CEREAL CROP',
    commonProblems: [
      'Leaf damage',
      'Poor cob development',
      'Shoot damage',
      'Stunted growth'
    ],
    diseases: [
      'Fall Armyworm',
      'Leaf Blight',
      'Downy Mildew'
    ]
  },

  {
    name: 'Cholam / Sorghum',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85',
    description:
      'Sorghum is a drought-tolerant cereal crop suitable for the semi-arid agricultural conditions of Coimbatore and Tamil Nadu.',
    category: 'CEREAL CROP',
    commonProblems: [
      'Leaf spots and drying',
      'Poor grain formation',
      'Shoot damage',
      'Grain mould during humid weather'
    ],
    diseases: [
      'Anthracnose',
      'Leaf Blight',
      'Downy Mildew',
      'Grain Mold',
      'Ergot'
    ]
  },

  {
    name: 'Sugarcane',
    image:
      'https://images.unsplash.com/photo-1775619427924-16ff07cf2f2e?auto=format&fit=crop&w=1200&q=85',
    description:
      'Sugarcane is an important commercial crop cultivated for sugar production and related industries.',
    category: 'CASH CROP',
    commonProblems: [
      'Stem and stalk damage',
      'Poor cane growth',
      'Drying of shoots',
      'Reduced cane yield'
    ],
    diseases: [
      'Red Rot',
      'Smut',
      'Grassy Shoot Disease',
      'Wilt',
      'Scald'
    ]
  },

  {
    name: 'Cotton',
    image:
      'https://images.unsplash.com/photo-1762112464284-db2e871a9f4f?auto=format&fit=crop&w=1200&q=85',
    description:
      'Cotton is an important fibre crop grown for textile production and other industrial applications.',
    category: 'CASH CROP',
    commonProblems: [
      'Leaf spots and yellowing',
      'Wilting of plants',
      'Boll damage',
      'Poor boll development'
    ],
    diseases: [
      'Bacterial Blight',
      'Fusarium Wilt',
      'Alternaria Leaf Spot',
      'Anthracnose',
      'Root Rot'
    ]
  }

];

}

private getErodeCrops(): Crop[] {

return [

  {
    name: 'Paddy',
    image:
      'https://images.unsplash.com/photo-1599328580087-15c9dab481f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFkZHl8ZW58MHx8MHx8fDA%3D',
    description:
      'Paddy is an important food crop cultivated in Erode under irrigated agricultural conditions. Proper water management, balanced nutrition and disease monitoring are essential for healthy crop growth and good grain production.',
    category: 'CEREAL CROP',
    commonProblems: [
      'Yellowing and drying of leaves',
      'Poor tillering',
      'Panicle damage',
      'Poor grain filling'
    ],
    diseases: [
      'Blast',
      'Brown Spot',
      'Sheath Blight',
      'Bacterial Leaf Blight'
    ]
  },

  {
    name: 'Turmeric',
    image:
      'https://media.istockphoto.com/id/894172672/photo/turmeric-powder-in-ceramic-bowl-with-raw-dried-turmeric-over-plain-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=gYUwp6rkRGru410zsM8IlOweWHV5NwJkr5WbJJid1PY=',
    description:
      'Erode is well known for turmeric cultivation and trade. Turmeric is grown for its valuable rhizomes, colour, flavour and curcumin content. Proper soil drainage, nutrition and disease management are important for good rhizome development.',
    category: 'SPICE CROP',
    commonProblems: [
      'Leaf spots and blotches',
      'Rhizome rot',
      'Poor rhizome development',
      'Yellowing and drying of leaves'
    ],
    diseases: [
      'Leaf Spot',
      'Leaf Blotch',
      'Rhizome Rot',
      'Root Knot Nematode'
    ]
  },

  {
    name: 'Banana & Plantain',
    image:
      'https://images.unsplash.com/photo-1617631716600-6a454b430367?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhbmFuYSUyMGFuZCUyMHBsYW50YWlufGVufDB8fDB8fHww',
    description:
      'Banana and plantain are important fruit crops cultivated in Erode with proper irrigation and nutrient management. Maintaining plant health throughout vegetative growth and bunch development is important for good yield and fruit quality.',
    category: 'FRUIT CROP',
    commonProblems: [
      'Leaf yellowing',
      'Poor bunch development',
      'Pseudostem damage',
      'Fruit quality problems'
    ],
    diseases: [
      'Panama Wilt',
      'Sigatoka Leaf Spot',
      'Bunchy Top',
      'Corm and Rhizome Rot'
    ]
  },

  {
    name: 'Millets',
    image:
      'https://media.istockphoto.com/id/945236166/photo/grains-and-springs-of-millet-on-a-white-background-top-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=h80lljiTBCFh1tXVB_wF43ySoc7mCfLAXI00OpP1LPY=',
    description:
      'Millets are hardy cereal crops valued for their nutritional quality and ability to perform under relatively dry conditions. They are suitable for diversified agriculture and require proper crop establishment, weed management and disease monitoring.',
    category: 'MILLET CROP',
    commonProblems: [
      'Poor germination',
      'Leaf spots and drying',
      'Shoot and stem damage',
      'Poor grain formation'
    ],
    diseases: [
      'Downy Mildew',
      'Blast',
      'Rust',
      'Grain Mold'
    ]
  }

];

}

private getSalemCrops(): Crop[] {

return [

  {
    name: 'Tapioca / Cassava',
    image:
      'https://images.unsplash.com/photo-1754086988444-b5a47a12939e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRhcGlvY2F8ZW58MHx8MHx8fDA%3D',
    description:
      'Tapioca, also known as cassava, is one of the major commercial crops associated with Salem and the surrounding parts of Tamil Nadu. The crop is valued for its starch-rich tubers and is important for food, starch and industrial processing.',
    category: 'TUBER CROP',
    commonProblems: [
      'Mealybug infestation',
      'Mite damage',
      'Whitefly infestation',
      'Termite damage',
      'Tuber rot',
      'Bacterial diseases',
      'Nutrient deficiencies'
    ],
    diseases: [
      'Cassava Mosaic Disease',
      'Cassava Brown Streak / Tuber Necrosis',
      'Cassava Bacterial Blight',
      'Tuber Rot',
      'Root Knot Nematode'
    ]
  },

  {
    name: 'Mango',
    image:
      'https://images.unsplash.com/photo-1732472581875-89ff83f18439?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFuZ28lMjB0cmVlfGVufDB8fDB8fHww',
    description:
      'Mango is an important fruit crop cultivated in Salem and other parts of Tamil Nadu. Healthy flowering, fruit setting and canopy management are essential for good fruit yield and quality.',
    category: 'FRUIT CROP',
    commonProblems: [
      'Mango hopper infestation',
      'Mealybug infestation',
      'Fruit fly damage',
      'Stem borer damage',
      'Flower drop',
      'Fruit drop',
      'Poor fruit setting'
    ],
    diseases: [
      'Powdery Mildew',
      'Anthracnose',
      'Dieback',
      'Sooty Mould',
      'Bacterial Canker'
    ]
  },

  {
    name: 'Oilseeds',
    image:
      'https://media.istockphoto.com/id/1199456519/photo/selective-focus-of-yellow-mustard-flowers-field.webp?a=1&b=1&s=612x612&w=0&k=20&c=tKHkPhuY-mV9nwciKpA6o3aMm7QZIHPoUYV4cMLaGnU=',
    description:
      'Oilseed crops are cultivated for edible oil and oilcake production. Proper crop establishment, weed management, balanced nutrition and regular pest and disease monitoring are important for stable yields.',
    category: 'OILSEED CROP',
    commonProblems: [
      'Aphid infestation',
      'Thrips damage',
      'Caterpillar damage',
      'Whitefly infestation',
      'Leaf spots',
      'Rust symptoms',
      'Powdery mildew',
      'Root and stem problems'
    ],
    diseases: [
      'Alternaria Leaf Spot',
      'Downy Mildew',
      'Powdery Mildew',
      'Rust',
      'Stem Rot'
    ]
  },

  {
    name: 'Groundnut',
    image:
      'https://images.unsplash.com/photo-1724058663142-e6e1a5e89f2d?w=1200&auto=format&fit=crop&w=1200&q=85',
    description:
      'Groundnut is an important oilseed and food crop cultivated under suitable soil and irrigation conditions. Good seed quality, proper spacing, moisture management and timely pest and disease monitoring are important for healthy pod development.',
    category: 'OILSEED CROP',
    commonProblems: [
      'Leaf miner damage',
      'Tobacco caterpillar damage',
      'Aphid infestation',
      'Thrips damage',
      'White grub damage',
      'Poor pod development',
      'Nutrient deficiencies'
    ],
    diseases: [
      'Early Leaf Spot',
      'Late Leaf Spot',
      'Rust',
      'Collar Rot',
      'Stem Rot',
      'Root Rot'
    ]
  }

];

}

private getThanjavurCrops(): Crop[] {

return [

  {
    name: 'Paddy / Rice',
    image:
      'https://images.unsplash.com/photo-1667874952638-fdb88fe192a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGFkZHl8ZW58MHx8MHx8fDA%3D',
    description:
      'Paddy is the major food crop of Thanjavur and is closely associated with the Cauvery delta farming system. Proper water management, balanced nutrition, timely pest and disease monitoring and good field drainage are important for healthy tillering, panicle development and grain filling.',
    category: 'CEREAL CROP',
    commonProblems: [
      'Yellowing and drying of leaves',
      'Poor tillering',
      'Panicle damage',
      'Poor grain filling',
      'Weed competition',
      'Water management problems'
    ],
    diseases: [
      'Blast',
      'Brown Spot',
      'Sheath Blight',
      'Bacterial Leaf Blight',
      'False Smut'
    ]
  },

  {
    name: 'Ragi / Finger Millet',
    image:
      'https://images.unsplash.com/photo-1768729339998-909158957162?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFnaXxlbnwwfHwwfHx8MA%3D%3D',
    description:
      'Ragi, also known as finger millet, is a nutritious cereal crop valued for its high calcium and dietary fibre content. Proper crop establishment, weed control, balanced nutrition and regular monitoring help maintain healthy plants and good earhead development.',
    category: 'MILLET CROP',
    commonProblems: [
      'Poor germination',
      'Weed competition',
      'Leaf spots and drying',
      'Shoot and stem damage',
      'Poor earhead development',
      'Grain mould under humid conditions'
    ],
    diseases: [
      'Blast',
      'Brown Spot',
      'Leaf Spot',
      'Foot Rot',
      'Grain Mold'
    ]
  },

  {
    name: 'Sunflower',
    image:
      'https://images.unsplash.com/photo-1599270613570-a620f2e59f75?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3VuZmxvd2VyfGVufDB8fDB8fHww',
    description:
      'Sunflower is an important oilseed crop cultivated for edible oil production. Proper moisture management, balanced fertilization, timely pest monitoring and protection of the flower head are important for healthy growth, seed formation and oil yield.',
    category: 'OILSEED CROP',
    commonProblems: [
      'Aphid infestation',
      'Thrips damage',
      'Head and capitulum damage',
      'Leaf spots',
      'Poor seed setting',
      'Bird damage',
      'Nutrient deficiencies'
    ],
    diseases: [
      'Alternaria Leaf Spot',
      'Downy Mildew',
      'Rust',
      'Powdery Mildew',
      'Charcoal Rot'
    ]
  },

  {
    name: 'Sesame / Gingelly',
    image:
      'https://plus.unsplash.com/premium_photo-1674654419404-667fcdd0fe13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VzYW1lfGVufDB8fDB8fHww',
    description:
      'Sesame, locally known as gingelly, is an important oilseed crop valued for its high-quality edible oil and seeds. Good field drainage, proper spacing, balanced nutrition and timely control of pests and diseases are important for healthy growth and capsule development.',
    category: 'OILSEED CROP',
    commonProblems: [
      'Leaf and shoot damage',
      'Aphid infestation',
      'Leaf roller damage',
      'Whitefly infestation',
      'Poor branching',
      'Capsule damage',
      'Premature leaf drying'
    ],
    diseases: [
      'Phyllody',
      'Alternaria Leaf Spot',
      'Cercospora Leaf Spot',
      'Root Rot',
      'Macrophomina Stem and Root Rot'
    ]
  }

];

}

/* =========================================================
TIRUCHIRAPPALLI / TRICHY CROPS
========================================================= */

private getTiruchirappalliCrops(): Crop[] {

return [

  {
    name: 'Onion',
    image:
      'https://images.unsplash.com/photo-1620574387735-3624d75b2dbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b25pb258ZW58MHx8MHx8fDA%3D',
    description:
      'Onion is an important vegetable and commercial bulb crop cultivated in parts of Tiruchirappalli and Tamil Nadu. Proper nursery management, transplanting, irrigation, nutrition and timely pest and disease monitoring are important for good bulb development and storage quality.',
    category: 'VEGETABLE CROP',
    commonProblems: [
      'Leaf yellowing and drying',
      'Poor bulb development',
      'Thrips damage',
      'Bulb rot',
      'Uneven bulb size',
      'Premature drying of leaves',
      'Storage losses'
    ],
    diseases: [
      'Purple Blotch',
      'Downy Mildew',
      'Stemphylium Blight',
      'Basal Rot',
      'Neck Rot'
    ]
  },

  {
    name: 'Tomato',
    image:
      'https://images.unsplash.com/photo-1582284540020-8acbe03f4924?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG9tYXRvfGVufDB8fDB8fHww',
    description:
      'Tomato is an important vegetable crop cultivated for fresh consumption and processing. Healthy seedlings, proper irrigation, balanced nutrition and integrated pest and disease management are essential for good flowering, fruit setting and marketable fruit production.',
    category: 'VEGETABLE CROP',
    commonProblems: [
      'Leaf curling',
      'Flower drop',
      'Poor fruit setting',
      'Fruit cracking',
      'Fruit borer damage',
      'Yellowing of leaves',
      'Wilting'
    ],
    diseases: [
      'Early Blight',
      'Late Blight',
      'Bacterial Wilt',
      'Tomato Leaf Curl Virus',
      'Fusarium Wilt',
      'Septoria Leaf Spot'
    ]
  },

  {
    name: 'Brinjal',
    image:
      'https://media.istockphoto.com/id/865271826/photo/raw-ripe-eggplant-display-at-vegetable-stall.webp?a=1&b=1&s=612x612&w=0&k=20&c=ClapNkLH6ZP8I3VufE6Di3-kNhS5iqWNQurMGoel-kM=',
    description:
      'Brinjal, also known as eggplant, is an important vegetable crop grown in Tamil Nadu. Good nursery management, balanced fertilization, proper irrigation and regular monitoring of shoot and fruit pests are important for healthy plants and good-quality fruits.',
    category: 'VEGETABLE CROP',
    commonProblems: [
      'Shoot and fruit borer damage',
      'Leaf yellowing',
      'Leaf curling',
      'Poor flowering',
      'Fruit damage',
      'Wilting',
      'Stunted growth'
    ],
    diseases: [
      'Bacterial Wilt',
      'Phomopsis Blight and Fruit Rot',
      'Little Leaf',
      'Damping Off',
      'Cercospora Leaf Spot'
    ]
  },

  {
    name: 'Bitter Gourd',
    image:
      'https://images.unsplash.com/photo-1676994174279-102e0abff98f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Yml0dGVyJTIwZ3VhcmR8ZW58MHx8MHx8fDA%3D',
    description:
      'Bitter gourd is an important cucurbit vegetable crop grown for its nutritious fruits. Proper support, irrigation, balanced nutrition, pollination management and regular monitoring of insects and diseases are important for healthy vine growth and good fruit production.',
    category: 'VEGETABLE CROP',
    commonProblems: [
      'Fruit fly damage',
      'Aphid infestation',
      'Whitefly infestation',
      'Poor fruit setting',
      'Fruit deformation',
      'Leaf yellowing',
      'Vine wilting'
    ],
    diseases: [
      'Powdery Mildew',
      'Downy Mildew',
      'Anthracnose',
      'Fusarium Wilt',
      'Mosaic Virus'
    ]
  }

];

}

/* =========================================================
TIRUPPUR CROPS
========================================================= */

private getTiruppurCrops(): Crop[] {

return [

  /* =====================================================
     GARLIC
  ===================================================== */

  {
    name: 'Garlic',
    image:
      'https://plus.unsplash.com/premium_photo-1675731118463-c475c5508b80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdhcmxpY3xlbnwwfHwwfHx8MA%3D%3D',
    description:
      'Garlic is an important bulb and spice crop cultivated for its cloves and bulbs. It is widely used in cooking, food processing, pickles, spice products and traditional preparations.',
    category: 'SPICE CROP',
    commonProblems: [
      'Thrips infestation',
      'Yellowing and drying of leaves',
      'Poor bulb development',
      'Small bulb size',
      'Bulb rot',
      'Nutrient deficiencies',
      'Poor storage quality'
    ],
    diseases: [
      'Basal Rot',
      'Purple Blotch',
      'Stemphylium Blight',
      'Downy Mildew',
      'Bulb Rot'
    ]
  },

  /* =====================================================
     GRAPES
  ===================================================== */

  {
    name: 'Grapes',
    image:
      'https://images.unsplash.com/photo-1631299106224-aae61c217164?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JhcGVzfGVufDB8fDB8fHww',
    description:
      'Grapes are a high-value perennial fruit crop cultivated for fresh table grapes, raisins, juice and other processed products. Proper canopy management, irrigation, nutrition and disease management are important for good-quality production.',
    category: 'FRUIT CROP',
    commonProblems: [
      'Powdery mildew symptoms',
      'Downy mildew symptoms',
      'Berry cracking',
      'Bunch damage',
      'Mealybug infestation',
      'Thrips damage',
      'Bird damage'
    ],
    diseases: [
      'Powdery Mildew',
      'Downy Mildew',
      'Anthracnose',
      'Bunch and Berry Rot',
      'Dieback'
    ]
  },

  /* =====================================================
     BROCCOLI
  ===================================================== */

  {
    name: 'Broccoli',
    image:
      'https://images.unsplash.com/photo-1583663848850-46af132dc08e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJvY2NvbGl8ZW58MHx8MHx8fDA%3D',
    description:
      'Broccoli is a cool-season vegetable crop grown for its compact edible green flower head and tender shoots. It is a nutritious, high-value vegetable suitable for fresh markets and processing.',
    category: 'VEGETABLE CROP',
    commonProblems: [
      'Diamondback moth damage',
      'Aphid infestation',
      'Cabbage caterpillar damage',
      'Poor head formation',
      'Premature flowering',
      'Leaf damage',
      'Yellowing of leaves'
    ],
    diseases: [
      'Downy Mildew',
      'Alternaria Leaf Spot',
      'Black Rot',
      'Clubroot',
      'Damping Off'
    ]
  },

  /* =====================================================
     POTATO
  ===================================================== */

  {
    name: 'Potato',
    image:
      'https://images.unsplash.com/photo-1590165482129-1b8b27698780?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG90YXRvZXN8ZW58MHx8MHx8fDA%3D',
    description:
      'Potato is an important tuber crop cultivated for fresh consumption and processed products such as chips, fries, starch and other food products. Good soil structure and uniform moisture are important for proper tuber development.',
    category: 'TUBER CROP',
    commonProblems: [
      'Poor tuber development',
      'Tuber damage',
      'Potato tuber moth damage',
      'Aphid infestation',
      'Uneven tuber size',
      'Waterlogging',
      'Nutrient deficiencies'
    ],
    diseases: [
      'Late Blight',
      'Early Blight',
      'Bacterial Wilt',
      'Black Scurf',
      'Soft Rot'
    ]
  }

];

}

formatDistrictName(value: string): string {

if (!value) {
  return 'District';
}

return value
  .replace(/[-_]+/g, ' ')
  .replace(/\s+/g, ' ')
  .trim()
  .replace(/\b\w/g, letter => letter.toUpperCase());

}

exploreCrop(crop: Crop): void {

const cropSlug = this.createSlug(crop.name);

this.router.navigate([
  '/crop',
  cropSlug
]);

}

exploreDisease(crop: Crop, disease: string): void {

const cropSlug = this.createSlug(crop.name);

const diseaseSlug = this.createSlug(disease);

this.router.navigate([
  '/disease',
  cropSlug,
  diseaseSlug
]);

}

createSlug(value: string): string {

return value
  .toLowerCase()
  .trim()
  .replace(/&/g, 'and')
  .replace(/[/]+/g, '-')
  .replace(/[^a-z0-9\s-]/g, '')
  .replace(/\s+/g, '-')
  .replace(/-+/g, '-')
  .replace(/^-|-$/g, '');

}

}