import { ReactNode } from "react"
import "../../form.css"

type FormWrapperProps = {
    title: string,
    children: ReactNode
}

export function FormWrapper({ title, children }: FormWrapperProps) {
    return (
        <>
            <h2 className="formTitle">{title}</h2>
            <div className="formChildren">{children}</div>
        </>
    )
}