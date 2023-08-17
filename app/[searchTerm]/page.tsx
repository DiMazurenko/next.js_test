import React from 'react';
import getWikiResults from "@/lib/getWikiResults";
import Item from "@/app/[searchTerm]/components/Item";

type Props ={
    params:{
        searchTerm:string
    }
}

export const generateMetadata = async({params:{searchTerm}}:Props)=>{
    const wikiData:Promise<SearchResult> = getWikiResults(searchTerm)
    const data = await wikiData
    const displayTerm = searchTerm.replace('%20', ' ')

    if(!data?.query?.pages){
        return{
            title: `${displayTerm} not found`
        }
    }

    return {
        title:displayTerm,
        description:`search results for ${displayTerm}`
    }
}

const SearchResults = async ({params:{searchTerm}}:Props) => {
    const wikiData:Promise<SearchResult> = getWikiResults(searchTerm)
    const data = await wikiData

    const results:Result[] | undefined = data?.query?.pages

    return (
        <main className='bg-slate-200 mx-auto max-w-lg py-1 min-h-screen'>
            {results
                ? Object.values(results).map(result=>{
                    return <Item result={result} key={result.pageid}/>
                })
                : <h2 className='p-2 text-xl'>{`${searchTerm} not found`}</h2>}

        </main>
    )
};

export default SearchResults;