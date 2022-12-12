from collections import deque

input = open(0).read().strip().splitlines()
grid = [list(line) for line in input]

for i, row in enumerate(grid):
    for j, c in enumerate(row):
        if c == "S":
            start = (i, j)
            grid[i][j] = "a"
        if c == "E":
            end = (i, j)
            grid[i][j] = "z"

q = deque()
q.append((0, start))
visited = set(start)


while q:
    d, (i, j) = q.popleft()
    for di, dj in [(i + 1, j), (i - 1, j), (i, j + 1), (i, j - 1)]:

        if di < 0 or dj < 0 or di >= len(grid) or dj >= len(grid[0]):
            continue

        if (di, dj) in visited:
            continue

        if ord(grid[di][dj]) - ord(grid[i][j]) > 1:
            continue

        if (di, dj) == end:
            print(d + 1)
            exit()

        q.append((d + 1, (di, dj)))
        visited.add((di, dj))
