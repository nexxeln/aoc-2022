with open("input.txt") as f:
    pt = set()
    pt.add((0, 0))
    h = [0, 0]
    t = [0, 0]

    print(pt)
    for line in f:
        l = line.strip().split(" ")
        for i in range(int(l[1])):
            if l[0] == "R":
                h[0] += 1
            elif l[0] == "L":
                h[0] -= 1

            elif l[0] == "U":
                h[1] += 1
            else:
                h[1] -= 1

            if abs(h[0] - t[0]) > 1 or abs(h[1] - t[1]) > 1:
                if h[0] != t[0]:
                    t[0] += 1 if h[0] > t[0] else -1

                if h[1] != t[1]:
                    t[1] += 1 if h[1] > t[1] else -1

            pt.add((t[0], t[1]))

    print(len(pt))
