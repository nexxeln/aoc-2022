input = open(0)

t = 0
c = 0
x = 1

result = [["."] * 40 for _ in range(6)]


def yes():
    global t, c, x
    row = (c - 1) // 40
    col = (c - 1) % 40

    if x - 1 <= col <= x + 1:
        result[row][col] = "#"


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

print("\n".join("".join(l) for l in result))
