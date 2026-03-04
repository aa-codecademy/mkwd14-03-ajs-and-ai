// Both functions are named exports - can be imported individually or all at once with `import *`

export function logInfo(message) {
    const dateTime = new Date();
    console.log(`[INFO][${dateTime.toLocaleString()}]: ${message}`);
}

export function logError(error) {
    const dateTime = new Date();
    console.error(`[ERROR][${dateTime.toLocaleString()}]: ${error}`);
}

