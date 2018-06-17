declare interface Array<T> {
    filterMap(filterCallback: (element: any) => boolean, mapCallback: (element: any) => Array<any>): Array<any>; 
}