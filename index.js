var slice = [].slice;

module.exports = function mutate(nodes) {
  if (arguments.length > 1) nodes = slice.call(arguments);
  if (!nodes || !nodes.length) throw new Error('Dom Exception 8');
  if (nodes.length === 1) return toNode(nodes[0]);
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < nodes.length; i++) {
    fragment.appendChild(toNode(nodes[i]));
  }
  return fragment;
}

function toNode(el) {
  return typeof el === 'string'
    ? document.createTextNode(el)
    : el;
}