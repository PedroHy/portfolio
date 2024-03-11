import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  constructor(private router: Router){}

  navigateToHome = ()=>this.router.navigateByUrl('')
  
  navigateToAbout = ()=>this.router.navigateByUrl('/about')
  
  navigateToProjects = ()=>this.router.navigateByUrl('/projects')
  
  navigateToCertifications = ()=>this.router.navigateByUrl('/certifications')
  

}
