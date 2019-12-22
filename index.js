const js = import("./hello_wasm.js");
alert("test0");
greet("WebAssembly");
alert("test1");
js.then(js => {
    alert("test");
  js.greet("WebAssembly");
});