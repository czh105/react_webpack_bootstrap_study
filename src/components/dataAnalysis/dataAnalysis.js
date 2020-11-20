import React,{Component} from 'react';

import './dataAnalysisEvent';
import './style.css';

export default class DataAnalysis extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return(
        <div className='item'>
            <div className='row up-item'>
                <div className='col-sm-2 col-md-2 col-lg-2'></div>
                <div id='chinamap' className='col-sm-7 col-md-7 col-lg-7'>中国地图</div>
                <div className='col-sm-3 col-md-3 col-lg-3'></div>
            </div>
            <div className='down-item'>
                sss
            </div>
        </div>)
    }
}