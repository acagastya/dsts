import INode, { NodeType } from "../../adt/Node";

/**
 * @class
 * @implements INode
 * @classdesc A node class with value and reference to next node.
 */
class SingleNode implements INode {
  /**
   * @access public
   * @type any
   * @description Holds the value of the node.
   */
  public value: any;
  /**
   * @access public
   * @type NodeType
   * @description Holds the reference of the next node.
   */
  public next: NodeType;

  /**
   * @constructor
   * @param data any
   * @param next NodeType default `null` optional
   * @description Sets the `value` of the node to `data`; and `next` to null if second parameter is null.
   */
  constructor(data: any, next?: NodeType) {
    this.value = data;
    this.next = arguments.length > 1 ? next : null;
  }

  /**
   * @access public
   * @returns string
   * @param void
   * @description returns the string conversion of the value of the node.
   */
  public toString(): string {
    return "" + this.value;
  }
}

export default SingleNode;
