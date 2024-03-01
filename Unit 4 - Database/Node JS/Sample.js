
// Import the sqlite3 module and load it into sqlite3 const
const sqlite3 = require("sqlite3").verbose();



// connect the database
let db = new sqlite3.Database("Blog.db", (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log("Connected to the Blog SQlite database");
});



// queries
// create Table1
/*
db.run("CREATE TABLE IF NOT EXISTS Articles (ArticleID INTEGER PRIMARY KEY, ArticleName TEXT, Author TEXT, Date TEXT)", function(err){
    if (err){
        return console.log(err.message);
    }
    console.log("Table One Created");
});

// IF NOT EXISTS --> not a necessary query unless we run the code before, while checking it, so we avoid having errors when using CREATE TABLE 

// create Table 2
db.run ("CREATE TABLE IF NOT EXISTS Comments (CommentID INTEGER PRIMARY KEY, Name TEXT, Content TEXT, Date TEXT, ArticleID INTEGER, FOREIGN KEY (ArticleID) REFERENCES  Articles (ArticleID))", function(err){
    if (err){
        return console.log(err.message);
    }
    console.log("Table Two Created");
});

// Insert Values
db.run("INSERT INTO Articles (ArticleID, ArticleName, Author, Date)" +
    "VALUES (111, 'PHP', 'Ahmad', '2019')," +
    "(222, 'DataBase', 'Mohamad', '2020')," +
    "(333, 'JavaScript', 'Hadi', '2019')," +
    "(444, 'PHP', 'Reem', '2020')," +
    "(555, 'JavaScript', 'Ola', '2020')," +
    "(666, 'Ruby', 'Hasan', '2019')," +
    "(777, 'Ruby', 'Ali', '2020')," +
    "(888, 'PHP', 'Ahmad', '2020')," +
    "(999, 'Laravel', 'Ahmad', '2019')", function (err) {
        if (err) {
            return console.error(err.message);
        }
        console.log("Data Inserted to Articles Table");
    });
// we do the the same for the comments table 
db.run("INSERT INTO Comments (Content, Name, Date, ArticleID)" +
    "VALUES ('مرحباً مقالة رائعة', 'Ahmad', '2019', 111)," +
    "('شكرًا لك على هذه المقالة ','Hadi', '2019', 222)," +
    "('من أروع المقالات التي قرأتها ','Hasan', '2020', 333)," +
    "('مقالة رائعة ','Fatema', '2019', 444)," +
    "('مرحباً مقالة رائعة', 'Ahmad', '2019', 111)," +
    "('مرحباً مقالة رائعة', 'Hasan', '2019', 222)," +
    "('مرحباً مقالة رائعة','Hadi', '2019', 222)," +
    "('مرحباً مقالة رائعة', 'Ahmad', '2019', 111)," +
    "('مرحباً مقالة رائعة','Ahmad', '2020', 111)," +
    "('مرحباً مقالة رائعة','Hadi', '2020', 444)," +
    "('مرحباً مقالة رائعة','Mohamad', '2020', 222)," +
    "('مرحباً مقالة رائعة','Ahmad', '2020', 444)," +
    "('مرحباً مقالة رائعة','Ahmad', '2019', 111)," +
    "('المقال غير جيد يمكن أن يكون أفضل','Ahmad', '2020', 111)," +
    "('مرحباً مقالة رائعة','Hadi', '2020', 444)," +
    "('مرحباً مقالة رائعة','Ahmad', '2020', 111)," +
    "('مرحباً مقالة رائعة','Ahmad', '2020', 222)," +
    "('شكرًا لك استاذي على هذا المقال الرائع', 'Mohamad', '2020', 555)," +
    "('مرحباً مقالة رائعة','Hadi', '2019', 111)," +
    "('مرحبًا مقالة رائعة من أروع المقالات التي قرأتها','Ahmad', '2020', 555)," +
    "('مرحباً مقالة رائعة','Mohamad', '2020', 444)," +
    "('مرحباً مقالة رائعة','Ahmad', '2019', 222)," +
    "('مرحباً مقالة رائعة','Ahmad', '2020', 111)," +
    "('مرحباً مقالة رائعة','Hadi', '2020', 444)," +
    "('مرحباً مقالة رائعة','Ahmad', '2020', 555)," +
    "('مرحباً مقالة رائعة','Mohamad', '2020', 111)," +
    "('أرجو زيارة صفحتي والإعجاب بها، يوجد بها الكثير من المنتجات الرائعة','Ali', '2019', 555)", function (err) {
        if (err) {
            return console.error(err.message);
        }
        console.log("Data Inserted to Comments Table");
    });
*/


// Select Query
/*
db.all("SELECT * FROM Articles WHERE Date = '2019'", function (err, table) {
    if (err) {
        return console.log(err.message)
    }
    console.log(table);
});


db.all("Select ArticleName, Date," +
    "("+
        "SELECT count(*)"+
        "FROM Comments WHERE Comments.ArticleID = Articles.ArticleID"+
        ") AS Number FROM Articles", function (err,table){
            if (err) {
                return console.log(err.message)
            }
            console.log(table);
        });

*/


// Update Query
/*
db.run("UPDATE Comments SET Content = 'من أروع المقالات شكراً لك' WHERE CommentID = 3", function (err){
    if (err) {
        return console.error(err.message);
    }
    console.log("Data Updated");
})



// Delete Query
db.run("DELETE FROM Comments WHERE CommentID = 6", function (err) {
    if (err) {
        return console.error(err.message);
    }
    console.log("Data Deleted")});

*/

// Practical Tutorial
db.all('SELECT Comments.Name, Comments.Content,'+
    'Articles.ArticleName, Articles.Date FROM Comments INNER JOIN Articles ON Comments.ArticleID = Articles.ArticleID', (err,table)=>{
        if (err){
            return console.log(err.message);
        }
        console.log(table);
    })



// close the database
db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log("Close the database connection");
});