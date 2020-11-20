import React,{Component} from 'react';
import './header.css';
import $ from 'jquery';
$(function(){
    $('.nav-contol-icon').click(function(){
        if($('#leftMenuTab').is(':hidden')){
            $('#leftMenuTab').show();
            var windowHeight = $(window).height();
            $('#rightTab').removeAttr('style')
                            .css('height',windowHeight);
        }else{
            $('#leftMenuTab').hide();
            $('#rightTab').css('width','100%');
        }
    })
})
export default class HeaderMenu extends Component{
    constructor(props) {
        super(props)
        this.state = {
          messages:[],
          tasks:[],
        }
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(selectedKey){
        alert('选择 ' + selectedKey);
    }
    render(){
        return(
            <div className="container-fluid"> 
                                   
                {/*<div className='col-sm-9 col-md-9 col-lg-10'>*/}
                    <div className='collapse navbar-collapse row'>
                        <div className=' col-sm-4 col-md-4 col-lg-4'>
                            <div className='row'>
                                <div className='col-sm-1 col-md-1 col-lg-1' style={{paddingLeft:'0px'}}>
                                    <span className='glyphicon glyphicon-align-left nav-contol-icon'></span>
                                </div>
                                <ul className='nav navbar-nav col-sm-10 col-md-10 col-lg-10'>
                                    <li><a href='#home'><span className="glyphicon glyphicon-shopping-cart"></span>主页</a></li>
                                    <li><a href='#home'><span className="glyphicon glyphicon-shopping-cart"></span>列表</a></li>
                                    <li><a href='#home'><span className="glyphicon glyphicon-user"></span>其他</a></li>
                                </ul>
                            </div>    
                        </div>
                        <div className='col-sm-4 col-md-4 col-lg-4 search-div'>
                            <div className='nav navbar-nav search-div'>
                                <div className='input-group input-group-sm search-input'>
                                    <input type='text' className='form-control' />
                                    <span className='input-group-addon'><i className="glyphicon glyphicon-search"></i></span>
                                </div>
                            </div> 
                        </div>
                        <div className='col-sm-4 col-md-4 col-lg-4'>
                            <ul className='nav navbar-nav pull-right '>
                                <li className='dropdown'>
                                    <a href="#task" className="dropdown-toggle" data-toggle="dropdown">
        <span className="glyphicon glyphicon-envelope"></span>任务<span className="badge text-info">{this.state.tasks.length}</span>
                                    </a>
                                    <ul className='dropdown-menu list-group'>
                                        {this.state.tasks.map((item,key)=>{
                                            return(
                                                <li key={key} className='row list-group-item' id={item.task.id}>
                                                    <div className='col-sm-3 col-md-3 col-lg-3'>
                                                        <img src={item.url} alt='暂无图片'></img>{/* 人物图标 */}
                                                        <p>{item.user.name}</p>{/* 人物图标 */}
                                                        <p>{item.user.del}</p>{/* 人物部门职务 */}
                                                    </div>
                                                    <div className='col-sm-3 col-md-3 col-lg-3'>
                                                        <pre className='pre-scrollable'>{item.task.message}</pre>
                                                    </div>
                                                    <div className='col-sm-3 col-md-3 col-lg-3'>
                                                        <p>删除</p><p>已读</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </li>
                                <li className='dropdown'>
                                    <a href="#message" className="dropdown-toggle" data-toggle="dropdown">
                                        <span className="glyphicon glyphicon-bell"></span>消息<span className="badge text-info">{this.state.tasks.length}</span>
                                    </a>
                                    <ul className='dropdown-menu list-group'>
                                        {this.state.messages.map((item,key)=>{
                                            return (
                                                <li key={key} className='row list-group-item' id={item.user.id}>
                                                    <div className='col-sm-3 col-md-3 col-lg-3'>
                                                        <img src={item.url} alt='暂无图片'></img>{/* 人物图标 */}
                                                        <p>{item.user.name}</p>{/* 人物图标 */}
                                                        <p>{item.user.del}</p>{/* 人物部门职务 */}
                                                    </div>
                                                    <div className='col-sm-8 col-md-8 col-lg-8 text-justify text-left'>
                                                        <pre className='pre-scrollable'>{item.message}</pre>{/* 消息 */}
                                                    </div>
                                                    <div className='col-sm-1 col-md-1 col-lg-1'>
                                                        <p>回复</p><p>删除</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </li>
                                <li className='dropdown'>
                                    <a href="#support" className="dropdown-toggle" data-toggle="dropdown">
                                        <span className="glyphicon glyphicon-user"></span>我的
                                    </a>
                                    <ul className='dropdown-menu'>
                                        <li>
                                            <a href='#mine'>
                                                <span className='glyphicon glyphicon-cog'>设置</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#mine'>
                                                <span className='glyphicon glyphicon-calendar'></span>工作时间
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#mine'>
                                                <span className='glyphicon glyphicon-signal'></span>业绩
                                            </a>
                                        </li>
                                        <li className="divider"></li>                                                                                 
                                        <li>
                                            <a href='#loginin'>
                                                <span className='glyphicon glyphicon-log-in'></span>注册
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#loginOut'>
                                                <span className='glyphicon glyphicon-log-out'></span>退出
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    
                {/*</div>*/}
            </div>
        );
    }
}