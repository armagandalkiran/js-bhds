/*

What is an execution context ?

Assumming code is compiled.
First creation of global execution context (for top-level code) which means NOT inside a function.


*/

const name = "Armagan";

const first = () => {
    let a = 1;
    const b = second();
    a = a + b;
    return a;
}

function second() {
    var c = 2;
    return c;
}

// example above first const will be executed.

/*

an execution context is an abstract concept.
Environment in which a piece of JavaScript is executed.
Stores all the necessary information for some code
to be executed.

There is exactly one global execution context (EC)
Default context, created for code that is not inside any
function (top-level).

For each function call, a new execution context is created.

What is inside execution context ?

Variable Environment
- let,const and var declarations
- functions
- arguments object (not in arrow functions)

Scope chain

this keyword (not in arrow functions)

Technically, values only become known during execution.

*/