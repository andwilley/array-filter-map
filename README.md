# filterMap
Polyfill (Array.prototype.filterMap) for filter and map in one trip through the target array.

### Why?
* Faster for large datasets than chaining filter and map (negligable for small ones...). Only goes through the target array once.
* Intuitive API is identical to Array.prototype.filter and Array.prototype.map, so use the same pattern when you have to do both instead of writing another one in Array.prototype.reduce.
* More declarative than making reduce do both tasks.

### Signature:
```typescript
filterMap(filterCallback: (element: any) => boolean, mapCallback: (element: any) => Array<any>): Array<any>;
```

### Acknowledgements:
Adapted from MDN polyfills for [Array.prototype.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#Polyfill) and [Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#Polyfill).
