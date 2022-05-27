const { formDataBase } = require("./database")



const retrieveData = async () => {
    
    try{
        const response = await formDataBase.query("SELECT * FROM form");
        console.log(response.rows);
        return response.rows
    }catch (error) {
        console.error(error)
    }
}


  module.exports  = {retrieveData}