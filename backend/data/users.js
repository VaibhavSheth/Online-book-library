import bcrypt from 'bcryptjs'

const users = [
{
name:'Admin User',
email:'admin@example.com',
password: bcrypt.hashSync('123456',10),
isAdmin: true
},
{
    name:'Vaibhav',
    email:'vaibhav@example.com',
    password: bcrypt.hashSync('123456',10),
    },
{
    name:'Raj',
    email:'raj@example.com',
    password: bcrypt.hashSync('123456',10),    
},
]

export default users