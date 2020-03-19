import React, {Component} from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';

class ReceiveKey extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            value: localStorage.getItem("apikey"),
            copied: false
        };
    }



    render(){
        return(
            <div>
                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <input type="text" name="" id="input" class="form-control" value={this.state.value}  style={{width:"600px"}}/>
                   
                   
                    <CopyToClipboard text={this.state.value}
                        onCopy={() => this.setState({copied: true})}>
                         <button type="button" class="btn btn-success">COPY</button>
                    </CopyToClipboard>
                    {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
                    <button type="button" class="btn btn-warning">NEXT</button>
                </div>
            </div> 
        )
    }
}


export default ReceiveKey;