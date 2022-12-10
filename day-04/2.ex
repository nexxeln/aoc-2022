File.read!("./input.txt")
|> String.split("\n")
|> Enum.map(fn line ->
  line
  |> String.split(",")
  |> Enum.map(fn l ->
    [left, right] =
      l
      |> String.split("-")
      |> Enum.map(&String.to_integer/1)

    Range.new(left, right)
  end)
  |> List.to_tuple()
end)
|> Enum.reject(fn {left, right} ->
  Range.disjoint?(left, right)
end)
|> length()
|> IO.inspect()
