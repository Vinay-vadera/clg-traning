function addElement(){
    const element=document.createElement('div');
    element.innerHTML='<p>some random text</p>'
    document.body.appendChild(element);
}