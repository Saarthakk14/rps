input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    P1 += 1
    Rounds += 1
    Updatescoreboard()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("T")
    Ties += 1
    Rounds += 1
    Updatescoreboard()
})
function Updatescoreboard () {
    OLED.clear()
    OLED.writeStringNewLine("P1 score; " + P1)
    OLED.newLine()
    OLED.writeStringNewLine("P2 score; " + P2)
    OLED.newLine()
    OLED.writeStringNewLine("Ties; " + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds ; " + Rounds)
}
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    P2 += 1
    Rounds += 1
    Updatescoreboard()
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
    Updatescoreboard()
}
let P2 = 0
let Ties = 0
let Rounds = 0
let P1 = 0
Reset()
