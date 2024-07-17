export default function CartCheckoutInputs({addressProps,setAddressProp,disabled=false}) {
    const {phone, email, requests} = addressProps;
    return (
        <>
        <label>Phone Number</label>
                        <input
                            disabled={disabled} 
                            type="tel" placeholder="Phone Number" 
                            value={phone || ''} onChange={ev => setAddressProp('phone', ev.target.value)} 
                        />
                        <label>Email</label>
                        <input
                            disabled={disabled} 
                            type="text" placeholder="Email" 
                            value={email  || ''} onChange={ev => setAddressProp('email', ev.target.value)} 
                        />
                        <div className="mb-4">
                            <div>
                                <label>Special Instructions</label>
                                <input
                                    disabled={disabled} 
                                    type="text" placeholder="Enter request (30 character limit)" 
                                    value={requests}
                                    // value={city || ''} onChange={ev => setAddressProp('city', ev.target.value)} 
                                />
                            </div>
                        </div>
        </>
    )
}