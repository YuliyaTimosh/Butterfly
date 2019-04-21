import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.css']
})
export class FlowerComponent implements OnInit {

name:string;
high:number;
family:string;
colors:Colors;
options:string[];

  constructor() { }

  ngOnInit() {
    this.flowerSelect('chamomilla');
  }

    flowerSelect(flowerName) {
      if(flowerName == 'chamomilla') {
      this.name = ' Ромашка';
      this.high = 15 + ' см';
      this.family = ' Хрестоцвіті';
      this.colors = {
        head: ' білий',
        stem: ' зелений',
        leaf: ' зелений'
      };
      this.options = ["Вигляд", "Запах", "Термін стояння"];
    } else if (flowerName == 'rose') {
      this.name = ' Троянда';
      this.high = 25 + ' см';
      this.family = ' Розові';
      this.colors = {
        head: ' червоний, білий, жовтий',
        stem: ' світло-зелений',
        leaf: ' темно-зелений'
      };
      this.options = ["Вигляд", "Запах", "Термін стояння"];
    } else {
      this.name = ' Лілія';
      this.high = 40 + ' см';
      this.family = ' Лілійні';
      this.colors = {
        head: ' жовтий',
        stem: ' зелений',
        leaf: ' салатовий'
      };
      this.options = ["Вигляд", "Запах", "Термін стояння"];


    }


    }




  }

  interface Colors {
    head:string;
    stem:string;
    leaf:string;
  }
