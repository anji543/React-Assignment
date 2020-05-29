import React, { Component } from 'react';

const stocks = require('stock-ticker-symbol');

var yahooFinance = require('yahoo-finance');

export class NextPage3 extends Component {

    state = {
        search: "",
        details: [],
        ticker: "",
        finance: []
    }

    onClick = e => {
        this.setState({ search: e.name, ticker: e.ticker});
        console.log(this.state.ticker);

    }

    onChange = e => {
        this.setState({search: e.target.value, finance: []});

    }

    onSubmit = () => {
        yahooFinance.quote({
            symbol: this.state.ticker,
            modules: ['summaryProfile']       // optional; default modules.
          }, (err, quote) => {
            this.setState({finance: quote.summaryProfile})
            console.log(this.state.finance)
        });
    }


    render() {
        
        var { search, finance } = this.state;

        if(search!==""){
            var items = stocks.search(search)
            
        }
        else{ var items = [] }


        return (
            <div>
                <h4>This is Page3</h4>
                <body className="container justify-content-center">
                    This the Body of Third Page
                    <br/>
    
                    <div className="input-group m-3 mdb-autocomplete">
                        <input
                        placeHolder='Search'
                        name='Search'
                        type='text'
                        value={search}
                        className="form-control"
                        onChange={e => this.onChange(e)}/>
                        <div className="input-group-append">
                            <button className="btn btn-success" type="submit" onClick={()=> this.onSubmit()}>Go</button>
                        </div>
                    </div>
                    
                    <ul>
                        {items.map(item => <li onClick={()=> this.onClick(item)}>{item.name}, {item.ticker}</li>)}
                    </ul>


                    <div>
                        <div className="card bg-light">
                            <div className="card-body">
                                <div className="font-weight-bold">Company Name:</div>  {search}
                                <br/>
                                <div className="font-weight-bold">Address: </div>{finance.address1}
                                <br/>
                                <div className="font-weight-bold">City: </div>{finance.city}
                                <br/>
                                <div className="font-weight-bold">State: </div>{finance.state}
                                <br/>
                                <div className="font-weight-bold">Zip Code: </div>{finance.zip}
                                <br/>
                                <div className="font-weight-bold">Country: </div>{finance.country}
                                <br/>
                                <div className="font-weight-bold">Phone Number: </div>{finance.phone}
                                <br/>
                                <div className="font-weight-bold">Website: </div>{finance.website}
                                <br/>
                                <div className="font-weight-bold">Industry: </div>{finance.industry}
                                <br/>
                                <div className="font-weight-bold">Sector: </div>{finance.sector}
                                <br/>
                                <div className="font-weight-bold">Business Summary: </div>{finance.longBusinessSummary}
                                <br/>
                                <div className="font-weight-bold">Full-Time-Employees: </div>{finance.fullTimeEmployees}
                                <br/>
                                <div className="font-weight-bold">Company-Officers: </div>{finance.companyOfficers}
                                <br/>
                                <div className="font-weight-bold">Max Age: </div>{finance.maxAge}
                            </div>
                        </div>
                    </div>
                </body>
                <br/>
                
                
            </div>
        )
    }
}

export default NextPage3;
