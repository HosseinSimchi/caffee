import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { SubHeaderComponent } from "../sub-header/sub-header.component";

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, SubHeaderComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
