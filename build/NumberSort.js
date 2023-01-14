"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberSort = void 0;
const Sort_1 = require("./Sort");
class NumberSort extends Sort_1.SortCollection {
    constructor(arr) {
        super();
        this.data = [];
        this.data = arr;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        if (this.data[leftIndex] > this.data[rightIndex]) {
            return true;
        }
        else {
            return false;
        }
    }
    swap(leftIndex, rightIndex) {
        const temp = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = temp;
    }
}
exports.NumberSort = NumberSort;
