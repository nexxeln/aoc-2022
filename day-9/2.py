def lol(h, t):
    if abs(h[0] - t[0]) > 1 or abs(h[1] - t[1]) > 1:
        if h[0] != t[0]:
            t[0] += 1 if h[0] > t[0] else -1

        if h[1] != t[1]:
            t[1] += 1 if h[1] > t[1] else -1


def hi(h, l):
    if l[0] == "R":
        h[0] += 1
    elif l[0] == "L":
        h[0] -= 1

    elif l[0] == "U":
        h[1] += 1
    else:
        h[1] -= 1


with open(0) as f:
    pt = set()
    pt.add((0, 0))
    h = [0, 0]
    t = [0, 0]
    # create an array of [0,0]  10 times
    r = [[0, 0] for i in range(10)]

    for line in f:
        l = line.strip().split(" ")
        for i in range(int(l[1])):
            hi(r[0], l[0])
            for j in range(1, 10):
                lol(r[j - 1], r[j])

            pt.add((r[9][0], r[9][1]))

    print(len(pt))
