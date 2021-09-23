function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6kZsYPMYX10":
        Script1();
        break;
      case "6FECBgp7koy":
        Script2();
        break;
      case "65yLoQNEogg":
        Script3();
        break;
      case "5VEXXEc7RvH":
        Script4();
        break;
      case "5cSpgBejmsp":
        Script5();
        break;
      case "6jHkAwblfHx":
        Script6();
        break;
      case "5bg2aT5MZqi":
        Script7();
        break;
      case "6jeIeUGbAWz":
        Script8();
        break;
      case "6mhAEmYUJiH":
        Script9();
        break;
      case "5Wb5lorXU77":
        Script10();
        break;
      case "5jta9xe82Ho":
        Script11();
        break;
      case "6mLRQPS8RtG":
        Script12();
        break;
      case "5ewFRIF1jCz":
        Script13();
        break;
      case "5YCkwHtcVuu":
        Script14();
        break;
      case "6RVIQvAUmeZ":
        Script15();
        break;
      case "6odGTVeOABL":
        Script16();
        break;
      case "5zXUFfiyC8g":
        Script17();
        break;
      case "6H6R9RGNgRo":
        Script18();
        break;
  }
}

function Script1()
{
  setCurrrentPageCompleted();
}

function Script2()
{
  checkForcenavigation();
}

function Script3()
{
  var  player = GetPlayer();

var L1 = player.GetVar("L3_Score");
var L2 = player.GetVar("L6_Score");
var L3 = player.GetVar("L8_Score");

var tScore = L1+L2+L3;

player.SetVar('Score',tScore);
}

function Script4()
{
  setCurrrentPageCompleted();
}

function Script5()
{
  setCurrrentPageCompleted();
}

function Script6()
{
  setCurrrentPageCompleted();
}

function Script7()
{
  setCurrrentPageCompleted();
}

function Script8()
{
  setCurrrentPageCompleted();
}

function Script9()
{
  setCurrrentPageCompleted();
}

function Script10()
{
  checkForcenavigation();
}

function Script11()
{
  checkForcenavigation();
}

function Script12()
{
  checkForcenavigation();
}

function Script13()
{
  checkForcenavigation();
}

function Script14()
{
  checkForcenavigation();
}

function Script15()
{
  setCurrrentPageCompleted();
}

function Script16()
{
  var  player = GetPlayer();

var L1 = player.GetVar("L3_Score");
var L2 = player.GetVar("L6_Score");
var L3 = player.GetVar("L8_Score");

var tScore = L1+L2+L3;

player.SetVar('Score',tScore);
}

function Script17()
{
  var  player = GetPlayer();

var L1 = player.GetVar("L3_Score");
var L2 = player.GetVar("L6_Score");
var L3 = player.GetVar("L8_Score");

var tScore = L1+L2+L3;

player.SetVar('Score',tScore);
}

function Script18()
{
  var newWin=window.open("certificate.html", "certificate", "status=0,scrollbars=0,width=1200,height=800");
}

