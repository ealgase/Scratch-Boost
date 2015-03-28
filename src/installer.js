ScratchExtensions.loadExternalJS('https://rawgit.com/Ealgase/Scratch-Boost/master/src/strings.js');
ScratchExtensions.loadExternalJS('https://rawgit.com/Ealgase/Scratch-Boost/master/src/scratch.js');
ScratchExtensions.loadExternalJS('https://rawgit.com/Ealgase/Scratch-Boost/master/src/misc.js');
ScratchExtensions.loadExternalJS('https://rawgit.com/Ealgase/Scratch-Boost/master/src/local.js');
ScratchExtensions.loadExternalJS('https://rawgit.com/Ealgase/Scratch-Boost/master/src/jscript.js');
ScratchExtensions.loadExternalJS('https://rawgit.com/Ealgase/Scratch-Boost/master/src/browser.js');
ScratchExtensions.loadExternalJS('https://rawgit.com/Ealgase/Scratch-Boost/master/src/color.js');
ScratchExtensions.loadExternalJS('https://rawgit.com/Ealgase/Scratch-Boost/master/src/jsmath.js');
ScratchExtensions.loadExternalJS('https://rawgit.com/Ealgase/Scratch-Boost/master/src/comments.js');
ScratchExtensions.loadExternalJS('https://rawgit.com/Ealgase/Scratch-Boost/master/src/follow.js')
$(".box-head > .buttons").append('<div class="button" onclick="info()"><span class="white">Scratch Boost</span></div>');
var inf = "";
function info() {
    if (inf === "") {
        inf = $("#info").html();
        $("#info").html('<div class="dynamic"><div class="text-block"><b>Scratch Boost Info</b><div class="read-only instructions" style="height: 161.5px;"><p>Scratch Boost by: Iwotastic<br />View on <a href="https://github.com/Ealgase/Scratch-Boost">GitHub</a><br /><br />Forked by Ealgase<br />You are using the sandbox version of Scratch Boost.  Some of the blocks may not work correctly.  Head over to <a href="http://ealgase.github.io/Scratch-Boost">the Scratch Boost installation page</a> to get the finished product.');    
      }else{
        $("#info").html(inf);
        inf = "";
    }
}
