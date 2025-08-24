import { Component, EventEmitter, Input, Output, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CandidateStateService } from '../../services/candidate.api.service';

@Component({
  selector: 'app-edit-candidate',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-candidate.component.html',
  styleUrl: './edit-candidate.component.scss'
})
export class EditCandidateComponent {
  @Input() isOpen = false;
  @Output() closeEvent = new EventEmitter<void>();

  candidateState = inject(CandidateStateService);
  private fb = inject(FormBuilder);

  editForm: FormGroup;

  constructor() {
    this.editForm = this.createForm();
  }

  ngOnInit() {
    // Populate form with current candidate data
    const currentCandidate = this.candidateState.candidate();
    this.editForm.patchValue(currentCandidate);
  }

  private createForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      position: ['', Validators.required],
      location: [''],
      city: [''],
      currentOrganization: [''],
      skills: [''],
      availableFrom: [''],
      currentSalary: [''],
      noticePeriod: [''],
      fullAddress: [''],
      resume: [''],
      totalExperience: [''],
      summary: [''],
      currentEmploymentStatus: [''],
      dateOfBirth: [''],
      relevantExperience: [''],
      salaryExpectation: [''],
      status: [''],
      salaryType: [''],
      languageSkills: ['']
    });
  }

  onSubmit() {
    if (this.editForm.valid) {
      const formData = this.editForm.value;
      this.candidateState.updateCandidate(formData).subscribe({
        next: () => {
          this.closeModal();
        },
        error: (error) => {
          console.error('Update failed:', error);
        }
      });
    } else {
      this.markFormGroupTouched();
    }
  }

  private markFormGroupTouched() {
    Object.keys(this.editForm.controls).forEach(key => {
      const control = this.editForm.get(key);
      control?.markAsTouched();
    });
  }

  closeModal() {
    this.closeEvent.emit();
  }

  onOverlayClick(event: Event) {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }
}
