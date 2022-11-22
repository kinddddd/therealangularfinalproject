import { Component, OnInit } from '@angular/core';
import { DogService } from 'src/app/services/dog.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {

  myDogs?: any[];

  constructor(private dogService: DogService) {

    this.dogService.getAllDogs().subscribe((data:any) => {
      this.myDogs = [...data];
      
    });

   }

  ngOnInit(): void {
  }

}
