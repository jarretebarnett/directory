export const sort = (employees) => {
    const sortedArray = employees.sort((a, b) => {
        const first = a.name.first.toUpperCase() + a.name.last.toUpperCase();
        const second = b.name.first.toUpperCase() + b.name.last.toUpperCase();

        if (first < second) {
            return -1
        }
        if (first > second) {
            return 1
        }
        return 0;
    })
    return sortedArray;
}