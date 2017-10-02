module FableTemplate.JsLib.Exports

open System

let printPairsPadded (leftPad: int) (rightPad: int) (kvs: seq<'a*'b>) =
    kvs |> Seq.map (fun (k, v) ->
        let format = sprintf "{0,-%i}->{1,%i}" leftPad rightPad
        String.Format(format, k, v))
    |> String.concat "\n"