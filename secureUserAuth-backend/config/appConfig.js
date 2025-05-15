import dotenv from 'dotenv';
dotenv.config('../.env');

export const appConfig ={
    databaseUrl: String(process.env.DATABASE_URL),
    accessToken: String(process.env.JWT_ACCESS_TOKEN),
    refreshToken: String(process.env.JWT_REFRESH_TOKEN),
    accessTokenExpires: String(process.env.JWT_ACCESS_TOKEN_EXPIRES),
    refreshTokenExpires: String(process.env.JWT_REFRESH_TOKEN_EXPIRES),
}

