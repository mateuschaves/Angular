import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  contatos = [
    {id: 1, nome: 'Mateus Henrique', email: 'mateus@gmail.com'},
    {id: 2, nome: 'Livia', email: 'livia@gmail.com'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
