export const generateTree = (items) => {
  let tree = [],
    mappedArr = {},
    arrElem,
    mappedElem;

  // First map the nodes of the array to an object -> create a hash table.
  for (let i = 0, len = items.length; i < len; i++) {
    arrElem = items[i];
    mappedArr[arrElem.ID] = arrElem;
    mappedArr[arrElem.ID]["children"] = [];
  }

  for (let ID in mappedArr) {
    // eslint-disable-next-line no-prototype-builtins
    if (mappedArr.hasOwnProperty(ID)) {
      mappedElem = mappedArr[ID];
      // If the element is not at the root level, add it to its parent array of children.
      if (mappedElem.ID_Lider !== 324532) {
        mappedArr[mappedElem["ID_Lider"]]["children"].push(mappedElem);
      }
      // If the element is at the root level, add it to first level elements array.
      else {
        tree.push(mappedElem);
      }
    }
  }
  return tree;
};
