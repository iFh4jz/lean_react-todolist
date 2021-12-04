import React, {Component} from "react";
import axios from "axios";
export default class Search extends Component {
    search = () => {
        // 获取用户输入
        // 发送网络请求
        const {keyWordNode:{value:keyWord}} = this
        axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
            response => {
                this.props.saveUsers(response.data.items)
                },
            error => {console.log('失败了', error);}
        )
    }

    search1 = () => {
        // 获取用户输入
        // 发送网络请求
        const {keyWordNode:{value:keyWord}} = this
        axios.get(`http://localhost:3000/api2/search/users/${keyWord}`).then(
            response => {console.log('成功了', response.data);},
            error => {console.log('失败了', error);}
        )
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索GitHub用户</h3>
                <div>
                    <input ref={c => this.keyWordNode = c} type="text" placeholder="enter the name you search"/>&nbsp;
                    <button onClick={this.search}>搜索</button>
                    <button onClick={this.search1}>搜索假的</button>
                </div>
            </section>
        )
    }
}