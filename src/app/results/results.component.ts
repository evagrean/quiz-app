import { Component, Input } from '@angular/core';
import { Answers, Question } from '../quiz.model';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  // used to make answers available to parent component (= questions)
  // so that parent can pass it to child component (= results)
  @Input() answers: Answers;
  @Input() questions: Question[];
}