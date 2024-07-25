function classesArrayToString(...tokens: string[]) {
    let holderClasses = ''
    tokens.forEach((string) => {
        holderClasses += `${string} `
    })
    return holderClasses.trim()
}

function addRemoveClassesToElement<T extends HTMLElement>(
    addClasses: string,
    removeClasses: string,
    element: T
) {
    element.classList.add(...spreadStringClasses(addClasses))
    element.classList.remove(...spreadStringClasses(removeClasses))
}

function spreadStringClasses(Classes: string) {
    const classesDivider = ' '
    return Classes.split(classesDivider)
}

export { classesArrayToString, addRemoveClassesToElement, spreadStringClasses }
