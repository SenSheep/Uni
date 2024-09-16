import torch

w = torch.tensor([[5.0, 10.0], [1.0, 2.0]], requires_grad=True)

def f(w):
    inner_log = torch.log(w + 7)
    return torch.prod(torch.log(inner_log))

f_value = f(w)

f_value.backward()

print(w.grad)