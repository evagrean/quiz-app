import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  standalone: true,
  imports: [    
    MatCardModule,
    RouterModule,
    CommonModule,
    ResultsComponent
  ],
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  // used to make answers available to parent component (= questions)
  // so that parent can pass it to child component (= results)
  @Input() answers: any;
  @Input() questions: any;
}