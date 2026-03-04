

function logInfo(message) {
    const dateTime = new Date();
    console.log(`[INFO][${dateTime.toLocaleString()}]: ${message}`);
}

function logError(error) {
    const dateTime = new Date();
    console.error(`[ERROR][${dateTime.toLocaleString()}]: ${error}`);
}
