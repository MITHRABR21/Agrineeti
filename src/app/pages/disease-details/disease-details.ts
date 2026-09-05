import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import {
  DISEASE_DATA,
  DiseaseInfo
} from '../../data/disease-data';

@Component({
  selector: 'app-disease-details',
  standalone: true,

  imports: [
    CommonModule,
    RouterLink
  ],

  templateUrl: './disease-details.html',
  styleUrl: './disease-details.css'
})
export class DiseaseDetails implements OnInit {

  /* =====================================================
     PAGE DATA
  ====================================================== */

  disease: DiseaseInfo | undefined;

  cropName = '';
  diseaseName = '';

  routeCrop = '';
  routeDisease = '';

  loading = true;


  /* =====================================================
     CONSTRUCTOR
  ====================================================== */

  constructor(
    private route: ActivatedRoute
  ) {}


  /* =====================================================
     INITIALIZE
  ====================================================== */

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      const rawCrop =
        params.get('crop') || '';

      const rawDisease =
        params.get('disease') || '';

      this.routeCrop =
        this.normalizeCrop(rawCrop);

      this.routeDisease =
        this.normalizeSlug(rawDisease);

      this.cropName =
        this.getCropDisplayName(
          this.routeCrop
        );

      this.diseaseName =
        this.formatDisplayName(
          rawDisease
        );

      this.loading = true;

      this.disease = undefined;


      /* =================================================
         STEP 1
         EXACT ID MATCH
      ================================================== */

      this.disease =
        DISEASE_DATA.find(item => {

          return (
            this.normalizeSlug(item.id) ===
            this.routeDisease
          );

        });


      /* =================================================
         STEP 2
         CROP + DISEASE ID
      ================================================== */

      if (!this.disease) {

        const possibleId =
          `${this.routeCrop}-${this.routeDisease}`;

        this.disease =
          DISEASE_DATA.find(item => {

            return (
              this.normalizeSlug(item.id) ===
              possibleId
            );

          });

      }


      /* =================================================
         STEP 3
         MATCH USING CROP + ID
      ================================================== */

      if (!this.disease) {

        this.disease =
          DISEASE_DATA.find(item => {

            const itemCrop =
              this.normalizeCrop(item.crop);

            const itemId =
              this.normalizeSlug(item.id);

            return (

              itemCrop === this.routeCrop

              &&

              (
                itemId === this.routeDisease

                ||

                itemId ===
                `${this.routeCrop}-${this.routeDisease}`

                ||

                itemId.endsWith(
                  `-${this.routeDisease}`
                )
              )

            );

          });

      }


      /* =================================================
         STEP 4
         MATCH USING DISEASE NAME
      ================================================== */

      if (!this.disease) {

        this.disease =
          DISEASE_DATA.find(item => {

            const itemCrop =
              this.normalizeCrop(item.crop);

            const itemName =
              this.normalizeSlug(item.name);

            return (

              itemCrop === this.routeCrop

              &&

              (
                itemName === this.routeDisease

                ||

                itemName.includes(
                  this.routeDisease
                )

                ||

                this.routeDisease.includes(
                  itemName
                )
              )

            );

          });

      }


      /* =================================================
         STEP 5
         CHOLAM / SORGHUM SUPPORT
      ================================================== */

      if (
        !this.disease &&
        this.routeCrop === 'cholam'
      ) {

        this.disease =
          DISEASE_DATA.find(item => {

            const itemCrop =
              this.normalizeCrop(item.crop);

            const itemId =
              this.normalizeSlug(item.id);

            return (

              itemCrop === 'cholam'

              &&

              (
                itemId === this.routeDisease

                ||

                itemId ===
                `cholam-${this.routeDisease}`

                ||

                itemId.endsWith(
                  `-${this.routeDisease}`
                )
              )

            );

          });

      }


      /* =================================================
         FINAL DISPLAY VALUES
      ================================================== */

      if (this.disease) {

        this.diseaseName =
          this.disease.name;

        this.cropName =
          this.getCropDisplayName(
            this.disease.crop
          );

      }


      this.loading = false;


      /* =================================================
         DEBUG
      ================================================== */

      console.log(
        '========================================'
      );

      console.log(
        'AGRINEETI — DISEASE DETAILS'
      );

      console.log(
        'Route Crop:',
        rawCrop
      );

      console.log(
        'Normalized Crop:',
        this.routeCrop
      );

      console.log(
        'Route Disease:',
        rawDisease
      );

      console.log(
        'Normalized Disease:',
        this.routeDisease
      );

      console.log(
        'Found Disease:',
        this.disease
      );

      console.log(
        'Symptoms:',
        this.disease?.symptoms
      );

      console.log(
        'Cause:',
        this.disease?.cause
      );

      console.log(
        'Favorable Conditions:',
        this.disease?.favorableConditions
      );

      console.log(
        'Prevention:',
        this.disease?.prevention
      );

      console.log(
        'Solutions:',
        this.disease?.solution
      );

      console.log(
        'Management:',
        this.disease?.management
      );

      console.log(
        '========================================'
      );

    });

  }


  /* =====================================================
     NORMALIZE CROP
  ====================================================== */

  private normalizeCrop(
    value: string
  ): string {

    let normalized = '';

    try {

      normalized =
        decodeURIComponent(value);

    } catch {

      normalized =
        value;

    }

    normalized =
      normalized
        .toLowerCase()
        .trim()
        .replace(/[_\s]+/g, '-')
        .replace(/-+/g, '-');


    const aliases: Record<string, string> = {

      coconut: 'coconut',

      maize: 'maize',

      cholam: 'cholam',

      sorghum: 'cholam',

      'cholam-sorghum': 'cholam',

      'cholam-sorghum-crop': 'cholam',

      'sorghum-crop': 'cholam',

      sugarcane: 'sugarcane',

      cotton: 'cotton'

    };


    return (
      aliases[normalized] ||
      normalized
    );

  }


  /* =====================================================
     NORMALIZE SLUG
  ====================================================== */

  private normalizeSlug(
    value: string
  ): string {

    let normalized = '';

    try {

      normalized =
        decodeURIComponent(value);

    } catch {

      normalized =
        value;

    }

    return normalized
      .toLowerCase()
      .trim()
      .replace(/[_\s]+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');

  }


  /* =====================================================
     FORMAT DISPLAY NAME
  ====================================================== */

  private formatDisplayName(
    value: string
  ): string {

    let decoded = '';

    try {

      decoded =
        decodeURIComponent(value);

    } catch {

      decoded =
        value;

    }

    return decoded
      .replace(/[-_]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

  }


  /* =====================================================
     CROP DISPLAY NAME
  ====================================================== */

  private getCropDisplayName(
    crop: string
  ): string {

    const normalized =
      this.normalizeCrop(crop);

    const names: Record<string, string> = {

      coconut: 'Coconut',

      maize: 'Maize',

      cholam: 'Cholam / Sorghum',

      sugarcane: 'Sugarcane',

      cotton: 'Cotton'

    };

    return (
      names[normalized] ||
      this.formatDisplayName(normalized)
    );

  }


  /* =====================================================
     DISEASE TYPE ICON
  ====================================================== */

  getDiseaseIcon(): string {

    if (!this.disease) {

      return '🌿';

    }

    const category =
      this.disease.category
        .toLowerCase();


    if (
      category.includes('mite')
    ) {

      return '🕷️';

    }


    if (
      category.includes('insect') ||
      category.includes('pest') ||
      category.includes('borer') ||
      category.includes('beetle') ||
      category.includes('whitefly') ||
      category.includes('jassid') ||
      category.includes('thrips') ||
      category.includes('aphid')
    ) {

      return '🐛';

    }


    if (
      category.includes('viral') ||
      category.includes('virus')
    ) {

      return '🦠';

    }


    if (
      category.includes('bacterial') ||
      category.includes('bacter')
    ) {

      return '🧫';

    }


    if (
      category.includes('fung') ||
      category.includes('rot') ||
      category.includes('mildew') ||
      category.includes('rust') ||
      category.includes('blight')
    ) {

      return '🍄';

    }


    return '🌿';

  }


  /* =====================================================
     CATEGORY LABEL
  ====================================================== */

  getCategoryLabel(): string {

    if (!this.disease) {

      return 'Crop Health';

    }

    return this.disease.category;

  }


  /* =====================================================
     CHECK SOLUTIONS
  ====================================================== */

  hasSolutions(): boolean {

    return (
      !!this.disease &&
      Array.isArray(this.disease.solution) &&
      this.disease.solution.length > 0
    );

  }


  /* =====================================================
     CHECK PREVENTION
  ====================================================== */

  hasPrevention(): boolean {

    return (
      !!this.disease &&
      Array.isArray(this.disease.prevention) &&
      this.disease.prevention.length > 0
    );

  }


  /* =====================================================
     CHECK MANAGEMENT
  ====================================================== */

  hasManagement(): boolean {

    return (
      !!this.disease &&
      Array.isArray(this.disease.management) &&
      this.disease.management.length > 0
    );

  }


  /* =====================================================
     CHECK SYMPTOMS
  ====================================================== */

  hasSymptoms(): boolean {

    return (
      !!this.disease &&
      Array.isArray(this.disease.symptoms) &&
      this.disease.symptoms.length > 0
    );

  }


  /* =====================================================
     CHECK FAVORABLE CONDITIONS
  ====================================================== */

  hasFavorableConditions(): boolean {

    return (
      !!this.disease &&
      Array.isArray(
        this.disease.favorableConditions
      ) &&
      this.disease.favorableConditions.length > 0
    );

  }


  /* =====================================================
     CHECK DISEASE INFORMATION
  ====================================================== */

  hasDiseaseInformation(): boolean {

    return (
      !!this.disease &&
      !!this.disease.diseaseInformation &&
      this.disease.diseaseInformation.trim().length > 0
    );

  }


  /* =====================================================
     SOLUTION COUNT
  ====================================================== */

  get solutionCount(): number {

    return (
      this.disease?.solution?.length || 0
    );

  }


  /* =====================================================
     PREVENTION COUNT
  ====================================================== */

  get preventionCount(): number {

    return (
      this.disease?.prevention?.length || 0
    );

  }


  /* =====================================================
     MANAGEMENT COUNT
  ====================================================== */

  get managementCount(): number {

    return (
      this.disease?.management?.length || 0
    );

  }


  /* =====================================================
     SYMPTOM COUNT
  ====================================================== */

  get symptomCount(): number {

    return (
      this.disease?.symptoms?.length || 0
    );

  }


  /* =====================================================
     FAVORABLE CONDITION COUNT
  ====================================================== */

  get favorableConditionCount(): number {

    return (
      this.disease?.favorableConditions?.length || 0
    );

  }

}