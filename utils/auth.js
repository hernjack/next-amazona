import jwt from 'jsonwebtoken';

const signToken = (user) => {
  return new Promise ((resolve, reject)=> {
    return jwt.sign(
      {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      },
  
      process.env.JWT_SECRET,
      {
        expiresIn: '30d',
      }
    , (err, token) => {
      if (err) reject(err);
      else resolve(token)
    })
  })
};

export { signToken };