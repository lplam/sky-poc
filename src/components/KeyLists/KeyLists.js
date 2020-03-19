import React, { Component } from 'react';


class KeyLists extends Component {
    render() {

        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Danh sach san pham</h3>
                </div>
                <div className="panel-body">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>KEY</th>
                                <th>NAME</th>
                                <th>DATE INIT</th>
                                <th>DATE END</th>
                                <th>ACTIVE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                        
                           {this.props.children}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}







export default KeyLists;