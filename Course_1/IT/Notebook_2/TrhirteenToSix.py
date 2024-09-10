def ttos(x):
    s = ""
    n = int(x, 13)
    while n >= 6:
        s = str(n % 6) + s
        n = n // 6
    s = str(n % 6) + s
    return s

print(ttos("AB4"))