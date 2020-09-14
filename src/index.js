const matrices = require("../matrices.json");

const multiply = (a, b) => {
    let d = [];
    for (let i = 0; i < a.length; i++) {
        let c = [];
        for (let j = 0; j < b.length; j++) {
            for (let k = 0; k < b[j].length; k++) {
                if (c[k] == null)
                    c[k] = [];
                c[k] = [ ...c[k], b[j][k] ];
            }
        }

        d[i] = [];
        for (let k = 0; k < c.length; k++) {
            if (d[i][k] == null)
                d[i][k] = [];
            for (let l = 0; l < a[0].length; l++) {
                d[i][k] = [ ...d[i][k], a[i][l] * c[k][l] ];
            }
        }
    }

    let r = [];
    for (let j = 0; j < d.length; j++) {
        r[j] = [];
        for (let l = 0; l < d[j].length; l++) {
            let s = 0;
            for (let k = 0; k < d[j][l].length; k++) {
                s+= d[j][l][k];
            }
            r[j] = [ ...r[j], s ];
        }
    }
    
    return r;
}

const beautiful = (a, b) => {
    const m = multiply(a, b);
    let r = "";

    for (let i = 0; i < m.length; i++) {
        r += `| ${m[i].join(" ")} |\n`;
    }

    return r;
}

matrices.forEach(matrix => console.log(beautiful(matrix.a, matrix.b)));