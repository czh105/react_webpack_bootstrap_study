import React,{Component} from 'react';

import './myTask.css';
import './myTaskEvent';

var taskList = [{taskid:'1001',taskName:'test',phase:4,phases:5,headerId:'12345',headerName:'陈志红',abstract:'简单的介绍',container:'..............',start:'2020-9-15',end:'2020-10-25',count:'1245',identity:'组长',workstate:'正在审核',examineId:'10001',examineName:'czh'},
{taskid:'1002',taskName:'test',phase:4,phases:5,headerId:'12345',headerName:'陈志红',abstract:'简单的介绍',container:'..............',start:'2020-9-15',end:'2020-10-25',count:'1245',identity:'组长',workstate:'审核通过',examineId:'10001',examineName:'czh'},
{taskid:'1003',taskName:'test',phase:4,phases:5,headerId:'12345',headerName:'陈志红',abstract:'简单的介绍',container:'..............',start:'2020-9-15',end:'2020-10-25',count:'1245',identity:'组员',workstate:'审核通过',examineId:'10001',examineName:'czh'},
{taskid:'1004',taskName:'test',phase:4,phases:5,headerId:'12345',headerName:'陈志红',abstract:'简单的介绍',container:'..............',start:'2020-9-15',end:'2020-10-25',count:'1245',identity:'组员',workstate:'审核通过',examineId:'10001',examineName:'czh'},
{taskid:'1001',taskName:'test',phase:4,phases:5,headerId:'12345',headerName:'陈志红',abstract:'简单的介绍',container:'..............',start:'2020-9-15',end:'2020-10-25',count:'1245',identity:'组长',workstate:'正在审核',examineId:'10001',examineName:'czh'},
{taskid:'1002',taskName:'test',phase:4,phases:5,headerId:'12345',headerName:'陈志红',abstract:'简单的介绍',container:'..............',start:'2020-9-15',end:'2020-10-25',count:'1245',identity:'组长',workstate:'审核通过',examineId:'10001',examineName:'czh'},
{taskid:'1003',taskName:'test',phase:4,phases:5,headerId:'12345',headerName:'陈志红',abstract:'简单的介绍',container:'..............',start:'2020-9-15',end:'2020-10-25',count:'1245',identity:'组员',workstate:'审核通过',examineId:'10001',examineName:'czh'},
{taskid:'1004',taskName:'test',phase:4,phases:5,headerId:'12345',headerName:'陈志红',abstract:'简单的介绍',container:'..............',start:'2020-9-15',end:'2020-10-25',count:'1245',identity:'组员',workstate:'审核通过',examineId:'10001',examineName:'czh'},
{taskid:'1001',taskName:'test',phase:4,phases:5,headerId:'12345',headerName:'陈志红',abstract:'简单的介绍',container:'..............',start:'2020-9-15',end:'2020-10-25',count:'1245',identity:'组长',workstate:'正在审核',examineId:'10001',examineName:'czh'},
{taskid:'1002',taskName:'test',phase:4,phases:5,headerId:'12345',headerName:'陈志红',abstract:'简单的介绍',container:'..............',start:'2020-9-15',end:'2020-10-25',count:'1245',identity:'组长',workstate:'审核通过',examineId:'10001',examineName:'czh'},
{taskid:'1003',taskName:'test',phase:4,phases:5,headerId:'12345',headerName:'陈志红',abstract:'简单的介绍',container:'..............',start:'2020-9-15',end:'2020-10-25',count:'1245',identity:'组员',workstate:'审核通过',examineId:'10001',examineName:'czh'},
{taskid:'1004',taskName:'test',phase:4,phases:5,headerId:'12345',headerName:'陈志红',abstract:'简单的介绍',container:'..............',start:'2020-9-15',end:'2020-10-25',count:'1245',identity:'组员',workstate:'审核通过',examineId:'10001',examineName:'czh'},
{taskid:'1001',taskName:'test',phase:4,phases:5,headerId:'12345',headerName:'陈志红',abstract:'简单的介绍',container:'..............',start:'2020-9-15',end:'2020-10-25',count:'1245',identity:'组长',workstate:'正在审核',examineId:'10001',examineName:'czh'},
{taskid:'1002',taskName:'test',phase:4,phases:5,headerId:'12345',headerName:'陈志红',abstract:'简单的介绍',container:'..............',start:'2020-9-15',end:'2020-10-25',count:'1245',identity:'组长',workstate:'审核通过',examineId:'10001',examineName:'czh'},
{taskid:'1003',taskName:'test',phase:4,phases:5,headerId:'12345',headerName:'陈志红',abstract:'简单的介绍',container:'..............',start:'2020-9-15',end:'2020-10-25',count:'1245',identity:'组员',workstate:'审核通过',examineId:'10001',examineName:'czh'},
{taskid:'1004',taskName:'test',phase:4,phases:5,headerId:'12345',headerName:'陈志红',abstract:'简单的介绍',container:'..............',start:'2020-9-15',end:'2020-10-25',count:'1245',identity:'组员',workstate:'审核通过',examineId:'10001',examineName:'czh'},
{taskid:'1004',taskName:'test',phase:4,phases:5,headerId:'12345',headerName:'陈志红',abstract:'简单的介绍',container:'..............',start:'2020-9-15',end:'2020-10-25',count:'1245',identity:'组员',workstate:'审核通过',examineId:'10001',examineName:'czh'},
{taskid:'1001',taskName:'test',phase:4,phases:5,headerId:'12345',headerName:'陈志红',abstract:'简单的介绍',container:'..............',start:'2020-9-15',end:'2020-10-25',count:'1245',identity:'组长',workstate:'正在审核',examineId:'10001',examineName:'czh'},
{taskid:'1002',taskName:'test',phase:4,phases:5,headerId:'12345',headerName:'陈志红',abstract:'简单的介绍',container:'..............',start:'2020-9-15',end:'2020-10-25',count:'1245',identity:'组长',workstate:'审核通过',examineId:'10001',examineName:'czh'},
{taskid:'1003',taskName:'test',phase:4,phases:5,headerId:'12345',headerName:'陈志红',abstract:'简单的介绍',container:'..............',start:'2020-9-15',end:'2020-10-25',count:'1245',identity:'组员',workstate:'审核通过',examineId:'10001',examineName:'czh'},
{taskid:'1004',taskName:'test',phase:4,phases:5,headerId:'12345',headerName:'陈志红',abstract:'简单的介绍',container:'..............',start:'2020-9-15',end:'2020-10-25',count:'1245',identity:'组员',workstate:'审核通过',examineId:'10001',examineName:'czh'},
{taskid:'1004',taskName:'test',phase:4,phases:5,headerId:'12345',headerName:'陈志红',abstract:'简单的介绍',container:'..............',start:'2020-9-15',end:'2020-10-25',count:'1245',identity:'组员',workstate:'审核通过',examineId:'10001',examineName:'czh'},
{taskid:'1001',taskName:'test',phase:4,phases:5,headerId:'12345',headerName:'陈志红',abstract:'简单的介绍',container:'..............',start:'2020-9-15',end:'2020-10-25',count:'1245',identity:'组长',workstate:'正在审核',examineId:'10001',examineName:'czh'},
{taskid:'1002',taskName:'test',phase:4,phases:5,headerId:'12345',headerName:'陈志红',abstract:'简单的介绍',container:'..............',start:'2020-9-15',end:'2020-10-25',count:'1245',identity:'组长',workstate:'审核通过',examineId:'10001',examineName:'czh'},
{taskid:'1003',taskName:'test',phase:4,phases:5,headerId:'12345',headerName:'陈志红',abstract:'简单的介绍',container:'..............',start:'2020-9-15',end:'2020-10-25',count:'1245',identity:'组员',workstate:'审核通过',examineId:'10001',examineName:'czh'},
{taskid:'1004',taskName:'test',phase:4,phases:5,headerId:'12345',headerName:'陈志红',abstract:'简单的介绍',container:'..............',start:'2020-9-15',end:'2020-10-25',count:'1245',identity:'组员',workstate:'审核通过',examineId:'10001',examineName:'czh'}
];
var work_taskList = [{taskid:'1005',taskName:'test',phase:4,phases:5,headerId:'12345',headerName:'陈志红',abstract:'简单的介绍',container:'..............',start:'2020-9-15',end:'2020-10-25',count:'1245',identity:'组长',workstate:'正在审核',examineId:'10001',examineName:'czh'},
{taskid:'1006',taskName:'test',phase:4,phases:5,headerId:'12345',headerName:'陈志红',abstract:'简单的介绍',container:'..............',start:'2020-9-15',end:'2020-10-25',count:'1245',identity:'组长',workstate:'审核通过',examineId:'10001',examineName:'czh'},
{taskid:'1007',taskName:'test',phase:4,phases:5,headerId:'12345',headerName:'陈志红',abstract:'简单的介绍',container:'..............',start:'2020-9-15',end:'2020-10-25',count:'1245',identity:'组员',workstate:'审核通过',examineId:'10001',examineName:'czh'},
{taskid:'1008',taskName:'test',phase:4,phases:5,headerId:'12345',headerName:'陈志红',abstract:'简单的介绍',container:'..............',start:'2020-9-15',end:'2020-10-25',count:'1245',identity:'组员',workstate:'审核通过',examineId:'10001',examineName:'czh'},
];
var finish_taskList = [{taskid:'1009',taskName:'test',phase:4,phases:5,headerId:'12345',headerName:'陈志红',abstract:'简单的介绍',container:'..............',start:'2020-9-15',end:'2020-10-25',count:'1245',identity:'组长',workstate:'正在审核',examineId:'10001',examineName:'czh'},
{taskid:'1010',taskName:'test',phase:4,phases:5,headerId:'12345',headerName:'陈志红',abstract:'简单的介绍',container:'..............',start:'2020-9-15',end:'2020-10-25',count:'1245',identity:'组长',workstate:'审核通过',examineId:'10001',examineName:'czh'},
{taskid:'1011',taskName:'test',phase:4,phases:5,headerId:'12345',headerName:'陈志红',abstract:'简单的介绍',container:'..............',start:'2020-9-15',end:'2020-10-25',count:'1245',identity:'组员',workstate:'审核通过',examineId:'10001',examineName:'czh'},
{taskid:'1012',taskName:'test',phase:4,phases:5,headerId:'12345',headerName:'陈志红',abstract:'简单的介绍',container:'..............',start:'2020-9-15',end:'2020-10-25',count:'1245',identity:'组员',workstate:'审核通过',examineId:'10001',examineName:'czh'},
];

export default class MyTask extends Component{
    constructor(props){
        super(props)
        this.state={
            prepareTaskList:taskList,
            workTaskList:work_taskList,
            finishTaskList:finish_taskList
        }
    }
    changeTaskState(e,taskid,headerid,taskName){
        var target = e.target;
        var option = target.innerText;
        console.log(option);
        if(option === '提醒'){
            //发送消息给
        }
        else if(option === '开始'){
            
        }
    }
    render(){
        return(
            <div className='row task-row'>
                <div className='col-sm-4 col-md-4 col-lg-4 task-nostart'>
                    <div className='task-header'>未开始<span className="badge" style={{fontSize:'xx-small',color:"blue",backgroundColor:'white'}}>{this.state.prepareTaskList.length}</span></div>
                    <div className='panel-group' id='prepare'>
                        {
                            this.state.prepareTaskList.map((item,key)=>{
                                return(
                                    <div className='panel panel-info' key={key}>
                                        <div className="panel-heading">
                                            <h4 className='panel-title'>
                                                <a data-toggle='collapse' data-parent="#prepare" href={"#"+item.taskid}>
                                                    {item.taskName}
                                                </a>
                                                <span style={{fontSize:'xx-small',marginLeft:'5px'}}>{item.workstate}</span>
                                                <span style={{fontSize:'xx-small',marginLeft:'5px'}}>{item.start}~{item.end}</span>
                                                <span className='pull-right' style={{fontSize:'x-small'}} onClick={(e)=>this.changeTaskState(e,item.taskid,item.headerId,item.taskName)}>{ item.workstate === '正在审核' ? '提醒' :''}</span>
                                                <span className='pull-right' style={{fontSize:'x-small'}} onClick={(e)=>this.changeTaskState(e,item.taskid,item.headerId,item.taskName)}>{ (item.workstate !== '正在审核' && item.identity === '组长') ? '开始' :''}</span>
                                            </h4>
                                            
                                        </div>
                                        <div id={item.taskid} className="panel-collapse collapse">
                                            <div className="panel-body">
                                                <span>项目名称：{item.taskName}</span>
                                                <br/>
                                                <span className='font-xsmall'>身份:{item.identity}</span>
                                                <br/>
                                                <span className='font-xsmall'>组长:{item.headerName}</span>
                                                <br />
                                                <span className='font-xxsmall'>阶段:{item.phase}/{item.phases}</span>
                                                <br />
                                                <span>简介：<span style={{fontSize:'xx-small'}}>{item.abstract}</span></span>
                                                <br/>
                                                <p>内容:{item.container}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }

                    </div>
                </div>
                
                
                <div className='col-sm-4 col-md-4 col-lg-4 task-work'>
                    <div className='task-header'>进行中...<span className="badge" style={{fontSize:'xx-small',color:"red",backgroundColor:'white'}}>{this.state.workTaskList.length}</span></div>
                    <div className='panel-group' id='work'>
                        {
                            this.state.workTaskList.map((item,key)=>{
                                return(
                                    <div className='panel panel-info' key={key}>
                                        <div className="panel-heading">
                                            <h4 className='panel-title'>
                                                <a data-toggle='collapse' data-parent="#work" href={"#"+item.taskid}>
                                                    {item.taskName}
                                                </a>
                                                <span style={{fontSize:'xx-small',marginLeft:'5px'}}>{item.workstate}</span>
                                                <span style={{fontSize:'xx-small',marginLeft:'5px'}}>{item.start}~{item.end}</span>
                                                <span className='pull-right' style={{fontSize:'x-small'}} onClick={(e)=>this.changeTaskState(e,item.taskid,item.headerId,item.taskName)}>{ item.workstate === '正在审核' ? '提醒' :''}</span>
                                                <span className='pull-right' style={{fontSize:'x-small'}} onClick={(e)=>this.changeTaskState(e,item.taskid,item.headerId,item.taskName)}>{ (item.workstate !== '正在审核' && item.identity === '组长') ? '开始' :''}</span>
                                            </h4>
                                        </div>
                                        <div id={item.taskid} className="panel-collapse collapse">
                                            <div className="panel-body">
                                                <span>项目名称：{item.taskName}</span>
                                                <br/>
                                                <span className='font-xsmall'>身份:{item.identity}</span>
                                                <br/>
                                                <span className='font-xsmall'>组长:{item.headerName}</span>
                                                <br />
                                                <span className='font-xxsmall'>阶段:{item.phase}/{item.phases}</span>
                                                <br />
                                                <span>简介：<span style={{fontSize:'xx-small'}}>{item.abstract}</span></span>
                                                <br/>
                                                <p>内容:{item.container}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }

                    </div>
                </div>
                <div className='col-sm-4 col-md-4 col-lg-4 task-finish'>
                    <div className='task-header'>完成<span className="badge" style={{fontSize:'xx-small',color:"blue",backgroundColor:'white'}}>{this.state.finishTaskList.length}</span></div>
                    <div className='panel-group' id='finish'>
                        {
                            this.state.finishTaskList.map((item,key)=>{
                                return(
                                    <div className='panel panel-info' key={key}>
                                        <div className="panel-heading">
                                            <h4 className='panel-title'>
                                                <a data-toggle='collapse' data-parent="#finish" href={"#"+item.taskid}>
                                                    {item.taskName}
                                                </a>
                                                <span style={{fontSize:'xx-small',marginLeft:'5px'}}>{item.start}~{item.end}</span>
                                            </h4>
                                            
                                        </div>
                                        <div id={item.taskid} className="panel-collapse collapse">
                                            <div className="panel-body">
                                                <span>项目名称：{item.taskName}</span>
                                                <br/>
                                                <span className='font-xsmall'>身份:{item.identity}</span>
                                                <br/>
                                                <span className='font-xsmall'>组长:{item.headerName}</span>
                                                <br />
                                                <span className='font-xxsmall'>阶段:{item.phase}/{item.phases}</span>
                                                <br />
                                                <span>简介：<span style={{fontSize:'xx-small'}}>{item.abstract}</span></span>
                                                <br/>
                                                <p>内容:{item.container}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }

                    </div>
                </div>
            </div>
        )
    }
}