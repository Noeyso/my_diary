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
import { BaseComponent } from "./../../component.js";
var TextSectionInput = /** @class */ (function (_super) {
    __extends(TextSectionInput, _super);
    function TextSectionInput() {
        return _super.call(this, "<div class=\"dialog-form\">\n            <div class=\"form-container\">\n                <label for=\"title\" class=\"dialog-label\">Title</label>\n                <input type=\"text\" id=\"title\" />\n            </div>\n            <div class=\"form-container\">\n                <label for=\"body\" class=\"dialog-label\">Body</label>\n                <textarea type=\"text\" row=\"3\" id=\"body\"></textarea>\n            </div>\n        </div>") || this;
    }
    Object.defineProperty(TextSectionInput.prototype, "title", {
        get: function () {
            var element = this.element.querySelector("#title");
            return element.value;
        },
        set: function (text) {
            var element = this.element.querySelector("#title");
            element.value = text;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextSectionInput.prototype, "body", {
        get: function () {
            var element = this.element.querySelector("#body");
            return element.value;
        },
        set: function (text) {
            var element = this.element.querySelector("#body");
            element.value = text;
        },
        enumerable: false,
        configurable: true
    });
    return TextSectionInput;
}(BaseComponent));
export { TextSectionInput };
//# sourceMappingURL=text-input.js.map