lines =
  File.read!("./input.txt")
  |> String.split("\n", trim: true)

crates =
  lines
  |> Stream.take(8)
  |> Stream.map(fn line ->
    line
    |> String.to_charlist()
    |> Enum.chunk_every(4)
    |> Enum.map(&to_string/1)
    |> Enum.map(&String.trim/1)
    |> Enum.map(&String.replace(&1, "[", ""))
    |> Enum.map(&String.replace(&1, "]", ""))
  end)
  |> Enum.to_list()
  |> List.zip()
  |> Enum.map(&Tuple.to_list/1)
  |> Enum.map(&Enum.filter(&1, fn x -> x != "" end))

instructions =
  lines
  |> Stream.drop(9)
  |> Stream.map(fn line ->
    l = String.slice(line, 5..-1)
    {amount, i} = Integer.parse(l)

    [from, to] =
      i |> String.slice(6..-1) |> String.split(" to ") |> Enum.map(&String.to_integer/1)

    {amount, from, to}
  end)
  |> Enum.to_list()

Enum.reduce(instructions, crates, fn {amount, from, to}, pos ->
  from = from - 1
  to = to - 1
  {x, f} = Enum.split(Enum.at(pos, from), amount)
  t = Enum.reverse(x) ++ Enum.at(pos, to)

  pos
  |> Enum.with_index()
  |> Enum.map(fn
    {_, ^from} -> f
    {_, ^to} -> t
    {s, _} -> s
  end)
end)
|> Enum.map(&hd/1)
|> Enum.into("")
|> IO.puts()
