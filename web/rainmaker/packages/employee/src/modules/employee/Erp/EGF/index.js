import React, { Component } from "react";

class EGFFinance extends Component{

     constructor(props){
        super(props);
        this.onMessage = this.onMessage.bind(this);
        this.onFrameLoad = this.onFrameLoad.bind(this);
    }
     onFrameLoad(){
        console.log('iframe got loaded');
        document.getElementById('erp_iframe').style.display='block';
    }

    render(){ 
    
            let auth_token = localStorage.getItem("token"),
                  menuUrl = this.props.location.pathname,
                  loc = window.location,
                  subdomainurl,
                  hostname = loc.hostname,
                  winheight = window.innerHeight - 100,
                  erp_url,
                  tenantId = localStorage.getItem("tenant-id");

                if (hostname.search("dev") != -1) {
                  subdomainurl = hostname.substring(hostname.search("dev"), hostname.length);
                  erp_url = loc.protocol + "//" + localStorage.getItem("tenant-id").split(".")[1] + "-" + subdomainurl + menuUrl;
                } else if (hostname.search("qa") != -1) {
                  subdomainurl = hostname.substring(hostname.search("qa"), hostname.length);
                  erp_url = loc.protocol + "//" + localStorage.getItem("tenant-id").split(".")[1] + "-" + subdomainurl + menuUrl;
                } else if (hostname.search("uat") != -1) {
                  // subdomainurl = hostname.substring(hostname.search('uat'),hostname.length);
                  subdomainurl = "uat.egovernments.org";
                  erp_url = loc.protocol + "//" + localStorage.getItem("tenant-id").split(".")[1] + "-" + subdomainurl + menuUrl;
                } else {
                  subdomainurl = hostname.substring(hostname.indexOf(".") + 1);
                  erp_url = loc.protocol + "//" + localStorage.getItem("tenant-id").split(".")[1] + "." + subdomainurl + menuUrl;
                }

            // let erp_url='http://jalandhar.test.egov.com:8080'+menuUrl;
            console.log("ERP URL : "+erp_url);
            

            return (
                    <div>
                    <iframe name="erp_iframe" id="erp_iframe" height={winheight} width="100%"></iframe>
                     <form action={erp_url} id="erp_form" method="post" target="erp_iframe">
                        <input readOnly hidden="true" name="auth_token" value={auth_token}  />
                        <input readOnly hidden="true" name="tenantId"   value={tenantId} />
                    
                  </form>

                    </div>
                );
    }
    componentDidMount(){
        console.log('EGFFinance component mounted');
               
        window.addEventListener('message',this.onMessage,false);
        document.getElementById('erp_iframe').addEventListener('load',this.onFrameLoad);
       
    }
    componentDidUpdate(){
        console.log('componentDidUpdate method called');        
        document.forms['erp_form'].submit();    
    }
    onMessage(){
         console.log('event recieved from iframe client')
           // document.getElementById('erp_iframe').style.display='none';
           this.props.history.push('/landing-page');
    }

}

export default EGFFinance;
