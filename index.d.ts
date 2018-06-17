declare interface Array<T> {
    filterMap(filterCallback: (element: any, index?: number, origArray?: any[]) => boolean,
              mapCallback: (element: any, index?: number, origArray?: any[]) => Array<any>
    ): Array<any>; 
}