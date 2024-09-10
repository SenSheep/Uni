def ttot(x):
    s = ""
    n = x
    while n >= 12:
        s = str(n % 12) + s
        n = n // 12
    s = str(n % 12) + s
    return s

print(ttot(1143))
