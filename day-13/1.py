input = list(map(str.splitlines, open(0).read().strip().split("\n\n")))

t = 0


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


for i, (a, b) in enumerate(input):
    x = compare(eval(a), eval(b))
    if x < 0:
        t += i + 1

print(t)
