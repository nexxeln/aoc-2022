File.read!("./input.txt")
|> String.split("\n\n")
|> Enum.map(fn elf ->
  elf
  |> String.split("\n")
  |> Enum.map(fn elf -> elf |> String.to_integer() end)
  |> Enum.sum()
end)
|> Enum.sort(:desc)
|> Enum.slice(0..2)
|> Enum.sum()
|> IO.inspect()
