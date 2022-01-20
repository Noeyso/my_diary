var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { BaseComponent } from "../../component.js";
var NoteComponent = /** @class */ (function (_super) {
    __extends(NoteComponent, _super);
    function NoteComponent(title, content) {
        var _this = _super.call(this, "<section class=\"note-container\">\n\t\t\t\t\t\t<h2 class=\"note__title\"></h2>\n\t\t\t\t\t\t<p class=\"note__content\"></p>\n\t\t\t\t\t</section>") || this;
        var titleElement = _this.element.querySelector(".note__title");
        titleElement.textContent = title;
        var contentElement = _this.element.querySelector(".note__content");
        contentElement.textContent = content;
        return _this;
    }
    return NoteComponent;
}(BaseComponent));
export { NoteComponent };
//# sourceMappingURL=note.js.map