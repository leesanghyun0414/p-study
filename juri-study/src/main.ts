interface ArithmeticOperation {

    /**
     * 足し算
     * @param a
     * @param b
     */
    sum(a: number, b: number): number

    /**
     * 引き算
     * @param a
     * @param b
     */
    subtract(a: number, b: number): number

    /**
     * 割り算
     * @param a
     * @param b
     */
    division(a: number, b: number): number

    /**
     * 掛け算
     * @param a
     * @param b
     */
    multiplication(a: number, b: number): number
}

export class Calculator implements ArithmeticOperation {
    // TODO 四則演算を実装
    // 引数 a, b を受け取って計算結果をreturnで返すこと


    sum(a: number, b: number): number {
        let result = a + b
        return result
    }


    subtract(a: number, b: number): number {

        return a - b
    }

    division(a: number, b: number): number {

        let answer = a % b
        return answer
    }

    multiplication(a: number, b: number): number {

        return a * b
    }

}























function sum(num: number):number{
    return num + num

}

const a = sum(10)
console.log(a)


