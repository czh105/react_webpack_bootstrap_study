/**
 * 任务审核列表()
 */
import React,{Component} from 'react';
import $ from 'jquery';

import './taskExamine.css';
const taskList=[
{taskid:'1001',taskName:'test',phase:4,phases:5,headerId:'12345',headerName:'陈志红',abstract:'简单的介绍',container:'..............',start:'2020-9-15',end:'2020-10-25',count:'1245'},
{taskid:'1002',taskName:'test',phase:4,phases:5,headerId:'12345',headerName:'陈志红',abstract:'简单的介绍',container:'..............',start:'2020-9-15',end:'2020-10-25',count:'1245'},
{taskid:'1003',taskName:'test',phase:4,phases:5,headerId:'12345',headerName:'陈志红',abstract:'简单的介绍',container:'..............',start:'2020-9-15',end:'2020-10-25',count:'1245'},
{taskid:'1003',taskName:'test',phase:4,phases:5,headerId:'12345',headerName:'陈志红',abstract:'简单的介绍',container:'..............',start:'2020-9-15',end:'2020-10-25',count:'1245'},
{taskid:'1003',taskName:'test',phase:4,phases:5,headerId:'12345',headerName:'陈志红',abstract:'简单的介绍',container:'..............',start:'2020-9-15',end:'2020-10-25',count:'1245'},
{taskid:'1003',taskName:'test',phase:4,phases:5,headerId:'12345',headerName:'陈志红',abstract:'简单的介绍',container:'..............',start:'2020-9-15',end:'2020-10-25',count:'1245'},
{taskid:'1003',taskName:'test',phase:4,phases:5,headerId:'12345',headerName:'陈志红',abstract:'简单的介绍',container:'..............',start:'2020-9-15',end:'2020-10-25',count:'1245'},
{taskid:'1003',taskName:'test',phase:4,phases:5,headerId:'12345',headerName:'陈志红',abstract:'简单的介绍',container:'..............',start:'2020-9-15',end:'2020-10-25',count:'1245'},
{taskid:'1003',taskName:'test',phase:4,phases:5,headerId:'12345',headerName:'陈志红',abstract:'简单的介绍',container:'..............',start:'2020-9-15',end:'2020-10-25',count:'1245'},
{taskid:'1003',taskName:'test',phase:4,phases:5,headerId:'12345',headerName:'陈志红',abstract:'简单的介绍',container:'..............',start:'2020-9-15',end:'2020-10-25',count:'1245'}
];
const _totalTaskList = 1007;
const _itemsCount = 10;
const _currentPage = 5;
 export default class TaskExamine extends Component{
     constructor(props){
        super(props)
        const totalPage = Math.ceil(_totalTaskList,_itemsCount);
        const currentPage = _currentPage;
        var endPage = 0;
        var startPage = 0;
        var prePage = '';
        if(currentPage < totalPage - 5){
            endPage = currentPage + 5;
        }else{
            endPage = totalPage;
        }
        if(currentPage > 5){
            startPage = currentPage - 4;
        }else{
            startPage = 1;
        }
        
        if(currentPage > 1){
            const page = currentPage - 1;
            prePage = "/task/examine?currentPage=" + page;
            console.log(prePage);
        }
        const nextPage="/task/examine?currentPage=" + currentPage + 1;
        this.state = {
            taskList:taskList,
            totalTaskList:_totalTaskList,
            currentPage:_currentPage,
            pageNumber:[],
            startPage:startPage,
            endPage:endPage,
            selectedItems:[],
            startOrder:false,//开始时间排序(false:降序，true:升序)
            endOrder:false,//结束时间排序(false:降序，true:升序)
            prePage:prePage,
            nextPage:nextPage,
            totalPage:totalPage
        }
        
        for(var i = startPage;i<= endPage;i++){
            this.state.pageNumber.push(i);
        }
        
     }
     sortByStartTime(){

     }
     sortByEndTime(){

     }
     
     selectAllItems(e){
        const isCheck = e.target.checked;
        $("#examingMessage").find("input[type='checkbox']")
                    .attr('checked',isCheck);
        if(isCheck){
           this.setState((state)=>{
                return ({selectedItems:state.taskList})
           })
        }
        else{
            this.setState((state)=>{
                return ({selectedItems:[]})
           })
        }
     }
     selectItemCheck(e){
        const target = e.target;
        if(target.checked){
            this.state.selectedItems.push(taskList[target.value]);
        }else{
            this.state.selectedItems.pop(taskList[target.value]);
        }
        this.setState((state)=>{
            return ({
                selectedItems:state.selectedItems
            })
        });
        console.log(this.state.selectedItems.length);
     }
     sucessExamine(key,id){
        console.log('通过：'+id);
     }
     failExamine(key,id){
        console.log('不通过：'+id);
     }
     addNote(key,id){

     }
     render(){
        const currentNum = (this.state.currentPage - 1) * _itemsCount + 1;
        
         return( 
            <div className='row task-examine'>
                <div className='col-sm-1 col-md-1 col-lg-1 task-examine-nav'>
                    <ul>  
                        <li><span>待审核</span></li>
                        <li><span>已通过审核</span></li>
                        <li><span>未通过审核</span></li>
                        <li><span>转审核</span></li>
                    </ul>
                </div>
                <div className='col-sm-10 col-md-10 col-lg-10 task-examine-container'>
                    <div className='task-examine-container-title row'>
                        <div className='col-ms-2 col-md-2 col-lg-2 text-center item-div'>
                            <label className='font-label margin-top-item'>
                                <input type="checkbox" onChange={(e)=>this.selectAllItems(e)}/>全部选择/全部取消
                            </label>
                        </div>
                        <div className='col-ms-1 col-md-1 col-lg-1 text-center'>
                            <label className='font-label margin-top-item' onClick={this.sortByStartTime}>
                                <span className='glyphicon glyphicon-sort'></span>开始时间
                            </label>
                        </div>
                        <div className='col-ms-1 col-md-1 col-lg-1 text-center'>
                            <label className='font-label margin-top-item' onClick={this.sortByEndTime}>
                                <span className='glyphicon glyphicon-sort'></span>结束时间
                            </label>
                        </div>
                        <div className='col-ms-1 col-md-2 col-lg-1 text-center item-div pull-right'>
                            <button className='margin-top-item font-label btn-info' disabled={this.state.selectedItems.length > 0 ? false:true}>
                                <span className='glyphicon glyphicon-remove'></span>不通过
                            </button>
                        </div>
                        <div className='col-ms-1 col-md-2 col-lg-1 text-center item-div pull-right'>
                            <button className='margin-top-item font-label btn-info' disabled={this.state.selectedItems.length > 0 ? false:true}>
                                <span className='glyphicon glyphicon-ok'></span>通过
                            </button>
                        </div>
                    </div>
                    <div className='task-examine-container-list'>
                        <ul className='task-examine-item-list' id='examingMessage'>
                            <li className='row'>
                                <div className='col-sm-1 col-md-1 col-lg-1'>
                                <div className='row' style={{padding:'0px'}}>
                                        <div className='col-sm-4 col-md-4 col-lg-4 task-examine-second-row'>
                                            
                                        </div>
                                        <div className='col-sm-4 col-md-4 col-lg-4 text-center' style={{padding:'0px'}}>
                                            <label>编号</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-1 col-md-1 col-lg-1'>
                                    <label>项目id</label>
                                </div>
                                <div className='col-sm-1 col-md-1 col-lg-1'>
                                    <label>项目名</label>
                                </div>
                                <div className='col-sm-1 col-md-1 col-lg-1'>
                                    <p style={{fontSize:'x-small'}}>当前/总阶段</p>
                                </div>
                                <div className='col-sm-1 col-md-1 col-lg-1'>
                                    <label>组长</label>
                                </div>
                                <div className='col-sm-2 col-md-2 col-lg-2'>
                                    <label>简介</label>
                                </div>
                                <div className='col-sm-1 col-md-1 col-lg-1'>
                                    <label>内容</label>
                                </div>
                                <div className='col-sm-1 col-md-1 col-lg-1'> 
                                    <label>开始时间</label>
                                </div>
                                <div className='col-sm-1 col-md-1 col-lg-1'> 
                                    <label>结束时间</label>
                                </div>
                                <div className='col-sm-1 col-md-1 col-lg-1'> 
                                    <label>备注</label>
                                </div>
                                <div className='col-sm-1 col-md-1 col-lg-1'> 
                                    <label>修改次数</label>
                                </div>
                            </li>
                            {
                            this.state.taskList.map((item,key)=>{
                                return(
                                    <li className='row' id={item.taskid} key={key}>
                                        <div className='col-sm-1 col-md-1 col-lg-1'>
                                            <div className='row' style={{padding:'0px'}}>
                                                <div className='col-sm-4 col-md-4 col-lg-4 text-center task-examine-second-row' style={{padding:'0px',marginLeft:'10px'}}>
                                                    <input type="checkbox" value={key} onChange={(e) =>this.selectItemCheck(e)} />
                                                </div>
                                                <div className='col-sm-4 col-md-4 col-lg-4 text-center' style={{padding:'0px'}}>
                                                    <label>{key+currentNum}</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-sm-1 col-md-1 col-lg-1'>
                                            <label>{item.taskid}</label>
                                        </div>
                                        <div className='col-sm-1 col-md-1 col-lg-1'>
                                            <label>{item.taskName}</label>
                                        </div>
                                        <div className='col-sm-1 col-md-1 col-lg-1'>
                                            <label>{item.phase}/{item.phases}</label>
                                        </div>
                                        <div className='col-sm-1 col-md-1 col-lg-1' id={item.headerId}>
                                            <label>{item.headerName}</label>
                                        </div>
                                        <div className='col-sm-2 col-md-2 col-lg-2'>
                                            <label>{item.abstract}</label>
                                        </div>
                                        <div className='col-sm-1 col-md-1 col-lg-1'>
                                            <a href={'/task/examine/container?taskid='+item.taskid}>详情</a>
                                        </div>
                                        <div className='col-sm-1 col-md-1 col-lg-1'> 
                                            <label>{item.start}</label>
                                        </div>
                                        <div className='col-sm-1 col-md-1 col-lg-1'> 
                                            <label>{item.end}</label>
                                        </div>
                                        <div className='col-sm-1 col-md-1 col-lg-1'> 
                                            {/* <div className='row' style={{padding:'0px'}}>
                                                <div className='col-sm-6 col-md-6 col-lg-6 text-right' style={{padding:'0px'}} onClick={(e)=>this.sucessExamine(key,item.taskid)}>
                                                    <label style={{fontSize:'xx-small'}}>通过/</label>
                                                </div>
                                                <div className='col-sm-6 col-md-6 col-lg-6 text-left' style={{padding:'0px'}} onClick={(e)=>this.failExamine(key,item.taskid)}>
                                                    <label style={{fontSize:'xx-small' ,textAlign:"left"}}>不通过</label>
                                                </div>
                                            </div> */} 
                                            <label onClick={(e)=>this.addNote(key,item.taskid)}>添加备注</label>  
                                        </div>
                                        <div className='col-sm-1 col-md-1 col-lg-1'> 
                                            <label>{item.count}</label>    
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>  
                    </div>
                    <div className='text-center '>
                        <ul className='pagination pagination-sm page-div'>
                            <li className={this.state.currentPage - 1 > 0 ? '':'disabled'}><a href={this.state.prePage} >&laquo;</a></li>
                            {
                                this.state.pageNumber.map((item,key)=>{
                                    var href="/task/examine?currentPage="+item;
                                    return (<li key={key} className={item===this.state.currentPage ? 'active':''} disabled={this.state.currentPage + 1 > this.state.totalPage ? false:true}><a href={href}>{item}</a></li>)
                                })
                            }
                            <li><a href={this.state.nextPage} className={this.state.currentPage + 1 > this.state.totalPage ? '':'disabled'}>&raquo;</a></li>
                        </ul>
                    </div> 
                </div>
            </div>
         );
     }
     
 }