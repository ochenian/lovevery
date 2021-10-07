export function findProduct(age) {
  switch (age) {
    case 0:
    case 1:
    case 2:
      return 1;
    case 3:
    case 4:
      return 2;
    case 5:
    case 6:
      return 3;
    case 7:
    case 8:
      return 4;
    case 9:
    case 10:
      return 5;
    case 11:
    case 12:
      return 6;
    default:
      return 0;
  }
}

export function importAll(requestedModules) {
  let images = {};
  requestedModules
    .keys()
    .map(
      (module) => (images[module.replace('./', '')] = requestedModules(module))
    );
  return images;
}
