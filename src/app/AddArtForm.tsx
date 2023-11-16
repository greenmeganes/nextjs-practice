//userとserverで分ける
"use client"

import { addArt } from "@/art/add"
import { revalidatePath } from "next/cache"
import { FC, useState } from "react"
import { handleAddArt } from "./actions"
import { Badge, Button } from "@mantine/core"


interface AddArtFormProps {
}
export const AddArtForm: FC<AddArtFormProps> = () => {
    const [title, setTitle] = useState("title")
    const [author, setAuthor] = useState("author")
    async function handleClick() {
        await handleAddArt({
            id: "test" + Date.now(),
            title: title,
            author: author,
            tag: ["tag1", "tag2"],
        })
    }
    return (
        <div>
            <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <input
                type="text"
                value={author}
                onChange={e => setAuthor(e.target.value)}
            />
            {/* <button onClick={handleClick}>追加</button>
             */}
            <Button onClick={handleClick} variant="filled" color="green">追加</Button>
            return <Badge color="violet">Badge</Badge>
        </div>
    )
}
