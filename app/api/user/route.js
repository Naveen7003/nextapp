import { NextResponse } from "next/server"

export  function GET(request){
    return NextResponse.json({name:"Naveen", age:20})
}