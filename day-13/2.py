input = list(map(eval, open(0).read().strip().split())) + [[[2]]] + [[[6]]]


def compare(a, b):
    if type(a) == int and type(b) == int:
        return a - b

    elif type(a) == list and type(b) == list:
        for y1, y2 in zip(a, b):
            n = compare(y1, y2)

            if n != 0:
                return n

        return len(a) - len(b)

    elif type(a) == int:
        return compare([a], b)

    else:
        return compare(a, [b])


t2 = 1
t6 = 1

for l in input:
    x = compare(l, [[2]])
    y = compare(l, [[6]])

    if x < 0:
        t2 += 1
        t6 += 1
    elif y < 0:
        t6 += 1


print(t2 * t6)
