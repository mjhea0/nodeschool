function foo() {
  var bar;
  quux = 'bar';
  function zip() {
    var quux;
    bar = true;
  }
  return zip;
}
