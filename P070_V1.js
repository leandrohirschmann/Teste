$(document).ready(function(){
     //mostra a tabela Endereços Adicionais 
    // 183797 - Leandro
          
    if ($("#inpDsFlowElementAlias").val() == "T01") {
        $('#tblCentrosDistribuicao').hide();
        $("inp:cnpjDoCentro ")[0].setAttribute('required', 'N');
        $("inp:logradouro")[0].setAttribute('required', 'N');
        $("inp:numeroAdicional")[0].setAttribute('required', 'N');
        $("inp:complementoAdicional")[0].setAttribute('required', 'N');
        $("inp:bairroAdicional")[0].setAttribute('required', 'N');
        $("inp:municipioAdicional")[0].setAttribute('required', 'N');
        $("inp:ufAdicional ")[0].setAttribute('required', 'N');
        $("inp:cepAdicional")[0].setAttribute('required', 'N');
        $("inp:centroAtivo?")[0].setAttribute('required', 'N');

    }  

       //Esconde o botão excluir da tabela 
        if ($("#inpDsFlowElementAlias").val() != "T01") {
            
               
               $('#tblCentrosDistribuicao button:not(#BtnInsertNewRow)').hide();
                
                //Se campo solicitacaoNumeroRegistro for igual a Sim
                //tabela para adicionar Endereços Adicionais - Centros de Distribuição
                    if ($("inp:solicitacaoNumeroRegistro").val() != ""){
                        //$('#tblCentrosDistribuicao').hide();
                        hideTable();
                       
                    }else{

                        // Bloqueia os campos das linhas já preenchidas
                        $('inp:cnpjDoCentro ').prop('readonly',true);
                        $('inp:logradouro').prop('readonly',true);
                        $('inp:numeroAdicional').prop('readonly',true);
                        $('inp:complementoAdicional').prop('readonly',true);
                        $('inp:bairroAdicional').prop('readonly',true);
                        $('inp:municipioAdicional').prop('readonly',true);

                        $('inp:cepAdicional').prop('readonly',true);

                        // Bloqueia os selects, 
                       
                        $("inp:ufAdicional ").css({backgroundColor:'#E8E8E8  '});
                        $('inp:ufAdicional ').find('option:not(:selected)').prop('disabled', true).hide();
                        
                    }
                }

                // Adiciona o evento de liberar o preenchimento da última linha no botão de inserir
                // No Chrome, Mozilla
               if($('#tblCentrosDistribuicao tr:first button')[0]!=undefined)
               {
                if($('#tblCentrosDistribuicao tr:first button')[0].addEventListener){
                   $('#tblCentrosDistribuicao tr:first button').click(
                    function () {
                    
                        $('inp:cnpjDoCentro ').last().prop('readonly', false);
                        $('inp:logradouro').last().prop('readonly', false);
                        $('inp:numeroAdicional').last().prop('readonly', false);
                        $('inp:complementoAdicional').last().prop('readonly', false);
                        $('inp:bairroAdicional').last().prop('readonly', false);
                        $('inp:municipioAdicional').last().prop('readonly', false);
                        $('inp:cepAdicional').last().prop('readonly', false);
                        $('inp:ufAdicional ').last().css({backgroundColor:'#FFFFFF'}).find('option').prop('disabled', false).show();
                        $('#tblCentrosDistribuicao button:not(#BtnInsertNewRow)').last().show();

                    });
                 }
                     // No IE8
                    else{
                     $('#tblCentrosDistribuicao tr:first button')[0].attachEvent('onclick', 
                         function () {
            
                            $('inp:cnpjDoCentro ').last().prop('readonly', false);
                            $('inp:logradouro').last().prop('readonly', false);
                            $('inp:numeroAdicional').last().prop('readonly', false);
                            $('inp:complementoAdicional').last().prop('readonly',true);
                            $('inp:bairroAdicional').last().prop('readonly', false);
                            $('inp:municipioAdicional').last().prop('readonly', false);
                            $('inp:cepAdicional').last().prop('readonly', false);
                            $('inp:cepAdicional').last().prop('readonly', false);
                            $('inp:ufAdicional ').last().find('option:not(:selected)').prop('disabled', false);
                        
                        });
               
                        }
                }


    $("inp:solicitacaoTipoImportacao").change(function(){

                                                                                
        if($("inp:solicitacaoTipoImportacao").find("option:selected").text() == "Produtos do programa de análise parametrizada")
        {       

           $("inp:LIsubstituitiva")[0].setAttribute("required", "S");
           $("inp:LIsubstituitiva").closest("tr").show();
           $("#td0solicitacaoNumeroCertificado").show();
           $("inp:solicitacaoNumeroCertificado").closest("td").show();
           
           if($('inp:linkProcert').val() == ''){
                hideField('linkProcert');
            }else{
                showField('linkProcert');
            }
            $("#td0solicitacaoNumeroCertificado").css("color", "black");
            $("inp:solicitacaoNumeroCertificado")[0].setAttribute("required", "N");
        }

        else
        {
            $("inp:LIsubstituitiva")[0].setAttribute("required", "S");
            $("inp:LIsubstituitiva").closest("tr").show();

            checkCD();
         
            if($("inp:solicitacaoTipoImportacao").val() == '2'){
                showField('solicitacaoNumeroCertificado');
                if($('inp:linkProcert').val() == ''){
                hideField('linkProcert');
                }else{
                    showField('linkProcert');
                }
                hideField('linkProcert');
                $("#td0solicitacaoNumeroCertificado").css("color", "red");
                $("inp:solicitacaoNumeroCertificado")[0].setAttribute("required", "S");
            }else{
                hideField('solicitacaoNumeroCertificado');
                hideField('linkProcert');
            }
        }
        if($('inp:solicitacaoTipoImportacao').val() == 13){
            $('#td0nomeOCP').text('Nome do laboratório');
            $('#td0solicitacaoNumeroRegistro').show();
            $('#td1solicitacaoNumeroRegistro').show();
            $('inp:solicitacaoNumeroRegistro').show();
            $('inp:nomeOCP').removeAttr('required');

        }else{
            $('#td0nomeOCP').text('Nome do OCP');
            hideField('solicitacaoNumeroRegistro');
        }
        
    });

    //Esconde a tabela se o campo Número do Registro do Produto no Inmetro quando preechido
   
        $('inp:solicitacaoNumeroRegistro').keyup(function () {
        if($('inp:solicitacaoNumeroRegistro').val() == "") {
            showTable();
        }else{
            hideTable();
        }
        });
 
    



    //----INICIO DEMANDA 89758-----------
    
    //Telefone 9 ou 8 digitos
    $('input[mask="(##) #####.####"]').blur(function () {
        
        $(this).val().length == ($(this).attr('mask').length - 1) && $(this).val().indexOf('.') === 10 ? $(this).prop('old-val', $(this).val()).val($(this).prop('old-val').substring(0, $(this).prop('old-val').indexOf('.')-1) + '.' + $(this).prop('old-val').substring($(this).prop('old-val').indexOf('.')-1).replace('.','')) : [];

    });

    //Decide se o campo "LI original" deve ser exibido ao longo do processo
        if($("#inpDsFlowElementAlias").val() == "T01" || $("#inpDsFlowElementAlias").val() == "T04")
        {
            var showLiOriginal = false; //Sim = show

            $("inp:LIsubstituitiva").change(function(){

                if($(this).val() == "Não")
                {   
                    showLiOriginal = false;
                    $("inp:LI_original").closest("tr").hide();
                    $("inp:LI_original")[0].setAttribute('required', 'N');
                }

                else if($(this).val() == "Sim")
                {
                    showLiOriginal = true;
                    $("inp:LI_original").closest("tr").show();
                    $("inp:LI_original")[0].setAttribute('required', 'S');
                }


                //Testa se o numero da LI substituitiva nao é igual ao data
                $("inp:LI_original").blur(function(){

                    if ($(this).val() == $("inp:solicitacaoNumeroLI").val() && $(this).val() != "")
                    {
                        alert("O número da LI substituitiva não pode ser igual ao da LI original!");
                        $("inp:solicitacaoNumeroLI").val("");
                        $(this).val("");
                    }
                });

                $("inp:solicitacaoNumeroLI").blur(function(){

                    if ($(this).val() == $("inp:LI_original").val() && $(this).val() != "")
                    {
                        alert("O número da LI substituitiva não pode ser igual ao da LI original!");
                        $("inp:LI_original").val("");
                        $(this).val("");
                    }
                });
            });//fim .change
        }//fim IF t01


    //apropriacao da tarefa ao usuario que abri-la primeiro
    if($("#inpDsFlowElementAlias").val() == "T03.1" || $("#inpDsFlowElementAlias").val() == "T03.2")
    {

        if(document.forms[0].action.toLowerCase().indexOf("wfflow_execute_process.aspx") != -1) 
        {
            cryo_TaskClaimOwnershipWrapper();
            
        }
        
    }//FIM T03'S

    if($("[xid=\"divLIsubstituitiva\"]").prop("innerHTML") == "Sim" || $("inp:LIsubstituitiva").val() == "Sim")
    {
        $("inp:LI_original").closest("tr").show();
        $("inp:LI_original")[0].setAttribute('required', 'S');
    }

    else 
    {
        $("inp:LI_original").closest("tr").hide();
        $("inp:LI_original")[0].setAttribute('required', 'N');
    }
    
    //----FIM DEMANDA 89758---------------

    if($("#inpDsFlowElementAlias").val() == "T01")
    {
        $("inp:destaquesNCM").closest("tr").hide();
        //Esconde os labels Grupo e Descricao
        //$("#td0solicitacaoNCM_desc").hide();
        //$("#td0solicitacaoGrupo").hide();
        $("inp:solicitacaoNCM_desc").closest("tr").hide();
        $("inp:solicitacaoGrupo").closest("tr").hide();
        hideField('linkProcert');
    }
    
    FieldsToHideTipoImportacao = "solicitacaoPortaria,solicitacaoNumeroCertificado,solicitacaoPropostaLaboratorio,solicitacaoDataLaboratorio,nomeOCP,numeroTermoCompromisso,dataTermoCompromisso,solicitacaoNumeroRegistro";
    //FieldsToHideTipoImportacao = "";

    var alias = $("#inpDsFlowElementAlias").val();

    if(alias!="T01" && alias!="T04")
    {
        p70_HideFields(FieldsToHideTipoImportacao, false);
        FieldsToShow = $('inp:varCamposTipoImportacao').val().split(',');
        
        for(i=0;i<FieldsToShow.length;i++)
        {
            $("#td0"+FieldsToShow[i]).show();
            $("#td1"+FieldsToShow[i]).show();
            $("inp:"+FieldsToShow[i]).show();
        }
    }
    
    if (alias == "T01")
    {
        p70_HideFields(FieldsToHideTipoImportacao, true);
        p62_loadData();
    }
    else if(alias == "T04")
    {
        $("inp:destaquesNCM").closest("tr").hide();
        
        p70_HideFields(FieldsToHideTipoImportacao, false);
        FieldsToShow = $('inp:varCamposTipoImportacao').val().split(',');
        
        for(i=0;i<FieldsToShow.length;i++)
        {
            $("#td0"+FieldsToShow[i]).show();
            $("#td1"+FieldsToShow[i]).show();
            $("inp:"+FieldsToShow[i]).show();
        }
        
        //p70FillCombos();
    }
    
    //Faz com que os botões uma vez desabilitados pelo campo suggest voltem a ser ativados
    //$("inp:solicitacaoNumeroCertificado").blur(function(){cryo_BlockUnblockTaskButtons(false)});
    //if($('#inpDsFlowElementAlias').val()=="T01")
    //{
//  verificaSolicitacao();
    //}
    
    $('#divSuggestsolicitacaoNumeroCertificado').append('<div style="color:white; background-color: red;" id="semRegistroExistente">Não foram encontrados registros com os dados digitados</div>');
    $('inp:solicitacaoNumeroCertificado').removeAttr('onkeyup');
    $('inp:solicitacaoNumeroCertificado').prop("onkeyup", null );
    
    if($('inp:solicitacaoNumeroCertificado')[0].addEventListener){
        $('inp:solicitacaoNumeroCertificado').attr('onkeyup', 'atestadoKeyUp(this);certificadoReady(false);');
    }else{
        $('inp:solicitacaoNumeroCertificado')[0].attachEvent('onkeyup', function(){
            var valueAtestado = $('inp:solicitacaoNumeroCertificado')[0];
            var v = valueAtestado.value;
            atestadoKeyUp('inp:solicitacaoNumeroCertificado');
            certificadoReady(false);
        });
    }
    var solicitacaoText1 = 'Produtos certificados por Organismo de Avaliação da Conformidade (Sem registro de objeto)'
    var solicitacaoText2 = 'Produtos do programa de análise parametrizada'
    var solicitacao = $('inp:solicitacaoTipoImportacao').find(':selected').text();
    if(alias == 'T04' && (solicitacao == solicitacaoText1 || solicitacao == solicitacaoText1+' ' || solicitacao == solicitacaoText2 || solicitacao == solicitacaoText2+' ')){
        var cnpj = $('inp:cnpjcertificado').val();

        // Flag para verificar se vamos impedir ou não a sequência do processo
        var flagLoad = false;
        
        cnpj = cnpj.replace(/\./g,"");
        cnpj = cnpj.replace("-","");
        cnpj = cnpj.replace("/","");

        atestadoKeyUp($('inp:solicitacaoNumeroCertificado'));
        
        if(cnpj == ''){
            certificadoReady(false);
        }else{

            data = {
            situacao : 'Ativo',
            cpfCnpj : cnpj
            }
            //JSONP
            //Caso retorne e o json não possuir .Messange, significa que retornou uma lista de certificados;
            $.ajax({
               type: 'GET',
                                                            //-h
                url: '../applications/proxy.aspx?http://ws-prodcert-h.inmetro.gov.br/Certificado.svc/REST/ObterCertificadosPorCertificador/?callback=?',
                data: data,
                async: false,
                jsonpCallback: 'jsonCallback',
                contentType: "application/json",
                dataType: 'jsonp',
                success: function(json) { 
                    if(json.Message == undefined || (isIE() == true && json.Message !== null)){
                        for(var i = 0; i < json.length; i++){
                            // Se o número do atestado de conformidade já estiver preenchido e for válido
                            if(json[i].Numero == $('inp:solicitacaoNumeroCertificado').val()){
                                flagLoad = true;

                            }
                        }
                    }
                    
                    // Se é um certificado válido não bloqueia a sequência do processo
                    if(flagLoad)
                    {
                        // Remove a mensagem de obrigatoriedade do certificado
                        certificadoReady(true);
                        $('#divSuggestsolicitacaoNumeroCertificado').hide();
                        $('#divSuggestsolicitacaoNumeroCertificado a').hide();
                    }
                    else
                    {
                        // Adiciona a mensagem de obrigatoriedade do certificado
                        certificadoReady(false);
                        $('#divSuggestsolicitacaoNumeroCertificado').show();
                        $('#divSuggestsolicitacaoNumeroCertificado a').hide();
                        $('#semRegistroExistente').show();
                    }
                    
                }
            });
        }
    //$('#divSuggestsolicitacaoNumeroCertificado').hide();
    //$('#divSuggestsolicitacaoNumeroCertificado a').hide();
    }else{
        certificadoReady(true);    
    }
    
    verificaSolicitacao();
    
    Global.cnpj = $('inp:cnpjcertificado').val();
    $('inp:solicitacaoTipoImportacao').change(function(){
        $('inp:solicitacaoNumeroCertificado').val('');
        $('inp:linkProcert').val('');
        $('div[xid="divlinkProcert"]').find('a').remove();
        hideField('linkProcert');
        verificaSolicitacao();
        Global.cnpj = $('inp:cnpjcertificado').val();

    });
    $('inp:cnpjcertificado').blur(function(){
        val = $('inp:cnpjcertificado').val()
        //if(val != Global.cnpj){
        //$('inp:solicitacaoNumeroCertificado').val('');
        Global.cnpj = val;
        getRegistro();
        //}
    });

    // Demanda 474666
    if($('inp:solicitacaoTipoImportacao').val() == 13){
        $('#td0nomeOCP').text('Nome do laboratório');
        $('#td0solicitacaoNumeroRegistro').show();
        $('#td1solicitacaoNumeroRegistro').show();
        $('inp:solicitacaoNumeroRegistro').show();
        $('inp:nomeOCP').removeAttr('required');

    }else{
        $('#td0nomeOCP').text('Nome do OCP');
        hideField('solicitacaoNumeroRegistro');
    }
});

function changeRadioCNPJCertificado(){
    
    $('inp:solicitacaoNumeroCertificado').val('');
    $('inp:linkProcert').val('');
    $('div[xid="divlinkProcert"]').find('a').remove();
    hideField('linkProcert');
    verificaSolicitacao();
    Global.cnpj = $('inp:cnpjcertificado').val();

}

var Global = {cnpj:''};
//----INICIO DEMANDA 99073-----------
function verificaSolicitacao(){
    var text = $('inp:solicitacaoTipoImportacao_desc').val();
    var alias = $('#inpDsFlowElementAlias').val();
    var condicao1 = 'Produtos certificados por Organismo de Avaliação da Conformidade (Sem registro de objeto)'
    var condicao2 = 'Produtos do programa de análise parametrizada'
    if(text == condicao1 ||
        text == condicao1+' ' ||
        text == condicao2 ||
        text == condicao2+' '){
        showField('cnpjsolicit_da_certif');
        showField('cnpjcertificado');
        if(alias == 'T01' ||
            alias == 'T04'){
            if($('input[xname="inpcnpjsolicit_da_certif"]:checked').val() == "2. Não"){
                $('inp:cnpjcertificado').removeAttr('readonly');
                $('inp:cnpjcertificado').css('border-width', '2px');
            }else{
                
                $('input[xname="inpcnpjsolicit_da_certif"]:first').click();
                
                $('inp:cnpjcertificado').css('border-width', '0px');
                $('inp:cnpjcertificado').attr('readonly', true);
                $('inp:cnpjcertificado').val($('inp:cnpj').val());
            }
            getRegistro();
        } 
    }else{
        certificadoReady(true);
        hideField('cnpjsolicit_da_certif');
        hideField('cnpjcertificado');
        if(alias == 'T01' ||
            alias == 'T04'){ 
            $('inp:cnpjcertificado').val('');
            $('inp:cnpjsolicit_da_certif').removeAttr('checked');
            $('#divSuggestsolicitacaoNumeroCertificado').hide();
            //var a = $('inp:solicitacaoNumeroCertificado');
            //atestadoKeyUp(a);
           // if($('#BtnSend').val() !== undefined){
           //     $('#BtnSend').show();
            //}
        }   
    }
}

function getRegistro(){
    //if($('inp:solicitacaoNumeroCertificado').val() == ''){
        certificadoReady(false);
    //}
    $('#divSuggestsolicitacaoNumeroCertificado li').remove();
    var a = $('inp:solicitacaoNumeroCertificado');
    var cnpj = $('inp:cnpjcertificado').val();

    cnpj = cnpj.replace(/\./g,"");
    cnpj = cnpj.replace("-","");
    cnpj = cnpj.replace("/","");

    var flag = false;
    
    atestadoKeyUp(a);
    if(cnpj == ''){
        return;
    }
    data = {
    situacao : 'Ativo',
    cpfCnpj : cnpj
    }
    //JSONP
    /*Caso retorn e o json não possuir .Messange, é que retornou uma lista de certificados;*/
    $.ajax({
       type: 'GET',
                                                // -h
        url: '../applications/proxy.aspx?http://ws-prodcert-h.inmetro.gov.br/Certificado.svc/REST/ObterCertificadosPorCertificador/?callback=?',
        async: false,
        data: data,
        jsonpCallback: 'jsonCallback',
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) { 
            if(json.Message == undefined){
                for(var i = 0; i < json.length; i++){

                    $('#divSuggestsolicitacaoNumeroCertificado').append('<li id="'+json[i].Numero+'" endereco="' + json[i].Endereco + '"  onclick="atestadoOnClick(this);" class="suggest_link">'+json[i].Numero+'</li>');
                    // Barranco - 09/02/2015 Se possui um certificado preenchido, valida se é um dos retornados. Neste caso não bloqueia o processo
                    if(json[i].Numero == $('inp:solicitacaoNumeroCertificado').val()){
                        flag = true;
                    }
                }
                
                // Barranco - 09/02/2015 - Se o valor preenchido é um certificado válido, não bloqueia a sequência do processo
                if(flag)
                {
                    certificadoReady(true);
                    $('#divSuggestsolicitacaoNumeroCertificado').hide();
                    $('#divSuggestsolicitacaoNumeroCertificado li').hide();
                    return;
                }
                // Senão impede a sequência
                else
                {
                    certificadoReady(false);
                    // Adicionando a mensagem de que não foram encontrados os registros
                    $('#divSuggestsolicitacaoNumeroCertificado').show();
                    $('#divSuggestsolicitacaoNumeroCertificado li').hide();
                    $('#semRegistroExistente').show();
                }
                
                //Caso seja a T01 e a pessoa tenha preenchido o campo do atestado, quando altera o programa ele corrigo a consulta.
                //atestadoKeyUp(a);
            }   
        },
        error: function(e) {
            $('#divSuggestsolicitacaoNumeroCertificado').hide();
            $('#divSuggestsolicitacaoNumeroCertificado li').hide();
            return;
        }
    });

}


function atestadoKeyUp(e){  
    var text = $(e).val();
    if(text == '' || text == undefined){
        $('#divSuggestsolicitacaoNumeroCertificado').hide();
        $('#divSuggestsolicitacaoNumeroCertificado li').hide();
        $('inp:linkProcert').val('');
        $('div[xid="divlinkProcert"]').find('a').remove();
        hideField('linkProcert');
        return;
    }
    var count = $('li[id*="'+text.toUpperCase()+'"]').length;
    $('#divSuggestsolicitacaoNumeroCertificado li').hide();
    $('#semRegistroExistente').hide();
    if(text.length >= 3){
         if(count > 0){
            for(var i = 0; i < count; i++){
                if(i >= 10){
                    break;
                }
                $('#divSuggestsolicitacaoNumeroCertificado').show();
                $($('li[id*="'+text.toUpperCase()+'"]')[i]).show();
                }
         }else{
            $('#semRegistroExistente').show();
            $('#divSuggestsolicitacaoNumeroCertificado').show();
            $('#divSuggestsolicitacaoNumeroCertificado li').hide();
         }
    }else{
        $('#divSuggestsolicitacaoNumeroCertificado').hide();
        $('#divSuggestsolicitacaoNumeroCertificado li').hide();
    }
    //if($('#BtnSend').val() !== undefined){
    //    $('#BtnSend').hide();
    //}
}

function atestadoOnClick(e){
    var value = $(e).text();
    var endereco = $(e).attr('endereco');
    $('inp:solicitacaoNumeroCertificado').val(value);
    $('#divSuggestsolicitacaoNumeroCertificado').hide();
    $('#divSuggestsolicitacaoNumeroCertificado li').hide();
    endereco = endereco.replace(' ','%20');
    showField('linkProcert');
    $('inp:linkProcert').val(endereco);
    $('div[xid="divlinkProcert"]').find('a').remove();
    $('div[xid="divlinkProcert"]').append('<a target="_blank" href="'+endereco+'">'+endereco+'</a>');
    certificadoReady(true);
}

//executa no change do certificado
function certificadoReady(bool) {
    if ($("#controllers").length > 0) {
        var condicao = 'Produtos do programa de análise parametrizada';
        var text = $('inp:solicitacaoTipoImportacao_desc').val();
        var field = $('inp:solicitacaoNumeroCertificado').val();
        if (bool) {
            certificadoControllers("");
        }else if((text == condicao || text == condicao+' ') && field == ""){ /* Condição quando for analise parametrisada*/
            certificadoControllers("");
        }else{
            certificadoControllers("Não será possível prosseguir com a solicitação sem o preenchimento do número do atestado de conformidade.");
        }
    }
}

//esconde ou mostra os botoes se o certificado permitir
function certificadoControllers(msg) {
    if (msg != "") {
        $("#controllers").hide();
        if ($("#component-tip").length > 0) {
            $("#component-tip").show();
            $("#component-tip").html(msg);
        } else {
            $("<div class=\"controlers\" id=\"component-tip\">" + msg + "</div>").insertAfter("#controllers");
        }
    } else {
        $("#component-tip").hide();     
        $("#controllers").show();
    }
}
//----FIM DEMANDA 99073-----------


function p62_showJustify() {
    if($('inp:declaracaoSolicitada').val() != undefined && $('inp:produto').val() != undefined){
        var t = cryo_GetElementByXname("inpdeclaracaoSolicitada");
        var v = t.value;
        var i = v.substring(0, v.indexOf('.'));
        var p = cryo_GetElementByXname("inpproduto");

        cryo_HideField("justificativabrinquedo");
        cryo_HideField("justificativa");
        
        if(p.value.toLowerCase()=="brinquedos" && i=="I") {
            cryo_ShowField("justificativabrinquedo");
            cryo_HideField("justificativa");
        }else if (i=="I"){
            cryo_HideField("justificativabrinquedo");   
            cryo_ShowField("justificativa");
        }
        
        cryo_GetElementByXname("inpjustificativabrinquedo").onchange = function() {
            if(this.value.toLowerCase().indexOf('outros') >=0) {
                cryo_ShowField("justificativa");    
            }else {
                cryo_GetElementByXname("inpjustificativa").value = "";
                cryo_HideField("justificativa");    
            }
        }
    }
}

function p62_loadData() {
    coduser = $('inp:codUser').val();
    codflow = $('#inpCodFlow').val();
    $.ajax({
        type:'GET',
        url:'../Applications/GET_DQUAL_CLIENTES.aspx?CODFLOW='+codflow+'&CODUSER='+coduser,
        contentType:'application/xml',
        success: function(xml) {
            //$('inp:razaoSocial').val($(xml).find('razaoSocial').text());
            $('inp:endereco').val($(xml).find('endereco').text());
            $('inp:numero').val($(xml).find('numero').text());
            $('inp:complemento').val($(xml).find('complemento').text());
            $('inp:bairro').val($(xml).find('bairro').text());
            $('inp:municipio').val($(xml).find('municipio').text());
            $('inp:uf').val($(xml).find('uf').text());
            $('inp:cep').val($(xml).find('cep').text());
            $('inp:telefone').val($(xml).find('telefone').text());
        }
    }); 
}

function p62_formataCNPJ() {
    
    var f = cryo_GetElementByXname("inpcnpj");
    var c = f.value;
    var nc = "";

    if(c.length == 14) {
        nc = c.substring(0,2) + "." + c.substring(2,5) + "." + c.substring(5,8) + "/" + c.substring(8,12) + "-" + c.substring(12,14);       
    }else {
        nc = c.substring(0,3) + "." + c.substring(3,6) + "." + c.substring(6,9) + "-" + c.substring(9,11) ;
    }
    cryo_GetElementByXname("inpcnpj").value = nc;
    //cryo_GetElementByAttribute("xid", "divcnpj").innerHTML = nc;
}

/*function p70FillCombos(){
    
    codNCM = $('inp:solicitacaoNCM').val();
    codTipoImportacao = $('inp:solicitacaoTipoImportacao_cod').val();
    
    $.post("../Applications/dipac/p70/SelectNCM_89758.aspx?inpCodNCM=" + codNCM, function(data){
        $(data).find('row').each(function(value)
        {
            if($(this).find('codtipo') && $(this).find('tipo'))
            {
                $('inp:solicitacaoTipoImportacao').append('<option value="'+$(this).find('codtipo').text()+'">'+$(this).find('tipo').text()+'</option>');
            }
        });
        
        $('inp:solicitacaoTipoImportacao').val(codTipoImportacao);
    });
    
}*/

var lastCodNCM = "";

function clickSuggest(){
    
    $(".suggest_link").unbind();
    $(".suggest_link").click(function(){
        $("inp:solicitacaoNCM").blur();
        return;
    });
}

function p70_BlurNCM(){
    
    //$('#BtnSend').attr("disabled", true);
    //$('#Button1').attr("disabled", true);
    
    clickSuggest();
    
    setTimeout(function(){
    
        codNCM = $('inp:solicitacaoNCM').val();
    
        if(codNCM.length>3 && codNCM!= lastCodNCM)
        {
            $('inp:solicitacaoNCM_desc').prop('readonly',false);
            $('inp:solicitacaoGrupo').prop('readonly',false);
            //cryo_ClearCombo(cryo_GetElementByXname("inp"+"solicitacaoTipoImportacao"));
            /*
            $('select:[xname=inpsolicitacaoTipoImportacao] option').each(function(index, option) {
                $(option).remove();
            });
            */
            
            //p70_HideFieldsTipoImportacao();
            //p70_RemoveRequiredFilesTipoImportacao();

            $.post('../Applications/dipac/p70/SelectNCM_89758.aspx?inpCodNCM=' + codNCM, function(data){
                
                if($(data).find('ncm') && $(data).find('grupo'))
                {

                    //==============================INICIO DEMANDA 76312=============Rodrigo Beirão 15/05/2013=================================//
                    
                    //Zera o campo 'Grupo'
                    $('inp:solicitacaoGrupo').val('');
                    $('div[xid="divsolicitacaoGrupo"]').text('');
                    $('#td1solicitacaoGrupo').css({fontWeight: 'bold'});    
                    
                    //Mostra o campo 'Grupo' e 'Descrição'
                    $("inp:solicitacaoNCM_desc").closest("tr").show();
                    $("inp:solicitacaoGrupo").closest("tr").show();

                    //Testa se há destaque, isso vai determinar os campos a serem preenchidos e a maneira que o campo 'Grupo' vai ser populado
                    var TemDestaque = false;

                    if($(data).find('destaque').text().length == 0) //Não existe Destaque
                    {
                        //O campo 'Destaques NCM' não aparece e não precisa ser preenchido
                        $("inp:destaquesNCM").closest("tr").hide();
                        $("inp:destaquesNCM")[0].setAttribute('required', 'N');
                        
                        TemDestaque = false;
                    }

                    else //Existe destaque
                    {
                        //Mostra o campo 'Destaques NCM' e torna obrigatório o preenchimento dele
                        $("inp:destaquesNCM").closest("tr").show();
                        $("inp:destaquesNCM")[0].setAttribute('required', 'S');
                        $("#td0destaquesNCM").attr("style", "color:red")
                        TemDestaque = true;
                    }


                    if(TemDestaque)
                    {
                        
                        //Esvazia o select box
                        $("inp:destaquesNCM").empty();
                        $("inp:destaquesNCM").append('<option value="">Selecione um item</option>');
                        
                        //Preenche o select box com os destaques
                        $(data).find('destaque').each(function(){
                            $("inp:destaquesNCM").append("<option value='"+$(this).text()+"'>"+$(this).text()+"</option>");

                        }); 

                        //Remove os elementos repetidos
                        var seen = {};
                        $("inp:destaquesNCM").children().each(function() 
                        {
                            var txt = $(this).clone().wrap('<select>').parent().html();
                            if (seen[txt]){ $(this).remove(); }
                            
                            else { seen[txt] = true; }
                        });
                    }
                
                    //==============================FIM DEMANDA 76312======================================================//


                    $('inp:solicitacaoNCM_desc').val( $(data).find('ncm').first().text() );
                    $('div[xid="divsolicitacaoNCM_desc"]').text( $(data).find('ncm').first().text() );
                    $('#td1solicitacaoNCM_desc').css({fontWeight: 'bold'});
                    
                    //=========EDITADO DURANTE DEMANDA 76312 - Agora caso exista 'Destaque', o campo 'Grupo' é populado com o grupo do Destaque
                    if(TemDestaque)
                    {

                        $("inp:destaquesNCM").change(function(){

                            
                            //retorna o indice do destauqe na lista
                            function getIndice()
                            {
                                for(i = 0; i< $(data).find('destaque').text().length; i++)
                                {
                                    if( $($(data).find('destaque')[i]).text() == $('inp:destaquesNCM').find(":selected").text())
                                    {
                                        return i;
                                    }
                                }
                            }

                            //Modifica o valor do grupo
                            $('inp:solicitacaoGrupo').val($($(data).find('grupodestaque')[getIndice()]).text());
                            $('div[xid="divsolicitacaoGrupo"]').text($($(data).find('grupodestaque')[getIndice()]).text());
                            $('#td1solicitacaoGrupo').css({fontWeight: 'bold'});    

                        }); //fim .change
                        

                    }

                    else //Caso não existe Destaque o campo é preenchido como antigamente.
                    {
                        $('inp:solicitacaoGrupo').val( $(data).find('grupo').first().text() );
                        $('div[xid="divsolicitacaoGrupo"]').text($(data).find('grupo').first().text());
                        $('#td1solicitacaoGrupo').css({fontWeight: 'bold'});    
                    }
                }
                
                //$('inp:solicitacaoTipoImportacao').append('<option value="">Selecione um item</option>');
                /*$(data).find('row').each(function(value)
                {
                    if($(this).find('codtipo') && $(this).find('tipo').text()!="")  
                    {
                        var thing = '<option value="'+$(this).find('codtipo').text()+'">'+$(this).find('tipo').text()+'</option>'
                        
                        $('inp:solicitacaoTipoImportacao').append(thing);
                        
                    }
                });*/
                
                /*
                //REMOVE ELEMENTOS DUPLICADOS DO DROPDOWN MENU-------------------------
                var seen = {};
                $("inp:solicitacaoTipoImportacao").children().each(function() 
                {
                    var txt = $(this).clone().wrap('<select>').parent().html();
                    
                    if (seen[txt]) 
                    {
                        $(this).remove();
                        
                    } 
                    
                    else 
                    {
                        seen[txt] = true;
                    }
                
                });*/
                //------------------------------------------------------------------------
                
                
                
                
                lastCodNCM = codNCM;
                $('inp:solicitacaoNCM_desc').prop('readonly',true);
                $('inp:solicitacaoGrupo').prop('readonly',true);
                
            });
        
        }
        
        //$('#BtnSend').attr("disabled", false);
        //$('#Button1').attr("disabled", false);
        
    }, 1000);   
}
                                                                                    
var p70arquivosTipoImportacao;

// Comentar
function p70_ChangeTipoImportacao(codTipo){
    
    p70_HideFieldsTipoImportacao();
    p70_RemoveRequiredFilesTipoImportacao();

    $.post('../Applications/dipac/p70/SelectTipoImportacao.aspx?inpCodTipo=' + codTipo.value, function(data){
        
        $(data).find('row').each(function(value)
        {
            $('inp:varCamposTipoImportacao').val($(this).find('campos').text());
            p70camposTipoImportacao = $(this).find('campos').text().split(',');
            p70arquivosTipoImportacao = $(this).find('arquivos').text().split(';');
            
            if( $(this).find('arquivos').text()!="" )
            {
                $("#td0arquivosObrigatorios").show();
                $("#td1arquivosObrigatorios").show();
                $("inp:arquivosObrigatorios").show();
                $('div[xid="divarquivosObrigatorios"]').text( $(this).find('arquivos').text() );
                $('inp:arquivosObrigatorios').val( $(this).find('arquivos').text() );
                $('div[xid="divarquivosObrigatorios"]').css('color', 'red');
            }
            else
            {
                $("#td0arquivosObrigatorios").hide();
                $("#td1arquivosObrigatorios").hide();
                $("inp:arquivosObrigatorios").hide();
                $('div[xid="divarquivosObrigatorios"]').text('');
                $("inp:arquivosObrigatorios").val('');
            }
            
            for(i=0;i<p70camposTipoImportacao.length;i++)
            {
                if(+p70camposTipoImportacao[i]!="")
                {
                    $("#td0"+p70camposTipoImportacao[i]).show();
                    $("#td1"+p70camposTipoImportacao[i]).show();
                    $("inp:"+p70camposTipoImportacao[i]).show();
                    if($("inp:solicitacaoTipoImportacao").val() == '14' && p70camposTipoImportacao[i] == "solicitacaoNumeroCertificado"){
                        $("inp:LIsubstituitiva").removeAttr("required");
                    }else{
                        cryo_SetObjectPropertyValue(cryo_GetElementByXname("inp"+p70camposTipoImportacao[i]), "required", "S");
                    }
                    
                    //Tira a obrigatoriedade do "Número do Registro do Produto no Inmetro"
                    cryo_SetObjectPropertyValue(cryo_GetElementByXname("inpsolicitacaoNumeroRegistro"), "required", "N"); 
                }
            }


            if($("inp:solicitacaoTipoImportacao").find("option:selected").val() == "15"){
                    $("inp:solicitacaoNumeroRegistro")[0].setAttribute("required", "S");  
                    $("#td0solicitacaoNumeroRegistro").append('<span id="asteriscoSolicitacaoNumeroRegistro" style="color: red;"> *</span>');
                    hideTable();
            }
                else{
                    //Tira a obrigatoriedade do "Número do Registro do Produto no Inmetro"
                    cryo_SetObjectPropertyValue(cryo_GetElementByXname("inpsolicitacaoNumeroRegistro"), "required", "N"); 
                    $("#asteriscoSolicitacaoNumeroRegistro").remove();
                     showTable();
                }


            
            for(j=0;j<p70arquivosTipoImportacao.length;j++)
            {
                p70_RequiredFile(p70arquivosTipoImportacao[j],'S');
                
            }
        });

        /*if($('inp:solicitacaoTipoImportacao').val() == 13){
            $('#td0nomeOCP').text('Nome do laboratório');
            $('#td0solicitacaoNumeroRegistro').show();
            $('#td1solicitacaoNumeroRegistro').show();
            $('inp:solicitacaoNumeroRegistro').show();
            $('inp:nomeOCP').removeAttr('required');

        }else{
            $('#td0nomeOCP').text('Nome do OCP');
            hideField('solicitacaoNumeroRegistro');
        }*/



    });
}

function p70_HideFieldsTipoImportacao(){
    
    camposTipoImportacao = $('inp:varCamposTipoImportacao').val();
    if(camposTipoImportacao!="")
    {
        p70camposTipoImportacao = camposTipoImportacao.split(',');
        for(i=0;i<p70camposTipoImportacao.length;i++)
        {
            if(p70camposTipoImportacao[i]!="")
            {
                $("#td0"+p70camposTipoImportacao[i]).hide();
                $("#td1"+p70camposTipoImportacao[i]).hide();
                $("inp:"+p70camposTipoImportacao[i]).hide();
                $("inp:"+p70camposTipoImportacao[i]).val('');
                cryo_SetObjectPropertyValue(cryo_GetElementByXname("inp"+p70camposTipoImportacao[i]), "required", "");
            }
        }
    }
}

function p70_HideFields(FieldsToHide, value){
    
    fields = FieldsToHide.split(',');
    
    for(i=0;i<fields.length;i++)
    {
        if(fields[i]!="")
        {
            $("#td0"+fields[i]).hide();
            $("#td1"+fields[i]).hide();
            $("inp:"+fields[i]).hide();
            
            if(value)
            {
                $("inp:"+fields[i]).val('');
            }
            cryo_SetObjectPropertyValue(cryo_GetElementByXname("inp"+fields[i]), "required", "");
        }
    }
}

function p70_RemoveRequiredFilesTipoImportacao(){
    
    if($.isArray(p70arquivosTipoImportacao))
    { 
        for(i=0;i<p70arquivosTipoImportacao.length;i++)
        { 
            p70_RequiredFile(p70arquivosTipoImportacao[i],'N'); 
        } 
    }
}

function p70_RequiredFile(fileName, required)
{
    
    fileList = document.getElementById("inp"+"DsFileList");
    if(required.toUpperCase()=='S')
    {
        fileList.value = fileName;
    }
    else
    {
        fileList.value = "";
    }
}

function getSelectedText(select,idCampoTexto){ 
    
    $("inp:"+idCampoTexto).val(select.children("option:selected").text()); 
}

function getSelectedValue(select,idCampoCodigo){ 
    
    $("inp:"+idCampoCodigo).val(select.children("option:selected").val()); 
}

function demanda256603()
{

    $("inp:solicitacaoTipoImportacao").change(function(){

        if($("inp:solicitacaoTipoImportacao").find("option:selected").text() == "Produtos do programa de análise parametrizada")
        {           
            $("inp:LIsubstituitiva")[0].setAttribute("required", "");
            $("inp:LIsubstituitiva").hide();
        }

        else
        {
            $("inp:LIsubstituitiva")[0].setAttribute("required", "");
            $("inp:LIsubstituitiva").show();
        }

    });
}

function showField(id){
    //Pega ID e com ele mostra as td's desse campo e coloca a obrigatoriedade
    $('#td0'+id).show();
    $('#td1'+id).show();
    $('inp:'+id)[0].setAttribute('required','S');
}

function hideField(id){
    //Pega ID e com ele esconde as td's desse campo e retira a obrigatoriedade
    $('#td0'+id).hide();
    $('#td1'+id).hide();
    $('inp:'+id)[0].setAttribute('required','N');
}


   function changeHiddenField(id)
{
    $("div[xid='div"+id+"']").text( $("inp:"+id).val() );
    $("div[xid='div"+id+"']").css("fontWeight", "bold");
}



////Mostra a tabela e atribui a obrigatoriedade
//183797 - Leandro 
function checkCD(){
     //$("inp:ipem").val("Não");
     //if ($("inp:ipem").val() == "Não")
    
    if($("inp:solicitacaoTipoImportacao").find("option:selected").text() == "Produtos do programa de análise parametrizada" || $("inp:solicitacaoTipoImportacao").find("option:selected").text() == "Produtos registrados pelo Inmetro.")
         
     {
            $('#tblCentrosDistribuicao').show();
            $("inp:cnpjDoCentro ")[0].setAttribute('required', 'S');
            $("inp:logradouro")[0].setAttribute('required', 'S');
            $("inp:numeroAdicional")[0].setAttribute('required', 'S');
            $("inp:complementoAdicional")[0].setAttribute('required', 'N');
            $("inp:bairroAdicional")[0].setAttribute('required', 'S');
            $("inp:municipioAdicional")[0].setAttribute('required', 'S');
            $("inp:ufAdicional ")[0].setAttribute('required', 'S');
            $("inp:cepAdicional")[0].setAttribute('required', 'S');
            $("inp:centroAtivo?")[0].setAttribute('required', 'S');

        }else{
            $('#tblCentrosDistribuicao').hide();

            $("inp:cnpjDoCentro ")[0].setAttribute('required', 'N');
            $("inp:logradouro")[0].setAttribute('required', 'N');
            $("inp:numeroAdicional")[0].setAttribute('required', 'N');
            $("inp:complementoAdicional")[0].setAttribute('required', 'N');
            $("inp:bairroAdicional")[0].setAttribute('required', 'N');
            $("inp:municipioAdicional")[0].setAttribute('required', 'N');
            $("inp:ufAdicional ")[0].setAttribute('required', 'N');
            $("inp:cepAdicional")[0].setAttribute('required', 'N');
            $("inp:centroAtivo?")[0].setAttribute('required', 'N');

            }

}

function showTable(){
    $('#tblCentrosDistribuicao').show();
    $("inp:cnpjDoCentro ")[0].setAttribute('required', 'S');
    $("inp:logradouro")[0].setAttribute('required', 'S');
    $("inp:numeroAdicional")[0].setAttribute('required', 'S');
    $("inp:complementoAdicional")[0].setAttribute('required', 'N');
    $("inp:bairroAdicional")[0].setAttribute('required', 'S');
    $("inp:municipioAdicional")[0].setAttribute('required', 'S');
    $("inp:ufAdicional ")[0].setAttribute('required', 'S');
    $("inp:cepAdicional")[0].setAttribute('required', 'S');
    $("inp:centroAtivo?")[0].setAttribute('required', 'S');
    $('#BtnInsertNewRow').prop('disabled',false);
    $('#tblCentrosDistribuicao button:not(#BtnInsertNewRow)').prop('disabled',false);

           
}


function hideTable(){
    $('#tblCentrosDistribuicao').hide();
    $("inp:cnpjDoCentro ")[0].setAttribute('required', 'N');
    $("inp:logradouro")[0].setAttribute('required', 'N');
    $("inp:numeroAdicional")[0].setAttribute('required', 'N');
    $("inp:complementoAdicional")[0].setAttribute('required', 'N');
    $("inp:bairroAdicional")[0].setAttribute('required', 'N');
    $("inp:municipioAdicional")[0].setAttribute('required', 'N');
    $("inp:ufAdicional ")[0].setAttribute('required', 'N');
    $("inp:cepAdicional")[0].setAttribute('required', 'N');
    $("inp:centroAtivo?")[0].setAttribute('required', 'N');
}
//Fim 23/12/2015

function isIE(){
    
    var ms_ie = false;
    var ua = window.navigator.userAgent;
    var old_ie = ua.indexOf('MSIE ');
    var new_ie = ua.indexOf('Trident/');

    if ((old_ie > -1) || (new_ie > -1)) {
        ms_ie = true;
    }

    if ( ms_ie ) {
        return true;
    }
    else
    {
        return false;
    }
}