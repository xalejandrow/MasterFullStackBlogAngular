import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  public page_titile: string;

  constructor() {
    this.page_titile = 'Página no encontrada';
  }

  ngOnInit(): void {
  }

}
