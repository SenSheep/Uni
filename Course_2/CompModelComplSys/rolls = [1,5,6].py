rolls = [1,5,6]
mean = 3
n = 4
sn = mean * (len(rolls) + n) - (sum(rolls))
if (sn < n) or (sn > n * 6):
    print(0)
else:
    h = [0] * n
    i = 0
    while sn != 0:
        h[i] += 1
        sn -= 1
        i += 1
        if i == n:
            i = 0
    print(h)