var menu=document.getElementById('Menu');

var container=document.getElementById('ArtCon');

var Text=React.createClass({

    render:function(){
        return <h1>{this.props.text}</h1>;

    }
});

var ArtItem=React.createClass({
    
    getInitialState: function() {
        return {item:this.props.item};
    },
    
    handleClick:function(e){
        ReactDOM.render(<Text text={this.state.item.text}/>,container);
    },
    
    render:function(){
        return <a href="#" className="list-group-item" onClick={this.handleClick} >{this.props.item.author}</a>;
    }
    
});

var ArtList=React.createClass({
    render:function(){
        var nodes=this.props.data.map(function(item){ return <ArtItem item={item}/>; });
        return <div className="list-group">{nodes}</div>;
    }
});

$.ajax({
    url:'/dm.json',
    type:'get',
    dataType:'json',
    success:function(d){
        ReactDOM.render(<ArtList data={d}/>,menu);        
    }
});

