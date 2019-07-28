# array-filter-map
Filter and map in one trip through the target array.

### Why?
* Faster for large arrays than chaining filter and map (negligable for small ones...). Only goes through the target array once. Uses Array.prototype.reduce().
* Intuitive pattern is almost identical to Array.prototype.filter and Array.prototype.map, so use the same pattern when you have to do both instead of writing another one in Array.prototype.reduce.
* Reusable, avoid writing reduce to do both tasks every time you need it.

### Why Not?
* It's not THAT much more efficient for small arrays.
* It's not that hard to write it yourself.

### Install

```bash
npm install array-filter-map
```

### Signature:
```typescript
function arrayFilterMap<T,R>(
    targetArray: T[],
    filterCallback: (element: T, index: number, origArray: T[]) => boolean,
    mapCallback: (element: T, index: number, origArray: T[]) => R,
    thisArg?: any
): R[];
```

### Example Usage:
```javascript
const filtermap = require('array-filter-map');

const testArray = [{id: 1, value: 'test 1'}, {id: 2, value: 'test 2'}, {id: 3, value: 'test 3'}];
const newArray = filtermap(
    testArray,
    element => element.id === 2,
    element => element.value
);
// newArray = ['test 2']
```

#### Of Note:
The index parameter in the mapCallback will reference the index of the element in the original array, but possibly not the resultant array depending on the results of the filterCallback.

### Test Results (jest):
```
  arrayFilterMap test suite
    ✓ should return a new array (3ms)
    ✓ should map each item of the array to its "id" propery (1ms)
    ✓ should filter out all values (1ms)
    ✓ should warn about index usage in map
    ✓ should use thisArg as "this" when passed as 4th argument (1ms)
    ✓ should use the index and origArray parameters as specified for each callback
    ✓ should throw an error for filterCallback not a function (2ms)
    ✓ should throw an error for mapCallback not a function (1ms)
    ✓ this  --->                  (arrayFilterMap()): (63ms)
    ✓ ...should be faster than this (filter().map()): (124ms)
    ✓ but...       about the same as this (reduce()): (72ms)
```