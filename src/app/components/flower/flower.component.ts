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
isEdit: boolean = false;

  constructor() { }

  ngOnInit() {
    this.flowerSelect('chamomilla');
  }

showEdit() {
this.isEdit = !this.isEdit;
}

deleteOpt(option) {
for(let i = 0; i < this.options.length; i++) {
if(this.options[i] == option)
this.options.splice(i, 1);

}
}

addOpt(option) {
this.options.unshift(option);
return false;

}

    flowerSelect(flowerName) {
      if(flowerName == 'chamomilla') {
      this.name = ' Ромашка';
      this.high = 15;
      this.family = ' Хрестоцвіті';
      this.colors = {
        head: ' білий',
        stem: ' зелений',
        leaf: ' зелений'
      };
      this.options = ["Вигляд", "Запах", "Термін стояння"];
    } else if (flowerName == 'rose') {
      this.name = ' Троянда';
      this.high = 25;
      this.family = ' Розові';
      this.colors = {
        head: ' червоний, білий, жовтий',
        stem: ' світло-зелений',
        leaf: ' темно-зелений'
      };
      this.options = ["Вигляд", "Запах", "Термін стояння"];
    } else {
      this.name = ' Лілія';
      this.high = 40;
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
