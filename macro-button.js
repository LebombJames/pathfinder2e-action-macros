Hooks.on('renderActorSheet', function(obj, html) {
		
		const actor = obj.actor;
		
		if (!(actor.data.type === "character" && actor.canUserModify(game.user, "update"))) return;
        let element = html.find(".window-header .window-title");
        if (element.length != 1) return;

        let button = $(`<a class="popout" style><i class="fas fa-book"></i>Add Actions</a>`);
        button.on('click', () => (actionMacroExecute(obj.object)));
        element.after(button);
    }

);

async function actionMacroExecute(actor) {
const macroToRun = await game.packs.filter(p => p.metadata.entity === 'Macro' && p.metadata.package === "pathfinder2eactionmacros")[0].getDocuments()
await (macroToRun[0]).execute(actor)	
}
