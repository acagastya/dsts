import SingleNode from "../../ds/Node/SingleNode";

/**
 * @access public
 * @returns string
 * @param void
 * @description returns the string conversion of the value of the node.
 */
SingleNode.prototype.toString = function (): string {
  return "" + this.value;
};

export default SingleNode;
