function randWithVariation(min: number, max: number, variation: number) {
    let seed = (Math.floor(Math.random() * max) % (max - min)) + min // attempts to keep the result within the bounds

    function finalRandom() {
        let offset = Math.floor(Math.random() * variation)
        if (Math.random() < 0.5) offset *= -1 // chance that number will decrease
        seed += offset

        if (seed < min) return max - seed // also attempts to keep the result within the bounds
        if (seed > max) return min + (seed - max)
        return seed
    }

    return finalRandom()
}

export { randWithVariation }
