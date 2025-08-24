import { Injectable, signal, computed } from '@angular/core';
import { BehaviorSubject, Observable, of, delay } from 'rxjs';

export interface CandidateApiService {
  id: string;
  name: string;
  position: string;
  location: string;
  city: string;
  email: string;
  phone: string;
  currentOrganization: string;
  skills: string;
  availableFrom: string;
  currentSalary: string;
  noticePeriod: string;
  fullAddress: string;
  resume: string;
  totalExperience: string;
  summary: string;
  currentEmploymentStatus: string;
  dateOfBirth: string;
  relevantExperience: string;
  salaryExpectation: string;
  status: string;
  salaryType: string;
  languageSkills: string;
}

@Injectable({
  providedIn: 'root'
})
export class CandidateStateService {
  private candidateSignal = signal<CandidateApiService>({
    id: '231',
    name: 'William Sample',
    position: 'Senior Product Manager',
    location: 'United States',
    city: 'Dallas',
    email: 'williamsample@gmail.com',
    phone: '+91 9021232326',
    currentOrganization: 'World Bank Group',
    skills: 'HTML, CSS, Javascript',
    availableFrom: 'Jul, 14, 2023',
    currentSalary: '$6000',
    noticePeriod: '90 Days',
    fullAddress: '9400 Ashton Rd, Philadelphia...',
    resume: 'Resume',
    totalExperience: '5 Years',
    summary: 'Current Organization',
    currentEmploymentStatus: 'Employed',
    dateOfBirth: '15 June 1993',
    relevantExperience: '7 Years',
    salaryExpectation: '$9000',
    status: 'Submitted to Client',
    salaryType: 'Annual',
    languageSkills: 'English(Elementary proficiency)'
  });

  private loadingSignal = signal<boolean>(false);
  private errorSignal = signal<string | null>(null);

  candidate = this.candidateSignal.asReadonly();
  loading = this.loadingSignal.asReadonly();
  error = this.errorSignal.asReadonly();

  candidateFullName = computed(() =>
    `${this.candidateSignal().name} (ID: ${this.candidateSignal().id})`
  );

  getCandidateById(id: string): Observable<CandidateApiService> {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);

    return of(this.candidateSignal()).pipe(
      delay(1000) // Simulate network delay
    );
  }

  updateCandidate(updatedData: Partial<CandidateApiService>): Observable<CandidateApiService> {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);

    return new Observable(observer => {
      setTimeout(() => {
        try {
          const currentCandidate = this.candidateSignal();
          const newCandidate = { ...currentCandidate, ...updatedData };

          this.candidateSignal.set(newCandidate);
          this.loadingSignal.set(false);

          observer.next(newCandidate);
          observer.complete();
        } catch (error) {
          this.errorSignal.set('Failed to update candidate');
          this.loadingSignal.set(false);
          observer.error(error);
        }
      }, 1500);
    });
  }

  resetError(): void {
    this.errorSignal.set(null);
  }

  refreshCandidate(id: string): void {
    this.getCandidateById(id).subscribe({
      next: (candidate) => {
        this.candidateSignal.set(candidate);
        this.loadingSignal.set(false);
      },
      error: (error) => {
        this.errorSignal.set('Failed to load candidate');
        this.loadingSignal.set(false);
      }
    });
  }
}