import jwt from "jsonwebtoken";
import {logger} from "../application/logging.js";
import {redis} from "../application/redis.js";

const secret = "rahasia jangan sampai ada yang tahu 213123123";

const create = async (user) => {
  const token = jwt.sign({
    username: user.username
  }, secret, {
    algorithm: "HS256",
    expiresIn: "1d"
  })

  await redis.setex(token, 86400, user.username);

  return token;
}

const verify = async (token) => {
  const value = await redis.get(token);
  if (value === null) {
    return null;
  } else {
    return {
      username: value,
    }
  }

  // try {
  //   const decoded = jwt.verify(token, secret, {
  //     algorithm: "HS256"
  //   });
  //
  //   return {
  //     username: decoded.username
  //   }
  // } catch (e) {
  //   logger.error(e);
  //   return null;
  // }
}

export default {
  create,
  verify
}