import { Component } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { Quiz } from '../quiz.model';
import { MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  standalone: true,
  imports: [    
    MatCardModule,
    RouterModule
  ],
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  private quiz: Quiz[] = [];

  constructor(private questionsService: QuestionsService) {
    this.questionsService.getQuizzes()
      .subscribe(quiz => {
        this.quiz = quiz;
      });
  }



}
