export function getCounter() {
    return new Promise(res => {
        setTimeout(() => {
            res(999)
        }, 2000);
    })
}