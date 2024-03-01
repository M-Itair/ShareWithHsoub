// Files Reading

const fs = require('fs')

fs.readFile('./messages.txt', 'utf8', (error, data) =>{
    if (error) console.log(error);
    else{
        const messages = data.split(',')
        console.log(messages)
    } 
});
console.log("Executed after read file")



// Files Writing

const fs2 = require ('fs')
const Hello = "Welcome to our Academy"
const messages = [
    'message1', 'message2', 'message3'
]
const content = messages.join (',')
fs2.writeFile('./new.txt', Hello + ' : ' + content, 'utf8', error =>{
    if (error) console.log(error);
    else console.log('file written');
});



// Files Editing
const contentFS3 = '\nWelcome to editing'
fs2.appendFile('./new.txt', contentFS3, 'utf8', error =>{
    if (error) console.log(error);
    else console.log('file written');
});

// Rename Files 

fs2.rename('./new.txt','renamed.txt',error =>{
    if (error) console.log(error); // ----> we will not get the error in any case beacuse we have writefile method before
    else console.log("Renamed in Done");
});

// Delete Files
fs.unlink('./messages.txt', error =>{
    if(error) console.log (error)
    else console.log('the messages files has been deleted')
})