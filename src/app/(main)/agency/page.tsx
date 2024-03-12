import AgencyDetails from '@/components/forms/agency-details'
import { getAuthDetails, verifyAndAcceptInvitation } from '@/lib/queries'
import { currentUser } from '@clerk/nextjs'
import { Plan } from '@prisma/client'
import { redirect } from 'next/navigation'
import React from 'react'

const Page = async ({searchParams}: {searchParams: {plan: Plan; state: string; code: string}}) => {
    // search for an agency id, if exists redirect to that page
    // if agency id doesn't exist, send users to creation page

    const agencyId = await verifyAndAcceptInvitation()
    console.log(agencyId, 'agencyId')

    //get users details
    // also before sending them to agency page check if user role if they are a subaccount user?
    const user = await getAuthDetails()
    if(agencyId) {
        if(user?.role === "SUBACCOUNT_GUEST" || user?.role === "SUBACCOUNT_USER") {
            return redirect('/subaccount')
        } else if (user?.role === "AGENCY_OWNER" || user?.role === "AGENCY_ADMIN") {
            if(searchParams.plan) {
                return redirect(`/agency/${agencyId}/billing?plan=${searchParams.plan}`)
            }
            // stripe logic
            if(searchParams.state) {
                const statePath = searchParams.state.split('_')[0]
                const stateAgencyId = searchParams.state.split('___')[1]
                if(!stateAgencyId) return <div>Not authorized</div>
                //code is needed for stripe connect for verification
                return redirect(`/agency/${stateAgencyId}/${statePath}?code=${searchParams.code}`)
            } else return redirect(`/agency/${agencyId}`)
        } else {
            return <div>Not authorized</div>
        }
    } 

    const authUser = await currentUser()
    return (
            <div className='flex justify-center items-center mt-4'> 
                <div className='max-w[850px] border-[1px] p-4 rounded-xl'>
                    <h1 className='text-4xl'>Create an agency</h1>
                    <AgencyDetails data={{companyEmail: authUser?.emailAddresses[0].emailAddress}}/>
                </div>
            </div>
        )
  
}

export default Page