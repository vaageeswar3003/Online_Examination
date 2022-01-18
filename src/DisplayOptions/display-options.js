function DisplayOptions(options) {

    var options1 = [];
    

    for(var a in options.opt){
        options1.push(<li>{options.opt[a]}</li>);
    }
    return (<>{options1}</>);
}

export default DisplayOptions;