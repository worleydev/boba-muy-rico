'use client';
import { useProfile } from "../UseProfile";
import EditableImage from "../layout/EditableImage";
import AddressInputs from "@/components/layout/AddressInputs";
import { useState } from "react";


export default function UserForm({user,onSave}) {
    const [userName, setUserName] = useState(user?.name || '');
    const [image, setImage] = useState(user?.image || '');
    const [phone, setPhone] = useState(user?.phone || '');
    const [streetAddress, setStreetAddress] = useState(user?.streetAddress || '');
    const [city, setCity] = useState(user?.city || '');
    const [zip, setZip] = useState(user?.zip || '');
    const [country, setCountry] = useState(user?.country || '');
    const [admin, setAdmin] = useState(user?.admin || false);
    const {data:loggedInUserData} = useProfile();

    function handleAddressChange(propName, value) {
        if (propName === 'phone') setPhone(value);
        if (propName === 'streetAddress') setStreetAddress(value);
        if (propName === 'city') setCity(value);
        if (propName === 'zip') setZip(value);
        if (propName === 'country') setCountry(value);
    }

    return (

                <div className="md:flex gap-4 items-center">
                    <div>
                        <div className="p-2 rounded-lg relative max-w-[120px]">
                            <EditableImage link={image} setLink={setImage} />
                        </div>
                    </div>
                    <form 
                        className="grow"    
                        onSubmit={ev => 
                            onSave(ev, {
                                name:userName, image, phone, admin, streetAddress, city, country, zip
                            })
                        }
                    >
                        <label>First and Last Name</label>
                        <input 
                            type="text" placeholder="First and last name" 
                            value={userName} onChange={ev => setUserName(ev.target.value)} 
                        />
                        <label>Email</label>
                        <input 
                            type="email" 
                            disabled={true} 
                            value={user.email}
                            placeholder={'email'} 
                        />
                        <AddressInputs 
                            addressProps={{
                                phone, streetAddress, zip, city, country,
                            }} 
                            setAddressProp={handleAddressChange}
                        />
                        {loggedInUserData.admin && (
                            <div>
                                <label className="p-2 inline-flex items-center gap-2 mb-2" htmlFor="adminCb">
                                    <input 
                                        id="adminCb" type="checkbox" className="" value={'1'} 
                                        checked={admin}
                                        onChange={ev => setAdmin(ev.target.checked)}
                                    />
                                    <span>Admin</span>
                                </label>
                            </div>
                        )}
                        <button type="submit">Save</button>
                    </form>
                </div>

    );
}