module SampleFableJavascriptLibraryTest.Entry

open Fable.Core
open Fable.Core.Testing

open FableTemplate.JsLib

// BEGIN: mocha interop
[<Global>]
let it (msg : string) (f : unit -> unit) : unit = jsNative

[<Global>]
let describe (msg : string) (f : unit -> unit) : unit = jsNative
// END: mocha interop

describe "basic test" <| fun _ ->
    it "knows what's true" <| fun _ ->
        let actual =
            [ ("A", 235.65); ("XXX", 12304294.) ]
            |> Exports.printPairsPadded 4 10
        let expected =
            "A   ->    235.65\nXXX ->  12304294"
        Assert.AreEqual(expected, actual)
