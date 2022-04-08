var Parth = require("../Models/Parth");
var Mukunj_Schema = require("../Models/Mukunj");
var vikas_schema = require("../Models/vikas");
var keyur_schema = require("../Models/keyur");
var vikas1_schema = require("../Models/video");
// var banner_schema = require("../Models/banner_video");
var nodemailer = require("nodemailer");
const fs = require("fs");
const { promisify } = require("util");
const unlinkAsync = promisify(fs.unlink);
// import validator from 'validator';


// parth api start
exports.insert_data = async function (req, res, next) {
  try {
    data = {
      language: req.body.language,
    };
    const tag = await Parth.create(data);

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
    const tag = await Parth.find();

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
    const tag = await Parth.findById(req.params.id);
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
    await Parth.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "delete",
    });
  } catch (error) {
    console.log("Data not delete........!");
  }
};

exports.Update_data = async function (req, res, next) {
  try {
    var BannerData = await Parth.findById(req.body.Id);
    BannerData.language = req.body.language;
    await Parth.findByIdAndUpdate(req.body.Id, BannerData);
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
    data = {
      First_Name: req.body.First_Name,
      Last_Name: req.body.Last_Name,
      User_Name: req.body.User_Name,
      Email: req.body.Email
    };
    // console.log(data);

    const tag = await Mukunj_Schema.create(data); 
    res.status(201).json({
      data: tag,
      status: "Data insert",
    });

    var result = "";
    var characters =
      "ABCD@EFGHIJKLMNOP!QRSTUVWX#YZ&abcdefghijklmnopqrstuvwxyz012345%6789$";
    var charactersLength = characters.length;
    for (var i = 0; i < 8; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    // console.log(result);

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
      html: "<h1>Don't share your Password....!!!</h1> <h2>" +result+ "</h2>",
    };
 
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    res.render("result");
    
  } 
  catch (error) {
    console.log("not data insert........!");
  }
};

exports.Mfind_data = async function (req, res, next) {
  try {
    const tag = await Mukunj_Schema.find();

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
    const tag = await Mukunj_Schema.findById(req.params.id);
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
    await Mukunj_Schema.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "delete",
    });
  } catch (error) {
    console.log("Data not delete........!");
  }
};

exports.MUpdate_data = async function (req, res, next) {
  try {
    var BannerData = await Mukunj_Schema.findById(req.body.Id);
    (BannerData.First_Name = req.body.First_Name),
      (BannerData.Last_Name = req.body.Last_Name),
      (BannerData.User_Name = req.body.User_Name),
      (BannerData.Email = req.body.Email);

    await Parth.findByIdAndUpdate(req.body.Id, BannerData);
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
    const tag = await vikas_schema.create(data);

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
    const tag = await vikas_schema.find();

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
    const tag = await vikas_schema.findById(req.params.id);
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
    await vikas_schema.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "delete",
    });
  } catch (error) {
    console.log("Data not delete........!");
  }
};

exports.vUpdate_data = async function (req, res, next) {
  try {
    var BannerData = await vikas_schema.findById(req.body.Id);
    BannerData.category = req.body.category;
    BannerData.Description = req.body.Description;
    if (req.file != null) {
      await unlinkAsync(BannerData.image_user);
      BannerData.image_user = req.file.path;
    }
    await vikas_schema.findByIdAndUpdate(req.body.Id, BannerData);
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
      category:req.body.category,
      subcategorie: req.body.subcategorie,
      description: req.body.description,
      image_user: req.file.path,
    };
    const tag = await keyur_schema.create(data);

    res.status(201).json({
      data: tag,
      status: "Data insert",
    });
  } catch (error) {
    console.log("not data insert........!");
  }
};

exports.kfind_data = async function (req, res, next) {
  try {
    const tag = await keyur_schema.find();

    res.status(200).json({
      status: "find data",
      data: tag,
    });
  } catch (error) {
    console.log("not find data........!");
  }
};

exports.kfind_data_Id = async function (req, res, next) {
  try {
    const tag = await keyur_schema.findById(req.params.id);
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
    await keyur_schema.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "delete",
    });
  } catch (error) {
    console.log("Data not delete........!");
  }
};

exports.kUpdate_data = async function (req, res, next) {
  try {
    var BannerData = await keyur_schema.findById(req.body.Id);
    BannerData.category = req.body.category;
    BannerData.subcategorie = req.body.subcategorie;
    BannerData.description = req.body.description;
    if (req.file != null) {
      await unlinkAsync(BannerData.image_user);
      BannerData.image_user = req.file.path;
    }
    await keyur_schema.findByIdAndUpdate(req.body.Id, BannerData);
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
  console.log(req);
  try {
    data = {
      title: req.body.title,
      category: req.body.category,
      subcategory: req.body.subcategory,
      Description: req.body.Description,
      language: req.body.language,
      image_user: req.files[0].path,
      banner_video: req.files[1].path,

    };
    const tag = await vikas1_schema.create(data);

    res.status(201).json({
      data: tag,
      status: "Data insert",
    });
  } catch (error) {
    res.status(201).json({error})
    console.log(error);
    console.log("not data insert........!");
  }
};

exports.vifind_data = async function (req, res, next) {
  try {
    const tag = await vikas1_schema.find();

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
    const tag = await vikas1_schema.findById(req.params.id);
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
    await vikas1_schema.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "delete",
    });
  } catch (error) {
    console.log("Data not delete........!");
  }
};

exports.viUpdate_data = async function (req, res, next) {
  try {
    var BannerData = await vikas1_schema.findById(req.body.Id);
    BannerData.category = req.body.category;
    BannerData.title = req.body.title;
    BannerData.language = req.body.language;
    BannerData.subcategory = req.body.subcategory;
    BannerData.Description = req.body.Description;
      if (req.file != null) {
          await unlinkAsync(BannerData.image_user);
          BannerData.image_user = req.file.path;
      }
      if (req.file != null) {
          await unlinkAsync(BannerData.banner_video);
          BannerData.banner_video = req.file.path;
      }
    await vikas1_schema.findByIdAndUpdate(req.body.Id, BannerData);
    res.status(201).json({
      status: "success",
      data: req.file,
    });
  } catch (error) {
    console.log(error);
  }
};