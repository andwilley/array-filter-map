export function arrayFilterMap<T, K>(
    targetArray: T[],
    filterCallback: (element: T, index?: number, origArray?: T[]) => boolean,
    mapCallback: (element: T, index?: number, origArray?: T[]) => K,
    thisArg?: any
): K[] {
    let origArrayIndex, newArrayIndex;
    if (typeof filterCallback !== 'function') {
        throw new TypeError(filterCallback + ' is not a function');
    }
    if (typeof mapCallback !== 'function') {
        throw new TypeError(mapCallback + ' is not a function');
    }
    if (filterCallback.length > 1) {
        console.warn('WARNING: use of the index parameter in "filterCallback"\
for filterMap may not operate as you expect. Array elements may not be mapped to the\
same index in the returned array depending on the result of filterCallback.');
    }
    if (mapCallback.length > 1) {
        console.warn('WARNING: use of the index parameter in "mapCallback" or\
for filterMap may not operate as you expect. Array elements may not be mapped to the\
same index in the returned array depending on the result of filterCallback.');
    }

    const len = targetArray.length >>> 0;
    const newArray = new Array(len);

    origArrayIndex = 0;
    newArrayIndex = 0;

    while (origArrayIndex < len) {
        let mappedValue;
        if (origArrayIndex in targetArray) {
            if (filterCallback.call(thisArg, targetArray[origArrayIndex], origArrayIndex, targetArray)) {
                mappedValue = mapCallback.call(thisArg, targetArray[origArrayIndex], origArrayIndex, targetArray);
                newArray[newArrayIndex++] = mappedValue;
            }
        }
        origArrayIndex++;
    }
    newArray.length = newArrayIndex;
    return newArray;
}
