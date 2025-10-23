import React, { useEffect, useState } from 'react'

export default function BoxOffice() {

    const apikey = import.meta.env.VITE_MV_API;
    const apikey2 = import.meta.env.VITE_MVP_API;

    const getYesterdayDateStr = () => {
        const date = new Date();
        date.setDate(date.getDate() - 1);
        return date.toISOString().split('T')[0];
    };

    const [selectedDateStr, setSelectedDateStr] = useState(getYesterdayDateStr);

    const getFetchData = (dateStr) => {
        const targetDt = dateStr.replace(/-/g, '');
        const baseUrl = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?';
        let url = `${baseUrl}key=${apikey}&targetDt=${targetDt}`
        console.log(url);

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setDailyBoxOfficeList(data.boxOfficeResult?.dailyBoxOfficeList || []);
            })
            .catch(err => console.log(err))
    }

    const formatDisplayDate = (dateStr) => {
        return dateStr.replace(/-/g, '. ').slice(0, -1) + '일';
    }

    const [dailyBoxOfficeList, setDailyBoxOfficeList] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [posterUrl, setPosterUrl] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const fetchPoster = async (movieName) => {
        if (!movieName) return null;

        const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apikey2}&query=${encodeURIComponent(movieName)}&language=ko-KR`;

        try {
            const response = await fetch(searchUrl);
            const data = await response.json();

            const posterPath = data.results?.[0]?.poster_path;

            return posterPath
                ? `https://image.tmdb.org/t/p/w200${posterPath}`
                : `https://dummyimage.com/150x220/ccc/000.png&text=No+Poster`;

        } catch (error) {
            console.error("TMDB 포스터 검색 오류:", error);
            return `https://dummyimage.com/150x220/ccc/000.png&text=Error`;
        }
    };

    const handleMouseEnter = async (movie) => {
        setSelectedMovie(movie);
        const url = await fetchPoster(movie.movieNm);
        setPosterUrl(url);
    };

    const handleMouseLeave = () => {
        setSelectedMovie(null);
        setPosterUrl(null);
    };

    const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX + 10, y: e.clientY + 10 });
    };

    useEffect(() => {
        getFetchData(selectedDateStr);
    }, [selectedDateStr]);


    return (

        <div className="p-4 md:p-8 w-full mx-auto" onMouseMove={handleMouseMove}>

            {selectedMovie && posterUrl && (
                <div
                    className="fixed w-52 z-50 p-1 rounded-lg pointer-events-none"
                    style={{ left: mousePosition.x, top: mousePosition.y }}
                >
                    <img
                        src={posterUrl}
                        alt={`${selectedMovie.movieNm} 포스터`}
                        className="w-full h-auto rounded"
                    />
                </div>
            )}

            <h1 className=" text-white text-center flex flex-col items-center justify-between">
                <span className='text-5xl font-bold'> 일일 박스오피스 순위 📽</span>
                </h1>
                <div className='flex flex-row mb-4 justify-between'>
                    <div/>
                    <input
                        type="date"
                        value={selectedDateStr}
                        onChange={(e) => {
                            setSelectedDateStr(e.target.value);
                            handleMouseLeave();
                        }}
                        max={getYesterdayDateStr()}
                        className="p-2 border-3 border-red-700 rounded-lg text-center font-bold focus:ring-2 focus:ring-red-500 bg-white text-black mt-5"
                    />
                </div >
            

            <div className="overflow-x-auto rounded-xl border-7 border-red-700">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr className="bg-red-700  text-white uppercase text-xl leading-normal">
                            <th className="py-3 px-3 text-center">순위</th>
                            <th className="py-3 px-6 text-center">영화명</th>
                            <th className="py-3 px-6 text-center">매출액</th>
                            <th className="py-3 px-6 text-center">관객수</th>
                            <th className="py-3 px-6 text-center">누적 매출액</th>
                            <th className="py-3 px-6 text-center">누적 관객수</th>
                            <th className="py-3 px-3 text-center">증감율</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700 text-xl">
                        {
                            dailyBoxOfficeList.map((movie, index) => (
                                <tr
                                    key={movie.movieCd}
                                    onMouseEnter={() => handleMouseEnter(movie)}
                                    onMouseLeave={handleMouseLeave}

                                    className={`border-b border-gray-400 cursor-pointer 
                                                    bg-white hover:bg-gray-300 transition duration-150`}
                                >
                                    <td className="py-3 px-6 text-center whitespace-nowrap text-gray-700 font-bold">
                                        <span className="text-lg">{movie.rank}</span>
                                    </td>

                                    <td className="py-3 px-6 text-center">
                                        {movie.movieNm}
                                    </td>

                                    <td className="py-3 px-6 text-center font-mono">
                                        {parseInt(movie.salesAmt).toLocaleString()}
                                    </td>

                                    <td className="py-3 px-6 text-center">
                                        {parseInt(movie.audiCnt).toLocaleString()}
                                    </td>

                                    <td className="py-3 px-6 text-center font-mono text-gray-600">
                                        {parseInt(movie.salesAcc).toLocaleString()}
                                    </td>

                                    <td className="py-3 px-6 text-center text-gray-600">
                                        {parseInt(movie.audiAcc).toLocaleString()}
                                    </td>

                                    <td className="py-3 px-6 text-center font-bold">
                                        <div className='flex items-center justify-center'>
                                            {parseInt(movie.rankInten) > 0 && <span className="text-green-600">▲</span>}
                                            {parseInt(movie.rankInten) < 0 && <span className="text-red-600">▼</span>}
                                            {parseInt(movie.rankInten) !== 0 ? (
                                                <p className='ml-1 text-gray-700 font-normal'>{Math.abs(movie.rankInten)}</p>
                                            ) : movie.rankOldAndNew === 'NEW' ? (
                                                <span className="ml-1 text-yellow-500">NEW</span>
                                            ) : (
                                                <span className="ml-1 text-gray-500">-</span>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))

                        }
                    </tbody>
                </table>
                <div className='bg-red-700 w-full h-8 text-center text-white p-2 flex items-center justify-center font-medium'>
                    {selectedMovie ? (
                        <span className='flex justify-center items-center text-sm sm:text-base'>
                            <strong className="mr-2" >
                                [{selectedMovie.rankOldAndNew} : {selectedMovie.movieCd}]
                            </strong>
                            <span className="font-bold mr-2">{selectedMovie.movieNm}</span>

                            <span className="mx-2 hidden sm:inline">
                                스크린수: {parseInt(selectedMovie.scrnCnt).toLocaleString()} 개
                            </span>
                            <span className="mx-2 hidden sm:inline">
                                상영횟수: {parseInt(selectedMovie.showCnt).toLocaleString()} 회
                            </span>
                        </span>
                    ) : (
                        <span></span>
                    )}
                </div>
            </div>
        </div>
    )
}

