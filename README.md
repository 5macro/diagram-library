# Diagram Library

## [draw.io](https://app.diagrams.net/)

- Custom Shape Library:
    - Elements: https://raw.githubusercontent.com/5macro/diagram-library/refs/heads/main/drawio/custom-shape-library/Elements.xml
    - Solutions: https://raw.githubusercontent.com/5macro/diagram-library/refs/heads/main/drawio/custom-shape-library/Solutions.xml

## Plugin to Extract Properties Data

A new plugin has been created to extract all properties data from the diagram. The plugin is located in the `drawio/plugins/extractProperties.js` file.

### How to Use the Plugin

1. Open your diagram in the draw.io web UI.

2. Go to the "Extras" menu.

3. Click on the "Extract Properties" option.

This will log an array of objects, each containing the properties of an element in the diagram to the console.

### Output Properties Data to JSON File

The plugin also allows you to output the extracted properties data to a JSON file.

1. Follow the steps above to extract the properties data.

2. The properties data will be automatically downloaded as a file named `properties.json`.
