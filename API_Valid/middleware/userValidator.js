const joi = require('@hapi/joi');

  
//   app.post("/profile", verifyToken,(req,res) => {
//       jwt.verify(req.token, secretKey, (err, authData) =>{
//           if(err){
//               res.send({result: "invalid token"})
//           }else {
//               res.json({
//                   message: "profile accessed",
//                   authData
//               })
//           }
//       })
//   })
  
//   function verifyToken(req, res, next) {
//       const bearerHeader = req.headers['authorization'];
//       if(typeof bearerHeader !== 'undefined'){
//           const bearer = bearerHeader.split(" ");
//           const token = bearer[1];
//           req.token = token;
//           next();
//       }else {
//           res.send({
//               result: 'Invalid Token'
//           })
//       }
//   }

const schema = joi.object().keys({
      name: joi.string().min(3).max(40).required(),
      email: joi.string().email().lowercase().required(),
      password: joi.string().min(2).required(),
});

module.exports = schema;