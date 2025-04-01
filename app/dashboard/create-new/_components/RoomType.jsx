import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../../../@/components/ui/select";
  

function RoomType({selectedRoomType}) {
  return (
    <div>
        <label className='text-gray-500'>Select Room Type*</label>
        <Select defaultValue="" onValueChange={(value)=>selectedRoomType(value)}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Room Type" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="Living Room">Living Room</SelectItem>
                <SelectItem value="Bedroom">Bedroom</SelectItem>
                <SelectItem value="Kitchen">Kitchen</SelectItem>
                <SelectItem value="Office">Office</SelectItem>
                <SelectItem value="Bathroom">Bathroom</SelectItem>
                <SelectItem value="Balcony">Balcony</SelectItem>
            </SelectContent>
        </Select>

    </div>
  )
}

export default RoomType