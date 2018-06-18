import './index';

describe('filterMap test suite', () => {
    const testArray = [{
        id: 1,
        value: 'test 1',
    },
    {
        id: 2,
        value: 'test 2',
    },
    {
        id: 3,
        value: 'test 3',
    }];
    global.console = {
        warn: jest.fn(),
        log: jest.fn(),
        error: jest.fn()
    };
    it('should add filterMap to the Array prototype', () => {
        expect(Array.prototype.filterMap).not.toBe(undefined);
    });
    it('should return a new array', () => {
        expect(testArray.filterMap(
            () => true,
            element => element
        )).not.toBe(testArray);
    });
    it('should map each item of the array to its "id" propery', () => {
        expect(testArray.filterMap(
            () => true,
            element => element.id
        )).toEqual([1, 2, 3]);
    });
    it('should filter out all values', () => {
        expect(testArray.filterMap(
            () => false,
            element => element,
        )).toEqual([]);
    });
    it('should warn about index usage', () => {
        [1, 2].filterMap(
            (element, index, origArray) => true,
            (element, index, origArray) => element,
        );
        expect(console.warn).toHaveBeenCalledTimes(2);
    });
    // it('should use thisArg as specified');
    // it('should use the index and origArray parameters as specified for each callback.');
    // it('should throw an error for filterFunc undefined');
    // it('should throw an error for mapFunc undefined');
});
