import { Response, Request, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getUserById } from '../src/services/userService';

const SALT = 10;

declare global {
  namespace Express {
    interface Request {
      user?: { id: number; role: string; name: string };
    }
  }
}

export const encryptPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(SALT);
  const hashedPass = await bcrypt.hash(password, salt);
  return hashedPass;

  // return new Promise((resolve, reject) => {
  //   bcrypt.hash(password, SALT, (err, encryptedPassword) => {
  //     if (err) {
  //       reject(err);
  //       return;
  //     }
  //     resolve(encryptedPassword);
  //   });
  // });
};

export const checkPassword = async (encryptedPassword: string, password: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, encryptedPassword, (err, isPasswordCorrect) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(isPasswordCorrect);
    });
  });
};

export const createToken = async (payload: object): Promise<string> => {
  return jwt.sign(payload, process.env.JWT_SIGNATURE_KEY || 'Rahasia');
};

export const whoAmI = async (req: Request, res: Response) => {
  res.status(200).json(req.user);
};

export const authorized = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bearerToken = req.headers.authorization;

    if (!bearerToken) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }

    const token = bearerToken.split('Bearer ')[1];
    const tokenPayload = jwt.verify(token, process.env.JWT_SIGNATURE_KEY || 'Rahasia') as jwt.JwtPayload;

    const user = await getUserById(tokenPayload.id);
    req.user = user;
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({
      message: 'Unauthorized',
    });
  }
};

export const authorizeRole = (role: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (req.user && (req.user.role === 'superadmin' || req.user.role === 'admin')) {
      next();
    } else {
      res.status(403).send('Access Denied');
    }
  };
};

// function encryptPassword(password: string): Promise<string> {
//     return new Promise((resolve, reject) => {
//       bcrypt.hash(password, SALT, (err, encryptedPassword) => {
//         if (err) {
//           reject(err);
//           return;
//         }
//         resolve(encryptedPassword);
//       });
//     });
//   }

//   function checkPassword(
//     encryptedPassword: string,
//     password: string
//   ): Promise<boolean> {
//     return new Promise((resolve, reject) => {
//       bcrypt.compare(password, encryptedPassword, (err, isPasswordCorrect) => {
//         if (err) {
//           reject(err);
//           return;
//         }
//         resolve(isPasswordCorrect);
//       });
//     });
//   }

//   function createToken(payload: object): string {
//     return jwt.sign(payload, process.env.JWT_SIGNATURE_KEY || "Rahasia");
