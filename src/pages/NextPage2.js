import React, { Component } from 'react';

export class NextPage2 extends Component {

    state = {
        apidata: [],
        pageNo: 1,
        perPage: 1,
        total: "",
    };

    onSubmit = e => {
        e.preventDefault();

        let pageNo=e.target.getAttribute('pageNo');
        let perPage=e.target.getAttribute('perPage');

        if(perPage==null){
            perPage=this.state.perPage;
        }
        if(pageNo==null){
            pageNo=this.state.pageNo;
        }
        console.log(pageNo,perPage);

        const url = 'https://reqres.in/api/users?page='+pageNo+'&per_page='+perPage;
        fetch(url).then((res)=>{      
           return  res.json();     
        }).then((x)=>{
            this.setState({apidata:x.data});
        });

        this.setState({pageNo:pageNo,perPage:perPage});
   
    }

    async componentDidMount() {

        const url = 'https://reqres.in/api/users?page='+this.state.pageNo+'&per_page='+this.state.perPage;
        fetch(url).then((res)=>{      
           return  res.json();     
        }).then((x)=>{
            this.setState({apidata:x.data, total: x.total_pages});
        });
    
    }

    render() {

        var { apidata, total, perPage } = this.state;

        const pages = [];
        for ( var i =0; i<(total/perPage); i++){
        pages.push(
            <li className="page-item">
                <button className="page-link" pageNo={i+1} onClick= {e =>this.onSubmit(e)}>{i+1}</button>
            </li>
        )}

        const perPages = [];
        for ( var i =0; i<total; i++){
        perPages.push(
            <li className="page-item">
                <button className="page-link" perPage={i+1} onClick= {e =>this.onSubmit(e)}>{i+1}</button>
            </li>
        )}

        return (
            <div>
                <h3>This is Page 2</h3>
                <br/>
                <body className="container justify-content-center">
                    {apidata.map(entry => (
                        <div key={entry.id}>
                            <div className="card-columns">
                                <div className="card bg-light">
                                    <div className="card-body">
                                        <img className="card-img-top rounded" src={entry.avatar}/>
                                        <h4 className="card-title">{entry.first_name} {entry.last_name}</h4>
                                        <div className="card-body">Email: {entry.email}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                </body>
                <br/>
                

                <div>Page</div>
                <ul className="pagination pagination-sm justify-content-center">
                    {pages}
                </ul>

                <div>Per Page</div>
                <ul className="pagination pagination-sm justify-content-center">
                    {perPages}
                </ul>

            
            </div>
        )
    }
}

export default NextPage2;
