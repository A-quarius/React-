export function getList() {
    return new Promise(res => {
        setTimeout(() => {
            res(3)
        }, 2000);
    })
}