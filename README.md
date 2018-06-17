# filterMap
Polyfill (Array.prototype.filterMap) for filter and map in one trip through the target array.

### Why?
* Faster for large datasets than chaining filter and map (negligable for small ones...). Only goes through the target array once.
* Intuitive pattern is identical to Array.prototype.filter and Array.prototype.map, so use the same pattern when you have to do both instead of writing another one in Array.prototype.reduce.
* More declarative than making reduce do both tasks.

### Why Not?
* Commits the cardinal sin of extending native objects.
* A better solution probably exists. :)

### Signature:
```typescript
filterMap(filterCallback: (element: any, index?: number, origArray?: any[]) => boolean,
          mapCallback: (element: any, index?: number, origArray?: any[]) => Array<any>,
          thisArg?: any
): Array<any>;
```

### Acknowledgements:
Adapted from MDN polyfills for [Array.prototype.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#Polyfill) and [Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#Polyfill).
