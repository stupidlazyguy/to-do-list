import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      txtName:'',
      txtPassword:''
    }
  }
  onHandleChange=(event)=>{
    // this.setState({username:event.target.value})
    var target = event.target
    var name = target.name
    var value = target.value
    this.setState({[name]:value})
    console.log(name)
    console.log(value)
  }
  onSubmit=(event)=>{
    event.preventDefault()
    console.log(this.state)
  }
  onGender(event){
    
  }
  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-lg-8 col-md-8 mt-8">
            <div className="card card-primary">
              <div className="card-heading bg-primary title">
                <h4 className="card-title title-heading">From</h4>
              </div>
              <div className="card-body">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">UserName</label>
                    <input name="txtName" className="form-control" type="text" id="name" onChange={this.onHandleChange}></input>
                    <label  htmlFor="password">Password</label>
                    <input name="txtPassword" className="form-control" type="password" id="password" onChange={this.onHandleChange}></input>
                  
                  <div className="form-group">
                    <select value={2} onChange={this.onHandleChange} name="lang">
                      <option value={0} >EN</option>
                      <option value={1} >EU</option>
                      <option value={2} >CN</option>
                    </select>
                  </div>
                  
                  <div className="form-group mt-1">
                        <input type="radio" id="male" name="gender" value="male" onClick={this.onGender}/>
                          <label htmlFor="male">Male</label><br/>
                        <input type="radio" id="female" name="gender" value="female" onClick={this.onGender}/>
                          <label htmlFor="female">Female</label><br/>
                        <input type="radio" id="other" name="gender" value="other" onClick={this.onGender}/>
                          <label htmlFor="other">Other</label><br/>
                      <textarea rows="10" cols="30" name="textarea" onChange={this.onHandleChange}></textarea>
                  </div>                   
                  </div>
                  <button type="submit" className="btn btn-primary mr-2">SUBMIT</button>
                  <button type="reset" className="btn btn-outline-info">RESET</button>
                </form>
              </div>
              </div>
            </div>
        </div>
        
      </div>
    )
  }
}

export default App;
