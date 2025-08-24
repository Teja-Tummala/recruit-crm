import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CandidateStateService } from '../../services/candidate.api.service';
import { EditCandidateComponent } from '../edit-candidate/edit-candidate.component';

interface CandidateData {
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

interface JobAssignment {
  id: string;
  title: string;
  company: string;
  candidateName: string;
  assignedDate: string;
  status: string;
  initial: string;
  isActive: boolean;
}

interface Note {
  id: string;
  type: 'Note' | 'To Do';
  content: string;
  author: string;
  date: string;
  associations: number;
}
@Component({
  selector: 'app-candidate-details',
  standalone: true,
  imports: [CommonModule, EditCandidateComponent],
  templateUrl: './candidate-details.component.html',
  styleUrl: './candidate-details.component.scss'
})
export class CandidateDetailsComponent {
  candidateState = inject(CandidateStateService);

  showEditModal = false;
  activeTab = 'assignedJobs';

  candidate: CandidateData = {
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
  };

  notes: Note[] = [
    {
      id: '1',
      type: 'Note',
      content: 'Lorem dolore sit et ante cupidatat eu Lorem tempor proleint consequat. In dolore mollit laborium ex cillum laboris occesseacat ipsum Lorem cupidatat.',
      author: 'John Doe',
      date: 'Jul 12, 2023, 11:54 am',
      associations: 1
    },
    {
      id: '2',
      type: 'Note',
      content: 'Lorem dolore sit et ante cupidatat eu Lorem tempor proleint consequat. In dolore mollit laborium ex cillum laboris occesseacat ipsum Lorem cupidatat.',
      author: 'John Doe',
      date: 'Jul 12, 2023, 11:54 am',
      associations: 1
    },
    {
      id: '3',
      type: 'Note',
      content: 'Lorem dolore sit et ante cupidatat eu Lorem tempor proleint consequat. In dolore mollit laborium ex cillum laboris occesseacat ipsum Lorem cupidatat.',
      author: 'John Doe',
      date: 'Jul 12, 2023, 11:54 am',
      associations: 1
    }
  ];

  assignedJobs: JobAssignment[] = [
    {
      id: '1',
      title: 'Senior Product Manager',
      company: 'Recruit CRM',
      candidateName: 'William Bucher',
      assignedDate: 'Jul 10, 2023',
      status: 'Assigned',
      initial: 'M',
      isActive: true
    },
    {
      id: '2',
      title: 'Junior Product Manager',
      company: 'Recruit CRM',
      candidateName: 'John Smith',
      assignedDate: 'Aug 10, 2029',
      status: 'Assigned',
      initial: 'J',
      isActive: true
    },
    {
      id: '3',
      title: 'Senior Engineer',
      company: 'Recruit CRM',
      candidateName: 'Stephan Addam',
      assignedDate: 'Dec 10, 2020',
      status: 'Assigned',
      initial: 'S',
      isActive: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.candidateState.refreshCandidate('231');
  }

  openEditModal(): void {
    this.showEditModal = true;
  }

  closeEditModal(): void {
    this.showEditModal = false;
  }
  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  trackByJobId(index: number, job: JobAssignment): string {
    return job.id;
  }

  assignToJob(): void {
    console.log('Assign to job clicked');
    // Implement assign to job logic
  }

  viewAllJobs(): void {
    console.log('View all jobs clicked');
    // Implement view all jobs logic
  }

  viewFiles(jobId: string): void {
    console.log('View files clicked for job:', jobId);
    // Implement view files logic
  }

  toggleJob(jobId: string): void {
    const job = this.assignedJobs.find(j => j.id === jobId);
    if (job) {
      job.isActive = !job.isActive;
      console.log(`Job ${jobId} toggled to:`, job.isActive);
    }
  }
}
