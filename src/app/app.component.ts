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
  url = ''

  constructor(private router: Router){
    this.url = router.url
  }
  

  navigateToHome = ()=>{this.router.navigateByUrl(''); this.url = '/'}
  
  navigateToAbout = ()=>{this.router.navigateByUrl('/about'); this.url = '/about'}
  
  navigateToProjects = ()=>{this.router.navigateByUrl('/projects'); this.url = '/projects'}
  
  navigateToCertifications = ()=>{this.router.navigateByUrl('/certifications'); this.url = '/certifications'}
  

}
