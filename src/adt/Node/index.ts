/**
 * @type
 * @description prev/next should be of the type `NodeItem`, `null`, and `undefined`.
 * @see https://twitter.com/acagastya/status/1270621747704987649
 */
export type NodeType = NodeItem | null | undefined;

/**
 * @interface
 * @description The structure of a Node which can be used for:
 * Lists, Sets, Maps, Stacks, Queues et cetera.
 */
interface NodeItem {
  key?: any;
  value: any;
  prev?: NodeType;
  next: NodeType;
}

export default NodeItem;
