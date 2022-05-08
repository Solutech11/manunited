// function saver() {
//     var blob = new Blob(["welcome to samfara"],{type:"text/plain;charset=utf-8"})
//     saveAs(blob,"static.txt")
// }
// saver()


function saver2() {
    var fso = CreateObject("Scripting.FileSystemObject");
    var s = fso.CreateTextFile("../test.txt", True);
    s.writeline("HI");
    s.writeline("Bye");
    s.writeline("-----------------------------");
    s.Close();
}

saver2()