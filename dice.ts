export function rollDie(): number{
    const random = Math.random();
    return Math.floor((random * 6) + 1)
}