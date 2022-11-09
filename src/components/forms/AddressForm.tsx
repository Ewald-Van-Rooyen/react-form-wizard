import { FormWrapper } from "../wrappers/FormWrapper";

type AddressData = {
    street: string,
    city: string,
    state: string,
    zip: string
}

type AddressFormProps = AddressData & {
    updateFields: (fields: Partial<AddressData>) => void
}

export function AddressForm({ street, city, state, zip, updateFields }: AddressFormProps) {
    return (<FormWrapper title="Address Details">
        <label htmlFor="street">Street</label>
        <input name="street" autoFocus required type="text"
            value={street}
            onChange={event => updateFields({ street: event.target.value })} />
        <label htmlFor="city">City</label>
        <input name="city" required type="text"
            value={city}
            onChange={event => updateFields({ city: event.target.value })} />
        <label htmlFor="state">State</label>
        <input name="state" required type="text"
            value={state}
            onChange={event => updateFields({ state: event.target.value })} />
        <label htmlFor="zip">Zip</label>
        <input name="zip" required type="text"
            value={zip}
            onChange={event => updateFields({ zip: event.target.value })} />
    </FormWrapper>)
}