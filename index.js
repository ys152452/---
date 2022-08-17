
var ERAS = [{
        N: '令和',
        n: 'R',
        y: 2019
    },
    {
        N: '平成',
        n: 'H',
        y: 1989
    },
    {
        N: '昭和',
        n: 'S',
        y: 1926
    },
    {
        N: '大正',
        n: 'T',
        y: 1912
    },
    {
        N: '明治',
        n: 'M',
        y: 1868
    }, // 日本時間がUTC+09:00:00になったのは1888年1月1日から。それ以前は+09:18:59だったとされている
    {
        N: '西暦',
        n: '',
        y: 1
    } // '0001-1-1 00:00:00.000'
];
var LEN = ERAS.length;
var AD = ERAS[LEN - 1];
export function getEra(Y) {
    // 日本でのグレゴリオ歴の導入は1873年（明治6年）以降。明治の元年〜5年は西暦を返す
    if (Y < 1873) {
        return `${AD.N}${Y - AD.y + 1}年`;
    }
    for (var i = 0; i < LEN; i++) {
        var item = ERAS[i];
        if (item.y <= Y) {
            return `${item.N}${Y - item.y + 1}年`;
        }
    }
    return `${AD.N}${Y - AD.y + 1}年`;
}
