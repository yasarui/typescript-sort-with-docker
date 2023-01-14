"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersSort = void 0;
const Sort_1 = require("./Sort");
class CharactersSort extends Sort_1.SortCollection {
    constructor(str) {
        super();
        this.data = '';
        this.data = str;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        if (this.data[leftIndex].toLocaleLowerCase() > this.data[rightIndex].toLocaleLowerCase()) {
            return true;
        }
        else {
            return false;
        }
    }
    swap(leftIndex, rightIndex) {
        const tempString = this.data.split('');
        const temp = tempString[leftIndex];
        tempString[leftIndex] = tempString[rightIndex];
        tempString[rightIndex] = temp;
        this.data = tempString.join('');
    }
}
exports.CharactersSort = CharactersSort;
