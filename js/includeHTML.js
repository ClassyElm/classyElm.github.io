/*
    This function selects the first div element with the attribute data-include-html and sends a GET request for the specified file.
*/
const includeHTML = () => {
    let element, file, xhr;
    element = document.querySelector("div[data-include-html]");

    // Verify that an element exists for including HTML pages
    if (element) {
        // Retrieve file name to include from element
        file = element.getAttribute("data-include-html");
        if (file) {
            // Request for the file if it exists
            xhr = new XMLHttpRequest();

            xhr.addEventListener("load", loadedFile);

            // Assign properties to access after loading the file
            xhr.file = file;
            xhr.targetElement = element;
            xhr.open("GET", file);
            xhr.send();
        }
    }
}

/*
    This function is called when a response comes back from attempting to load a specified file from the web server.
    Once complete, the includeHTML function is called once again for the next HTML file to be included.
*/
const loadedFile = event => {
    let xhr = event.target;
    let status = xhr.status;
    let file = xhr.file;
    let element = xhr.targetElement;

    // Check the status of the HTML file GET request
    if (status == 200) {
        element.innerHTML = xhr.responseText;
    } else if (status == 404) {
        console.error("File not found: '" + file + "'");
    }
    element.removeAttribute("data-include-html");
    includeHTML();
}

window.addEventListener("load", includeHTML);