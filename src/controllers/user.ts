import UserModel from "../models/UserModel"
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import { getAccesstoken } from "../utils/getAccesstoken";
import { generatorRandomText } from "../utils/generatorRandomText";
dotenv.config();


const register = async (req : any, res : any) => {
    const body = req.body

    const {email, name, password } = body;

    try {
        
        const user = await UserModel.findOne({email})

        if (user) {
            throw new Error('Email đã tồn tại')
        }

        const salt = await bcrypt.genSalt(10)

        const haspassword = await bcrypt.hash(password, salt)

        body.password = haspassword

        const newUser : any  = new UserModel(body)

        await newUser.save();

        delete newUser._doc.password;
        
        newUser.token =  res.status(200).json({
            message : 'Register',
            data : {
                ...newUser._doc, 
                token : await getAccesstoken({
                    _id : newUser._id,
                    email : newUser.email,
                    rule : 1,
                })
            }
        });

    } catch (error : any) {
        res.status(404).json({
            message : error.message
        })
    }
}

const login = async (req : any, res : any) => {
    const body = req.body

    const {email,password } = body;

    try {
        
        const user : any = await UserModel.findOne({email})

        if (!user) {
            throw new Error('Email này không tồn tại')
        }

        const isMatchPassword = await bcrypt.compare(password, user.password) 
        if (!isMatchPassword) {
            throw new Error('Đăng nhập thất bại vui lòng kiểm tra lại email hoặc password')
        }

        delete user._doc.password;
        
        res.status(200).json({
            message : 'Login successfuly',
            data : {
                ...user._doc, 
                token : await getAccesstoken({
                    _id : user._id,
                    email : user.email,
                    rule : user.rule ?? 1,
                })
            }
        });

    } catch (error : any) {
        res.status(404).json({
            message : error.message
        })
    }
}

const loginWithGoogle = async (req : any, res : any) => {
    const body = req.body

    const {email, name } = body;

    try {
        
        const user : any = await UserModel.findOne({email})

        if (user) {
            delete user._doc.password;
        
            user.token =  res.status(200).json({
                message : 'Login succesfully',
                data : {
                    ...user._doc, 
                    token : await getAccesstoken({
                        _id : user._id,
                        email : user.email,
                        rule : 1,
                    })
                }
            });
        }else{
            const salt = await bcrypt.genSalt(10)

            const haspassword = await bcrypt.hash(generatorRandomText(6), salt)
    
            body.password = haspassword
    
            const newUser : any  = new UserModel(body)
    
            await newUser.save();
    
            delete newUser._doc.password;
            
            newUser.token =  res.status(200).json({
                message : 'Login succesfully',
                data : {
                    ...newUser._doc, 
                    token : await getAccesstoken({
                        _id : newUser._id,
                        email : newUser.email,
                        rule : 1,
                    })
                }
            });
        }
    } catch (error : any) {
        res.status(404).json({
            message : error.message
        })
    }
}

export {register, login,loginWithGoogle};