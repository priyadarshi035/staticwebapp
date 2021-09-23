function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6SdUoT04LQF":
        Script1();
        break;
      case "5c88Pzb0tgv":
        Script2();
        break;
      case "60PqaDnTBCh":
        Script3();
        break;
      case "6bQ5au0cdUJ":
        Script4();
        break;
      case "68Z38pARsIg":
        Script5();
        break;
      case "6JjSDKw7d4u":
        Script6();
        break;
      case "6egw4j0NvFp":
        Script7();
        break;
      case "6au4ngasVzA":
        Script8();
        break;
      case "5pyTnKzhzM4":
        Script9();
        break;
      case "6K6iGkWI1U8":
        Script10();
        break;
      case "5s01PWPt9lQ":
        Script11();
        break;
      case "5s8d8HepTmu":
        Script12();
        break;
      case "6IBZFw0io8e":
        Script13();
        break;
      case "5kaMAA5IkLF":
        Script14();
        break;
      case "5sZ6o7qGcxJ":
        Script15();
        break;
      case "5tHIrc5x1pU":
        Script16();
        break;
      case "6R2WLxKNUEd":
        Script17();
        break;
      case "6FTzmOUiGwZ":
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

