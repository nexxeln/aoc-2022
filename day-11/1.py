monkeys = []

for p in open(0).read().strip().split("\n\n"):
    lines = p.splitlines()
    m = []

    m.append(list(map(int, lines[1].split(": ")[1].split(", "))))
    m.append(lines[2].split(" = ")[1])
    for l in lines[3:]:
        m.append(int(l.split()[-1]))

    monkeys.append(m)

inspections = [0 for _ in range(len(monkeys))]

for _ in range(20):
    for i, m in enumerate(monkeys):
        for item in m[0]:
            inspections[i] += 1

            worry = eval("lambda old: " + m[1])(item) // 3

            if worry % m[2] == 0:
                monkeys[m[3]][0].append(worry)
            else:
                monkeys[m[4]][0].append(worry)

        m[0] = []


# print(inspections)
inspections.sort()
print(inspections[-1] * inspections[-2])
