/**
 * Plugin to extract all properties data from the diagram
 */

function extractProperties(graph) {
    const cells = graph.model.cells;
    const properties = [];

    for (let id in cells) {
        if (cells.hasOwnProperty(id)) {
            const cell = cells[id];
            if (cell.value && cell.value.attributes) {
                const attrs = cell.value.attributes;
                const prop = {};
                for (let i = 0; i < attrs.length; i++) {
                    prop[attrs[i].name] = attrs[i].value;
                }
                properties.push(prop);
            }
        }
    }

    return properties;
}

function outputPropertiesToJsonFile(properties) {
    const json = JSON.stringify(properties, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'properties.json';
    a.click();
    URL.revokeObjectURL(url);
}

function registerPlugin(ui) {
    ui.actions.addAction('extractProperties', function() {
        const graph = ui.editor.graph;
        const properties = extractProperties(graph);
        console.log(properties);
        outputPropertiesToJsonFile(properties);
    });

    const menu = ui.menus.get('extras');
    const oldFunct = menu.funct;

    menu.funct = function(menu, parent) {
        oldFunct.apply(this, arguments);
        ui.menus.addMenuItem(menu, 'extractProperties', parent);
    };
}

Draw.loadPlugin(function(ui) {
    registerPlugin(ui);
});

export { extractProperties, outputPropertiesToJsonFile };
