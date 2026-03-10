// import * as fs from 'node:fs';
import { writeFileSync, appendFileSync, readFileSync } from 'fs';

const file = "node-demo.txt"

export function addText(text) {
    try {
        writeFileSync(file, text);
        console.log("The file was created and text was written");
    } catch (error) {
        console.error("Error writing file:", error);
    }
}

export function appendText(text) {
    try {
        appendFileSync(file, text);
        console.log("The file was updated and text was appended");
    } catch (error) {
        console.error("Error appending to file:", error);
    }
}

export function readText() {
    try {
        const fileText = readFileSync(file, { encoding: "utf-8" });
        return fileText;
    } catch (error) {
        console.error("Error reading file:", error);
    }
}