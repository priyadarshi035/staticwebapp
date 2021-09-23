function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Fjk4BkWN1G":
        Script1();
        break;
      case "5k9z98fMZWx":
        Script2();
        break;
      case "6o7UX9X0ij5":
        Script3();
        break;
      case "6IeDVHEcw4b":
        Script4();
        break;
      case "6fGdsMgMq9y":
        Script5();
        break;
      case "61Js2qG4MNz":
        Script6();
        break;
      case "6dJZis1tVdQ":
        Script7();
        break;
      case "6Yo6UERUp4M":
        Script8();
        break;
      case "6W6QOJ1oBRG":
        Script9();
        break;
      case "6WJMYvCuHGk":
        Script10();
        break;
      case "6pmhk9cIexA":
        Script11();
        break;
      case "6d0R3crNQfn":
        Script12();
        break;
      case "6jt4YtFsL7x":
        Script13();
        break;
      case "6YfaDtTSbyt":
        Script14();
        break;
      case "6AkhIgeiRzm":
        Script15();
        break;
      case "68hnpZTDtSw":
        Script16();
        break;
      case "6KAzqzIeN8T":
        Script17();
        break;
      case "6SBSt5if547":
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

