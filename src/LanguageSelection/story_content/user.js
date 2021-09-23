function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6N5LmXrWkx6":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var lan = player.GetVar("Language");
if(lan==1){
window.open("../courses/Chinese/story.html","_self")
}

if(lan==2){
window.open("../courses/English/story.html","_self")
}

if(lan==3){
window.open("../courses/Portuguese/story.html","_self")
}

if(lan==4){
window.open("../courses/Spanish/story.html","_self")
}

}

