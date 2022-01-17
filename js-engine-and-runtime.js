/*
what is javascript engine actually ?

Program that executes javascript is 
javascript engine.

every browser has its own js engine.
without browser -> node js.

Compilation: Entire code is converted into machine code
at once, and written to a binary file that can be
executed by a computer

Source code -> compilation (portable file, machine code) -> execution (program running)
execution can happen way after compilation

Interpretation: Interpreter run through the source code and executes it line by line

Source code -> execution line by line (program running)
But code still need to be converted to machine code.

javascript uses JIT parsing (reading and converting to ast) -> compilation ast to machine code -> execution which is happens in call stack
there is also optimization between compilation and execution step
--------

runtime of javascript is like box that contains all the
JavaScript related stuff that we need.
including engine (heap + call stack) and web apis (dom,timers,fetch api...)
+
callback queue like click,timer,data.. from dom event listener 
event loop makes this happen.






*/ 