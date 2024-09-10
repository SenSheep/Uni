def stot(x):
    s = ""
    n = x
    while n >= 7:
        s = str(n % 7) + s
        n = n // 7
    s = str(n % 7) + s
    return s

print(stot(367))