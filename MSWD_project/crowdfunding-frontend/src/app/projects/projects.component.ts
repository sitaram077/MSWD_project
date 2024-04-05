import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service'; // Import the service

interface Project {
  title: string;
  description: string;
  goalAmount: number;
  raisedAmount: number;
  // Add other relevant project details
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {} // Inject the service

  ngOnInit(): void {
    this.projectService.getProjects()
      .subscribe(projects => this.projects = projects);
  }
}
