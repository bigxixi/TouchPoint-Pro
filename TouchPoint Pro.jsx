//Script by bigxixi. 
//Contact: xixi@bigxixi.com
(function ALL(thisObj)
{
	var drawUI = UI(thisObj);
	if(drawUI instanceof Window){
			drawUI.center();
			drawUI.show();
	}
    	function UI(thisObj){
            //UI strings
            var version = "1.0 beta";
            var scriptName = "Touch Point Pro " + version;
            var scriptDSP = "A Script to make touchpoint effects easier.";
            //------
            var pPalText = "Point";
            var rText = "Radius:";
            var oText = "Opacity:";
            var sText = "Shadow:";
            var tText = "Tail:";
            var eText = "Extrude:";
            var pColorText = "Color:";
            var pickColor = "Pick";
            var hexText = "Hex:";
            var addPText = "Add a Point";
            var clsPText = "Clear Points";
            //------
            var aPalText = "Actions";
            var clickText = "Add Click";
            var dClickText = "Add Double Click";
            var pdText = "Hold On";
            var puText = "Hold Release";
            var resetText = "Reset Actions";
            var clsText = "Clear Actions";
            var clsRippleBtnText = "Remove Ripples";
            var rippleBtnText = "Add Ripple(beta)";
            var helpBtnText = "Help";
            //------
            var pName = "TouchPoint";
            var HDconfirm = "You are adding a 'Hold On' action, make sure there is a 'Hold Release' action after it.";
            var HRconfirm = "You are adding a 'Hold Release' action, make sure there is a 'Hold On' action before it.";
            var warning1 = "Please active a compotision.";
            var warning2 = "Please select a touchpoint layer.";
            var warning3 = "Please select at lease one layer.";
            var varning4 = "no marker to define click actions";
            var helpText = "Not finished yet...";
            //------
            var shapeText = "Shape";
            var coText = "Color and Opacity";
            var baText = "Bevel and Alpha";
            var dsText = "Drop Shadow";
            var ttText = "Tail";
            var tagTextClick = "Click";
            var tagTextDoubleClick = "DoubleClick";
            var tagTextHoldOn = "Hold On";
            var tagTextHoldRelease = "Hold Release";
            var waveText = "Ripple for layer: ";
            var rippleColorText = "Ripple Color";
            var rippleOffsetText = "Ripple Offset";
            //for Chinese users
            if($.locale.toLowerCase() == "zh_cn"){
            scriptDSP = "本脚本用于添加触控点及各种点击拖拽效果。";
            //------
            pPalText = "添加点";
            rText = "半  径：";
            oText = "透明度：";
            sText = "阴  影：";
            tText = "拖  尾：";
            eText = "凸  起：";
            pColorText = "点颜色：";
            pickColor = "选取颜色：";
            hexText = "色值：";
            addPText = "添加点";
            clsPText = "清除所有点";
            //------
            aPalText = "动作";
            clickText = "单击";
            dClickText = "双击";
            pdText = "长按-按下";
            puText = "长按-松开";
            resetText = "重设动作";
            clsText = "清除动作";
            rippleBtnText = "涟漪效果(beta)";
            clsRippleBtnText = "清除所有涟漪";
            helpBtnText = "帮助";
            //------
            pName = "触控点";
            HDconfirm = "你添加了一个'长按-按下（Hold On）'动作，请确保之后有一个'长按-松开（Hold Release）'动作。";
            HRconfirm = "你添加了一个'长按-松开（Hold Release）'动作，请确保之前有一个'长按-按下（Hold On）'动作。";
            warning1 = "请选中一个打开的合成。";
            warning2 = "请选中本脚本生成的触控点图层。";
            warning3 = "请至少选中一个图层。";
            warning4 = "未找到动作标记！";
            helpText = "帮助文档还没想好，有问题请发邮件到xixi@bigxixi.com";
            //------
            shapeText = "形状";
            coText = "颜色和透明度";
            baText = "凸起";
            dsText = "阴影";
            ttText = "拖尾";
            tagTextClick = "点击";
            tagTextDoubleClick = "双击";
            tagTextHoldOn = "长按-按下";
            tagTextHoldRelease = "长按-松开";
            waveText = "涟漪-图层: ";
            rippleColorText = "涟漪颜色";
            rippleOffsetText = "涟漪偏移";
            }
            //draw UI
            var defColor = [0,1,1];
            var win = (thisObj instanceof Panel) ? thisObj : new Window("palette",scriptName,[0,0,300,395],{resizeable:false,});
            grp1 = win.add("group",{x:0, y:0, width:300, height:32});
            grp1.orientation = "colunm";
            dsp1 = grp1.add("statictext",{x:9, y:5, width:260, height:30},scriptDSP);
            helpBtn = grp1.add("button",{x:260, y:9, width:25, height:25},"?");
            pal1 = win.add("panel",{x:5, y:40, width:290, height:190},pPalText);
            rText = pal1.add("statictext",{x:45, y:8, width:50, height:30},rText);
            rValue = pal1.add("edittext",{x:90, y:8, width:34, height:30},50);
            aText = pal1.add("statictext",{x:45, y:42, width:50, height:30},oText);
            alphaValue = pal1.add("edittext",{x:90, y:42, width:34, height:30},0.8);
            shadowText = pal1.add("statictext",{x:45, y:76, width:50, height:30},sText);
            shadowValue = pal1.add("edittext",{x:90, y:76, width:34, height:30},20);
            tileText = pal1.add("statictext",{x:45, y:111, width:50, height:30},tText);
            tileValue = pal1.add("edittext",{x:90, y:111, width:34, height:30},0.05);
            bevelText = pal1.add("statictext",{x:45, y:146, width:50, height:30},eText);
            bevelValue = pal1.add("edittext",{x:90, y:146, width:34, height:30},5);
            checkShadow = pal1.add("checkbox",{x:15, y:85, width:20, height:20});
            checkShadow.value = 1;
            checkTail = pal1.add("checkbox",{x:15, y:120, width:20, height:20});
            checkTail.value = 1;
            checkBevel = pal1.add("checkbox",{x:15, y:155, width:20, height:20});
            checkBevel.value = 1;
            pickText = pal1.add("statictext",{x:155, y:8, width:50, height:30},pColorText);
            pickBtn = pal1.add("button",{x:212, y:8, width:58, height:30},pickColor);
            colorPrev = pal1.add("group",{x:155, y:40, width:115, height:30});
            colorPrev.graphics.backgroundColor = colorPrev.graphics.newBrush(colorPrev.graphics.BrushType.SOLID_COLOR, defColor, 1);
            redValue = pal1.add("statictext",{x:155, y:76, width:40, height:25},"R:"+0);
            greenValue = pal1.add("statictext",{x:195, y:76, width:40, height:25},"G:"+255);
            blueValue = pal1.add("statictext",{x:245, y:76, width:40, height:25},"B:"+255);
            addPBtn = pal1.add("button",{x:155, y:106, width:115, height:30},addPText);
            clsPBtn = pal1.add("button",{x:155, y:145, width:115, height:30},clsPText);
            pal2 = win.add("panel",{x:5, y:230, width:290, height:160},aPalText);
            addClickBtn = pal2.add("button",{x:10, y:10, width:115, height:30},clickText);
            addDBClickBtn = pal2.add("button",{x:155, y:10, width:115, height:30},dClickText);
            addHoldOnBtn = pal2.add("button",{x:10, y:45, width:115, height:30},pdText);
            addHoldRelBtn = pal2.add("button",{x:155, y:45, width:115, height:30},puText);
            resetBtn = pal2.add("button",{x:10, y:80, width:115, height:30},resetText);
            clsBtn = pal2.add("button",{x:155, y:80, width:115, height:30},clsText);
            rippleBtn = pal2.add("button",{x:10, y:115, width:115, height:30},rippleBtnText);
            clsRipple = pal2.add("button",{x:155, y:115, width:115, height:30},clsRippleBtnText);
            //link buttons with functions
            pickBtn.onClick = function(){
                var myDecColor = $.colorPicker();
                var r = myDecColor >> 16;
                var g = (myDecColor & 0x00ff00) >> 8;
                var b = myDecColor & 0xff;
                defColor = [r/256,g/256,b/256];
                colorPrev.graphics.backgroundColor = colorPrev.graphics.newBrush(colorPrev.graphics.BrushType.SOLID_COLOR, defColor, 1);
                redValue.text = "R:"+r;
                greenValue.text = "G:"+g;
                blueValue.text = "B:"+b;
                hexInput.text = myDecColor.toString(16).toUpperCase();
            }
            addPBtn.onClick = function(){
                if((app.project.activeItem == null) || !(app.project.activeItem instanceof CompItem)){
                        alert(warning1, scriptName);
                }else{
                    app.beginUndoGroup("addPoint");
                    var r = rValue.text;
                    var bevel = bevelValue.text;
                    var shadow = shadowValue.text;
                    var tile = tileValue.text;
                    var color = defColor;
                    var alpha = alphaValue.text;
                    addPoint(r,alpha,bevel,shadow,tile,color);
                    app.endUndoGroup();                      
                }
            }
            addClickBtn.onClick = function(){
                app.beginUndoGroup("Click");
                var ly = app.project.activeItem.selectedLayers;
                var curTime = app.project.activeItem.time;
                if(ly.length == 0 || ly.length >1){
                    alert(warning1);
                }else if(ly[0].comment != "XTouchPoint"){
                    alert(warning2);
                    
                }else{
                    addClick(ly[0],curTime);
                }
                app.endUndoGroup();
            }
            addDBClickBtn.onClick = function(){
                app.beginUndoGroup("doubleClick");
                var ly = app.project.activeItem.selectedLayers;
                var curTime = app.project.activeItem.time;
                if(ly.length == 0 || ly.length >1){
                    alert(warning1);
                }else if(ly[0].comment != "XTouchPoint"){
                    alert(warning2);
                    
                }else{
                    addDoubleClick(ly[0],curTime);
                } 
                app.endUndoGroup();              
            }
            addHoldOnBtn.onClick = function(){
                app.beginUndoGroup("holdon");
                var ly = app.project.activeItem.selectedLayers;
                var curTime = app.project.activeItem.time;
                if(ly.length == 0 || ly.length >1){
                    alert(warning1);
                }else if(ly[0].comment != "XTouchPoint"){
                    alert(warning2);
                    
                }else{
                    if(confirm(HDconfirm)){
                        addHoldOn(ly[0],curTime);
                    }
                }  
                app.endUndoGroup();             
            }
            addHoldRelBtn.onClick = function(){
                app.beginUndoGroup("holdrelease");
                var ly = app.project.activeItem.selectedLayers;
                var curTime = app.project.activeItem.time;
                if(ly.length == 0 || ly.length >1){
                    alert(warning1);
                }else if(ly[0].comment != "XTouchPoint"){
                    alert(warning2);
                    
                }else{
                    if(confirm(HDconfirm)){
                        addHoldRelease(ly[0],curTime);
                    } 
                }
                app.endUndoGroup();               
            }
            clsBtn.onClick = function(){
                app.beginUndoGroup("cls");
                var sLayers = app.project.activeItem.selectedLayers;
                if(sLayers.length > 0){
                    for(var l=0;l<sLayers.length;l++){
                        if(sLayers[l].comment == "XTouchPoint"){
                            clearAll(sLayers[l]);
                        }
                    }
                }else{
                    alert(warning3)
                }
                app.endUndoGroup();         
            }
            clsPBtn.onClick = function(){
                app.beginUndoGroup("clsP");
                var layers = app.project.activeItem.layers;
                for(var i=layers.length;i>0;i--){
                    if(layers[i].comment == "XTouchPoint"){
                        layers[i].remove();
                    }
                }  
                app.endUndoGroup();            
            }
            clsRipple.onClick = function(){
                app.beginUndoGroup("clsR");
                var layers = app.project.activeItem.layers;
                for(var i=layers.length;i>0;i--){
                    if(layers[i].comment == "XRipple"){
                        layers[i].remove();
                    }
                }
                app.endUndoGroup();
            }
            resetBtn.onClick = function(){
                app.beginUndoGroup("reset");
                var sLayers = app.project.activeItem.selectedLayers;
                if(sLayers.length > 0){
                    for(var l=0;l<sLayers.length;l++){
                        if(sLayers[l].comment == "XTouchPoint"){
                            resetKeys(sLayers[l]);
                        }
                    }
                }else{
                    alert(warning3)
                }    
                app.endUndoGroup();
            }
            rippleBtn.onClick = function(){
                app.beginUndoGroup("ripple");
                var sLayers = app.project.activeItem.selectedLayers;
                if(sLayers.length > 0){
                    for(var l=0;l<sLayers.length;l++){
                        addRipple(sLayers[l]);
                    }
                }else{
                    alert(warning3)
                }    
                app.endUndoGroup();      
            }
            helpBtn.onClick = function(){
                alert(helpText,"Help");
            }
            //functions
            function addPoint(r,alpha,bevel,shadow,tile,color){
                var exp = 'effect("'+ttText+'")("CC Smear-0001")+transform.position.valueAtTime(time-' + tile + ')-transform.position.valueAtTime(time);';
                var p = app.project.activeItem.layers.addSolid(color, pName, 2*r, 2*r, 1);
                p.comment = "XTouchPoint";
                p.Effects.addProperty("CC Radial ScaleWipe");
                p.property("ADBE Effect Parade").property("CC Radial ScaleWipe").name = shapeText;
                p.Effects.property("CC Radial ScaleWipe")("CC Radial ScaleWipe-0001").setValue(0.5);
                p.Effects.property("CC Radial ScaleWipe")("CC Radial ScaleWipe-0003").setValue(1);
                p.Effects.addProperty("ADBE Fill")("ADBE Fill-0002").setValue(color);
                p.Effects.property("ADBE Fill")("ADBE Fill-0005").setValue(alpha);
                p.property("ADBE Effect Parade").property("ADBE Fill").name = coText;
                p.Effects.addProperty("ADBE Bevel Alpha")("ADBE Bevel Alpha-0001").setValue(bevel);
                p.property("ADBE Effect Parade").property("ADBE Bevel Alpha").enabled = checkBevel.value;
                p.property("ADBE Effect Parade").property("ADBE Bevel Alpha").name = baText;
                p.Effects.addProperty("ADBE Drop Shadow")("ADBE Drop Shadow-0005").setValue(shadow);
                p.property("ADBE Effect Parade").property("ADBE Drop Shadow").enabled = checkShadow.value;
                p.property("ADBE Effect Parade").property("ADBE Drop Shadow").name = dsText;
                p.Effects.addProperty("CC Smear")("CC Smear-0001").setValue([r,r]);
                p.Effects.property("CC Smear")("CC Smear-0004").setValue(r);
                p.property("ADBE Effect Parade").property("CC Smear").name = ttText;
                p.Effects.property("CC Smear")("CC Smear-0002").expression = exp;
                p.property("ADBE Effect Parade").property("CC Smear").enabled = checkTail.value;
                p.selected = true;      
            }

            function addClick(pLayer,t){
                var tps = app.project.activeItem.frameDuration;
                var ease = new KeyframeEase(0, 100/3);
                var superEase = new KeyframeEase(0, 100);
                //add click
                var click = new MarkerValue(tagTextClick);
                pLayer.property("ADBE Marker").setValueAtTime(t, click);
                pLayer.transform.scale.setValueAtTime(t-2*tps,[100,100]);
                pLayer.transform.scale.setTemporalEaseAtKey(pLayer.transform.scale.nearestKeyIndex(t-2*tps), [ease,ease,ease], [ease,ease,ease]);
                pLayer.transform.scale.setValueAtTime(t,[50,50]);
                pLayer.transform.scale.setTemporalEaseAtKey(pLayer.transform.scale.nearestKeyIndex(t), [ease,ease,ease], [ease,ease,ease]);
                pLayer.transform.scale.setValueAtTime(t+4*tps,[100,100]);
                pLayer.transform.scale.setTemporalEaseAtKey(pLayer.transform.scale.nearestKeyIndex(t+2*tps), [superEase,superEase,superEase], [ease,ease,ease]);
            }

            function addHoldOn(pLayer,t){
                var tps = app.project.activeItem.frameDuration;
                var ease = new KeyframeEase(0, 100/3);
                var superEase = new KeyframeEase(0, 100);
                //add hold on
                var holdOn = new MarkerValue(tagTextHoldOn);
                pLayer.property("ADBE Marker").setValueAtTime(t, holdOn);
                pLayer.transform.scale.setValueAtTime(t-3*tps,[100,100]);
                pLayer.transform.scale.setTemporalEaseAtKey(pLayer.transform.scale.nearestKeyIndex(t-2*tps), [ease,ease,ease], [ease,ease,ease]);
                pLayer.transform.scale.setValueAtTime(t,[70,70]);
                pLayer.transform.scale.setTemporalEaseAtKey(pLayer.transform.scale.nearestKeyIndex(t), [superEase,superEase,superEase], [ease,ease,ease]);
            }
            function addHoldRelease(pLayer,t){
                var tps = app.project.activeItem.frameDuration;
                var ease = new KeyframeEase(0, 100/3);
                var superEase = new KeyframeEase(0, 100);
                //add hold release
                var holdRelease = new MarkerValue(tagTextHoldRelease);
                pLayer.property("ADBE Marker").setValueAtTime(t, holdRelease);
                pLayer.transform.scale.setValueAtTime(t,[70,70]);
                pLayer.transform.scale.setTemporalEaseAtKey(pLayer.transform.scale.nearestKeyIndex(t), [ease,ease,ease], [ease,ease,ease]);
                pLayer.transform.scale.setValueAtTime(t+5*tps,[100,100]);
                pLayer.transform.scale.setTemporalEaseAtKey(pLayer.transform.scale.nearestKeyIndex(t+2*tps), [superEase,superEase,superEase], [ease,ease,ease]);
            }
            function addDoubleClick(pLayer,t){
                var tps = app.project.activeItem.frameDuration;
                var ease = new KeyframeEase(0, 100/3);
                var superEase = new KeyframeEase(0, 100);
                //add click
                var click = new MarkerValue(tagTextDoubleClick);
                pLayer.property("ADBE Marker").setValueAtTime(t, click);
                pLayer.transform.scale.setValueAtTime(t-2*tps,[100,100]);
                pLayer.transform.scale.setTemporalEaseAtKey(pLayer.transform.scale.nearestKeyIndex(t-2*tps), [ease,ease,ease], [ease,ease,ease]);
                pLayer.transform.scale.setValueAtTime(t,[50,50]);
                pLayer.transform.scale.setTemporalEaseAtKey(pLayer.transform.scale.nearestKeyIndex(t), [ease,ease,ease], [ease,ease,ease]);
                pLayer.transform.scale.setValueAtTime(t+4*tps,[90,90]);
                pLayer.transform.scale.setTemporalEaseAtKey(pLayer.transform.scale.nearestKeyIndex(t+4*tps), [ease,ease,ease], [ease,ease,ease]);
                pLayer.transform.scale.setValueAtTime(t+6*tps,[50,50]);
                pLayer.transform.scale.setTemporalEaseAtKey(pLayer.transform.scale.nearestKeyIndex(t+6*tps), [ease,ease,ease], [ease,ease,ease]);
                pLayer.transform.scale.setValueAtTime(t+10*tps,[100,100]);
                pLayer.transform.scale.setTemporalEaseAtKey(pLayer.transform.scale.nearestKeyIndex(t+10*tps), [superEase,superEase,superEase], [ease,ease,ease]);
                }
            function clearAll(pLayer){           
                var layerKeys = pLayer.transform.scale.numKeys;
                var markerKeys = pLayer.property("ADBE Marker").numKeys;
                for(var i=layerKeys;i>0;i--){
                    pLayer.transform.scale.removeKey(i);
                }
                for(var k=markerKeys;k>0;k--){
                    pLayer.property("ADBE Marker").removeKey(k);
                }
                pLayer.transform.scale.setValue[100,100,100];           
            }

            function resetKeys(pLayer){
                var layerKeys = pLayer.transform.scale.numKeys;
                var markerKeys = pLayer.property("ADBE Marker").numKeys;
                for(var i=layerKeys;i>0;i--){
                    pLayer.transform.scale.removeKey(i);
                }
                pLayer.transform.scale.setValue[100,100,100];    
                for(var k=markerKeys;k>0;k--){
                    switch(pLayer.property("ADBE Marker").keyValue(k).comment){
                        case tagTextClick:
                            addClick(pLayer,pLayer.property("ADBE Marker").keyTime(k));
                            break;
                        case tagTextDoubleClick:
                            addDoubleClick(pLayer,pLayer.property("ADBE Marker").keyTime(k));
                            break;
                        case tagTextHoldRelease:
                            addHoldRelease(pLayer,pLayer.property("ADBE Marker").keyTime(k));
                            break;
                        case tagTextHoldOn:
                            addHoldOn(pLayer,pLayer.property("ADBE Marker").keyTime(k));
                            break;
                        default:
                            alert(waring4);
                    }
                } 
            }

            function addRipple(ly){
                var r=Math.max(ly.width,ly.height);
                var wv=app.project.activeItem.layers.addShape();
                    wv.name = waveText+ly.name;
                    wv.inPoint = app.project.activeItem.time;
                    wv.outPoint = app.project.activeItem.time + 0.5;
                    wv.Effects.addProperty("ADBE Fill")("ADBE Fill-0002").setValue([0,0,0]);
                    wv.property("ADBE Effect Parade").property("ADBE Fill").name = rippleColorText;
                    wv.Effects.addProperty("ADBE Point Control");
                    wv.property("ADBE Effect Parade").property("ADBE Point Control").name = rippleOffsetText;
                var exp1 = "inT = thisLayer.inPoint;\n" + 
                            "outT = thisLayer.outPoint;\n" + 
                            "R = easeOut(time,inT,outT,0," + r + ");\n" + 
                            "[R,R]";
                var exp2 = "inT = thisLayer.inPoint;\n" + 
                            "outT = thisLayer.outPoint;\n" + 
                            "linear(time,inT,outT,25,0);";
                var exp3 = "thisComp.layer('" + ly.name + "').transform.position";
                var exp4 = "thisComp.layer('" + ly.name + "').transform.rotation";
                var exp5 = "thisComp.layer('" + ly.name + "').transform.scale";
                var exp6 = "effect('" + rippleColorText + "')('ADBE Fill-0002')";
                var exp7 = "var a=effect('" + rippleOffsetText + "')('ADBE Point Control-0001');\n" + 
                           "var b=[0.5*thisComp.width,0.5*thisComp.height];\n" + 
                           "var c=a-b;\n" + 
                           "[c[0],c[1]]";
                var wv1 = wv.property("ADBE Root Vectors Group").addProperty("ADBE Vector Group");
                var circle = wv1.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Ellipse");
                    circle.property("ADBE Vector Ellipse Size").expression = exp1;
                    circle.property("ADBE Vector Ellipse Position").expression = exp7;
                var rec = wv1.property("ADBE Vectors Group").addProperty("ADBE Vector Shape - Rect");
                    rec.property("ADBE Vector Rect Size").setValue([ly.width,ly.height]);
                var merg = wv1.property("ADBE Vectors Group").addProperty("ADBE Vector Filter - Merge");
                    merg.property("ADBE Vector Merge Type").setValue(4);
                var rippleFill=wv1.property("ADBE Vectors Group").addProperty("ADBE Vector Graphic - Fill");
                    rippleFill.property("ADBE Vector Fill Color").expression = exp6;
                wv.transform.property("ADBE Position").expression = exp3;
                wv.transform.property("ADBE Scale").expression = exp5;
                wv.transform.property("ADBE Rotate Z").expression = exp4;
                wv.transform.property("ADBE Opacity").expression = exp2;
                wv.moveBefore(ly);
                wv.comment = "XRipple";
                ly.selected = true;
            }         
                            
            return win;
	}

})(this);




