var g_MyTangoTyoList = [];
var g_CategoryList = [];

var DataImportFlg = false;

var g_OutputCount = 0;
var g_CorrectCount = 0;

var g_TangoIndexList = [];
var g_CurrentTangoIndex = "";
var g_CurrentCategory = "";

DisplayDataImportFlg();
DisplayOutputCountAndCorrectCount();
DisplayCategory();

function AddCorrectCount(){
	g_CorrectCount++;
	
	DisplayOutputCountAndCorrectCount();
}

function DisplayCategory(){
	categorySpan = document.getElementById("QuestionCategory2");
	if(g_CurrentCategory == ""){
		categorySpan.innerHTML = "カテゴリを決定してください";
	}else{
		categorySpan.innerHTML = g_CurrentCategory;
	}
}
function DisplayOutputCountAndCorrectCount(){
	var outputCountElem = document.getElementById("AllOutputCount");
	var correctCountElem = document.getElementById("CorrectCount");
	
	outputCountElem.innerHTML = g_OutputCount;
	correctCountElem.innerHTML = g_CorrectCount;

}
function SetCategory(){
	var selbox = document.getElementById("QuestionCategory1");
	var category1 = selbox.options[selbox.selectedIndex].value;
	
	g_CurrentCategory = category1;
	getTangoIndexListInSameCategory(g_CurrentCategory);
	DisplayCategory();
	
}

function getTangoIndexListInSameCategory(category1){

	g_TangoIndexList = [];
	for(var i=0; i<g_MyTangoTyoList.length; i++){
		if(g_MyTangoTyoList[i].Category == category1 ||
		   category1 == "All"){
			g_TangoIndexList.push(i);
		}
	}
}

function AnswerOutput1(){
	AnswerOutput2(g_CurrentTangoIndex);
}

function AnswerOutput2(MondaiIndex){
	var tango1 = g_MyTangoTyoList[MondaiIndex];
	
	var AnswerTextElem = document.getElementById("AnswerText");
	
	var ADiv1 = document.getElementById("DivAnswerImg1-1");
	//クリア
	while(ADiv1.firstChild != null){ ADiv1.removeChild(ADiv1.firstChild); }
	
	var ADiv2 = document.getElementById("DivAnswerImg1-2");
	//クリア
	while(ADiv2.firstChild != null){ ADiv2.removeChild(ADiv2.firstChild); }
	
	var ADiv3 = document.getElementById("DivAnswerImg1-3");
	//クリア
	while(ADiv3.firstChild != null){ ADiv3.removeChild(ADiv3.firstChild); }

	AnswerTextElem.innerHTML = tango1.AnswerText;
	
	if(tango1.QuestionImage1 != "-"){
		imgElem = document.createElement('img');
		imgElem.src = tango1.QuestionImage1;
		imgElem.width = tango1.QuestionImage1Width;
		imgElem.height = tango1.QuestionImage1Height;
		imgElem.style.display = "block";
		
		ADiv1.appendChild(imgElem);
	}
	
	if(tango1.QuestionImage2 != "-"){
		imgElem = document.createElement('img');
		imgElem.src = tango1.QuestionImage2;
		imgElem.width = tango1.QuestionImage2Width;
		imgElem.height = tango1.QuestionImage2Height;
		imgElem.style.display = "block";
		
		ADiv2.appendChild(imgElem);
	}
	
	if(tango1.QuestionImage3 != "-"){
		imgElem = document.createElement('img');
		imgElem.src = tango1.QuestionImage3;
		imgElem.width = tango1.QuestionImage3Width;
		imgElem.height = tango1.QuestionImage3Height;
		imgElem.style.display = "block";
		
		ADiv3.appendChild(imgElem);
	}
	
}

function SelectNumberOutput(){

	var QuestionNumber = parseInt(document.getElementById("QuestionNumberTextBox").value) - 1;
	if(isNaN(QuestionNumber) || QuestionNumber <= 0 || QuestionNumber >= g_MyTangoTyoList.length){
		QuestionNumber = 0;
	}
	
	if(DataImportFlg == false  || g_CurrentCategory == ""){
		return 0;
	}
	g_CurrentTangoIndex =  QuestionNumber;
	
	var tango1 = g_MyTangoTyoList[ g_CurrentTangoIndex ];
	
	var QuestionNumberElem = document.getElementById("QuestionNumber");
	var QuestionCategoryElem = document.getElementById("QuestionCategory2");
	var QuestionTextElem = document.getElementById("QuestionText");
	var AnswerTextElem = document.getElementById("AnswerText");
	
	var QDiv1 = document.getElementById("DivQuestionImg1-1");
	//クリア
	while(QDiv1.firstChild != null){ QDiv1.removeChild(QDiv1.firstChild); }

	var QDiv2 = document.getElementById("DivQuestionImg1-2");
	//クリア
	while(QDiv2.firstChild != null){ QDiv2.removeChild(QDiv2.firstChild); }
	
	var QDiv3 = document.getElementById("DivQuestionImg1-3");
	//クリア
	while(QDiv3.firstChild != null){ QDiv3.removeChild(QDiv3.firstChild); }

	var ADiv1 = document.getElementById("DivAnswerImg1-1");
	//クリア
	while(ADiv1.firstChild != null){ ADiv1.removeChild(ADiv1.firstChild); }
	
	var ADiv2 = document.getElementById("DivAnswerImg1-2");
	//クリア
	while(ADiv2.firstChild != null){ ADiv2.removeChild(ADiv2.firstChild); }
	
	var ADiv3 = document.getElementById("DivAnswerImg1-3");
	//クリア
	while(ADiv3.firstChild != null){ ADiv3.removeChild(ADiv3.firstChild); }

		
	QuestionNumberElem.innerHTML = tango1.MondaiNumber;
	QuestionCategoryElem.innerHTML = tango1.Category;
	QuestionTextElem.innerHTML = tango1.QuestionText;
	AnswerTextElem.innerHTML = "";
	
	
	if(tango1.QuestionImage1 != "-"){
		imgElem = document.createElement('img');
		imgElem.src = tango1.QuestionImage1;
		imgElem.width = tango1.QuestionImage1Width;
		imgElem.height = tango1.QuestionImage1Height;
		imgElem.style.display = "block";
		
		QDiv1.appendChild(imgElem);
	}
	
	if(tango1.QuestionImage2 != "-"){
		imgElem = document.createElement('img');
		imgElem.src = tango1.QuestionImage1;
		imgElem.width = tango1.QuestionImage1Width;
		imgElem.height = tango1.QuestionImage1Height;
		imgElem.style.display = "block";
		
		QDiv2.appendChild(imgElem);
	}
	
	if(tango1.QuestionImage3 != "-"){
		imgElem = document.createElement('img');
		imgElem.src = tango1.QuestionImage1;
		imgElem.width = tango1.QuestionImage1Width;
		imgElem.height = tango1.QuestionImage1Height;
		imgElem.style.display = "block";
		
		QDiv3.appendChild(imgElem);
	}
	
	
	g_OutputCount++;
	DisplayOutputCountAndCorrectCount();
}

function RandomQuestionOutput(){

	if(DataImportFlg == false  || g_CurrentCategory == ""){
		return 0;
	}

	var random1 = getRandom(0, g_TangoIndexList.length-1);	
	g_CurrentTangoIndex =  g_TangoIndexList[random1];
	
	var tango1 = g_MyTangoTyoList[ g_CurrentTangoIndex ];
	
	var QuestionNumberElem = document.getElementById("QuestionNumber");
	var QuestionCategoryElem = document.getElementById("QuestionCategory2");
	var QuestionTextElem = document.getElementById("QuestionText");
	var AnswerTextElem = document.getElementById("AnswerText");

	var QDiv1 = document.getElementById("DivQuestionImg1-1");
	//クリア
	while(QDiv1.firstChild != null){ QDiv1.removeChild(QDiv1.firstChild); }

	var QDiv2 = document.getElementById("DivQuestionImg1-2");
	//クリア
	while(QDiv2.firstChild != null){ QDiv2.removeChild(QDiv2.firstChild); }
	
	var QDiv3 = document.getElementById("DivQuestionImg1-3");
	//クリア
	while(QDiv3.firstChild != null){ QDiv3.removeChild(QDiv3.firstChild); }

	var ADiv1 = document.getElementById("DivAnswerImg1-1");
	//クリア
	while(ADiv1.firstChild != null){ ADiv1.removeChild(ADiv1.firstChild); }
	
	var ADiv2 = document.getElementById("DivAnswerImg1-2");
	//クリア
	while(ADiv2.firstChild != null){ ADiv2.removeChild(ADiv2.firstChild); }
	
	var ADiv3 = document.getElementById("DivAnswerImg1-3");
	//クリア
	while(ADiv3.firstChild != null){ ADiv3.removeChild(ADiv3.firstChild); }
		
	QuestionNumberElem.innerHTML = tango1.MondaiNumber;
	QuestionCategoryElem.innerHTML = tango1.Category;
	QuestionTextElem.innerHTML = tango1.QuestionText;
	AnswerTextElem.innerHTML = "";
	
	if(tango1.QuestionImage1 != "-"){
		imgElem = document.createElement('img');
		imgElem.src = tango1.QuestionImage1;
		imgElem.width = tango1.QuestionImage1Width;
		imgElem.height = tango1.QuestionImage1Height;
		imgElem.style.display = "block";
		
		QDiv1.appendChild(imgElem);
	}
	
	if(tango1.QuestionImage2 != "-"){
		imgElem = document.createElement('img');
		imgElem.src = tango1.QuestionImage1;
		imgElem.width = tango1.QuestionImage1Width;
		imgElem.height = tango1.QuestionImage1Height;
		imgElem.style.display = "block";
		
		QDiv2.appendChild(imgElem);
	}
	
	if(tango1.QuestionImage3 != "-"){
		imgElem = document.createElement('img');
		imgElem.src = tango1.QuestionImage1;
		imgElem.width = tango1.QuestionImage1Width;
		imgElem.height = tango1.QuestionImage1Height;
		imgElem.style.display = "block";
		
		QDiv3.appendChild(imgElem);
	}
	
	g_OutputCount++;
	DisplayOutputCountAndCorrectCount();


}

//参考URL:https://www.sejuku.net/blog/22432
function getRandom( min, max ) {
    var random = Math.floor( Math.random() * (max + 1 - min) ) + min;
  
    return random;
}

function SetSelectBox(){
	var selbox = document.getElementById("QuestionCategory1");

	var option
	//カテゴリのセレクトボックスをクリア
	while(selbox.firstChild != null){ selbox.removeChild(selbox.firstChild); }
	
	option = document.createElement("option");
	option.text = "全て";
	option.value = "All";
	selbox.appendChild(option);
	for(var i=0; i<g_CategoryList.length; i++){
		option = document.createElement("option");
		option.text = g_CategoryList[i];
		option.value = g_CategoryList[i];
		selbox.appendChild(option)
	}
}

function ImportDataOnDataImportTab(){
      var fileRef = document.getElementById('fileOnDataImport');
	  var content;
	  var category1;
	  
      if (1 <= fileRef.files.length) {
			var reader = new FileReader();
			//ファイル読み出し完了後の処理を記述
			reader.onload = function (theFile) {
			var content = theFile.target.result;
			g_MyTangoTyoList = JSON.parse(content);
			
			for(var i=0; i<g_MyTangoTyoList.length; i++){
				category1 = g_MyTangoTyoList[i].Category;
				if(!g_CategoryList.includes(category1)){
					g_CategoryList.push(category1);
				}
			}
			SetSelectBox()
			

			DataImportFlg = true;
			DisplayDataImportFlg();
        }

		//ファイル読み出し
        reader.readAsText(fileRef.files[0], "utf-8");

      }
}

var g_reader = new FileReader();
var g_File;
var fileElem = document.getElementById("fileOnDataImport");
fileElem.onchange = function(event) {
    g_File = event.target.files[0];
};

function DisplayDataImportFlg(){
	var spanElem;
	
	spanElem = document.getElementById("ImportDataFlg");
	if(DataImportFlg == true){
		spanElem.innerHTML = "単語帳データ：ロード済み"
	}else{
		spanElem.innerHTML = "単語帳データ：ロード未完了"
	}
}

