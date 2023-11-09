function foo() {
  new Promise((resolve) =>
    setTimeout(() => resolve("1")),
  ).then(res => {
    console.log(res);
    new Promise((resolve) =>
      setTimeout(() => resolve("2")),
    ).then(res => console.log(res));
  });
}

foo();
