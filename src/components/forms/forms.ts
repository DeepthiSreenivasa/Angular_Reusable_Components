import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.html',
  imports: [FormsModule],
  styleUrl: './forms.css',
})
export class Forms {
  public userDetails: any = {
    firstName: '',
    lastName: '',
  };

  getFormData(): any {
    console.log('into getFormData');
    console.log(this.userDetails);
  }
}
