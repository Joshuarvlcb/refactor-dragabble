import { Autobind } from "../decorators/auto-bind";
import { Project, ProjectStatus } from "../interface/project-model";
import { projectState } from "../state/project";
import { ProjectItem } from "./item"; 
import {DragTarget} from '../interface/drag-drop'

export class ProjectList implements DragTarget {
  templateEl: HTMLTemplateElement;
  hostEl: HTMLElement;
  element: HTMLElement;
  assignedProjects: Project[];

  constructor(private type: "active" | "finished") {
    this.assignedProjects = [];
    this.templateEl = document.getElementById(
      "project-list"
    ) as HTMLTemplateElement;
    this.hostEl = document.getElementById("app") as HTMLElement;

    const importedTemplate = document.importNode(this.templateEl.content, true);
    this.element = importedTemplate.querySelector("section") as HTMLElement;
    this.element.id = `${type}-projects`;
    this.attach();
    this.init();
    this.renderContent();
  }
  private init() {
    this.element.addEventListener("dragover", this.dragOverHandler);
    this.element.addEventListener("dragleave", this.dragLeaveHandler);
    this.element.addEventListener("drop", this.dropHandler);

    projectState.addListener((projects: Project[]) => {
      const revelantProjects = projects.filter((prj) => {
        if (this.type === "active") {
          return prj.status === ProjectStatus.Active;
        }
        return prj.status === ProjectStatus.Active;
      });
      this.assignedProjects = revelantProjects;
      this.renderProjects();
    });
  }

  private renderProjects() {
    const listEl = document.getElementById(
      `${this.type}-projects-list`
    ) as HTMLUListElement;
    listEl.innerHTML = "";
    for (const projectItem of this.assignedProjects) {
      new ProjectItem(projectItem, this.element.querySelector("ul")!.id);
    }
  }

  private renderContent() {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector("ul")!.id = listId;
    this.element.querySelector("h2")!.textContent =
      this.type.toUpperCase() + " Projects";
  }

  private attach() {
    this.hostEl.insertAdjacentElement("beforeend", this.element);
  }

  @Autobind
  dragLeaveHandler(_: DragEvent): void {
    const listEl = this.element.querySelector("ul")!;
    listEl.classList.remove("droppable");
  }

  @Autobind
  dragOverHandler(e: DragEvent): void {
    if (e.dataTransfer && e.dataTransfer.types[0] === "text/plain") {
      e.preventDefault();
      const listEl = this.element.querySelector("ul")!;
      listEl.classList.add("droppable");
    }
  }

  @Autobind
  dropHandler(e: DragEvent): void {
    const prjId = e.dataTransfer!.getData("text/plain");
    projectState.moveProject(
      prjId,
      this.type == "active" ? ProjectStatus.Active : ProjectStatus.Finished
    );
  }
}
