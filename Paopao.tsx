import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'

export default function Paopao() {
    const toilets: [string, number, number][] = [["ห้องน้ำตึกอรุณ",13.7366148,100.5340958],["ห้องน้ำบันไดกลาง",13.7367895,100.5336363],["ห้องน้ำสวนรวมใจ",13.7370833,100.5326991],["ห้องน้ำตึก 1",13.7364472,100.5327152],["ห้องน้ำตึก 2",13.7364355,100.5333686],
  ["ห้องน้ำตึก 4",13.7358548,100.534044],["ห้องน้ำตึก 100 ปี",13.7361281,100.534036],["ห้องน้ำตึกโยธา",13.7356599,100.5331889]]
    let distances: number[];
    let latitude_2;
    let longitude_2;
    let latitude_1: number;
    let longitude_1: number;
    let index;
    let calculated;
    distances = toilets.map((toilet, idx) => {
        latitude_2 = toilet[1] / (180 / Math.PI)
        longitude_2 = toilet[2] / (180 / Math.PI)
        latitude_1 = 0
        longitude_1 = 0
        // if อันนี้ใช้เช็คดูว่าขอตำแหน่งได้ไหม
        if ("geolocation" in navigator) {
            console.log("Available");
            //อันนี้คำสั่งใช้ขอตำแหน่งของผู้ใช้
            navigator.geolocation.getCurrentPosition((position) => {
                latitude_1 = position.coords.latitude
                longitude_1 = position.coords.longitude
                // console.log(position)
                // console.log(latitude_1,longitude_1)
            })
        } else {
            console.log("Not Available")
        }
        calculated = 1.609344 * 3963.0 * Math.acos(Math.sin(latitude_2) * Math.sin(latitude_1) + Math.cos(latitude_1) * Math.cos(latitude_2) * Math.cos(longitude_2 - longitude_1))
        return calculated
        //เอาค่าระยะทางที่ได้ไปใส่ไว้ใน array ของ toilets
    })
    console.log(distances)
    console.log(Math.min(...distances));
    index = distances.indexOf(Math.min(...distances))
    return (<div> {index} </div>)
}