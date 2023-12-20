//* Javascript => synchronus and single threaded
//? Javacript engines are slow but we never get the js engine alone we get it with some environment, such as Node js or Browser

//* Exection Context
//? Each operation waits for the last line to complete before execting => Single Thread

//* Blocking and Non Blocking
// ? Blocks the |  Does not block exection
// ? flow of    |
// ? Program    |

// console.log(1)
// run after 0 sec console.log(2)
// console.log(3)

// What will be printed
// ? 1
// ? 3
// ? 2
// *beacuse the javascript will do all the task in the diagram metioned so it takes some time in that time 3 will be printed first
