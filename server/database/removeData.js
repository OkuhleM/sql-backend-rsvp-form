const { formDataBase } = require("./database.js");

const removeData = async () => {
  // const [response_message] = process.argv.slice(2).join(" ");
  // var test = process.argv.slice(2).join(" ");
  // console.log(process.argv.slice(2).join(" "));

  try {
    const res = await formDataBase.query(
      "DELETE from form WHERE user_id = 1",
    //   [data.name, data.surname, data.food, data.time, data.attending]
    );
  
  } catch (err) {
    console.error(err);
  }
  formDataBase.end;
};
module.exports = { removeData };