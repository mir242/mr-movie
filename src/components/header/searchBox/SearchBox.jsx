import React, { useEffect, useState, } from 'react'
import { fench } from '../../../services/fench';
import Person from './items/Person';
import Movie from './items/Movie';
import TV from './items/TV';






export default function SearchBox() {
  const [query, setQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);



  useEffect(() => {
    const timeout = setTimeout(async () => {
      if (query) {
        const { data } = await fench("search/multi", {
          params: {
            query,
          },
        });
        console.log(data);
        setSearchResult(data.results);

      }

      else {
        setSearchResult([]);

      }
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [query]);

  function showItem(item) {
    switch (item.media_type) {
      case 'tv':
        return <TV key={item.id} item={item} />
      case 'person':
        return <Person key={item.id} item={item} />
      case 'movie':
        return <Movie key={item.id} item={item} />
    }
  }



  return (
    <section className='container mt-8 text-fuchsia-200'>
      <div className='relative'>

        <input placeholder='search for a movie ....' type="text" className='font-sans w-full bg-slate-800 text-xl p-2  border-slate-900 border rounded-2xl outline-none placeholder:text-center shadow-2xl   shadow-lg shadow-blue-500/50   placeholder:italic placeholder:text-slate-400'
          value={query} onChange={(e) => setQuery(e.target.value)}

        />

        <div
          className={` p-2 flex flex-col gap-2 bg-opacity-95 border-sha bg-slate-800  absolute w-full z-10 rounded-2xl  transition-all  duration-300 text-gray-300 border-2 border-slate-900 border-t-0 
${searchResult.length && query ? "max-h-[350px] overflow-auto " : "h-0 overflow-hidden opacity-0 "}`}>


          {searchResult.map((item) => (
            <div className='border-b-2 border-slate-900 shadow-2xl shadow-blue-500/20 border-opacity-30' onClick={() => setSearchResult([])}>

              {showItem(item)}
            </div>




          ))}

        </div>



        <svg xmlns="http://www.w3.org/2000/svg" width="47" height="28" fill="currentColor" className="bi bi-arrow-repeat absolute right-0 top-2 scale-" viewBox="0 0 16 16">
          <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9" />
          <path fillRule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z" />
        </svg>



      </div>


    </section>



  )
}
