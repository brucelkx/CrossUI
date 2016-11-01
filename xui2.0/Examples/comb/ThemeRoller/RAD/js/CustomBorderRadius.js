Class('RAD.CustomBorderRadius', 'xui.Com',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"mainPane")
                .setLeft("1.6666666666666667em")
                .setTop("1.6666666666666667em")
                .setWidth("18.333333333333332em")
                .setHeight("14.166666666666666em")
                .setShadow(false)
                .setResizer(false)
                .setCaption("$(RAD.custom_dlg.bradius.Custom Border Radius)")
                .setMinBtn(false)
                .setMaxBtn(false)
                .setOverflow("hidden")
                .beforeClose("_ctl_panel4_beforeclose")
            );
            
            host.mainPane.append(
                xui.create("xui.UI.Block")
                .setHost(host,"bg")
                .setDock("fill")
                .setBorderType("inset")
                .setOverflow("hidden")
                );
            
            host.mainPane.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"r_sTL")
                .setDirtyMark(false)
                .setTop("0.8333333333333334em")
                .setWidth("16.666666666666668em")
                .setLabelSize("9em")
                .setLabelGap("0.3333333333333333em")
                .setLabelCaption("$(RAD.custom_dlg.bradius.Radius T$-Left)")
                .setType("counter")
                .setUnit("px")
                .setPrecision(0)
                .setIncrement(1)
                .setMin(0)
                .setMax(100)
                .afterUIValueSet("_r_cs_afteruivalueset")
                );
            
            host.mainPane.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"r_sTR")
                .setDirtyMark(false)
                .setTop("3.3333333333333335em")
                .setWidth("16.666666666666668em")
                .setLabelSize("9em")
                .setLabelGap("0.3333333333333333em")
                .setLabelCaption("$(RAD.custom_dlg.bradius.Radius T$-Right)")
                .setType("counter")
                .setUnit("px")
                .setPrecision(0)
                .setIncrement(1)
                .setMin(0)
                .setMax(100)
                .afterUIValueSet("_r_cs_afteruivalueset")
                );
            
            host.mainPane.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"r_sBL")
                .setDirtyMark(false)
                .setLeft("-0.08333333333333333em")
                .setTop("8.333333333333334em")
                .setWidth("16.666666666666668em")
                .setLabelSize("9em")
                .setLabelGap("0.3333333333333333em")
                .setLabelCaption("$(RAD.custom_dlg.bradius.Radius B$-Left)")
                .setType("counter")
                .setUnit("px")
                .setPrecision(0)
                .setIncrement(1)
                .setMin(0)
                .setMax(100)
                .afterUIValueSet("_r_cs_afteruivalueset")
                );
            
            host.mainPane.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"r_sBR")
                .setDirtyMark(false)
                .setTop("5.833333333333333em")
                .setWidth("16.666666666666668em")
                .setLabelSize("9em")
                .setLabelGap("0.3333333333333333em")
                .setLabelCaption("$(RAD.custom_dlg.bradius.Radius B$-Right)")
                .setType("counter")
                .setUnit("px")
                .setPrecision(0)
                .setIncrement(1)
                .setMin(0)
                .setMax(100)
                .afterUIValueSet("_r_cs_afteruivalueset")
                );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        _getValues:function(){
            var ns=this;
            return {
                tl:ns.r_sTL.getValue(),
                tr:ns.r_sTR.getValue(),
                bl:ns.r_sBL.getValue(),
                br:ns.r_sBR.getValue()
            };
        },
        _r_cs_afteruivalueset : function (profile){
            xui.resetRun("border_radius",this.setBR,0,null,this);
        },
        setBR:function(){
            var values = this._getValues(),v;
            if(!(parseInt(values.tl) || parseInt(values.tr) || parseInt(values.br) || parseInt(values.bl))){
                v='';
            }else{
                v=values.tl +"px "+ values.tr +"px "+ values.br +"px "+ values.bl+"px";
            }
            this.fireEvent("onChange",[v]);
        },
        init:function(prf,tplkey,prop,type){
            var ns=this,n;
            xui.merge(ns.properties,prop,'all');
            
            if(type==2){
                n=xui(xui.$getGhostDiv());
                n.css('border-radius',tplkey);
            }else{
                n=prf.getSubNode(tplkey);
            }
            ns.r_sTL.setValue(n.css("borderTopLeftRadius")||0,true);
            ns.r_sTR.setValue(n.css("borderTopRightRadius")||0,true);
            ns.r_sBL.setValue(n.css("borderBottomLeftRadius")||0);
            ns.r_sBR.setValue(n.css("borderBottomRightRadius")||0);
            n=null;
        },
        _ctl_panel4_beforeclose : function (profile){
            profile.boxing().hide();
            return false;
        }
    }
});
