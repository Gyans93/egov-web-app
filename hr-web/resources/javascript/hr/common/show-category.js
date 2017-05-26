class ShowCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state={list:[],categorySet:{
      name:"",
      description:"",
      active:""
    }
  }
}


  componentDidMount() {
    if(window.opener && window.opener.document) {
       var logo_ele = window.opener.document.getElementsByClassName("homepage_logo");
       if(logo_ele && logo_ele[0]) {
         document.getElementsByClassName("homepage_logo")[0].src = window.location.origin + logo_ele[0].getAttribute("src");
       }
    }
     
    $('#hp-citizen-title').text(titleCase(getUrlVars()["type"]) + " Category");
    var _this = this;
    getDropdown("category", function(res) {
        _this.setState({
          list: res
        });
    })
  }

  componentDidUpdate(prevProps, prevState)
  {
      if (prevState.list.length!=this.state.list.length) {
          $('#categoryTable').DataTable({
            dom: 'Bfrtip',
            buttons: [
                     'copy', 'csv', 'excel', 'pdf', 'print'
             ],
             ordering: false
          });
      }
  }



  close() {
      open(location, '_self').close();
  }


  render() {
    let {list}=this.state;
    let {name,description,active}=this.state.categorySet;
    var mode = getUrlVars()["type"];

    const renderAction=function(type,id){
      if (type==="update") {

              return (
                      <a href={`app/hr/master/category.html?id=${id}&type=${type}`} className="btn btn-default btn-action"><span className="glyphicon glyphicon-pencil"></span></a>
              );

    }else {
            return (
                    <a href={`app/hr/master/category.html?id=${id}&type=${type}`} className="btn btn-default btn-action"><span className="glyphicon glyphicon-modal-window"></span></a>
            );
        }
}


    const renderBody=function()
    {
      return list.map((item,index)=>
      {
            return (<tr key={index}>
                    <td>{index+1}</td>
                    <td data-label="name">{item.name}</td>
                    <td data-label="description">{item.description}</td>
                    <td data-label="active">{item.active?"true":"false"}</td>
                    <td data-label="action">
                    {renderAction(getUrlVars()["type"],item.id)}
                    </td>
                </tr>
            );

      })
    }

      return (<div>
        <h3>{titleCase(getUrlVars()["type"])} Category</h3>
        <table id="categoryTable" className="table table-bordered">
            <thead>
                <tr>
                    <th>Sl No.</th>
                    <th>Category Name</th>
                    <th>Description</th>
                    <th>Active</th>
                    <th>Action</th>

                </tr>
            </thead>

            <tbody id="employeeSearchResultTableBody">
                {
                    renderBody()
                }
            </tbody>
        </table>
        <div className="text-center">
            <button type="button" className="btn btn-close"onClick={(e)=>{this.close()}}>Close</button>
        </div>
      </div>
    );
  }
}


ReactDOM.render(
  <ShowCategory />,
  document.getElementById('root')
);
