# ゴール🎉️

* 変数の意味を理解する
* 変数の種類を覚える

---


# 変数とは？

言葉通りvariableは**変わりやすい**, **変異する**という意味。

変数がなかった時代のプログラムはあくまでPCのメモリーにバイナリーをインプットしそのメモリーを参照することで値を使っていた。

例えば**1番目のレジスター（メモリー）に入っている値に数10(二進数 1010)を足した結果を0番めのレジスターに入れなさい**だと

```haskell
#2進数機械語
001000 00001 00000 0000000000001010

#アセンブリ
addi $0, $1, 10
```


これを変数を用いて解決するとこうなる

```python
n = 5 # 1番目のレジスターに入っている値の10進数表現

left_n = n + 10 # left_n = 15
```



# 変数の種類

## Primitives

```typescript

```