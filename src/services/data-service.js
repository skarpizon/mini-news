import news from './news.js';

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

const userData = {
    name: 'Администратор',
    role: 0,
    img: undefined,
    regDate: '11.11.11',
    posts: 366
}

export default class DataService {

    auth({login,pass}) {
        return new Promise(async (resolve,reject) => {
            if (login==='Admin'&&pass==='12345')
                setTimeout(()=>resolve(userData), 1000);
            else
                setTimeout(()=>reject(), 1000);
        });
    }

    getNews() {
        return new Promise(async (resolve) => {
            const nws = getRandom(news, 10);
            setTimeout(()=>resolve(nws), 1000);
        });
    }
}