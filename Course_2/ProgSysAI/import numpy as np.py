import numpy as np
import matplotlib.pyplot as plt

# Определяем функцию для вычисления x
def x_value(y, k):
    return k * np.exp(np.sqrt(y**2 + 1))

# Генерируем данные
y = np.linspace(-10, 10, 400)
k_values = [0.5, 1, 2]  # Примеры различных значений k

plt.figure(figsize=(10, 6))

# Строим кривые для разных значений k
for k in k_values:
    x = x_value(y, k)
    plt.plot(x, y, label=f'k = {k}')

plt.xlabel('x')
plt.ylabel('y')
plt.title('Интегральные кривые')
plt.legend()
plt.grid(True)
plt.show()
