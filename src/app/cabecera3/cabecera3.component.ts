import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cabecera3',
  standalone: true,
  imports: [],
  templateUrl: './cabecera3.component.html',
  styleUrl: './cabecera3.component.css'
})
export class Cabecera3Component {

  @ViewChild('imagencabecera') imagencabecera!: ElementRef<HTMLImageElement>;

  ngAfterViewInit(){
    this.imagencabecera.nativeElement.src = 'https://aguacatec.es/wp-content/uploads/2023/10/e5a978b8-6772-4c85-a50e-15581af7d483.png'
  }

}
