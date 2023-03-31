import {ServiceManager} from "ace-linters/build/service-manager";

let manager = new ServiceManager(self);
manager.registerService("html", {
    module: () => import("ace-linters/build/html-service"),
    className: "HtmlService",
    modes: "html"
});
manager.registerService("css", {
    module: () => import("ace-linters/build/css-service"),
    className: "CssService",
    modes: "css"
});
manager.registerService("typescript", {
    module: () => import("ace-linters/build/typescript-service"),
    className: "TypescriptService",
    modes: "typescript|javascript|tsx|jsx",
});
