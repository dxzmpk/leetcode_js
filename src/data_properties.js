class DataStructure{
    constructor(NAME, Index, Search, Insert, Delete, Master) {
        this.NAME = NAME;
        this.Index = Index;
        this.Search = Search;
        this.Insert = Insert;
        this.Delete = Delete;
        this.Master = Master;
    }
    toString() {
        return JSON.stringify(this);
    }
}
let N = "n";
let CANT = "can't";
let VARY = "1 or n(worst case)";
let LOGN = "log(n)";
const array = new DataStructure("array", 1, N,  N,  N, "最常用的结构");
const stack = new DataStructure("stack", CANT, CANT, "TAIL", "TAIL", "先进后出, 功能性结构");
const queue = new DataStructure("queue",CANT, CANT, "TAIL", "HEAD", "先进先出, 功能性结构");
const set = new DataStructure("set", CANT, "EXISTENCE", 1, 1, "保证唯一性, 并交叉以及求子集");
const map = new DataStructure("map", CANT, "EXISTENCE", 1, 1, "存储对应关系，其余特性和集合相同");
const hash_table = new DataStructure("hash_table", CANT, 1, 1, 1, "存储对应关系，通过哈希函数实现快速查找");
const binary_search_tree = new DataStructure("binary_search_tree", CANT, LOGN, LOGN, LOGN, "通过二分查找, 不需要数组的有序性，而是通过自身保证的");
const heap = new DataStructure("heap", CANT, N, 1, LOGN, "用于快速查找最大最小值, 父节点的值大于子节点的值");
console.log(heap.toString());
export {array, stack, queue, set, map, hash_table, binary_search_tree, heap};