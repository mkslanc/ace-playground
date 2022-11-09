import {MenuManager} from "ace-layout";
import {SAMPLES} from "./samples";
import {pathToTitle} from "./utils";

export function addMenu(callback) {
    var menuManager = MenuManager.getInstance();
    var outerPos = 0;
    var root = "Samples";
    menuManager.addByPath(root, {position: outerPos});
    Object.keys(SAMPLES).forEach(function (i) {
        let items = SAMPLES[i];
        menuManager.addByPath(root + '/' + pathToTitle(i), {position: outerPos});
        var innerPos = 0;
        for (let name of items) {
            let path = [root, i, name].join('/');
            menuManager.addByPath(pathToTitle(path), {
                position: innerPos,
                exec: () => callback(path.toLowerCase())
            });
            innerPos += 50;
        }
        outerPos += 50;
    });
}
