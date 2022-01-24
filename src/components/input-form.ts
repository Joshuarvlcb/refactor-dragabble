import { projectState } from "../state/project";
import { Validatable, validate } from "../util/validation";
export class ProjectInput {
  template: HTMLTemplateElement;
  hostEl: HTMLElement;
  formEl: HTMLFormElement;
  titleInput: HTMLInputElement;
  descInput: HTMLInputElement;
  peopleInput: HTMLInputElement;

  constructor() {
    this.template = document.getElementById(
      "project-input"
    ) as HTMLTemplateElement;

    this.hostEl = document.getElementById("app") as HTMLElement;
    const importedTemplate = document.importNode(this.template.content, true);
    this.formEl = importedTemplate.firstElementChild as HTMLFormElement;
    this.formEl.id = "user-input";

    this.titleInput = this.formEl.querySelector("#title") as HTMLInputElement;
    this.descInput = this.formEl.querySelector(
      "#description"
    ) as HTMLInputElement;
    this.peopleInput = this.formEl.querySelector("#people") as HTMLInputElement;
    this.init();
    this.attach();
  }
  private init() {
    this.formEl.addEventListener("submit", this.submitHandler.bind(this));
  }

  //! private because it will only be used by the class you cant access it outside of the class
  private attach() {
    this.hostEl.insertAdjacentElement("afterbegin", this.formEl);
  }
  // @Autobind
  private submitHandler(e: Event) {
    e.preventDefault();
    const userInputs = this.gatherUserInputs();

    if (userInputs) {
      const [title, desc, people] = userInputs;
      projectState.addProject(title, desc, people);
      this.clearInput();
    }
  }

  private clearInput() {
    this.titleInput.value = "";
    this.descInput.value = "";
    this.peopleInput.value = "";
  }

  private gatherUserInputs(): [string, string, number] | void {
    const userTitle = this.titleInput.value;
    const userDesc = this.descInput.value;
    const userPeople = +this.peopleInput.value;

    const titleIsValid: Validatable = {
      value: userTitle,
      required: true,
    };
    const descIsValid: Validatable = {
      value: userDesc,
      required: true,
      minLength: 2,
    };

    const peopleIsValid: Validatable = {
      value: userPeople,
      required: true,
      min: 1,
      max: 5,
    };
    if (
      !validate(titleIsValid) ||
      !validate(descIsValid) ||
      !validate(peopleIsValid)
    ) {
      return console.log("something is wrong please fix");
    }

    if (!userTitle || !userDesc || !userPeople)
      return console.log("something is blank please fill it in");

    return [userTitle, userDesc, +userPeople];
  }
}
