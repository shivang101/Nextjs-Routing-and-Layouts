import Link from "next/link";

export default async function NewsArticle({ params, searchParams }) {
    const { articleid: id } = await params
    console.log(id);

    const { lang = "en" } = await searchParams;





    return (

        <div>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"></link>
            <h1 className="px-4 font-sans text-lg" >New Article {id}</h1>
            <p className="px-4 font-sans text-lg" >Reading in Language {lang}</p>

            <div className="px-4 m-6">
                <Link className={`${lang === 'en' ? 'px-3 py-1 text-red-600 hover:text-blue-600' : 'px-3 py-1 hover:text-blue-600'}`} href={`/articles/${id}?lang=en`}>English</Link>

                <Link className={`${lang === 'es' ? 'px-3 py-1 text-red-600 hover:text-blue-600' : 'px-3 py-1 hover:text-blue-600'}`} href={`/articles/${id}?lang=es`}>Spanish</Link>

                <Link className={`${lang === 'fr' ? 'px-3 py-1 text-red-600 hover:text-blue-600' : 'px-3 py-1 hover:text-blue-600'}`} href={`/articles/${id}?lang=fr`}>French</Link>
            </div>
        </div >
    )
}
