def eton(x):
    s = ""
    n = int(x, 8)
    while n >= 9:
        s = str(n % 9) + s
        n = n // 9
    s = str(n % 9) + s
    return s

print(eton("127"))
