var pythonEditor,blocklyEditor;

function RefreshConsoleOutput(consoleId, stdout, stderr) {
    if (stderr.length > 3) {
      stderr = stderr.replace(/(?:\r\n|\r|\n)/g, '<br />');
      consoleId.className = "nav-link text-danger";
      consoleId.innerHTML = stderr;
    }
    else if (stdout.length > 3) {
      stdout = stdout.replace(/(?:\r\n|\r|\n)/g, '<br />');
      consoleId.className = "nav-link";
      consoleId.innerHTML = stdout;
    }
    else {
        consoleId.innerHTML = "Bitti.."
    }
  }

function appLoad() {

    pythonEditor = CodeMirror.fromTextArea(document.getElementById("pythonDivId"), {
        lineNumbers: true,
        styleActiveLine: true,
        mode: "python",
        theme: "ayu-dark"
    });

    pythonEditor.refresh(); 

    blocklyEditor = Blockly.inject("blocklyDivId",
        {
            //media: '../../media/',
            toolbox: document.getElementById("defaultBlocklyToolboxId"),
            theme: Blockly.Themes.Dark,
            zoom:
            {
                controls: true,
                wheel: false,
                startScale: 1.0,
                maxScale: 3,
                minScale: 0.3,
                scaleSpeed: 1.2,
                pinch: true
            },
            grid:
            {
                spacing: 15,
                length: 1,
                colour: '#FFF',
                snap: true
            },
            trashcan: true
        }
    );    
}

function run_code(type)
{
    if(type == "python"){
        code = pythonEditor.getValue();
    }
    else if(type == "blockly"){
        code = Blockly.Python.workspaceToCode(blocklyEditor);
    }

    consoleId = document.getElementById("defaultConsoleId")
    consoleId.className = "nav-link";
    consoleId.innerHTML = "Çalışıyor..."

    $.ajax({
        url: 'http://127.0.0.1:5000/api/v1/executer/python/run',
        data: {
            'code': code
        },

        success: function (ret) {
            console.log(ret)
            currentPid = ret.pid;
            consoleId = document.getElementById("defaultConsoleId")
            RefreshConsoleOutput(consoleId, ret.stdout, ret.stderr);
        }
    });    
}

function stop_code()
{
   $.ajax({
        url: 'http://127.0.0.1:5000/api/v1/executer/python/stop',
        data: {
            'pid': currentPid
        },

        success: function (ret) {
            console.log(ret)
        }
    });    
}

function blocklyCodeShow()
{
    code = Blockly.Python.workspaceToCode(blocklyEditor);
    alert(code);
}

function showNameDialog(type){
    if(type == "python"){
      fname = window.prompt("Dosya Adı Giriniz.", "Python1")
    }
    else if(type == "blockly"){
      fname = window.prompt("Dosya Adı Giriniz.", "Blok1")
    }
  
    return fname;
}
  

function saveData(data, fileName) {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    const obj = {data: data};
    const blob = new Blob([JSON.stringify(obj, null, 2)], {type : 'application/json'});

    var url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
};

function download_code(type)
{
    var name = showNameDialog(type)
    if(type == 'blockly'){
        var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace)
        saveData(Blockly.Xml.domToText(xml),name)
    }
    else if(type == 'python'){
        saveData(pythonEditor.getValue(),name)
    }
}

var openFile = function(event,type) {
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function(){
      var text = reader.result;
      if(type == 'blockly'){
          Blockly.mainWorkspace.clear();
          var obj = JSON.parse(text);
          var xml = Blockly.Xml.textToDom(obj.data);
          Blockly.Xml.domToWorkspace(Blockly.mainWorkspace,xml);
      }
      else if(type=='python'){
          var obj=JSON.parse(text);
          pythonEditor.setValue(obj.data);
      }
    };
    reader.readAsText(input.files[0]);
};

var activateCard = function(name){
    //get all card classes and hide
    let allCards = document.getElementsByClassName("YzYapCardClass");
    for (var i=0;i<allCards.length;i++) {
        allCards[i].style.display = "none";
    }
    //show only active card
    let el = document.getElementById(name);
    el.style.display = "block"
}

var addAILabel = function(name){
    nameLabel = window.prompt("Etiket Adı Giriniz");
    if (nameLabel != ""){
        aiLabelArea = document.getElementById("aiLabelArea");
    }
}