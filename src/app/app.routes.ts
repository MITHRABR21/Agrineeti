import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Crops } from './pages/crops/crops';
import { District } from './pages/district/district';
import { CropDetailsComponent } from './pages/crop-details/crop-details';
import { DiseaseDetails } from './pages/disease-details/disease-details';
import { DiseaseDetection } from './pages/disease-detection/disease-detection';
import { KnowledgeBase } from './pages/knowledge-base/knowledge-base';
import { About } from './pages/about/about';

export const routes: Routes = [

{
path: '',
component: Home
},

{
path: 'crops',
component: Crops
},

{
path: 'district/:district',
component: District
},

{
path: 'crop/:crop',
component: CropDetailsComponent
},

{
path: 'disease/:crop/:disease',
component: DiseaseDetails
},

{
path: 'disease-detection',
component: DiseaseDetection
},

{
path: 'knowledge-base',
component: KnowledgeBase
},

{
path: 'about',
component: About
},

{
path: '**',
redirectTo: ''
}

];
