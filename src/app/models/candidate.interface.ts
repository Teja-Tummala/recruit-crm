// models/candidate.interface.ts

// Enum for better type safety
export enum CandidateStatus {
  ACTIVE = 'Active',
  INACTIVE = 'Inactive',
  BLACKLISTED = 'Blacklisted',
  HIRED = 'Hired'
}

export enum EmploymentStatus {
  EMPLOYED = 'Employed',
  UNEMPLOYED = 'Unemployed',
  NOTICE_PERIOD = 'Notice Period',
  FREELANCER = 'Freelancer'
}

export enum SalaryType {
  ANNUAL = 'Annual',
  MONTHLY = 'Monthly',
  HOURLY = 'Hourly',
  CONTRACT = 'Contract'
}

export enum JobStatus {
  ASSIGNED = 'Assigned',
  IN_PROGRESS = 'In Progress',
  COMPLETED = 'Completed',
  REJECTED = 'Rejected',
  ON_HOLD = 'On Hold'
}

export enum NoteType {
  NOTE = 'Note',
  TODO = 'To Do',
  REMINDER = 'Reminder'
}

// Main Candidate interface with optional fields and better types
export interface Candidate {
  id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  location: string;
  currentOrganization?: string; // Optional since candidate might be unemployed
  skills: string[];
  availableFrom: string; // Consider using Date type: Date | string
  currentSalary?: number; // Optional for unemployed candidates
  noticePeriod: string;
  fullAddress: string;
  resume?: string; // Optional - might not always have resume URL/path
  totalExperience: number; // In years
  summary?: string; // Optional
  currentEmploymentStatus: EmploymentStatus;
  dateOfBirth: string; // Consider using Date type: Date | string
  relevantExperience: number; // In years
  salaryExpectation?: number; // Optional
  status: CandidateStatus;
  salaryType: SalaryType;
  languageSkills: string; // Consider making this string[] for better structure
  contactLinked: boolean;
  
  // Additional useful fields
  createdAt?: string; // When candidate was added
  updatedAt?: string; // Last modification
  source?: string; // How candidate was sourced (LinkedIn, referral, etc.)
  assignedJobs?: AssignedJob[]; // Related jobs
  notes?: Note[]; // Related notes
}

// Improved AssignedJob interface
export interface AssignedJob {
  id: string;
  title: string;
  company: string;
  assignedDate: string; // Consider using Date type
  status: JobStatus;
  candidateId?: string; // Link back to candidate
  priority?: 'Low' | 'Medium' | 'High';
  deadline?: string; // Consider using Date type
}

// Improved Note interface
export interface Note {
  id: string;
  content: string;
  author: string;
  date: string; // Consider using Date type
  type: NoteType;
  candidateId?: string; // Link back to candidate
  isCompleted?: boolean; // For To Do items
  priority?: 'Low' | 'Medium' | 'High';
}

// Utility type for creating a new candidate (without id and timestamps)
export type CreateCandidateDto = Omit<Candidate, 'id' | 'createdAt' | 'updatedAt' | 'assignedJobs' | 'notes'>;

// Utility type for updating a candidate (all fields optional except id)
export type UpdateCandidateDto = Partial<Omit<Candidate, 'id'>> & { id: string };

// Search/Filter interface for candidate queries
export interface CandidateSearchFilters {
  name?: string;
  email?: string;
  position?: string;
  location?: string;
  skills?: string[];
  status?: CandidateStatus;
  employmentStatus?: EmploymentStatus;
  minExperience?: number;
  maxExperience?: number;
  minSalaryExpectation?: number;
  maxSalaryExpectation?: number;
}