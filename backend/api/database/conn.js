const mongoose = require("mongoose")

async function main(){
    try{
        await mongoose.connect(
            ""
        );

        console.log(`Database ${process.env.DB_NAME} connected`)
    } catch(error) {
        console.log(`Erro: ${error}`)
    }
}