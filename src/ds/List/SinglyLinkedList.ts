import SingleNode from "../Node/SingleNode";
import { NodeType } from "../../adt/Node";
import IList from "../../adt/List";

function defaultCmp(data: any, against: any) {
  return data === against;
}

class SinglyLinkedList implements IList {
  public head: NodeType;
  readonly cmp: Function;

  constructor(data: any, cmp?: Function) {
    this.head = new SingleNode(data, undefined);
    this.cmp = cmp ? cmp : defaultCmp;
  }

  public append(data: any): NodeType {
    const temp = new SingleNode(data, undefined);
    // If list is empty.
    if (!this.head) this.head = temp;
    // If list is not empty.
    else {
      let traversal = this.head;
      while (traversal.next) traversal = traversal.next;
      traversal.next = temp;
    }
    return temp;
  }

  public delete(data: any): void {
    // Return if list empty.
    if (!this.head) return;

    let traversal = this.head;

    // If head to be deleted.
    if (this.cmp(data, traversal.value)) {
      this.head = this.head.next;
      return;
    }

    // If some other element is to be deleted.
    else {
      while (traversal.next) {
        if (this.cmp(data, traversal.next.value)) {
          traversal.next = traversal.next.next;
          return;
        }
        traversal = traversal.next;
      }
    }
  }

  public insert(data: any): NodeType {
    const temp = new SingleNode(data, undefined);
    // If list is empty.
    if (!this.head) this.head = temp;
    // If list is not empty.
    else {
      let traversal = this.head;
      while (traversal.next) traversal = traversal.next;
      traversal.next = temp;
    }
    return temp;
  }

  public prepend(data: any): NodeType {
    const temp = new SingleNode(data, undefined);
    temp.next = this.head;
    this.head = temp;
    return temp;
  }

  public search(data: any): NodeType {
    let temp = this.head;
    while (temp) {
      if (this.cmp(data, temp.value)) return temp;
      temp = temp.next;
    }
    return temp;
  }
}

export default SinglyLinkedList;

export { SingleNode };
