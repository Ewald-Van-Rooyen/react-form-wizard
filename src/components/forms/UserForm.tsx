import { FormWrapper } from "../wrappers/FormWrapper";

type UserData = {
    firstName: string,
    lastName: string,
    age: number
}

type UserFormProps = UserData & {
    updateFields:(fields:Partial<UserData>)=>void
}

export function UserForm({ firstName, lastName, age, updateFields }:UserFormProps) {
    return (<FormWrapper title="User Details">
        <label htmlFor="firstName">First Name</label>
        <input value={firstName} name="firstName" autoFocus required type="text"  onChange={event=>updateFields({firstName:event.target.value})}/>
        <label htmlFor="lastName">Last Name</label>
        <input value={lastName} name="lastName" required type="text" onChange={event=>updateFields({lastName:event.target.value})}/>
        <label htmlFor="age">Age</label>
        <input value={age} name="age" min={1} required type="number" onChange={event=>updateFields({age:parseInt(event.target.value)})}/>
    </FormWrapper>)
}