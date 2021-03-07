function renderTemplate(data, container, template) {

    let element = createElement(template.type, 
                                template.classes, 
                                null, 
                                template.attributes,
                                data);

    if(template.childs != undefined) {
        template.childs.map((child) => {
            renderTemplate(data, element, child);
        });
    }

    container.appendChild(element);

}

function createElement(tagName, classList, parent, attributes, data) {

    var element = document.createElement(tagName);

    if(classList != undefined) {
        classList.map(c => {
            element.classList.add(c);
        });
    }

    if(attributes != undefined) {
        handleAttributes(element, attributes, data);
    }

    if(parent != null) {
        parent.appendChild(element);
    }

    return element;

}

function handleAttributes(element, attributes, data) {

    if(attributes.src != undefined) {
        element.src = data[attributes.src];
    }

    if(attributes.staticSrc != undefined) {
        element.src = attributes.staticSrc;
    }

    if(attributes.innerHTML != undefined) {
        element.innerHTML = data[attributes.innerHTML];
    }

}
