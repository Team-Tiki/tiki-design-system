const fs = require("fs");
const path = require("path");

const snakeToPascalCase = (fileName) => {
    return fileName.split("_").map(str => {
        const firstLetter = str.charAt(0).toUpperCase();

        return firstLetter + str.slice(1);
    }).join("");
}

const generate = () => {
    const svgDir = path.join(__dirname, "src");
    const outputDir = path.join(__dirname, "index.ts");

    const files = fs.readdirSync(svgDir).map(svg => ({
        file: svg,
        fileName: snakeToPascalCase(path.basename(svg, ".svg"))
    }))

    fs.writeFileSync(outputDir, files.map(file => 
        `export { default as ${file.fileName} } from "./src/${file.fileName}"`
    ).join('\n'))
}

generate();