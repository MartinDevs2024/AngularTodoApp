import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Todo } from 'src/app/_models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  title="todos";
  todos: Todo [];
  inputTodo: string = "";

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    this.todos = []
  }

  toggleDone(id: number) {
    this.todos.map((v ,i)=> {
      if(i== id) v.completed = !v.completed
      return v;
    })
  }

  deleteTodo(id: number) {
    this.toastr.warning('This cannot be undone','this is info');
    this.todos = this.todos.filter((v, i) => i !== id);

  }

  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    })
    this.toastr.success("New Todo is been added it!!")
    this.inputTodo = "";
    console.log(this.todos);
  }
}
