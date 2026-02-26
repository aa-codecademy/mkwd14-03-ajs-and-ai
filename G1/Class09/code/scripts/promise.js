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

getDocuments(url)
    .then(documents => {
        console.log("We got the documents");
        checkDocuments(documents);
        return getImportantDocuments(documents)
    })
    .then(importantDocs => {
        showDocuments(importantDocs);
    })
    .catch(err => console.log(err))
    .finally(() => console.log("We finished handling the documents response!"));