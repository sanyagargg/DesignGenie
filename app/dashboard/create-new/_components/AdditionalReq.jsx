import { Textarea } from '../../../../@/components/ui/textarea'
import React from 'react'

function AdditionalReq({additionalRequirementInput}) {
  return (
    <div className='mt-5'>
        <label className='text-gray-600'>Enter Additional Requirements (Optional)</label>
        {/*onchange method event e*/}
        <Textarea className='mt-2 border-1 border-gray-400' onChange={(e)=>additionalRequirementInput(e.target.value)}/>
    </div>
  )
}

export default AdditionalReq;
