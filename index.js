const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

let sendEmail = async(name,phone,query) =>
{
    let transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"raistarreigns@gmail.com",
            pass:"jymppvjddufeqbwz"
        }
    });

    let mailOptions={
        from:"raistarreigns@gmail.com",
        to:"meherjidnesh12@gmail.com",
        subject:"Enquiry from"+name,
        text:phone+" " + query
    }

    await transporter.sendMail(mailOptions);
}

    app.post("/save",async(req,res)=>{
        const name = req.body.name;
        const phone = req.body.phone;
        const query = req.body.query;
        console.log(name + " " + phone + " " + query);
        await sendEmail(name,phone,query);
        res.send("sucess");
    })


app.listen(9000,() =>{console.log("ready @9000")});