// dataHandler.js

// Function to append data to an array and stringify it
function appendDataAndStringify(dataArray, newData) {
    dataArray.push(newData);
    return JSON.stringify(dataArray);
}
