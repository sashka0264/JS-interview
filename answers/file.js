const reg = /hel/g;
const str = 'hello it is hell';

for (const el of str.matchAll(reg)) {
    console.log(el);
}