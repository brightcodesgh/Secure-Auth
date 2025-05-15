const whitelist = ['http://localhost:5173'];
export const corsOptions ={
    origin: (origin, callback) => {
        if(whitelist.indexOf(origin) !== -1 || !origin){
            callback(null,true)
        }else
        callback(new Error('Not allowed by CORS'))
    },
    credentials: true,
    OptionSuccessStatus: 200,
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    exposedHeaders: ['Set-Cookie']
} 



