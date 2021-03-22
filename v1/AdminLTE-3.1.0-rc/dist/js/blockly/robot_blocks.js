Blockly.Blocks['donsag'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Robot ")
          .appendField(new Blockly.FieldNumber(0, 0, 360), "donsagAci")
          .appendField("derece sağa dönsün");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(330);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Python['donsag'] = function(block) {
    var number_donsagaci = block.getFieldValue('donsagAci');
    // TODO: Assemble Python into code variable.
    var code = 'myRobot.sendCmd("don,sag,';
    code = code + number_donsagaci;
    code = code + '")';
    code = code + '\n';
    return code;
  };

  Blockly.Blocks['donsol'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Robot ")
          .appendField(new Blockly.FieldNumber(0, 0, 360), "donsolAci")
          .appendField("derece sola dönsün");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(330);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Python['donsol'] = function(block) {
    var number_donsolaci = block.getFieldValue('donsolAci');
    // TODO: Assemble Python into code variable.
    var code = 'myRobot.sendCmd("don,sol,';
    code = code + number_donsolaci;
    code = code + '")';
    code = code + '\n';
    return code;
  };







  Blockly.Blocks['ileri'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Robot ")
          .appendField(new Blockly.FieldNumber(0, 0), "ileriHiz")
          .appendField("hızında")
          .appendField(new Blockly.FieldNumber(0, 0), "ileriAdim")
          .appendField("adım ileri gitsin");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(290);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Python['ileri'] = function(block) {
    var number_ilerihiz = block.getFieldValue('ileriHiz');
    var number_ileriadim = block.getFieldValue('ileriAdim');
    // TODO: Assemble Python into code variable.
    var code = 'myRobot.sendCmd("ileri,';
    code = code + number_ileriadim;
    code = code + ',';
    code = code + number_ilerihiz;
    code = code + '")';
    code = code + '\n';
    return code;
  };

  Blockly.Blocks['geri'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Robot ")
          .appendField(new Blockly.FieldNumber(0, 0), "geriHiz")
          .appendField("hızında")
          .appendField(new Blockly.FieldNumber(0, 0), "geriAdim")
          .appendField("adım geri gitsin");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(290);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Python['geri'] = function(block) {
    var number_gerihiz = block.getFieldValue('geriHiz');
    var number_geriadim = block.getFieldValue('geriAdim');
    // TODO: Assemble Python into code variable.
    var code = 'myRobot.sendCmd("geri,';
    code = code + number_geriadim;
    code = code + ',';
    code = code + number_gerihiz;
    code = code + '")';
    code = code + '\n';
    return code;
  };






  Blockly.Blocks['ilerisag'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Robot ")
          .appendField(new Blockly.FieldNumber(0, 0), "ilerisagHiz")
          .appendField("hızında")
          .appendField(new Blockly.FieldNumber(0, 0), "ilerisagAdim")
          .appendField("adım ileri ve sağa gitsin");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Python['ilerisag'] = function(block) {
    var number_ilerisaghiz = block.getFieldValue('ilerisagHiz');
    var number_ilerisagadim = block.getFieldValue('ilerisagAdim');
    // TODO: Assemble Python into code variable.
    var code = 'myRobot.sendCmd("ilerisag,';
    code = code + number_ilerisagadim;
    code = code + ',';
    code = code + number_ilerisaghiz;
    code = code + '")';
    code = code + '\n';
    return code;
  };

  Blockly.Blocks['ilerisol'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Robot ")
          .appendField(new Blockly.FieldNumber(0, 0), "ilerisolHiz")
          .appendField("hızında")
          .appendField(new Blockly.FieldNumber(0, 0), "ilerisolAdim")
          .appendField("adım ileri ve sola gitsin");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Python['ilerisol'] = function(block) {
    var number_ilerisolhiz = block.getFieldValue('ilerisolHiz');
    var number_ilerisoladim = block.getFieldValue('ilerisolAdim');
    // TODO: Assemble Python into code variable.
    var code = 'myRobot.sendCmd("ilerisol,';
    code = code + number_ilerisoladim;
    code = code + ',';
    code = code + number_ilerisolhiz;
    code = code + '")';
    code = code + '\n';
    return code;
  };








  Blockly.Blocks['gerisag'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Robot ")
          .appendField(new Blockly.FieldNumber(0, 0), "gerisagHiz")
          .appendField("hızında")
          .appendField(new Blockly.FieldNumber(0, 0), "gerisagAdim")
          .appendField("adım geri ve sağa gitsin");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Python['gerisag'] = function(block) {
    var number_gerisaghiz = block.getFieldValue('gerisagHiz');
    var number_gerisagadim = block.getFieldValue('gerisagAdim');
    // TODO: Assemble Python into code variable.
    var code = 'myRobot.sendCmd("gerisag,';
    code = code + number_gerisagadim;
    code = code + ',';
    code = code + number_gerisaghiz;
    code = code + '")';
    code = code + '\n';
    return code;
  };

  Blockly.Blocks['gerisol'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Robot ")
          .appendField(new Blockly.FieldNumber(0, 0), "gerisolHiz")
          .appendField("hızında")
          .appendField(new Blockly.FieldNumber(0, 0), "gerisolAdim")
          .appendField("adım geri ve sola gitsin");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(120);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Python['gerisol'] = function(block) {
    var number_gerisolhiz = block.getFieldValue('gerisolHiz');
    var number_gerisoladim = block.getFieldValue('gerisolAdim');
    // TODO: Assemble Python into code variable.
    var code = 'myRobot.sendCmd("gerisol,';
    code = code + number_gerisoladim;
    code = code + ',';
    code = code + number_gerisolhiz;
    code = code + '")';
    code = code + '\n';
    return code;
  };








  Blockly.Blocks['pansag'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Kamera")
          .appendField(new Blockly.FieldNumber(0, 0, 90), "panSagDerece")
          .appendField("derece sağa dönsün");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Python['pansag'] = function(block) {
    var number_pansagderece = block.getFieldValue('panSagDerece');
    // TODO: Assemble Python into code variable.
    var code = 'myRobot.sendCmd("pan,sag,';
    code = code + number_pansagderece;
    code = code + '")';
    code = code + '\n';
    return code;
  };

  Blockly.Blocks['pandirektsag'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Kamera merkezden")
          .appendField(new Blockly.FieldNumber(0, 0, 90), "panDirektSagDerece")
          .appendField("derece sağa dönsün");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Python['pandirektsag'] = function(block) {
    var number_pandirektsagderece = block.getFieldValue('panDirektSagDerece');
    // TODO: Assemble Python into code variable.
    var code = 'myRobot.sendCmd("pan,direktsag,';
    code = code + number_pandirektsagderece;
    code = code + '")';
    code = code + '\n';
    return code;
  };


  Blockly.Blocks['pansol'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Kamera")
          .appendField(new Blockly.FieldNumber(0, 0, 90), "panSolDerece")
          .appendField("derece sola dönsün");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Python['pansol'] = function(block) {
    var number_pansolderece = block.getFieldValue('panSolDerece');
    // TODO: Assemble Python into code variable.
    var code = 'myRobot.sendCmd("pan,sol,';
    code = code + number_pansolderece;
    code = code + '")';
    code = code + '\n';
    return code;
  };

  Blockly.Blocks['pandirektsol'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Kamera merkezden")
          .appendField(new Blockly.FieldNumber(0, 0, 90), "panDirektSolDerece")
          .appendField("derece sola dönsün");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Python['pandirektsol'] = function(block) {
    var number_pandirektsolderece = block.getFieldValue('panDirektSolDerece');
    // TODO: Assemble Python into code variable.
    var code = 'myRobot.sendCmd("pan,direktsol,';
    code = code + number_pandirektsolderece;
    code = code + '")';
    code = code + '\n';
    return code;
  };

  Blockly.Blocks['tiltasagi'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Kamera")
          .appendField(new Blockly.FieldNumber(0, 0, 60), "tiltAsagiDerece")
          .appendField("derece aşağı baksın");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Python['tiltasagi'] = function(block) {
    var number_tiltasagiderece = block.getFieldValue('tiltAsagiDerece');
    // TODO: Assemble Python into code variable.
    var code = 'myRobot.sendCmd("tilt,asagi,';
    code = code + number_tiltasagiderece;
    code = code + '")';
    code = code + '\n';
    return code;
  };

  Blockly.Blocks['tiltdirektasagi'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Kamera merkezden")
          .appendField(new Blockly.FieldNumber(0, 0, 60), "tiltDirektAsagiDerece")
          .appendField("derece aşağı baksın");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Python['tiltdirektasagi'] = function(block) {
    var number_tiltdirektasagiderece = block.getFieldValue('tiltDirektAsagiDerece');
    // TODO: Assemble Python into code variable.
    var code = 'myRobot.sendCmd("tilt,direktasagi,';
    code = code + number_tiltdirektasagiderece;
    code = code + '")';
    code = code + '\n';
    return code;
  };


  Blockly.Blocks['tiltyukari'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Kamera")
          .appendField(new Blockly.FieldNumber(0, 0, 60), "tiltYukariDerece")
          .appendField("derece yukarı baksın");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Python['tiltyukari'] = function(block) {
    var number_tiltyukariderece = block.getFieldValue('tiltYukariDerece');
    // TODO: Assemble Python into code variable.
    var code = 'myRobot.sendCmd("tilt,yukari,';
    code = code + number_tiltyukariderece;
    code = code + '")';
    code = code + '\n';
    return code;
  };

  Blockly.Blocks['tiltdirektyukari'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Kamera merkezden")
          .appendField(new Blockly.FieldNumber(0, 0, 60), "tiltDirektYukariDerece")
          .appendField("derece yukarı baksın");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(210);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Python['tiltdirektyukari'] = function(block) {
    var number_tiltdirektyukariderece = block.getFieldValue('tiltDirektYukariDerece');
    // TODO: Assemble Python into code variable.
    var code = 'myRobot.sendCmd("tilt,direktyukari,';
    code = code + number_tiltdirektyukariderece;
    code = code + '")';
    code = code + '\n';
    return code;
  };

  Blockly.Blocks['cammerkez'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Kamera merkeze baksın");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Python['cammerkez'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'myRobot.sendCmd("pan,merkez,0")';
    code = code + '\n';
    return code;
  };


  Blockly.Blocks['tiltscan'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Kamera yukarı aşağı doğru tarasın");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Python['tiltscan'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'myRobot.sendCmd("tilt,yukari,SCAN")';
    code = code + '\n';
    return code;
  };

  Blockly.Blocks['panscan'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Kamera sağa sola doğru tarasın");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Python['panscan'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'myRobot.sendCmd("pan,sag,SCAN")';
    code = code + '\n';
    return code;
  };

  Blockly.Blocks['ultrasonicsag'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Ultrasonik sensör")
          .appendField(new Blockly.FieldNumber(0, 0, 90), "USsensorSagAci")
          .appendField("derece sağa dönsün");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Python['ultrasonicsag'] = function(block) {
    var number_ussensorsagaci = block.getFieldValue('USsensorSagAci');
    // TODO: Assemble Python into code variable.
    var code = 'myRobot.sendCmd("us_sensor,sag,';
    code = code + number_ussensorsagaci ;
    code = code + '")';
    code = code + '\n';
    return code;
  };


  Blockly.Blocks['ultrasonicdirektsag'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Ultrasonik sensör merkezden")
          .appendField(new Blockly.FieldNumber(0, 0, 90), "USsensorDirektSagAci")
          .appendField("derece sağa dönsün");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Python['ultrasonicdirektsag'] = function(block) {
    var number_ussensordirektsagaci = block.getFieldValue('USsensorDirektSagAci');
    // TODO: Assemble Python into code variable.
    var code = 'myRobot.sendCmd("us_sensor,direktsag,';
    code = code + number_ussensordirektsagaci ;
    code = code + '")';
    code = code + '\n';
    return code;
  };

  Blockly.Blocks['ultrasonicsol'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Ultrasonik sensör")
          .appendField(new Blockly.FieldNumber(0, 0, 90), "USsensorSolAci")
          .appendField("derece sola dönsün");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Python['ultrasonicsol'] = function(block) {
    var number_ussensorsolaci = block.getFieldValue('USsensorSolAci');
    // TODO: Assemble Python into code variable.
    var code = 'myRobot.sendCmd("us_sensor,sol,';
    code = code + number_ussensorsolaci ;
    code = code + '")';
    code = code + '\n';
    return code;
  };

  Blockly.Blocks['ultrasonicdirektsol'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Ultrasonik sensör merkezden")
          .appendField(new Blockly.FieldNumber(0, 0, 90), "USsensorDirektSolAci")
          .appendField("derece sola dönsün");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Python['ultrasonicdirektsol'] = function(block) {
    var number_ussensordirektsolaci = block.getFieldValue('USsensorDirektSolAci');
    // TODO: Assemble Python into code variable.
    var code = 'myRobot.sendCmd("us_sensor,direktsol,';
    code = code + number_ussensordirektsolaci ;
    code = code + '")';
    code = code + '\n';
    return code;
  };


  Blockly.Blocks['ultrasonicmerkez'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Ultrasonik sensör merkeze baksın");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Python['ultrasonicmerkez'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'myRobot.sendCmd("us_sensor,merkez,0")';
    code = code + '\n';
    return code;
  };

  Blockly.Blocks['ultrasonicscan'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Ultrasonik sensör sağa sola doğru tarasın");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Python['ultrasonicscan'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'myRobot.sendCmd("us_sensor,sag,SCAN")';
    code = code + '\n';
    return code;
  };

  Blockly.Blocks['soundplay'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldNumber(0, 0), "soundNumber")
          .appendField("numaralı ses çalmaya başlasın");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Python['soundplay'] = function(block) {
    var number_soundnumber = block.getFieldValue('soundNumber');
    // TODO: Assemble Python into code variable.
    var code = 'myRobot.sendCmd("sound,play,';
    code = code + number_soundnumber;
    code = code + '")';
    code = code + '\n';
    return code;
  };

  Blockly.Blocks['soundpause'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Sesi durdur");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Python['soundpause'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'myRobot.sendCmd("sound,pause")';
    code = code + '\n';
    return code;
  };

  Blockly.Blocks['soundresume'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Sesi devam ettir");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Python['soundresume'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'myRobot.sendCmd("sound,resume")';
    code = code + '\n';
    return code;
  };

  Blockly.Blocks['soundstop'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Sesi tamamen kapat");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Python['soundstop'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'myRobot.sendCmd("sound,dur")';
    code = code + '\n';
    return code;
  };

  Blockly.Blocks['soundvolplus'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Sesi artır");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Python['soundvolplus'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'myRobot.sendCmd("sound,vol,+")';
    code = code + '\n';
    return code;
  };

  Blockly.Blocks['soundvolminus'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Sesi azalt");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Python['soundvolminus'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'myRobot.sendCmd("sound,vol,-")';
    code = code + '\n';
    return code;
  };


  Blockly.Blocks['connrobot'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Robota bağlan");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Python['connrobot'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'from CRobot import CRobot';
    code = code + '\n';
    code = code + '\n';
    code = code + 'myRobot = CRobot()';
    code = code + '\n';
    code = code + '\n';
    return code;
  };

  Blockly.Blocks['time_sleep'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldNumber(0, 0), "secval")
          .appendField("saniye bekle");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Python['time_sleep'] = function(block) {
    var number_secval = block.getFieldValue('secval');
    // TODO: Assemble Python into code variable.
    var code = 'myRobot.wait(';
    code = code + number_secval;
    code = code + ')';
    code = code + '\n';
    return code;
  };