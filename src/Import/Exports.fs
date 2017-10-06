module FableTemplateJsLib.Exports

open Fable.Core

[<Import("printPairsPadded", from="fable-lib")>]
let printPairsPadded (leftPad: int) (rightPad: int) (kvs: seq<'a*'b>): string = jsNative
