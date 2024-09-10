def atoa(z, x, y):
    al = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
    if y < 10:
        s = ""
        n = int(z, x)
        while n >= y:
            s = str(n % y) + s
            n = n // y
        s = str(n % y) + s
        return s
    else:
        l = []
        n = int(z, x)
        while n >= y:
            l.append(n % y)
            n = n // y
        l.append(n % y)
        l = list(reversed(l))
        s = ""
        for f in l:
            s = s + al[f]
        return s

x = int(input("Первая сичтема счисления = "))
y = int(input("Вторая сичтема счисления = "))
z = input("Значение = ")
print(atoa(z, x, y))

# h = 10
# for i in range(16, 100000):
#     j = str(i)
#     if (atoa(j, h, 16)[1] == "E") and (atoa(j, h, 8)[1] == "5") and (atoa(j, h, 4)[0] == "1") and (atoa(j, h, 2)[2] == "1"):
#         print(i, atoa(j, h, 16), (atoa(j, h, 8)), (atoa(j, h, 4)), (atoa(j, h, 2)))
#         break
