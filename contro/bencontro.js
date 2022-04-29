var Categoires = require("../Models/Categoires");
var subcategoires = require("../Models/subcategoires");
var movie_maker = require("../Models/movie_maker");
var language = require("../Models/language");
var video = require("../Models/video");
var Contract = require("../Models/Contract");
var $ = require("jquery");
// var banner_schema = require("../Models/banner_video");
var nodemailer = require("nodemailer");
const fs = require("fs");
const formidable = require("formidable");
const { IncomingForm } = require("formidable");
const { promisify } = require("util");
const unlinkAsync = promisify(fs.unlink);
// import validator from 'validator';

const bcrypt = require("bcrypt");
const { data } = require("jquery");
const { time } = require("console");
// const { token } = require("morgan");

//jwt ...
const jwt = require("jsonwebtoken");
const { match } = require("assert");
const jwtkey = "movies-hhg";

// const verifyToken = (req, res, next) => {
//   let token = req.headers["authorization"];
//   // console.log("call...", token);

//   if (token) {
//     token = token.split(" ")[1];
//     jwt.verify(token, jwtkey, (err, valid) => {
//       if (err) {
//         res.status(401).send({ result: "please provide valid token" });
//       } else {
//         res.send({ result: "success"});
//         // next()
//       }
//     });
//   } else {
//     res.status(403).send({ result: "please add token with header" });
//   }
// };

// parth api start
// exports.insert_data = verifyToken,async function (req, res, next) {
//     try {
//       const data = {
//         language: req.body.language,
//       };
//       const tag = await language.create(data);

//       res.status(201).json({
//         data: tag,
//         status: "Data insert",
//       });
//     } catch (error) {
//       console.log("not data insert........!");
//     }
// };

exports.insert_data = async function (req, res, next) {
  try {
    const data = {
      language: req.body.language,
    };
    const tag = await language.create(data);

    res.status(201).json({
      data: tag,
      status: "Data insert",
    });
  } catch (error) {
    console.log("not data insert........!");
  }
};

exports.find_data = async function (req, res, next) {
  try {
    const tag = await language.find();

    res.status(200).json({
      status: "find data",
      data: tag,
    });
  } catch (error) {
    console.log("not find data........!");
  }
};

exports.find_data_Id = async function (req, res, next) {
  try {
    const tag = await language.findById(req.params.id);
    res.status(200).json({
      status: "find id",
      data: tag,
    });
  } catch (error) {
    console.log("Data not find by id........!");
  }
};

exports.Delete_data = async function (req, res, next) {
  try {
    await language.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "delete",
    });
  } catch (error) {
    console.log("Data not delete........!");
  }
};

exports.Update_data = async function (req, res, next) {
  try {
    var BannerData = await language.findById(req.body.Id);
    BannerData.language = req.body.language;
    await language.findByIdAndUpdate(req.body.Id, BannerData);
    res.status(201).json({
      status: "success",
      data: req.file,
    });
  } catch (error) {
    console.log(error);
  }
};

// parth api end

// mukunj API start

exports.Minsert_data = async function (req, res, next) {
  try {
    var result = "";
    var characters =
      "ABCD34636755EFGH012345JKLMNOPQRSTUVWXYZ&abcdefghijkmnopqrstuvwxyz6789";
    var charactersLength = characters.length;
    for (var i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    console.log(result);

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "gunavikas02@gmail.com",
        pass: "##Vikas002",
      },
    });

    var mailOptions = {
      from: "gunavikas02@gmail.com",
      to: req.body.Email,
      subject: "your password",
      html: "<h1>Don't share your Password....!!!</h1> <h2>" + result + "</h2>",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    // res.render("result");
    // console.log(result)
    var newpass = await bcrypt.hash(result, 12);
    console.log(newpass);

    var sid = 2; 
    
    const data = {
      sid: sid,
      First_Name: req.body.First_Name,
      Last_Name: req.body.Last_Name,
      User_Name: req.body.User_Name,
      Email: req.body.Email,
      Password: newpass,
    };

    const tag = await movie_maker.create(data);

    // jwt.sign({ tag }, jwtkey, (err, token) => {
    //   if (err) {
    //     res.send({ result: "wrong...." });
    //   }
    //   res.send({ tag, auth: token });

    res.status(201).json({
      data: tag,
      status: "Data insert",
    });
    // });
  } catch (error) {
    console.log("not data insert........!");
  }
};

exports.Mlogin = async function (req, res, next) {
  const { User_Name, Password } = req.body;
  const User = await movie_maker.findOne({ User_Name });

  if (User != null) {
    jwt.sign({ User }, jwtkey, (err, token) => {
      if (err) {
        res.send({ result: "wrong...." });
      }
      res.send({ User, auth: token });

      const checkpass = bcrypt.compare(Password, User.Password);
      if (checkpass) {
        res.status(200).json({
          status: true,
          data: User,
        });
      }
    });
  } else {
    // res.status(200).json({
    //   status: false,
    //   message: "not valid username and password",
    // });
    res.send({ status: "true", result: "not valid username and password" });
  }
};

exports.Mfind_data = async function (req, res, next) {
  try {
    const tag = await movie_maker.find();

    res.status(200).json({
      status: "find data",
      data: tag,
    });
  } catch (error) {
    console.log("not find data........!");
  }
};

exports.Mfind_data_Id = async function (req, res, next) {
  try {
    const tag = await movie_maker.findById(req.params.id);
    res.status(200).json({
      status: "find id",
      data: tag,
    });
  } catch (error) {
    console.log("Data not find by id........!");
  }
};

exports.MDelete_data = async function (req, res, next) {
  try {
    await movie_maker.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "delete",
    });
  } catch (error) {
    console.log("Data not delete........!");
  }
};

exports.MUpdate_data = async function (req, res, next) {
  try {
    var BannerData = await movie_maker.findById(req.body.Id);
    (BannerData.First_Name = req.body.First_Name),
      (BannerData.Last_Name = req.body.Last_Name),
      (BannerData.User_Name = req.body.User_Name),
      (BannerData.Email = req.body.Email);

    await movie_maker.findByIdAndUpdate(req.body.Id, BannerData);
    res.status(201).json({
      status: "success",
      data: req.file,
    });
  } catch (error) {
    console.log(error);
  }
};

// mukunj API end

//vikas api start
exports.vinsert_data = async function (req, res, next) {
  try {
    const data = {
      category: req.body.category,
      Description: req.body.Description,
      image_user: req.file.path,
    };
    const tag = await Categoires.create(data);

    res.status(201).json({
      data: tag,
      status: "Data insert",
    });
  } catch (error) {
    console.log("not data insert........!");
  }
};

exports.vfind_data = async function (req, res, next) {
  try {
    const tag = await Categoires.find();

    res.status(200).json({
      status: "find data",
      data: tag,
    });
  } catch (error) {
    console.log("not find data........!");
  }
};

exports.vfind_data_Id = async function (req, res, next) {
  try {
    const tag = await Categoires.findById(req.params.id);
    res.status(200).json({
      status: "find id",
      data: tag,
    });
  } catch (error) {
    console.log("Data not find by id........!");
  }
};

exports.vDelete_data = async function (req, res, next) {
  try {
    await Categoires.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "delete",
    });
  } catch (error) {
    console.log("Data not delete........!");
  }
};

exports.vUpdate_data = async function (req, res, next) {
  try {
    var BannerData = await Categoires.findById(req.body.Id);
    BannerData.category = req.body.category;
    BannerData.Description = req.body.Description;
    if (req.file != null) {
      await unlinkAsync(BannerData.image_user);
      BannerData.image_user = req.file.path;
    }
    await Categoires.findByIdAndUpdate(req.body.Id, BannerData);
    res.status(201).json({
      status: "success",
      data: req.file,
    });
  } catch (error) {
    console.log(error);
  }
};

//keyur api start

exports.kinsert_data = async function (req, res, next) {
  try {
    const data = {
      category: req.body.category,
      subcategorie: req.body.subcategorie,
      description: req.body.description,
      image_user: req.file.path,
    };
    const tag = await subcategoires.create(data);

    res.status(201).json({
      data: tag,
      status: "Data insert",
    });
  } catch (error) {
    console.log("not data insert........!");
  }
};

// exports.find_category = async function (req, res, next)
// {

// }

exports.kfind_data = async function (req, res, next) {
  console.log("res : " + req.query.category);
  console.log("res1 : ", req);
  if (req.query.category != "null") {
    try {
      const tag = await subcategoires.find({ category: req.query.category });
      console.log("filter :" + tag);
      res.status(200).json({
        status: "find data",
        data: tag,
      });
    } catch (error) {
      console.log("not find data........!");
    }
  } else {
    try {
      const tag = await subcategoires.find();

      // console.log(tag);

      res.status(200).json({
        status: "find data",
        data: tag,
      });
    } catch (error) {
      console.log("error :" + error);
      // console.log("not find data........!");
    }
  }

  // try {

  //       const tag = await subcategoires.find({category:req.query.category});
  //        console.log("filter :" + tag)
  //        res.status(200).json({
  //         status: "find data",
  //         data: tag,
  //       });
  //     } catch (error) {
  //       console.log("not find data........!")
  //     }
};

exports.kfind_data_Id = async function (req, res, next) {
  try {
    const tag = await subcategoires.findById(req.params.id);
    res.status(200).json({
      status: "find id",
      data: tag,
    });
  } catch (error) {
    console.log("Data not find by id........!");
  }
};

exports.kfindone_data = async function (req, res, next) {
  try {
    const tag = await subcategoires.find();
    res.status(200).json({
      status: "find id",
      data: tag,
    });
  } catch (error) {
    console.log("Data not find by id........!");
  }
};

exports.kDelete_data = async function (req, res, next) {
  try {
    await subcategoires.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "delete",
    });
  } catch (error) {
    console.log("Data not delete........!");
  }
};

exports.kUpdate_data = async function (req, res, next) {
  try {
    var BannerData = await subcategoires.findById(req.body.Id);
    BannerData.category = req.body.category;
    BannerData.subcategorie = req.body.subcategorie;
    BannerData.description = req.body.description;
    if (req.file != null) {
      await unlinkAsync(BannerData.image_user);
      BannerData.image_user = req.file.path;
    }
    await subcategoires.findByIdAndUpdate(req.body.Id, BannerData);
    res.status(201).json({
      status: "success",
      data: req.file,
    });
  } catch (error) {
    console.log(error);
  }
};

//video api
exports.viinsert_data = async function (req, res, next) {
  // const sid = Math.random();
  
//  const cnt=1; 
  try {
    // const form = new IncomingForm(formidable);
    const data = {
    
      method: req.body.method,
      rdate: req.body.rdate,
      edate: req.body.edate,
      status: req.body.status,
      banner: req.body.banner,
      title: req.body.title,
      category: req.body.category,
      subcategory: req.body.subcategory,
      Description: req.body.Description,
      language: req.body.language,
      image_user: req.files[0].path,
      banner_video: req.files[1].path,
      Trailer_video: req.files[2].path,
    };
    console.log(data);
    const tag = await video.create(data);

    res.status(201).json({
      data: tag,
      status: "Data insert",
    });
    console.log(tag);
  } catch (error) {
    res.status(201).json({ error });
    // console.log(error);
    console.log("not data insert........!");
  }
};

exports.vifind_data = async function (req, res, next) {
  try {
    const tag = await video.find();

    res.status(200).json({
      status: "find data",
      data: tag,
    });
  } catch (error) {
    console.log("not find data........!");
  }
};

exports.banner_find = async function (req, res, next) {
  // try {
    const tag = await video.find(
      { 
        banner: 'Yes',
      }
    );
    res.status(200).json({
      status: "find data",
      data: tag
    });
  // } catch (error) {
  //   console.log("not find data........!");
  // }
};

exports.video_find = async function (req, res, next) {
  try {
    // console.log(req.body)
    
    const tag = await video.findById(req.body.id);
  
    res.status(200).json({
      status: "find data",
      data: [tag],
    });
  } catch (error) {
    res.status(200).json({
      status: "find data",
      data: [],
    });
  }
};

exports.latest_find = async function (req, res, next) {
  try {
 
      const tag = await video.find(
        { 
      
          rdate : { 
            $gt : new Date(new Date().getFullYear(),new Date().getMonth() - 1,new Date().getDate()).toISOString().replace(/T.*/,''),
            $lt : new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()).toISOString().replace(/T.*/,'')
          },
        }
      );
    res.status(200).json({
      status: "find data",
      data: tag,
    });
  } catch (error) {
    console.log("not find data........!");
  }
};

exports.Upcoming_find = async function (req, res, next) {
  try {
 
      const tag = await video.find(
        { 
      
          rdate : { 
            $gt : new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()).toISOString().replace(/T.*/,''),
          },
        }
      );
    res.status(200).json({
      status: "find data",
      data: tag,
    });
  } catch (error) {
    console.log("not find data........!");
  }
};

exports.vifind_data_Id = async function (req, res, next) {
  try {
    const tag = await video.findById(req.params.id);
    res.status(200).json({
      status: "find id",
      data: tag,
    });
  } catch (error) {
    console.log("Data not find by id........!");
  }
};

exports.viDelete_data = async function (req, res, next) {
  try {
    await video.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "delete",
    });
  } catch (error) {
    console.log("Data not delete........!");
  }
};

exports.viUpdate_data = async function (req, res, next) {
  try {
    var BannerData = await video.findById(req.body.Id);
    (BannerData.method = req.body.method),
      (BannerData.rdate = req.body.rdate),
      (BannerData.edate = req.body.edate),
      (BannerData.status = req.body.status),
      (BannerData.category = req.body.category);
    BannerData.title = req.body.title;
    BannerData.language = req.body.language;
    BannerData.subcategory = req.body.subcategory;
    BannerData.Description = req.body.Description;

    for (let iv of req.files) {
      if (iv.fieldname == "image") {
        await unlinkAsync(BannerData.image_user);
        BannerData.image_user = iv.path;
      } else if (iv.fieldname == "banner_video") {
        await unlinkAsync(BannerData.banner_video);
        BannerData.banner_video = iv.path;
      } else if (iv.fieldname == "Trailer_video") {
        await unlinkAsync(BannerData.Trailer_video);
        BannerData.Trailer_video = iv.path;
      }
    }

    await video.findByIdAndUpdate(req.body.Id, BannerData);
    res.status(201).json({
      status: "success",
      data: req.files,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.Contract_find_data = async function (req, res, next) {
  try {
    const tag = await Contract.find().limit(1).sort({$natural:-1})

    res.status(200).json({
      status: "find data",
      data: tag,
    });
  } catch (error) {
    console.log("not find data........!");
  }
};

exports.Contract_data = async function (req, res, next) {
 
  try {
    const { jsPDF } = require("jspdf"); 
    
    const doc = new jsPDF();
    doc.text("******************************* Contract *******************************", 10, 10);
    doc.text("Movie Name :- "     +req.body.Movie_Name,     10, 20);
    doc.text("Provider Name :- "  +req.body.Provider_Name,  10, 30);
    doc.text("Provider Phone :- " +req.body.Provider_Phone, 10, 40);
    doc.text("Period :- "         +req.body.Period,         10, 50);
    doc.text("Provider Ratio :- " +req.body.Provider_Ratio, 10, 60);
    doc.text("Paltform Ratio :- " +req.body.Paltform_Ratio, 10, 70);
    doc.text("Fee :- "            +req.body.Fee,            10, 80);
    doc.text("Payment Charge :- " +req.body.Payment_Charge, 10, 90);
    doc.text("Company Name :- "   +req.body.Company_Name,   10, 100);
    doc.text("Adress :- "         +req.body.Adress,         10, 110);
    doc.text("CIN :- "            +req.body.CIN,            10, 120);
    doc.text("Director Name :- "  +req.body.Director_Name,  10, 130);
    doc.text("DIN :- "            +req.body.DIN,            10, 140);
    
    var name = "Contact pdf-"+Date.now()
    var pdf = `upload/pdf/${name}.pdf`
    doc.save(pdf); 
    const data = {
    
      Movie_Name: req.body.Movie_Name,
      Provider_Name: req.body.Provider_Name,
      Provider_Phone: req.body.Provider_Phone,
      Period: req.body.Period,
      Provider_Ratio: req.body.Provider_Ratio,
      Paltform_Ratio: req.body.Paltform_Ratio,
      Fee: req.body.Fee,
      Payment_Charge: req.body.Payment_Charge,
      Company_Name: req.body.Company_Name,
      Adress: req.body.Adress,
      CIN: req.body.CIN,
      Director_Name: req.body.Director_Name,
      DIN: req.body.DIN,
      Contract_pdf:pdf
  };

  //pdf 
// console.log(pdf)



    const tag = await Contract.create(data);
    res.status(201).json({
      data: tag,
      status: "Data insert",
    });
    // console.log(tag);
  } catch (error) {
    res.status(201).json({ error });
    console.log("not data insert........!");
  }
};


