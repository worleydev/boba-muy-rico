"use client"
import {useSession} from "next-auth/react"
import { redirect } from 'next/navigation'
import { useEffect, useState } from "react"
import EditableImage from "../../components/layout/EditableImage"
import toast, { Toaster } from 'react-hot-toast';
import Image from 'next/image'
import UserTabs from '../../components/layout/UserTabs'
import UserForm from '@/components/layout/UserForm'
import Link from "next/link";

export default function ProfilePage() {
    const session = useSession();
    
    const [user, setUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [profileFetched, setProfileFetched] = useState(false);
    const {status} = session

    useEffect(() => {
        if(status === 'authenticated') {
            fetch('/api/profile').then(response => {
                response.json().then(data => {
                    setUser(data);
                    setIsAdmin(data.admin);
                    setProfileFetched(true);
                })
            })
        }
    }, [session, status])

    async function handleProfileInfoUpdate(ev, data) {
        ev.preventDefault()

        const savingPromise = new Promise(async (resolve, reject) => {
            const response = await fetch('/api/profile', {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data),
            })
            if (response.ok) 
                resolve() 
            else 
                reject()
        })
        await toast.promise(savingPromise, {
            loading: 'Saving',
            success: 'Profile Saved!',
            error: 'Error',
          });

    }

    async function handleFileChange(ev) {
        const files = ev.target.files
        if (files?.length === 1) {
            const data = new FormData
            data.set('file', files[0])

            const uploadPromise = fetch('/api/upload', {
                method: 'POST',
                body: data,
            }).then(response => {
                if(response.ok) {
                    return response.json().then(link => {
                        setImage(link)
                    })
                }
                throw new Error('Something went wrong')
            })
            
        await toast.promise(uploadPromise, {
            loading: 'Uploading...',
            success: 'Upload Complete!',
            error: 'Upload Error',
          });       
        }
    }

    if (status === 'loading' || !profileFetched) {
        return 'Loading...'
    }

        if (status === 'unauthenticated') {
            return redirect('/login')
        }

    const userImage = session.data.user.image

    return (
        <section className="mt-8">
            <UserTabs isAdmin={isAdmin} />
            <div className="max-w-2xl mx-auto mt-8">
                <UserForm user={user} onSave={handleProfileInfoUpdate} />
            </div>
        </section>
    )
}