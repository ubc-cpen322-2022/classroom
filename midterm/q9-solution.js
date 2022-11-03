/*
 * Complete the 'inherits' function below.
 *
 * The function accepts the following parameters:
 *  1. function foo: constructor
 *  2. Object obj: the desired prototype
 */
function inherits(foo, obj) {
  foo.prototype = obj;
  foo.prototype.constructor = foo;
}

/*
 * Complete the 'createCircle' function below.
 *
 * The function is expected to return a Circle object.
 * The function accepts the following parameters:
 *  1. x
 *  2. y
 *  3. r
 */
function createCircle(x, y, r) {
  inherits(Circle, new Point());
  return new Circle(x, y, r);
}
