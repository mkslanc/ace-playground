import {MenuManager, TabManager, CommandManager} from "ace-layout";
import {SAMPLES} from "./samples";
import {pathToTitle} from "./utils";
import {Layouts} from "./layouts/layouts";
import {createRunButton, initTabs, runSample} from "./playground";

export function addMenu(callback) {
    var menuManager = MenuManager.getInstance();
    var position = 0;
    var root = "Samples";
    menuManager.addByPath(root, {position: position});
    Object.keys(SAMPLES).forEach(function (i) {
        let items = SAMPLES[i];
        for (let name of items) {
            position++;
            let path = [root, name].join('/');
            menuManager.addByPath(pathToTitle(path), {
                position: position,
                exec: () => callback(path.toLowerCase())
            });
        }
        position++;
        menuManager.addByPath(root + '/~' + position, {position: position});
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
    position = 0;

    Object.keys(Layouts).forEach(function (i) {
        let changeLayout = () => {
            var currentTabManager = TabManager.getInstance();
            currentTabManager.setState(Layouts[i]);
            initTabs();
            var button = createRunButton();
            currentTabManager?.containers["main"].addButtons(button);

            runSample();
        };
        menuManager.addByPath(root + '/' + i, {position: position, exec: changeLayout});
        position++;
    });
}
