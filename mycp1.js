let args = process.argv.splice(2,process.argv.length-1);
let tx = require('fs')

if(args.length == 2) {
    if(tx.existsSync(args[0])) {

        if(tx.existsSync(args[1])) {

            tx.copyFile(args[0], args[1], (err) => {
                if (err) throw err;
                console.log(`${args[0]} a été copié dans ${args[1]} `);
            });

        } else {

            tx.rename(args[0], args[1], (err) => {
                if (err) throw err;
                console.log(`${args[0]} a été copié dans ${args[1]} `);
            });

        }

    } else {

        console.log(`Le fichier : ${args[0]} n\'existe pas`);
    }
}