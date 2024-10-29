import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from '../questions.service';
import { Answers } from '../quiz.model';
import { MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { QuestionFormComponent } from '../question-form/question-form.component';
import { ResultsComponent } from '../results/results.component';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  standalone: true,
  imports: [    
    MatCardModule,
    RouterModule,
    CommonModule,
    QuestionFormComponent,
    ResultsComponent
  ],
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  quiz: any;
  answers: any;
  questions: any;
  currentQuestionIndex: any;

  showResults = false;
  // inject both the active route and the questions service
  constructor(private route: ActivatedRoute, private questionsService: QuestionsService) {        
  }

  ngOnInit() {
    //read from the dynamic route and load the proper quiz data
    this.questionsService.getQuestions(this.route.snapshot.params['quizId'])
      .subscribe(questions => {
        this.questions = questions;
        this.answers = new Answers();
        this.currentQuestionIndex = 0;        
      });
  }

  updateChoice(choice: any) {
    console.log(choice);
    this.answers.values[this.currentQuestionIndex] = choice.value;
  }

  nextOrViewResults() {
    if (this.currentQuestionIndex === this.questions.length - 1) {
      this.showResults = true;
      return;
    }
    this.currentQuestionIndex++;
  }

  reset() {
    this.quiz = undefined;
    this.questions = undefined;
    this.answers = undefined;
    this.currentQuestionIndex = undefined;
  }

  
}
