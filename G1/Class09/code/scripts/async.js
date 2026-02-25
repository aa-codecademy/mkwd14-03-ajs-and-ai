const url = "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json";


function getDocuments(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                resolve(data);
            })
            .catch(err => {
                reject(err);
            })
    });
}

function getImportantDocuments(documents) {
    let importantDocuments = documents.filter(doc => doc.important === true);
    return new Promise((resolve, reject) => {
        if (importantDocuments.length === 0) {
            reject("There are no important documents");
        }
        setTimeout(function () {
            resolve(importantDocuments);
        }, 3000);
    })
}

function checkDocuments(documents) {
    if (!documents || typeof (documents) != "object") {
        throw new Error("Problem with documents!");
    }
    if (documents.length === 0) {
        throw new Error("There are no documents!");
    }
}


function showDocuments(documents) {
    documents.forEach(doc => {
        console.log(`${doc.name}.${doc.type} - ${doc.size} MB`)
    });
}

// You cannot use await without async
// Every code that needs to be awaited must be part of some async function
// Avoid using await in the global scope! It will not work!
async function showImportantsOnlyDocs() {
    let startTime = new Date().getTime();
    try {
        let documents = await getDocuments(url);
        checkDocuments(documents);
        let importantDocs = await getImportantDocuments(documents);
        showDocuments(importantDocs);
    }
    catch (err) {
        console.log("Error occured! " + err);
    }
    finally {
        let endTime = (new Date().getTime() - startTime) / 1000;
        console.log(`Done in ${endTime} sec.`)
    }
}
showImportantsOnlyDocs();

