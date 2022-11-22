import { Router } from '@angular/router';
import { DogService } from 'src/app/services/dog.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-dog',
  templateUrl: './new-dog.component.html',
  styleUrls: ['./new-dog.component.scss']
})
export class NewDogComponent implements OnInit {

  newDog: any = {
    breed: '',
    life: '',
    size: '',
    description: '',
    img: ''
  }

  dogForm!: FormGroup;

  constructor(private dogService: DogService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.dogForm = this.formBuilder.group({
      breed: ['', [Validators.required]],
      life: ['', [Validators.required]],
      size: ['', [Validators.required]],
      description: ['', [Validators.required]],
      img: ['', [Validators.required]]
    });

    this.dogForm.valueChanges.subscribe((changes) => {
      this.newDog = changes;
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
    this.dogService.postDog(formData).subscribe(() => this.router.navigate(['/dogs']));
  }

}
