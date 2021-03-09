function renderTemplate(data, container, template) {

    let element = createElement(template.type, 
                                template.classes, 
                                template.id,
                                null, 
                                template.attributes,
                                data);

    if(template.childs != undefined) {
        template.childs.map((child) => {
            renderTemplate(data, element, child);
        });
    }

    if(container != null) {
        container.appendChild(element);
    }

}

function createElement(tagName, classList, id, parent, attributes, data) {

    var element = document.createElement(tagName);

    if(classList != undefined) {
        classList.forEach(c => {
            element.classList.add(c);
        });
    }

    if(id != undefined) {
        element.id = id;
        if(attributes.setID) {
            element.setAttribute("data-id", data.id);
        }
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

    if(attributes.staticInnerHTML != undefined) {
        element.innerHTML = attributes.staticInnerHTML;
    }

}
