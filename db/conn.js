const mongoose = require('mongoose')

async function main(){

    try {
        await mongoose.connect('mongodb+srv://ricardinszz:tycFVMYVqfx96Fzq@cluster0.fvgtedx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log('Branco OK');
    } catch (error) {
        console.log('Error:' + error);
    }

}

module.exports = main