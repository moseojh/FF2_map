V_ImageArea = "<img src='"+cName.evValue+"' border='0' USEMAP='#titlemap'><MAP NAME='titlemap'>"; // 초기화

for(i=1;i<=cCount;i++)
{
	eval("T_obj = cItem"+i);

	if(T_obj.evName == "Layer")
	{
		V_ImageArea = V_ImageArea + "<AREA SHAPE='rect' HREF='javascript:viewObj(\""+T_obj.name+"\")' COORDS='"+T_obj.sx+","+T_obj.sy+","+T_obj.ex+","+T_obj.ey+"' HINT='"+T_obj.alt+"'>";
	}
	else if(T_obj.evName == "Popup")
	{
		V_ImageArea = V_ImageArea + "<AREA SHAPE='rect' HREF='javascript:popupEvent(\""+T_obj.filename+"\", "+T_obj.evValue+")' COORDS='"+T_obj.sx+","+T_obj.sy+","+T_obj.ex+","+T_obj.ey+"' HINT='"+T_obj.alt+"'>";
	}
	else if(T_obj.evName == "Location")
	{
		V_ImageArea = V_ImageArea + "<AREA SHAPE='rect' HREF='"+T_obj.filename+"' COORDS='"+T_obj.sx+","+T_obj.sy+","+T_obj.ex+","+T_obj.ey+"' HINT='"+T_obj.alt+"'>";
	}
}
if (cName.evName == "Popup")
{
	V_ImageArea += "<area shape='rect' href='javascript:close();' coords='0,0,1000,1000' alt='닫기'>";
}
V_ImageArea += "</MAP>";

document.write(V_ImageArea);

if (cName.x == -1)
{
	V_DivArea = "";
}
else
{
	V_DivArea = "<div id='map_name' style='position:absolute;left:"+cName.x+"px;top:"+cName.y+"px;'><img src='"+cName.filename+"' border='0' onclick='hideObj(\"map_name\")'></div>";
}

for(i=1;i<=cCount;i++)
{
	eval("T_obj = cItem"+i);
	if(T_obj.evName == "Layer")
	{
		V_DivArea += "<div id='"+T_obj.name+"' style='position:absolute;left:"+T_obj.x+"px;top:"+T_obj.y+"px;visibility:hidden'><img src='"+T_obj.filename+"' border='0' onclick='hideObj(\""+T_obj.name+"\")'></div>";
	}
}
document.write(V_DivArea);

if (cName.x != -1)
{
	menuView();

	timer = setInterval("nameImageOut()", 1500);

	function nameImageOut()
	{
		hideObj('map_name');
		clearInterval(timer);
	}
} else {
	document.body.style.overflowX = "hidden";
	document.body.style.overflowY = "hidden";
}

V_Balloon = "<div id='balloon_hint' style='display:none;background:#FFF;'>";
V_Balloon += "<table border='0' cellspacing='0' cellpadding='2'>";
V_Balloon += "<tr><td style='font-size:9pt'>{{hint}}</td></tr>";
V_Balloon += "</table>";
V_Balloon += "</div>";

document.write(V_Balloon);
