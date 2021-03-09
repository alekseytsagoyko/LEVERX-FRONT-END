const profileTemplate = {
    type: "div",
    classes: ["profile"],
    childs: [
        //SHORT PROFILE
        {
            type: "div",
            id: "profileBackBtn",
            classes: ["profile-back-btn", "flex-alignment"],
            attributes: {
                setID: false
            },
            childs: [
                {
                    type: "img",
                    attributes: {
                        staticSrc: "./images/back.svg"
                    }
                }
            ]
        },
        {
            type: "div",
            classes: ["profile-short"],
            childs: [
                {
                    type: "div",
                    classes: ["profile-short-img"],
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
                    classes: ["profile-short-names"],
                    childs: [
                        {
                            type: "div",
                            classes: ["vertical-alignment"],
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
                    classes: ["profile-short-tags", "flex-alignment"],
                    childs: [
                        {
                            type: "div",
                            childs: [
                                {
                                    type: "span",
                                    classes: ["right-margin"],
                                    attributes: {
                                        staticInnerHTML: "ID"
                                    }
                                },
                                {
                                    type: "span",
                                    attributes: {
                                        innerHTML: "id"
                                    }
                                }
                            ]
                        },
                        {
                            type: "div",
                            classes: ["flex-alignment"],
                            childs: [
                                {
                                    type: "img",
                                    classes: ["icon", "right-margin"],
                                    attributes: {
                                        staticSrc: "./images/card.svg"
                                    }
                                },
                                {
                                    type: "span",
                                    attributes: {
                                        staticInnerHTML: "Business card"
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        //MAIN
        {
            type: "div",
            classes: ["profile-main"],
            childs: [
                //ROWS
                {
                    type: "div",
                    classes: ["profile-main-row"],
                    childs: [
                        {
                            type: "span",
                            attributes: {
                                staticInnerHTML: "GENERAL INFO"
                            }
                        },
                        {
                            type: "hr"
                        },
                        //ITEMS
                        //Departament
                        {
                            type: "div",
                            classes: ["profile-main-row-item", "flex-alignment"],
                            childs: [
                                {
                                    type: "img",
                                    classes: ["icon"],
                                    attributes: {
                                        staticSrc: "./images/briefcase.svg"
                                    }
                                },
                                {
                                    type: "div",
                                    classes: ["profile-main-row-item-name"],
                                    childs: [
                                        {
                                            type: "span",
                                            attributes: {
                                                staticInnerHTML: "Departament"
                                            }
                                        }
                                    ]
                                },
                                {
                                    type: "div",
                                    classes: ["profile-main-row-item-value"],
                                    childs: [
                                        {
                                            type: "span",
                                            attributes: {
                                                innerHTML: "departament"
                                            }
                                        }
                                    ]
                                },
                            ]
                        },
                        //Room
                        {
                            type: "div",
                            classes: ["profile-main-row-item", "flex-alignment"],
                            childs: [
                                {
                                    type: "img",
                                    classes: ["icon"],
                                    attributes: {
                                        staticSrc: "./images/door.svg"
                                    }
                                },
                                {
                                    type: "div",
                                    classes: ["profile-main-row-item-name"],
                                    childs: [
                                        {
                                            type: "span",
                                            attributes: {
                                                staticInnerHTML: "Room"
                                            }
                                        }
                                    ]
                                },
                                {
                                    type: "div",
                                    classes: ["profile-main-row-item-value"],
                                    childs: [
                                        {
                                            type: "span",
                                            attributes: {
                                                innerHTML: "room"
                                            }
                                        }
                                    ]
                                },
                            ]
                        }
                    ]
                }
            ]
        },
        //EDIT BUTTON
        {
            type: "div",
            classes: ["profile-btn"],
            childs: [
                {
                    type: "div",
                    classes: ["flex-alignment"],
                    id: ["editProfileBtn"],
                    attributes: {
                        setID: true
                    },
                    childs: [
                        {
                            type: "span",
                            attributes: {
                                staticInnerHTML: "EDIT DETAILS"
                            }
                        }
                    ]
                }
            ]
        }
    ]
}