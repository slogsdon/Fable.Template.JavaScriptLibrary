module SampleFableJavascriptLibraryTest.Entry

open Fable.Core
open Fable.Core.JsInterop
open Fable.Import

open SampleFableJavascriptLibrary.Entry

// BEGIN: mocha interop
let inline equal (expected : 'T) (actual : 'T) : unit =
    let assert' = importAll<obj> "assert"
    assert'?deepStrictEqual(actual, expected) |> ignore

[<Global>]
let it (msg : string) (f : unit -> unit) : unit = jsNative

[<Global>]
let describe (msg : string) (f : unit -> unit) : unit = jsNative
// END: mocha interop

describe "basic test" <| fun _ ->
    it "knows what's true" <| fun _ ->
        true |> equal true

    it "knows how to add" <| fun _ ->
        add 1 2 |> equal 3
