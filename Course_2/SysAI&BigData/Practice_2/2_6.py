import numpy as np

def compute_gradient(X):
    return 1 / (X + 1)

def gradient_descent_step(X, alpha):
    gradient = compute_gradient(X)
    X_new = X - alpha * gradient
    return X_new

X_0 = np.array([[1, 2], [4, 5]])

alpha = 10

X_1 = gradient_descent_step(X_0, alpha)

X_1_rounded = np.round(X_1, 3)

print(X_1_rounded)