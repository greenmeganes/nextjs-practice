import { getTrends } from "@/art/getTrends"
import { AddArtForm } from "./AddArtForm"
import { Badge } from "@mantine/core"

export default async function Home() {
  //ここでawaitを入れたほうがいい
  const arts = await getTrends()
  return (
    <div>
      <h1>好きな作品登録アプリ</h1>
      <div>
        {arts.map(art =>
          <div key={art.id}>
            <h2>{art.title}</h2>
            <div>
              {art.id}
            </div>
            {art.author}

            {art.tag.map(tag =>

              <Badge key={art.id} color="violet">{tag}</Badge>
            )}

          </div>


        )}

        <AddArtForm></AddArtForm>

      </div>
    </div>
  )
}