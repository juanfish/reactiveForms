import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-manfinales',
  templateUrl: './manfinales.component.html',
  styleUrls: ['./manfinales.component.css']
})
export class ManfinalesComponent implements OnInit {
  
  form = this.fb.group({ 

    lessons: this.fb.array([
      this.fb.group({
        title: ['Titulo', Validators.required],
        level: ['Principiante', Validators.required]
      }),
      
    ]),
    

  });

  constructor(public fb : FormBuilder) {
    
   }

  ngOnInit(): void {
  }

  get lessons() {
    return this.form.controls["lessons"] as FormArray;
    
  }

  getDlessons(x : AbstractControl):FormGroup{
    return x as FormGroup
  }
  

  getGroup(x : FormGroup) : FormGroup{
    return x as FormGroup;
  }

  addLesson() {
    const lessonForm = this.fb.group({
      title: ['', Validators.required],
      level: ['', Validators.required]
    });
    this.lessons.push(lessonForm);
  }

  deleteLesson(lessonIndex: number) {
    this.lessons.removeAt(lessonIndex);
  }
  onSubmit(){
    
    console.log(this.lessons.value);
    
  }

}
