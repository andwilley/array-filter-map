/**
 * Filter and Map in one pass through the array. Literally TWICE as fast... ;-)
 * ! Heads up: the index variable may not operate as you expect in the mapCallback.
 * It will reference the index of the original array, but may not correspond to that item's
 * index in the resultant array depending on the result of filterCallback.
 * @param targetArray the array to filter, then map.
 * @param filterCallback function to run on each element, return false to remove from array, true to keep it.
 * @param mapCallback function to run on each element, if filter was true, return value of this callback is inserted into the new array.
 * @param thisArg object is bound to each callback, if passed. 'this' in your callback will reference this argument.
 * @returns a new array with the result of calling filterCallback and mapCallback on each element.
 */
function arrayFilterMap(
  targetArray,
  filterCallback,
  mapCallback,
  thisArg = undefined
) {
  if (typeof filterCallback !== "function") {
    throw new TypeError(filterCallback + " is not a function");
  }
  if (typeof mapCallback !== "function") {
    throw new TypeError(mapCallback + " is not a function");
  }
  if (mapCallback.length > 1) {
    console.warn(
      'WARNING: use of the index parameter in "mapCallback" ' +
        'for arrayFilterMap may not operate as you expect. Array' +
        'elements may not be mapped to the ' +
        'same index in the returned array depending on the result of filterCallback.'
    );
  }

  if (thisArg) {
    filterCallback = filterCallback.bind(thisArg);
    mapCallback = mapCallback.bind(thisArg);
  }

  return targetArray.reduce((newArr, val, i, entireArr, t) => {
    if (filterCallback(val, i, entireArr)) {
      newArr.push(mapCallback(val, i, entireArr));
    }
    return newArr;
  }, []);
}

module.exports = arrayFilterMap;
