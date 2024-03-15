import { Component } from '@angular/core';
import projectsApi from '../../../assets/api/projects'

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects = projectsApi;

   constructor(){}
}
