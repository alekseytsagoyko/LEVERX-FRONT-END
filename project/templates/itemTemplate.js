const imagesPath = "images/";

const itemTemplate = {
    type: "div",
    classes: ["item", "default-shadow", "hover-shadow"],
    id: ["item"],
    attributes: {
        setID: true  
    },
    childs: [
        {
            type: "div",
            classes: ["item-img", "flex-alignment"],
            childs: [
                {
                    type: "img",
                    attributes: {
                        src: "src"
                    }
                }
            ]
        },
        {
            type: "div",
            classes: ["item-names"],
            childs: [
                {
                    type: "div",
                    childs: [
                        {
                            type: "span",
                            attributes: {
                                innerHTML: "fullName"
                            }
                        },
                        {
                            type: "br"
                        },
                        {
                            type: "span",
                            attributes: {
                                innerHTML: "nativeName"
                            }
                        }
                    ]
                }
            ]
        },
        {
            type: "div",
            classes: ["item-info"],
            childs: [
                {
                    type: "div",
                    classes: ["item-info-line"],
                    childs: [
                        {
                            type: "hr"
                        }
                    ]
                },
                {
                    type: "div",
                    classes: ["item-info-content", "flex-alignment"],
                    childs: [
                        {
                            type: "img",
                            attributes: {
                                staticSrc: imagesPath + "briefcase.svg"
                            }
                        },
                        {
                            type: "span",
                            attributes: {
                                innerHTML: "departament"
                            }
                        },
                        {
                            type: "img",
                            attributes: {
                                staticSrc: "images/door.svg"
                            }
                        },
                        {
                            type: "span",
                            attributes: {
                                innerHTML: "room"
                            }
                        }
                    ]
                }
            ]
        }
    ]
}