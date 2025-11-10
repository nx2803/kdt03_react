import { Atom } from "jotai";

export const selGuAtom = atom(null);

export const festivalFetchAtom = atom(async() => {
    let url = `${baseurl}?serviceKey=${apikey}&pageNo=1&numOfRows=50&resultType=json`;

        try {
            const resp = await fetch(url);
            if (!resp.ok) {
                const text = await resp.text();
                throw new Error(`HTTP Error ${resp.status}: ${text}`);
            }
            const tdataJson = await resp.json();

            let dataArray = tdataJson.getFestivalKr?.item;

            if (dataArray) {
                if (!Array.isArray(dataArray)) {
                    dataArray = [dataArray];
                }

                setOriginalData(dataArray);
                
                const guguns = dataArray
                    .map(item => item.GUGUN_NM)
                    .filter((gugun, index, self) => gugun && self.indexOf(gugun) === index)
                    .sort();

                setGdata(['전체', ...guguns]);
            }
        } catch (err) {
            console.error("Fetch Error:", err);
            setOriginalData([]);
            setTdata([]);
            setGdata(['전체']);
        }
});