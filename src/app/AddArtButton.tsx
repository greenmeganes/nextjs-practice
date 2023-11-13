"use client"

import { handleAddArt } from "./actions"
import { FC } from "react"

interface AddArtButtonProps {
}
export const AddArtButton: FC<AddArtButtonProps> = () => {
  const handleClick = async () => { 
    console.log("start")
    await handleAddArt({
      id: "test-art-"+Date.now(),
      title: "てきとう おぶ てきとう "+Date.now(),
      tag: [],
    })
    console.log("end")
  }
  return (
    <button onClick={handleClick}>
      適当に追加
    </button>
  )
}