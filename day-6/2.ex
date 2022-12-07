File.read!("./input.txt")
|> String.split("", trim: true)
|> Enum.chunk_every(14, 1)
|> Enum.take_while(fn items -> Enum.count(MapSet.new(items)) != 14 end)
|> Enum.count()
|> then(&(&1 + 14))
|> IO.inspect()