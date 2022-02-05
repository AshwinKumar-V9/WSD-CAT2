/*--JS for DOM Parser--*/

var xmlDoc
var xmlFile = './xml/registrations.xml'

//function to load xml doc
function loadXML()
{
    var xmlReq = new XMLHttpRequest;
    xmlReq.onreadystatechange = function()
    {
        console.log(xmlReq.readyState)
        if((xmlReq.readyState == 4) && (xmlReq.status == 200))
        {
            //xml doc successfully retrieved
            xmlDoc = xmlReq.responseXML
        }
    }
    xmlReq.open('GET', xmlFile, true)
    xmlReq.send()
}


//function to add new record to xml
function addNewRecord()
{
    var i
    var stu = []
    var x = document.getElementById("regForm")
    student = xmlDoc.createElement("COMPUTER-SCIENCE")
    stu[0] = xmlDoc.createElement("STU-NAME")
    stu[1] = xmlDoc.createElement("STU-UNIVERSITY")
    stu[2] = xmlDoc.createElement("STU-PHONE")
    stu[3] = xmlDoc.createElement("STU-EMAIL")
    for(i = 0; i < 4; i++)
    {
        stu[i].appendChild(xmlDoc.createTextNode(x.elements[i].value))
        student.appendChild(stu[i])
    }
    xmlDoc.documentElement.appendChild(student);
    console.log("Record added: " + x.elements[0].value)
    displayTable()
}