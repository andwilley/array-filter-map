// tried using array.prototype.reduce. It is actually a little bit slower.

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
for arrayFilterMap may not operate as you expect. Array elements may not be mapped to the\
same index in the returned array depending on the result of filterCallback.');
    }
    if (mapCallback.length > 1) {
        console.warn('WARNING: use of the index parameter in "mapCallback" or\
for arrayFilterMap may not operate as you expect. Array elements may not be mapped to the\
same index in the returned array depending on the result of filterCallback.');
    }

    return targetArray.reduce<K[]>((filterMappedArray, element, origArrayIndex) => {
        if (filterCallback.call(thisArg, element, origArrayIndex, targetArray)) {
            const mappedValue = mapCallback.call(thisArg, element, origArrayIndex, targetArray);
            filterMappedArray.push(mappedValue);
        }
        return filterMappedArray;
    }, []);
}
