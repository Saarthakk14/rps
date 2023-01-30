input.onButtonPressed(Button.A, function () {
    P1 += 1
    Rounds += 1
    OLED.writeNumNewLine(Rounds)
    OLED.writeNumNewLine(Rounds)
})
input.onButtonPressed(Button.AB, function () {
    Ties += 1
    Rounds += 1
    OLED.writeNumNewLine(Ties)
    OLED.writeNumNewLine(Rounds)
})
input.onButtonPressed(Button.B, function () {
    P2 += 1
    Rounds += 1
    OLED.writeNumNewLine(P2)
    OLED.writeNumNewLine(Rounds)
})
input.onGesture(Gesture.Shake, function () {
    Reset()
})
function Reset () {
    OLED.init(128, 64)
    P1 = 0
    P2 = 0
    Ties = 0
    Rounds = 0
    basic.showString("Shall we play a game?")
    basic.pause(2000)
    OLED.clear()
    OLED.writeStringNewLine("P1 score; " + P1)
    OLED.newLine()
    OLED.writeStringNewLine("P2 score; " + P2)
    OLED.newLine()
    OLED.writeStringNewLine("Ties; " + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds ; " + Rounds)
}
let P2 = 0
let Ties = 0
let Rounds = 0
let P1 = 0
Reset()
