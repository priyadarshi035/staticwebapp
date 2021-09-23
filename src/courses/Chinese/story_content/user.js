function ExecuteScript(strId)
{
  switch (strId)
  {
      case "66CFxh38obw":
        Script1();
        break;
      case "5dE5YEfkYhl":
        Script2();
        break;
      case "6XSgFWvkbsA":
        Script3();
        break;
      case "6EeWi7YYw8g":
        Script4();
        break;
      case "6eWx6LWN64W":
        Script5();
        break;
      case "5uGA2g0nZnc":
        Script6();
        break;
      case "6KdPSaEqTyF":
        Script7();
        break;
      case "5dDVVNRjsZr":
        Script8();
        break;
      case "67DKJtmMFDW":
        Script9();
        break;
      case "5W3jsNSofwp":
        Script10();
        break;
      case "6grQxCdVqq4":
        Script11();
        break;
      case "6LPgycrLdyg":
        Script12();
        break;
      case "65Fj5Rl9TJm":
        Script13();
        break;
      case "5rLVH4n0ilP":
        Script14();
        break;
      case "6rFVCuzaEoS":
        Script15();
        break;
      case "6rjXWTBXV79":
        Script16();
        break;
      case "5wlo4knDNWE":
        Script17();
        break;
      case "6GqquS4w5Iw":
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

