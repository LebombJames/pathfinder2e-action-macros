Hooks.on('renderActorSheet', function(obj, html) {

        let element = html.find(".window-header .window-title");
        if (element.length != 1) return;

        let button = $(`<a class="popout" style><i class="fas fa-book"></i>Add Actions</a>`);
        button.on('click', () => actionMacroExecute(obj.object));
        element.after(button);
    }

);

function actionMacroExecute(targetActor) {
    (game.macros.getName("Add Actions Macro")).execute()
}
