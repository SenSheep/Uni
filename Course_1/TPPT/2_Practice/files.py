y = int(input("First number: "))
x = int(input("How many: "))

for i in range(1, x + 1):
    with open(f'{y}_{i}.js', 'a') as file:
        ...

