import { NodeType } from "../Node";

interface List {
  cmp: Function;
  head: NodeType;
  tail?: NodeType;

  append?(data: any): NodeType;
  delete(data: any): void;
  insert(data: any): NodeType;
  insertAfter?(data: any, after: any): NodeType;
  insertBefore?(data: any, before: any): NodeType;
  prepend?(data: any): NodeType;
  search(data: any): NodeType;
}

export default List;
