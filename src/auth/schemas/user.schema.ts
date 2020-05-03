import { Schema } from 'mongoose';

export const UserSchema = new Schema({
    username: {type:String, required:[true, 'Username is required'], unique:true},
    email: { type: String, required:[true, 'Email is required'], unique:true },
    password: { type:String, required:[true, 'Password is required'] },
}, {timestamps:true});
