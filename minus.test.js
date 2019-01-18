const minus = require('./minus');

//1
test('5 - 7 จะได้เท่ากับ', ()=>
{
    expect(minus(5,7)).toBe(-2);
});

//2
test('10 - 10 เท่ากับ 0', ()=>
{
    expect(minus(10,10)).toBe(0);
})

//3
test('11 - 0 เท่ากับ', ()=>
{
    expect(minus(11,0)).toBe(11);
});

//4
test('3 - 1 เท่ากับ 2', ()=>
{
    expect(minus(3,1)).toBe(2);
});

//5
test('77 - 66 = 10', ()=>
{
    expect(minus(77,66)).toBe(11);
});
