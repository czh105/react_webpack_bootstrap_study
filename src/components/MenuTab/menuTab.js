import React,{Component} from 'react';
import './menuTab.css';
import './menuTabEvent';

export default class MenuTab extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return(
            <div className='menu-tab'>
                
                <div className='menu-tab-header'>
                    <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collpase'>
                            <span className='sr-only'>Toggle navigation</span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                        </button>
                        <a href='#home' className='navbar-brand' style={{marginLeft:'20px'}}>MyAPP</a>
                    </div>
                </div>
                <ul className='menu-tab-container'>
                    <li className='left-menu-item'>
                        <a href="#task">
                            <span className='glyphicon glyphicon-th-list'></span>
                            <span className='item-text'>任务管理</span>
                            <span className='pull-right glyphicon glyphicon-chevron-right item-icon'></span>    
                        </a>
                        <ul className='second-item-list'>
                            <li className='second-item'>
                                <a href="#home/home1">
                                    <span className='glyphicon glyphicon-user'></span>
                                    <span className='item-text'>我的任务</span>   
                                </a>
                            </li>
                            <li className='second-item'>
                                <a href="#task/examine">
                                    <span className='glyphicon glyphicon-tasks'></span>
                                    <span className='item-text'>任务审核</span>   
                                </a>
                            </li>
                            <li className='second-item'>
                                <a href="#home/home1">
                                    <span className='glyphicon glyphicon-edit'></span>
                                    <span className='item-text'>未开始任务</span>   
                                </a>
                            </li>
                            <li className='second-item'>
                                <a href="#home/home1">
                                    <span className='glyphicon glyphicon-saved'></span>
                                    <span className='item-text'>已完成任务</span>   
                                </a>
                            </li>
                            <li className='second-item'>
                                <a href="#home/home1">
                                    <span className='glyphicon glyphicon-plus'></span>
                                    <span className='item-text'>任务创建</span>   
                                </a>
                            </li>
                            <li className='second-item'>
                                <a href="#home/home1">
                                    <span className='glyphicon glyphicon-pencil'></span>
                                    <span className='item-text'>任务进行中</span>   
                                </a>
                            </li>
                            
                            <li className='second-item'>
                                <a href="#home/home1">
                                    <span className='glyphicon glyphicon-time'></span>
                                    <span className='item-text'>任务操作记录</span>   
                                </a>
                            </li>
                        </ul>
                        
                    </li>
                    <li className='left-menu-item'>
                        <a href="#home/home1">
                            <span className='glyphicon glyphicon-asterisk'></span>
                            <span className='item-text'>团队管理</span> 
                            <span className='pull-right glyphicon glyphicon-chevron-right item-icon'></span>
                        </a>
                        <ul className='second-item-list'>
                            <li className='second-item'>
                                <a href="#home/home1">
                                    <span className='glyphicon glyphicon-check'></span>
                                    <span className='item-text'>组员身份</span>   
                                    
                                </a>
                            </li>
                            <li className='second-item'>
                                <a href="#home/home1">
                                    <span className='glyphicon glyphicon-tower'></span>
                                    <span className='item-text'>组长身份</span>   
                                </a>
                            </li>
                            <li className='second-item'>
                                <a href="#home/home1">
                                    <span className='glyphicon glyphicon-import'></span>
                                    <span className='item-text'>组员申请</span>   
                                </a>
                            </li>
                        </ul>
 
                    </li>
                    <li className='left-menu-item'>
                        <a href="#home/home1">
                            <span className='glyphicon glyphicon-stats'></span>
                            <span className='item-text'>图表</span> 
                            <span className='pull-right glyphicon glyphicon-chevron-right item-icon'></span>
                        </a>
                        <ul className='second-item-list'>
                            <li className='second-item'>
                                <a href="#home/home1">
                                    <span className='glyphicon glyphicon-tree-conifer'></span>
                                    <span className='item-text'>树形</span>   
                                </a>
                            </li>
                            <li className='second-item'>
                                <a href="#home/home1">
                                    <span className='glyphicon glyphicon-map-marker'></span>
                                    <span className='item-text'>中国地图</span>   
                                </a>
                            </li>
                            <li className='second-item'>
                                <a href="#home/home1">
                                    <span className='glyphicon glyphicon-shopping-cart'></span>
                                    <span className='item-text'>折线图</span>   
                                </a>
                            </li>
                            <li className='second-item'>
                                <a href="#home/home1">
                                    <span className='glyphicon glyphicon-shopping-cart'></span>
                                    <span className='item-text'>捆绑图</span>   
                                </a>
                            </li>
                            <li className='second-item'>
                                <a href="#home/home1">
                                    <span className='glyphicon glyphicon-shopping-cart'></span>
                                    <span className='item-text'>饼状图</span>   
                                </a>
                            </li>
                        </ul>
                         
                    </li>
                </ul>
            </div>
            
        )
    }
}