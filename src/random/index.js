export function randRange(min, max){
    return Math.round(
        Math.random() * (max - min) + min
    )
}

export function randInt(min, max){
    return randRange(min, max + 1)
}

export function pick(xs){
    return items[randRange(0, xs.length)]
}
