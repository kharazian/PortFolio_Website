import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Meta, Title } from "@angular/platform-browser";

import { PROJECTS } from "./projects";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent implements OnInit {
  title = "Recent projects";

  projects = PROJECTS;

  constructor(
    private router: Router,
    private titleService: Title,
    private metaTagService: Meta
  ) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: "projects",
      content: "AmirKharazian.ir",
    });
  }
}
