Hooks.on('ready', () => {
    new Dialog({
        title: "Pathfinder 2e Add Actions",
        content: `<p>Pathfinder 2e Add Actions is now deprecated. You should unistall the module. </p> <p>It was my first Js project so the code is a mess, plus it just makes your character sheet look messy. You should use <a href=https://foundryvtt.com/packages/pf2e-sheet-skill-actions>PF2e Character Sheet Skill Actions</a> instead, it's much better </p> <p>I love you.</p>`,
        buttons: {
            yes: {
                icon: '<i class="fas fa-heart"></i>'
            }
        }
        
    }).render(true)
})