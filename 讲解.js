/*
Another way  to
read a JSON file in Node.js 

is using the readFile function. 

Unlike readFileSync , 
the readFile function 
reads file data 
in an asynchronous manner. 

When a readFile  is called, --异步分析
the file reading process 
starts and 
immediately the control 
shifts to next line 
executing the remaining lines of code. 

Once the file data has been loaded, 
this function will call the callback function 
provided to it. 

This way 
you aren't blocking code execution 
while waiting for the operating system 
to get back to you with data.

例子分析

In our example, 
the readFile function takes two parameters: 
The path to the file that is to be read 
and 
the callback function 
that is to be called 
when the file is read completely. 

You can optionally also include a parameter with options, but we won't be covering those in this article.

*/