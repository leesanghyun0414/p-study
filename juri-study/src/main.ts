// 以下の関数を宣言しなさい
// ------------------------------------------------------------------------------------------
// 関数名：　additionNumberAllElement
// 引数名：　arry: number[], additionNum: number
// 関数のビジネスロジック：数字の配列を受け取って各要素にaddtionNumの数値分加算した新しい配列をreturnする
// ------------------------------------------------------------------------------------------


function additionNumberAllElement(arr:number[],additionNum:number){

    arr.forEach((item,index,array) => {

        array[index] = item + additionNum


    })

     return arr

}

const result = additionNumberAllElement([10,20,30],10);
console.log(result);























