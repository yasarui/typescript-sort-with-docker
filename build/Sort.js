"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortCollection = void 0;
class SortCollection {
    sort(sortable) {
        for (let i = 0; i < sortable.length; i++) {
            for (let j = 0; j < sortable.length - i - 1; j++) {
                if (sortable.compare(j, j + 1)) {
                    sortable.swap(j, j + 1);
                }
            }
        }
    }
}
exports.SortCollection = SortCollection;
