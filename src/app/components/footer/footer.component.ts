import { Component,  OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl,  } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { ProductsService } from 'src/app/services/products.service';
import { Information } from 'src/app/shared/information';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  currentYear!: number;
  emailForm!: FormGroup;
  public information: Information[] = [];

  email!: string;

  constructor(
    public apiService: ApiService,
    private formBuilder: FormBuilder,
    public productService: ProductsService,
  ) {}

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
    this.loadInfo();
    this.emailForm = new FormGroup({
      id: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
    });
  }

  getEmail() {
    alert(`email ` + this.email + ` register succesful`);
    console.log(this.email);
    this.emailForm.reset();
  }

  loadInfo(): void {
    this.productService
      .getInfo()
      .subscribe((information:Information[]) => (this.information = information));
      
  }
  get emails(){
    return this.emailForm.get('email');
  }
}




