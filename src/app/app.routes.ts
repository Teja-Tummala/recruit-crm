import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { CandidateDetailsComponent } from './components/candidate-details/candidate-details.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: CandidateDetailsComponent },
    ]
  }
];
