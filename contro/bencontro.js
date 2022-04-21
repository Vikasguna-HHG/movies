var Categoires = require("../Models/Categoires");
var subcategoires = require("../Models/subcategoires");
var movie_maker = require("../Models/movie_maker");
var language = require("../Models/language");
var video = require("../Models/video");
var $ = require("jquery");
var jwt = require("jsonwebtoken");
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
/* login api  */
// router.get("/signup", async function (req, res, next) {
//   if (req.body.password != req.body.confirmpassword) {
//     res.status(200).json({
//       status: "success",
//     });
//   }

//   var newpass = await bcrypt.hash(req.body.password, 12);
//   console.log(newpass);

//   const newuser = await User.create({
//     name: req.body.name,
//     email: req.body.email,
//     password: newpass,
//   });

//   res.status(200).json({
//     status: "password not sem... ",
//     data: newuser,
//   });
// });

// parth api start
exports.insert_data = async function (req, res, next) {
  try {
    data = {
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
    // var otp = Math.random().toString().slice(2, 10);
    // // otp = otp * 10000000;
    // otp = parseInt(otp);
    // console.log(otp);

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
    const data = {
      First_Name: req.body.First_Name,
      Last_Name: req.body.Last_Name,
      User_Name: req.body.User_Name,
      Email: req.body.Email,
      Password: newpass,
    };

    const tag = await movie_maker.create(data);
    res.status(201).json({
      data: tag,
      status: "Data insert",
    });
  } catch (error) {
    console.log("not data insert........!");
  }
};

exports.Mlogin = async function (req, res, next) {
    const { User_Name, Password } = req.body;
    const User = await movie_maker.findOne({ User_Name });
   
    if(User != null) {
      const checkpass = await bcrypt.compare(Password, User.Password);
      if(checkpass){
        res.status(200).json({
          status: true,
          data: User,
        });
      }
    }
    else
    {
      res.status(200).json({
        status: false,
        message: "not valid username and password",
      });
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
    data = {
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
    data = {
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
  try {
    // const form = new IncomingForm(formidable);
    const data = {
      title: req.body.title,
      category: req.body.category,
      subcategory: req.body.subcategory,
      Description: req.body.Description,
      language: req.body.language,
      image_user: req.files[0].path,
      banner_video: req.files[1].path,
    };
    const tag = await video.create(data);

    res.status(201).json({
      data: tag,
      status: "Data insert",
    });
  } catch (error) {
    res.status(201).json({ error });
    console.log(error);
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
    BannerData.category = req.body.category;
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
      }
    }

    // if(req.files.length != 0){
    //     if(req.files[0].fieldname == 'image'){
    //         await unlinkAsync(BannerData.image_user);
    //         BannerData.image_user = req.files.path;
    //     }else{
    //         await unlinkAsync(BannerData.banner_video);
    //         BannerData.banner_video = req.files.path;
    //     }

    //     if(req.files[1].fieldname == 'banner_video'){
    //         await unlinkAsync(BannerData.banner_video);
    //         BannerData.banner_video = req.files.path;
    //     }
    // }

    // if (req.files.length != 0) {
    //     await unlinkAsync(BannerData.image_user);
    //     BannerData.image_user = req.files.path;
    // }
    // if (req.files.length != 0) {
    //     await unlinkAsync(BannerData.banner_video);
    //     BannerData.banner_video = req.files.path;
    // }

    await video.findByIdAndUpdate(req.body.Id, BannerData);
    res.status(201).json({
      status: "success",
      data: req.files,
    });
  } catch (error) {
    console.log(error);
  }
};
