import {Ace, EditorType, TabManager} from "ace-layout";

function ctorName(obj) {
    let ctor = obj.constructor?.name;
    if (ctor)
        return ctor;
    let m = /\[object (\w+)\]/.exec(obj + "");
    return m ? m[1] : null;
}

function serialize(val) {
    let seen = new Set;
    function inner(val) {
        if (val instanceof Error)
            return {error: val.toString(), stack: val.stack};
        if (typeof val == "function")
            return {function: val.name || "?"};
        if (val == null || typeof val != "object")
            return val;
        if (seen.has(val))
            return {cycle: true};
        seen.add(val);
        if (Array.isArray(val))
            return {array: val.map(inner)};
        let result = {object: Object.create(null), ctor: ctorName(val)};
        for (let prop of Object.keys(val)) {
            try {
                result.object[prop] = inner(val[prop]);
            } catch {

            }
        }
        return result;
    }
    return inner(val);
}

export function windowError (e: MessageEvent) {
    let errorData = e.data;
    if (errorData?.type?.startsWith("webpack"))
        return;
    let errorMessage = "";
    if (errorData.log) {
        let log = errorData.log;
        errorMessage = errorData.elements.filter((el) => el != null).map((el) => {
            let element = serialize(el);
            return log + ": " + (log == "error" || log == "warning" ? element.error : element);
        }).join("\n");
    }

    displayError(errorMessage);
}

export function displayError(errorMessage: string) {
    let tabManager = TabManager.getInstance();
    let terminal = tabManager.open<Ace.EditSession>({
        title: "Log",
        path: 'terminal',
        editorType: EditorType.ace
    }, "console");
    terminal.session.setValue(errorMessage);
    tabManager.loadFile(terminal);
}