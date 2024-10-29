import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionsComponent } from './questions/questions.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent, },
  { path: 'welcome', component: WelcomeComponent },
  { path: ':quizId', component: QuestionsComponent },  
  { path: '', redirectTo: 'welcome', pathMatch: 'prefix' }
];
