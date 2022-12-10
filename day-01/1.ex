File.read!("./input.txt")
|> String.split("\n\n")
|> Enum.map(fn elf ->
  elf
  |> String.split("\n")
  |> Enum.map(fn elf -> elf |> String.to_integer() end)
  # |> Enum.reduce(fn a, b -> a + b end)
  |> Enum.sum()
end)
|> Enum.max()
|> IO.inspect()
