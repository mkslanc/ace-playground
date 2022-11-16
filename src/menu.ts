import {MenuManager, TabManager, CommandManager} from "ace-layout";
import {SAMPLES} from "./samples";
import {pathToTitle} from "./utils";
import {Layouts} from "./layouts/layouts";
import {createRunButton} from "./playground";

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

    root = "View";
    menuManager.addByPath(root, {position: 50});

    var toggle = () => TabManager.getInstance().containers["console"].toggleShowHide();
    menuManager.addByPath(root + "/Toggle Console", {
        position: 0,
        exec: toggle,
        hotKey: "F6"
    });

    CommandManager.registerCommands([{
        bindKey: {
            win: "F6",
            mac: "F6"
        },
        exec: toggle
    }]);

    root = "View/Layout";
    menuManager.addByPath(root, {position: 100});
    outerPos = 0;

    Object.keys(Layouts).forEach(function (i) {
        let changeLayout = () => {
            var currentTabManager = TabManager.getInstance();
            currentTabManager.setState(Layouts[i]);
            var button = createRunButton();
            currentTabManager?.containers["main"].addButtons(button);
        };
        menuManager.addByPath(root + '/' + i, {position: outerPos, exec: changeLayout});
        outerPos += 50;
    });
}
