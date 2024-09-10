from itertools import *

for a in product("01", repeat=3):
    for b in product("01", repeat=3):
        for c in product("01", repeat=3):
            c1 = c2 = c3 =0
            for i in range(3):
                if a[i] != b[i]:
                    c1 += 1
            for i in range(3):
                if b[i] != c[i]:
                    c2 += 1
            for i in range(3):
                if c[i] != a[i]:
                    c3 += 1

            if not ((c1 <= c2 + c3) and (c2 <= c1 + c3) and (c3 <= c2 + c1)):
                print(a, b, c)
            else:
                print("ok")