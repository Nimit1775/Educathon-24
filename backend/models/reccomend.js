import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const reccomendSchema = new Schema ({
    exam : {
        type : String,
        required : true
    } , 
    score : { 
        type : Number,
        required : true
    } , 
    country : {
        type : String,
        required : true
    } ,
    reccomendations :[
        {
            name : {
                type : String,
                required : true
            } , 
           
            location : {
                type : String,
                required : true
            } ,

        }
    ]
},  {timestamps : true}); 
const Reccomend = mongoose.model('Reccomend' , reccomendSchema);
export default Reccomend;
