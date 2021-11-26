/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function(s) {
    let vocab = {
        a:0,b:0,c:0,
        d:0,e:0,f:0,
        g:0,h:0,i:0,
        j:0,k:0,l:0,
        m:0,n:0,'o':0,
        p:0,q:0,r:0,
        s:0,t:0,u:0,
        v:0,w:0,x:0,
        y:0,z:0
    };
    for (let i = 0; i < s.length; i++) {
        vocab[s[i]]++;
    }
    const res = {};
    res[0] = vocab['z'];
    res[2] = vocab['w'];
    res[4] = vocab['u'];
    res[5] = vocab['f'] - res[4];
    res[6] = vocab['x'];
    res[7] = vocab['v'] - res[5];
    res[8] = vocab['g'];
    res[1] = vocab['o'] - res[0] - res[2] - res[4];
    res[3] = vocab['r'] - res[0] - res[4];
    res[9] = vocab['i'] - res[5] - res[6] - res[8];
    let final_str = "";
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < res[i]; j++) {
            final_str += String(i);
        }
    }
    console.log(final_str);
    return final_str;
};

originalDigits("esnve");