import {ServiceManager} from "ace-linters/services/service-manager";

let manager = new ServiceManager(self);
manager.registerService("html", {
    module: () => import("ace-linters/services/html/html-service"),
    className: "HtmlService",
    modes: "html"
});
manager.registerService("css", {
    module: () => import("ace-linters/services/css/css-service"),
    className: "CssService",
    modes: "css"
});
manager.registerService("typescript", {
    module: () => import("ace-linters/services/typescript/typescript-service"),
    className: "TypescriptService",
    modes: "typescript|javascript|tsx|jsx",
});