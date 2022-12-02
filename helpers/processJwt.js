import jwt from 'jsonwebtoken'

const generateJwt = (id) => {
  return new Promise((resolve, reject) => {
  jwt.sign({id}, process.env.SECRET_KEY, {expiresIn:'1h'},
    (err, token) => {
      if(err){
        reject(err)
      } else{
        resolve(token)
      }
    }
  );
  })
}

export default generateJwt;