declare module "filtermap" {
    function arrayFilterMap<T,R>(
        targetArray: T[],
        filterCallback: (element: T, index: number, origArray: T[]) => boolean,
        mapCallback: (element: T, index: number, origArray: T[]) => R,
        thisArg?: any
    ): R[];
    export = arrayFilterMap;
}
