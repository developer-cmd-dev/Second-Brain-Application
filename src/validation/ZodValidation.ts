import * as z from 'zod'

const UserZodModel = z.object({
    email:z.email(),
    password:z.string().min(8).max(100)
        .refine((password)=>/[a-zA-Z0-9]/.test(password),{message:"Password should Contain Small,Capital Letter and Number."})
})


export {UserZodModel};