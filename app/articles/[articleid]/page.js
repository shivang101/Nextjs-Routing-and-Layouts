import Link from "next/link";


export default async function NewsArticle({ params, searchParams }) {
    const { articleid: id } = await params
    console.log(id);

    const { lang = "en" } = await searchParams;
    console.log(await (params));

    return (

        <div>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"></link>
            <h1 className="px-4 font-sans text-lg" >New Article {id}</h1>
            <p className="px-4 font-sans text-lg" >Reading in Language {lang}</p>

            <div className="px-4 m-6">
                <Link className="px-3 py-1 hover:text-blue-600" href={`/articles/${id}?lang=en`}>English</Link>
                <Link className="px-3 py-1 hover:text-blue-600" href={`/articles/${id}?lang=es`}>Spanish</Link>
                <Link className="px-3 py-1 hover:text-blue-600" href={`/articles/${id}?lang=fr`}>French</Link>
            </div>
        </div>
    )
}
