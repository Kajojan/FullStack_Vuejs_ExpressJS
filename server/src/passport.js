const passport = require("passport")
const {User} = require('./models')

const JwtStrategy = require("passport-jwt").Strategy
const ExtractJwt = require("passport-jwt").ExtractJwt

const config = require('./config/config')

passport.use(
    new JwtStrategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.authentication.jwtSecret
    }, async function (jwtPaylload, done){
        try {
            const user = await User.findOne({
                where:{
                    id:jwtPaylload.id
                }
            })

            if(!user){
                return done(new Error(), false)
            }
            return done(null,user)
        } catch (errr) {
            return done(new Error(), false)
        }
    })
)
module.exports=null