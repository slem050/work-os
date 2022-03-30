const mongoose = require("mongoose");
interface Participant{
    label : String,
    value:number
}

const ProjectSchema = new mongoose.Schema({
    
    name:String,
    owner:String,
    finishDate:String,
    startDate:String,
    text:String,
    particapent : [{ label : String, value: Number}]
    

  });

  //the collection
  const Project = mongoose.model("users", ProjectSchema);

  export default Project