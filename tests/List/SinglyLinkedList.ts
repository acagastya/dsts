import List, { SingleNode as SNode } from "../../src/ds/List/SinglyLinkedList";

// @todo make sure readonly cmp works fine.

test("Constructor works fine.", function test0() {
  let list = new List(10);
  expect(list.head.value).toBe(10);
});
