import { getTrends } from "@/art/getTrends"
//import Link from "next/link"


//import { get } from "http";

/** 
//async消した
export default function Home(data: any) {
  const arts = getTrends()
  return (
    <div>
      <h1>好きな作品登録アプリ</h1>
      <ul>
        {data.posts.map((arts: any) => {
          return (
            <li key={arts.id}>
              <Link href={`/posts/${arts.id}`}>
                <a>{arts.title}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export async function getTrends() {
  const res = await fetch(`http://localhost:3001/arts`)
  const posts = await res.json()
  return { props: { posts } }
}
*/


/** 
//元のやつ
export default async function Home() {
  const arts = getTrends()
  return (
    <div>
      <h1>好きな作品登録アプリ</h1>

    </div>
  )
}
*/

export default async function Home() {

  const arts = getTrends()
  return (
    <div>
      <h1>好きな作品登録アプリ</h1>


      <div>
        {(await arts).map(art =>
          <div key={art.id}>
            <h1>{art.id}</h1>
            <h2>{art.title}</h2>
            <h3>{art.author}</h3>
            <h4>{art.tag}</h4>

          </div>

        )}
        <button>追加</button>
      </div>
    </div>
  )
}