import { useEffect, useState } from "react";
import "./ApiCalls.css";

interface RickAndMortyData {
    name: string;
    image: string;
    url: string | undefined;
}

interface UrlAndIndex {
    url: string;
    index: number;
}

export function ApiCalls() {
    const [rickAndMortyData, setRickAndMortyData] = useState<RickAndMortyData[]>([]);
    const [indexCounter, setIndexCounter] = useState<number>(1);
    const [nextUrl, setNextUrl] = useState<string>("https://rickandmortyapi.com/api/character");
    const [urlsAndIndexes, setUrlsAndIndexes] = useState<UrlAndIndex[]>([]);
    let first: boolean = true;

    const getRickAndMortyData = () => {
        fetch(nextUrl)
            .then((res: any) => res.json())
            .then((data: any) => {
                var urlsAndIndexesAux = urlsAndIndexes;
                urlsAndIndexesAux.push({ url: nextUrl, index: indexCounter });

                setUrlsAndIndexes(urlsAndIndexesAux);
                setIndexCounter(indexCounter + 1);
                setNextUrl(data.info.next);

                const rickAndMortyDataAux: RickAndMortyData[] = data.results.map((element: any) => ({
                    name: element.name,
                    image: element.image,
                    url: element.url
                }));
                setRickAndMortyData(rickAndMortyDataAux);
            });
    };

    const getLastRickAndMortyData = () => {
        let obj: UrlAndIndex = urlsAndIndexes[urlsAndIndexes.length - 2];
        let index: number = obj.index + 1;
        let url: string = obj.url;
        let urlsIndexesAux = urlsAndIndexes

        urlsIndexesAux.pop();
        setUrlsAndIndexes(urlsIndexesAux);
        setIndexCounter(index);

        fetch(url)
            .then((res: any) => res.json())
            .then((data: any) => {
                const rickAndMortyDataAux: RickAndMortyData[] = data.results.map((element: any) => ({
                    name: element.name,
                    image: element.image,
                    url: element.url
                }));
                setRickAndMortyData(rickAndMortyDataAux);
            });
    }

    useEffect(() => {
        if (first) {
            getRickAndMortyData();
            first = false;
        }
    }, []); // Solo se ejecuta una vez al montar el componente

    return (
        <>
            <h1>Api Calls</h1>
            <div className="myMargin">
                <section className="rickYMorty">
                    <article>
                        <h2>API de Rick y Morty</h2>
                        <div>
                            <h3 className="numberCounter">
                                {urlsAndIndexes.map((urlAndIndex, index) => (
                                    <div key={index}>
                                        <span>{urlAndIndex.index}&nbsp;</span>
                                    </div>
                                ))}
                            </h3>
                            <div className="RAMButtons">
                                <button onClick={getLastRickAndMortyData}>Anterior</button>
                                <button onClick={getRickAndMortyData}>Siguiente</button>
                            </div>
                            <div className="charactersContainer">
                                {rickAndMortyData.map((character, index) => (
                                    <div className="character" key={index}>
                                        <span>{character.name}</span>
                                        <a href={character.url} target="_blank">
                                            <img src={character.image} alt={character.name} />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </article>
                    <div className="RAMButtons">
                        <button onClick={getLastRickAndMortyData}>Anterior</button>
                        <button onClick={getRickAndMortyData}>Siguiente</button>
                    </div>
                </section>
            </div>
        </>
    );
}
