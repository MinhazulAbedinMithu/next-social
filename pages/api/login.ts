// import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

const Login = (req: NextApiRequest, res: NextApiResponse) => {
  if(!req.body){
    res.statusCode;
    res.end("Error");
  }
	
  const {username, password} = req.body;

  // res.json({
  //   token: jwt.sign({
  //     username,
  //     admin: username === 'admin' && password === 'admin'
  //   }),
  //   process.env.KEY
  // })

	res.json({ num: Math.floor(Math.random() * 10) });
}

export default Login;