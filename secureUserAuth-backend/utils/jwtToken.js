import jwt from 'jsonwebtoken';

export const handleToken = (id, secret, expires) =>{

    return jwt.sign({id}, secret, {expiresIn: expires});
}