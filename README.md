# arrayFilterMap
filter and map in one trip through the target array.

### Why?
* Faster for large datasets than chaining filter and map (negligable for small ones...). Only goes through the target array once.
* Intuitive pattern is almost identical to Array.prototype.filter and Array.prototype.map, so use the same pattern when you have to do both instead of writing another one in Array.prototype.reduce.
* More declarative than making reduce do both tasks.

### Why Not?
* It's not THAT much more efficient for small datasets.

### Signature:
```typescript
arrayFilterMap<T, K>(
    targetArray: T[],
    filterCallback: (element: T, index?: number, origArray?: Array<T>) => boolean,
    mapCallback: (element: T, index?: number, origArray?: Array<T>) => Array<K>,
    thisArg?: any
): Array<K>;
```

### Example Usage:
```typescript
const testArray = [{id: 1, value: 'test 1'}, {id: 2, value: 'test 2'}, {id: 3, value: 'test 3'}];
const newArray = arrayFilterMap(
    testArray,
    (element) => element.id === 2,
    (element) => element.value
);
// newArray = ['test 2']
```

### Acknowledgements:
Adapted from MDN polyfills for [Array.prototype.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#Polyfill) and [Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#Polyfill).
