import { TextData } from "../dialog.js";
import { BaseComponent } from "./../../component.js";
export class TextSectionInput
  extends BaseComponent<HTMLElement>
  implements TextData
{
  constructor() {
    super(`<div class="dialog-form">
            <div class="form-container">
                <label for="title" class="dialog-label">Title</label>
                <input type="text" id="title" />
            </div>
            <div class="form-container">
                <label for="body" class="dialog-label">Body</label>
                <textarea type="text" row="3" id="body"></textarea>
            </div>
        </div>`);
  }
  get title(): string {
    const element = this.element.querySelector("#title")! as HTMLInputElement;
    return element.value;
  }
  get body(): string {
    const element = this.element.querySelector("#body")! as HTMLInputElement;
    return element.value;
  }
  set title(text: string) {
    const element = this.element.querySelector("#title")! as HTMLInputElement;
    element.value = text;
  }
  set body(text: string) {
    const element = this.element.querySelector("#body")! as HTMLInputElement;
    element.value = text;
  }
}
