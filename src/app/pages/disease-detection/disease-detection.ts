import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component
} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  AdvisoryData,
  getAdvisory
} from '../../data/advisory-data';


interface PredictionItem {
  class: string;
  confidence: number;
}


interface PredictionResult {
  success: boolean;
  crop: string;
  condition: string;
  confidence: number;
  confidenceLevel: 'Low' | 'Moderate' | 'High';
  message: string;
  topPredictions: PredictionItem[];
}


@Component({
  selector: 'app-disease-detection',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './disease-detection.html',
  styleUrl: './disease-detection.css'
})
export class DiseaseDetection {

  /* =====================================================
     AI BACKEND
  ====================================================== */

  private readonly apiUrl =
    'http://127.0.0.1:5000/predict';


  /* =====================================================
     PAGE STATE
  ====================================================== */

  selectedFile: File | null = null;

  previewUrl: string | null = null;

  result: PredictionResult | null = null;

  advisory: AdvisoryData | null = null;

  loading = false;

  errorMessage = '';

  dragActive = false;


  /* =====================================================
     CONSTRUCTOR
  ====================================================== */

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {}


  /* =====================================================
     FILE SELECTION
  ====================================================== */

  onFileSelected(event: Event): void {

    const input =
      event.target as HTMLInputElement;

    if (
      !input.files ||
      input.files.length === 0
    ) {
      return;
    }

    this.prepareImage(
      input.files[0]
    );
  }


  /* =====================================================
     DRAG AND DROP
  ====================================================== */

  onDragOver(event: DragEvent): void {

    event.preventDefault();

    this.dragActive = true;
  }


  onDragLeave(event: DragEvent): void {

    event.preventDefault();

    this.dragActive = false;
  }


  onDrop(event: DragEvent): void {

    event.preventDefault();

    this.dragActive = false;

    const files =
      event.dataTransfer?.files;

    if (
      !files ||
      files.length === 0
    ) {
      return;
    }

    this.prepareImage(
      files[0]
    );
  }


  /* =====================================================
     PREPARE IMAGE
  ====================================================== */

  private prepareImage(
    file: File
  ): void {

    this.errorMessage = '';

    this.result = null;

    this.advisory = null;

    this.loading = false;


    /* Check file type */

    if (
      !file.type.startsWith('image/')
    ) {

      this.errorMessage =
        'Please select a valid image file.';

      return;
    }


    /* Maximum file size = 10 MB */

    const maximumSize =
      10 * 1024 * 1024;

    if (
      file.size > maximumSize
    ) {

      this.errorMessage =
        'Image size must be less than 10 MB.';

      return;
    }


    this.selectedFile = file;


    /* Remove previous preview */

    if (this.previewUrl) {

      URL.revokeObjectURL(
        this.previewUrl
      );
    }


    /* Create new preview */

    this.previewUrl =
      URL.createObjectURL(file);


    this.cdr.detectChanges();
  }


  /* =====================================================
     ANALYZE IMAGE
  ====================================================== */

  analyzeImage(): void {

    if (!this.selectedFile) {

      this.errorMessage =
        'Please upload a leaf image first.';

      return;
    }


    if (this.loading) {
      return;
    }


    /* Reset previous state */

    this.loading = true;

    this.errorMessage = '';

    this.result = null;

    this.advisory = null;


    this.cdr.detectChanges();


    /* Create FormData */

    const formData =
      new FormData();


    formData.append(
      'image',
      this.selectedFile,
      this.selectedFile.name
    );


    console.log(
      'Sending image to AgriNeeti AI:',
      this.selectedFile.name
    );


    /* Send image to Flask */

    this.http
      .post<PredictionResult>(
        this.apiUrl,
        formData
      )
      .subscribe({

        /* =============================================
           SUCCESS
        ============================================== */

        next: (response) => {

          console.log(
            'AgriNeeti prediction response:',
            response
          );


          this.result = response;


          /* =========================================
             LOAD ADVISORY DATA
          ========================================== */

          const advisoryResult =
            getAdvisory(
              response.crop,
              response.condition
            );


          if (advisoryResult) {

            this.advisory =
              advisoryResult;

            console.log(
              'AgriNeeti advisory loaded:',
              advisoryResult
            );

          } else {

            this.advisory = null;

            console.warn(
              'No advisory found for:',
              response.crop,
              response.condition
            );
          }


          this.loading = false;

          this.errorMessage = '';


          this.cdr.detectChanges();
        },


        /* =============================================
           ERROR
        ============================================== */

        error: (error) => {

          console.error(
            'AgriNeeti prediction error:',
            error
          );


          this.loading = false;

          this.result = null;

          this.advisory = null;


          if (error.status === 0) {

            this.errorMessage =
              'Unable to connect to the AgriNeeti AI server. Make sure the Flask backend is running.';

          } else if (
            error.error?.error
          ) {

            this.errorMessage =
              error.error.error;

          } else if (
            error.error?.message
          ) {

            this.errorMessage =
              error.error.message;

          } else {

            this.errorMessage =
              'Something went wrong while analyzing the image. Please try again.';
          }


          this.cdr.detectChanges();
        },


        /* =============================================
           COMPLETE
        ============================================== */

        complete: () => {

          console.log(
            'AgriNeeti prediction request completed.'
          );

          this.loading = false;

          this.cdr.detectChanges();
        }

      });
  }


  /* =====================================================
     RESET DETECTION
  ====================================================== */

  resetDetection(): void {

    this.selectedFile = null;

    this.result = null;

    this.advisory = null;

    this.errorMessage = '';

    this.loading = false;

    this.dragActive = false;


    if (this.previewUrl) {

      URL.revokeObjectURL(
        this.previewUrl
      );

      this.previewUrl = null;
    }


    this.cdr.detectChanges();
  }


  /* =====================================================
     FILE NAME
  ====================================================== */

  get fileName(): string {

    return (
      this.selectedFile?.name ||
      ''
    );
  }


  /* =====================================================
     FILE SIZE
  ====================================================== */

  get fileSize(): string {

    if (!this.selectedFile) {

      return '';
    }


    const sizeInMB =
      this.selectedFile.size /
      (1024 * 1024);


    if (sizeInMB >= 1) {

      return (
        sizeInMB.toFixed(2) +
        ' MB'
      );
    }


    const sizeInKB =
      this.selectedFile.size /
      1024;


    return (
      sizeInKB.toFixed(1) +
      ' KB'
    );
  }


  /* =====================================================
     CONFIDENCE CSS CLASS
  ====================================================== */

  get confidenceClass(): string {

    if (!this.result) {

      return '';
    }


    return (
      this.result
        .confidenceLevel
        .toLowerCase()
    );
  }


  /* =====================================================
     CONFIDENCE ICON
  ====================================================== */

  get confidenceIcon(): string {

    if (!this.result) {

      return '🌿';
    }


    switch (
      this.result.confidenceLevel
    ) {

      case 'High':

        return '✓';


      case 'Moderate':

        return '◐';


      case 'Low':

        return '!';


      default:

        return '🌿';
    }
  }


  /* =====================================================
     HEALTHY RESULT
  ====================================================== */

  get isHealthy(): boolean {

    return (
      this.advisory?.status ===
      'Healthy'
    );
  }


  /* =====================================================
     DISEASE RESULT
  ====================================================== */

  get isDisease(): boolean {

    return (
      this.advisory?.status ===
      'Disease'
    );
  }


  /* =====================================================
     GENERAL CONDITION
  ====================================================== */

  get isCondition(): boolean {

    return (
      this.advisory?.status ===
      'Condition'
    );
  }


  /* =====================================================
     LOW CONFIDENCE
  ====================================================== */

  get isLowConfidence(): boolean {

    return (
      this.result?.confidenceLevel ===
      'Low'
    );
  }


  /* =====================================================
     MODERATE CONFIDENCE
  ====================================================== */

  get isModerateConfidence(): boolean {

    return (
      this.result?.confidenceLevel ===
      'Moderate'
    );
  }


  /* =====================================================
     HIGH CONFIDENCE
  ====================================================== */

  get isHighConfidence(): boolean {

    return (
      this.result?.confidenceLevel ===
      'High'
    );
  }


  /* =====================================================
     ADVISORY HEADING
  ====================================================== */

  get advisoryHeading(): string {

    if (!this.advisory) {

      return '';
    }


    if (this.isHealthy) {

      return 'Plant Appears Healthy';
    }


    if (this.isLowConfidence) {

      return (
        'Information About Possible ' +
        this.advisory.condition
      );
    }


    if (this.isModerateConfidence) {

      return (
        'Advisory for Possible ' +
        this.advisory.condition
      );
    }


    return (
      'Advisory for ' +
      this.advisory.condition
    );
  }


  /* =====================================================
     ADVISORY CONFIDENCE MESSAGE
  ====================================================== */

  get advisoryConfidenceMessage(): string {

    if (!this.result) {

      return '';
    }


    if (this.isHealthy) {

      if (this.isLowConfidence) {

        return (
          'The model slightly favours a healthy result, ' +
          'but confidence is low. Upload another clear ' +
          'leaf image for confirmation.'
        );
      }


      return (
        'The AI model did not strongly detect one of the ' +
        'supported disease conditions in this image.'
      );
    }


    if (this.isLowConfidence) {

      return (
        'The AI found some visual features associated with ' +
        this.result.condition +
        ', but the prediction is uncertain. The information ' +
        'below is provided for awareness and should not be ' +
        'treated as a confirmed diagnosis.'
      );
    }


    if (this.isModerateConfidence) {

      return (
        'The AI detected features that may be associated with ' +
        this.result.condition +
        '. Consider checking the listed symptoms and uploading ' +
        'another clear image for additional confirmation.'
      );
    }


    return (
      'The AI detected visual features associated with ' +
      this.result.condition +
      '. Review the symptoms and recommended management ' +
      'information below.'
    );
  }


  /* =====================================================
     FORMAT PREDICTION CLASS
  ====================================================== */

  formatPredictionName(
    value: string
  ): string {

    if (!value) {

      return '';
    }


    return value
      .replace(/_/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

}