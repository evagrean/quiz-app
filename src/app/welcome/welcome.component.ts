import { Component } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { Quiz } from '../quiz.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  quiz: Quiz[];

  constructor(private questionsService: QuestionsService) { 
    this.questionsService.getQuizzes()
    .subscribe(quiz => {
      this.quiz = quiz;
    });
  }

 

}
