const fs = require('fs');

fs.readFile('./customer-data.csv','utf-8',(err,data) =>{
    if(err) console.error('Theres an error in readFile '+err);
    var lines = data.split('\r\n');
    var key = lines.shift().split(',');
    let fdoc = [];
    
    lines.map((line,i) => {
    if(!line){
        console.log('Invalid data');
        return;
    };
    
    var values = line.split(',');
    var doc = {};
    values.map((colval,j) => {
         doc[key[j]] = colval;
    });
    
    fdoc[i] = doc;
    });
    fs.writeFileSync('output.json',JSON.stringify(fdoc));
    console.log('CSV File conversion to JSON is Complete');
    
});
