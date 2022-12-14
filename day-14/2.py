import itertools

R = set()

for line in open(0).readlines():
    points = list(tuple(map(int, p.split(","))) for p in line.split(" -> "))

    for a, b in zip(points, points[1:]):
        for i in (0, 1):
            if a[i] == b[i]:
                continue

            p = list(a)

            for x in range(min(a[i], b[i]), max(a[i], b[i] + 1)):
                p[i] = x
                R.add(tuple(p))

max_y = max(y for _, y in R)
sand = 0

for sand in itertools.count(1):
    p = (500, 0)

    while p[1] <= max_y:
        try:
            hi = ((p[0] + dx, p[1] + 1) for dx in (0, -1, 1))
            p = next(p for p in hi if p not in R)

        except StopIteration:
            break

    if not p[1]:
        break

    R.add(p)

print(sand)
