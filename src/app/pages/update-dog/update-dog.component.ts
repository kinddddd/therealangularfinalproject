import { DogService } from 'src/app/services/dog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-dog',
  templateUrl: './update-dog.component.html',
  styleUrls: ['./update-dog.component.scss']
})
export class UpdateDogComponent implements OnInit {

  dogForm!: FormGroup;
  updatedDog!: any;
  id: any;

  constructor(private activatedRoute: ActivatedRoute, private dogService: DogService, private formBuiler: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.dogService.getDog(this.id).subscribe(data => {
        this.updatedDog = data;

        this.dogForm = this.formBuiler.group({
          breed: [this.updatedDog.breed, [Validators.required]],
          life: [this.updatedDog.life, [Validators.required]],
          size: [this.updatedDog.size, [Validators.required]],
          description: [this.updatedDog.size, [Validators.required]],
          img: [this.updatedDog.img, [Validators.required]]

        })
      });
    });

  }

  onFileChange(event:any) {
    const file = event.target.files[0];
    this.dogForm.patchValue({
      img: file
    });
  }

  onSubmit(){
    const formData = this.dogForm.value;
    /* formData.append('breed', this.dogForm.get('breed')?.value)
    formData.append('life', this.dogForm.get('life')?.value)
    formData.append('weight', this.dogForm.get('weight')?.value)
    formData.append('size', this.dogForm.get('size')?.value)
    formData.append('img', this.dogForm.get('img')?.value) */
    this.dogService.putDog(this.id, formData).subscribe(() => this.router.navigate(['/dogs']));
  }

}
