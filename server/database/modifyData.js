const { formDataBase } = require("./database");


const modifyData = async (data,user_id ) => {
const {food,time,attending} = data
try{
    const res = await formDataBase.query("UPDATE form SET food=$1,time=$2, attending = $3 WHERE user_id = $4",[
        food,time,attending,user_id
    ]);
    console.log("res",res)

}catch(error){
    console.error(error)
}
}
module.exports={modifyData}