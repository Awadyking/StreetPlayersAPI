const express = require("express")
const cors = require("cors")
const app = express();
app.use(cors());
app.use(express.json());
const Port = 4000 ; 


app.get("/" , async(Req , Res) => {

let Players = {
L0 : [
["Ali Ahmed" , "علي أحمد"],
["Kareem Ayman" , "كريم أيمن"]
],
L1 : [
    ["Ali Elawady" , "علي العوضي"],
    ["Mahmoud Elawady" , "محمود العوضي"],
    ["Ahmed Islam" , "أحمد إسلام"],
    ["Mostafa Emad" , "مصطفى عماد"],
    ["Youssef Jawish" , "يوسف جاويش"],
    ["Mohammed Alaa" , "محمد علاء"],
    ["Zeyad Emad" , "زياد عماد"],
    ["Kareem Eldeeb" , "كريم الديب"],
    ["Mohammed Osama" , "محمد أسامة"],
    ["Ahmed Mohammed" , "أحمد محمد"],
    ["Youssef Hegazy" , "يوسف حجازي"],
    ["Ahmed Abdel-Hamid","أحمد عبدالحميد"],	
    ["Youssef Hussien" , "يوسف حسين"]

],
L2 : [
    ["Ashraf Elawady" , "أشرف العوضي"],
    ["Yassin Emad" , "ياسين عماد"],
    ["Ahmed Emad" , "أحمد عماد"],
    ["Mohammed Ismail" , "محمد إسماعيل"],


]
} 



    Res.json(Players)
})



app.get("/Ver" , async(Req , Res) => {
let Version = "V1.27"
let Link = "https://www.webintoapp.com/store/354648"
Res.json(
{Ver : Version,
Link : Link
})
})






//App lisening

app.listen(Port, () =>{
    console.log(`Server is started on port ${Port} , The Link: http://localhost:${Port}`)
})