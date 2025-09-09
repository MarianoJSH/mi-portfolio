import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project [] = [];

  constructor (private projectService: ProjectService){}

  ngOnInit() {
    this.projectService.getProjects().subscribe(data => {
      this.projects = data;
    });
  }
}
