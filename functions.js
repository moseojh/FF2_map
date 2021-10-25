function hideObj(T_Obj)
{
	document.all[T_Obj].style.visibility = "hidden";
}

function viewObj(T_Obj)
{
	if(document.all[T_Obj].style.visibility == "visible")
	document.all[T_Obj].style.visibility = "hidden";
	else
	document.all[T_Obj].style.visibility = "visible";
}

function popupEvent(T_Filename, T_Width, T_Height)
{
	window.open(T_Filename,'','width='+T_Width+',height='+T_Height+',scrollbars=no');
}

function openerLocation(T_Filename)
{
	opener.location.href = T_Filename;
	self.close();
}

function menuView(indexFlag)
{
	var add = "..";
	if(indexFlag == true) add = ".";
	V_MenuDiv  = "<div style='position:absolute;left:750px;top:50px'>";
	V_MenuDiv += "<TABLE CELLPADDING='0' CELLSPACING='0' BORDER='0' style='font-size:9pt'>";
	V_MenuDiv += "<TR>";
	V_MenuDiv += "	<TD><a href='" + add + "/'>시작페이지</a></TD>";
	V_MenuDiv += "</TR>";
	V_MenuDiv += "<TR>";
	V_MenuDiv += "	<TD height='10'></TD>";
	V_MenuDiv += "</TR>";
	V_MenuDiv += "<TR>";
	V_MenuDiv += "	<TD><a href='" + add + "/01semite/01_1.html'>세미테의 폭포</a></TD>";
	V_MenuDiv += "</TR>";
	V_MenuDiv += "<TR>";
	V_MenuDiv += "	<TD><a href='" + add + "/02bafsk/02_1.html'>바프스크</a></TD>";
	V_MenuDiv += "</TR>";
	V_MenuDiv += "<TR>";
	V_MenuDiv += "	<TD><a href='" + add + "/03snow/03_1.html'>설원의동굴</a></TD>";
	V_MenuDiv += "</TR>";
	V_MenuDiv += "<TR>";
	V_MenuDiv += "	<TD><a href='" + add + "/04kasuon/04_1.html'>카슈온성</a></TD>";
	V_MenuDiv += "</TR>";
	V_MenuDiv += "<TR>";
	V_MenuDiv += "	<TD><a href='" + add + "/05bigplane/05_1.html'>대전함</a></TD>";
	V_MenuDiv += "</TR>";
	V_MenuDiv += "<TR>";
	V_MenuDiv += "	<TD><a href='" + add + "/06distcastle/06_1.html'>디스트성</a></TD>";
	V_MenuDiv += "</TR>";
	V_MenuDiv += "<TR>";
	V_MenuDiv += "	<TD><a href='" + add + "/07dist/07_1.html'>디스트의동굴</a></TD>";
	V_MenuDiv += "</TR>";
	V_MenuDiv += "<TR>";
	V_MenuDiv += "	<TD><a href='" + add + "/08col/08_1.html'>투기장</a></TD>";
	V_MenuDiv += "</TR>";
	V_MenuDiv += "<TR>";
	V_MenuDiv += "	<TD><a href='" + add + "/09pin/09_1.html'>핀성</a></TD>";
	V_MenuDiv += "</TR>";
	V_MenuDiv += "<TR>";
	V_MenuDiv += "	<TD><a href='" + add + "/10/10_1.html'>남쪽섬</a></TD>";
	V_MenuDiv += "</TR>";
	V_MenuDiv += "<TR>";
	V_MenuDiv += "	<TD><a href='" + add + "/11/11_1.html'>미시디아마을</a></TD>";
	V_MenuDiv += "</TR>";
	V_MenuDiv += "<TR>";
	V_MenuDiv += "	<TD><a href='" + add + "/12/12_1.html'>미시디아동굴</a></TD>";
	V_MenuDiv += "</TR>";
	V_MenuDiv += "<TR>";
	V_MenuDiv += "	<TD><a href='" + add + "/13/13_1.html'>리바이어선</a></TD>";
	V_MenuDiv += "</TR>";
	V_MenuDiv += "<TR>";
	V_MenuDiv += "	<TD><a href='" + add + "/14/14_1.html'>미시디아의탑</a></TD>";
	V_MenuDiv += "</TR>";
	V_MenuDiv += "<TR>";
	V_MenuDiv += "	<TD><a href='" + add + "/15/15_1.html'>회오리</a></TD>";
	V_MenuDiv += "</TR>";
	V_MenuDiv += "<TR>";
	V_MenuDiv += "	<TD><a href='" + add + "/16/16_0.html'>파라메키아</a></TD>";
	V_MenuDiv += "</TR>";
	V_MenuDiv += "<TR>";
	V_MenuDiv += "	<TD><a href='" + add + "/17/17_0.html'>제이드</a></TD>";
	V_MenuDiv += "</TR>";
	V_MenuDiv += "<TR>";
	V_MenuDiv += "	<TD><a href='" + add + "/18/18_1.html'>판데모니움</a></TD>";
	V_MenuDiv += "</TR>";
	V_MenuDiv += "<TR>";
	V_MenuDiv += "	<TD height='10'></TD>";
	V_MenuDiv += "</TR>";
	V_MenuDiv += "<TR>";
	V_MenuDiv += "	<TD><a href='" + add + "/worldmap.html'>전체지도</a></TD>";
	V_MenuDiv += "</TR>";
	V_MenuDiv += "<TR>";
	V_MenuDiv += "	<TD height='10'></TD>";
	V_MenuDiv += "</TR>";
	V_MenuDiv += "<TR>";
	V_MenuDiv += "	<TD><font color='red'>소울오브리버스</font></TD>";
	V_MenuDiv += "</TR>";
	V_MenuDiv += "<TR>";
	V_MenuDiv += "	<TD><a href='" + add + "/ex1/ex1_0.html'>의혹의동굴</a></TD>";
	V_MenuDiv += "</TR>";
	V_MenuDiv += "<TR>";
	V_MenuDiv += "	<TD><a href='" + add + "/ex2/ex2_1.html'>마하논마을</a></TD>";
	V_MenuDiv += "</TR>";
	V_MenuDiv += "<TR>";
	V_MenuDiv += "	<TD><a href='" + add + "/ex3/ex3_1.html'>봉인의방</a></TD>";
	V_MenuDiv += "</TR>";
	V_MenuDiv += "<TR>";
	V_MenuDiv += "	<TD><a href='" + add + "/ex4/ex4_1.html'>의혹의궁전</a></TD>";
	V_MenuDiv += "</TR>";
	V_MenuDiv += "</TABLE>";
	V_MenuDiv += "</div>";

	document.write(V_MenuDiv);
}

function createObject(T_Name, T_Filename, T_X, T_Y, T_SX, T_SY, T_EX, T_EY, T_Alt, T_EvName, T_EvValue)
{
	this.name = T_Name;
	this.filename = T_Filename;
	this.x = T_X;
	this.y = T_Y;
	this.sx = T_SX;
	this.sy = T_SY;
	this.ex = T_EX;
	this.ey = T_EY;
	this.alt = T_Alt;
	this.evName = T_EvName;
	this.evValue = T_EvValue;

}

// function createObject(T_Name, T_Filename, T_X, T_Y, T_SX, T_SY, T_EX, T_EY, T_Alt, T_EvName, T_EvValue)

// .name = T_Name;					// 이벤트의 이름
// .filename = T_Filename;			// 이벤트 이미지 이름 (팝업일때 페이지이름)
// .x = T_X;						// Div 위치
// .y = T_Y;
// .sx = T_SX;						// 이벤트 위치
// .sy = T_SY;
// .ex = T_EX;
// .ey = T_EY;
// .alt = T_Alt;					// 이벤트 설명
// .evName = T_EvName;				// 이벤트 종류 (Layer, Popup, Location)
// .evValue = T_EvValue;			// 이벤트가 Layer가 아니면 이 값을 참조하여 페이지를 띄운다.



function balloonHint(Id)
{
	balloonHint.layerId = Id;

	document.addEventListener('mouseover', balloonHint.Show, false);
	document.addEventListener('mouseout', balloonHint.Hide, false);
}
balloonHint.layerId = null;
balloonHint.Show = function (evt) {
	if (typeof evt == "undefined" || typeof evt.target == "undefined") {
		(evt=event).target = event.srcElement;
	}

	var hint = evt.target.getAttribute("HINT");
	if (hint == null || hint.length == 0) return;
	if (balloonHint.layer == null) balloonHint.makeLayer();

	with (balloonHint.layer) {
		innerHTML = sourceHTML.replace("{{hint}}", hint);
		show(evt.clientX + 10, evt.clientY + 2);
	}
}

balloonHint.Hide = function (evt) {
	if (typeof evt == "undefined" || typeof evt.target == "undefined") {
		(evt=event).target = event.srcElement;
	}

	var hint = evt.target.getAttribute("HINT");
	if (hint == null || hint.length == 0) return;

	balloonHint.layer.hide();
}

balloonHint.makeLayer = function()
{
	if (typeof document.body == "undefined") {
		document.body = document.getElementsByTagName("BODY")[0];
	}

	balloonHint.layer = document.getElementById(balloonHint.layerId);
	balloonHint.layer.sourceHTML = balloonHint.layer.innerHTML;
	balloonHint.layer.style.position = "absolute";

	if (typeof window.createPopup == "undefined") {
		balloonHint.layer.show = function(x, y) {
			balloonHint.layer.style.display = "block";
			balloonHint.layer.style.left = (x+document.body.scrollLeft) + "px";
			balloonHint.layer.style.top =  (y+document.body.scrollTop) + "px";
		}
		balloonHint.layer.hide = function() {
			balloonHint.layer.style.display = "none";
		}
	} else {
		balloonHint.layer.popup = window.createPopup();
		balloonHint.layer.show = function(x, y) {
			with (balloonHint.layer) {
				style.display = "block";
				var w = offsetWidth, h = offsetHeight;
				style.display = "none";
				popup.document.body.innerHTML = innerHTML;
				popup.show(x, y, w, h, document.body);
			}
		}
		balloonHint.layer.hide = function() {
			balloonHint.layer.popup.hide();
		}
	}
}

if (typeof document.addEventListener == "undefined") {
	if (typeof document.attachEvent != "undefined") {
		document.addEventListener = function (eventType, listener) {
			document.attachEvent("on"+eventType, listener);
		}
		document.removeEventListener = function (eventType, listener) {
			document.detachEvent("on"+eventType, listener);
		}
	}
}

balloonHint('balloon_hint');
