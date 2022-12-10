input = open(0)

t = 0
c = 0
x = 1


def yes():
    global t, c, x
    if c in {20, 60, 100, 140, 180, 220}:
        t += c * x


for line in input:
    cmd = line.split()

    if cmd[0] == "noop":
        c += 1
        yes()
    else:
        a = int(cmd[1])
        c += 1
        yes()
        c += 1
        yes()
        x += a

print(t)
