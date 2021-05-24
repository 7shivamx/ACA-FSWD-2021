# ACA-FSWD-2021

![aca](https://techlog360.com/wp-content/uploads/2017/11/A-Z-List-Of-Windows-CMD-Commands-Also-Included-CMD-Commands-PDF.jpeg)
## Git Commands


_A list of commonly used Git commands_


___


| Command | Description |
| ------- | ----------- |
| `git init` | Initialize a local Git repository |
| `git status` | Check status |
| `git add [file-name.txt]` | Add a file to the staging area |
| `git add -A` | Add all new and changed files to the staging area |
| `git commit -m "[commit message]"` | Commit changes |
| `git rm -r [file-name.txt]` | Remove a file / folder |
| `git reset` | To undo repository to any particular state present in the history |
| `git branch` | List branches |
| `git branch -a` | List all branches (local and remote) |
| `git branch [branch name]` | Create a new branch |
| `git branch -d [branch name]` | Delete a branch |
| `git log` | View changes |
| `git push` | Push changes to remote repository |
| `git pull` | Update local repository to the newest commit |
| `git merge [branch name]` | Merge a branch into the active branch |
| `git diff [source branch] [target branch]` | Preview changes before merging |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | Add a remote repository |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | Create a local copy of a remote repository |


___


## Common Terminologies


_A short description of some common terminologies in web-development_


___


### Client Side
In web development, 'client side' refers to everything in a web application that is displayed or takes place on the client (end user device). This includes what the user sees, such as text, images, and the rest of the UI, along with any actions that an application performs within the user's browser. 


### Server Side
Much like with client side, 'server side' means everything that happens on the server, instead of on the client. In the past, nearly all business logic ran on the server side, and this included rendering dynamic webpages, interacting with databases, identity authentication, and push notifications.


### Framework  
Framework, on the other hand has defined open or unimplemented functions or objects which the user writes to create a custom application. Because a framework is itself an application, it has a wider scope and includes almost everything necessary to make a user application as per his own needs.


### Library  
A library provides a set of helper functions/objects/modules which your application code calls for specific functionality. Libraries typically focus on a narrow scope (e.g., strings, IO, sockets), so their API’s also tend to be smaller and require fewer dependencies. It is just a collection of class definitions. Why we need them? The reason being very simple i.e. code reuse, use the code which has already been written by other developers.


>#### Difference between Framework and Library 
>![aca](https://dblzg9xa06lx7.cloudfront.net/wp-content/uploads/2020/09/Framework-vs.-Library-Component-Architecture.jpg)

>The key difference between them is in the `Inversion of Control`, commonly called as IoC. When we call a method from a library, we are in control. But in framework, the control is inverted i.e. the framework calls us. It defines a skeleton where the application defines its own features to fill out the skeleton.



### HTTP
Hypertext Transfer Protocol (HTTP) is an application-layer protocol for transmitting hypermedia documents, such as HTML. It was designed for communication between web browsers and web servers, but it can also be used for other purposes. HTTP follows a classical client-server model, with a client opening a connection to make a request, then waiting until it receives a response. In HTTP protocol, the information that flows from server to browser is not encrypted, which means it can be easily stolen.


### HTTPS
Hypertext Transfer Protocol Secure (HTTPS) is an extension of the Hypertext Transfer Protocol (HTTP). It is used for secure communication over a computer network, and is widely used on the Internet.In HTTPS, the communication protocol is encrypted using Transport Layer Security (TLS) or, formerly, Secure Sockets Layer (SSL). The protocol is therefore also referred to as HTTP over TLS, or HTTP over SSL.


>#### Difference between HTTP and HTTPS
>![aca](https://www.paraphrase-online.com/blog/wp-content/uploads/2020/12/http-and-https-what-is-it.png)

>The only difference between the two protocols is that HTTPS uses TLS (SSL) to encrypt normal HTTP requests and responses. As a result, HTTPS is far more secure than HTTP. A website that uses HTTP has http:// in its URL, while a website that uses HTTPS has https://.


___
