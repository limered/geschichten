SetWorkingDir %A_ScriptDir%
Loop, Files, *.mp3
{
    QRURL = http://chart.apis.google.com/chart?chs=500x500&cht=qr&chl=%A_LoopFileName%&chld=h|1&choe=UTF-8
    FileCreateDir, %A_ScriptDir%\qr
    URLDownloadToFile, %QRURL%, %A_ScriptDir%\qr\%A_LoopFileName%.PNG ;Downloads the QR Code
}