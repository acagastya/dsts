import INode, { NodeType } from "adt/Node";

class SingleNode implements INode {
  public value: any;
  public next: NodeType;

  constructor(data: any = undefined) {
    this.value = data;
    this.next = null;
  }

  public toString() {
    return "" + this.value;
  }
}

export default SingleNode;
