export default function AddressInputs({addressProps,setAddressProp,disabled=false}) {
    const {phone, streetAddress, zip, city, country} = addressProps;
    return (
        <>
        <label>Phone Number</label>
                        <input
                            disabled={disabled} 
                            type="tel" placeholder="Phone Number" 
                            value={phone || ''} onChange={ev => setAddressProp('phone', ev.target.value)} 
                        />
                        <label>Street Address</label>
                        <input
                            disabled={disabled} 
                            type="text" placeholder="Street Address" 
                            value={streetAddress  || ''} onChange={ev => setAddressProp('streetAddress', ev.target.value)} 
                        />
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <label>City</label>
                                <input
                                    disabled={disabled} 
                                    type="text" placeholder="City" 
                                    value={city || ''} onChange={ev => setAddressProp('city', ev.target.value)} 
                                />
                            </div>
                            <div>
                                <label>ZIP Code</label>
                                <input
                                    disabled={disabled} 
                                    type="text" placeholder="ZIP Code" 
                                    value={zip || ''} onChange={ev => setAddressProp('zip', ev.target.value)} 
                                />                                
                            </div>
                        </div>
                        <label>Country</label>
                        <input
                            disabled={disabled} 
                            type="text" placeholder="Country" 
                            value={country || ''} onChange={ev => setAddressProp('country', ev.target.value)} 
                        />
        </>
    )
}