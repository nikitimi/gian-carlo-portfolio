function classesArrayToString(...tokens: string[]) {
    let holderClasses = ''
    tokens.forEach((string) => {
        holderClasses += `${string} `
    })
    return holderClasses.trim()
}

export { classesArrayToString }
