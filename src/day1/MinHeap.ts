export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.length = 0;
        this.data = [];
    }

    insert(value: number): void {
        this.data.push(value);
        this.heapifyUp(this.length);
        this.length++;
    }

    delete(): number {
        if (this.length === 0) {
            throw new Error("Whoops");
        }
        const out = this.data[0];
        this.length--;
        if (this.length === 0) {
            this.data = [];
            return out;
        }

        // Swap first and last elements
        this.data[0] = this.data[this.length];
        this.heapifyDown(0);

        return out;
    }

    private heapifyDown(idx: number): void {
        const leftIdx = this.leftChild(idx);
        const rightIdx = this.rightChild(idx);
        if (idx >= this.length || leftIdx >= this.length) {
            return;
        }
        const leftValue = this.data[leftIdx];
        const rightValue = this.data[rightIdx];
        const value = this.data[idx];

        if (leftValue > rightValue && value > rightValue) {
            this.data[idx] = rightValue;
            this.data[rightIdx] = value;
             this.heapifyDown(rightIdx);
        } else if (rightValue > leftValue && value > leftValue){

            this.data[idx] = leftValue;
            this.data[leftIdx] = value;
            this.heapifyDown(leftIdx);
        }
    }

    private heapifyUp(idx: number) {
        if (idx === 0) {
            return;
        }
        const parentIdx = this.parent(idx);
        const parentValue = this.data[parentIdx];
        const value = this.data[idx];

        if (parentValue > value) {
            // Swap
            this.data[idx] = parentValue;
            this.data[parentIdx] = value;
            // Recurse
            this.heapifyUp(parentIdx);
        }
    }

    private leftChild(idx: number): number {
        return idx * 2 + 1;
    }

    private rightChild(idx: number): number {
        return idx * 2 + 2;
    }

    private parent(idx: number): number {
        if (idx == 0) {
            return -1;
        }
        return Math.floor((idx - 1) / 2);
    }
}
