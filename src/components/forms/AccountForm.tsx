import { FormWrapper } from "../wrappers/FormWrapper";

type AccountData = {
    email: string,
    password: string
}

type AccountFormProps = AccountData & {
    updateFields: (fields: Partial<AccountData>) => void
}

export function AccountForm({ email, password, updateFields }: AccountFormProps) {
    return (<FormWrapper title="Account Details">
        <label htmlFor="email">Email</label>
        <input name="email" autoFocus required type="email"
            value={email}
            onChange={event => updateFields({ email: event.target.value })} />
        <label htmlFor="password">Password</label>
        <input name="password" required type="password"
            value={password}
            onChange={event => updateFields({ password: event.target.value })} />
    </FormWrapper>)
}