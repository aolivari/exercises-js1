function boolChecker(bool) {
  if (typeof bool === "boolean","number") {
    return "You've given me a bool, thanks!";
  }

  return "No bool, not cool.";
}

console.log(boolChecker(true));
console.log(boolChecker(2));

//completado