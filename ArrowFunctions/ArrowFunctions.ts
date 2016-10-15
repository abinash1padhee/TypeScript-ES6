namespace ArrowFunctions {

  function greetRegular(name) {
    return "Hello, " + name;
  }

  greetRegular('Steve');

  const greetArrow = (name) => {
    return "Hello, " + name;
  };

  const greetMin = (name: string) => "Hello, " + name;

  console.log(greetMin('Amy'));

  function helloWorld(name) {
    return name;
  }
  helloWorld("Abinash");

  var haveFun = (name) => {
    return name;
  }
  haveFun("Abinash");

  const haveLotFun = (name) => name;
  haveLotFun("Kumar");




















}
