let react={
    createElement:function(tag,styles,children){
        const element=document.createElement(tag);
        element.innerText=children;
        return element;

    }
}
const header1=react.createElement('h1',{},"hello kaise ho sb");
// const root=document.getElementById('root');
// root.append(header1);
let ReactDom={
    render:function(element,root)
    {
        root.append(element);
    }
}
ReactDom.render(header1,document.getElementById('root'));