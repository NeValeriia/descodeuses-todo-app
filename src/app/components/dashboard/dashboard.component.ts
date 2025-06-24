import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  todos: Todo[] = [];

  kpis = [
    {
      id: 1,
      title: "A faire aujourdh'ui",
      colorClass: '!bg-blue-500',
      value: 0,
      icon: 'event',
    },
    {
      id: 2,
      title: 'Taches en retard',
      colorClass: '!bg-red-500',
      value: 0,
      icon: 'warning',
    },
    {
      id: 3,
      title: 'Urgentes',
      colorClass: '!bg-yellow-500',
      value: 0,
      icon: 'priority_high',
    },
  ];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.fetchTodo();
  }

  fetchTodo() {
    //Communication asynchrone donc il faut s'inscrire pour avoir le retour
    this.todoService.getTodos().subscribe((data) => {
      this.todos = data;
      //creer 3 variables de type nombre
      let today = new Date(2025, 5, 10);

      //Urgentes: priority = 1 Et due date = Aujourd'hui
      //les == n'est pas utilisable avec les objets Date
      //pour cela je converti en string avec la fonction .toDateString
      //afin de pouvoir utiliser "==="
      let countUrgent = 0,
        countToday = 0,
        countLate = 0;
      countUrgent = this.todos.filter(
        (c) =>
          c.priority == '1' &&
          new Date(c.dueDate).toDateString() == today.toDateString()
      ).length;

      this.kpis[2].value = countUrgent;

      //A faire aujourd'hui: due date = Aujourd'hui
      // en utilisant la boucle for remplir la valeur de countToday

      for (let i = 0; i < this.todos.length; i++) {
        if (
          new Date(this.todos[i].dueDate).toDateString() == today.toDateString()
        ) {
          countToday++;
        }
      }
      this.kpis[0].value = countToday;

      //Tache en retard: due date < Aujourd'hui

      for (let i = 0; i < this.todos.length; i++) {
        if (new Date(this.todos[i].dueDate) < today) countLate = countLate + 1;
      }
      this.kpis[1].value = countLate;
    });
  }
  //KPI
  //KeyPerformanceIndicators  - Indicateur de performances clés
  //Comme un tableau de voitures: essence, huile, temperature..
}
