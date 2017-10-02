module FableTemplate.JsLib.Exports

/// Use example
/// [ ("A", 234.45); ("B", 23458.0214) ]
/// |> printPairsPadded 3 12
val printPairsPadded: leftPad: int -> rightPad: int -> kvs: seq<'a*'b> -> string
