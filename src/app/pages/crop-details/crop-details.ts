import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DISEASE_DATA, DiseaseInfo } from '../../data/disease-data';

@Component({
selector: 'app-crop-details',
standalone: true,
imports: [CommonModule, RouterLink],
templateUrl: './crop-details.html',
styleUrls: ['./crop-details.css']
})
export class CropDetailsComponent implements OnInit {

cropName = '';
routeCrop = '';

diseases: DiseaseInfo[] = [];

loading = true;

cropDescription = '';
climate = '';
soil = '';
water = '';
importance = '';
temperature = '';
duration = '';
spacing = '';
monitoring = '';

constructor(private route: ActivatedRoute) {}

ngOnInit(): void {


this.route.paramMap.subscribe(params => {

  const cropParam = params.get('crop') || '';

  this.routeCrop = this.normalizeCrop(cropParam);

  this.cropName =
    this.getCropDisplayName(this.routeCrop);

  this.loadCropData();

  this.loading = false;

  console.log('Crop route:', cropParam);
  console.log('Normalized crop:', this.routeCrop);
  console.log('Crop name:', this.cropName);
  console.log('Disease count:', this.diseases.length);

});


}

/* =========================================================
LOAD CROP DATA
========================================================= */

private loadCropData(): void {


this.diseases = DISEASE_DATA.filter(
  disease =>
    this.normalizeCrop(disease.crop) === this.routeCrop
);


switch (this.routeCrop) {


  /* =====================================================
     COCONUT
  ===================================================== */

  case 'coconut':

    this.cropDescription =
      'Coconut is an important perennial plantation crop widely cultivated in Tamil Nadu. It is valued for coconut water, copra, oil, fibre and several other products. Proper irrigation, nutrient management and regular monitoring are essential for maintaining healthy palms.';

    this.climate =
      'Warm and humid tropical climate with good sunlight. Coconut performs well in areas with adequate moisture and protection from prolonged drought and waterlogging.';

    this.soil =
      'Well-drained sandy loam, loam or alluvial soils with good organic matter are suitable. Heavy waterlogged soils should be avoided.';

    this.water =
      'Regular irrigation is important during dry periods. Drip irrigation or basin irrigation can be used depending on field conditions.';

    this.importance =
      'Coconut provides food, edible oil, fibre, beverages and raw materials for several industries. It is an important source of income for farmers.';

    this.temperature =
      'Approximately 20°C–32°C';

    this.duration =
      'Perennial crop with economic production continuing for many years.';

    this.spacing =
      'Commonly around 7.5 m × 7.5 m, depending on variety and cultivation system.';

    this.monitoring =
      'Regularly inspect the crown, leaves, trunk and soil for rhinoceros beetle, red palm weevil, eriophyid mite, basal stem rot and other problems.';

    break;


  /* =====================================================
     MAIZE
  ===================================================== */

  case 'maize':

    this.cropDescription =
      'Maize is an important cereal crop grown for grain, fodder, poultry feed and industrial products. Good seed quality, balanced fertilizer use and timely pest and disease management are essential for good yield.';

    this.climate =
      'Warm climate with moderate rainfall and good sunlight. Excessive waterlogging should be avoided.';

    this.soil =
      'Well-drained fertile loamy soil with good organic matter is preferred.';

    this.water =
      'Irrigation should be provided during critical stages such as germination, knee-high stage, flowering and grain filling.';

    this.importance =
      'Maize is widely used as food, animal feed, poultry feed, starch and industrial raw material.';

    this.temperature =
      'Approximately 21°C–30°C';

    this.duration =
      'Approximately 90–120 days depending on variety and season.';

    this.spacing =
      'Usually around 60 cm × 20 cm, depending on variety and production system.';

    this.monitoring =
      'Monitor fall armyworm, stem borers, shoot fly, leaf diseases and cob-related problems throughout the crop period.';

    break;


  /* =====================================================
     CHOLAM / SORGHUM
  ===================================================== */

  case 'cholam':

    this.cropDescription =
      'Sorghum, locally known as cholam, is an important drought-tolerant cereal crop used for food, fodder and livestock feed.';

    this.climate =
      'Warm and relatively dry climate. Sorghum tolerates drought better than many other cereals.';

    this.soil =
      'Well-drained red loam, black soil and sandy loam soils can support good production.';

    this.water =
      'Moderate irrigation is required depending on rainfall and soil moisture. Avoid prolonged waterlogging.';

    this.importance =
      'Sorghum is used as food grain, fodder and animal feed and is valuable in dryland agriculture.';

    this.temperature =
      'Approximately 25°C–32°C';

    this.duration =
      'Approximately 90–120 days depending on variety.';

    this.spacing =
      'Generally around 45 cm × 15 cm, depending on variety and cultivation method.';

    this.monitoring =
      'Monitor shoot fly, stem borer, midge, aphids, grain mould and downy mildew.';

    break;


  /* =====================================================
     SUGARCANE
  ===================================================== */

  case 'sugarcane':

    this.cropDescription =
      'Sugarcane is a major commercial crop used primarily for sugar production, jaggery, ethanol and other industrial products.';

    this.climate =
      'Warm tropical and subtropical climate with adequate moisture and a long growing period.';

    this.soil =
      'Deep, fertile and well-drained loamy or alluvial soil is preferred.';

    this.water =
      'Requires regular and adequate irrigation, especially during tillering and grand growth stages.';

    this.importance =
      'Sugarcane supports sugar, ethanol, jaggery and allied industries and provides employment and farm income.';

    this.temperature =
      'Approximately 20°C–35°C';

    this.duration =
      'Approximately 10–14 months depending on variety and season.';

    this.spacing =
      'Usually about 90–150 cm between rows depending on planting system.';

    this.monitoring =
      'Monitor early shoot borer, internode borer, top borer, whitefly, scale insects, red rot and smut.';

    break;


  /* =====================================================
     COTTON
  ===================================================== */

  case 'cotton':

    this.cropDescription =
      'Cotton is an important commercial fibre crop. Good crop establishment, balanced fertilizer use and integrated pest management are important for maintaining yield and fibre quality.';

    this.climate =
      'Warm climate with adequate sunshine and moderate rainfall. Excessive rainfall during boll opening can reduce fibre quality.';

    this.soil =
      'Deep black soil, red loam and well-drained fertile soils are suitable depending on the variety.';

    this.water =
      'Irrigation should be carefully managed because both drought and excessive moisture can affect crop development.';

    this.importance =
      'Cotton provides natural fibre for the textile industry and supports farmers and allied industries.';

    this.temperature =
      'Approximately 21°C–32°C';

    this.duration =
      'Approximately 150–180 days depending on variety.';

    this.spacing =
      'Variety-dependent, commonly around 90 cm × 60 cm or wider for some hybrids.';

    this.monitoring =
      'Monitor bollworms, aphids, jassids, whiteflies, thrips and fungal diseases regularly.';

    break;


  /* =====================================================
     PADDY / RICE
  ===================================================== */

  case 'paddy':

    this.cropDescription =
      'Paddy or rice is one of the most important food crops in Tamil Nadu. Proper nursery management, transplanting, irrigation and integrated pest and disease management are essential for good yield.';

    this.climate =
      'Warm and humid climate with adequate water availability.';

    this.soil =
      'Clay loam and fertile alluvial soils with good water-holding capacity are suitable.';

    this.water =
      'Water management should maintain adequate soil moisture while avoiding unnecessary continuous flooding.';

    this.importance =
      'Rice is a major staple food crop and an important source of livelihood for farming communities.';

    this.temperature =
      'Approximately 20°C–35°C';

    this.duration =
      'Approximately 110–150 days depending on variety.';

    this.spacing =
      'Usually around 20 cm × 10 cm or 20 cm × 15 cm under transplanting systems.';

    this.monitoring =
      'Monitor stem borer, leaf folder, brown planthopper, blast, bacterial leaf blight and sheath blight.';

    break;


  /* =====================================================
     TURMERIC
  ===================================================== */

  case 'turmeric':

    this.cropDescription =
      'Turmeric is an important rhizome crop cultivated for spice, food colouring, traditional uses and curcumin extraction.';

    this.climate =
      'Warm humid climate with adequate rainfall or irrigation and good drainage.';

    this.soil =
      'Well-drained fertile loamy or sandy loam soil rich in organic matter is preferred.';

    this.water =
      'Regular moisture is required, but waterlogging should be avoided.';

    this.importance =
      'Turmeric is widely used as a spice and for curcumin extraction and has significant commercial value.';

    this.temperature =
      'Approximately 20°C–35°C';

    this.duration =
      'Approximately 7–9 months.';

    this.spacing =
      'Commonly around 45 cm × 15 cm depending on planting system.';

    this.monitoring =
      'Monitor rhizome rot, leaf spot, shoot borer and nutrient-related symptoms.';

    break;


  /* =====================================================
     BANANA / PLANTAIN
  ===================================================== */

  case 'banana-plantain':

    this.cropDescription =
      'Banana and plantain are important fruit crops cultivated throughout Tamil Nadu. Good water management, nutrient supply and pest monitoring are necessary for healthy bunch production.';

    this.climate =
      'Warm humid tropical climate with protection from strong winds.';

    this.soil =
      'Deep fertile loamy soil with good drainage and high organic matter is preferred.';

    this.water =
      'Banana requires regular irrigation, particularly during dry periods and fruit development.';

    this.importance =
      'Banana is consumed as a fresh fruit and vegetable and provides significant income to farmers.';

    this.temperature =
      'Approximately 20°C–35°C';

    this.duration =
      'Approximately 9–14 months depending on variety and planting material.';

    this.spacing =
      'Commonly around 1.8 m × 1.8 m or variety-specific spacing.';

    this.monitoring =
      'Monitor pseudostem weevil, rhizome weevil, aphids, thrips, sigatoka, Panama disease and bunch-related problems.';

    break;


  /* =====================================================
     MILLETS
  ===================================================== */

  case 'millets':

    this.cropDescription =
      'Millets include crops such as pearl millet, finger millet, foxtail millet and other small millets. They are important climate-resilient crops requiring comparatively less water.';

    this.climate =
      'Warm climate with moderate rainfall and good sunlight. Many millet crops tolerate dry conditions.';

    this.soil =
      'Well-drained red loam, sandy loam and other suitable dryland soils can support millet production.';

    this.water =
      'Generally require less water than rice. Irrigation should be provided according to rainfall and crop stage.';

    this.importance =
      'Millets are nutritious cereals rich in fibre and minerals and are important for climate-resilient agriculture.';

    this.temperature =
      'Approximately 20°C–32°C';

    this.duration =
      'Approximately 70–120 days depending on millet type.';

    this.spacing =
      'Depends on millet species and variety, commonly 30–45 cm between rows.';

    this.monitoring =
      'Monitor shoot fly, stem borer, aphids, downy mildew, blast and other leaf diseases.';

    break;


  /* =====================================================
     TAPIOCA / CASSAVA
  ===================================================== */

  case 'tapioca':

    this.cropDescription =
      'Tapioca, also known as cassava, is an important tuber crop cultivated widely in Tamil Nadu. The roots are processed into starch, sago and other value-added products. Healthy planting material, proper soil preparation and timely pest and disease management are important for good root yield.';

    this.climate =
      'Warm tropical climate with good sunlight. Tapioca can tolerate relatively dry conditions after establishment but performs best with adequate moisture during active growth.';

    this.soil =
      'Deep, well-drained sandy loam or loamy soil is preferred. Waterlogged soils should be avoided because excess moisture can cause root and stem problems.';

    this.water =
      'Moderate irrigation is useful during establishment and prolonged dry periods. Avoid excessive irrigation and water stagnation.';

    this.importance =
      'Tapioca is an important industrial crop used for starch, sago, animal feed and several processed food products. It provides substantial income to farmers.';

    this.temperature =
      'Approximately 25°C–35°C';

    this.duration =
      'Approximately 8–12 months depending on variety and intended harvest size.';

    this.spacing =
      'Commonly around 90 cm × 90 cm, depending on variety and cultivation practice.';

    this.monitoring =
      'Monitor cassava mealybug, mites, whiteflies, termites, tuber rot, bacterial diseases and nutrient deficiencies. Check young shoots, leaves, stems and roots regularly.';

    break;


  /* =====================================================
     MANGO
  ===================================================== */

  case 'mango':

    this.cropDescription =
      'Mango is one of the most important tropical fruit crops cultivated in Tamil Nadu. It is grown for fresh consumption, processing, pulp, juice and other products. Proper canopy management, irrigation, nutrition and integrated pest management are essential for good flowering and fruit production.';

    this.climate =
      'Tropical and subtropical climate with a distinct dry period during flowering. Excessive rain during flowering can increase disease pressure and affect fruit set.';

    this.soil =
      'Deep, well-drained loamy or red loamy soil is preferred. Mango trees perform poorly under prolonged waterlogging.';

    this.water =
      'Young trees require regular irrigation for establishment. Mature trees need careful irrigation during fruit development, while excessive irrigation during flowering should be avoided.';

    this.importance =
      'Mango is a high-value fruit crop used for fresh consumption, pulp, juice, pickles and other processed products.';

    this.temperature =
      'Approximately 24°C–30°C';

    this.duration =
      'Perennial crop. Commercial fruiting begins after establishment and continues for many years depending on variety and management.';

    this.spacing =
      'Conventional orchards may use approximately 8 m × 8 m or 10 m × 10 m, while high-density systems use closer spacing.';

    this.monitoring =
      'Monitor mango hopper, mealybug, fruit fly, stem borer, powdery mildew, anthracnose and fruit diseases from flowering through harvest.';

    break;


  /* =====================================================
     OILSEEDS
  ===================================================== */

  case 'oilseeds':

    this.cropDescription =
      'Oilseeds are important crops cultivated for edible oil, livestock feed and industrial uses. The group may include crops such as sesame, sunflower, groundnut and other locally cultivated oilseed crops. Good seed quality, appropriate sowing time and balanced nutrient management are important for yield and oil quality.';

    this.climate =
      'Generally warm climate with adequate sunlight. Many oilseed crops perform best under moderate rainfall and well-drained conditions.';

    this.soil =
      'Well-drained sandy loam, red loam or suitable black soils can be used depending on the crop. Waterlogging should be avoided.';

    this.water =
      'Irrigation requirements vary by oilseed. Moisture is particularly important during germination, flowering and seed development.';

    this.importance =
      'Oilseeds provide edible oils, protein-rich oil cakes, animal feed and raw materials for food and industrial applications.';

    this.temperature =
      'Generally around 20°C–32°C depending on the specific oilseed crop.';

    this.duration =
      'Approximately 80–150 days depending on the crop and variety.';

    this.spacing =
      'Spacing varies by oilseed crop. Common row spacing ranges from approximately 30–60 cm.';

    this.monitoring =
      'Monitor aphids, thrips, caterpillars, whiteflies, leaf spots, rust, powdery mildew, stem and root diseases and nutrient deficiencies.';

    break;


  /* =====================================================
     GROUNDNUT
  ===================================================== */

  case 'groundnut':

    this.cropDescription =
      'Groundnut is an important oilseed and food crop cultivated for edible kernels, oil and livestock feed. It performs well in well-drained soils and requires careful moisture management during flowering, pegging and pod development.';

    this.climate =
      'Warm climate with moderate rainfall and good sunlight. Excessive moisture and prolonged waterlogging can severely affect pod development and increase disease problems.';

    this.soil =
      'Well-drained sandy loam, red loam and light soils are generally suitable. Loose soil helps proper peg penetration and pod development.';

    this.water =
      'Adequate moisture is essential during flowering, pegging and pod development. Avoid excessive irrigation and water stagnation.';

    this.importance =
      'Groundnut is an important edible oil crop and food crop. Its kernels are used directly as food and for oil extraction, while oil cake is used as livestock feed.';

    this.temperature =
      'Approximately 25°C–30°C';

    this.duration =
      'Approximately 90–120 days depending on variety and season.';

    this.spacing =
      'Commonly around 30 cm × 10 cm or variety-specific spacing.';

    this.monitoring =
      'Monitor leaf miner, tobacco caterpillar, aphids, thrips, white grub, collar rot, stem rot, rust, late leaf spot, early leaf spot and nutrient deficiencies.';

    break;


  /* =====================================================
     RAGI / FINGER MILLET
  ===================================================== */

  case 'ragi':

    this.cropDescription =
      'Ragi, also known as finger millet, is a nutritious and drought-tolerant cereal crop. It is valued for its calcium, fibre and other nutritional properties.';

    this.climate =
      'Ragi grows well in warm conditions and performs well under rainfed agriculture. It can tolerate short periods of moisture stress.';

    this.soil =
      'Well-drained red loam, sandy loam and fertile light soils are suitable.';

    this.water =
      'Moderate moisture is required during establishment, tillering, flowering and grain filling.';

    this.importance =
      'Ragi is a nutritious staple grain used in flour, porridge, malt and several value-added food products.';

    this.temperature =
      'Approximately 20°C–30°C';

    this.duration =
      'Approximately 90–120 days depending on variety and season.';

    this.spacing =
      'Commonly around 22.5 cm × 10 cm for transplanted crops, depending on variety and method.';

    this.monitoring =
      'Monitor shoot fly, aphids, cutworms, finger millet blast, smut, banded blight and nutrient deficiencies.';

    break;


  /* =====================================================
     SUNFLOWER
  ===================================================== */

  case 'sunflower':

    this.cropDescription =
      'Sunflower is an important oilseed crop cultivated for edible oil and seed. It is valued for its relatively short duration and adaptability.';

    this.climate =
      'Sunflower prefers warm conditions with good sunlight. Waterlogging and prolonged cloudy weather can affect growth and seed development.';

    this.soil =
      'Well-drained loam and sandy loam soils with good fertility are suitable.';

    this.water =
      'Irrigation is important during establishment, flowering and seed filling when rainfall is inadequate.';

    this.importance =
      'Sunflower seed is a major source of edible oil and provides income to farmers.';

    this.temperature =
      'Approximately 20°C–30°C';

    this.duration =
      'Approximately 90–110 days depending on variety.';

    this.spacing =
      'Commonly around 45 cm × 30 cm, depending on variety.';

    this.monitoring =
      'Monitor for capitulum borer, tobacco caterpillar, aphids, whitefly, Alternaria leaf spot, downy mildew, rust and other diseases.';

    break;


  /* =====================================================
     SESAME / GINGELLY
  ===================================================== */

  case 'sesame':

    this.cropDescription =
      'Sesame, also known as gingelly, is an important oilseed crop cultivated for edible seeds and high-quality oil.';

    this.climate =
      'Sesame prefers warm conditions and moderate rainfall. Excess moisture and waterlogging can severely affect the crop.';

    this.soil =
      'Well-drained sandy loam or loam soils are suitable. Heavy and poorly drained soils should be avoided.';

    this.water =
      'Sesame generally has moderate water requirements. Moisture is particularly important during establishment and flowering.';

    this.importance =
      'Sesame seeds are rich in oil and are used in food, traditional products and oil extraction.';

    this.temperature =
      'Approximately 25°C–35°C';

    this.duration =
      'Approximately 80–100 days depending on variety.';

    this.spacing =
      'Commonly around 30 cm × 10 cm, depending on variety and cultivation system.';

    this.monitoring =
      'Monitor for leaf roller, gall fly, capsule borer, phyllody, leaf spot, stem/root rot and sucking pests.';

    break;


  /* =====================================================
     ONION
  ===================================================== */

  case 'onion':

    this.cropDescription =
      'Onion is an important bulb vegetable and commercial crop. It is used fresh, cooked, dried and processed and is widely marketed across Tamil Nadu and India.';

    this.climate =
      'Onion prefers mild temperatures during bulb development with relatively dry conditions toward maturity. Excess humidity and rain can increase disease pressure.';

    this.soil =
      'Well-drained sandy loam to loam soils rich in organic matter are preferred. Waterlogging should be avoided.';

    this.water =
      'Regular and moderate irrigation is required during establishment and bulb development. Irrigation should be reduced near maturity.';

    this.importance =
      'Onion is an important vegetable and cash crop used in household consumption, hotels, food processing and dehydrated products.';

    this.temperature =
      'Approximately 13°C–25°C';

    this.duration =
      'Approximately 90–150 days depending on variety and season.';

    this.spacing =
      'Commonly around 15 cm × 10 cm or according to variety and planting method.';

    this.monitoring =
      'Monitor for thrips, purple blotch, Stemphylium blight, downy mildew, basal rot, bulb rot and nutrient deficiencies.';

    break;


  /* =====================================================
     TOMATO
  ===================================================== */

  case 'tomato':

    this.cropDescription =
      'Tomato is a widely cultivated vegetable crop valued for fresh consumption, cooking, sauces, puree and other processed products.';

    this.climate =
      'Tomato grows well under warm and moderate conditions. Excessive heat, heavy rainfall and high humidity can reduce fruit set and increase disease pressure.';

    this.soil =
      'Fertile, well-drained sandy loam or loam soil rich in organic matter is preferred.';

    this.water =
      'Regular irrigation is required, particularly during flowering and fruit development. Drip irrigation helps maintain uniform moisture.';

    this.importance =
      'Tomato is an important vegetable and commercial crop used in fresh markets and food-processing industries.';

    this.temperature =
      'Approximately 18°C–30°C';

    this.duration =
      'Approximately 90–150 days depending on variety and crop management.';

    this.spacing =
      'Commonly around 60 cm × 45 cm or according to variety.';

    this.monitoring =
      'Monitor fruit borer, whitefly, aphids, thrips, leaf miner, early blight, late blight, bacterial wilt, leaf curl virus and blossom-end rot.';

    break;


  /* =====================================================
     BRINJAL / EGGPLANT
  ===================================================== */

  case 'brinjal':

    this.cropDescription =
      'Brinjal, also known as eggplant, is a warm-season vegetable crop cultivated for fresh consumption and cooking. Many varieties with different fruit shapes and colours are grown.';

    this.climate =
      'Brinjal prefers warm conditions with adequate sunlight. Excessive humidity and waterlogging can increase pest and disease problems.';

    this.soil =
      'Fertile, well-drained loamy or sandy loam soils with good organic matter are suitable.';

    this.water =
      'Regular irrigation is required, especially during flowering and fruit development. Water stagnation should be avoided.';

    this.importance =
      'Brinjal is an important vegetable crop and provides regular market income to farmers.';

    this.temperature =
      'Approximately 22°C–30°C';

    this.duration =
      'Approximately 120–180 days depending on variety and management.';

    this.spacing =
      'Commonly around 60 cm × 60 cm depending on variety.';

    this.monitoring =
      'Monitor for shoot and fruit borer, aphids, jassids, whiteflies, mites, bacterial wilt, Phomopsis blight, leaf spot and little leaf disease.';

    break;


  /* =====================================================
     BITTER GOURD
  ===================================================== */

  case 'bitter-gourd':

    this.cropDescription =
      'Bitter gourd is a warm-season cucurbit vegetable cultivated for its edible fruits. It is valued for its nutritional properties and traditional food uses.';

    this.climate =
      'Bitter gourd prefers warm, humid conditions with good sunlight. Excess rainfall and poor drainage can increase disease incidence.';

    this.soil =
      'Well-drained fertile sandy loam or loam soil rich in organic matter is suitable.';

    this.water =
      'Regular irrigation is required during vine growth, flowering and fruit development. Waterlogging should be avoided.';

    this.importance =
      'Bitter gourd is a commercially important vegetable crop and is valued for its nutritional and traditional food uses.';

    this.temperature =
      'Approximately 24°C–30°C';

    this.duration =
      'Approximately 90–150 days depending on variety and management.';

    this.spacing =
      'Commonly around 2 m × 2 m or according to training system and variety.';

    this.monitoring =
      'Monitor for fruit fly, aphids, whiteflies, mites, downy mildew, powdery mildew, mosaic virus, bacterial wilt and fruit rots.';

    break;


  /* =====================================================
     TIRUPPUR — GARLIC
  ===================================================== */

  case 'garlic':

    this.cropDescription =
      'Garlic is an important bulb and spice crop cultivated for its cloves and bulbs. It is widely used in cooking, food processing, pickles, spice products and traditional preparations.';

    this.climate =
      'Garlic prefers cool to mild conditions during vegetative growth and relatively dry weather during bulb maturity. Excessive rainfall and high humidity can increase disease pressure and reduce bulb quality.';

    this.soil =
      'Fertile, loose and well-drained sandy loam or loam soil rich in organic matter is preferred. Heavy soils and waterlogged conditions should be avoided.';

    this.water =
      'Regular but moderate irrigation is required during establishment and bulb development. Irrigation should be reduced near maturity to support proper bulb curing and storage quality.';

    this.importance =
      'Garlic is an important spice and vegetable crop with good commercial value. It is marketed fresh, dried and processed into several food products.';

    this.temperature =
      'Approximately 12°C–25°C';

    this.duration =
      'Approximately 120–180 days depending on variety and season.';

    this.spacing =
      'Commonly around 15 cm × 10 cm, depending on variety and planting method.';

    this.monitoring =
      'Monitor for thrips, basal rot, purple blotch, Stemphylium blight, downy mildew, bulb rot and nutrient deficiencies. Regularly inspect leaves and bulbs for discoloration, pest injury and rotting.';

    break;


  /* =====================================================
     TIRUPPUR — GRAPES
  ===================================================== */

  case 'grapes':

    this.cropDescription =
      'Grapes are a high-value perennial fruit crop cultivated for fresh table grapes, raisins, juice and other processed products. Proper canopy management, irrigation, nutrition and disease management are important for good-quality production.';

    this.climate =
      'Grapes prefer warm conditions with good sunlight and relatively dry weather during fruit ripening. Excess humidity and rainfall during flowering, berry development and ripening can increase fungal diseases and fruit rots.';

    this.soil =
      'Deep, fertile and well-drained sandy loam or loam soils are preferred. Good drainage is essential because prolonged waterlogging can damage grapevine roots.';

    this.water =
      'Regular irrigation is important during establishment, shoot growth and berry development. Drip irrigation can provide precise water management. Irrigation should be carefully managed during flowering and fruit ripening.';

    this.importance =
      'Grapes are an important commercial fruit crop used for fresh consumption, raisins, juice and processing. They can provide high-value returns when vineyard and quality management are good.';

    this.temperature =
      'Approximately 15°C–35°C depending on growth stage and variety.';

    this.duration =
      'Perennial crop. Commercial production begins after vine establishment, while individual cropping cycles vary according to variety and production system.';

    this.spacing =
      'Commonly around 2.5 m × 1.5 m, although spacing varies according to variety, training system and vineyard management.';

    this.monitoring =
      'Monitor for powdery mildew, downy mildew, anthracnose, bunch and berry rots, mealybugs, thrips, leafhoppers, fruit cracking and bird damage. Inspect leaves, shoots, bunches and berries regularly.';

    break;


  /* =====================================================
     TIRUPPUR — BROCCOLI
  ===================================================== */

  case 'broccoli':

    this.cropDescription =
      'Broccoli is a cool-season vegetable crop grown for its compact edible green flower head and tender shoots. It is a nutritious, high-value vegetable suitable for fresh markets and processing.';

    this.climate =
      'Broccoli prefers cool to mild conditions. Excessive heat can cause premature flowering, loose heads and poor head quality. High humidity and prolonged wetness can increase fungal and bacterial diseases.';

    this.soil =
      'Fertile, well-drained loam or sandy loam soils rich in organic matter are preferred. Slightly acidic to neutral soil conditions are generally suitable. Waterlogging should be avoided.';

    this.water =
      'Regular soil moisture is important during transplant establishment and head development. Drip irrigation can help maintain uniform moisture while reducing prolonged leaf wetness.';

    this.importance =
      'Broccoli is a nutritious vegetable rich in vitamins, minerals and dietary fibre. It has good value in fresh vegetable markets and food processing.';

    this.temperature =
      'Approximately 15°C–25°C, with cooler conditions preferred for good head formation.';

    this.duration =
      'Approximately 60–100 days depending on variety and transplant age.';

    this.spacing =
      'Commonly around 45 cm × 45 cm or 60 cm × 45 cm depending on variety and growing conditions.';

    this.monitoring =
      'Monitor for diamondback moth, aphids, cabbage caterpillars, flea beetles, downy mildew, Alternaria leaf spot, black rot, clubroot and damping-off. Inspect leaves and developing heads regularly.';

    break;


  /* =====================================================
     TIRUPPUR — POTATO
  ===================================================== */

  case 'potato':

    this.cropDescription =
      'Potato is an important tuber crop cultivated for fresh consumption and processed products such as chips, fries, starch and other food products. Good soil structure and uniform moisture are important for proper tuber development.';

    this.climate =
      'Potato is a cool-season crop. Moderate temperatures favour vegetative growth and tuber formation, while excessive heat can reduce tuber development and quality. Frost can damage foliage.';

    this.soil =
      'Loose, friable, fertile and well-drained sandy loam or loam soil rich in organic matter is preferred. The soil should allow easy tuber expansion and harvesting. Waterlogging should be avoided.';

    this.water =
      'Uniform moisture is important during stolon formation, tuber initiation and tuber bulking. Excess irrigation and waterlogging should be avoided. Irrigation can be reduced toward maturity.';

    this.importance =
      'Potato is an important food and vegetable crop used fresh and in processed products including chips, fries, starch and dehydrated products.';

    this.temperature =
      'Approximately 15°C–25°C, with cooler conditions generally favourable for tuber formation.';

    this.duration =
      'Approximately 75–120 days depending on variety and growing season.';

    this.spacing =
      'Commonly around 45–60 cm between rows and 15–20 cm between plants, depending on variety and cultivation method.';

    this.monitoring =
      'Monitor for late blight, early blight, bacterial wilt, black scurf, soft rot, potato tuber moth, aphids, cutworms, white grubs, tuber damage and nutrient deficiencies.';

    break;


  /* =====================================================
     DEFAULT
  ===================================================== */

  default:

    this.cropDescription =
      'Crop information is being prepared for this crop. Please check the available crop and disease database entries.';

    this.climate =
      'Climate requirements depend on the specific crop and variety.';

    this.soil =
      'Select a well-drained soil suitable for the crop and maintain good soil fertility.';

    this.water =
      'Provide irrigation according to crop requirement and avoid waterlogging.';

    this.importance =
      'This crop can provide food, raw materials or income depending on its agricultural use.';

    this.temperature =
      'Variety and season dependent.';

    this.duration =
      'Variety and cultivation-season dependent.';

    this.spacing =
      'Follow the recommended spacing for the selected crop and variety.';

    this.monitoring =
      'Regularly inspect leaves, stems, roots, flowers and fruits for pests, diseases and nutrient deficiencies.';

    break;
}


}

/* =========================================================
NORMALIZE CROP ROUTE
========================================================= */

private normalizeCrop(value: string): string {


const crop = (value || '')
  .toLowerCase()
  .trim()
  .replace(/\s+/g, '-')
  .replace(/_/g, '-');

const aliases: Record<string, string> = {

  'coconut': 'coconut',
  'coconuts': 'coconut',

  'maize': 'maize',
  'corn': 'maize',

  'cholam': 'cholam',
  'sorghum': 'cholam',
  'jowar': 'cholam',

  'sugarcane': 'sugarcane',
  'sugar-cane': 'sugarcane',

  'cotton': 'cotton',

  'paddy': 'paddy',
  'rice': 'paddy',
  'paddy-rice': 'paddy',

  'turmeric': 'turmeric',

  'banana': 'banana-plantain',
  'bananas': 'banana-plantain',
  'plantain': 'banana-plantain',
  'banana-plantain': 'banana-plantain',

  'millet': 'millets',
  'millets': 'millets',
  'small-millets': 'millets',

  'tapioca': 'tapioca',
  'cassava': 'tapioca',
  'tapioca-cassava': 'tapioca',

  'mango': 'mango',
  'mangoes': 'mango',

  'oilseed': 'oilseeds',
  'oilseeds': 'oilseeds',
  'oil-seed': 'oilseeds',
  'oil-seeds': 'oilseeds',
  'oilseed-crop': 'oilseeds',
  'oilseed-crops': 'oilseeds',

  'groundnut': 'groundnut',
  'groundnuts': 'groundnut',
  'ground-nut': 'groundnut',
  'ground-nuts': 'groundnut',
  'peanut': 'groundnut',
  'peanuts': 'groundnut',
  'groundnut-crop': 'groundnut',

  'ragi': 'ragi',
  'finger-millet': 'ragi',
  'finger-millet-crop': 'ragi',
  'finger-millet-ragi': 'ragi',

  'sunflower': 'sunflower',

  'sesame': 'sesame',
  'gingelly': 'sesame',

  'onion': 'onion',
  'onions': 'onion',

  'tomato': 'tomato',
  'tomatoes': 'tomato',

  'brinjal': 'brinjal',
  'brinjals': 'brinjal',
  'eggplant': 'brinjal',
  'egg-plant': 'brinjal',

  'bitter-gourd': 'bitter-gourd',
  'bitter-gourds': 'bitter-gourd',
  'bitter-gourd-crop': 'bitter-gourd',
  'bitter-melon': 'bitter-gourd',
  'bitter-melons': 'bitter-gourd',

  'garlic': 'garlic',
  'garlics': 'garlic',
  'garlic-crop': 'garlic',

  'grape': 'grapes',
  'grapes': 'grapes',
  'grape-crop': 'grapes',
  'grape-crops': 'grapes',

  'broccoli': 'broccoli',
  'broccoli-crop': 'broccoli',

  'potato': 'potato',
  'potatoes': 'potato',
  'potato-crop': 'potato'
};

return aliases[crop] || crop;


}

/* =========================================================
DISPLAY NAME
========================================================= */

private getCropDisplayName(crop: string): string {


const names: Record<string, string> = {

  'coconut': 'Coconut',

  'maize': 'Maize',

  'cholam': 'Cholam / Sorghum',

  'sugarcane': 'Sugarcane',

  'cotton': 'Cotton',

  'paddy': 'Paddy / Rice',

  'turmeric': 'Turmeric',

  'banana-plantain': 'Banana / Plantain',

  'millets': 'Millets',

  'tapioca': 'Tapioca / Cassava',

  'mango': 'Mango',

  'oilseeds': 'Oilseeds',

  'groundnut': 'Groundnut',

  'ragi': 'Ragi / Finger Millet',

  'sunflower': 'Sunflower',

  'sesame': 'Sesame / Gingelly',

  'onion': 'Onion',

  'tomato': 'Tomato',

  'brinjal': 'Brinjal / Eggplant',

  'bitter-gourd': 'Bitter Gourd',

  'garlic': 'Garlic',

  'grapes': 'Grapes',

  'broccoli': 'Broccoli',

  'potato': 'Potato'
};

return names[crop] || this.formatCropName(crop);


}

/* =========================================================
FORMAT UNKNOWN CROP NAME
========================================================= */

private formatCropName(crop: string): string {


if (!crop) {
  return 'Crop';
}

return crop
  .split('-')
  .map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  )
  .join(' ');


}

/* =========================================================
DISEASE ICON
========================================================= */

getDiseaseIcon(disease: DiseaseInfo): string {


const text = (
  disease.name +
  ' ' +
  (disease.symptoms || '') +
  ' ' +
  (disease.cause || '')
).toLowerCase();


if (
  text.includes('mite') ||
  text.includes('insect') ||
  text.includes('pest') ||
  text.includes('borer') ||
  text.includes('beetle') ||
  text.includes('whitefly') ||
  text.includes('jassid') ||
  text.includes('thrips') ||
  text.includes('aphid') ||
  text.includes('hopper') ||
  text.includes('mealybug') ||
  text.includes('scale') ||
  text.includes('fruit fly') ||
  text.includes('caterpillar') ||
  text.includes('worm') ||
  text.includes('weevil')
) {
  return '🐛';
}


if (
  text.includes('virus') ||
  text.includes('viral')
) {
  return '🦠';
}


if (
  text.includes('bacteria') ||
  text.includes('bacterial')
) {
  return '🧫';
}


if (
  text.includes('fung') ||
  text.includes('rot') ||
  text.includes('mildew') ||
  text.includes('rust') ||
  text.includes('blight') ||
  text.includes('anthracnose') ||
  text.includes('spot')
) {
  return '🍄';
}


if (
  text.includes('nematode') ||
  text.includes('nematodes')
) {
  return '🪱';
}


return '🌱';


}

/* =========================================================
DISEASE CATEGORY
========================================================= */

getDiseaseCategory(disease: DiseaseInfo): string {


const text = (
  disease.name +
  ' ' +
  (disease.symptoms || '') +
  ' ' +
  (disease.cause || '')
).toLowerCase();


if (
  text.includes('mite') ||
  text.includes('insect') ||
  text.includes('pest') ||
  text.includes('borer') ||
  text.includes('beetle') ||
  text.includes('whitefly') ||
  text.includes('jassid') ||
  text.includes('thrips') ||
  text.includes('aphid') ||
  text.includes('hopper') ||
  text.includes('mealybug') ||
  text.includes('scale') ||
  text.includes('fruit fly') ||
  text.includes('caterpillar') ||
  text.includes('weevil')
) {
  return 'Pest';
}


if (
  text.includes('virus') ||
  text.includes('viral')
) {
  return 'Viral Disease';
}


if (
  text.includes('bacteria') ||
  text.includes('bacterial')
) {
  return 'Bacterial Disease';
}


if (
  text.includes('fung') ||
  text.includes('rot') ||
  text.includes('mildew') ||
  text.includes('rust') ||
  text.includes('blight') ||
  text.includes('anthracnose') ||
  text.includes('spot')
) {
  return 'Fungal Disease';
}


if (
  text.includes('nematode') ||
  text.includes('nematodes')
) {
  return 'Nematode Problem';
}


if (
  text.includes('nutrient') ||
  text.includes('deficiency')
) {
  return 'Nutrient Disorder';
}


return 'Crop Problem';


}

/* =========================================================
DISEASE URL
========================================================= */

getDiseaseUrl(disease: DiseaseInfo): any[] {


return [
  '/disease',
  this.routeCrop,
  disease.id
];


}

/* =========================================================
CHECK DISEASES
========================================================= */

hasDiseases(): boolean {
return this.diseases.length > 0;
}

/* =========================================================
DISEASE COUNT
========================================================= */

get diseaseCount(): number {
return this.diseases.length;
}

}
