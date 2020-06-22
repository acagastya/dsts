import SNode from "../../src/ds/Node/SingleNode";

test("SingleNode constructor works fine.", function test0() {
  let node = new SNode(1);
  expect(node.value).toBe(1);
  expect(node.next).toBeNull();

  node = new SNode();
  expect(node.value).toBeUndefined();
});

test("property value can hold different types of data.", function test1() {
  let node = new SNode(1);
  expect(node.value).toBe(1);

  node = new SNode("foo");
  expect(node.value).toBe("foo");

  node = new SNode(true);
  expect(node.value).toBe(true);

  node = new SNode({ name: "John", age: 30 });
  expect(node.value).toMatchObject({ age: 30, name: "John" });

  node = new SNode([1, 2, 3]);
  expect(node.value).toMatchObject([1, 2, 3]);

  node = new SNode(Math.sqrt(-1));
  expect(node.value).toBeNaN();

  node = new SNode(null);
  expect(node.value).toBeNull();
});

test("property next works as expected", function test2() {
  let node = new SNode(10);
  expect(node.next).toBeNull();

  node.next = undefined;
  expect(node.next).toBeUndefined();

  node.next = new SNode(11);
  expect(node.next).toMatchObject({ value: 11, next: null });

  expect((node.next = false)).toBe(false);
});

test("method toString works as expected.", function test3() {
  const node = new SNode();
  expect(node.toString()).toBe("undefined");

  node.value = null;
  expect(node.toString()).toBe("null");

  node.value = 3;
  expect(node.toString()).toBe("3");

  node.value = false;
  expect(node.toString()).toBe("false");

  node.value = [];
  expect(node.toString()).toBe("");

  node.value = [1, 3, 99];
  expect(node.toString()).toBe("1,3,99");

  node.value = new SNode("foo");
  expect(node.toString()).toBe("foo");
});
