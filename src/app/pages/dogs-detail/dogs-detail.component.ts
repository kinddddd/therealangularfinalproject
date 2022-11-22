import { DogService } from 'src/app/services/dog.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dogs-detail',
  templateUrl: './dogs-detail.component.html',
  styleUrls: ['./dogs-detail.component.scss']
})
export class DogsDetailComponent implements OnInit {

  id:any;
  myDog:any;

  constructor(private dogService: DogService, private activatedRoute: ActivatedRoute, private router: Router) {

    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.dogService.getDog(this.id).subscribe((data:any) => {
        this.myDog = {...data}
      })
    })

   }

  ngOnInit(): void {
  }

  deleteDog(){
    this.dogService.deleteDog(this.id).subscribe();
    this.router.navigate(['/dogs'])
  }

}
